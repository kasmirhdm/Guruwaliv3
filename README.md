# GuruWali V3

Platform pendamping administrasi dan perangkat ajar guru Indonesia.

## Status
Tahap awal: fondasi arsitektur dan rancangan data. Ini belum merupakan aplikasi siap produksi.

## Prinsip produk
- Hanya dua peran: **Admin GuruWali** dan **Guru**.
- Admin GuruWali mengelola master kurikulum, verifikasi sumber, dan publikasi.
- Guru hanya membaca/menggunakan data kurikulum yang telah dipublikasikan.
- Dokumen buatan guru tersimpan sebagai milik akun guru tersebut.
- Konten hasil AI atau draf tidak boleh diberi label sebagai dokumen resmi pemerintah tanpa verifikasi sumber.

## Teknologi yang direncanakan
- Next.js + TypeScript
- Prisma ORM
- PostgreSQL
- Autentikasi dan otorisasi server-side
- Validasi input dan pembatasan akses per pemilik dokumen

## Menu Guru
1. Beranda
2. Perangkat Ajar
3. Dokumen Saya
4. Favorit
5. Riwayat
6. Profil Saya
7. Pengaturan
8. Bantuan

## Menu Admin GuruWali
1. Dashboard Admin
2. Master Kurikulum
3. Verifikasi Kurikulum
4. Publikasi Kurikulum
5. Manajemen Pengguna
6. Audit Log
7. Pengaturan Sistem

## Dokumen rancangan
- [Arsitektur dan roadmap](docs/ARCHITECTURE.md)
- [Model data awal Prisma](prisma/schema.prisma)
- [Contoh variabel lingkungan](.env.example)

## Pengembangan lokal (setelah dependensi dan aplikasi dibuat)
1. Salin `.env.example` menjadi `.env` dan isi kredensial lokal.
2. Pasang dependensi yang sesuai dengan versi package yang dipilih.
3. Jalankan migrasi Prisma setelah schema ditinjau.
4. Jalankan pengujian sebelum deployment.

**Penting:** jangan commit file `.env`, token, API key, kredensial database, atau data pribadi guru/siswa.
