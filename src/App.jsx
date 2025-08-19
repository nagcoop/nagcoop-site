import React from 'react';

/* ===================== Header (responsivo com menu mobile) ===================== */
function Header({ onNew }) {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0F17]/90 backdrop-blur pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 py-3">
        {/* Marca / Canal */}
        <a
          href="https://www.youtube.com/@Nagcoop"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 min-w-0"
          title="Ir para o canal no YouTube"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-12 shrink-0 drop-shadow-[0_6px_18px_rgba(255,0,0,.35)]">
            <rect x="1.5" y="4.5" width="21" height="15" rx="3.5" fill="#FF0000" />
            <path d="M10 9v6l5-3-5-3z" fill="#fff" />
          </svg>
          <div className="min-w-0">
            <span className="block text-2xl sm:text-3xl font-extrabold leading-none bg-gradient-to-r from-red-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(255,64,64,.35)] truncate">
              Nagcoop
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 group-hover:text-white/90 transition-colors">
              Jogos & Notícias
            </span>
          </div>
        </a>

        {/* Ações desktop */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://www.youtube.com/@Nagcoop?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-900/30 hover:brightness-110"
            title="Inscreva-se no canal"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-6">
              <rect x="1.5" y="4.5" width="21" height="15" rx="3.5" fill="#fff" />
              <path d="M10 9v6l5-3-5-3z" fill="#FF0000" />
            </svg>
            <span>Inscreva-se</span>
          </a>

          <button
            onClick={onNew}
            className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 shadow-sm hover:bg-cyan-500/20"
          >
            + Nova notícia
          </button>
        </div>

        {/* Botão hambúrguer (mobile) */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-xl border border-white/10 p-2 text-white/90 active:scale-[0.98]"
          aria-label="Abrir menu"
        >
          <div className="h-0.5 w-5 bg-white mb-1" />
          <div className="h-0.5 w-5 bg-white mb-1" />
          <div className="h-0.5 w-5 bg-white" />
        </button>
      </div>

      {/* Menu mobile (abre/fecha) */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0A0F17] px-4 sm:px-6 py-3 space-y-2">
          <a
            href="https://www.youtube.com/@Nagcoop?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-900/30"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-6">
              <rect x="1.5" y="4.5" width="21" height="15" rx="3.5" fill="#fff" />
              <path d="M10 9v6l5-3-5-3z" fill="#FF0000" />
            </svg>
            Inscreva-se
          </a>
          <button
            onClick={() => { onNew(); setOpen(false); }}
            className="w-full rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 shadow-sm hover:bg-cyan-500/20"
          >
            + Nova notícia
          </button>
        </div>
      )}
    </header>
  );
}

