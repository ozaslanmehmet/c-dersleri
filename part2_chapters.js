window.COURSE_PART2 = [
  {
    "id": "bolum-6a",
    "type": "lesson",
    "shortTitle": "6.1 Döngüler: while & do-while",
    "title": "BÖLÜM 6 (1/2): while, do-while, break ve continue",
    "keywords": "while do while break continue sonsuz dongu",
    "blocks": [
      {
        "kind": "h2",
        "text": "6.1 while Döngüsü ve Çalışma Mantığı"
      },
      {
        "kind": "p",
        "html": "<code>while</code> kelime anlamı olarak <em>\"... olduğu sürece\"</em> demektir. Parantez içindeki koşul doğru (0 hariç) olduğu sürece süslü parantez içindeki kod bloğu tekrar çalışır."
      },
      {
        "kind": "code",
        "title": "Temel while Döngüsü",
        "code": "int sayac = 1;\nwhile (sayac <= 3) {\n    printf(\"%d \", sayac);\n    sayac++;\n}\nprintf(\"\\nBitti!\\n\");"
      },
      {
        "kind": "h2",
        "text": "6.2 do - while Döngüsü"
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Altın Kural",
        "html": "<code>do - while</code> döngüsünde koşul en başta yanlış bile olsa döngü gövdesi <strong>kesinlikle en az 1 kez</strong> çalışır. Ayrıca <code>while (kosul);</code> sonunda noktalı virgül <strong>zorunludur</strong>."
      },
      {
        "kind": "code",
        "title": "while vs do-while Farkı",
        "code": "int x = 10;\ndo {\n    printf(\"%d \", x);\n    x++;\n} while (x < 5);\n// Çıktı: 10 (Koşul yanlış olsa da 1 kez çalıştı)"
      },
      {
        "kind": "h2",
        "text": "6.3 Döngü Kontrol İfadeleri: break ve continue"
      },
      {
        "kind": "table",
        "headers": [
          "Özellik",
          "break;",
          "continue;"
        ],
        "rows": [
          [
            "Görevi",
            "Döngüyü tamamen sonlandırır.",
            "Sadece o anki turu atlar, döngü devam eder."
          ],
          [
            "Akış",
            "Döngü bloğunun dışına çıkar.",
            "Doğrudan koşul/değişim adımına sıçrar."
          ],
          [
            "Kullanım",
            "<code>for</code>, <code>while</code>, <code>do-while</code>, <code>switch</code>",
            "Yalnızca döngüler"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "trap",
        "title": "Olimpiyat Tuzağı: while + continue Sonsuz Döngüsü",
        "html": "<code>while</code> döngüsünde sayaç artırma (<code>i++</code>) satırı <code>continue;</code> komutunun altında kalırsa sayaç artamaz ve <strong>sonsuz döngü</strong> oluşur!"
      }
    ],
    "quiz": [
      {
        "label": "while Koşul ve Adım Takibi",
        "code": "int a = 3, b = 25;\nwhile (a < b) {\n    b -= 4;\n    a += 3;\n}\nprintf(\"%d %d\\n\", a, b);",
        "options": [
          "12 13",
          "15 9",
          "15 13",
          "12 9",
          "18 5"
        ],
        "answer": "B"
      },
      {
        "label": "while Başında Noktalı Virgül Tuzağı",
        "code": "int i = 5;\nwhile (i > 5);\n{\n    i += 3;\n    printf(\"%d \", i);\n}\nprintf(\"%d\\n\", i);",
        "options": [
          "5",
          "8 8",
          "8",
          "Program sonsuz döngüye girer",
          "Derleme hatası verir"
        ],
        "answer": "B"
      },
      {
        "label": "do-while En Az 1 Kez Kuralı",
        "code": "int x = 12, y = 4;\ndo {\n    x += 5;\n    y *= 2;\n} while (x < y);\nprintf(\"%d %d\\n\", x, y);",
        "options": [
          "12 4",
          "17 8",
          "22 16",
          "27 32",
          "Program sonsuz döngüye girer"
        ],
        "answer": "B"
      },
      {
        "label": "break ile Erken Çıkış",
        "code": "int x = 1, toplam = 0;\nwhile (x <= 10) {\n    toplam += x;\n    if (toplam > 12) break;\n    x += 2;\n}\nprintf(\"%d %d\\n\", x, toplam);",
        "options": [
          "5 9",
          "7 16",
          "9 25",
          "7 9",
          "5 16"
        ],
        "answer": "B"
      },
      {
        "label": "continue ve Tur Atlama",
        "code": "int i = 0, sonuc = 0;\nwhile (i < 6) {\n    i++;\n    if (i % 2 == 0) continue;\n    sonuc += i;\n}\nprintf(\"%d %d\\n\", i, sonuc);",
        "options": [
          "6 9",
          "5 9",
          "6 12",
          "6 21",
          "7 9"
        ],
        "answer": "A"
      },
      {
        "label": "while + continue Sonsuz Döngü",
        "code": "int n = 1;\nwhile (n <= 4) {\n    if (n == 3) continue;\n    printf(\"%d \", n);\n    n++;\n}",
        "options": [
          "1 2 4",
          "1 2",
          "1 2 3 4",
          "Program sonsuz döngüye girer (1 2 yazdıktan sonra takılır)",
          "Derleme hatası verir"
        ],
        "answer": "D"
      },
      {
        "label": "Koşulda Post-Decrement",
        "prompt": "Aşağıdaki C program parçası ekrana kaç tane * (yıldız) basar?",
        "code": "int x = 7;\nwhile (x-- > 3) {\n    if (x % 2 == 1)\n        printf(\"*\");\n}",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": "B"
      },
      {
        "label": "do-while İçinde continue",
        "code": "int a = 1, b = 10;\ndo {\n    a++;\n    if (a % 3 == 0) continue;\n    b -= a;\n} while (a < 5);\nprintf(\"%d %d\\n\", a, b);",
        "options": [
          "5 -1",
          "5 1",
          "4 1",
          "5 -4",
          "6 -1"
        ],
        "answer": "A"
      },
      {
        "label": "Kısa Devre || ve while",
        "code": "int x = 2, y = 4, z = 3;\nwhile (x < y || --z > 0) {\n    x += 2;\n    y += 1;\n}\nprintf(\"%d %d %d\\n\", x, y, z);",
        "options": [
          "6 6 0",
          "8 7 2",
          "12 9 0",
          "10 8 1",
          "14 10 -1"
        ],
        "answer": "C"
      },
      {
        "label": "İç İçe Döngüde break Kapsamı",
        "prompt": "Aşağıdaki C program parçası ekrana kaç tane # karakteri basar?",
        "code": "int a = 4;\nwhile (--a > 0) {\n    int b = 0;\n    do {\n        b++;\n        if (b == 2) break;\n        printf(\"#\");\n    } while (b < a);\n}",
        "options": [
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "answer": "B"
      }
    ]
  },
  {
    "id": "bolum-6b",
    "type": "lesson",
    "shortTitle": "6.2 for ve İç İçe Döngüler",
    "title": "BÖLÜM 6 (2/2): for Döngüsü ve İç İçe for (Nested Loops)",
    "keywords": "for dongusu tanimlama kontrol degisim ic ice dongu nested loop",
    "blocks": [
      {
        "kind": "h2",
        "text": "6.4 for Döngüsü: Tanımlama, Kontrol ve Değişim"
      },
      {
        "kind": "image",
        "src": "img/for.png",
        "alt": "for döngüsü yapısı: Tanımlama, Kontrol, Değişim",
        "caption": "for Döngüsünün 3 Temel Bölümü: Tanımlama, Kontrol ve Değişim",
        "maxWidth": "620px"
      },
      {
        "kind": "code",
        "title": "for Sözdizimi ve Basit Örnek",
        "code": "for (int i = 1; i <= 3; i++) {\n    printf(\"%d \", i);\n}\n// Çıktı: 1 2 3"
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Çalışma Sırası Kuralı",
        "html": "<ul><li><strong>İlk tekrarda:</strong> Önce <em>tanımlama</em>, ikinci olarak <em>kontrol</em> çalışır (doğruysa gövde çalışır).</li><li><strong>Sonraki tekrarlarda:</strong> Birinci olarak <em>değişim</em>, ikinci olarak <em>kontrol</em> çalışır.</li></ul>"
      },
      {
        "kind": "h2",
        "text": "İç İçe for Döngüleri (Nested Loops)"
      },
      {
        "kind": "p",
        "text": "Akrep ve yelkovan mantığı: Dış döngünün (akrep) her 1 turu için iç döngü (yelkovan) baştan sona tüm turlarını sıfırdan tamamlar."
      },
      {
        "kind": "code",
        "title": "Üçgen Desen (İç Döngü Dış Sayaca Bağlı)",
        "code": "for (int n = 1; n <= 3; n++) {\n    for (int m = 0; m < n; m++) {\n        printf(\"*\");\n    }\n    printf(\"\\n\");\n}"
      },
      {
        "kind": "callout",
        "variant": "trap",
        "title": "Olimpiyat Sınav Tuzakları",
        "html": "<ul><li><code>for ( ; ; )</code> içinde her zaman 2 adet <code>;</code> bulunmalıdır ve bu yazım sonsuz döngüdür.</li><li>Gövde içinden sayaç değişkenine müdahale edilmesi tur sayısını değiştirir.</li><li><code>for (i = 0; i &lt; 5; i++);</code> sonundaki <code>;</code> döngüyü boş çalıştırır.</li></ul>"
      }
    ],
    "quiz": [
      {
        "code": "int toplam = 0;\nfor (int i = 2; i <= 10; i += 2) {\n    toplam += i;\n}\nprintf(\"%d\\n\", toplam);",
        "options": [
          "20",
          "30",
          "24",
          "18",
          "36"
        ],
        "answer": "B"
      },
      {
        "code": "int i;\nfor (i = 9; i >= 3; i -= 3) {\n    printf(\"%d \", i);\n}\nprintf(\"| %d\\n\", i);",
        "options": [
          "9 6 3 | 0",
          "9 6 3 | 3",
          "9 6 | 0",
          "9 6 3 | -3",
          "9 6 | 3"
        ],
        "answer": "A"
      },
      {
        "code": "int k = 4;\nfor (; k <= 12; k += 4) {\n    printf(\"%d \", k);\n}",
        "options": [
          "4 8 12",
          "4 8",
          "8 12",
          "4 8 12 16",
          "4 12"
        ],
        "answer": "A"
      },
      {
        "code": "int carpim = 1;\nfor (int i = 1; i <= 4; i++) {\n    carpim *= i;\n}\nprintf(\"%d\\n\", carpim);",
        "options": [
          "10",
          "24",
          "120",
          "6",
          "16"
        ],
        "answer": "B"
      },
      {
        "code": "int x = 10;\nfor (int i = 5; i < 3; i++) {\n    x += i;\n}\nprintf(\"%d\\n\", x);",
        "options": [
          "15",
          "10",
          "18",
          "22",
          "0"
        ],
        "answer": "B"
      },
      {
        "code": "int s = 0;\nfor (int i = 1; i <= 7; i++) {\n    if (i % 2 == 1) s += i;\n}\nprintf(\"%d\\n\", s);",
        "options": [
          "12",
          "16",
          "28",
          "9",
          "15"
        ],
        "answer": "B"
      },
      {
        "code": "int i;\nfor (i = 0; i < 4; i++);\nprintf(\"%d\\n\", i);",
        "options": [
          "3",
          "4",
          "5",
          "0",
          "Derleme hatası verir"
        ],
        "answer": "B"
      },
      {
        "code": "int x = 0;\nfor (int i = 1; i <= 3; i++)\n    x += 2;\n    x += 10;\nprintf(\"%d\\n\", x);",
        "options": [
          "16",
          "36",
          "6",
          "12",
          "18"
        ],
        "answer": "A"
      },
      {
        "code": "for (char c = 'A'; c <= 'D'; c++) {\n    printf(\"%c\", c);\n}",
        "options": [
          "ABC",
          "ABCD",
          "65666768",
          "DCBA",
          "ABCE"
        ],
        "answer": "B"
      },
      {
        "code": "int toplam = 0;\nfor (int i = 1; i <= 5; i++) {\n    if (i == 3) continue;\n    toplam += i;\n}\nprintf(\"%d\\n\", toplam);",
        "options": [
          "15",
          "12",
          "10",
          "9",
          "14"
        ],
        "answer": "B"
      },
      {
        "code": "for (int i = 4; i - 1; i--) {\n    printf(\"%d \", i);\n}",
        "options": [
          "4 3 2 1",
          "4 3 2",
          "3 2 1",
          "4 3",
          "1 2 3 4"
        ],
        "answer": "B"
      },
      {
        "code": "int a, b, s = 0;\nfor (a = 1, b = 6; a <= 3; a++, b += 2) {\n    s += b - a;\n}\nprintf(\"%d %d %d\\n\", a, b, s);",
        "options": [
          "4 12 18",
          "3 10 18",
          "4 12 15",
          "4 10 15",
          "3 12 18"
        ],
        "answer": "A"
      },
      {
        "code": "for (int i = 0; i < 8; i++) {\n    if (i == 2) i += 2;\n    printf(\"%d \", i);\n}",
        "options": [
          "0 1 2 3 4 5 6 7",
          "0 1 4 5 6 7",
          "0 1 3 4 5 6 7",
          "0 1 5 6 7",
          "0 1 2 5 6 7"
        ],
        "answer": "B"
      },
      {
        "code": "int i = 2;\nfor (int j = ++i; j < 6; j += 2) {\n    printf(\"%d-%d \", i, j);\n}",
        "options": [
          "2-3 2-5",
          "3-3 3-5",
          "3-2 3-4",
          "2-2 2-4",
          "3-3 3-5 3-7"
        ],
        "answer": "B"
      },
      {
        "code": "int say = 0;\nfor (int x = 20; x > 0; x /= 3) {\n    say++;\n}\nprintf(\"%d\\n\", say);",
        "options": [
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "answer": "B"
      },
      {
        "code": "int sonuc = 0;\nfor (int i = 1; i <= 6; i++) {\n    if (i % 2 == 0 && i > 2) sonuc += i * 2;\n    else if (i % 3 == 0) sonuc -= i;\n}\nprintf(\"%d\\n\", sonuc);",
        "options": [
          "11",
          "14",
          "17",
          "20",
          "8"
        ],
        "answer": "C"
      },
      {
        "prompt": "Aşağıdaki C program parçası ekrana kaç tane * basar?",
        "code": "int n, m;\nfor (n = 1; n <= 4; n++) {\n    for (m = 0; m < n; m++) {\n        printf(\"*\");\n    }\n}",
        "options": [
          "6",
          "8",
          "10",
          "12",
          "16"
        ],
        "answer": "C"
      },
      {
        "code": "int c = 0;\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 4; j++) {\n        if (j == 3) break;\n        c++;\n    }\n}\nprintf(\"%d\\n\", c);",
        "options": [
          "12",
          "9",
          "6",
          "8",
          "3"
        ],
        "answer": "C"
      },
      {
        "code": "long x = 1416943;\nint y = 0;\nfor (int i = 0; i < 7; i++) {\n    y = y * 10 + (x % 10) * (x % 2);\n    x /= 10;\n}\nprintf(\"%d\\n\", y);",
        "options": [
          "3411",
          "1143",
          "3911",
          "1341",
          "3141"
        ],
        "answer": "C"
      },
      {
        "code": "int sayac = 0;\nfor (char ch = 'a'; ch <= 'g'; ch += 2) {\n    if (ch != 'c') sayac += ch - 'a';\n}\nprintf(\"%d\\n\", sayac);",
        "options": [
          "10",
          "12",
          "8",
          "6",
          "14"
        ],
        "answer": "A"
      }
    ]
  },
  {
    "id": "bolum-7",
    "type": "lesson",
    "shortTitle": "7. Diziler (1D & 2D)",
    "title": "BÖLÜM 7: Diziler (Arrays) — 1D ve 2D Matrisler",
    "keywords": "dizi array indis index sizeof matris 2d kosegen",
    "blocks": [
      {
        "kind": "h2",
        "text": "7.1 Tek Boyutlu Diziler ve İndis Kavramı"
      },
      {
        "kind": "p",
        "html": "Aynı türden birden fazla veriyi bellekte yan yana saklamaya yarayan yapıya <strong>dizi (array)</strong> denir. C dilinde dizi indisleri daima <strong>0'dan başlar</strong>."
      },
      {
        "kind": "table",
        "headers": [
          "İndis",
          "[0]",
          "[1]",
          "[2]",
          "[3]"
        ],
        "rows": [
          [
            "Değer",
            "25",
            "50",
            "75",
            "100"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "trap",
        "title": "Kısmi İlk Değer Atama ve Sınır Taşması",
        "html": "<code>int A[5] = {10, 20};</code> yazıldığında kalan elemanlar otomatik <code>0</code> olur: <code>{10, 20, 0, 0, 0}</code>. 4 elemanlı dizide <code>A[4]</code> sınır taşmasıdır!"
      },
      {
        "kind": "h2",
        "text": "7.2 Dizi Boyutu ve Eleman Sayısı (sizeof)"
      },
      {
        "kind": "code",
        "title": "Dinamik Uzunluk Formülü",
        "code": "int sayilar[] = {10, 25, 50, 75, 100};\nint uzunluk = sizeof(sayilar) / sizeof(sayilar[0]);\nprintf(\"Byte: %lu, Eleman: %d\\n\", sizeof(sayilar), uzunluk);"
      },
      {
        "kind": "h2",
        "text": "7.3 Çok Boyutlu Diziler (2D Matrisler)"
      },
      {
        "kind": "code",
        "title": "İç İçe for ile 2D Matris Gezme",
        "code": "int matris[2][3] = { {1, 4, 2}, {3, 6, 8} };\nfor (int i = 0; i < 2; i++) {\n    for (int j = 0; j < 3; j++) {\n        printf(\"%d \", matris[i][j]);\n    }\n    printf(\"\\n\");\n}"
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Olimpiyat Matris Kalıpları",
        "html": "<ul><li><strong>Ana Köşegen:</strong> <code>i == j</code> → <code>M[i][i]</code></li><li><strong>Yedek Köşegen:</strong> <code>i + j == N - 1</code> → <code>M[i][N - 1 - i]</code></li><li><strong>Üst / Alt Üçgen:</strong> <code>i &lt; j</code> (üst), <code>i &gt; j</code> (alt)</li><li><strong>1D → 2D Dönüşümü:</strong> <code>M[k / C][k % C]</code></li></ul>"
      }
    ],
    "quiz": [
      {
        "code": "int a[] = {10, 20, 30, 40};\na[1] = a[0] + a[3];\nprintf(\"%d\\n\", a[1]);",
        "options": [
          "30",
          "40",
          "50",
          "60",
          "70"
        ],
        "answer": "C"
      },
      {
        "code": "int d[5] = {4, 7};\nprintf(\"%d %d\\n\", d[1], d[4]);",
        "options": [
          "4 0",
          "7 0",
          "7 7",
          "4 7",
          "0 0"
        ],
        "answer": "B"
      },
      {
        "prompt": "Standart GCC derleyicisinde (int = 4 byte) ekran çıktısı ne olur?",
        "code": "int sayilar[] = {5, 10, 15, 20, 25, 30};\nprintf(\"%lu\\n\", sizeof(sayilar));",
        "options": [
          "6",
          "12",
          "20",
          "24",
          "30"
        ],
        "answer": "D"
      },
      {
        "code": "int x[] = {3, 6, 9, 12, 15};\nint n = sizeof(x) / sizeof(x[0]);\nprintf(\"%d\\n\", n);",
        "options": [
          "4",
          "5",
          "15",
          "20",
          "1"
        ],
        "answer": "B"
      },
      {
        "code": "int a[] = {2, 5, 8, 3};\nint t = 0;\nfor (int i = 0; i < 4; i++) t += a[i];\nprintf(\"%d\\n\", t);",
        "options": [
          "15",
          "16",
          "18",
          "20",
          "10"
        ],
        "answer": "C"
      },
      {
        "code": "int a[] = {4, 9, 6, 11, 2};\nint s = 0;\nfor (int i = 0; i < 5; i += 2) s += a[i];\nprintf(\"%d\\n\", s);",
        "options": [
          "12",
          "20",
          "10",
          "22",
          "32"
        ],
        "answer": "A"
      },
      {
        "code": "int notlar[] = {45, 70, 85, 30, 60};\nint sayac = 0;\nfor (int i = 0; i < 5; i++) if (notlar[i] >= 60) sayac++;\nprintf(\"%d\\n\", sayac);",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": "C"
      },
      {
        "code": "int a[] = {12, 4, 27, 19, 8};\nint enb = a[0];\nfor (int i = 1; i < 5; i++) if (a[i] > enb) enb = a[i];\nprintf(\"%d\\n\", enb);",
        "options": [
          "12",
          "19",
          "27",
          "8",
          "4"
        ],
        "answer": "C"
      },
      {
        "code": "int m[2][3] = { {2, 5, 8}, {1, 4, 7} };\nprintf(\"%d\\n\", m[1][2] + m[0][1]);",
        "options": [
          "9",
          "10",
          "12",
          "13",
          "15"
        ],
        "answer": "C"
      },
      {
        "code": "int m[2][2] = { {2, 5}, {9, 12} };\nm[0][1] = m[1][0] - m[0][0];\nprintf(\"%d\\n\", m[0][1]);",
        "options": [
          "3",
          "5",
          "7",
          "10",
          "11"
        ],
        "answer": "C"
      },
      {
        "code": "int A[5] = {2, 3, 4, 5, 6};\nfor (int i = 1; i < 5; i++) A[i] = A[i] + A[i - 1];\nprintf(\"%d\\n\", A[4]);",
        "options": [
          "14",
          "18",
          "20",
          "24",
          "11"
        ],
        "answer": "C"
      },
      {
        "code": "int A[5] = {3, 0, 4, 2, 1};\nprintf(\"%d\\n\", A[A[A[1]]]);",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": "C"
      },
      {
        "code": "int A[4] = {10, 20, 30, 40};\nint ilk = A[0];\nfor (int i = 0; i < 3; i++) A[i] = A[i + 1];\nA[3] = ilk;\nprintf(\"%d %d\\n\", A[0], A[3]);",
        "options": [
          "10 40",
          "20 10",
          "40 10",
          "20 40",
          "30 10"
        ],
        "answer": "B"
      },
      {
        "code": "int A[5] = {1, 2, 3, 4, 5};\nfor (int i = 0; i < 2; i++) {\n    int t = A[i]; A[i] = A[4 - i]; A[4 - i] = t;\n}\nprintf(\"%d %d %d\\n\", A[0], A[2], A[4]);",
        "options": [
          "1 3 5",
          "5 3 1",
          "5 2 1",
          "4 3 2",
          "5 4 1"
        ],
        "answer": "B"
      },
      {
        "code": "int A[7] = {2, 2, 5, 5, 5, 3, 2};\nint sayac = 0;\nfor (int i = 0; i < 7; i++) if (i == 0 || A[i] != A[i - 1]) sayac++;\nprintf(\"%d\\n\", sayac);",
        "options": [
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "answer": "B"
      },
      {
        "code": "int A[6] = {1, 2, 1, 3, 2, 1};\nint say[4] = {0};\nfor (int i = 0; i < 6; i++) say[A[i]]++;\nprintf(\"%d %d\\n\", say[1], say[2]);",
        "options": [
          "2 3",
          "3 2",
          "3 1",
          "2 2",
          "1 2"
        ],
        "answer": "B"
      },
      {
        "code": "int M[3][3] = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };\nint toplam = 0;\nfor (int i = 0; i < 3; i++) toplam += M[i][i];\nprintf(\"%d\\n\", toplam);",
        "options": [
          "12",
          "15",
          "18",
          "21",
          "45"
        ],
        "answer": "B"
      },
      {
        "code": "int M[3][3] = { {2, 4, 6}, {1, 3, 5}, {7, 8, 9} };\nint toplam = 0;\nfor (int i = 0; i < 3; i++) toplam += M[i][2 - i];\nprintf(\"%d\\n\", toplam);",
        "options": [
          "14",
          "15",
          "16",
          "18",
          "20"
        ],
        "answer": "C"
      },
      {
        "code": "int M[3][3] = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };\nint s = 0;\nfor (int i = 0; i < 3; i++)\n    for (int j = 0; j < 3; j++)\n        if (i < j) s += M[i][j];\nprintf(\"%d\\n\", s);",
        "options": [
          "10",
          "11",
          "15",
          "19",
          "26"
        ],
        "answer": "B"
      },
      {
        "code": "int M[2][3] = { {10, 20, 30}, {40, 50, 60} };\nint toplam = 0;\nfor (int k = 0; k < 6; k += 2) toplam += M[k / 3][k % 3];\nprintf(\"%d\\n\", toplam);",
        "options": [
          "60",
          "80",
          "90",
          "100",
          "120"
        ],
        "answer": "C"
      }
    ]
  },
  {
    "id": "deneme-3",
    "type": "exam",
    "shortTitle": "Deneme 3 (Orta)",
    "title": "TÜBİTAK 1. Aşama Deneme Sınavı - 3 (Orta Seviye)",
    "subtitle": "Kapsam: Bölüm 1–7 (Değişkenler, Veri Türleri, İşleçler, Koşullar, Döngüler ve Diziler)",
    "quiz": [
      {
        "code": "int a = 2, b = 5, c = 12;\na += b;\nc /= a;\nb -= c * 3;\nprintf(\"%d\\n\", a + b + c);",
        "options": [
          "8",
          "9",
          "10",
          "11",
          "12"
        ],
        "answer": "C"
      },
      {
        "code": "int x = 9;\nfloat a = (float)(x / 2);\nfloat b = (float)x / 2;\nint sonuc = (int)(a + b + 0.8);\nprintf(\"%d\\n\", sonuc);",
        "options": [
          "8",
          "9",
          "10",
          "9.3",
          "8.5"
        ],
        "answer": "B"
      },
      {
        "prompt": "(Bilgi: 'A'=65, 'a'=97) Ekran çıktısı ne olur?",
        "code": "char ch = 'D';\nint k = ch - 'A';\nchar yeni = 'a' + k * 2;\nprintf(\"%c %d\\n\", yeni, k);",
        "options": [
          "f 3",
          "g 3",
          "h 4",
          "g 4",
          "f 4"
        ],
        "answer": "B"
      },
      {
        "code": "int a = 1;\nint b = a == 0;\nint c = a || b == 1;\nint d = b && c == 1;\nint e = d == 0 || b;\nprintf(\"%d\\n\", a + b + c + d + e);",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": "C"
      },
      {
        "prompt": "Aşağıdaki program parçasının ekrana \"C\" yazması için x hangi aralıkta olmalıdır?",
        "code": "if (x <= 120) {\n    if (x < 60) {\n        if (x <= 20) printf(\"A\");\n        else printf(\"B\");\n    } else printf(\"C\");\n} else printf(\"D\");",
        "options": [
          "20 < x < 60",
          "60 < x <= 120",
          "60 <= x <= 120",
          "60 <= x < 120",
          "x > 120"
        ],
        "answer": "C"
      },
      {
        "code": "int toplam = 0;\nfor (int i = 1; i <= 5; i++)\n    toplam += (i % 2 == 0) ? i * 2 : i;\nprintf(\"%d\\n\", toplam);",
        "options": [
          "15",
          "18",
          "21",
          "24",
          "27"
        ],
        "answer": "C"
      },
      {
        "code": "int n = 1;\nwhile (n < 8) {\n    if (n % 2 == 0) n += 3;\n    else if (n > 4) n += 2;\n    else n++;\n    printf(\"%d \", n);\n}",
        "options": [
          "2 5 7",
          "2 5 7 9",
          "1 2 5 7",
          "2 4 7 9",
          "2 5 8"
        ],
        "answer": "B"
      },
      {
        "code": "int x = 20, adim = 0;\ndo {\n    x -= 6; adim++;\n    if (x < 10) break;\n} while (x > 0);\nprintf(\"%d %d\\n\", x, adim);",
        "options": [
          "14 1",
          "8 2",
          "2 3",
          "8 3",
          "2 2"
        ],
        "answer": "B"
      },
      {
        "code": "int s = 0;\nfor (int i = 1; i <= 8; i++) {\n    if (i % 3 == 0) continue;\n    s += i;\n}\nprintf(\"%d\\n\", s);",
        "options": [
          "24",
          "27",
          "30",
          "36",
          "21"
        ],
        "answer": "B"
      },
      {
        "code": "int sayac = 0;\nfor (int i = 1; i <= 4; i++)\n    for (int j = i; j <= 4; j++)\n        sayac++;\nprintf(\"%d\\n\", sayac);",
        "options": [
          "6",
          "8",
          "10",
          "12",
          "16"
        ],
        "answer": "C"
      },
      {
        "code": "int d[] = {3, 7, 11, 15, 19};\nint n = sizeof(d) / sizeof(d[0]);\nint toplam = 0;\nfor (int i = 0; i < n; i += 2) toplam += d[i];\nprintf(\"%d %d\\n\", n, toplam);",
        "options": [
          "5 33",
          "20 33",
          "5 55",
          "5 22",
          "4 33"
        ],
        "answer": "A"
      },
      {
        "code": "int A[6] = {5, 10, 15};\nA[3] = A[0] + A[2];\nA[4] = A[3] - A[5];\nprintf(\"%d %d\\n\", A[4], A[5]);",
        "options": [
          "15 0",
          "20 0",
          "20 15",
          "25 0",
          "10 0"
        ],
        "answer": "B"
      },
      {
        "code": "int A[5] = {2, 4, 6, 8, 10};\nint toplam = 0;\nfor (int i = 1; i < 5; i++) {\n    if (i % 2 == 1) A[i] += A[i - 1];\n    else A[i] -= A[i - 1];\n    toplam += A[i];\n}\nprintf(\"%d\\n\", toplam);",
        "options": [
          "12",
          "14",
          "16",
          "18",
          "20"
        ],
        "answer": "C"
      },
      {
        "code": "int M[2][3] = { {4, 7, 2}, {9, 1, 5} };\nint s = 0;\nfor (int j = 0; j < 3; j++)\n    s += (M[0][j] > M[1][j]) ? M[0][j] : M[1][j];\nprintf(\"%d\\n\", s);",
        "options": [
          "13",
          "15",
          "18",
          "21",
          "28"
        ],
        "answer": "D"
      },
      {
        "code": "int M[3][3] = { {3, 1, 4}, {2, 8, 5}, {6, 7, 9} };\nint t = 0;\nfor (int i = 0; i < 3; i++) t += M[i][i];\nprintf(\"%d\\n\", t);",
        "options": [
          "15",
          "18",
          "20",
          "22",
          "24"
        ],
        "answer": "C"
      }
    ]
  },
  {
    "id": "deneme-4",
    "type": "exam",
    "shortTitle": "Deneme 4 (Zor)",
    "title": "TÜBİTAK 1. Aşama Deneme Sınavı - 4 (Zor Seviye)",
    "subtitle": "Kapsam: Bölüm 1–7 (Olimpiyat Düzeyi Karma Sınav)",
    "quiz": [
      {
        "code": "int a = 1, b = 1, c = 1, d = 1;\na = ++b > 2 || ++c > 1 && ++d > 1;\nprintf(\"%d %d %d %d\\n\", a, b, c, d);",
        "options": [
          "1 2 1 1",
          "1 2 2 1",
          "1 2 2 2",
          "0 2 2 2",
          "0 2 1 1"
        ],
        "answer": "C"
      },
      {
        "code": "int a;\na = (int)(4.5 + ((float)(7 / 2) * 3) + (5.0 / 2));\nprintf(\"%d\\n\", a);",
        "options": [
          "15",
          "16",
          "17",
          "18",
          "14"
        ],
        "answer": "B"
      },
      {
        "code": "int a = 3, b = 4, c = 5;\nc = c - a; a = a + c; c = a - c;\nint sonuc = a + c * b / 5 % c;\nprintf(\"%d\\n\", sonuc);",
        "options": [
          "5",
          "6",
          "7",
          "8",
          "9"
        ],
        "answer": "C"
      },
      {
        "prompt": "Aşağıdaki C program parçası çalıştırıldığında ne olur?",
        "code": "int sayac = 0;\nfor (int i = 15; i; i -= 4) {\n    sayac++;\n}\nprintf(\"%d\\n\", sayac);",
        "options": [
          "3 yazar",
          "4 yazar",
          "5 yazar",
          "15 yazar",
          "Sonsuz döngüye girer (çıktı üretmez)"
        ],
        "answer": "E"
      },
      {
        "code": "int i = 1, say = 0;\nwhile (i < 6) {\n    for (int j = ++i; j <= 6; j += 2) say++;\n    if (i == 3) break;\n}\nprintf(\"%d %d\\n\", i, say);",
        "options": [
          "2 3",
          "3 5",
          "3 6",
          "6 9",
          "4 5"
        ],
        "answer": "B"
      },
      {
        "code": "int i = 3, yildiz = 0;\nwhile (i-- > 0) {\n    int j = 1;\n    do { yildiz++; } while (j++ < i);\n}\nprintf(\"%d\\n\", yildiz);",
        "options": [
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "answer": "B"
      },
      {
        "prompt": "n = 26 bilyeyi m = 5 kutuya sırasıyla 5 5 5 5 6 olacak şekilde dağıtmak için boşluğa ne gelmelidir?",
        "code": "int n = 26, m = 5;\nfor (int i = 0; i < m; i++) {\n    int k = _________;\n    printf(\"%d \", k);\n    n -= k;\n}",
        "options": [
          "n / m",
          "n / (m - i)",
          "n / (i + 1)",
          "(n + i) / m",
          "n % (m - i)"
        ],
        "answer": "B"
      },
      {
        "code": "int n = 4, nokta = 0;\nfor (int i = 1; i <= n; i++)\n    for (int j = 1; j <= n; j++)\n        if (((i * j < n + 2) ? '.' : ' ') == '.') nokta++;\nprintf(\"%d\\n\", nokta);",
        "options": [
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "answer": "C"
      },
      {
        "code": "int a[6] = {1, 2, 3, 4, 5, 6};\nfor (int i = 0; i < 3; i++) {\n    a[5 - i] += i;\n    a[i] += a[5 - i];\n}\nprintf(\"%d %d %d\\n\", a[0], a[2], a[5]);",
        "options": [
          "7 9 6",
          "7 7 6",
          "6 9 6",
          "7 9 8",
          "6 7 6"
        ],
        "answer": "A"
      },
      {
        "code": "int d[6] = {3, 5, 3, 5, 3};\nint pos = 2, yeni = 9, temp, temp2;\nfor (int j = 0; j < 6; j++) {\n    if (j == pos) { temp = d[j]; d[j] = yeni; }\n    else if (j > pos) { temp2 = d[j]; d[j] = temp; temp = temp2; }\n}\nfor (int i = 0; i < 6; i++) printf(\"%d \", d[i]);",
        "options": [
          "3 5 9 5 3 0",
          "3 5 9 3 5 3",
          "3 5 9 3 5 0",
          "3 9 5 3 5 3",
          "3 5 3 9 5 3"
        ],
        "answer": "B"
      },
      {
        "code": "int p[5] = {2, 4, 1, 0, 3};\nint x = 0;\nfor (int i = 0; i < 4; i++) x = p[x];\nprintf(\"%d\\n\", x);",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": "D"
      },
      {
        "code": "int a[2][3] = { {2, 4, 5}, {0, 1, 3} };\nfor (int i = 0; i < 6; i++) {\n    int j = a[i / 3][i % 3];\n    a[j / 3][j % 3] = i;\n}\nprintf(\"%d %d %d\\n\", a[0][0], a[0][2], a[1][2]);",
        "options": [
          "3 0 3",
          "2 5 3",
          "3 5 0",
          "2 0 3",
          "3 0 5"
        ],
        "answer": "A"
      },
      {
        "code": "int A[8] = {2, 3, 1, 3, 2, 3, 1, 2};\nint say[4] = {0}, en_cok = 0;\nfor (int i = 0; i < 8; i++) {\n    say[A[i]]++;\n    if (say[A[i]] > say[en_cok]) en_cok = A[i];\n}\nprintf(\"%d %d\\n\", en_cok, say[en_cok]);",
        "options": [
          "2 3",
          "3 3",
          "1 2",
          "3 2",
          "2 2"
        ],
        "answer": "B"
      },
      {
        "code": "int M[3][3] = { {2, 5, 4}, {1, 6, 3}, {7, 8, 9} };\nint sonuc = 0;\nfor (int i = 0; i < 3; i++)\n    for (int j = 0; j < 3; j++) {\n        if (i == j) sonuc += M[i][j];\n        else if (i + j == 2) sonuc -= M[i][j];\n    }\nprintf(\"%d\\n\", sonuc);",
        "options": [
          "0",
          "6",
          "11",
          "12",
          "17"
        ],
        "answer": "B"
      },
      {
        "code": "int M[3][3] = { {4, 9, 2}, {7, 3, 8}, {5, 6, 1} };\nint toplam = 0;\nfor (int j = 0; j < 3; j++) {\n    int enk = M[0][j];\n    for (int i = 1; i < 3; i++) if (M[i][j] < enk) enk = M[i][j];\n    toplam += enk;\n}\nprintf(\"%d\\n\", toplam);",
        "options": [
          "6",
          "8",
          "10",
          "12",
          "23"
        ],
        "answer": "B"
      }
    ]
  }
];
