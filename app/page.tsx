const groups = [
  {
    title: "Perangkat Pembelajaran",
    description: "Rencanakan pembelajaran dari tujuan hingga pelaksanaan.",
    items: ["Modul Ajar", "RPP", "Alur Tujuan Pembelajaran", "Tujuan Pembelajaran", "KKTP", "Program Tahunan", "Program Semester"],
  },
  {
    title: "Materi dan LKPD",
    description: "Siapkan bahan belajar yang sesuai kebutuhan kelas.",
    items: ["Materi Ajar", "LKPD", "Outline Presentasi"],
  },
  {
    title: "Soal dan Penilaian",
    description: "Susun instrumen penilaian yang terarah.",
    items: ["Soal Pilihan Ganda", "Soal Essay", "Kisi-kisi Soal", "Kunci Jawaban dan Pembahasan", "Rubrik Penilaian"],
  },
  {
    title: "Tindak Lanjut",
    description: "Rencanakan dukungan berdasarkan kebutuhan belajar.",
    items: ["Program Remedial", "Program Pengayaan"],
  },
];

const adminFeatures = [
  ["Master Kurikulum", "Kelola data kurikulum dan sumber rujukannya."],
  ["Verifikasi Kurikulum", "Periksa kelengkapan dan keabsahan sumber."],
  ["Publikasi Kurikulum", "Tentukan data yang dapat digunakan guru."],
  ["Manajemen Pengguna", "Kelola status dan akses akun."],
];

export default function Home() {
  return (
    <main className="shell">
      <aside className="sidebar">
        <a className="brand" href="/" aria-label="GuruWali V3 Beranda">
          <span className="brand-mark">GW</span>
          <span><strong>GuruWali</strong><small>VERSI 3</small></span>
        </a>
        <div className="nav-label">RUANG KERJA</div>
        <nav className="nav-list" aria-label="Navigasi utama">
          <a className="nav-item active" href="#beranda"><span>⌂</span> Beranda</a>
          <a className="nav-item" href="#perangkat"><span>▤</span> Perangkat Ajar</a>
          <a className="nav-item" href="#dokumen"><span>▧</span> Dokumen Saya</a>
          <a className="nav-item" href="#favorit"><span>☆</span> Favorit</a>
          <a className="nav-item" href="#riwayat"><span>◷</span> Riwayat</a>
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card">
            <span className="help-icon">?</span>
            <strong>Butuh bantuan?</strong>
            <p>Panduan menggunakan GuruWali.</p>
            <a href="#bantuan">Lihat panduan ↗</a>
          </div>
          <div className="profile-mini">
            <div className="avatar">G</div>
            <div><strong>Profil Guru</strong><small>Mode pratinjau</small></div>
            <span className="dots">•••</span>
          </div>
        </div>
      </aside>

      <section className="main-panel" id="beranda">
        <header className="topbar">
          <div className="breadcrumbs">Ruang kerja <span>/</span> <strong>Beranda</strong></div>
          <div className="top-actions"><span className="preview-pill"><i /> Pratinjau</span><button className="icon-button" aria-label="Notifikasi">♧</button></div>
        </header>

        <div className="content">
          <section className="welcome">
            <div className="welcome-copy">
              <div className="eyebrow"><span className="spark">✦</span> RUANG KERJA PENDIDIK</div>
              <h1>Selamat datang di<br/><span>GuruWali.</span></h1>
              <p>Satu ruang untuk merencanakan pembelajaran, menyiapkan penilaian, dan merapikan dokumen mengajar.</p>
              <a className="primary-button" href="#perangkat">Jelajahi Perangkat Ajar <span>→</span></a>
            </div>
            <div className="welcome-art" aria-hidden="true">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="art-paper paper-back"><span /><span /><span /></div>
              <div className="art-paper paper-front"><div className="paper-check">✓</div><b>Rencana Ajar</b><span className="paper-line long" /><span className="paper-line" /><span className="paper-line short" /><div className="paper-tag">TERSTRUKTUR</div></div>
              <div className="art-star star-one">✦</div><div className="art-star star-two">✳</div>
            </div>
          </section>

          <section className="section-heading" id="perangkat">
            <div><div className="eyebrow">MULAI DARI SINI</div><h2>Perangkat Ajar</h2><p>Pilih kebutuhan, lalu kembangkan sesuai konteks kelasmu.</p></div>
            <span className="count-badge">17 jenis dokumen</span>
          </section>

          <div className="group-grid">
            {groups.map((group, index) => (
              <article className="group-card" key={group.title}>
                <div className={"group-icon icon-" + index}>{["▤", "▧", "✓", "↗"][index]}</div>
                <div className="group-title-row"><h3>{group.title}</h3><span className="arrow">↗</span></div>
                <p>{group.description}</p>
                <div className="chip-list">{group.items.map((item) => <span className="doc-chip" key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>

          <section className="bottom-grid">
            <article className="empty-card" id="dokumen">
              <div className="section-heading compact"><div><div className="eyebrow">ARSIP PRIBADI</div><h2>Dokumen Saya</h2></div><a href="#dokumen">Lihat semua →</a></div>
              <div className="empty-state"><div className="empty-icon">▤</div><strong>Dokumenmu akan tersimpan di sini</strong><p>Setelah fitur penyimpanan aktif, dokumen yang kamu buat akan muncul di ruang ini.</p></div>
            </article>
            <article className="admin-card">
              <div className="admin-kicker">PENGELOLAAN PLATFORM</div><h2>Panel Admin GuruWali</h2><p>Master kurikulum yang akurat dimulai dari sumber yang dapat ditelusuri.</p>
              <div className="admin-list">{adminFeatures.map(([title, description]) => <div className="admin-row" key={title}><span className="admin-check">✓</span><div><strong>{title}</strong><small>{description}</small></div></div>)}</div>
              <span className="admin-note">Konsep antarmuka · Belum terhubung ke backend</span>
            </article>
          </section>
          <footer><span>© GuruWali V3</span><span>Dibangun untuk mendukung kerja guru Indonesia</span></footer>
        </div>
      </section>
    </main>
  );
}
