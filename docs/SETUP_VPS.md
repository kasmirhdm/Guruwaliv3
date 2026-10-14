# Setup GuruWali V3 di VPS

Panduan ini adalah checklist untuk Muse/operator VPS. Sesuaikan perintah dengan distribusi Linux dan konfigurasi server. Jangan menyalin password sungguhan ke terminal yang direkam atau ke Git.

## Prasyarat
- Node.js 22.x dan npm
- PostgreSQL 16 atau versi kompatibel
- Git
- Repository: https://github.com/kasmirhdm/GuruwaliV3
- Direktori aplikasi yang direncanakan: `/opt/guruwaliv3`

## 1. Ambil kode
Jika direktori belum ada:
```bash
sudo mkdir -p /opt/guruwaliv3
sudo chown "$USER":"$USER" /opt/guruwaliv3
git clone https://github.com/kasmirhdm/GuruwaliV3.git /opt/guruwaliv3
cd /opt/guruwaliv3
```

Jika direktori sudah berisi repo, jangan clone di atasnya. Periksa `git status`, branch, remote, dan perubahan lokal terlebih dahulu. Backup perubahan yang belum commit sebelum pull.

## 2. Install dan validasi
```bash
node --version
npm --version
npm install
npm run db:validate
npm run db:generate
npm run typecheck
npm run lint
npm run build
```
Jalankan setiap perintah satu per satu dan catat hasilnya. Jika ada kegagalan, perbaiki dan ulangi; jangan melaporkan sukses jika belum berhasil.

## 3. Buat database V3 yang terpisah
Database lama `guruwaliv2` tidak boleh dipakai untuk V3. Periksa dahulu database dan role yang sudah ada, lalu buat database bernama `guruwaliv3` dan role aplikasi khusus dengan hak minimum. Gunakan prompt interaktif `psql` atau mekanisme secret manager untuk memasukkan password, bukan menaruh password asli di command history atau file repository.

Contoh pemeriksaan administratif:
```sql
\l
\du
```
Contoh SQL konseptual yang dijalankan oleh administrator PostgreSQL setelah nama role dipastikan belum digunakan:
```sql
CREATE ROLE guruwaliv3_app LOGIN;
-- Atur password secara interaktif dengan: \password guruwaliv3_app
CREATE DATABASE guruwaliv3 OWNER guruwaliv3_app;
```
Jika role atau database sudah ada, jangan jalankan ulang perintah pembuatan. Periksa kepemilikan dan izin terlebih dahulu. Jangan pernah menjalankan reset atau menghapus database lain.

## 4. Konfigurasi environment
Buat file lokal `.env` dari `.env.example` dan isi `DATABASE_URL` dengan kredensial khusus database `guruwaliv3`. Pastikan file `.env` hanya dapat dibaca user aplikasi dan tidak dilacak Git:
```bash
cp .env.example .env
chmod 600 .env
git status --short
```
Edit `.env` dengan editor di server. Jangan masukkan nilainya ke chat, commit, log, atau laporan.

## 5. Migrasi
Tinjau schema Prisma dan pastikan target `DATABASE_URL` menunjuk hanya ke database `guruwaliv3`.
- Untuk membuat migrasi awal di lingkungan pengembangan yang baru: `npm run db:migrate -- --name init`
- Untuk menerapkan migrasi yang sudah di-commit pada deployment: `npm run db:migrate:deploy`
- Periksa status: `npm run db:status`

Jangan gunakan `prisma migrate reset` pada VPS. Jangan memakai `prisma db push` sebagai pengganti riwayat migrasi untuk deployment. Sebelum migrasi yang berisiko, buat backup dan uji pemulihannya.

## 6. Pemeriksaan akhir Tahap A
- [ ] Repo berada di direktori yang benar dan working tree dipahami.
- [ ] Database `guruwaliv3` terpisah dari `guruwaliv2`.
- [ ] `DATABASE_URL` lokal tidak masuk Git.
- [ ] `npm run db:validate` berhasil.
- [ ] `npm run db:generate` berhasil.
- [ ] `npm run typecheck` berhasil.
- [ ] `npm run lint` berhasil.
- [ ] `npm run build` berhasil.
- [ ] Migrasi tersimpan di repository dan status migrasi diperiksa.
- [ ] Hasil serta kegagalan yang belum terselesaikan dilaporkan secara jujur.

Tahap A belum dianggap selesai hanya karena paket berhasil diinstal; database, migrasi, build, dan pemeriksaan wajib diverifikasi.
