# GuruWali V3 — Arsitektur Awal

## 1. Tujuan
Membangun aplikasi web untuk membantu guru menyusun, menyimpan, dan mengelola perangkat ajar dengan alur kurikulum yang terkontrol.

## 2. Peran dan batas akses
### Admin GuruWali
- Mengelola akun dan status pengguna.
- Membuat/mengimpor entri master kurikulum.
- Mencatat sumber, tahun/versi, halaman atau lokasi dokumen, dan checksum sumber bila tersedia.
- Memverifikasi dan memublikasikan data kurikulum.
- Melihat audit log aktivitas administratif.

### Guru
- Membaca master kurikulum yang berstatus terpublikasi.
- Membuat dokumen perangkat ajar miliknya.
- Mengedit, mengarsipkan, memfavoritkan, dan melihat riwayat dokumen miliknya sendiri.
- Tidak memiliki izin untuk mengubah master kurikulum nasional.

**Aturan keamanan:** pemeriksaan peran dan kepemilikan dokumen wajib dilakukan di server pada setiap operasi baca/tulis. Menyembunyikan tombol di antarmuka bukan kontrol keamanan.

## 3. Struktur menu guru
- Beranda
- Perangkat Ajar
  - Perangkat pembelajaran: Modul Ajar, RPP, ATP, TP, KKTP, Prota, Prosem
  - Materi dan LKPD: Materi Ajar, LKPD, Outline PPT
  - Soal dan penilaian: Pilihan Ganda, Essay, Kisi-kisi, Kunci Jawaban & Pembahasan, Rubrik
  - Tindak lanjut: Program Remedial, Program Pengayaan
- Dokumen Saya
- Favorit
- Riwayat
- Profil Saya
- Pengaturan
- Bantuan

Untuk layar kecil, navigasi bawah dapat berisi Beranda, Perangkat Ajar, Dokumen Saya, Profil, sedangkan menu lain masuk ke Lainnya.

## 4. Struktur menu admin
- Dashboard Admin
- Master Kurikulum
- Verifikasi Kurikulum
- Publikasi Kurikulum
- Manajemen Pengguna
- Audit Log
- Pengaturan Sistem

## 5. Alur master kurikulum
1. Admin mengimpor atau memasukkan data beserta sumber.
2. Data masuk status draf.
3. Admin memeriksa kesesuaian, duplikasi, dan kelengkapan sumber.
4. Data diverifikasi.
5. Admin memublikasikan versi yang dapat dibaca guru.
6. Revisi baru dibuat sebagai versi baru; jangan diam-diam menimpa riwayat yang sudah dipakai.

CP resmi harus memiliki rujukan yang dapat ditelusuri. TP, ATP, materi, dan contoh lain perlu diberi jenis sumber yang benar (misalnya sumber resmi, contoh pemerintah, buatan guru, atau draf AI). Draf AI tidak boleh otomatis dianggap resmi.

## 6. Keamanan minimum sebelum produksi
- Hash password menggunakan pustaka yang teruji; jangan simpan password teks biasa.
- Batasi percobaan login dan sediakan sesi yang aman.
- Terapkan validasi input di server.
- Otorisasi per peran dan pemilik pada semua endpoint.
- Rahasiakan variabel lingkungan dan kunci API.
- Catat perubahan administratif penting dalam audit log.
- Tambahkan pengujian akses negatif: guru tidak dapat mengubah master atau membaca dokumen guru lain.
- Siapkan backup database dan uji pemulihan.

## 7. Tahapan implementasi
1. Fondasi repository, konfigurasi, dan skema database.
2. Autentikasi, sesi, peran, dan otorisasi.
3. CRUD master kurikulum dengan status draf/verifikasi/publikasi dan versioning.
4. Antarmuka guru dan pencarian kurikulum terpublikasi.
5. Perangkat Ajar dan penyimpanan dokumen pribadi.
6. Favorit, riwayat, ekspor, audit, dan pengujian.
7. Deployment, monitoring, backup, dan audit keamanan.

## 8. Batasan saat ini
Dokumen ini adalah rancangan awal, bukan bukti bahwa semua fitur sudah dibangun. Dataset CP resmi belum disertakan dan perlu diimpor dari sumber resmi yang tervalidasi.
