import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3, Share2 } from 'lucide-react';
import { articles, getArticle } from '@/articles';
import Logo from '@/components/Logo';

function chipClass(color: string): string {
  if (color === 'coral') return 'bg-coral text-navy';
  if (color === 'yellow') return 'bg-[#f5c56b] text-navy';
  return 'bg-navy text-cream';
}

function ArticlePage({ slug, onNavigate }: { slug: string; onNavigate: (slug: string | null) => void }) {
  const article = getArticle(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-cream px-5 text-center text-navy">
        <Logo />
        <p className="text-lg font-bold">No hemos encontrado esta noticia.</p>
        <button onClick={() => onNavigate(null)} className="pill-button">Volver al inicio <ArrowLeft size={16} /></button>
      </div>
    );
  }

  const others = articles.filter((a) => a.slug !== slug).slice(0, 3);

  const handleShare = async () => {
    const url = `${window.location.origin}${window.location.pathname}#/noticia/${article.slug}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: article.title, url });
      } else {
        await navigator.clipboard.writeText(url);
      }
    } catch {
      // el usuario canceló o el navegador bloqueó el portapapeles
    }
  };

  return (
    <article className="min-h-screen bg-cream text-navy">
      <header className="sticky top-0 z-30 border-b border-navy/10 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-4xl items-center justify-between px-5 sm:px-8">
          <button onClick={() => onNavigate(null)} className="inline-flex items-center gap-2 text-sm font-extrabold text-navy transition-colors hover:text-coral">
            <ArrowLeft size={18} /> Volver
          </button>
          <Logo />
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 pt-10 sm:px-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.14em]">
          <span className={`rounded-md px-2.5 py-1 ${chipClass(article.chipColor)}`}>{article.category}</span>
          <span className="text-navy/45">{article.time}</span>
        </div>

        <h1 className="mt-5 font-display text-4xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-5xl">{article.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-navy/70">{article.subtitle}</p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-navy/10 py-4 text-xs font-bold uppercase tracking-widest text-navy/50">
          <span>{article.author}</span>
          <span className="inline-flex items-center gap-1.5"><CalendarDays size={14} /> {article.date}</span>
          <span className="inline-flex items-center gap-1.5"><Clock3 size={14} /> {article.readingMinutes} min de lectura</span>
          <button onClick={handleShare} className="ml-auto inline-flex items-center gap-1.5 text-coral transition-colors hover:text-navy">
            <Share2 size={14} /> Compartir
          </button>
        </div>
      </div>

      <figure className="mx-auto mt-8 max-w-4xl px-5 sm:px-8">
        <img src={article.image} alt={article.imageAlt} className="aspect-[16/8] w-full rounded-2xl object-cover" />
      </figure>

      <div className="mx-auto grid max-w-4xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_300px]">
        <div>
          {article.body.map((section, index) => (
            <section key={index} className="mb-8">
              {section.heading && <h2 className="mb-3 font-display text-2xl font-bold tracking-[-0.03em] text-navy">{section.heading}</h2>}
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4 text-[1.05rem] leading-[1.65] text-navy/85">{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <aside>
          <div className="sticky top-[100px] rounded-2xl bg-navy p-6 text-cream">
            <p className="eyebrow mb-4 text-coral-soft">Lo esencial</p>
            <ul className="grid gap-4">
              {article.keyPoints.map((point) => (
                <li key={point.title}>
                  <p className="text-sm font-extrabold text-cream">{point.title}</p>
                  <p className="mt-1 text-[0.83rem] leading-relaxed text-cream/65">{point.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <section className="border-t border-navy/10 bg-white px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-7 font-display text-2xl font-bold tracking-[-0.03em] text-navy">Sigue leyendo</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {others.map((other) => (
              <button key={other.slug} onClick={() => onNavigate(other.slug)} className="group text-left">
                <div className="relative mb-3 aspect-[1.5] overflow-hidden rounded-xl">
                  <img src={other.image} alt={other.imageAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className={`absolute bottom-2.5 left-2.5 rounded px-2 py-1 text-[10px] font-extrabold uppercase tracking-widest ${chipClass(other.chipColor)}`}>{other.category}</span>
                </div>
                <p className="font-display text-[1.05rem] font-bold leading-[1.1] tracking-[-0.02em] text-navy transition-colors group-hover:text-coral">{other.title}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-extrabold text-coral">Leer noticia <ArrowUpRight size={14} /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-navy px-5 py-8 text-center text-xs font-medium text-cream/45 sm:px-8">
        <Logo light />
      </footer>
    </article>
  );
}

export default ArticlePage;
