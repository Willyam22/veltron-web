import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { ProductCatalog } from './components/ProductCatalog';

export function App() {
  return (
    <div className="w-full min-h-screen bg-[#07070A] text-slate-100 font-sans antialiased selection:bg-sky-400/30 selection:text-sky-200 flex flex-col">
      {/* Top Bar */}
      <div className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-slate-950 text-xs py-2 px-6 text-center font-bold tracking-wide">
        <i className="fa-solid fa-bolt mr-1.5"></i> Official Store VELTRON — Solusi Wireless Audio, Charger & Aki YTX 12V
      </div>

      {/* 1. Navbar Sticky */}
      <Navbar />

      {/* 2. Hero Carousel + Visi & Misi */}
      <HeroCarousel />

      {/* 3. Katalog Produk Interaktif */}
      <ProductCatalog />

      {/* 4. Footer Full-Width */}
      <footer className="w-full border-t border-white/[0.07] bg-[#111116]/80 pt-12 pb-8 mt-auto">
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                  <span className="font-extrabold text-[#07070A] text-sm">V</span>
                </div>
                <span className="font-extrabold text-lg tracking-[0.16em] text-white">VELTRON</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 max-w-md">
                Menyediakan Wireless Earphone, 3-in-1 Wireless Charger, serta Aki YTX4 (12V 4AH) & YTX5 (12V 5AH) berkualitas tinggi.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <a
                href="tel:081234567890"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-200 font-semibold transition-colors"
              >
                <i className="fa-solid fa-phone text-sky-400"></i>
                <span>0812-3456-7890</span>
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#07070A] font-bold transition-colors"
              >
                <i className="fa-brands fa-whatsapp text-base"></i>
                <span>Chat WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>© 2026 VELTRON Official Store. Hak cipta dilindungi.</p>
            <p>Wireless Audio • Wireless Charger • YTX 12V Battery Series</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;