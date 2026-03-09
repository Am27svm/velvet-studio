// ===========================
// THE VELVET STUDIO – CONSTANTS
// ===========================

export const ARTIST = {
  name: "Himanshi Singh",
  experiencetime:new Date().getFullYear() - 2021+"+",
  studio: "The Velvet Studio",
  tagline: "Where Beauty Becomes Art",
  bio: `Beauty is more than makeup — it is confidence, expression, and the art of enhancing what makes every person unique. With over ${new Date().getFullYear() - 2021}+ years of professional experience, Himanshi Singh has built a reputation for creating graceful, refined looks that complement individual features and personal style. Trained at a renowned makeup academy in Mumbai, she blends modern techniques with a strong understanding of Indian skin tones and bridal traditions. Whether it is a bride preparing for her most special day or a client getting ready for a celebration, Himanshi approaches every face as a canvas, delivering results that feel natural, polished, and truly memorable.`,
  certifications: "Certified Makeup Artist – Mumbai Academy of Beauty Arts",
  experience: "Mumbai & Nagpur | Bridal, Editorial & Glamour",
  instagram:
    "https://www.instagram.com/thevelvetstudio25?igsh=NGZxbWNwa3Z2b3Q4",
  instagramHandle: "@thevelvetstudio25",
  whatsapp:
    "https://wa.me/918303023385?text=Hi%20Himanshi!%20I%27d%20like%20to%20book%20a%20makeup%20session.",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d79.0882!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8af9d863e479e820!2sThe%20velvet%20studio!5e0!3m2!1sen!2sin!4v1234567890",
  address: "Opp. of Mahila Degree College C.C. road Deoria, UP, India",
  mail:"himanshisingh0359@gmail.com",
  contact:"8303023385"
};

export const SERVICES = [
  {
    id: 1,
    title: "Bridal Makeup",
    icon: "👰",
    description:
      "Your wedding day deserves nothing less than perfection. We craft long-lasting, ethereal bridal looks tailored to your skin tone, outfit, and vision.",
    price: "Starting ₹8,000",
    highlights: [
      "HD & Airbrush options",
      "Long-lasting formula",
      "Traditional & contemporary styles",
    ],
  },
  {
    id: 2,
    title: "Engagement Makeup",
    icon: "💍",
    description:
      "Step into your engagement ceremony radiating confidence and grace. Dewy, romantic looks that photograph beautifully from every angle.",
    price: "Starting ₹5,000",
    highlights: [
      "Camera-ready finish",
      "Glow-enhancing techniques",
      "Custom look design",
      "Touch-up kit provided",
    ],
  },
  {
    id: 3,
    title: "Party & Event",
    icon: "✨",
    description:
      "From cocktail nights to festive celebrations – bold, glamorous looks that keep you the center of attention all evening long.",
    price: "Starting ₹2,500",
    highlights: [
      "Smoky eyes & bold lips",
      "Glitter & shimmer finishes",
      "Festival & mehndi looks",
      "Quick session available",
    ],
  },
  {
    id: 4,
    title: "Mehendi Makeup",
    icon: "🌸",
    description:
      "Soft, vibrant mehendi looks with a pop of color. Perfect for the fun pre-wedding ceremonies you'll remember forever.",
    price: "Starting ₹3,000",
    highlights: [
      "Light & breathable products",
      "Vibrant eye looks",
      "Traditional motif-inspired",
      "Heat-resistant formula",
    ],
  },
  {
    id: 5,
    title: "Reception Glam",
    icon: "🥂",
    description:
      "End your wedding journey with a showstopping reception look. Bold, refined, and utterly unforgettable.",
    price: "Starting ₹6,000",
    highlights: [
      "Full glam techniques",
      "Contouring & highlighting",
      "Statement eye looks",
      "All-night lasting power",
    ],
  },
  {
    id: 6,
    title: "Editorial / Shoot",
    icon: "📸",
    description:
      "Collaboration with photographers and brands for editorial, portfolio, and commercial shoots.",
    price: "On request",
    highlights: [
      "Concept-driven artistry",
      "High-fashion looks",
      "Avant-garde creativity",
      "On-location availability",
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Nituraj Singh",
    role: "Client – February 2026",
    text: "just got my hair done at this salon and I am obsessed! The facilities are top notch with reasonable prices. Perfect for a relaxing and pampering session.",
    stars: 5,
  },
  {
    id: 2,
    name: "Duggu Duggu",
    role: "Client – February 2026",
    text: "A fresh cut and glow up facial they gave me exactly what I want.The stylist was super cool and skilled. Highly recommended for a pampering session",
    stars: 5,
  },
  {
    id: 3,
    name: "Simran Nishad",
    role: "Client – January 2026",
    text: "I booked for a Diwali party and I was blown away. The smoky eye she created was perfect. So many compliments that night. Will definitely return!",
    stars: 5,
  },
  {
    id: 4,
    name: "Sumit Singh",
    role: "Clint – May 2025",
    text: "I had a fantastic experience at The velvet studio! The staff was incredibly friendly and welcoming, and the salon was spotless.",
    stars: 5,
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Our Work", href: "portfolio" },
  { label: "Location", href: "location" },
  { label: "Contact", href: "booking", cta: true },
];
