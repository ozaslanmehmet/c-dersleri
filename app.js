(function () {
  const ALL_ITEMS = [
    ...(window.COURSE_PART1 || []),
    ...(window.COURSE_PART2 || [])
  ];

  const STORAGE_KEY = "tubitak_c_progress_v1";
  let state = loadState();
  let currentId = ALL_ITEMS[0]?.id || "";
  let examTimerInterval = null;
  let examSecondsLeft = 0;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { completed: [], theme: "light", quizAnswers: {} };
    } catch {
      return { completed: [], theme: "light", quizAnswers: {} };
    }
  }
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
  }

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme || "light");
    const btn = document.getElementById("themeToggle");
    if (btn) btn.textContent = state.theme === "dark" ? "☀️" : "🌙";
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function wrapCProgram(code) {
    if (code.includes("int main")) {
      if (!code.includes("#include")) {
        return "#include <stdio.h>\n#include <stdbool.h>\n\n" + code;
      }
      return code;
    }
    return "#include <stdio.h>\n#include <stdbool.h>\n\nint main() {\n" +
      code.split("\n").map(l => "    " + l).join("\n") +
      "\n    return 0;\n}";
  }

  function renderCodeCard(code, title = "C Kodu") {
    const encoded = encodeURIComponent(code);
    return `
      <div class="code-card">
        <div class="code-card-header">
          <span>${escapeHtml(title)}</span>
          <div class="code-card-actions">
            <button class="code-btn" data-copy="${encoded}">📋 Kopyala</button>
            <button class="code-btn" data-run="${encoded}">▶ Çalıştır</button>
          </div>
        </div>
        <pre><code>${escapeHtml(code)}</code></pre>
      </div>
    `;
  }

  function renderNav(filter = "") {
    const nav = document.getElementById("navList");
    const q = filter.trim().toLowerCase();
    const lessons = ALL_ITEMS.filter(i => i.type === "lesson");
    const exams = ALL_ITEMS.filter(i => i.type === "exam");

    let html = "";
    const filteredLessons = lessons.filter(i => !q || i.title.toLowerCase().includes(q) || (i.keywords || "").toLowerCase().includes(q));
    if (filteredLessons.length) {
      html += `<div class="nav-group-label">Ders Üniteleri</div>`;
      filteredLessons.forEach(item => {
        const done = state.completed.includes(item.id);
        html += `<button class="nav-item ${item.id === currentId ? "active" : ""}" data-id="${item.id}">
          <span>${escapeHtml(item.shortTitle || item.title)}</span>
          ${done ? '<span class="nav-check">✓</span>' : ""}
        </button>`;
      });
    }

    const filteredExams = exams.filter(i => !q || i.title.toLowerCase().includes(q));
    if (filteredExams.length) {
      html += `<div class="nav-group-label">Deneme Sınavları</div>`;
      filteredExams.forEach(item => {
        const done = state.completed.includes(item.id);
        html += `<button class="nav-item ${item.id === currentId ? "active" : ""}" data-id="${item.id}">
          <span>${escapeHtml(item.shortTitle || item.title)}</span>
          ${done ? '<span class="nav-check">✓</span>' : ""}
        </button>`;
      });
    }

    nav.innerHTML = html || `<p style="padding:1rem;color:var(--text-muted);font-size:0.85rem;">Sonuç bulunamadı.</p>`;
    nav.querySelectorAll(".nav-item").forEach(btn => {
      btn.addEventListener("click", () => {
        selectItem(btn.dataset.id);
        document.getElementById("sidebar").classList.remove("open");
      });
    });
  }

  function updateProgress() {
    const total = ALL_ITEMS.length;
    const done = state.completed.filter(id => ALL_ITEMS.some(i => i.id === id)).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    document.getElementById("progressText").textContent = `%${pct} Tamamlandı (${done}/${total})`;
    document.getElementById("progressFill").style.width = `${pct}%`;

    const markBtn = document.getElementById("markCompleteBtn");
    const isDone = state.completed.includes(currentId);
    markBtn.textContent = isDone ? "✓ Tamamlandı (Geri Al)" : "✓ Tamamlandı İşaretle";
  }

  function renderSectionBlocks(blocks) {
    return (blocks || []).map(b => {
      if (b.kind === "h2") return `<h2>${escapeHtml(b.text)}</h2>`;
      if (b.kind === "h3") return `<h3>${escapeHtml(b.text)}</h3>`;
      if (b.kind === "p") return `<p>${b.html || escapeHtml(b.text)}</p>`;
      if (b.kind === "ul") return `<ul>${b.items.map(it => `<li>${it}</li>`).join("")}</ul>`;
      if (b.kind === "code") return renderCodeCard(b.code, b.title || "C Kodu");
      if (b.kind === "callout") {
        return `<div class="callout ${b.variant || ""}">
          ${b.title ? `<span class="callout-title">${escapeHtml(b.title)}</span>` : ""}
          <div>${b.html || escapeHtml(b.text)}</div>
        </div>`;
      }
      if (b.kind === "table") {
        return `<table class="data-table">
          <thead><tr>${b.headers.map(h => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>
          <tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>`;
      }
      return "";
    }).join("");
  }

  function renderPracticeQuiz(item) {
    if (!item.quiz || !item.quiz.length) return "";
    const saved = state.quizAnswers[item.id] || {};
    let correctCount = 0;
    let answeredCount = 0;
    item.quiz.forEach((q, idx) => {
      if (saved[idx]) {
        answeredCount++;
        if (saved[idx] === q.answer) correctCount++;
      }
    });

    let html = `
      <h2>Pekiştirme Soruları (${item.quiz.length} Soru)</h2>
      <div class="quiz-header-bar">
        <div><strong>Alıştırma Modu:</strong> Bir şıkka tıkladığınızda doğru/yanlış anında gösterilir.</div>
        <div style="display:flex;align-items:center;gap:0.75rem;">
          <span id="practiceScore">Skor: <strong>${correctCount} / ${answeredCount}</strong></span>
          <button class="btn-outline" id="resetQuizBtn">Testi Sıfırla</button>
        </div>
      </div>
    `;

    item.quiz.forEach((q, idx) => {
      const chosen = saved[idx];
      html += `<div class="quiz-card" data-qidx="${idx}">
        <div class="quiz-q-title">Soru ${idx + 1}${q.label ? " — " + escapeHtml(q.label) : ""}</div>
        <p>${escapeHtml(q.prompt || "Aşağıdaki C kod parçası çalıştırıldığında ekran çıktısı ne olur?")}</p>
        ${q.code ? renderCodeCard(q.code, "Soru " + (idx + 1) + " Kodu") : ""}
        <div class="quiz-options">
          ${q.options.map((opt, oi) => {
            const letter = ["A", "B", "C", "D", "E"][oi];
            let cls = "quiz-option";
            if (chosen) {
              if (letter === q.answer) cls += " correct";
              else if (letter === chosen) cls += " wrong";
            }
            return `<button class="${cls}" data-letter="${letter}" ${chosen ? "disabled" : ""}>
              <strong>${letter})</strong> <span>${escapeHtml(opt)}</span>
            </button>`;
          }).join("")}
        </div>
        ${chosen ? `<div class="quiz-feedback ${chosen === q.answer ? "ok" : "err"}">
          ${chosen === q.answer ? "✓ Doğru cevap!" : `✕ Yanlış. Doğru cevap: ${q.answer}`}
        </div>` : `<div class="quiz-feedback"></div>`}
      </div>`;
    });
    return html;
  }

  function renderExamView(item) {
    const saved = state.quizAnswers[item.id] || {};
    const submitted = !!saved.__submitted;
    let html = `<h1 class="chapter-title">${escapeHtml(item.title)}</h1>`;
    if (item.subtitle) html += `<p style="color:var(--text-muted)">${escapeHtml(item.subtitle)}</p>`;

    html += `
      <div class="quiz-header-bar">
        <div>
          <strong>Sınav Modu (${item.quiz.length} Soru)</strong><br/>
          <small style="color:var(--text-muted)">TÜBİTAK kuralı: 4 yanlış 1 doğruyu götürür.</small>
        </div>
        <div style="display:flex;align-items:center;gap:0.75rem;">
          <span id="examTimer" class="exam-timer">⏱ 25:00</span>
          ${!submitted ? `<button id="startTimerBtn" class="btn-outline">Süreyi Başlat</button>` : ""}
          <button id="resetQuizBtn" class="btn-outline">Sınavı Sıfırla</button>
        </div>
      </div>
    `;

    if (submitted) {
      let dogru = 0, yanlis = 0, bos = 0;
      item.quiz.forEach((q, idx) => {
        const c = saved[idx];
        if (!c) bos++;
        else if (c === q.answer) dogru++;
        else yanlis++;
      });
      const net = (dogru - yanlis / 4).toFixed(2);
      html += `<div class="exam-result-box">
        <div class="stat-card"><span class="stat-num" style="color:var(--success)">${dogru}</span><span class="stat-label">Doğru</span></div>
        <div class="stat-card"><span class="stat-num" style="color:var(--danger)">${yanlis}</span><span class="stat-label">Yanlış</span></div>
        <div class="stat-card"><span class="stat-num">${bos}</span><span class="stat-label">Boş</span></div>
        <div class="stat-card"><span class="stat-num" style="color:var(--primary)">${net}</span><span class="stat-label">TÜBİTAK Net</span></div>
      </div>`;
    }

    item.quiz.forEach((q, idx) => {
      const chosen = saved[idx];
      html += `<div class="quiz-card" data-qidx="${idx}">
        <div class="quiz-q-title">Soru ${idx + 1}</div>
        <p>${escapeHtml(q.prompt || "Aşağıdaki C program parçası çalıştırıldığında ekran çıktısı ne olur?")}</p>
        ${q.code ? renderCodeCard(q.code, "Soru " + (idx + 1) + " Kodu") : ""}
        <div class="quiz-options">
          ${q.options.map((opt, oi) => {
            const letter = ["A", "B", "C", "D", "E"][oi];
            let cls = "quiz-option";
            if (submitted) {
              if (letter === q.answer) cls += " correct";
              else if (letter === chosen) cls += " wrong";
            } else if (letter === chosen) {
              cls += " selected";
            }
            return `<button class="${cls}" data-letter="${letter}" ${submitted ? "disabled" : ""}>
              <strong>${letter})</strong> <span>${escapeHtml(opt)}</span>
            </button>`;
          }).join("")}
        </div>
        ${submitted ? `<div class="quiz-feedback ${chosen === q.answer ? "ok" : "err"}">
          ${!chosen ? `Boş bırakıldı. Doğru cevap: ${q.answer}` : (chosen === q.answer ? "✓ Doğru!" : `✕ Yanlış (Seçiminiz: ${chosen}). Doğru cevap: ${q.answer}`)}
        </div>` : ""}
      </div>`;
    });

    if (!submitted) {
      html += `<div style="text-align:center;margin:1.5rem 0;">
        <button id="submitExamBtn" class="btn-primary" style="padding:0.8rem 2rem;font-size:1rem;">📝 Sınavı Bitir ve Puanla</button>
      </div>`;
    }
    return html;
  }

  function bindContentEvents(item) {
    const area = document.getElementById("contentArea");

    area.querySelectorAll("[data-copy]").forEach(btn => {
      btn.addEventListener("click", () => {
        const code = decodeURIComponent(btn.dataset.copy);
        navigator.clipboard?.writeText(code);
        const old = btn.textContent;
        btn.textContent = "✓ Kopyalandı";
        setTimeout(() => btn.textContent = old, 1200);
      });
    });

    area.querySelectorAll("[data-run]").forEach(btn => {
      btn.addEventListener("click", () => {
        const code = decodeURIComponent(btn.dataset.run);
        openRunner(wrapCProgram(code));
      });
    });

    const resetBtn = document.getElementById("resetQuizBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        delete state.quizAnswers[item.id];
        saveState();
        clearInterval(examTimerInterval);
        selectItem(item.id);
      });
    }

    if (item.type === "lesson" && item.quiz) {
      area.querySelectorAll(".quiz-card").forEach(card => {
        const qidx = Number(card.dataset.qidx);
        card.querySelectorAll(".quiz-option").forEach(optBtn => {
          optBtn.addEventListener("click", () => {
            if (!state.quizAnswers[item.id]) state.quizAnswers[item.id] = {};
            state.quizAnswers[item.id][qidx] = optBtn.dataset.letter;
            saveState();
            selectItem(item.id, true);
          });
        });
      });
    }

    if (item.type === "exam") {
      const saved = state.quizAnswers[item.id] || {};
      if (!saved.__submitted) {
        area.querySelectorAll(".quiz-card").forEach(card => {
          const qidx = Number(card.dataset.qidx);
          card.querySelectorAll(".quiz-option").forEach(optBtn => {
            optBtn.addEventListener("click", () => {
              if (!state.quizAnswers[item.id]) state.quizAnswers[item.id] = {};
              const cur = state.quizAnswers[item.id][qidx];
              state.quizAnswers[item.id][qidx] = cur === optBtn.dataset.letter ? undefined : optBtn.dataset.letter;
              saveState();
              card.querySelectorAll(".quiz-option").forEach(b => b.classList.remove("selected"));
              if (state.quizAnswers[item.id][qidx]) optBtn.classList.add("selected");
            });
          });
        });

        const startBtn = document.getElementById("startTimerBtn");
        if (startBtn) {
          startBtn.addEventListener("click", () => {
            clearInterval(examTimerInterval);
            examSecondsLeft = 25 * 60;
            startBtn.disabled = true;
            startBtn.textContent = "Süre İşliyor...";
            examTimerInterval = setInterval(() => {
              examSecondsLeft--;
              const m = String(Math.floor(examSecondsLeft / 60)).padStart(2, "0");
              const s = String(examSecondsLeft % 60).padStart(2, "0");
              const el = document.getElementById("examTimer");
              if (el) el.textContent = `⏱ ${m}:${s}`;
              if (examSecondsLeft <= 0) {
                clearInterval(examTimerInterval);
                document.getElementById("submitExamBtn")?.click();
              }
            }, 1000);
          });
        }

        const submitBtn = document.getElementById("submitExamBtn");
        if (submitBtn) {
          submitBtn.addEventListener("click", () => {
            clearInterval(examTimerInterval);
            if (!state.quizAnswers[item.id]) state.quizAnswers[item.id] = {};
            state.quizAnswers[item.id].__submitted = true;
            if (!state.completed.includes(item.id)) state.completed.push(item.id);
            saveState();
            selectItem(item.id);
          });
        }
      }
    }
  }

  function selectItem(id, keepScroll = false) {
    const item = ALL_ITEMS.find(i => i.id === id) || ALL_ITEMS[0];
    if (!item) return;
    clearInterval(examTimerInterval);
    currentId = item.id;

    const scrollY = window.scrollY;
    const area = document.getElementById("contentArea");

    if (item.type === "exam") {
      area.innerHTML = renderExamView(item);
    } else {
      area.innerHTML = `<h1 class="chapter-title">${escapeHtml(item.title)}</h1>` +
        renderSectionBlocks(item.blocks) +
        renderPracticeQuiz(item);
    }

    bindContentEvents(item);
    renderNav(document.getElementById("searchInput").value);
    updateProgress();

    const idx = ALL_ITEMS.findIndex(i => i.id === currentId);
    document.getElementById("prevBtn").disabled = idx <= 0;
    document.getElementById("nextBtn").disabled = idx >= ALL_ITEMS.length - 1;

    if (keepScroll) window.scrollTo(0, scrollY);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Interactive C Runner (Wandbox GCC API)
  function openRunner(initialCode) {
    document.getElementById("runnerCode").value = initialCode || `#include <stdio.h>\n\nint main() {\n    printf("Merhaba TUBITAK!\\n");\n    return 0;\n}`;
    document.getElementById("runnerOutput").textContent = 'Çalıştırmak için "Derle ve Çalıştır" butonuna basın...';
    document.getElementById("runnerStatus").textContent = "";
    document.getElementById("runnerModal").classList.remove("hidden");
  }

  async function runCCode() {
    const code = document.getElementById("runnerCode").value;
    const out = document.getElementById("runnerOutput");
    const status = document.getElementById("runnerStatus");
    const btn = document.getElementById("runCodeBtn");

    btn.disabled = true;
    status.textContent = "GCC ile derleniyor...";
    out.textContent = "Lütfen bekleyin...";

    try {
      const resp = await fetch("https://wandbox.org/api/compile.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          compiler: "gcc-head-c",
          code: code
        })
      });
      if (!resp.ok) throw new Error("Sunucu yanıt vermedi (" + resp.status + ")");
      const data = await resp.json();
      const combined = [
        data.compiler_error ? "[Derleme Hatası]\n" + data.compiler_error : "",
        data.program_output || "",
        data.program_error ? "[Çalışma Hatası]\n" + data.program_error : ""
      ].filter(Boolean).join("\n");
      out.textContent = combined || "(Çıktı üretilmedi)";
      status.textContent = data.status === "0" ? "✓ Başarıyla çalıştı (GCC)" : "⚠ Çıkış kodu: " + data.status;
    } catch (err) {
      out.textContent = "Çevrimiçi derleyiciye ulaşılamadı (" + err.message + ").\nKodu kopyalayıp 'OnlineGDB\'de Aç' butonu ile anında çalıştırabilirsiniz.";
      status.textContent = "Bağlantı hatası";
    } finally {
      btn.disabled = false;
    }
  }

  // Global bindings
  document.getElementById("themeToggle").addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveState();
    applyTheme();
  });
  document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("open");
  });
  document.getElementById("searchInput").addEventListener("input", e => renderNav(e.target.value));
  document.getElementById("prevBtn").addEventListener("click", () => {
    const idx = ALL_ITEMS.findIndex(i => i.id === currentId);
    if (idx > 0) selectItem(ALL_ITEMS[idx - 1].id);
  });
  document.getElementById("nextBtn").addEventListener("click", () => {
    const idx = ALL_ITEMS.findIndex(i => i.id === currentId);
    if (idx < ALL_ITEMS.length - 1) selectItem(ALL_ITEMS[idx + 1].id);
  });
  document.getElementById("markCompleteBtn").addEventListener("click", () => {
    if (state.completed.includes(currentId)) {
      state.completed = state.completed.filter(id => id !== currentId);
    } else {
      state.completed.push(currentId);
    }
    saveState();
    renderNav(document.getElementById("searchInput").value);
    updateProgress();
  });
  document.getElementById("resetProgressBtn").addEventListener("click", () => {
    if (confirm("Tüm ilerlemeniz ve test yanıtlarınız sıfırlansın mı?")) {
      state = { completed: [], theme: state.theme, quizAnswers: {} };
      saveState();
      selectItem(currentId);
    }
  });
  document.getElementById("playgroundBtn").addEventListener("click", () => openRunner());
  document.getElementById("closeRunnerBtn").addEventListener("click", () => {
    document.getElementById("runnerModal").classList.add("hidden");
  });
  document.getElementById("runCodeBtn").addEventListener("click", runCCode);
  document.getElementById("copyRunnerBtn").addEventListener("click", () => {
    navigator.clipboard?.writeText(document.getElementById("runnerCode").value);
    document.getElementById("runnerStatus").textContent = "✓ Kod kopyalandı";
  });

  applyTheme();
  selectItem(currentId);
})();
