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
        "text": "1.1 Değişken Nedir? (Bir Değişkenin 4 Temel Özelliği)"
      },
      {
        "kind": "p",
        "text": "Değişkenler bilgileri bellekte tutmak için var olan yapılardır. Bellekte oluşturulan her değişken, üzerinde belirli etiketler bulunan özel bir kutuya benzer."
      },
      {
        "kind": "ul",
        "items": [
          "<strong>Türü (Type):</strong> Kutunun ne tür bir nesne tutabileceğini belirler (örneğin sadece tam sayı tutabilen <code>int</code> kutusu).",
          "<strong>Adı (Name / Identifier):</strong> Programcının o kutuya ulaşmak için verdiği etiket (örneğin <code>sayi</code>, <code>x</code>, <code>a</code>).",
          "<strong>Değeri (Value):</strong> Kutunun tam içinde saklanan asıl veri (örneğin <code>42</code> veya <code>5</code>).",
          "<strong>Adresi (Memory Address):</strong> Kutunun bellekte (RAM) durduğu yerin fiziksel konumu (örneğin <code>0x7FFE20</code>)."
        ]
      },
      {
        "kind": "code",
        "title": "C Dilinde Tanımlama ve Değer Verme",
        "code": "int sayi = 42;\nprintf(\"%d\\n\", sayi);"
      },
      {
        "kind": "h2",
        "text": "1.2 Atama İşleci (=) ve Tek Yönlü Akış"
      },
      {
        "kind": "ul",
        "items": [
          "<code>=</code> sembolü matematikteki denklik/eşitlik değildir; bir <strong>aktarma/yazma</strong> işlemidir.",
          "İşlem her zaman <strong>sağdan sola</strong> doğru akar: sağdaki değer okunur/hesaplanır ve soldaki kutunun içine yazılır (eski değer silinir)."
        ]
      },
      {
        "kind": "h3",
        "text": "1.2.1 Değişken Değerini Ekrana Yazdırma (printf ve %d)"
      },
      {
        "kind": "callout",
        "variant": "trap",
        "title": "Temel Kural",
        "html": "<code>printf(a);</code> HATALIDIR! <code>printf</code> yalnızca çift tırnak <code>\" \"</code> içindeki metinleri basar. Tam sayı (<code>int</code>) yazdırmak için <code>%d</code> yer tutucusu kullanılır."
      },
      {
        "kind": "code",
        "title": "printf ile Değişken Yazdırma",
        "code": "int yas = 13;\nprintf(\"Yasim: %d\\n\", yas);"
      },
      {
        "kind": "h3",
        "text": "1.2.2 Temel Atama ve Değer Güncelleme Adımları"
      },
      {
        "kind": "code",
        "title": "Güncelleme, Toplama ve x = x + 1 Mantığı",
        "code": "int a = 10;\nprintf(\"Ilk deger: %d\\n\", a);\na = 25;\nprintf(\"Guncel deger: %d\\n\", a);\n\nint kisa_kenar = 10, uzun_kenar = 20;\nint cevre_yarisi = kisa_kenar + uzun_kenar;\nprintf(\"Cevre yarisi: %d\\n\", cevre_yarisi);\n\nint x = 5;\nx = x + 1;\nprintf(\"Sonraki x: %d\\n\", x);"
      },
      {
        "kind": "h2",
        "text": "1.3 İki Değişkenin Değerini Değiştirme (Swap / Takas Algoritması)"
      },
      {
        "kind": "p",
        "text": "Biri meyve suyu, diğeri su dolu iki bardağın içeriğini karıştırmadan değiştirmek için üçüncü bir boş yardımcı bardağa (<code>temp</code>) ihtiyaç duyarız."
      },
      {
        "kind": "code",
        "title": "3 Adımlı Takas (Swap) Algoritması",
        "code": "int a = 10;\nint b = 20;\nint temp;\n\ntemp = a; // temp = 10\na = b;    // a = 20\nb = temp; // b = 10\n\nprintf(\"a: %d, b: %d\\n\", a, b);"
      },
      {
        "kind": "h2",
        "text": "1.4 Çoklu Değişken Tanımlama ve Zincirleme Atama"
      },
      {
        "kind": "code",
        "title": "Çoklu Tanımlama ve Sağdan Sola Zincirleme Atama",
        "code": "int x = 5, y = 6, z = 50;\nprintf(\"Toplam 1: %d\\n\", x + y + z);\n\nint m, n, k;\nm = n = k = 50;\nprintf(\"Toplam 2: %d\\n\", m + n + k);"
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
          "Örnek"
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
            "Tek duyarlıklı kesirli sayılar",
            "4 byte",
            "<code>%f</code>",
            "<code>float pi = 3.14;</code>"
          ],
          [
            "<code>double</code>",
            "Çift duyarlıklı kesirli sayılar",
            "8 byte",
            "<code>%lf</code>",
            "<code>double d = 3.14159;</code>"
          ],
          [
            "<code>char</code>",
            "Tek bir karakter",
            "1 byte",
            "<code>%c</code>",
            "<code>char harf = 'A';</code>"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "2.2 Karakter Türü (char), ASCII Tablosu ve Karakter Aritmetiği"
      },
      {
        "kind": "p",
        "text": "C dilinde <code>char</code> aslında bellekte 1 byte yer kaplayan küçük bir tam sayıdır. Her karakterin bir ASCII kodu vardır:"
      },
      {
        "kind": "ul",
        "items": [
          "<code>'A'</code> → <strong>65</strong> (Büyük harfler: 65–90)",
          "<code>'a'</code> → <strong>97</strong> (Küçük harfler: 97–122)",
          "<code>'0'</code> → <strong>48</strong> (Rakam karakterleri: 48–57)",
          "<code>'\\0'</code> → <strong>0</strong> (Null sonlandırıcı karakter)",
          "<strong>Büyük/Küçük Harf Farkı:</strong> <code>'a' - 'A' = 32</code>"
        ]
      },
      {
        "kind": "code",
        "title": "ASCII ve Karakter Aritmetiği",
        "code": "char a = 65, b = 66, c = 67;\nprintf(\"%c %c %c\\n\", a, b, c);\nprintf(\"%d %d %d\\n\", a, b, c);\n\nchar buyuk = 'D';\nchar kucuk = buyuk + ('a' - 'A');\nprintf(\"Kucuk harf: %c\\n\", kucuk);"
      },
      {
        "kind": "h2",
        "text": "2.3 Bellek Boyutları ve sizeof() İşleci"
      },
      {
        "kind": "callout",
        "variant": "trap",
        "title": "Olimpiyat Sınav Tuzağı",
        "html": "<em>\"Bir float değişkenin hafızada kapladığı alan bir int değişkeninden fazladır\"</em> önermesi <strong>YANLIŞTIR</strong>. Standart GCC'de <code>sizeof(int) == sizeof(float) == 4</code> byte'tır."
      },
      {
        "kind": "code",
        "title": "sizeof() Kullanımı",
        "code": "printf(\"char: %lu\\n\", sizeof(char));\nprintf(\"int: %lu\\n\", sizeof(int));\nprintf(\"float: %lu\\n\", sizeof(float));\nprintf(\"double: %lu\\n\", sizeof(double));"
      },
      {
        "kind": "h2",
        "text": "2.4 Tür Dönüşümleri (Type Conversion / Casting)"
      },
      {
        "kind": "callout",
        "variant": "trap",
        "title": "(float)(i / 2) vs (float)i / 2 Farkı (2018 TÜBİTAK)",
        "html": "<code>(float)(7 / 2)</code> önce tamsayı bölmesi yapar (<code>3</code>), sonra <code>3.0</code> olur. Kesirli sonuç (<code>3.5</code>) için <code>(float)7 / 2</code> yazılmalıdır."
      },
      {
        "kind": "code",
        "title": "Örtülü ve Açık Tür Dönüşümü",
        "code": "int i = 7;\nfloat c1 = (float)(i / 2);\nfloat c2 = (float)i / 2;\nprintf(\"c1 = %.1f, c2 = %.1f\\n\", c1, c2);"
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
        "text": "C dilinde karşılaştırma ve mantıksal ifadeler doğru ise <code>1</code>, yanlış ise <code>0</code> üretir. <code>&&</code> (VE), <code>||</code> (VEYA) ve <code>!</code> (DEĞİL) işleçlerinde <strong>kısa devre (short-circuit)</strong> kuralı geçerlidir: sol taraf sonucu kesinleştirdiyse sağ taraf hiç çalıştırılmaz."
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
