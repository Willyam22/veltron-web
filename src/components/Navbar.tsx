import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full pt-3 px-6 sm:px-10 lg:px-16 transition-all duration-300">
      <nav className="glass rounded-2xl px-5 sm:px-8 py-3.5 flex items-center justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.75)]">
        {/* Logo VELTRON */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/25 group-hover:scale-105 transition-transform">
            <svg className="w-5 h-5 text-[#07070A]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 2L4 13.5h6.5L9.5 22 20 10.5h-6.5L13.5 2z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-[0.16em] text-white leading-none">
              VELTRON
            </span>
            <span className="text-[10px] tracking-[0.22em] text-sky-400 uppercase font-semibold mt-1">
              Power & Audio
            </span>
          </div>
        </a>

        {/* Navigasi Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <a href="#carousel" className="hover:text-sky-400 transition-colors">
            Beranda
          </a>
          <a href="#visimisi" className="hover:text-sky-400 transition-colors">
            Visi & Misi
          </a>
          <a href="#katalog" className="hover:text-sky-400 transition-colors">
            Katalog Produk
          </a>
        </div>

        {/* Tombol Kontak & Menu Mobile */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="tel:081234567890"
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all"
          >
            <i className="fa-solid fa-phone text-sky-400 text-xs"></i>
            <span>0812-3456-7890</span>
          </a>

          <a
            href="https://wa.me/6281234567890?text=Halo%20VELTRON%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-400/15 hover:bg-sky-400/25 border border-sky-400/35 text-sky-300 hover:text-white text-xs sm:text-sm font-bold transition-all"
          >
            <i className="fa-brands fa-whatsapp text-emerald-400 text-base"></i>
            <span className="hidden lg:inline">Hubungi Kami</span>
          </a>

          {/* Tombol Hamburger Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu Navigasi"
            className="md:hidden p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Dropdown Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 glass rounded-2xl p-4 space-y-2 shadow-2xl border border-white/[0.1]">
          <a
            href="#carousel"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/[0.06]"
          >
            Beranda
          </a>
          <a
            href="#visimisi"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/[0.06]"
          >
            Visi & Misi
          </a>
          <a
            href="#katalog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/[0.06]"
          >
            Katalog Produk
          </a>
          <a
            href="tel:081234567890"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-sky-400 bg-sky-400/10"
          >
            <i className="fa-solid fa-phone"></i>
            <span>0812-3456-7890</span>
          </a>
        </div>
      )}
    </header>
  );
};