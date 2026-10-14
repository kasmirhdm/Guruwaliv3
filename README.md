# GuruWali V3

Platform pendamping administrasi dan perangkat ajar guru Indonesia.

## Status
Fondasi awal dan dashboard pratinjau tersedia. Autentikasi, API, koneksi database produksi, dan fitur CRUD masih dalam tahap pengembangan. Jangan gunakan untuk data nyata sebelum keamanan dan pengujian selesai.

## Prinsip produk
- Hanya dua peran: **Admin GuruWali** dan **Guru**.
- Admin GuruWali mengelola master kurikulum, verifikasi sumber, dan publikasi.
- Guru hanya membaca/menggunakan data kurikulum yang telah dipublikasikan.
- Dokumen buatan guru tersimpan sebagai milik akun guru tersebut.
- Konten hasil AI atau draf tidak boleh diberi label sebagai dokumen resmi pemerintah tanpa verifikasi sumber.

## Teknologi
- Next.js + TypeScript
- Prisma ORM
- PostgreSQL
- Autentikasi dan otorisasi server-side (belum diimplementasikan)
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

## Dokumen
- [Arsitektur dan roadmap](docs/ARCHITECTURE.md)
- [Instruksi handoff Muse](docs/MUSE_HANDOFF.md)
- [Model data Prisma](prisma/schema.prisma)
- [Panduan setup VPS](docs/SETUP_VPS.md)
- [Contoh variabel lingkungan](.env.example)

## Pengembangan lokal
1. Gunakan Node.js 22 dan PostgreSQL.
2. Jalankan `npm install`.
3. Salin `.env.example` ke `.env` dan isi `DATABASE_URL` untuk database pengembangan khusus.
4. Jalankan `npm run db:validate` dan `npm run db:generate`.
5. Untuk database baru yang belum memiliki tabel, tinjau schema lalu jalankan `npm run db:migrate`.
6. Jalankan `npm run dev`; periksa kualitas dengan `npm run typecheck`, `npm run lint`, dan `npm run build`.

Untuk deployment gunakan `npm run db:migrate:deploy` setelah migrasi ditinjau dan masuk Git. Jangan menggunakan database proyek lain.

**Penting:** jangan commit file `.env`, token, API key, kredensial database, atau data pribadi guru/siswa. Repository ini bersifat publik.
