
import React, { useState } from 'react';
import { 
  Menu, X, Check, MapPin, Phone, Mail, Clock, 
  Instagram, Facebook, Linkedin, ArrowRight,
  Shield, MessageCircle, Monitor
} from 'lucide-react';
import { 
  NAVIGATION, COLORS, PRICES, FAQS, TESTIMONIALS, FEATURES, 
  CONTACT_INFO, ABOUT_ME, BRAND_NAME 
} from '../constants';

// --- Komponenty Współdzielone ---

const Button: React.FC<{ 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'disabled';
  className?: string;
  onClick?: () => void;
}> = ({ children, variant = 'primary', className = '', onClick }) => {
  const base = "px-8 py-3 rounded-full font-medium transition-all duration-300 transform active:scale-95 text-center";
  const styles = {
    primary: `${COLORS.primary} text-white hover:opacity-90 shadow-lg shadow-sage-200`,
    secondary: `${COLORS.secondary} text-[#2D3436] hover:opacity-90`,
    outline: "border-2 border-[#B2C2B2] text-[#B2C2B2] hover:bg-[#B2C2B2] hover:text-white",
    disabled: "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
  };

  return (
    <button onClick={variant !== 'disabled' ? onClick : undefined} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeading: React.FC<{ title: string; subtitle?: string; center?: boolean }> = ({ title, subtitle, center }) => (
  <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#2D3436]">{title}</h2>
    {subtitle && <p className="text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>}
    <div className={`h-1 w-20 bg-[#B2C2B2] mt-4 ${center ? 'mx-auto' : ''}`} />
  </div>
);

// --- Sekcje Strony ---

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="text-2xl serif font-semibold text-[#B2C2B2]">{BRAND_NAME}</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {NAVIGATION.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-gray-600 hover:text-[#B2C2B2] transition-colors font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
            <Button variant="primary" className="!px-6 !py-2 text-sm">Umów wizytę online</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4">
          {NAVIGATION.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="block text-lg text-gray-600 hover:text-[#B2C2B2] font-medium"
            >
              {item.name}
            </a>
          ))}
          <Button variant="primary" className="w-full">Umów wizytę</Button>
        </div>
      )}
    </nav>
  );
};

