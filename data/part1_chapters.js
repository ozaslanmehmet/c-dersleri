window.COURSE_PART1 = [
  {
    "id": "bolum-1",
    "type": "lesson",
    "shortTitle": "1. Değişken Kavramı",
    "title": "BÖLÜM 1: Değişken Kavramı",
    "keywords": "degisken int printf atama swap takas coklu degisken",
    "blocks": [
      {
        "kind": "h2",
        "text": "1.1 Değişken Nedir?"
      },
      {
        "kind": "p",
        "html": "Değişkenler bilgileri bellekte tutmak için var olan yapılardır. Bellekte oluşturulan her değişken, üzerinde belirli etiketler bulunan özel bir <strong>kutuya</strong> benzer."
      },
      {
        "kind": "image",
        "src": "img/degisken_kutu_metaforu.jpg",
        "alt": "Programlamada Değişken Kavramı — Kutu Benzetmesi",
        "caption": "Değişken Kutu Benzetmesi: Adı, Veri Tipi, Bellek Adresi ve Saklanan Değer",
        "maxWidth": "720px"
      },
      {
        "kind": "ul",
        "items": [
          "<strong>Türü (Type):</strong> Kutunun ne tür bir nesne tutabileceğini belirler (örneğin sadece tam sayı tutabilen <code>int</code> kutusu).",
          "<strong>Ad (Name / Identifier):</strong> Programcının o kutuya ulaşmak için verdiği etiket (örneğin <code>sayi</code>, <code>x</code>, <code>a</code>).",
          "<strong>Değer  (Value):</strong> Kutunun tam içinde saklanan asıl veri (örneğin <code>42</code> veya <code>5</code>).",
          "<strong>Adres  (Memory Address):</strong> Kutunun bellekte (RAM) durduğu yerin fiziksel konumu (örneğin <code>0x7FFE20</code>). Bu adres ilerleyen konularda göstericilerde (<code>pointer</code>) ve <code>&amp;</code> işleciyle karşımıza çıkacaktır."
        ]
      },
      {
        "kind": "code",
        "title": "C Dilinde Tanımlama ve Değer Verme",
        "code": "int sayi = 42;"
      },
      {
        "kind": "p",
        "text": "Bu tek bir satır bellekte şu işlemi yapar:"
      },
      {
        "kind": "ul",
        "items": [
          "<code>int</code>: \"Bana bir tamsayı değişkeni ayır.\"",
          "<code>sayi</code>: \"Değişkenin adı 'sayi' olsun.\"",
          "<code>=</code>: \"Sağdaki değeri al, değişkene ata.\"",
          "<code>42</code>: Değişkenin tutacağı değer."
        ]
      },
      {
        "kind": "callout",
        "title": "Not: Atama İşleci (=) ve Tek Yönlü Akış",
        "html": "<ul><li><code>=</code> sembolü matematikteki denklik/eşitlik değildir; bir <strong>atama</strong> işlemidir.</li><li>İşlem her zaman <strong>sağdan sola</strong> doğru akar:<ul><li>Sağdaki değer okunur veya hesaplanır.</li><li>Elde edilen sonuç soldaki değişkene yazılır. Soldaki değişkenin eski değeri silinir, yeni değer değişkene atanır.</li></ul></li></ul>"
      },
      {
        "kind": "h2",
        "text": "1.2 Değişken Değerini Ekrana Yazdırma"
      },
      {
        "kind": "p",
        "html": "C dilinde ekrana bir şeyler yazdırmak için <code>printf</code> komutunu kullanırız. Ancak yeni başlayanların en sık yaptığı hata, değişkeni doğrudan yazdırmaya çalışmaktır:"
      },
      {
        "kind": "code",
        "title": "Hatalı Kullanım Örneği",
        "code": "int a = 42;\nprintf(a);"
      },
      {
        "kind": "callout",
        "variant": "trap",
        "title": "Dikkat!",
        "html": "<code>printf(a);</code> → <strong>HATALIDIR!</strong> C dilinde bu şekilde doğrudan değişken yazılamaz."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Temel Kural",
        "html": "<code>printf</code> yalnızca çift tırnaklar <code>\" \"</code> arasında yazılan metinleri doğrudan ekrana basar. Bir değişkenin değerini ekrana yazdırmak istiyorsak, çift tırnak içine o değişkenin geleceği yere bir <strong>yer tutucu (format specifier)</strong> koymamız gerekir:<br/>• Tam sayılar (<code>int</code>) için yer tutucu: <code>%d</code> (decimal / onluk sayı anlamına gelir)."
      },
      {
        "kind": "p",
        "html": "<strong>Nasıl Çalışır?</strong><br/><code>printf</code> çift tırnak içinde <code>%d</code> gördüğü anda oraya bir değer geleceğini anlar. Çift tırnaktan sonra virgül koyup değişkenimizin adını yazarız:"
      },
      {
        "kind": "code",
        "title": "printf ile Tam Sayı Yazdırma",
        "code": "int a = 42;\nprintf(\"%d\", a);"
      },
      {
        "kind": "ul",
        "items": [
          "<code>printf</code> çift tırnak içini okur: <code>\"%d\"</code>",
          "<code>%d</code> yer tutucusunu görünce virgülden sonraki <code>a</code> değişkenine bakar.",
          "<code>a</code> değişkeninin içindeki <code>42</code> değerini alır ve <code>%d</code>'nin yerine koyarak ekrana basar.",
          "<strong>Ekran Çıktısı:</strong> <code>42</code>"
        ]
      },
      {
        "kind": "p",
        "text": "Eğer ekrana açıklayıcı bir metinle basmak istersek:"
      },
      {
        "kind": "code",
        "title": "Açıklayıcı Metinle Değişken Yazdırma",
        "code": "int yas = 13;\nprintf(\"Yaşım: %d\", yas);"
      },
      {
        "kind": "p",
        "html": "<strong>Ekran Çıktısı:</strong> <code>Yaşım: 13</code>"
      },
      {
        "kind": "h2",
        "text": "1.3 Temel Atama ve Değer Güncelleme Adımları"
      },
      {
        "kind": "p",
        "html": "<strong>1. Değişkenin Değerinin Değişmesi (Güncellenmesi):</strong><br/>Bir değişkene yeni bir değer atandığında eski değer silinir ve yerine yenisi yazılır:"
      },
      {
        "kind": "code",
        "title": "1. Değişkenin Değerinin Güncellenmesi",
        "code": "int a = 10;\nprintf(\"Ilk deger: %d\\n\", a);\na = 25;\nprintf(\"Guncel deger: %d\\n\", a);"
      },
      {
        "kind": "p",
        "html": "<code>a = 25;</code> satırı çalıştığında <code>a</code> değişkeninin içindeki <code>10</code> değeri silinir, yerine <code>25</code> atanır."
      },
      {
        "kind": "p",
        "html": "<strong>2. Önce Deklere Etme (Tanımlama), Sonra Değer Verme:</strong><br/>Değişken önce bellekte oluşturulup, değeri daha sonra atanabilir:"
      },
      {
        "kind": "code",
        "title": "2. Önce Tanımlama, Sonra Değer Verme",
        "code": "int puan;     // Degisken olusturuldu (deklere edildi), henuz degeri verilmedi\npuan = 100;   // Deger degiskene atandi\nprintf(\"Puan: %d\\n\", puan);"
      },
      {
        "kind": "p",
        "html": "<strong>3. Değişkene İki Tam Sayının Toplanarak Atanması:</strong><br/><code>=</code> işlecinin sağ tarafındaki toplama işlemi önce yapılır, ardından sonuç değişkene aktarılır:"
      },
      {
        "kind": "code",
        "title": "3. İki Tam Sayının Toplanarak Atanması",
        "code": "int toplam = 12 + 8;\nprintf(\"Toplam: %d\\n\", toplam);"
      },
      {
        "kind": "p",
        "html": "Sağdaki <code>12 + 8</code> işlemi önce hesaplanır (<code>20</code>), ardından <code>toplam</code> değişkenine yazılır."
      },
      {
        "kind": "p",
        "html": "<strong>4. Bir Sayı ile Bir Değişkenin Değerinin Toplanması:</strong><br/>Bir değişkendeki değer okunup sabit bir sayıyla toplanarak yeni bir değişkene yazılabilir:"
      },
      {
        "kind": "code",
        "title": "4. Bir Sayı ile Değişkenin Toplanması",
        "code": "int taban = 50;\nint sonuc = taban + 15;\nprintf(\"Sonuc: %d\\n\", sonuc);"
      },
      {
        "kind": "p",
        "html": "<code>taban</code> değişkenindeki <code>50</code> okunur, <code>15</code> eklenir (<code>65</code>) ve <code>sonuc</code> değişkenine atanır."
      },
      {
        "kind": "p",
        "html": "<strong>5. İki Değişkenin Toplanarak Başka Bir Değişkene Atanması:</strong><br/>İki değişkenin içindeki değerler okunup toplanır ve üçüncü bir değişkene yazılır:"
      },
      {
        "kind": "code",
        "title": "5. İki Değişkenin Toplanarak Atanması",
        "code": "int kisa_kenar = 10;\nint uzun_kenar = 20;\nint cevre_yarisi = kisa_kenar + uzun_kenar;\nprintf(\"dikdörtgenin çevresinin yarısı: %d\\n\", cevre_yarisi);"
      },
      {
        "kind": "p",
        "html": "<code>kisa_kenar</code> (10) ve <code>uzun_kenar</code> (20) okunur, toplanır (30) ve <code>cevre_yarisi</code> değişkenine atanır."
      },
      {
        "kind": "p",
        "html": "<strong>6. Bir Değişkenin Kendi Değerini Kullanarak Güncellenmesi (x = x + 1 Mantığı):</strong><br/>Matematikte <code>x = x + 1</code> ifadesi imkansız bir eşitliktir. Ancak C dilinde <code>=</code> atama işleci olduğu için tamamen geçerlidir ve programlamanın en temel kalıplarından biridir."
      },
      {
        "kind": "p",
        "text": "İşlem yine sağdan sola çalışır:"
      },
      {
        "kind": "ul",
        "items": [
          "Sağdaki <code>x + 1</code> ifadesi hesaplanır: <code>x</code> değişkeninin mevcut değeri okunur ve 1 eklenir.",
          "Çıkan yeni sonuç soldaki <code>x</code> değişkenine geri yazılır (eski değer silinir)."
        ]
      },
      {
        "kind": "code",
        "title": "6. x = x + 1 Mantığı",
        "code": "int x = 5;\nprintf(\"Onceki x: %d\\n\", x);\nx = x + 1;\nprintf(\"Sonraki x: %d\\n\", x);"
      },
      {
        "kind": "ul",
        "items": [
          "<strong>Ekran Çıktısı:</strong><ul><li><code>Onceki x: 5</code></li><li><code>Sonraki x: 6</code></li></ul>"
        ]
      },
      {
        "kind": "p",
        "html": "<strong>Örnek Satır Satır İz Sürme (Tracing):</strong>"
      },
      {
        "kind": "code",
        "title": "Satır Satır İz Sürme (Tracing)",
        "code": "int a = 5;\nint b = 12;\nb = a;       // a değişkenindeki 5 değeri kopyalanır ve b değişkenine yazılır. b'nin eski değeri (12) kaybolur.\na = 20;      // a değişkeninin yeni değeri 20 olur; b değişkeni bundan etkilenmez (b hâlâ 5'tir)."
      },
      {
        "kind": "h2",
        "text": "Pekiştirme Alıştırmaları"
      },
      {
        "kind": "h3",
        "text": "Alıştırma 1: Değer Kopyalama"
      },
      {
        "kind": "p",
        "text": "Aşağıdaki C kod parçası satır satır çalıştığında değişkenlerin son değerleri ne olur?"
      },
      {
        "kind": "code",
        "title": "Alıştırma 1 — Değer Kopyalama",
        "code": "int a = 8;\nint b = 3;\nint c = a;\na = b;\nb = c;\nprintf(\"%d %d %d\", a, b, c);"
      },
      {
        "kind": "p",
        "html": "<strong>Çözüm ve Takip:</strong>"
      },
      {
        "kind": "ul",
        "items": [
          "<code>int a = 8;</code> → <code>a</code> değişkenine 8 atanır.",
          "<code>int b = 3;</code> → <code>b</code> değişkenine 3 atanır.",
          "<code>int c = a;</code> → <code>a</code> değişkenindeki 8 değeri okunup <code>c</code> değişkenine kopyalanır (<code>c = 8</code>).",
          "<code>a = b;</code> → <code>b</code> değişkenindeki 3 değeri <code>a</code> değişkenine yazılır. <code>a</code>'nın eski değeri (8) silinir (<code>a = 3</code>).",
          "<code>b = c;</code> → <code>c</code> değişkenindeki 8 değeri <code>b</code> değişkenine yazılır. <code>b</code>'nin eski değeri (3) silinir (<code>b = 8</code>)."
        ]
      },
      {
        "kind": "p",
        "html": "<em>Son Durum:</em> <code>a = 3</code>, <code>b = 8</code>, <code>c = 8</code>. (Bu işlem iki değişkenin değerini takas etmenin/swap temel mantığıdır)."
      },
      {
        "kind": "h3",
        "text": "Alıştırma 2: Üzerine Yazma (Overwrite)"
      },
      {
        "kind": "p",
        "html": "Aşağıdaki C kod parçası çalıştığında <code>x</code> ve <code>y</code> değişkenlerinin son değerleri ne olur?"
      },
      {
        "kind": "code",
        "title": "Alıştırma 2 — Üzerine Yazma (Overwrite)",
        "code": "int x = 15;\nint y = 20;\nx = y;\ny = 25;\nx = 30;\nprintf(\"%d %d\", x, y);"
      },
      {
        "kind": "p",
        "html": "<strong>Çözüm ve Takip:</strong>"
      },
      {
        "kind": "ul",
        "items": [
          "<code>int x = 15;</code> → <code>x = 15</code>",
          "<code>int y = 20;</code> → <code>y = 20</code>",
          "<code>x = y;</code> → <code>y</code> değişkenindeki 20 değeri <code>x</code>'e kopyalanır. <code>x</code> artık 20 olur.",
          "<code>y = 25;</code> → <code>y</code> değişkenine yeni değer olarak 25 atanır. <code>x</code> değişkeni bundan etkilenmez (hala 20).",
          "<code>x = 30;</code> → <code>x</code> değişkenine yeni değer olarak 30 atanır."
        ]
      },
      {
        "kind": "p",
        "html": "<em>Son Durum:</em> <code>x = 30</code>, <code>y = 25</code>."
      },
      {
        "kind": "p",
        "html": "<em>(Not: Aritmetik işlemler, artırma/azaltma işleçleri, tamsayı bölmesi ve diğer veri tipleri sonraki bölümlerde adım adım ele alınacaktır.)</em>"
      },
      {
        "kind": "h3",
        "text": "İki Değişkenin Değerini Değiştirme (Swap / Takas Algoritması)"
      },
      {
        "kind": "p",
        "html": "Günlük hayatta elimizde iki bardak olduğunu düşünelim: Biri dolu <strong>meyve suyu</strong>, diğeri dolu <strong>su</strong>. Meyve suyunu su bardağına, suyu da meyve suyu bardağına aktarmak istersek ne yaparız? Doğrudan birbirine dökersek içecekler karışır ve mahvolur! Mutlaka kenarda duran <strong>üçüncü bir boş bardağa (geçici bardak)</strong> ihtiyaç duyarız."
      },
      {
        "kind": "p",
        "html": "Programlamada da iki değişkenin değerlerini birbiriyle takas etmek için sıklıkla <code>gecici</code> (veya İngilizce adıyla <code>temp</code>) adında 3. bir yardımcı değişken kullanılır."
      },
      {
        "kind": "code",
        "title": "3 Adımlı Takas (Swap) Algoritması",
        "code": "int a = 10;\nint b = 20;\nint temp; // 3. boş yardımcı değişkenimiz\n// 1. Adım: a'nın değerini kaybolmasın diye geçici değişkene yedekle\ntemp = a; // temp = 10\n// 2. Adım: b'nin değerini artık güvenle a değişkenine aktar\na = b;    // a = 20\n// 3. Adım: temp'te yedeklediğimiz ilk değeri b değişkenine koy\nb = temp; // b = 10\nprintf(\"a: %d, b: %d\\n\", a, b);\n// Ekran Çıktısı: a: 20, b: 10 (Değerler başarıyla yer değiştirdi!)"
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Olimpiyat Notu",
        "html": "Bu takas algoritması, olimpiyatlarda dizileri küçükten büyüğe sıralama (kabarcık sıralaması / bubble sort) gibi temel algoritma sorularında en çok kullanılan temel mekanizmadır."
      },
      {
        "kind": "h2",
        "text": "1.4 Çoklu Değişken Tanımlama (Multiple Variables)"
      },
      {
        "kind": "p",
        "html": "C dilinde kod yazarken aynı türden birden fazla değişkeni tek tek ayrı satırlarda tanımlamak yerine, aralarına virgül (<code>,</code>) koyarak tek bir satırda tanımlayabiliriz."
      },
      {
        "kind": "h3",
        "text": "1.4.1 Aynı Türde Çoklu Değişken Bildirimi"
      },
      {
        "kind": "p",
        "html": "Aynı veri tipine (<code>int</code>) sahip birden fazla değişken virgül kullanılarak tek satırda oluşturulabilir:"
      },
      {
        "kind": "code",
        "title": "Aynı Satırda Çoklu Değişken Tanımlama",
        "code": "int x = 5, y = 6, z = 50;\nprintf(\"%d\", x + y + z); // Ekran Çıktısı: 61"
      },
      {
        "kind": "p",
        "text": "Bu yazım biçimi aşağıdaki gibi 3 ayrı satır yazmakla tamamen aynı işi yapar, ancak kodu daha kısa ve derli toplu hale getirir:"
      },
      {
        "kind": "code",
        "title": "Ayrı Satırlarda Tanımlama (Eşdeğeri)",
        "code": "int x = 5;\nint y = 6;\nint z = 50;"
      },
      {
        "kind": "h3",
        "text": "1.4.2 Çoklu Değişkene Tek Bir Değer Atama"
      },
      {
        "kind": "p",
        "html": "Birden fazla değişkene aynı değeri vermek istediğimizde, atama işlecinin (<code>=</code>) <strong>sağdan sola</strong> çalışma kuralından faydalanarak bunları art arda bağlayabiliriz:"
      },
      {
        "kind": "code",
        "title": "Zincirleme Atama",
        "code": "int x, y, z;\nx = y = z = 50;\nprintf(\"%d\", x + y + z); // Ekran Çıktısı: 150"
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Olimpiyat Notu",
        "html": "Zincirleme atamalarda (<code>x = y = z = 50;</code>) akışın <strong>sağdan sola</strong> olduğunu bilmek, soru çözerken değişkenlerin sırasını karıştırmamak açısından kritik bir kuraldır."
      }
    ],
    "quiz": [
      {
        "label": "Kademeli Güncelleme",
        "code": "int a = 12;\nint b = 5;\na = a + b;\nb = a + b;\na = b + a;\nprintf(\"%d %d\\n\", a, b);",
        "options": [
          "17 22",
          "39 22",
          "34 22",
          "39 17",
          "29 17"
        ],
        "answer": "B"
      },
      {
        "label": "Kendi Değerini Güncelleme",
        "code": "int x = 8;\nx = x + 1;\nx = x + x;\nx = x + 1;\nprintf(\"%d\\n\", x);",
        "options": [
          "18",
          "19",
          "20",
          "10",
          "17"
        ],
        "answer": "B"
      },
      {
        "label": "Zincirleme Atama ve Değer Ezme",
        "code": "int a, b, c;\na = b = c = 15;\nb = 25;\nc = a + b;\na = c;\nprintf(\"%d %d %d\\n\", a, b, c);",
        "options": [
          "40 25 40",
          "15 25 40",
          "40 15 40",
          "25 25 40",
          "40 25 15"
        ],
        "answer": "A"
      },
      {
        "label": "Hatalı Takas Tuzağı",
        "code": "int x = 20, y = 50;\nx = y;\ny = x;\nx = x + y;\nprintf(\"%d %d\\n\", x, y);",
        "options": [
          "70 20",
          "100 50",
          "70 50",
          "100 20",
          "40 50"
        ],
        "answer": "B"
      },
      {
        "label": "3 Değişkenli Döngüsel Takas",
        "code": "int a = 2, b = 4, c = 6;\nint t = a;\na = b;\nb = c;\nc = t;\nt = a;\na = b;\nb = t;\nprintf(\"%d %d %d\\n\", a, b, c);",
        "options": [
          "4 6 2",
          "2 4 6",
          "6 4 2",
          "6 2 4",
          "2 6 4"
        ],
        "answer": "C"
      },
      {
        "label": "Birbirine Bağlı Güncellemeler",
        "code": "int x = 10, y = 20, z = 30;\nx = y + z;\ny = x + z;\nz = x + y;\nprintf(\"%d %d %d\\n\", x, y, z);",
        "options": [
          "50 80 130",
          "50 50 100",
          "60 90 150",
          "50 70 120",
          "30 50 80"
        ],
        "answer": "A"
      },
      {
        "label": "Ardışık Değer Takibi",
        "code": "int a = 14;\nint b = 9;\na = a + b;\nb = a + b;\na = b + 1;\nprintf(\"%d %d\\n\", a, b);",
        "options": [
          "24 32",
          "33 32",
          "23 32",
          "33 23",
          "32 31"
        ],
        "answer": "B"
      },
      {
        "label": "Sağdan Sola Öncelik",
        "code": "int a = 5, b = 10, c = 20;\na = b = c;\nc = a + 5;\nb = b + c;\na = a + b + c;\nprintf(\"%d %d %d\\n\", a, b, c);",
        "options": [
          "90 45 25",
          "70 35 25",
          "85 45 20",
          "90 20 25",
          "65 30 25"
        ],
        "answer": "A"
      },
      {
        "label": "İki Adımlı Çapraz Atama",
        "code": "int m = 3, n = 7;\nint p = m + n;\nm = p + m;\nn = p + n;\np = m + n;\nprintf(\"%d %d %d\\n\", m, n, p);",
        "options": [
          "13 17 30",
          "10 17 27",
          "13 14 27",
          "16 17 33",
          "20 20 40"
        ],
        "answer": "A"
      },
      {
        "label": "Zincirleme İz Sürme",
        "code": "int x = 1, y = 2, z = 3;\nx = x + y + z;\ny = x + y;\nz = x + z;\nx = y + z;\nprintf(\"Sonuc: %d\", x + y + z);",
        "options": [
          "Sonuc: 38",
          "Sonuc: 36",
          "Sonuc: 34",
          "Sonuc: 28",
          "Sonuc: 42"
        ],
        "answer": "C"
      }
    ]
  },
  {
    "id": "bolum-2",
    "type": "lesson",
    "shortTitle": "2. C Veri Türleri",
    "title": "BÖLÜM 2: C Veri Türleri (Data Types)",
    "keywords": "int float double char ascii sizeof type casting tur donusumu",
    "blocks": [
      {
        "kind": "p",
        "html": "Bölüm 1'de sadece tam sayılar için <code>int</code> tipindeki değişkenleri kullandık. Ancak gerçek hayatta ve programlamada ondalıklı sayılara (virgüllü sayılar) ya da harflere/karakterlere de ihtiyaç duyarız. C dilinde her veri türünün bellekte kapladığı alan ve saklayabildiği değer farklıdır."
      },
      {
        "kind": "h2",
        "text": "2.1 Temel Veri Tipleri Tablosu"
      },
      {
        "kind": "table",
        "headers": [
          "Veri Tipi",
          "Açıklama",
          "Bellek Boyutu",
          "printf Belirteci",
          "Örnek Tanımlama"
        ],
        "rows": [
          [
            "<code>int</code>",
            "Tam Sayılar",
            "4 byte",
            "<code>%d</code> veya <code>%i</code>",
            "<code>int yas = 14;</code>"
          ],
          [
            "<code>float</code>",
            "Tek duyarlıklı kesirli/ondalıklı sayılar",
            "4 byte",
            "<code>%f</code>",
            "<code>float pi = 3.14;</code>"
          ],
          [
            "<code>double</code>",
            "Çift duyarlıklı (daha hassas) kesirli sayılar",
            "8 byte",
            "<code>%lf</code>",
            "<code>double hassas = 3.14159265;</code>"
          ],
          [
            "<code>char</code>",
            "Tek bir karakter (harf, rakam, sembol)",
            "1 byte",
            "<code>%c</code>",
            "<code>char harf = 'A';</code>"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "2.2 Veri Tiplerinin Özellikleri ve printf ile Yazdırılması"
      },
      {
        "kind": "h3",
        "text": "1. Karakter Türü (char), ASCII Tablosu ve Karakter Aritmetiği"
      },
      {
        "kind": "ul",
        "items": [
          "<code>char</code> türü tek bir karakter (harf, rakam, sembol) saklamak için kullanılır ve bellekte tam olarak <strong>1 byte (8 bit)</strong> yer kaplar.",
          "Karakterler tek tırnak (<code>' '</code>) içerisine yazılır: <code>'A'</code>, <code>'9'</code>, <code>'%'</code>. (Çift tırnak <code>\" \"</code> karakter dizileri/string için kullanılır, tek bir char için tek tırnak zorunludur).",
          "Ekrana karakter olarak basmak için <code>%c</code>, arka plandaki sayısal değerini basmak için <code>%d</code> yer tutucusu kullanılır."
        ]
      },
      {
        "kind": "code",
        "title": "char Tanımlama ve Yazdırma",
        "code": "char kar = 'A';\nprintf(\"%c \\n\", kar);"
      },
      {
        "kind": "p",
        "html": "<strong>ASCII Tablosu Nedir?</strong><br/>Bilgisayarlar harfleri doğrudan tanımaz; her karaktere bir tam sayı kodu atanmıştır. Buna <strong>ASCII (American Standard Code for Information Interchange)</strong> denir. C dilinde <code>char</code> aslında 1 baytlık küçük bir tam sayıdır!"
      },
      {
        "kind": "ul",
        "items": [
          "<strong>Kaç Tane ASCII Kodu Vardır?</strong> Standart ASCII tablosu <strong>0 ile 127</strong> arasında toplam <strong>128</strong> karakterden oluşur. <em>(Bazı sistemlerde 128–255 arası ek karakterlerle 256'ya çıkan \"Genişletilmiş ASCII\" bulunsa da C olimpiyat sorularında temel alınan kısım <strong>0–127</strong> standart tablosudur.)</em>",
          "<strong>Türkçe Karakterler:</strong> Standart 128 karakterlik ASCII tablosu İngiliz alfabesine göre hazırlanmıştır; <code>ç, ğ, ı, İ, ö, ş, ü</code> karakterleri bu tabloda yer almaz.",
          "<strong>Bölümler Nasıl Sıralanır?</strong><ul><li><strong>0 – 31:</strong> Görünmeyen kontrol karakterleri (<code>'\\0' = 0</code>, <code>'\\n' = 10</code> vb.).</li><li><strong>32'den itibaren:</strong> Yazdırılabilir (görünür) karakterler başlar (ilk karakter <code>32</code> numaralı boşluk <code>' '</code> karakteridir, ardından noktalama işaretleri ve semboller gelir).</li><li><strong>48 – 57:</strong> Rakam karakterleri (<code>'0' = 48</code> ... <code>'9' = 57</code>).</li><li><strong>65 – 90:</strong> Büyük harfler (<code>'A' = 65</code> ... <code>'Z' = 90</code>).</li><li><strong>97 – 122:</strong> Küçük harfler (<code>'a' = 97</code> ... <code>'z' = 122</code>).</li></ul>"
        ]
      },
      {
        "kind": "p",
        "html": "<strong>Olimpiyatta Bilinmesi Gereken Kritik ASCII Kuralları:</strong>"
      },
      {
        "kind": "ul",
        "items": [
          "<strong>Büyük ve Küçük Harfler Ayrıdır:</strong> C dili büyük/küçük harf duyarlıdır. <code>'A'</code> (65) ile <code>'a'</code> (97) bellekte tamamen farklı iki sayı olarak tutulur (<code>'A' != 'a'</code>).",
          "<strong>Önce Hangisi Gelir? (Sıralama Kuralı):</strong> Tabloda önce <strong>rakamlar</strong>, sonra <strong>büyük harfler</strong>, en son <strong>küçük harfler</strong> gelir: <code>'0' (48) &lt; 'A' (65) &lt; 'a' (97)</code>. Bu yüzden C dilinde <code>'Z' &lt; 'a'</code> karşılaştırması <strong>doğru (1)</strong> sonucunu verir!",
          "<strong>Önemli Fark (32 Kuralı):</strong> Herhangi bir harfin küçük ve büyük hali arasındaki fark her zaman <strong>32</strong>'dir (<code>'a' - 'A' = 32</code>). Bir büyük harfe 32 eklerseniz küçüğünü, küçük harften 32 çıkarırsanız büyüğünü elde edersiniz!"
        ]
      },
      {
        "kind": "p",
        "html": "<strong>ASCII Değerleri ile Karakter Tanımlama ve Yazdırma:</strong><br/>Bir <code>char</code> değişkenine doğrudan ASCII sayısal değeri de atanabilir:"
      },
      {
        "kind": "code",
        "title": "ASCII Değerleri ile Karakter Yazdırma",
        "code": "char a = 65, b = 66, c = 67;\nprintf(\"%c %c %c\\n\", a, b, c); // Ekrana karakter olarak basar: A B C\nprintf(\"%d %d %d\\n\", a, b, c); // Ekrana ASCII kodlarını basar: 65 66 67"
      },
      {
        "kind": "p",
        "html": "<strong>Karakter Aritmetiği (Olimpiyatlarda En Çok Çıkan Soru Tipi):</strong><br/>Karakterler üzerinde tam sayı gibi toplama, çıkarma ve karşılaştırma yapılabilir:"
      },
      {
        "kind": "code",
        "title": "Karakter Aritmetiği",
        "code": "char ch = 'b';\nch = ch + 1; // 'b' (98) + 1 = 99 -> 'c' karakteri olur\nprintf(\"%c\\n\", ch); // Çıktı: c\nchar harf = 'k';\nprintf(\"%c\\n\", harf - 3); // 'k' harfinden 3 önceki harfi basar: 'h'"
      },
      {
        "kind": "p",
        "html": "<strong>Pekiştirme Sorusu (Karakter Sınırları ve ASCII):</strong>"
      },
      {
        "kind": "code",
        "title": "Büyük Harfi Küçük Harfe Çevirme Formülü",
        "code": "char c = 'D';\nc = c + ('a' - 'A'); // 'D' harfini küçük harfe çevirme formülü!\nprintf(\"%c\", c);"
      },
      {
        "kind": "ul",
        "items": [
          "Analiz: <code>'a' - 'A' = 97 - 65 = 32</code>. <code>c = 'D' + 32 = 68 + 32 = 100</code> (<code>'d'</code>).",
          "<strong>Çıktı:</strong> <code>d</code>"
        ]
      },
      {
        "kind": "p",
        "html": "<strong>127'nin Üzerinde Bir Değer Atandığında Ne Olur? (Taşma / Overflow Mantığı)</strong><br/>C dilinde standart <code>char</code> (GCC derleyicisinde işaretli <code>signed char</code> olarak kabul edilir) bellekte <strong>1 byte (8 bit)</strong> yer kaplar ve yalnızca <strong>-128 ile +127</strong> arasındaki tam sayıları tutabilir.<br/>Bu değişkene <code>127</code>'den büyük bir değer (örneğin <code>128</code>, <code>130</code> veya <code>'z' + 10</code>) atanmaya çalışıldığında <strong>taşma (overflow)</strong> gerçekleşir:"
      },
      {
        "kind": "ul",
        "items": [
          "Sayaç en üst sınır olan <code>+127</code>'ye ulaştıktan sonra bir adım daha ilerlerse başa sarar ve en alt sınır olan <strong><code>-128</code></strong> değerine geçer (<code>127 + 1 = -128</code>, <code>127 + 2 = -127</code> gibi).",
          "Pratik hesaplama kuralı olarak, <code>127</code>'yi aşan bir <code>x</code> değeri (128–255 aralığında) <code>char</code> içine atandığında <strong><code>x - 256</code></strong> değerine dönüşür.",
          "Bu negatif sayı <code>%d</code> ile yazdırıldığında eksi bir tam sayı görünür; <code>%c</code> ile yazdırıldığında ise standart 0–127 ASCII tablosunda karşılığı olmadığı için ekranda anlamsız semboller veya bozuk karakterler (<code>?</code>, ) çıkar."
        ]
      },
      {
        "kind": "p",
        "html": "<strong>Pekiştirme Sorusu 2 (Karakter Sınırları ve ASCII Taşması):</strong><br/>Aşağıdaki C program parçası çalıştırıldığında ekran çıktısı ne olur? <em>(Bilgi: Standart <code>char</code> 1 byte ve işaretlidir; <code>'z'</code> karakterinin ASCII değeri <code>122</code>'dir.)</em>"
      },
      {
        "kind": "code",
        "title": "Pekiştirme Sorusu 2 — ASCII Taşması",
        "code": "char c = 'z';\nc = c + 10;\nprintf(\"%d\\n\", c);"
      },
      {
        "kind": "ul",
        "items": [
          "<strong>A)</strong> 132",
          "<strong>B)</strong> -124",
          "<strong>C)</strong> -128",
          "<strong>D)</strong> 127",
          "<strong>E)</strong> Derleme hatası verir",
          "<strong>Adım Adım İz Sürme:</strong> <code>'z'</code> karakterinin ASCII kodu <code>122</code>'dir. <code>122 + 10 = 132</code> olur; ancak işaretli <code>char</code> en fazla <code>127</code> tutabildiği için taşma meydana gelir (<code>132 - 256 = -124</code>). <code>%d</code> belirteci değişkendeki sayısal değeri ekrana <code>-124</code> olarak basar. (<strong>Doğru Seçenek: B</strong>)"
        ]
      },
      {
        "kind": "h3",
        "text": "2. Ondalıklı Sayılar (float ve double):"
      },
      {
        "kind": "ul",
        "items": [
          "Ondalıklı sayılar yazılırken virgül değil nokta (<code>.</code>) kullanılır.",
          "<code>float</code> için <code>%f</code>, <code>double</code> için <code>%lf</code> kullanılır.",
          "Varsayılan olarak <code>%f</code> virgülden sonra 6 basamak basar. Basamak sayısını sınırlandırmak için <code>%.1f</code> (1 basamak) veya <code>%.2f</code> (2 basamak) formatı kullanılır."
        ]
      },
      {
        "kind": "code",
        "title": "Basamak Sınırlandırma (%.2f)",
        "code": "float fiyat = 19.99;\nprintf(\"Fiyat: %.2f TL\\n\", fiyat); // Çıktı: Fiyat: 19.99 TL"
      },
      {
        "kind": "code",
        "title": "Farklı Veri Tiplerini Ayrı Ayrı Yazdırma",
        "code": "int myNum = 5;               // Integer (tam sayı)\nfloat myFloatNum = 5.99;     // Tek duyarlıklı kesirli sayı\ndouble d = 3.7548;           // Çift duyarlıklı kesirli sayı\nchar myLetter = 'D';         // Karakter\n// Değişkenleri ayrı ayrı ekrana yazdırma\nprintf(\"%d\\n\", myNum);\nprintf(\"%f\\n\", myFloatNum);\nprintf(\"%lf\\n\", d);\nprintf(\"%c\\n\", myLetter);"
      },
      {
        "kind": "p",
        "html": "<strong>Ekran Çıktısı:</strong> <code>5</code> &nbsp; <code>5.990000</code> &nbsp; <code>3.754800</code> &nbsp; <code>D</code>"
      },
      {
        "kind": "code",
        "title": "Tüm Değişkenleri Tek Bir printf ile Yazdırma",
        "code": "int myNum = 5;\nfloat myFloatNum = 5.99;\ndouble d = 3.7548;\nchar myLetter = 'D';\n// Tüm değişkenleri tek bir printf ile yazdırma\nprintf(\"Sayi: %d, Kesir: %.2f, Hassas: %.4lf, Harf: %c\\n\", myNum, myFloatNum, d, myLetter);"
      },
      {
        "kind": "p",
        "html": "<strong>Ekran Çıktısı:</strong> <code>Sayi: 5, Kesir: 5.99, Hassas: 3.7548, Harf: D</code>"
      },
      {
        "kind": "h2",
        "text": "2.3 Bellek Boyutları ve sizeof() İşleci (Olimpiyat Sınav Tuzakları)"
      },
      {
        "kind": "p",
        "html": "Bir veri tipinin veya değişkenin bellekte (RAM) kaç byte yer kapladığını öğrenmek için <code>sizeof()</code> işleci kullanılır."
      },
      {
        "kind": "code",
        "title": "sizeof() Kullanımı",
        "code": "printf(\"%lu\\n\", sizeof(char));   // Çıktı: 1\nprintf(\"%lu\\n\", sizeof(int));    // Çıktı: 4\nprintf(\"%lu\\n\", sizeof(float));  // Çıktı: 4\nprintf(\"%lu\\n\", sizeof(double)); // Çıktı: 8"
      },
      {
        "kind": "callout",
        "variant": "trap",
        "title": "Önemli Olimpiyat Tuzağı (Çıkmış Soru Kalıbı)",
        "html": "Sınavlarda sıkça sorulan <em>\"Bir float değişkenin hafızada kapladığı alan bir int değişkeninin kapladığı alandan daha fazladır\"</em> önermesi <strong>YANLIŞTIR</strong>.<br/>Standart GCC derleyicisinde hem <code>int</code> hem de <code>float</code> tam olarak <strong>4 byte</strong> yer kaplar: <code>sizeof(int) == sizeof(float) == 4</code>"
      },
      {
        "kind": "h2",
        "text": "Pekiştirme Alıştırmaları"
      },
      {
        "kind": "h3",
        "text": "Alıştırma 1: Doğru Belirteci Bulma"
      },
      {
        "kind": "p",
        "html": "Aşağıdaki değişken tanımlamalarına göre ekrana sırasıyla <code>B</code>, <code>15</code> ve <code>3.5</code> yazdırmak için boş bırakılan yerlere hangi belirteçler gelmelidir?"
      },
      {
        "kind": "code",
        "title": "Alıştırma 1 — Doğru Belirteci Bulma",
        "code": "char harf = 'B';\nint adet = 15;\nfloat oran = 3.5;\nprintf(\"___ ___ ___\", harf, adet, oran);"
      },
      {
        "kind": "p",
        "html": "<strong>Çözüm:</strong> <code>harf</code> için <code>%c</code>, <code>adet</code> için <code>%d</code>, <code>oran</code> için <code>%.1f</code> (veya <code>%f</code>) gelmelidir (<code>\"%c %d %.1f\"</code>)."
      },
      {
        "kind": "h3",
        "text": "Alıştırma 2: sizeof Mantığı"
      },
      {
        "kind": "p",
        "text": "Aşağıdaki kod parçası çalıştırıldığında ekran çıktısı ne olur?"
      },
      {
        "kind": "code",
        "title": "Alıştırma 2 — sizeof Mantığı",
        "code": "int a = 100;\ndouble b = 5.5;\nprintf(\"%lu %lu\", sizeof(a), sizeof(b));"
      },
      {
        "kind": "p",
        "html": "<strong>Çözüm:</strong> <code>a</code> değişkeni <code>int</code> olduğu için 4, <code>b</code> değişkeni <code>double</code> olduğu için 8 yazar. Çıktı: <code>4 8</code>."
      },
      {
        "kind": "h2",
        "text": "2.4 Tür Dönüşümleri (Type Conversion)"
      },
      {
        "kind": "p",
        "text": "Programlamada bazen bir veri tipindeki değeri başka bir veri tipine dönüştürmek gerekir. C dilinde bu işlem iki farklı şekilde gerçekleşir:"
      },
      {
        "kind": "h3",
        "text": "1. Örtülü (Otomatik) Dönüşüm (Implicit Conversion)"
      },
      {
        "kind": "p",
        "text": "Derleyici tarafından kod yazarına sorulmadan otomatik olarak yapılan dönüşümdür. Genellikle daha dar bir tür, daha geniş bir türe dönüştürülür:"
      },
      {
        "kind": "code",
        "title": "Örtülü (Otomatik) Dönüşüm",
        "code": "// Otomatik Dönüşüm (int -> float)\nfloat a = 3;\nprintf(\"%f\\n\", a); // Çıktı: 3.000000\n// Otomatik Dönüşüm (float -> int: Kesirli kısım atılır!)\nint b = 3.14;\nprintf(\"%d\\n\", b);   // Çıktı: 3 (0.14 kısmı yuvarlanmaz, direkt kırpılır!)"
      },
      {
        "kind": "h3",
        "text": "2. Açık (Manuel / Zorlamalı) Dönüşüm (Explicit Conversion / Type Casting)"
      },
      {
        "kind": "p",
        "html": "Programcının değeri dönüştürmek için parantez içinde hedef türü açıkça belirttiği durumdur: <code>(tur)deger</code>"
      },
      {
        "kind": "code",
        "title": "Açık Tür Dönüşümü (Type Casting)",
        "code": "int num1 = 5;\nint num2 = 2;\n// Tamsayı bölmesi: 5 / 2 = 2\nfloat sonuc1 = num1 / num2;\nprintf(\"%.1f\\n\", sonuc1); // Çıktı: 2.0 (Çünkü bölme önce yapıldı ve tamsayı oldu!)\n// Tür dönüşümü ile kesirli bölme:\nfloat sonuc2 = (float)num1 / num2;\nprintf(\"%.1f\\n\", sonuc2); // Çıktı: 2.5 (num1 önce 5.0 oldu, sonra 2'ye bölündü)"
      },
      {
        "kind": "h3",
        "text": "3. Olimpiyat Sınav Tuzakları ve Analizi"
      },
      {
        "kind": "p",
        "html": "<strong>Tuzak 1: <code>(float)(a / b)</code> vs <code>(float)a / b</code> Öncelik Farkı (2018 TÜBİTAK Soru 22/24)</strong><br/>Parantez önceliği sınavda en çok sorulan tuzaklardan biridir:"
      },
      {
        "kind": "code",
        "title": "Tuzak 1 — Parantez Önceliği Farkı",
        "code": "int i = 7;\nfloat c = (float)(i / 2);\nprintf(\"%.1f\", c);"
      },
      {
        "kind": "ul",
        "items": [
          "<code>(i / 2)</code> parantez içinde olduğu için önce tamsayı bölmesi yapılır: <code>7 / 2 = 3</code> (kesirli kısım atılır).",
          "Ardından çıkan <code>3</code> tam sayısı <code>(float)</code> ile <code>3.0</code> yapılır.",
          "<strong>Ekran Çıktısı:</strong> <code>3.0</code> (3.5 DEĞİLDİR!).",
          "Eğer kesirli sonuç (<code>3.5</code>) isteniyorsa parantez kaldırılmalı ve <code>(float)i / 2</code> veya <code>i / 2.0</code> yazılmalıdır."
        ]
      },
      {
        "kind": "callout",
        "variant": "trap",
        "title": "Tuzak 2: float ile int İşlem Gördüğünde Ne Olur? (2021 TÜBİTAK Soru 27)",
        "html": "<strong>Soru Önermesi:</strong> \"Bölme işleminde sayılardan birisi int diğeri float ise, float olan otomatik olarak int'e çevrildikten sonra işlem gerçekleştirilir.\"<br/><strong>Kural:</strong> Bu önerme <strong>YANLIŞTIR</strong>. C dilinde işlem yapılırken derleyici dar türü geniş türe terfi ettirir (type promotion). Yani <code>int</code> olan sayı <code>float</code>'a çevrilir ve sonuç <code>float</code> olarak hesaplanır."
      }
    ],
    "quiz": [
      {
        "prompt": "Aşağıdaki C kod parçası çalıştırıldığında ekran çıktısı ne olur? (ASCII 'A'=65)",
        "code": "char c = 'E';\nc = c + 3;\nprintf(\"%c %d\\n\", c, c);",
        "options": [
          "H 72",
          "E 69",
          "H 70",
          "G 71",
          "H 68"
        ],
        "answer": "A"
      },
      {
        "code": "float f = 7.85;\nint a = f;\nfloat sonuc = a + 2.5;\nprintf(\"%.1f\\n\", sonuc);",
        "options": [
          "10.4",
          "9.5",
          "10.0",
          "10.35",
          "9.0"
        ],
        "answer": "B"
      },
      {
        "code": "char k = 'A';\nint x = 10;\nprintf(\"%lu %lu\\n\", sizeof(k), sizeof(x));",
        "options": [
          "1 2",
          "4 4",
          "1 4",
          "1 8",
          "2 4"
        ],
        "answer": "C"
      },
      {
        "code": "int x = 9;\nint y = 2;\nfloat sonuc = (float)x / y;\nprintf(\"%.2f\\n\", sonuc);",
        "options": [
          "4.00",
          "4.50",
          "4.5",
          "5.00",
          "4.25"
        ],
        "answer": "B"
      },
      {
        "code": "int a = 11;\nint b = 4;\nfloat c = (float)(a / b);\nprintf(\"%.1f\\n\", c);",
        "options": [
          "2.75",
          "2.8",
          "3.0",
          "2.0",
          "2.5"
        ],
        "answer": "D"
      },
      {
        "code": "char harf = 'B';\nharf = harf + ('a' - 'A');\nprintf(\"%c\\n\", harf);",
        "options": [
          "a",
          "b",
          "C",
          "c",
          "B"
        ],
        "answer": "B"
      },
      {
        "code": "char c1 = 'X', c2 = 'Y';\nchar temp = c1;\nc1 = c2;\nc2 = 'Z';\nprintf(\"%c %c %c\\n\", c1, c2, temp);",
        "options": [
          "Y Z X",
          "X Y Z",
          "Y X Z",
          "Z Y X",
          "Y Z Y"
        ],
        "answer": "A"
      },
      {
        "code": "int a = 5;\nfloat b = 2.0;\nfloat sonuc = a / b + 3;\nprintf(\"%.1f\\n\", sonuc);",
        "options": [
          "5.0",
          "5.5",
          "4.0",
          "4.5",
          "2.5"
        ],
        "answer": "B"
      },
      {
        "code": "char x = 66;\nchar y = 3;\nchar z = x + y;\nprintf(\"%c %d\\n\", z, z);",
        "options": [
          "E 69",
          "D 68",
          "C 69",
          "F 70",
          "E 68"
        ],
        "answer": "A"
      },
      {
        "code": "float p = 4.9;\nfloat q = 3.2;\nint toplam = p + q;\nprintf(\"%d\\n\", toplam);",
        "options": [
          "7",
          "8",
          "8.1",
          "9",
          "7.0"
        ],
        "answer": "B"
      },
      {
        "code": "int a = 15;\nint b = 4;\nfloat x = (float)a / b;\nint y = (int)x;\nfloat sonuc = x - y;\nprintf(\"%.2f\\n\", sonuc);",
        "options": [
          "0.25",
          "0.75",
          "0.50",
          "3.75",
          "3.00"
        ],
        "answer": "B"
      },
      {
        "code": "char c1 = '7';\nchar c2 = '3';\nint fark = c1 - c2;\nprintf(\"%d\\n\", fark);",
        "options": [
          "10",
          "4",
          "52",
          "48",
          "55"
        ],
        "answer": "B"
      },
      {
        "prompt": "(Bilgi: '0' karakterinin ASCII decimal değeri 48'dir.) Aşağıdaki C kod parçası çalıştırıldığında ekran çıktısı ne olur?",
        "code": "int sayi = 5;\nchar c = '0' + sayi;\nprintf(\"%c %d\\n\", c, c);",
        "options": [
          "5 5",
          "0 48",
          "5 53",
          "53 53",
          "5 48"
        ],
        "answer": "C"
      },
      {
        "code": "char a = 'K';\nint b = 20;\ndouble c = 4.5;\nprintf(\"%lu\\n\", sizeof(a) + sizeof(b) + sizeof(c));",
        "options": [
          "13",
          "9",
          "16",
          "14",
          "12"
        ],
        "answer": "A"
      },
      {
        "code": "int x = 7;\nint y = 2;\nfloat z = 2.0;\nfloat sonuc = (x / y) + (x / z);\nprintf(\"%.1f\\n\", sonuc);",
        "options": [
          "6.5",
          "7.0",
          "6.0",
          "7.5",
          "3.5"
        ],
        "answer": "A"
      },
      {
        "code": "char basamak1 = '4';\nchar basamak2 = '8';\nint toplam = (basamak1 - '0') + (basamak2 - '0');\nprintf(\"%d\\n\", toplam);",
        "options": [
          "108",
          "12",
          "60",
          "48",
          "52"
        ],
        "answer": "B"
      },
      {
        "code": "int i = 50;\nfloat f = 50.0f;\nint fark = sizeof(f) - sizeof(i);\nprintf(\"%d\\n\", fark);",
        "options": [
          "4",
          "-4",
          "0",
          "8",
          "2"
        ],
        "answer": "C"
      },
      {
        "code": "int a;\nfloat b;\nb = a = 6.95f;\nprintf(\"%.2f %d\\n\", b, a);",
        "options": [
          "6.95 6",
          "6.00 6",
          "7.00 7",
          "6.95 7",
          "6.00 7"
        ],
        "answer": "B"
      },
      {
        "code": "char c = 'A';\nint x = c + 1;\nchar yeni = x + 1;\nprintf(\"%c %d %c\\n\", c, x, yeni);",
        "options": [
          "A 66 C",
          "A 65 B",
          "A B C",
          "65 66 67",
          "A 66 B"
        ],
        "answer": "A"
      },
      {
        "code": "int pay = 3;\nint payda = 4;\nfloat oran1 = (float)(pay / payda);\nfloat oran2 = (float)pay / payda;\nprintf(\"%.2f %.2f\\n\", oran1, oran2);",
        "options": [
          "0.75 0.75",
          "0.00 0.75",
          "0.00 0.00",
          "0.75 0.00",
          "1.00 0.75"
        ],
        "answer": "B"
      }
    ]
  },
  {
    "id": "bolum-3",
    "type": "lesson",
    "shortTitle": "3. C İşleçleri (Operators)",
    "title": "BÖLÜM 3: C İşleçleri (Operators)",
    "keywords": "operator aritmetik mod % ++ -- bilesik atama karsilastirma mantiksal oncelik kisa devre",
    "blocks": [
      {
        "kind": "h2",
        "text": "3.1 Aritmetik İşleçler, Tamsayı Bölmesi ve Mod (%)"
      },
      {
        "kind": "table",
        "headers": [
          "İşleç",
          "Adı",
          "Açıklama",
          "Örnek",
          "Sonuç"
        ],
        "rows": [
          [
            "<code>+</code>",
            "Toplama",
            "İki değeri toplar",
            "<code>7 + 2</code>",
            "9"
          ],
          [
            "<code>-</code>",
            "Çıkarma",
            "Sol değerden sağ değeri çıkarır",
            "<code>7 - 2</code>",
            "5"
          ],
          [
            "<code>*</code>",
            "Çarpma",
            "İki değeri çarpar",
            "<code>7 * 2</code>",
            "14"
          ],
          [
            "<code>/</code>",
            "Bölme",
            "Tamsayı bölmesinde kesirli kısım atılır",
            "<code>7 / 2</code>",
            "3"
          ],
          [
            "<code>%</code>",
            "Mod (Kalan)",
            "Bölme işleminden kalan tam sayıyı verir",
            "<code>7 % 2</code>",
            "1"
          ],
          [
            "<code>++</code>",
            "Artırma",
            "Değişkenin değerini 1 artırır",
            "<code>++x</code> / <code>x++</code>",
            "x = x + 1"
          ],
          [
            "<code>--</code>",
            "Azaltma",
            "Değişkenin değerini 1 azaltır",
            "<code>--x</code> / <code>x--</code>",
            "x = x - 1"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "trap",
        "title": "Mod (%) ve Negatif Sayılar Kuralı",
        "html": "<code>%</code> yüzde hesaplamaz, kalanı verir. Küçük sayının büyüğe modu kendisidir (<code>3 % 5 = 3</code>). C99/GCC'de kalanın işareti daima <strong>soldaki (bölünen) sayının</strong> işaretidir: <code>-14 % 4 = -2</code>, <code>14 % -4 = 2</code>."
      },
      {
        "kind": "code",
        "title": "Mod İşleci Örnekleri",
        "code": "printf(\"3 %% 5  = %d\\n\", 3 % 5);\nprintf(\"-14 %% 4 = %d\\n\", -14 % 4);\nprintf(\"14 %% -4 = %d\\n\", 14 % -4);"
      },
      {
        "kind": "h2",
        "text": "3.2 Artırma (++) ve Azaltma (--) İşleçleri (Ön vs. Son)"
      },
      {
        "kind": "ul",
        "items": [
          "<strong>Ön-Artırma (<code>++i</code>):</strong> Önce 1 artırır, sonra yeni değeri kullanır.",
          "<strong>Son-Artırma (<code>i++</code>):</strong> Önce eski değeri kullanır, hemen sonra 1 artırır."
        ]
      },
      {
        "kind": "code",
        "title": "2018 TÜBİTAK Ortaokul Soru 21",
        "code": "int i = 7;\nint b = i++;\nint c = --b;\nint d = c--;\nint e = ++d;\nint f = e--;\nprintf(\"%d\\n\", f);"
      },
      {
        "kind": "h2",
        "text": "3.3 Bileşik Atama, Karşılaştırma ve Mantıksal İşleçler"
      },
      {
        "kind": "p",
        "html": "C dilinde karşılaştırma ve mantıksal ifadeler doğru ise <code>1</code>, yanlış ise <code>0</code> üretir. <code>&amp;&amp;</code> (VE), <code>||</code> (VEYA) ve <code>!</code> (DEĞİL) işleçlerinde <strong>kısa devre (short-circuit)</strong> kuralı geçerlidir: sol taraf sonucu kesinleştirdiyse sağ taraf hiç çalıştırılmaz."
      },
      {
        "kind": "image",
        "src": "img/Mantiksal_Islecler_Kopru_Metaforu.jpg",
        "alt": "Mantıksal İşleçler ve Köprü Metaforu (VE && ve VEYA ||)",
        "caption": "Mantıksal İşleçler (&& ve ||) için Köprü Metaforu",
        "maxWidth": "720px"
      },
      {
        "kind": "table",
        "headers": [
          "Sıra",
          "İşleç Grubu",
          "İşleçler",
          "Birleşme Yönü"
        ],
        "rows": [
          [
            "1",
            "Parantezler",
            "<code>()</code>",
            "Soldan Sağa"
          ],
          [
            "2",
            "Çarpma / Bölme / Mod",
            "<code>* / %</code>",
            "Soldan Sağa"
          ],
          [
            "3",
            "Toplama / Çıkarma",
            "<code>+ -</code>",
            "Soldan Sağa"
          ],
          [
            "4",
            "İlişkisel",
            "<code>&gt; &lt; &gt;= &lt;=</code>",
            "Soldan Sağa"
          ],
          [
            "5",
            "Eşitlik",
            "<code>== !=</code>",
            "Soldan Sağa"
          ],
          [
            "6",
            "Mantıksal VE",
            "<code>&amp;&amp;</code>",
            "Soldan Sağa"
          ],
          [
            "7",
            "Mantıksal VEYA",
            "<code>||</code>",
            "Soldan Sağa"
          ],
          [
            "8",
            "Atama",
            "<code>= += -= *= /= %=</code>",
            "<strong>Sağdan Sola</strong>"
          ]
        ]
      }
    ],
    "quiz": [
      {
        "code": "int a = 14;\nint b = 4;\nint c = a % b + a / b;\nprintf(\"%d\\n\", c);",
        "options": [
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "answer": "B"
      },
      {
        "code": "int x = 6;\nint y = ++x * 2;\nint z = x++ + y;\nprintf(\"%d %d %d\\n\", x, y, z);",
        "options": [
          "8 14 21",
          "7 14 21",
          "8 12 20",
          "7 12 19",
          "8 14 22"
        ],
        "answer": "A"
      },
      {
        "code": "int a = 8;\nint b = 3;\na += b * 2;\nb *= a - 10;\nprintf(\"%d %d\\n\", a, b);",
        "options": [
          "22 36",
          "14 12",
          "14 36",
          "20 30",
          "14 42"
        ],
        "answer": "B"
      },
      {
        "code": "int x = 5, y = 8;\nint sonuc = (x < y) + (x == y) + (y >= 8);\nprintf(\"%d\\n\", sonuc);",
        "options": [
          "1",
          "2",
          "3",
          "0",
          "4"
        ],
        "answer": "B"
      },
      {
        "code": "int a = 7, b = 2;\nint sonuc = a % b * 5 + a / b;\nprintf(\"%d\\n\", sonuc);",
        "options": [
          "8",
          "10",
          "13",
          "6",
          "11"
        ],
        "answer": "A"
      },
      {
        "code": "int x = 10, y = 20;\nint k = (x > 5 && y < 15) || (x != y && y > 10);\nprintf(\"%d\\n\", k);",
        "options": [
          "0",
          "1",
          "2",
          "10",
          "20"
        ],
        "answer": "B"
      },
      {
        "code": "int m = 4;\nint n = 3;\nm *= n + 3;\nn += m / 6;\nprintf(\"%d %d\\n\", m, n);",
        "options": [
          "24 7",
          "15 5",
          "24 8",
          "18 6",
          "24 4"
        ],
        "answer": "A"
      },
      {
        "code": "int a = 3, b = 5;\nint c = a > 2 && b < 10;\nint d = !(a == 3);\nprintf(\"%d %d\\n\", c, d);",
        "options": [
          "1 1",
          "0 0",
          "1 0",
          "0 1",
          "1 3"
        ],
        "answer": "C"
      },
      {
        "code": "int x = 12;\nx %= 5;\nx += x * 3;\nprintf(\"%d\\n\", x);",
        "options": [
          "8",
          "6",
          "10",
          "12",
          "4"
        ],
        "answer": "A"
      },
      {
        "code": "int a = 5;\nint b = 2;\nfloat sonuc = a / b + a % b;\nprintf(\"%.1f\\n\", sonuc);",
        "options": [
          "3.5",
          "3.0",
          "2.5",
          "2.0",
          "4.0"
        ],
        "answer": "B"
      },
      {
        "code": "int i = 5;\nint j = 2;\nint k = i++ * 3 - --j * 4;\nprintf(\"%d %d %d\\n\", i, j, k);",
        "options": [
          "6 1 11",
          "5 1 11",
          "6 1 14",
          "6 2 11",
          "5 2 7"
        ],
        "answer": "A"
      },
      {
        "code": "int a = 20;\nint b = -6;\nint k1 = a % b;\nint k2 = b % a;\nprintf(\"%d %d\\n\", k1, k2);",
        "options": [
          "2 -6",
          "-2 -6",
          "2 6",
          "-2 6",
          "0 -6"
        ],
        "answer": "A"
      },
      {
        "prompt": "(Bilgi: 'A' karakterinin ASCII decimal değeri 65'tir.) Aşağıdaki C kod parçası çalıştırıldığında ekran çıktısı ne olur?",
        "code": "char c = 'C';\nint x = 4;\nint sonuc = (c - 'A') * 5 + x % 3;\nprintf(\"%d\\n\", sonuc);",
        "options": [
          "11",
          "16",
          "6",
          "21",
          "10"
        ],
        "answer": "A"
      },
      {
        "code": "int a = 10, b = 20, c = 30;\nint x = a < b < c;\nint y = c > b > a;\nprintf(\"%d %d\\n\", x, y);",
        "options": [
          "1 1",
          "1 0",
          "0 1",
          "0 0",
          "1 2"
        ],
        "answer": "B"
      },
      {
        "code": "int x = 8;\nint y = 3;\nx -= y += 2;\nprintf(\"%d %d\\n\", x, y);",
        "options": [
          "3 5",
          "5 5",
          "3 3",
          "5 3",
          "0 5"
        ],
        "answer": "A"
      },
      {
        "code": "int a = 2, b = 3;\nint sonuc = a + b * a == 8 && b - a > 0;\nprintf(\"%d\\n\", sonuc);",
        "options": [
          "0",
          "1",
          "8",
          "10",
          "2"
        ],
        "answer": "B"
      },
      {
        "code": "int a = 7;\nint b = 4;\nfloat c = (float)(a % b) / 2 + a / b;\nprintf(\"%.2f\\n\", c);",
        "options": [
          "2.50",
          "2.75",
          "2.00",
          "1.75",
          "1.50"
        ],
        "answer": "A"
      },
      {
        "code": "int x = 2;\nint y = 5;\nint z = 10;\nint t = x + y * z / x % y;\nprintf(\"%d\\n\", t);",
        "options": [
          "2",
          "4",
          "0",
          "7",
          "5"
        ],
        "answer": "A"
      },
      {
        "code": "char h = 'B';\nint a = 10;\nint sonuc = (h >= 'A' && h <= 'Z') * 20 + (sizeof(a) == sizeof(float)) * 5;\nprintf(\"%d\\n\", sonuc);",
        "options": [
          "25",
          "20",
          "5",
          "0",
          "1"
        ],
        "answer": "A"
      },
      {
        "code": "int a = 1, b = 2, c = 3;\nint sonuc = a + b * c > 6 && (c = a + 5) > 4;\nprintf(\"%d %d\\n\", sonuc, c);",
        "options": [
          "1 6",
          "1 3",
          "0 3",
          "0 6",
          "1 5"
        ],
        "answer": "A"
      },
      {
        "code": "int x = 5, y = 3, z = 10;\nint sonuc = (z > 15) && (z = x > y && x++);\nprintf(\"%d %d %d\\n\", x, y, z);",
        "options": [
          "5 3 10",
          "6 3 10",
          "5 3 1",
          "6 3 1",
          "0 0 0"
        ],
        "answer": "A"
      }
    ]
  },
  {
    "id": "bolum-4",
    "type": "lesson",
    "shortTitle": "4. Koşullar (If - Else)",
    "title": "BÖLÜM 4: Koşullu Durumlar ve Karar Yapıları (If - Else)",
    "keywords": "bool if else else if dangling else ternary uclu sart ? :",
    "blocks": [
      {
        "kind": "h2",
        "text": "4.1 Boolean Kavramı ve C'de Doğruluk Kuralı"
      },
      {
        "kind": "ul",
        "items": [
          "<code>0</code>: Mantıksal olarak <strong>YANLIŞ (FALSE)</strong>.",
          "<strong>0 Hariç Her Şey</strong> (pozitif, negatif sayılar, karakterler): <strong>DOĞRU (TRUE)</strong>."
        ]
      },
      {
        "kind": "h2",
        "text": "4.2 if - else - else if ve Olimpiyat Tuzakları"
      },
      {
        "kind": "callout",
        "variant": "trap",
        "title": "Kritik Olimpiyat Tuzakları",
        "html": "<ol><li><strong>Süslü parantez yoksa</strong> yalnızca ilk komut satırı <code>if</code>'e bağlıdır.</li><li><strong>Noktalı virgül tuzağı:</strong> <code>if (x &gt; 5);</code> koşulu anında bitirir, alttaki blok her zaman çalışır.</li><li><strong>Atama tuzağı:</strong> <code>if (x = 5)</code> atama yapar ve 5 sıfırdan farklı olduğu için daima DOĞRU sayılır!</li><li><strong>Dangling else:</strong> Her <code>else</code>, kendisine en yakın eşleşmemiş <code>if</code> ile eşleşir.</li></ol>"
      },
      {
        "kind": "h2",
        "text": "4.3 Üçlü Şart İşleci (Ternary Operator ? :)"
      },
      {
        "kind": "code",
        "title": "Ternary (? :) Kullanımı",
        "code": "int a = 10, b = 25;\nint en_buyuk = (a > b) ? a : b;\nprintf(\"En buyuk: %d\\n\", en_buyuk);"
      }
    ],
    "quiz": [
      {
        "code": "int a = 0;\nif (a)\n    printf(\"Dogru\\n\");\nelse\n    printf(\"Yanlis\\n\");",
        "options": [
          "Dogru",
          "Yanlis",
          "0",
          "1",
          "Hata verir"
        ],
        "answer": "B"
      },
      {
        "code": "int x = -5;\nif (x) { printf(\"A\"); }\nif (x + 5) { printf(\"B\"); }\nelse { printf(\"C\"); }",
        "options": [
          "A",
          "B",
          "AC",
          "BC",
          "ABC"
        ],
        "answer": "C"
      },
      {
        "code": "int a = 5;\nif (a > 10)\na = a + 2;\na = a * 2;\nprintf(\"%d\\n\", a);",
        "options": [
          "5",
          "7",
          "10",
          "14",
          "0"
        ],
        "answer": "C"
      },
      {
        "code": "int x = 2;\nif (x = 0) { printf(\"Sifir \"); }\nelse { printf(\"Degil \"); }\nprintf(\"%d\\n\", x);",
        "options": [
          "Sifir 0",
          "Sifir 2",
          "Degil 0",
          "Degil 2",
          "Degil 1"
        ],
        "answer": "C"
      },
      {
        "code": "int a = 3;\nif (a > 5);\n{\n    a = a + 10;\n}\nprintf(\"%d\\n\", a);",
        "options": [
          "3",
          "13",
          "5",
          "8",
          "Hata verir"
        ],
        "answer": "B"
      },
      {
        "code": "int x = 15;\nif (x > 20) printf(\"1 \");\nelse if (x > 10) printf(\"2 \");\nelse if (x > 5) printf(\"3 \");\nelse printf(\"4 \");",
        "options": [
          "2",
          "2 3",
          "2 3 4",
          "1 2 3",
          "3"
        ],
        "answer": "A"
      },
      {
        "code": "int a = 5, b = 2;\nif (a > 3)\n    if (b > 5)\n        printf(\"Kirmizi\\n\");\n    else\n        printf(\"Mavi\\n\");",
        "options": [
          "Kirmizi",
          "Mavi",
          "Kirmizi Mavi",
          "Çıktı üretmez",
          "Hata verir"
        ],
        "answer": "B"
      },
      {
        "code": "int a = 2, b = 8;\nif (a > 5)\n    if (b > 5)\n        printf(\"A\\n\");\nelse\n    printf(\"B\\n\");",
        "options": [
          "A",
          "B",
          "AB",
          "Çıktı üretmez",
          "Hata verir"
        ],
        "answer": "D"
      },
      {
        "code": "int a = 4, b = 7;\nint sonuc = (a > b) ? a * 2 : b + 3;\nprintf(\"%d\\n\", sonuc);",
        "options": [
          "8",
          "10",
          "7",
          "14",
          "11"
        ],
        "answer": "B"
      },
      {
        "code": "int x = 10;\nint y = (x > 5) ? (x < 8 ? 1 : 2) : 3;\nprintf(\"%d\\n\", y);",
        "options": [
          "1",
          "2",
          "3",
          "10",
          "8"
        ],
        "answer": "B"
      }
    ]
  },
  {
    "id": "bolum-5",
    "type": "lesson",
    "shortTitle": "5. Switch - Case",
    "title": "BÖLÜM 5: Çoklu Karar Yapısı (Switch - Case)",
    "keywords": "switch case break default fall through",
    "blocks": [
      {
        "kind": "h2",
        "text": "5.1 switch - case Yapısı ve Kısıtları"
      },
      {
        "kind": "ul",
        "items": [
          "<code>switch</code> ifadesi yalnızca <strong>tam sayı (int)</strong> veya <strong>karakter (char)</strong> olabilir; <code>float</code>/<code>double</code> kullanılamaz.",
          "<code>case</code> yanına değişken yazılamaz, sadece sabit değer yazılabilir."
        ]
      },
      {
        "kind": "h2",
        "text": "5.2 Olimpiyatların 1 Numaralı Tuzağı: Fall-Through (break Olmaması)"
      },
      {
        "kind": "callout",
        "variant": "trap",
        "title": "Fall-Through Kuralı",
        "html": "Eşleşen <code>case</code> bloğunda <code>break;</code> yoksa, program alttaki <code>case</code> veya <code>default</code> şartlarına bakmaksızın bir <code>break;</code> görene kadar aşağı doğru akarak çalışmaya devam eder!"
      },
      {
        "kind": "code",
        "title": "2019 TÜBİTAK Ortaokul Soru 30",
        "code": "int a = 3, b = 2, c = 1;\nswitch (b) {\n    case 1: a--; c--;\n    case 2: a++; b++;\n    case 0: a = c * 2; b = 1; break;\n    default: b++;\n}\nprintf(\"%d %d %d\\n\", a, b, c); // Çıktı: 2 1 1"
      },
      {
        "kind": "h2",
        "text": "5.3 default Bloğunun Konumu Tuzağı"
      },
      {
        "kind": "code",
        "title": "default Başta Olduğunda Fall-Through",
        "code": "int x = 5;\nswitch (x) {\n    default: printf(\"D \");\n    case 1: printf(\"1 \"); break;\n    case 2: printf(\"2 \");\n}\n// Çıktı: D 1"
      }
    ],
    "quiz": []
  },
  {
    "id": "deneme-1",
    "type": "exam",
    "shortTitle": "Deneme 1 (Orta)",
    "title": "TÜBİTAK 1. Aşama Deneme Sınavı - 1 (Orta Seviye)",
    "subtitle": "Kapsam: Bölüm 1–4 (Değişkenler, Veri Türleri, İşleçler ve Koşullar)",
    "quiz": [
      {
        "code": "int x = 7;\nint y = 3;\nx = x + y;\ny = x - y;\nx = x + y;\nprintf(\"%d %d\\n\", x, y);",
        "options": [
          "10 7",
          "17 7",
          "10 3",
          "14 7",
          "17 10"
        ],
        "answer": "B"
      },
      {
        "code": "int a, b, c;\na = b = c = 12;\nc += 8;\nb = c - a;\na = a + b + c;\nprintf(\"%d %d %d\\n\", a, b, c);",
        "options": [
          "40 8 20",
          "32 8 20",
          "40 12 20",
          "28 8 20",
          "40 8 12"
        ],
        "answer": "A"
      },
      {
        "prompt": "(Bilgi: 'A' karakterinin ASCII değeri 65'tir.) Ekran çıktısı ne olur?",
        "code": "char c = 'K';\nc = c - 4;\nprintf(\"%c %d\\n\", c, c - 'A');",
        "options": [
          "G 6",
          "H 7",
          "G 7",
          "F 5",
          "H 8"
        ],
        "answer": "A"
      },
      {
        "code": "int m = 17;\nint n = 5;\nfloat oran = m / n + (float)(m % n) / 2;\nprintf(\"%.2f\\n\", oran);",
        "options": [
          "4.40",
          "4.00",
          "4.50",
          "3.40",
          "3.00"
        ],
        "answer": "B"
      },
      {
        "code": "int a = 10;\nfloat b = 5.0;\ndouble c = 2.0;\nprintf(\"%lu\\n\", sizeof(a) + sizeof(b) + sizeof(c));",
        "options": [
          "12",
          "14",
          "16",
          "20",
          "10"
        ],
        "answer": "C"
      },
      {
        "code": "int x = 23;\nint y = 6;\nint k = x % y * 4 + x / y;\nprintf(\"%d\\n\", k);",
        "options": [
          "23",
          "20",
          "27",
          "18",
          "15"
        ],
        "answer": "A"
      },
      {
        "code": "int a = 4;\nint b = 3;\nint c = ++a * 2 + b--;\nprintf(\"%d %d %d\\n\", a, b, c);",
        "options": [
          "5 2 13",
          "5 3 13",
          "5 2 12",
          "4 2 11",
          "5 3 11"
        ],
        "answer": "A"
      },
      {
        "code": "int x = 12;\nint y = 4;\nx /= y + 2;\ny *= x + 1;\nprintf(\"%d %d\\n\", x, y);",
        "options": [
          "2 12",
          "3 16",
          "2 8",
          "3 12",
          "2 16"
        ],
        "answer": "A"
      },
      {
        "code": "int a = 5, b = 10, c = 15;\nint sonuc = (a < b && b < c) + (a + 5 == b) + (c <= b);\nprintf(\"%d\\n\", sonuc);",
        "options": [
          "1",
          "2",
          "3",
          "0",
          "4"
        ],
        "answer": "B"
      },
      {
        "code": "int x = 8, y = 12;\nint t = (x > 10 || y > 10) && (y - x == 4);\nprintf(\"%d\\n\", t);",
        "options": [
          "0",
          "1",
          "4",
          "12",
          "8"
        ],
        "answer": "B"
      },
      {
        "code": "int a = -7;\nif (a) { printf(\"A\"); }\nif (a + 7) { printf(\"B\"); }\nelse { printf(\"C\"); }",
        "options": [
          "A",
          "B",
          "AC",
          "BC",
          "ABC"
        ],
        "answer": "C"
      },
      {
        "code": "int x = 8;\nif (x > 10)\n    x = x + 5;\n    x = x * 2;\nprintf(\"%d\\n\", x);",
        "options": [
          "8",
          "16",
          "26",
          "13",
          "21"
        ],
        "answer": "B"
      },
      {
        "code": "int not = 65;\nif (not >= 85) printf(\"1 \");\nelse if (not >= 60) printf(\"2 \");\nelse if (not >= 50) printf(\"3 \");\nelse printf(\"4 \");",
        "options": [
          "2",
          "2 3",
          "1 2",
          "2 3 4",
          "3"
        ],
        "answer": "A"
      },
      {
        "code": "int a = 6, b = 9;\nint sonuc = (a > b) ? a + 4 : b - 2;\nprintf(\"%d\\n\", sonuc);",
        "options": [
          "10",
          "9",
          "7",
          "6",
          "4"
        ],
        "answer": "C"
      },
      {
        "code": "int x = 4, y = 6;\nint z = (x % 2 == 0) ? (y > 5 ? 10 : 20) : 30;\nprintf(\"%d\\n\", z);",
        "options": [
          "10",
          "20",
          "30",
          "4",
          "6"
        ],
        "answer": "A"
      }
    ]
  },
  {
    "id": "deneme-2",
    "type": "exam",
    "shortTitle": "Deneme 2 (Zor)",
    "title": "TÜBİTAK 1. Aşama Deneme Sınavı - 2 (Zor Seviye)",
    "subtitle": "Kapsam: Bölüm 1–4 (İleri Düzey İz Sürme ve Tuzaklar)",
    "quiz": [
      {
        "code": "int a = 5, b = 10, c = 15;\na = b = c + 5;\nc = a - 10;\nb += c;\na += b + c;\nprintf(\"%d %d %d\\n\", a, b, c);",
        "options": [
          "60 30 10",
          "50 30 10",
          "60 20 10",
          "40 20 10",
          "50 20 15"
        ],
        "answer": "A"
      },
      {
        "prompt": "(Bilgi: 'A' = 65, 'a' = 97) Ekran çıktısı ne olur?",
        "code": "char c = 'F';\nint x = (c - 'A') * 3;\nchar yeni = 'a' + (x % 5);\nprintf(\"%c %d\\n\", yeni, x);",
        "options": [
          "a 15",
          "b 15",
          "a 18",
          "c 15",
          "b 18"
        ],
        "answer": "A"
      },
      {
        "code": "int a = 19;\nint b = 4;\nfloat sonuc = (float)(a / b) + (float)a / b;\nprintf(\"%.2f\\n\", sonuc);",
        "options": [
          "8.75",
          "9.50",
          "8.00",
          "9.00",
          "8.50"
        ],
        "answer": "A"
      },
      {
        "code": "int a = -26, b = 7, c = -7;\nint k1 = a % b;\nint k2 = a % c;\nprintf(\"%d %d\\n\", k1, k2);",
        "options": [
          "-5 -5",
          "5 -5",
          "-5 5",
          "2 2",
          "-2 -2"
        ],
        "answer": "A"
      },
      {
        "code": "int i = 4, j = 3;\nint k = ++i * 3 - j-- * 2 + i++;\nprintf(\"%d %d %d\\n\", i, j, k);",
        "options": [
          "6 2 14",
          "5 2 14",
          "6 2 13",
          "6 3 14",
          "5 2 15"
        ],
        "answer": "A"
      },
      {
        "code": "int x = 5, y = 3, z = 2;\nx += y *= z += 3;\nprintf(\"%d %d %d\\n\", x, y, z);",
        "options": [
          "20 15 5",
          "35 15 5",
          "20 15 2",
          "25 15 5",
          "15 15 5"
        ],
        "answer": "A"
      },
      {
        "code": "int a = 5, b = 15, c = 25;\nint x = a < b < c;\nint y = c > b > a;\nprintf(\"%d %d\\n\", x, y);",
        "options": [
          "1 1",
          "1 0",
          "0 1",
          "0 0",
          "1 2"
        ],
        "answer": "B"
      },
      {
        "code": "int a = 3, b = 4, c = 2;\nint sonuc = a + b * c / a % b;\nprintf(\"%d\\n\", sonuc);",
        "options": [
          "5",
          "4",
          "3",
          "1",
          "2"
        ],
        "answer": "A"
      },
      {
        "code": "int a = 2, b = 5, c = 10;\nint sonuc = (b > a) || (c = a + b);\nprintf(\"%d %d\\n\", sonuc, c);",
        "options": [
          "1 10",
          "1 7",
          "0 10",
          "0 7",
          "1 2"
        ],
        "answer": "A"
      },
      {
        "code": "int x = 0, y = 5, z = 10;\nint sonuc = (x != 0 && (y = 20)) || (z += 5);\nprintf(\"%d %d %d\\n\", x, y, z);",
        "options": [
          "0 5 15",
          "0 20 15",
          "0 5 10",
          "0 20 10",
          "1 5 15"
        ],
        "answer": "A"
      },
      {
        "code": "int a = 4;\nif (a = 0) { printf(\"X \"); }\nelse { printf(\"Y \"); }\nprintf(\"%d\\n\", a);",
        "options": [
          "X 4",
          "X 0",
          "Y 4",
          "Y 0",
          "Y 1"
        ],
        "answer": "D"
      },
      {
        "code": "int x = 6;\nif (x > 10);\n{\n    x += 4;\n}\nprintf(\"%d\\n\", x);",
        "options": [
          "6",
          "10",
          "14",
          "4",
          "Hata verir"
        ],
        "answer": "B"
      },
      {
        "prompt": "Aşağıdaki program parçasının ekrana \"Mavi\" yazması için puan değişkeninin değeri hangi aralıkta olmalıdır?",
        "code": "if (puan <= 100) {\n    if (puan < 70) {\n        if (puan <= 40) printf(\"Kirmizi\\n\");\n        else printf(\"Sari\\n\");\n    } else {\n        printf(\"Mavi\\n\");\n    }\n} else {\n    printf(\"Yesil\\n\");\n}",
        "options": [
          "40 < puan <= 70",
          "70 <= puan <= 100",
          "70 < puan <= 100",
          "puan > 100",
          "0 <= puan <= 70"
        ],
        "answer": "B"
      },
      {
        "code": "int a = 3, b = 7;\nif (a > 5)\n    if (b > 5)\n        printf(\"A\\n\");\nelse\n    printf(\"B\\n\");",
        "options": [
          "A",
          "B",
          "AB",
          "Hiçbir şey yazdırmaz",
          "Hata verir"
        ],
        "answer": "D"
      },
      {
        "code": "int a = 2, b = 3, x = 10;\nint sonuc = (a > b) ? (x += 5) : (b > a ? (x += 10) : (x += 20));\nprintf(\"%d %d\\n\", sonuc, x);",
        "options": [
          "20 20",
          "15 15",
          "30 30",
          "20 10",
          "15 20"
        ],
        "answer": "A"
      }
    ]
  }
];
