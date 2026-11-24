import React, { useState, useEffect } from 'react';
import wirelessEarbudWithCaseImg from '../assets/Wireless_Earbud_with_Case.png';
import wirelessChargerStandImg from '../assets/Wireless_Charger_3in1_Stand.png';
import ytx4aImg from '../assets/YTX4A.png';
import ytx5aImg from '../assets/YTX5A.png';

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <>
      {/* ==================== 1. INTERACTIVE HERO CAROUSEL ==================== */}
      <section id="carousel" className="relative w-full pt-8 pb-16 lg:pt-10 lg:pb-20 overflow-hidden">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-sky-500/15 blur-[130px] rounded-full"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[360px] bg-emerald-500/10 blur-[120px] rounded-full"></div>

        <div className="relative w-full px-6 sm:px-10 lg:px-16">
          {/* Card Utama Tanpa Padding (Padding dimasukkan ke tiap Slide & Footer Kontrol) */}
          <div className="relative overflow-hidden rounded-3xl glass-card">
            
            {/* Viewport Pembungkus Track dengan overflow-hidden ketat */}
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-out w-full"
                style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}
              >
                {/* SLIDE 1: Wireless Earphone */}
                <div className="w-full min-w-full flex-[0_0_100%] p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center box-border">
                  <div className="lg:col-span-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-400/15 border border-sky-400/30 text-xs font-semibold text-sky-300 mb-6">
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                      Koleksi Audio VELTRON
                    </div>
                    <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12] text-white">
                      Wireless Earphone Presisi.<br />
                      <span className="text-gradient-titanium">Suara Jernih Tanpa Batas.</span>
                    </h1>
                    <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                      Hadir dalam varian <strong>Non-Earbuds</strong> (Obsidian Black & Pure White) serta <strong>With Earbuds</strong> (Dengan Case atau Tanpa Case) untuk kenyamanan sepanjang hari.
                    </p>
                    <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                      <a
                        href="#katalog"
                        className="px-7 py-3.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-[#07070A] font-bold text-sm shadow-[0_0_35px_-8px_rgba(56,189,248,0.5)] transition-all"
                      >
                        Lihat Koleksi Earphone
                      </a>
                      <a
                        href="https://wa.me/6281234567890?text=Halo%20VELTRON%2C%20saya%20tertarik%20dengan%20produk%20Wireless%20Earphone."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.1] text-white font-semibold text-sm transition-all"
                      >
                        Tanya via WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-6 flex items-center justify-center">
                    <div className="w-full h-64 sm:h-72 flex items-center justify-center">
                      <img
                        src={wirelessEarbudWithCaseImg}
                        alt="VELTRON Wireless Earphone"
                        className="max-h-full max-w-[290px] object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.65)]"
                      />
                    </div>
                  </div>
                </div>

                {/* SLIDE 2: Wireless Charger */}
                <div className="w-full min-w-full flex-[0_0_100%] p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center box-border">
                  <div className="lg:col-span-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-400/15 border border-sky-400/30 text-xs font-semibold text-sky-300 mb-6">
                      <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                      Solusi Pengisian Nirkabel
                    </div>
                    <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12] text-white">
                      Wireless Charger Modern.<br />
                      <span className="text-gradient-titanium">Rapi, Cepat & Portabel.</span>
                    </h1>
                    <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                      Tersedia dalam model <strong>3 in 1 Standing</strong> untuk meja kerja, <strong>Single Standing</strong> yang praktis, hingga <strong>3 in 1 Flip</strong> lipat yang siap dibawa bepergian.
                    </p>
                    <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                      <a
                        href="#katalog"
                        className="px-7 py-3.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-[#07070A] font-bold text-sm shadow-[0_0_35px_-8px_rgba(56,189,248,0.5)] transition-all"
                      >
                        Jelajahi Wireless Charger
                      </a>
                      <a
                        href="https://wa.me/6281234567890?text=Halo%20VELTRON%2C%20saya%20tertarik%20dengan%20produk%20Wireless%20Charger."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.1] text-white font-semibold text-sm transition-all"
                      >
                        Konsultasi Produk
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-6 flex items-center justify-center">
                    <div className="w-full h-64 sm:h-72 flex items-center justify-center">
                      <img
                        src={wirelessChargerStandImg}
                        alt="VELTRON Wireless Charger"
                        className="max-h-full max-w-[290px] object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.65)]"
                      />
                    </div>
                  </div>
                </div>

                {/* SLIDE 3: Aki VELTRON YTX4 & YTX5 */}
                <div className="w-full min-w-full flex-[0_0_100%] p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center box-border">
                  <div className="lg:col-span-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-xs font-semibold text-emerald-300 mb-6">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      Tegangan Stabil 12 Volt
                    </div>
                    <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12] text-white">
                      Aki VELTRON YTX Series.<br />
                      <span className="text-gradient-titanium">YTX4 (4AH) & YTX5 (5AH).</span>
                    </h1>
                    <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                      Kedua seri hadir dengan tegangan <strong>12V</strong> yang tangguh: pilih seri <strong>YTX4A12V4AH</strong> dengan kapasitas 4AH atau <strong>YTX512V5AH</strong> dengan kapasitas ekstra 5AH.
                    </p>
                    <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                      <a
                        href="#katalog"
                        className="px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#07070A] font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all"
                      >
                        Cek Seri Aki YTX
                      </a>
                      <a
                        href="https://wa.me/6281234567890?text=Halo%20VELTRON%2C%20saya%20ingin%20memesan%20Aki%20YTX%2012V."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.1] text-white font-semibold text-sm transition-all"
                      >
                        Hubungi Spesialis
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-6 flex items-center justify-center">
                    <div className="w-full h-64 sm:h-72 flex items-center justify-center gap-3">
                      <img
                        src={ytx4aImg}
                        alt="Aki VELTRON YTX4A"
                        className="max-h-full max-w-[155px] object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.7)]"
                      />
                      <img
                        src={ytx5aImg}
                        alt="Aki VELTRON YTX5A"
                        className="max-h-full max-w-[155px] object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.7)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls (Bottom Dots & Prev/Next Arrows) */}
            <div className="px-6 sm:px-10 lg:px-14 pb-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx ? 'w-8 bg-sky-400' : 'w-3 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Slide Sebelumnya"
                  className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.15] border border-white/[0.1] text-white transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Slide Berikutnya"
                  className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.15] border border-white/[0.1] text-white transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 2. BRAND STORY / VISI & MISI SECTION ==================== */}
      <section id="visimisi" className="w-full py-16 lg:py-20 relative border-t border-white/[0.06] bg-[#111116]/40">
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">Tentang VELTRON</span>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-white mt-2">
              Visi & Misi Kami
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
              Sebagai brand elektronik dan solusi daya baru, VELTRON hadir untuk memberikan perangkat audio nirkabel, pengisi daya praktis, serta aki kendaraan berkualitas tinggi yang dapat diandalkan setiap hari.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Kartu Visi */}
            <div className="lg:col-span-6 glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group">
              <div className="pointer-events-none absolute -right-16 -top-16 w-52 h-52 bg-sky-500/10 blur-3xl rounded-full group-hover:bg-sky-500/20 transition-colors"></div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-400/10 border border-sky-400/25 flex items-center justify-center text-sky-400 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Visi Utama</span>
                <h3 className="font-bold text-2xl text-white mt-2">
                  Menjadi Brand Elektronik Audio & Solusi Daya Pilihan Utama di Indonesia
                </h3>
                <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                  Menghadirkan kemudahan mobilitas modern melalui jajaran wireless earphone yang nyaman, stasiun pengisian daya meja yang rapi, serta aki YTX bertegangan stabil yang siap mendukung aktivitas harian pengguna.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center gap-3 text-xs text-sky-300 font-semibold">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                Inovasi Audio Nirkabel & Energi Portabel
              </div>
            </div>

            {/* Kartu Misi */}
            <div className="lg:col-span-6 glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group">
              <div className="pointer-events-none absolute -left-16 -bottom-16 w-52 h-52 bg-emerald-500/10 blur-3xl rounded-full group-hover:bg-emerald-500/20 transition-colors"></div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 border border-emerald-400/25 flex items-center justify-center text-emerald-400 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Misi Kami</span>
                <ul className="space-y-3.5 text-sm text-slate-300 mt-4 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                    <span>
                      <strong>Kualitas Produk Teruji:</strong> Menyediakan pilihan perangkat audio dan aki seri YTX4 (4AH) & YTX5 (5AH) dengan performa daya yang konsisten.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                    <span>
                      <strong>Desain Fungsional & Ergonomis:</strong> Merancang produk yang praktis digunakan baik di meja kerja maupun saat bermobilitas tinggi.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                    <span>
                      <strong>Layanan Responsif & Mudah:</strong> Memudahkan pelanggan berkonsultasi dan memesan produk secara langsung melalui kontak resmi VELTRON.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center gap-3 text-xs text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Kualitas Terpercaya • Pelayanan Cepat
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};