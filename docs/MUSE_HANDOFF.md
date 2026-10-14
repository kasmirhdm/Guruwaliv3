# Handoff untuk Muse AI

Repository: https://github.com/kasmirhdm/GuruwaliV3

## Kondisi awal
Repository ini berisi rancangan produk, skema Prisma awal, dan dashboard pratinjau. Jangan menganggapnya sebagai aplikasi produksi. Periksa semua file dan validasi versi dependensi sebelum melanjutkan.

## Prioritas implementasi
1. Audit struktur dan jalankan install/build/typecheck.
2. Perbaiki setiap konflik konfigurasi atau skema Prisma yang ditemukan.
3. Implementasikan autentikasi aman dan sesi.
4. Buat authorization helper server-side untuk dua peran: ADMIN_GURUWALI dan GURU.
5. Lindungi semua route dan operasi database. Guru tidak boleh membaca/mengubah dokumen guru lain atau mengelola master kurikulum.
6. Implementasikan CRUD master kurikulum dengan workflow DRAFT -> IN_REVIEW -> VERIFIED -> PUBLISHED dan catatan sumber.
7. Hubungkan UI dengan database; labeli fitur yang belum aktif secara jelas.
8. Tambahkan test untuk autentikasi, akses peran, kepemilikan dokumen, dan workflow publikasi.
9. Dokumentasikan cara setup lokal dan deployment VPS.

## Aturan
- Jangan pernah memasukkan secrets ke Git.
- Jangan membuat akun admin default dengan password yang diketahui publik.
- Jangan menandai data AI sebagai kurikulum resmi.
- Jangan menghapus atau menimpa file sebelum memahami dampaknya.
- Lakukan perubahan bertahap dan jalankan pemeriksaan setelah setiap tahap.
- Jangan menyatakan build/test berhasil jika belum benar-benar dijalankan.
