export interface Product {
  id: number;
  name: string;
  category: 'earphone' | 'charger' | 'aki';
  price: number;
  desc: string;
  icon: string;
  badge: string;
  options?: string[]; // Untuk varian warna atau opsi tambahan (misal: Case/Non-Case, Warna)
}

export interface CartItem extends Product {
  qty: number;
  selectedOption?: string;
}