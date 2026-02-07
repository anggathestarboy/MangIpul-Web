export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  bestSeller?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Mie Goreng Spesial",
    description: "Mie goreng dengan bumbu rahasia dan tambahan telur, ayam suwir, dan sayuran segar.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Mie",
    price: 25000,
    bestSeller: true
  },
  {
    id: 2,
    title: "Mie Lidi Pedas Manis",
    description: "Mie lidi goreng dengan paduan rasa pedas, manis, dan gurih yang pas.",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Mie Lidi",
    price: 15000,
    bestSeller: true
  },
  {
    id: 3,
    title: "Makaroni Pedas",
    description: "Makaroni goreng dengan bumbu pedas khas dan taburan keju yang melimpah.",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Makaroni",
    price: 20000
  },
  {
    id: 4,
    title: "Mie Kuah Kaldu",
    description: "Mie kuah dengan kaldu tulang sapi asli yang dimasak selama berjam-jam.",
    image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Mie",
    price: 30000
  },
  {
    id: 5,
    title: "Mie Lidi Original",
    description: "Mie lidi dengan bumbu original yang sudah turun temurun di keluarga.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Mie Lidi",
    price: 12000
  },
  {
    id: 6,
    title: "Makaroni Keju",
    description: "Makaroni dengan taburan keju mozzarella yang melimpah dan creamy.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Makaroni",
    price: 22000
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Pelanggan Tetap",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    quote: "Mie gorengnya enak banget! Bumbunya pas, ga terlalu berminyak. Sudah jadi langganan 2 tahun terakhir.",
    rating: 5
  },
  {
    id: 2,
    name: "Sari Dewi",
    role: "Mahasiswa",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    quote: "Mie lidinya pedes mantap! Cocok buat teman nugas malem. Harganya juga terjangkau untuk kantong mahasiswa.",
    rating: 5
  },
  {
    id: 3,
    name: "Agus Wijaya",
    role: "Karyawan Kantoran",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    quote: "Makaroni kejunya juara! Cheese pull-nya bikin nagih. Sering pesen buat snack di kantor.",
    rating: 5
  },
  {
    id: 4,
    name: "Rina Amelia",
    role: "Ibu Rumah Tangga",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    quote: "Anak-anak suka banget sama mie kuahnya. Kaldu asli, ga pakai MSG berlebihan. Sehat dan enak!",
    rating: 5
  },
  {
    id: 5,
    name: "Dodi Pratama",
    role: "Pedagang",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    quote: "Rasanya konsisten terus. Dari dulu sampe sekarang tetap enak. Recommended banget!",
    rating: 5
  },
  {
    id: 6,
    name: "Lina Marlina",
    role: "Guru",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    quote: "Tempatnya bersih, pelayanannya ramah. Makanannya juga higienis. Sering ajak teman-teman guru kesini.",
    rating: 5
  }
];

export const features = [
  {
    id: 1,
    title: "Bumbu Rahasia",
    description: "Menggunakan rempah rempah pilihan untuk menghadirkan cita rasa yang tak mengecewakan",
   
  },
  {
    id: 2,
    title: "Bahan Segar",
    description: "Hanya menggunakan bahan-bahan segar dan berkualitas untuk rasa terbaik.",
    
  },
  {
    id: 3,
    title: "Hygienis",
    description: "Proses pembuatan yang bersih dan higienis sesuai standar kesehatan.",
   
  },
  {
    id: 4,
    title: "Harga Terjangkau",
    description: "Rasa premium dengan harga yang ramah di kantong semua kalangan.",
   
  }
];