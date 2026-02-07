
import React from 'react';
import { PriceItem, FaqItem, TestimonialItem } from './types';
import { Heart, ShieldCheck, Zap } from 'lucide-react';

/** 
 * ============================================================
 * SEKCJA EDYCJI TREŚCI - TUTAJ ZMIENIAJ TEKSTY
 * ============================================================
 */

export const BRAND_NAME = "Harmonia";

export const CONTACT_INFO = {
  phone: "+48 123 456 789",
  email: "kontakt@anna-kowalska.pl",
  address: "Konsultacje Online / Kraków",
  hours: "Poniedziałek - Piątek: 09:00 - 20:00",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com"
  }
};

export const ABOUT_ME = {
  name: "Anna Kowalska",
  role: "Psychoterapeuta, Psycholog",
  intro: "Nazywam się Anna Kowalska",
  description1: "Specjalizuję się w prowadzeniu terapii w formie online, co pozwala nam na współpracę bez względu na to, gdzie aktualnie przebywasz. Pracuję w nurcie poznawczo-behawioralnym (CBT).",
  description2: "Wierzę, że profesjonalna pomoc psychologiczna powinna być dostępna i komfortowa. Sesje wideo zapewniają pełne bezpieczeństwo i intymność, oszczędzając jednocześnie Twój czas na dojazdy.",
  qualifications: [
    "Magister Psychologii (Uniwersytet Jagielloński)",
    "Certyfikat Psychoterapeuty CBT w procesie",
    "Szkolenia z zakresu interwencji kryzysowej"
  ],
  experience: [
    "Praktyka online od 4 lat",
    "Doświadczenie w pracy z lękiem i depresją",
    "Stała superwizja u certyfikowanych specjalistów"
  ]
};

export const PRICES: PriceItem[] = [
  {
    title: 'Konsultacja Indywidualna Online',
    price: '180 PLN',
    duration: '50 min',
    description: 'Najpopularniejsza forma wsparcia. Bezpieczne połączenie wideo z dowolnego miejsca.',
    features: [
      'Pełna poufność danych', 
      'Brak konieczności dojazdów', 
      'Elastyczny kalendarz online',
      'Materiały terapeutyczne w PDF'
    ],
    isAvailable: true,
  },
  {
    title: 'Konsultacja Stacjonarna (Kraków)',
    price: '220 PLN',
    duration: '50 min',
    description: 'Spotkania twarzą w twarz w nowo powstającym gabinecie w centrum Krakowa.',
    features: [
      'Komfortowe wnętrze', 
      'Bezpośredni kontakt', 
      'Dostępność wkrótce'
    ],
    isAvailable: false,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Czy terapia online jest tak samo skuteczna jak stacjonarna?',
    answer: 'Tak, liczne badania naukowe potwierdzają, że terapia poznawczo-behawioralna prowadzona online ma taką samą skuteczność jak ta w gabinecie. Kluczowa jest relacja i systematyczność.',
  },
  {
    question: 'Jakiej platformy używamy do rozmów?',
    answer: 'Korzystam z bezpiecznych i szyfrowanych narzędzi (np. Google Meet lub dedykowane platformy medyczne), które gwarantują prywatność naszej rozmowy.',
  },
  {
    question: 'Co jeśli będę mieć problemy techniczne?',
    answer: 'Zawsze mamy przygotowany plan awaryjny (np. kontakt telefoniczny). Jeśli problemy techniczne uniemożliwią sesję z mojej winy, nie ponosisz kosztów spotkania.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    text: "Początkowo obawiałam się terapii online, ale Pani Anna rozwiała moje wątpliwości. Czuję się tak, jakbym siedziała z nią w jednym pokoju.",
    author: "Karolina, 32 lata",
  },
  {
    text: "Dla mnie, jako osoby dużo podróżującej, opcja online to jedyny sposób na regularną terapię. Bardzo polecam ten format u Pani Anny.",
    author: "Piotr, 40 lat",
  },
];

export const COLORS = {
  primary: 'bg-[#B2C2B2]',
  secondary: 'bg-[#EDE7DE]',
  text: 'text-[#2D3436]',
};

export const NAVIGATION = [
  { name: 'O mnie', href: '#o-mnie' },
  { name: 'Dlaczego Online', href: '#dla-kogo' },
  { name: 'Oferta', href: '#oferta' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Kontakt', href: '#kontakt' },
];

export const FEATURES = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Bezpieczeństwo Online',
    description: 'Używam tylko certyfikowanych narzędzi wideo, które zapewniają 100% poufności Twoich danych.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Komfort Domu',
    description: 'Rozmawiasz z bezpiecznego dla siebie miejsca, co sprzyja otwartości i redukuje stres.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Oszczędność Czasu',
    description: 'Zapomnij o staniu w korkach i szukaniu parkingu. Terapia wpisuje się w Twój plan dnia.'
  }
];
