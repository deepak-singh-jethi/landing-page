const carData = [
  {
    name: "KIA Cerato",
    category: "Economy Cars",
    image: "https://mkvluxury.com/wp-content/uploads/2024/01/cerato.png",
    alt: "cerato",
    hoverImage: "https://mkvluxury.com/wp-content/uploads/2024/01/side-49.png",
    specifications: {
      power: "150 HP",
      acceleration: "0-100 in 7.2 Seconds",
      transmission: "Automatic",
    },
    price: 130,
    reserveLink:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi!%20I%20would%20like%20to%20reserve%20KIA%20Cerato.",
  },
  {
    name: "Mitsubishi Pajero",
    category: "Economy Cars",
    image:
      "https://mkvluxury.com/wp-content/uploads/2024/01/mitsubishi-pajero.png",
    alt: "mitsubishi-pajero",
    hoverImage: "https://mkvluxury.com/wp-content/uploads/2024/01/side-47.png",
    specifications: {
      power: "185 HP",
      acceleration: "0-100 in 9.8 Seconds",
      transmission: "Automatic",
    },
    price: 350,
    reserveLink:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi!%20I%20would%20like%20to%20reserve%20Mitsubishi%20Pajero.",
  },
  {
    name: "KIA Sonet",
    category: "Economy Cars",
    image: "https://mkvluxury.com/wp-content/uploads/2024/01/sonet-1.png",
    alt: "sonet",
    hoverImage: "https://mkvluxury.com/wp-content/uploads/2024/01/side-45.png",
    specifications: {
      power: "115 HP",
      acceleration: "0-100 in 13.3 Seconds",
      transmission: "Automatic",
    },
    price: 250,
    reserveLink:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi!%20I%20would%20like%20to%20reserve%20KIA%20Sonet.",
  },
  {
    name: "JAC J7",
    category: "Economy Cars",
    image: "https://mkvluxury.com/wp-content/uploads/2024/01/j7.png",
    alt: "j7",
    hoverImage: "https://mkvluxury.com/wp-content/uploads/2024/01/side-42.png",
    specifications: {
      power: "150 HP",
      acceleration: "0-100 in 12.9 Seconds",
      transmission: "Automatic",
    },
    price: 150,
    reserveLink:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi!%20I%20would%20like%20to%20reserve%20JAC%20J7.",
  },
  {
    name: "Audi A3",
    category: "Economy Cars",
    image: "https://mkvluxury.com/wp-content/uploads/2024/01/a3-2.png",
    alt: "audi-a3",
    hoverImage: "https://mkvluxury.com/wp-content/uploads/2024/01/side2.png",
    specifications: {
      power: "200 HP",
      acceleration: "0-100 in 8.4 Seconds",
      transmission: "Automatic",
    },
    price: 350,
    reserveLink:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi!%20I%20would%20like%20to%20reserve%20Audi%20A3.",
  },
  {
    name: "Audi Q3",
    category: "Economy Cars",
    image: "https://mkvluxury.com/wp-content/uploads/2024/01/q3.png",
    alt: "audi-q3",
    hoverImage: "https://mkvluxury.com/wp-content/uploads/2024/01/side-34.png",
    specifications: {
      power: "184 HP",
      acceleration: "0-100 in 7.3 Seconds",
      transmission: "Automatic",
    },
    price: 550,
    reserveLink:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi!%20I%20would%20like%20to%20reserve%20Audi%20Q3.",
  },
  {
    name: "Lamborghini Urus",
    category: "Supercars",
    power: "650 HP",
    acceleration: "0-100 in 3.6 Seconds",
    transmission: "Automatic",
    specifications: {
      power: "184 HP",
      acceleration: "0-100 in 7.3 Seconds",
      transmission: "Automatic",
    },
    price: 3000,
    image: "https://mkvluxury.com/wp-content/uploads/2024/01/urus.png",
    reserveLink:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi! I would like to reserve Lamborghini Urus.",
  },
  {
    name: "Ford Mustang",
    category: "Supercars",
    specifications: {
      power: "310 HP",
      acceleration: "0-100 in 6.0 Seconds",
      transmission: "Automatic",
    },

    price: "400",
    image: "https://mkvluxury.com/wp-content/uploads/2024/01/mustang.png",
    reserveLink:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi! I would like to reserve Ford Mustang.",
  },
  {
    name: "Chevrolet Corvette C8",
    category: "Supercars",
    power: "495 HP",
    specifications: {
      power: "160 HP",
      acceleration: "0-100 in 2.9 Seconds",
      transmission: "Automatic",
    },

    price: "1400",
    image: "https://mkvluxury.com/wp-content/uploads/2024/01/corvette.png",
    reserveLink:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi! I would like to reserve Chevrolet Corvette C8.",
  },
  {
    name: "McLaren 720S Performance",
    category: "Supercars",
    specifications: {
      power: "710 HP",
      acceleration: "0-100 in 2.9 Seconds",
      transmission: "Automatic",
    },

    price: "4500",
    image: "https://mkvluxury.com/wp-content/uploads/2023/12/72s.png",
    reserveLink:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi! I would like to reserve McLaren 720S Performance.",
  },
  {
    name: "Chevrolet Tahoe",
    image: "https://mkvluxury.com/wp-content/uploads/2024/06/1-1.png",
    category: "Luxury SUV",
    price: "450",
    alt: "Chevrolet-Tahoe",
    specifications: {
      power: "355 HP",
      acceleration: "0-100 in 6.5 Seconds",
      transmission: "Automatic",
    },
    hoverImage: "https://mkvluxury.com/wp-content/uploads/2024/06/2.png",
    reserveLink:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi! I would like to reserve Chevrolet Tahoe.",
  },
  {
    name: "Porsche 911 Carrera S",
    image: "https://mkvluxury.com/wp-content/uploads/2024/06/1.png",
    category: "Supercars",
    price: 2000,
    alt: "Porsche-911-Carrera-S",
    specifications: {
      power: "443 HP",
      acceleration: "0-100 in 3.5 Seconds",
      transmission: "Automatic",
    },
    hoverImage: "https://mkvluxury.com/wp-content/uploads/2024/06/2.png",
    reserveLink:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi! I would like to reserve Porsche 911 Carrera S.",
  },
  {
    name: "Range Rover Vogue",
    image: "https://mkvluxury.com/wp-content/uploads/2024/06/1.png",
    category: "Luxury SUV",
    price: "1000",
    alt: "Range-Rover-Vogue",
    specifications: {
      power: "400 HP",
      acceleration: "0-100 in 6.0 Seconds",
      transmission: "Automatic",
    },
    hoverImage: "https://mkvluxury.com/wp-content/uploads/2024/06/2.png",
    reserveLink:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi! I would like to reserve Range Rover Vogue.",
  },
  {
    name: "Lamborghini Urus",
    category: "Supercars, Exotic Cars",
    image: "https://mkvluxury.com/wp-content/uploads/2023/12/urus-1.png",
    specifications: {
      power: "650 HP",
      acceleration: "0-100 in 3.6 Seconds",
      transmission: "automatic",
    },
    price: 3000,
    reservation_link:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi! I would like to reserve Lamborghini Urus.",
  },
  {
    name: "Rolls-Royce Cullinan",
    category: "Luxury SUV",
    image: "https://mkvluxury.com/wp-content/uploads/2023/12/cullinan-1.png",
    specifications: {
      power: "563 HP",
      acceleration: "0-100 in 4.8 Seconds",
      transmission: "Automatic",
    },
    price: 4500,
    reservation_link:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi! I would like to reserve Rolls-Royce Cullinan.",
  },
  {
    name: "Audi A8L",
    category: "Luxury Cars",
    image1: "https://mkvluxury.com/wp-content/uploads/2023/12/a8.png",
    image: "https://mkvluxury.com/wp-content/uploads/2024/01/side-25.png",
    specifications: {
      power: "335 HP",
      acceleration: "0-100 in 5.6 Seconds",
      transmission: "Automatic",
    },
    price: 1500,
    reserveLink:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi! I would like to reserve Audi A8L.",
  },
  {
    name: "Mercedes-Benz S450",
    category: "Luxury Cars",
    image: "https://mkvluxury.com/wp-content/uploads/2024/01/side-25.png",
    specifications: {
      power: "362 HP",
      acceleration: "0-100 in 5.1 Seconds",
      transmission: "Automatic",
    },
    price: 2000,
    reserveLink:
      "https://api.whatsapp.com/send?phone=971524385627&text=Hi! I would like to reserve Mercedes-Benz S450.",
  },
];

