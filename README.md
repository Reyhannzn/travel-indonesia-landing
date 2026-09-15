# Jelajah Nusantara — Landing Page Travel Indonesia

Landing page satu halaman untuk agen wisata Indonesia. Dibuat dengan HTML, CSS, dan JavaScript murni (tanpa framework, tanpa build step).

## Isi Halaman

- **Hero** dengan form pencarian trip (tujuan, tanggal, jumlah orang)
- **Destinasi populer**: Bali, Raja Ampat, Labuan Bajo, Bromo, Borobudur, Danau Toba
- **Paket wisata**: Backpacker, Family Trip, Honeymoon
- **Keunggulan**, **testimoni**, **form kontak**, dan footer

Fitur: responsif (mobile-first), menu hamburger, animasi reveal saat scroll, dan validasi form sederhana.

## Struktur

```
├── index.html   # struktur halaman
├── style.css    # styling + responsive
└── script.js    # menu, animasi, form
```

## Menjalankan Lokal

Buka `index.html` langsung di browser, atau jalankan server statis:

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## Deploy ke GitHub Pages

1. Buka **Settings → Pages**.
2. **Source**: `Deploy from a branch`, pilih branch `main` dan folder `/ (root)`.
3. Simpan. Situs aktif di `https://reyhannzn.github.io/travel-indonesia-landing/`.

## Kustomisasi

- Warna dan radius ada di `:root` pada `style.css`.
- Gambar memakai placeholder `picsum.photos`. Ganti `src` di `index.html` dengan foto asli.
- Harga, kontak, dan nama brand bisa diubah langsung di `index.html`.
