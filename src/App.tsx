import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Bookmark,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Clock3,
  GraduationCap,
  Instagram,
  Menu,
  Play,
  Search,
  Send,
  Music2,
  X,
  Youtube,
} from 'lucide-react';
import ChatWidget from '@/components/ChatWidget';
import AdminPage from '@/components/AdminPage';
import ArticlePage from '@/components/ArticlePage';
import Logo from '@/components/Logo';
import { articles } from '@/articles';

const images = {
  students: 'https://images.pexels.com/photos/34690994/pexels-photo-34690994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  seville: 'https://images.pexels.com/photos/29210948/pexels-photo-29210948.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  friends: 'https://images.pexels.com/photos/37894627/pexels-photo-37894627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  campus: 'https://images.pexels.com/photos/16549991/pexels-photo-16549991.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  city: 'https://images.pexels.com/photos/11829188/pexels-photo-11829188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

type SiteSection = {
  title: string;
  href: string;
  items: { title: string; href: string }[];
};

const siteSections: SiteSection[] = [
  {
    title: 'Sobre el proyecto',
    href: '#sobre-el-proyecto',
    items: [
      { title: '¿Qué es UniAlDía?', href: '#que-es-unialdia' },
      { title: 'Misión y valores', href: '#mision-y-valores' },
      { title: 'Cómo funciona', href: '#como-funciona' },
      { title: 'Preguntas frecuentes', href: '#preguntas-frecuentes' },
    ],
  },
  {
    title: 'Quiénes somos',
    href: '#quienes-somos',
    items: [
      { title: 'El equipo', href: '#el-equipo' },
      { title: 'Nuestra historia', href: '#nuestra-historia' },
      { title: 'Universidades y colaboradores', href: '#colaboradores' },
      { title: 'Únete al equipo', href: '#unete-al-equipo' },
    ],
  },
  {
    title: 'Guía del estudiante',
    href: '#guia-del-estudiante',
    items: [
      { title: 'Becas y ayudas', href: '#becas' },
      { title: 'Erasmus y movilidad', href: '#erasmus' },
      { title: 'Pisos y residencias', href: '#vivienda' },
      { title: 'Transporte y rutas', href: '#transporte' },
      { title: 'Empleo y prácticas', href: '#empleo' },
    ],
  },
  {
    title: 'Vida universitaria',
    href: '#vida-universitaria',
    items: [
      { title: 'Noticias de la universidad', href: '#universidad' },
      { title: 'Deportes y actividades', href: '#deportes' },
      { title: 'Eventos y fiestas', href: '#eventos' },
      { title: 'Charlas y conferencias', href: '#charlas' },
      { title: 'Concursos', href: '#concursos' },
      { title: 'Apuntes por carrera', href: '#apuntes' },
    ],
  },
  {
    title: 'Noticias y blog',
    href: '#actualidad',
    items: [
      { title: 'Calendario de becas del curso', href: '#calendario-becas' },
      { title: 'Erasmus: lo que nadie te cuenta', href: '#blog-erasmus' },
      { title: 'Barrios para vivir en Sevilla', href: '#barrios-sevilla' },
      { title: 'Entrevistas', href: '#entrevistas' },
      { title: 'Tu primer CV paso a paso', href: '#primer-cv' },
      { title: 'Torneos deportivos del curso', href: '#torneos' },
      { title: 'Cómo llegar a tu facultad', href: '#como-llegar' },
      { title: 'Agenda de fiestas y eventos', href: '#agenda' },
    ],
  },
  {
    title: 'Comunidad',
    href: '#comunidad',
    items: [
      { title: 'Únete a WhatsApp', href: 'https://chat.whatsapp.com/BORqs9hCbnf9ntOF1pNujZ' },
      { title: 'Canales por facultad', href: '#canales-facultad' },
      { title: 'Normas de convivencia', href: '#normas' },
      { title: 'Sugerencias', href: '#sugerencias' },
    ],
  },
  {
    title: 'Contacto',
    href: '#contacto',
    items: [
      { title: 'Formulario de contacto', href: '#formulario-contacto' },
      { title: 'Redes sociales', href: '#redes-sociales' },
      { title: 'Colabora con nosotros', href: '#colabora' },
      { title: 'Anúnciate en UniAlDía', href: '#anunciate' },
    ],
  },
];

const latestNews = articles.map((article) => ({
  category: article.category,
  title: article.title,
  image: article.image,
  time: article.time,
  color: article.chipColor,
  slug: article.slug,
}));

type Publication = {
  title: string;
  category: string;
  description: string;
  href: string;
  image?: string;
  time?: string;
};

const publications: Publication[] = [
  ...articles.map((a) => ({ title: a.title, category: a.category, description: a.description, href: `#/noticia/${a.slug}`, image: a.image, time: a.time })),
  { title: 'Lo que está pasando en Sevilla y sí te afecta', category: 'Actualidad', description: 'La actualidad de la ciudad resumida y explicada para que entiendas cómo te afecta.', href: '#inicio', image: images.students, time: '4 min' },
  { title: 'El transporte cambia: esto es lo que tienes que saber antes de subirte', category: 'Sevilla', description: 'Novedades en bus, metro y tranvía: rutas, tarifas e incidencias del transporte urbano.', href: '#/noticia/transporte-cambios-sevilla', image: images.seville, time: '3 min' },
  { title: 'La guía rápida para entender tus derechos como inquilino', category: 'Vivienda', description: 'Todo lo que necesitas saber sobre contratos, fianzas y derechos al alquilar un piso.', href: '#/noticia/derechos-inquilino-guia', time: '5 min' },
  { title: 'Becas y ayudas: requisitos y fechas clave', category: 'Guía del estudiante', description: 'Calendario de becas, ayudas y subvenciones para estudiantes universitarios en Sevilla.', href: '#/noticia/us-nuevas-ayudas-estudiantes' },
  { title: 'Erasmus y movilidad: lo que nadie te cuenta', category: 'Guía del estudiante', description: 'Trámites, destinos, consejos prácticos y errores comunes al irte de Erasmus.', href: '#erasmus' },
  { title: 'Pisos y residencias en Sevilla', category: 'Guía del estudiante', description: 'Barrios, precios y consejos para encontrar alojamiento asequible en Sevilla.', href: '#vivienda' },
  { title: 'Transporte y rutas para llegar a tu facultad', category: 'Guía del estudiante', description: 'Cómo moverte por Sevilla en bus, metro, tranvía y bici hasta el campus.', href: '#transporte' },
  { title: 'Empleo y prácticas: tu primer CV paso a paso', category: 'Guía del estudiante', description: 'Plantillas, consejos y recursos para encontrar prácticas y tu primer empleo.', href: '#empleo' },
  { title: 'Noticias de la universidad', category: 'Vida universitaria', description: 'Actualidad de la US, la UPO, la Loyola y la Pablo de Olavide.', href: '#universidad' },
  { title: 'Deportes y actividades universitarias', category: 'Vida universitaria', description: 'Torneos, equipos y actividades deportivas abiertas a estudiantes.', href: '#deportes' },
  { title: 'Eventos y fiestas', category: 'Vida universitaria', description: 'Agenda de fiestas, eventos y actividades universitarias en Sevilla.', href: '#eventos' },
  { title: 'Charlas y conferencias', category: 'Vida universitaria', description: 'Ciclos de charlas, ponencias y conferencias en las universidades sevillanas.', href: '#charlas' },
  { title: 'Concursos y premios universitarios', category: 'Vida universitaria', description: 'Competiciones académicas, de ideas y talento convocadas por las universidades.', href: '#concursos' },
  { title: 'Apuntes por carrera', category: 'Vida universitaria', description: 'Material y apuntes organizados por carrera y asignatura.', href: '#apuntes' },
  { title: 'Calendario de becas del curso', category: 'Noticias y blog', description: 'Fechas límite de las principales becas y ayudas del curso académico.', href: '#calendario-becas' },
  { title: 'Erasmus: lo que nadie te cuenta', category: 'Noticias y blog', description: 'Experiencias reales y consejos prácticos sobre la movilidad Erasmus.', href: '#blog-erasmus' },
  { title: 'Barrios para vivir en Sevilla', category: 'Noticias y blog', description: 'Comparativa de barrios: precios, ambiente y cercanía al campus.', href: '#barrios-sevilla' },
  { title: 'Entrevistas a estudiantes y profesionales', category: 'Noticias y blog', description: 'Conversaciones con gente que ya ha pasado por lo que tú estás viviendo.', href: '#entrevistas' },
  { title: 'Torneos deportivos del curso', category: 'Noticias y blog', description: 'Calendario y resultados de los torneos deportivos universitarios.', href: '#torneos' },
  { title: 'Cómo llegar a tu facultad', category: 'Noticias y blog', description: 'Rutas en transporte público y privado hasta cada campus universitario.', href: '#como-llegar' },
  { title: 'Agenda de fiestas y eventos', category: 'Noticias y blog', description: 'Lo que se mueve cada semana: fiestas, conciertos y planes para estudiantes.', href: '#agenda' },
  { title: 'Sobrevive al curso sin perderte nada', category: 'Universidad', description: 'Herramientas y consejos para organizar tu curso y no perderte lo importante.', href: '#guia' },
  { title: 'Planes que sí caben en tu presupuesto', category: 'Ocio', description: 'Ocio asequible en Sevilla: planes gratis o baratos para estudiantes.', href: '#guia' },
];

function normalizeText(text: string): string {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function searchPublications(query: string): Publication[] {
  const normalized = normalizeText(query.trim());
  if (!normalized) return [];
  const terms = normalized.split(/\s+/).filter(Boolean);
  return publications
    .map((pub) => {
      const haystack = normalizeText(`${pub.title} ${pub.category} ${pub.description}`);
      const score = terms.reduce((acc, term) => acc + (haystack.includes(term) ? 1 : 0), 0);
      return { pub, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.pub);
}

function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className={`eyebrow mb-2 ${light ? 'text-coral-soft' : 'text-coral'}`}>{eyebrow}</p>
        <h2 className={`font-display text-3xl font-bold leading-none tracking-[-0.04em] sm:text-4xl ${light ? 'text-cream' : 'text-navy'}`}>{title}</h2>
      </div>
      <a href="#actualidad" className={`hidden items-center gap-1 text-sm font-bold sm:flex ${light ? 'text-cream hover:text-coral-soft' : 'text-navy hover:text-coral'} transition-colors`}>
        Ver todo <ArrowUpRight size={17} />
      </a>
    </div>
  );
}

function MainApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(siteSections[0].title);
  const [todayLabel, setTodayLabel] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      setTodayLabel(
        new Intl.DateTimeFormat('es-ES', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
          .format(now)
          .replace(/^\w/, (c) => c.toUpperCase()),
      );
    };
    updateDate();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const msUntilMidnight = midnight.getTime() - Date.now();
    const timer = window.setTimeout(updateDate, msUntilMidnight + 1000);
    return () => window.clearTimeout(timer);
  }, []);

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-cream text-navy">
      <div className="topline"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] sm:px-8"><span>{todayLabel}</span><span className="hidden text-cream/60 sm:block">La actualidad que te afecta</span></div></div>

      <header className="sticky top-0 z-30 border-b border-navy/10 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo />
          <div className="flex items-center gap-2">
            <button aria-label="Buscar" className="icon-button hidden sm:inline-flex" onClick={() => { setSearchOpen(true); setTimeout(() => document.getElementById('site-search-input')?.focus(), 50); }}><Search size={19} /></button>
            <a href="#newsletter" className="pill-button hidden sm:inline-flex">Únete a la comunidad <ArrowUpRight size={16} /></a>
            <button aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} className="icon-button" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          </div>
        </div>
        {menuOpen && <nav className="mobile-menu mx-auto max-w-7xl" aria-label="Índice del sitio">
          <a href="#inicio" onClick={() => setMenuOpen(false)} className="mobile-menu-home">Inicio <ArrowUpRight size={17} /></a>
          <div className="mobile-menu-sections">
            {siteSections.map((section) => {
              const isOpen = openSection === section.title;
              return <div key={section.title} className="mobile-menu-section">
                <button type="button" className="mobile-menu-parent" onClick={() => setOpenSection(isOpen ? null : section.title)} aria-expanded={isOpen}>
                  <span>{section.title}</span>
                  <ChevronDown size={18} className={isOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
                </button>
                {isOpen && <div className="mobile-menu-children">
                  {section.items.map((item) => <a key={item.title} href={item.href} onClick={() => setMenuOpen(false)}>{item.title}<ChevronRight size={16} /></a>)}
                </div>}
              </div>;
            })}
          </div>
        </nav>}
      </header>

      <div className="instagram-banner">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-5 py-4 sm:px-8">
          <a href="https://www.instagram.com/unialdia?psln=cXl5ZDZxenRsb2l3" target="_blank" rel="noopener noreferrer" aria-label="Acceder al Instagram de UniAlDía" className="instagram-icon-link">
            <Instagram size={26} strokeWidth={2.5} />
          </a>
          <p className="instagram-message">Pincha en el icono para acceder a nuestro instagram y seguirnos, allí descubrirás mucho más contenido</p>
        </div>
      </div>

      {searchOpen && <div className="fixed inset-0 z-50 bg-navy/60 backdrop-blur-sm" onClick={() => setSearchOpen(false)}><div className="mx-auto mt-20 max-w-2xl px-5" onClick={(event) => event.stopPropagation()}><div className="overflow-hidden rounded-2xl bg-white shadow-2xl"><div className="flex items-center gap-3 border-b border-navy/10 px-5 py-4"><Search size={20} className="text-coral" /><input id="site-search-input" type="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Busca publicaciones: becas, transporte, vivienda, Erasmus…" className="min-w-0 flex-1 bg-transparent text-base text-navy outline-none placeholder:text-navy/40" autoFocus /><button onClick={() => { setSearchOpen(false); setSearchQuery(''); }} aria-label="Cerrar buscador" className="grid h-9 w-9 place-items-center rounded-full text-navy/60 hover:bg-cream hover:text-navy"><X size={20} /></button></div><div className="max-h-[60vh] overflow-y-auto p-2">{searchQuery.trim() === '' ? <p className="px-3 py-6 text-center text-sm text-navy/50">Escribe una palabra o frase para encontrar publicaciones relacionadas.</p> : searchPublications(searchQuery).length === 0 ? <p className="px-3 py-6 text-center text-sm text-navy/50">No hay resultados para «{searchQuery}». Prueba con otra palabra.</p> : <ul className="grid gap-1">{searchPublications(searchQuery).map((pub) => <li key={pub.title}><a href={pub.href} onClick={() => { setSearchOpen(false); setSearchQuery(''); }} className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-cream"><div className="min-w-0 flex-1"><div className="mb-1 flex items-center gap-2"><span className="rounded-md bg-navy px-2 py-0.5 text-[10px] font-bold uppercase text-cream">{pub.category}</span>{pub.time && <span className="text-[11px] font-bold uppercase tracking-widest text-navy/40">{pub.time}</span>}</div><p className="truncate font-bold text-navy">{pub.title}</p><p className="mt-0.5 line-clamp-1 text-sm text-navy/55">{pub.description}</p></div><ChevronRight size={18} className="shrink-0 text-coral" /></a></li>)}</ul>}</div></div></div></div>}

      <main id="inicio">
        <section className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8 sm:pt-12 lg:pb-20 lg:pt-16">
          <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-coral"><span className="live-dot" /> En Sevilla, ahora</div>
          <div className="grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
            <article className="hero-card group">
              <img src={images.students} alt="Rectorado de la Universidad de Sevilla" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="hero-overlay absolute inset-0" />
              <div className="relative flex h-full min-h-[480px] flex-col justify-end p-6 sm:min-h-[560px] sm:p-10 lg:min-h-[570px]">
                <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-cream"><span className="rounded-full bg-coral px-3 py-1.5">Actualidad</span><span>Lectura de 4 min</span></div>
                <h1 className="max-w-3xl font-display text-[2.7rem] font-bold leading-[0.95] tracking-[-0.055em] text-cream sm:text-6xl lg:text-[4.5rem]">Lo que está pasando en Sevilla y sí te afecta</h1>
                <div className="mt-7 flex items-center justify-between border-t border-cream/30 pt-4 text-sm font-medium text-cream/80"><span>La actualidad, en claro.</span><ArrowUpRight size={22} className="text-cream" /></div>
              </div>
            </article>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <a href="#/noticia/transporte-cambios-sevilla" className="side-story group bg-navy"><div className="relative h-44 overflow-hidden sm:h-full lg:h-44"><img src={images.seville} alt="Autobús urbano TUSSAM en una calle de Sevilla" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-cream px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-navy">Sevilla</span></div><div className="flex flex-col justify-between p-5 lg:p-6"><h2 className="font-display text-2xl font-bold leading-[1.02] tracking-[-0.04em] text-cream">El transporte cambia: esto es lo que tienes que saber antes de subirte</h2><div className="mt-5 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-cream/60"><span>3 min de lectura</span><ArrowUpRight size={19} className="text-coral" /></div></div></a>
              <a href="#/noticia/derechos-inquilino-guia" className="side-story group border border-navy/10 bg-coral"><div className="flex flex-col justify-between p-5 lg:p-6"><div><span className="eyebrow text-navy/70">¿Cómo te afecta?</span><h2 className="mt-3 font-display text-2xl font-bold leading-[1.02] tracking-[-0.04em] text-navy">La guía rápida para entender tus derechos como inquilino</h2></div><div className="mt-8 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-navy/70"><span>Guía útil · 5 min</span><span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-cream"><ArrowUpRight size={18} /></span></div></div></a>
            </div>
          </div>
        </section>

        <section id="actualidad" className="border-y border-navy/10 bg-white px-5 py-12 sm:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Lo último" title="En tu radar" /><div className="grid gap-6 md:grid-cols-3">{latestNews.map((news) => <article key={news.title} className="news-card group"><div className="relative mb-4 aspect-[1.45] overflow-hidden rounded-2xl"><a href={`#/noticia/${news.slug}`}><img src={news.image} alt={news.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></a><span className={`category-chip ${news.color}`}>{news.category}</span><button aria-label="Guardar noticia" onClick={() => setSaved(!saved)} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-cream/95 text-navy transition hover:bg-coral hover:text-cream"> <Bookmark size={16} fill={saved ? 'currentColor' : 'none'} /></button></div><div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-navy/45"><Clock3 size={14} /> {news.time}</div><a href={`#/noticia/${news.slug}`}><h3 className="font-display text-[1.45rem] font-bold leading-[1.04] tracking-[-0.035em] text-navy transition-colors group-hover:text-coral">{news.title}</h3></a><a href={`#/noticia/${news.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-coral">Leer la noticia <ChevronRight size={16} /></a></article>)}</div></div>
        </section>

        <section id="como-te-afecta" className="bg-navy px-5 py-14 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Nuestra forma de contarlo" title="¿Cómo te afecta?" light /><div className="grid items-stretch gap-5 lg:grid-cols-[0.8fr_1.2fr]"><div className="flex flex-col justify-between rounded-2xl bg-coral p-7 sm:p-9"><div><span className="text-5xl font-black tracking-[-0.08em] text-navy">01—</span><h3 className="mt-14 max-w-sm font-display text-4xl font-bold leading-[0.96] tracking-[-0.05em] text-navy sm:text-5xl">No te contamos solo qué pasa.</h3></div><p className="mt-10 max-w-sm text-base font-medium leading-relaxed text-navy/75">Te explicamos por qué importa, cómo cambia tu día a día y qué puedes hacer tú.</p></div><div className="grid gap-4 sm:grid-cols-3"><div className="impact-step"><span>01</span><h3>Qué pasa</h3><p>La noticia resumida y sin rodeos, para que sepas qué está ocurriendo.</p></div><div className="impact-step active"><span>02</span><h3>Por qué importa</h3><p>El contexto que normalmente se queda fuera de los titulares.</p></div><div className="impact-step"><span>03</span><h3>Qué puedes hacer</h3><p>Ideas y recursos concretos para tomar decisiones informadas.</p></div></div></div></div>
        </section>

        <section id="universidad" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20"><SectionHeading eyebrow="Para tu vida real" title="Más que noticias" /><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"><a href="#guia" className="feature-tile coral-tile"><GraduationCap size={29} /><div><p className="eyebrow text-navy/60">Universidad</p><h3>Sobrevive al curso sin perderte nada</h3></div><ArrowUpRight size={22} /></a><a href="#guia" className="feature-tile blue-tile"><CalendarDays size={29} /><div><p className="eyebrow text-cream/60">Guías</p><h3>Calendario de becas y ayudas</h3></div><ArrowUpRight size={22} /></a><a href="#guia" className="feature-tile image-tile"><img src={images.friends} alt="Patio histórico de Sevilla" /><div className="relative"><p className="eyebrow text-cream/70">Ocio</p><h3>Planes que sí caben en tu presupuesto</h3></div><ArrowUpRight size={22} className="relative" /></a><a href="#guia" className="feature-tile cream-tile"><Search size={29} /><div><p className="eyebrow text-coral">Explora</p><h3>Busca una respuesta rápida</h3></div><ArrowUpRight size={22} /></a></div></section>

        <section id="newsletter" className="border-t border-navy/10 bg-[#f8e5d3] px-5 py-14 sm:px-8 lg:py-20"><div className="mx-auto grid max-w-7xl items-end gap-8 lg:grid-cols-[1fr_0.8fr]"><div><p className="eyebrow mb-3 text-coral">El briefing de UniAlDía</p><h2 className="max-w-xl font-display text-4xl font-bold leading-[0.95] tracking-[-0.05em] text-navy sm:text-6xl">Lo importante, directo a tu bandeja.</h2></div><div><p className="mb-5 max-w-md text-base leading-relaxed text-navy/70">Una dosis de actualidad útil para empezar la semana con contexto. Sin spam. Solo lo que te interesa.</p>{subscribed ? <div className="flex items-center gap-3 rounded-xl bg-navy px-5 py-4 font-bold text-cream"><span className="grid h-7 w-7 place-items-center rounded-full bg-coral">✓</span> Ya estás dentro. Nos vemos el lunes.</div> : <form onSubmit={handleSubscribe} className="flex flex-col gap-2 sm:flex-row"><label htmlFor="email" className="sr-only">Tu email</label><input id="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="tu@email.com" className="min-h-12 flex-1 rounded-xl border border-navy/15 bg-cream px-4 text-sm text-navy outline-none placeholder:text-navy/40 focus:border-coral" /><button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-coral px-5 text-sm font-extrabold text-navy transition hover:bg-navy hover:text-cream">Suscribirme <Send size={16} /></button></form>}</div></div></section>
      </main>

      <footer className="bg-navy px-5 py-10 text-cream sm:px-8"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 border-b border-cream/15 pb-9 md:flex-row md:items-end"><div><Logo light /><p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">La actualidad que te afecta. Un medio hecho en Sevilla para entender mejor lo que pasa.</p></div><div className="flex gap-3"><a href="https://www.instagram.com/unialdia" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link"><Instagram size={18} /></a><a href="#tiktok" aria-label="TikTok" className="social-link"><Music2 size={18} /></a><a href="#youtube" aria-label="YouTube" className="social-link"><Youtube size={18} /></a><a href="https://chat.whatsapp.com/BORqs9hCbnf9ntOF1pNujZ" target="_blank" rel="noopener noreferrer" aria-label="Comunidad de WhatsApp" className="social-link"><Send size={18} /></a></div></div><div className="flex flex-col justify-between gap-3 pt-6 text-xs font-medium text-cream/45 sm:flex-row"><span>© 2026 UniAlDía</span><span>Hecho para la generación que quiere enterarse de verdad.</span></div></div></footer>

      <ChatWidget />
    </div>
  );
}

function useArticleSlug(): string | null {
  const readSlug = () => {
    const match = window.location.hash.match(/^#\/noticia\/(.+)$/);
    return match ? match[1] : null;
  };
  const [slug, setSlug] = useState<string | null>(readSlug);
  useEffect(() => {
    const onHashChange = () => setSlug(readSlug());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return slug;
}

function ArticleRoute() {
  const slug = useArticleSlug();
  const navigate = (next: string | null) => {
    window.location.hash = next ? `#/noticia/${next}` : '#inicio';
  };
  return slug ? <ArticlePage slug={slug} onNavigate={navigate} /> : <MainApp />;
}

function App() {
  return window.location.pathname.startsWith('/admin') ? <AdminPage /> : <ArticleRoute />;
}

export default App;