export const Hero: React.FC = () => (
  <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[#FAFAF8] relative overflow-hidden">
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#EDE7DE] rounded-full blur-3xl opacity-30" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <span className="text-[#B2C2B2] font-semibold tracking-widest uppercase text-sm mb-4 block">Psychoterapia Online</span>
          <h1 className="text-4xl md:text-6xl font-semibold text-[#2D3436] leading-tight mb-6">
            Twoje bezpieczne miejsce na <span className="italic">zmianę</span> – bez wychodzenia z domu.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Profesjonalna pomoc psychologiczna dostępna tam, gdzie Ty. Oszczędź czas i zadbaj o swój dobrostan w komfortowych warunkach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="primary">Umów pierwszą wizytę</Button>
            <Button variant="outline">Jak wygląda sesja online?</Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1200" 
              alt="Spokojny gabinet psychologa" 
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block max-w-[200px]">
            <p className="text-sm italic font-serif text-gray-600">"Technologia w służbie empatii. Jestem blisko, mimo dystansu."</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const About: React.FC = () => (
  <section id="o-mnie" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-5/12">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
            alt={ABOUT_ME.name} 
            className="rounded-3xl shadow-lg w-full grayscale-[10%]"
          />
        </div>
        <div className="md:w-7/12">
          <SectionHeading title={ABOUT_ME.intro} />
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {ABOUT_ME.description1}
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {ABOUT_ME.description2}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Kwalifikacje</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                {ABOUT_ME.qualifications.map((q, i) => <li key={i}>• {q}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Podejście Online</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                {ABOUT_ME.experience.map((e, i) => <li key={i}>• {e}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ForWhom: React.FC = () => (
  <section id="dla-kogo" className="py-24 bg-[#F5F5F0]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading 
        title="W czym mogę Ci pomóc online?" 
        subtitle="Forma zdalna świetnie sprawdza się w przypadku większości trudności psychologicznych." 
        center 
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Lęki i stres', desc: 'Skuteczna praca nad napięciem i lękiem w Twoim bezpiecznym otoczeniu.' },
          { title: 'Depresja i smutek', desc: 'Odnajdywanie motywacji i sensu małymi krokami, bez presji wyjścia z domu.' },
          { title: 'Relacje', desc: 'Przyglądanie się Twoim więziom z innymi i komunikacji.' },
          { title: 'Poczucie własnej wartości', desc: 'Budowanie stabilnego fundamentu pewności siebie.' },
          { title: 'Przeciążenie pracą', desc: 'Wsparcie dla osób żyjących w dużym tempie i stresie zawodowym.' },
          { title: 'Rozwój osobisty', desc: 'Jeśli po prostu czujesz, że chcesz lepiej poznać siebie.' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#EDE7DE] rounded-lg flex items-center justify-center mb-6">
              <Check className="text-[#B2C2B2] w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const HowIWork: React.FC = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <SectionHeading title="Jak przebiega sesja wideo?" />
          <div className="space-y-10">
            {[
              { num: '01', title: 'Rezerwacja', text: 'Wybierasz dogodny termin w kalendarzu online.' },
              { num: '02', title: 'Link do spotkania', text: 'Otrzymujesz e-mail z linkiem do bezpiecznego pokoju rozmów.' },
              { num: '03', title: 'Nasza rozmowa', text: 'Widzimy się i słyszymy przez 50 minut – tak jak w gabinecie.' },
              { num: '04', title: 'Dalsza praca', text: 'Przesyłam Ci materiały pomocnicze bezpośrednio po sesji.' }
            ].map((step, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-4xl font-serif text-[#EDE7DE] font-bold">{step.num}</span>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-500">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 bg-[#B2C2B2] p-12 rounded-[3rem] text-white">
          <h3 className="text-2xl serif mb-6">Zalety terapii online</h3>
          <ul className="space-y-6">
            {[
              'Oszczędność czasu (brak dojazdów)', 
              'Komfort własnego fotela', 
              'Pełna dyskrecja', 
              'Możliwość sesji z dowolnego miejsca'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-white bg-white/20 rounded-full p-1" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export const Offer: React.FC = () => (
  <section id="oferta" className="py-24 bg-[#FAFAF8]">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Wybierz formę wsparcia" center subtitle="Skupiam się na najwyższej jakości sesjach online, planując jednocześnie otwarcie przestrzeni stacjonarnej." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PRICES.map((item, i) => (
          <div key={i} className={`p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col ${item.isAvailable ? 'bg-white border-[#B2C2B2] shadow-xl scale-105 z-10' : 'bg-gray-50/50 border-gray-100 opacity-80'}`}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{item.title}</h3>
              {!item.isAvailable && (
                <span className="bg-gray-200 text-gray-600 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">Wkrótce</span>
              )}
              {item.isAvailable && (
                <span className={`${COLORS.primary} text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold`}>Dostępna</span>
              )}
            </div>
            
            <div className="flex items-baseline gap-2 mb-4">
              <span className={`text-4xl font-bold ${item.isAvailable ? 'text-[#B2C2B2]' : 'text-gray-400'}`}>{item.price}</span>
              <span className="text-gray-400 text-sm">/ {item.duration}</span>
            </div>
            
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">{item.description}</p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {item.features.map((feat, j) => (
                <li key={j} className={`flex items-center gap-2 text-sm ${item.isAvailable ? 'text-gray-600' : 'text-gray-400'}`}>
                  <Check className={`w-4 h-4 ${item.isAvailable ? 'text-[#B2C2B2]' : 'text-gray-300'}`} />
                  {feat}
                </li>
              ))}
            </ul>
            
            <Button variant={item.isAvailable ? 'primary' : 'disabled'} className="w-full">
              {item.isAvailable ? 'Zarezerwuj termin' : 'Powiadom mnie o otwarciu'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Trust: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#EDE7DE]/30 rounded-[3rem] p-12 md:p-20 text-center">
        <SectionHeading title="Dlaczego warto mi zaufać?" center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {FEATURES.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-[#B2C2B2]">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
              <p className="text-gray-500 max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const Testimonials: React.FC = () => (
  <section className="py-24 bg-[#FAFAF8]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Opinie moich pacjentów" center />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {TESTIMONIALS.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm italic relative">
            <MessageCircle className="absolute -top-4 -left-4 w-10 h-10 text-[#EDE7DE]" />
            <p className="text-gray-600 mb-6 leading-relaxed">"{item.text}"</p>
            <span className="text-[#B2C2B2] font-semibold not-italic">— {item.author}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FirstVisit: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-[#B2C2B2] p-12 rounded-[3rem] text-white">
        <h2 className="text-3xl serif mb-6">Jak przygotować się do sesji online?</h2>
        <p className="text-lg opacity-90 mb-8">
          Wystarczy komputer lub telefon, stabilny internet i 50 minut spokoju. Wybierz miejsce, w którym nikt nie będzie Ci przeszkadzał. Słuchawki pomogą zachować dodatkową prywatność.
        </p>
      </div>
    </div>
  </section>
);

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Pytania o terapię online" center />
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center transition-colors hover:bg-gray-50"
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === i ? <X className="w-5 h-5 text-[#B2C2B2]" /> : <Check className="w-5 h-5 text-[#B2C2B2]" />}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact: React.FC = () => (
  <section id="kontakt" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <SectionHeading title="Zacznijmy rozmowę" />
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#EDE7DE] rounded-full flex items-center justify-center text-[#B2C2B2] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Telefon</h4>
                <p className="text-gray-500">{CONTACT_INFO.phone}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#EDE7DE] rounded-full flex items-center justify-center text-[#B2C2B2] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">E-mail</h4>
                <p className="text-gray-500">{CONTACT_INFO.email}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#EDE7DE] rounded-full flex items-center justify-center text-[#B2C2B2] shrink-0">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Format</h4>
                <p className="text-gray-500">Sesje wideo (Google Meet / Skype)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <form className="bg-[#FAFAF8] p-8 md:p-12 rounded-[3rem] space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Imię i Nazwisko</label>
                <input type="text" className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B2C2B2]" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Adres E-mail</label>
                <input type="email" className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B2C2B2]" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Wiadomość</label>
              <textarea rows={4} className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B2C2B2]"></textarea>
            </div>
            <Button variant="primary" className="w-full">Wyślij zapytanie</Button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export const Footer: React.FC = () => (
  <footer className="bg-[#2D3436] text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <span className="text-3xl serif font-semibold text-[#B2C2B2] mb-6 block">{BRAND_NAME}</span>
          <p className="text-gray-400 max-w-sm">
            Wsparcie psychologiczne w zasięgu jednego kliknięcia. Profesjonalna terapia online.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Menu</h4>
          <ul className="space-y-4 text-gray-400">
            {NAVIGATION.map(item => (
              <li key={item.name}><a href={item.href} className="hover:text-white transition-colors">{item.name}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Kontakt</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> {CONTACT_INFO.phone}</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> {CONTACT_INFO.email}</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {BRAND_NAME} - {ABOUT_ME.name}. Wszystkie prawa zastrzeżone.</p>
      </div>
    </div>
  </footer>
);