/* ===================== Hero ===================== */
function Hero() {
  return (
    <section className="relative border-b border-white/10 bg-[#0B0E14]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 py-8 md:grid-cols-2 md:py-14">
        <div className="flex flex-col justify-center">
          <h2 className="text-[clamp(24px,6vw,44px)] font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(34,211,238,.25)]">
            Destaques do canal Nagcoop
          </h2>
          <p className="mt-3 text-white/80">
            Gameplays em co-op, gols insanos e notícias rápidas do universo gamer.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <a
              href="#ultimas"
              className="w-full sm:w-auto rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 text-center"
            >
              Ver últimas notícias
            </a>
            <a
              href="#videos"
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 hover:brightness-110 text-center"
            >
              Assistir vídeos
            </a>
          </div>
        </div>

        <div className="grid place-items-center">
          <div className="aspect-video w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/kqMuPEp0_ho"
              title="Nagcoop Último Vídeo"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== Cartão de Notícia ===================== */
function NewsCard({ item, onDelete }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-lg transition hover:border-cyan-500/30 hover:shadow-cyan-500/10">
      {item.image && (
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="line-clamp-2 text-base sm:text-lg font-semibold text-white">{item.title}</h3>
          <button
            onClick={() => onDelete(item.id)}
            className="rounded-lg border border-white/10 px-2 py-1 text-xs text-white/60 hover:border-red-500/40 hover:text-red-300"
            title="Remover"
          >
            Remover
          </button>
        </div>
        <p className="mt-2 line-clamp-3 text-sm text-white/70">{item.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags?.map((t) => (
            <span key={t} className="rounded-xl border border-white/10 px-2 py-0.5 text-xs text-white/70">
              #{t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-white/60">
          <time>{new Date(item.date).toLocaleDateString()}</time>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-cyan-300 hover:text-white"
            >
              Ler mais →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ===================== Barra para adicionar vídeos ===================== */
function AddVideoBar({ onAdd }) {
  const [url, setUrl] = React.useState("");
  const [title, setTitle] = React.useState("");

  function ytId(u) {
    try {
      const x = new URL(u);
      if (x.hostname.includes("youtu.be")) return x.pathname.replace("/", "");
      return x.searchParams.get("v") || "";
    } catch {
      return u; // talvez só o ID
    }
  }
  function add() {
    const id = ytId(url.trim());
    if (!id) return;
    onAdd({
      id: crypto.randomUUID(),
      youtubeId: id,
      title: title || "Vídeo do canal",
      date: new Date().toISOString(),
    });
    setUrl("");
    setTitle("");
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-3">
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Cole a URL/ID do YouTube"
        className="w-full md:flex-1 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/50 focus:border-cyan-500/50 outline-none"
      />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título (opcional)"
        className="w-full md:flex-1 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/50 focus:border-cyan-500/50 outline-none"
      />
      <button
        onClick={add}
        className="w-full md:w-auto rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 hover:brightness-110"
      >
        + Adicionar vídeo
      </button>
    </div>
  );
}

/* ===================== App ===================== */
export default function App() {
  const [createOpen, setCreateOpen] = React.useState(false);
  const [news, setNews] = React.useState(() => [
    {
      id: crypto.randomUUID(),
      title: "Gol épico no co-op!",
      summary: "Jogada insana no Double Dragon Neon — veja a virada!",
      image:
        "https://images.unsplash.com/photo-1606117331690-8e4c39d5d4dd?q=80&w=1200&auto=format&fit=crop",
      tags: ["co-op", "retro", "highlights"],
      url: "https://www.youtube.com/watch?v=kqMuPEp0_ho",
      date: new Date().toISOString(),
    },
  ]);
  const [videos, setVideos] = React.useState(() => [
    { id: crypto.randomUUID(), title: "Double Dragon Neon – Co-op [4K] (Part 1)", youtubeId: "kqMuPEp0_ho", date: new Date().toISOString() },
  ]);
  const [query, setQuery] = React.useState("");

  const filteredNews = React.useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return news;
    return news.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q) ||
        (n.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  }, [news, query]);

  function createNews(item) { setNews((prev) => [item, ...prev]); }
  function deleteNews(id) { setNews((prev) => prev.filter((n) => n.id !== id)); }
  function addVideo(v) { setVideos((prev) => [v, ...prev]); }
  function deleteVideo(id) { setVideos((prev) => prev.filter((x) => x.id !== id)); }

  return (
    <div className="min-h-screen bg-[#070B12] text-slate-100">
      <Header onNew={() => setCreateOpen(true)} />
      <Hero />

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Busca + título */}
        <section className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 id="ultimas" className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
            Últimas notícias
          </h2>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por título, tag ou resumo"
            className="w-full sm:w-auto sm:max-w-md rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/50 focus:border-cyan-500/50 outline-none"
          />
        </section>

        {/* Grid de notícias */}
        <section className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredNews.map((item) => (
            <NewsCard key={item.id} item={item} onDelete={deleteNews} />
          ))}
          {filteredNews.length === 0 && (
            <p className="col-span-full rounded-2xl border border-white/10 p-6 text-center text-white/70">
              Nenhuma notícia encontrada. Publique a primeira! ; )
            </p>
          )}
        </section>

        {/* Vídeos */}
        <section className="mt-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 id="videos" className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              Vídeos do canal
            </h2>
          </div>
          <div className="mt-3">
            <AddVideoBar onAdd={addVideo} />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <article key={v.id} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-lg">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center justify-between p-4">
                  <h3 className="line-clamp-2 pr-3 text-base font-semibold">{v.title}</h3>
                  <button
                    onClick={() => deleteVideo(v.id)}
                    className="rounded-lg border border-white/10 px-2 py-1 text-xs text-white/60 hover:border-red-500/40 hover:text-red-300"
                    title="Remover"
                  >
                    Remover
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Rodapé */}
        <footer className="mt-14 sm:mt-16 grid gap-2 border-t border-white/10 py-8 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Nagcoop – Todos os direitos reservados.</p>
          <p className="text-xs text-white/50">Feito com React + Tailwind. Hospede no Vercel/Netlify.</p>
        </footer>
      </main>

      {/* Modal Nova Notícia */}
      {createOpen && (
        <NewsModal onClose={() => setCreateOpen(false)} onCreate={createNews} />
      )}
    </div>
  );
}

/* ===================== Modal ===================== */
function NewsModal({ onClose, onCreate }) {
  const [title, setTitle] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [image, setImage] = React.useState("");
  const [tags, setTags] = React.useState("");
  const [url, setUrl] = React.useState("");

  function submit(e) {
    e.preventDefault();
    onCreate({
      id: crypto.randomUUID(),
      title,
      summary,
      image,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      url,
      date: new Date().toISOString(),
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
      <form onSubmit={submit} className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#0B0E14] p-5 shadow-2xl">
        <h3 className="text-lg font-semibold">Nova notícia</h3>
        <p className="text-sm text-white/60">Preencha e publique instantaneamente.</p>

        <div className="mt-4 grid gap-3">
          <input
            required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título"
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm placeholder-white/50 focus:border-cyan-500/50 outline-none"
          />
          <textarea
            required value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Resumo / chamada" rows={3}
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm placeholder-white/50 focus:border-cyan-500/50 outline-none"
          />
          <input
            value={image} onChange={(e) => setImage(e.target.value)} placeholder="URL da imagem (opcional)"
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm placeholder-white/50 focus:border-cyan-500/50 outline-none"
          />
          <input
            value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags separadas por vírgula"
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm placeholder-white/50 focus:border-cyan-500/50 outline-none"
          />
          <input
            value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Link para saber mais"
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm placeholder-white/50 focus:border-cyan-500/50 outline-none"
          />
        </div>

        <div className="mt-5 flex flex-col sm:flex-row justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 hover:brightness-110"
          >
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
}