const carCategory = [
  "Luxury SUV",
  "Luxury Cars",
  "Economy Cars",
  "Exotic Cars",
  "Supercars",
];
const carCategories = [
  {
    name: "Luxury SUV",
    image: "https://mkvluxury.com/wp-content/uploads/2024/05/SUV2.png",
  },
  {
    name: "Luxury Cars",
    image: "https://mkvluxury.com/wp-content/uploads/2024/05/sports-car2.png",
  },
  {
    name: "Economy Cars",
    image:
      "https://mkvluxury.com/wp-content/uploads/2023/12/economic-cars-1.png",
  },
  {
    name: "Exotic Cars",
    image: "https://mkvluxury.com/wp-content/uploads/2024/01/exotic-cars.png",
  },
  {
    name: "Supercars",
    image: "https://mkvluxury.com/wp-content/uploads/2024/05/sports-car2.png",
  },
];

const featuresData = [
  {
    icon: "https://mkvluxury.com/wp-content/uploads/2023/12/24x.svg",
    title: "7/24",
    description: "Customer Support",
  },
  {
    icon: "https://mkvluxury.com/wp-content/uploads/2023/12/zeero.svg",
    title: "Zero Deposit",
    description: "Options Available",
  },
  {
    icon: "https://mkvluxury.com/wp-content/uploads/2023/12/25.svg",
    title: "25% Off",
    description: "On Monthly Booking",
  },
  {
    icon: "https://mkvluxury.com/wp-content/uploads/2023/12/insurance.svg",
    title: "Full Insurance",
    description: "Available Low Deposits",
  },
];
