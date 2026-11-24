import singleQuickChargerImg from '../assets/Single_Quick_Charger.png';
import wirelessChargerFlipImg from '../assets/Wireless_Charger_3in1_Flip.png';
import wirelessChargerStandImg from '../assets/Wireless_Charger_3in1_Stand.png';
import wirelessEarbudWithCaseImg from '../assets/Wireless_Earbud_with_Case.png';
import wirelessEarbudImg from '../assets/Wireless_Earbud.png';
import wirelessEarphoneImg from '../assets/Wireless_Earphone.png';
import ytx4aImg from '../assets/YTX4A.png';
import ytx5aImg from '../assets/YTX5A.png';

export interface Product {
  id: string;
  name: string;
  category: 'Earphone' | 'Charger' | 'Aki';
  price: number;
  badge: string;
  desc: string;
  chips: string[];
  image: string;
  optionImages?: { [optionName: string]: string };
  options?: string[];
}

export const products: Product[] = [
  {
    id: 'earphone-non',
    name: 'Wireless Earphone Non-Earbuds',
    category: 'Earphone',
    price: 299000,
    badge: 'Terlaris',
    desc: 'Desain ergonomis semi in-ear tanpa karet silikon, sirkulasi udara nyaman dengan suara jernih & bass seimbang.',
    chips: ['Open-Fit Comfort', 'Bluetooth 5.4', '28 Jam Baterai'],
    image: wirelessEarphoneImg,
    options: ['Obsidian Black', 'Pure White']
  },
  {
    id: 'earphone-with',
    name: 'Wireless Earphone With Earbuds',
    category: 'Earphone',
    price: 349000,
    badge: 'Populer',
    desc: 'Isolasi suara pasif maksimal dengan eartips silikon lembut untuk fokus mendengarkan musik & panggilan telepon.',
    chips: ['Deep Bass Seal', 'Clear Call Mic', 'Fast Charging'],
    image: wirelessEarbudWithCaseImg,
    options: ['Dengan Charging Case', 'Tanpa Charging Case'],
    optionImages: {
      'Dengan Charging Case': wirelessEarbudWithCaseImg,
      'Tanpa Charging Case': wirelessEarbudImg
    }
  },
  {
    id: 'charger-3in1-stand',
    name: '3 in 1 Wireless Charger Standing',
    category: 'Charger',
    price: 499000,
    badge: 'Flagship',
    desc: 'Stasiun pengisian daya vertikal magnetik untuk Smartphone, Smartwatch, dan TWS sekaligus di satu meja kerja.',
    chips: ['15W Fast Charge', '3-in-1 Dock', 'Sudut Ergonomis'],
    image: wirelessChargerStandImg
  },
  {
    id: 'charger-single',
    name: 'Wireless Charger Single Standing',
    category: 'Charger',
    price: 199000,
    badge: 'Esensial',
    desc: 'Dudukan pengisi daya nirkabel tunggal dengan sudut pandang ideal untuk notifikasi dan video call saat bekerja.',
    chips: ['Dual Coil Stand', 'Vertikal & Horizontal', 'Anti-Overheat'],
    image: singleQuickChargerImg
  },
  {
    id: 'charger-3in1-flip',
    name: '3 in 1 Wireless Charger Flip',
    category: 'Charger',
    price: 450000,
    badge: 'Portable',
    desc: 'Desain lipat ultra-ringkas yang mudah masuk saku tas, solusi praktis mengisi 3 perangkat saat traveling.',
    chips: ['Foldable Design', 'Travel Friendly', 'Multi-Device'],
    image: wirelessChargerFlipImg
  },
  {
    id: 'aki-ytx4',
    name: 'Aki VELTRON YTX4 (12V 4AH)',
    category: 'Aki',
    price: 220000,
    badge: '12V • 4AH',
    desc: 'Aki bebas perawatan (Maintenance Free) bertegangan 12V dengan kapasitas 4AH untuk starter kelistrikan responsif.',
    chips: ['Tegangan 12V', 'Kapasitas 4AH', 'Maintenance Free'],
    image: ytx4aImg
  },
  {
    id: 'aki-ytx5',
    name: 'Aki VELTRON YTX5 (12V 5AH)',
    category: 'Aki',
    price: 265000,
    badge: '12V • 5AH',
    desc: 'Kapasitas ekstra 5AH pada tegangan 12V untuk daya tahan kelistrikan lebih kuat dan suplai arus yang stabil.',
    chips: ['Tegangan 12V', 'Kapasitas 5AH', 'High Cranking'],
    image: ytx5aImg
  }
];