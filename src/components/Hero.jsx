import { useEffect, useMemo, useState } from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Hero({ onCTAClick }) {
  // Set the next upcoming event date/time here (local time).
  // Choose a near-future date to demonstrate the countdown.
  const targetDate = useMemo(() => new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15, 10, 0, 0), []);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(t);
  }, [targetDate]);

  const items = [
    { label: 'Vision', text: 'Empower students to explore, build, and innovate across the spectrum of Computer Science.' },
    { label: 'Mission', text: 'Create hands-on experiences through projects, workshops, and competitions that grow real-world skills.' },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(60%_40%_at_50%_0%,#38bdf8_0%,transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-sky-300 mb-4">
              <Star className="h-4 w-4" />
              <span className="text-xs font-medium tracking-wide">SPECTRA • CSE Department Club</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Learn. Build. Shine.
            </h1>
            <p className="mt-4 text-slate-300 max-w-prose">
              We are a student-driven community passionate about technology, research, and impactful engineering.
              Join us to collaborate on projects, compete, and grow together.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button onClick={onCTAClick} className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-500 px-4 py-2 text-white transition-colors">
                <Rocket className="h-4 w-4" /> Become a Member
              </button>
              <a href="#events" onClick={(e) => { e.preventDefault(); document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sky-300 hover:text-sky-200">
                See Events →
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-xl">
              {items.map((it) => (
                <div key={it.label} className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
                  <div className="text-sm font-semibold text-slate-200">{it.label}</div>
                  <p className="mt-1 text-sm text-slate-400 leading-relaxed">{it.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Countdown */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-slate-300 text-sm">Next Event Starts In</p>
            <div className="mt-3 flex items-center gap-4 text-center">
              <TimeBox label="Days" value={timeLeft.days} />
              <Sep />
              <TimeBox label="Hours" value={timeLeft.hours} />
              <Sep />
              <TimeBox label="Minutes" value={timeLeft.minutes} />
              <Sep />
              <TimeBox label="Seconds" value={timeLeft.seconds} />
            </div>
            <p className="mt-4 text-xs text-slate-500">Tentative: {targetDate.toDateString()} at {targetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="flex-1 rounded-md bg-slate-950 border border-slate-800 p-4">
      <div className="text-3xl font-bold text-white tabular-nums">{String(value).padStart(2, '0')}</div>
      <div className="mt-1 text-xs text-slate-400">{label}</div>
    </div>
  );
}

function Sep() {
  return <span className="text-slate-600">:</span>;
}

function getTimeLeft(target) {
  const now = new Date();
  const diff = Math.max(0, target.getTime() - now.getTime());
  const s = Math.floor(diff / 1000);
  const days = Math.floor(s / (3600 * 24));
  const hours = Math.floor((s % (3600 * 24)) / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  return { days, hours, minutes, seconds };
}
