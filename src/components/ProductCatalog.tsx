import React, { useState } from 'react';
import { products } from '../data/products';
import type { Product } from '../data/products';

export const ProductCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Semua' | 'Earphone' | 'Charger' | 'Aki'>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});

  const filteredProducts = products.filter((p) => {
    const matchCat = activeCategory === 'Semua' || p.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.chips.some((c) => c.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  const handleOptionSelect = (productId: string, option: string) => {
    setSelectedOptions((prev) => ({ ...prev, [productId]: option }));
  };

  const handleDirectOrder = (product: Product) => {
    const chosenOption = product.options ? selectedOptions[product.id] || product.options[0] : '';
    const optionText = chosenOption ? ` (Varian: ${chosenOption})` : '';
    const message = `Halo Admin VELTRON, saya ingin memesan produk:\n\n*${product.name}*${optionText}\nHarga: Rp ${product.price.toLocaleString('id-ID')}\n\nMohon info ketersediaan stok dan pembayarannya. Terima kasih!`;

    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="katalog" className="w-full py-16 lg:py-20 border-t border-white/[0.06]">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        
        {/* Header Katalog */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">Koleksi Resmi</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1.5">
              Katalog Produk VELTRON
            </h2>
          </div>
          <p className="text-sm text-slate-400">
            Menampilkan <span className="text-white font-semibold">{filteredProducts.length}</span> dari {products.length} produk resmi
          </p>
        </div>

        {/* Bar Filter & Pencarian */}
        <div className="glass rounded-2xl p-4 mb-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {(['Semua', 'Earphone', 'Charger', 'Aki'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-sky-400 text-slate-950 shadow-[0_0_25px_-5px_rgba(56,189,248,0.5)]'
                    : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/[0.07]'
                }`}
              >
                {cat === 'Semua' ? 'Semua Produk' : cat === 'Aki' ? 'Aki YTX Series (12V)' : `Wireless ${cat}`}
              </button>
            ))}
          </div>

          {/* Input Cari */}
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari earphone, charger, YTX4, YTX5..."
              className="w-full pl-4 pr-4 py-2.5 rounded-xl bg-[#07070A]/90 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>
        </div>

        {/* Grid Kartu Produk Full-Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((p) => {
            const currentOption = selectedOptions[p.id] || (p.options ? p.options[0] : '');
            const displayImage = (currentOption && p.optionImages?.[currentOption]) || p.image;

            return (
              <article
                key={p.id}
                className="glass-card rounded-3xl p-6 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-sky-400/15 text-sky-300 border border-sky-400/30">
                      {p.badge}
                    </span>
                    <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
                      {p.category}
                    </span>
                  </div>

                  {/* Box Foto Produk */}
                  <div className="relative h-48 rounded-2xl bg-[#07070A]/80 border border-white/[0.05] flex items-center justify-center p-4 overflow-hidden mb-5">
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={displayImage}
                        alt={p.name}
                        className="max-h-full max-w-full object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.65)]"
                      />
                    </div>
                  </div>

                  {/* Nama & Deskripsi */}
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {p.desc}
                  </p>

                  {/* Spec Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.chips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-[11px] text-slate-300 font-medium"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* Pilihan Varian (Warna / Case) */}
                  {p.options && (
                    <div className="mt-5 pt-4 border-t border-white/[0.06]">
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-2">
                        Pilih Opsi / Varian:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {p.options.map((opt, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleOptionSelect(p.id, opt)}
                            className={`text-xs px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                              currentOption === opt
                                ? 'bg-sky-400/20 border-sky-400 text-white font-bold'
                                : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:text-white'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Harga & Tombol Order WA */}
                <div className="mt-6 pt-4 border-t border-white/[0.07]">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs text-slate-400">Harga Resmi</span>
                    <span className="text-xl font-extrabold text-white">
                      Rp {p.price.toLocaleString('id-ID')}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDirectOrder(p)}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp text-base"></i>
                    <span>Pesan via WhatsApp</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};