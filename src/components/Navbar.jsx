import { useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ sectionsRef }) {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'team', label: 'Team' },
      { id: 'events', label: 'Events' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'contact', label: 'Contact Us' },
    ],
    []
  );

  const handleScroll = (id) => {
    const el = sectionsRef?.[id]?.current;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-slate-800">
      <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-sky-400 to-blue-600" aria-hidden />
          <span className="font-semibold tracking-tight text-slate-100">SPECTRA CSE Club</span>
        </div>

        <button className="lg:hidden p-2 rounded-md border border-slate-700" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <ul className="hidden lg:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => handleScroll(l.id)}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleScroll('contact')}
              className="ml-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 transition-colors"
            >
              Join Now
            </button>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-slate-800">
          <ul className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => handleScroll(l.id)}
                  className="block w-full text-left px-2 py-2 rounded hover:bg-slate-800/60 text-slate-200"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleScroll('contact')}
                className="w-full rounded-md bg-blue-600 hover:bg-blue-500 text-white px-3 py-2"
              >
                Join Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
