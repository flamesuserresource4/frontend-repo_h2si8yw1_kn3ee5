import { Mail, Users, Trophy, Calendar, Image as ImageIcon } from 'lucide-react';

export default function Sections({ sectionsRef }) {
  const achievements = [
    'Winners of Inter-College Hackathon 2024',
    'Hosted 15+ workshops on AI, Web, and Cloud',
    'Open-source contributions to 10+ projects',
  ];

  const leads = [
    { name: 'Aarav Sharma', role: 'President' },
    { name: 'Isha Kapoor', role: 'Vice President' },
    { name: 'Rahul Verma', role: 'Technical Lead' },
    { name: 'Neha Singh', role: 'Events Lead' },
  ];

  const members = [
    { name: 'Priya', role: 'Developer' },
    { name: 'Karan', role: 'Designer' },
    { name: 'Aditi', role: 'Content' },
    { name: 'Rohit', role: 'Logistics' },
  ];

  const upcoming = [
    { title: 'Web Dev Bootcamp', date: '15 Nov 2025', time: '10:00 AM', desc: 'Hands-on intro to modern web tools.' },
    { title: 'Coding Challenge #7', date: '28 Nov 2025', time: '6:00 PM', desc: '2-hour algorithmic sprint with prizes.' },
  ];

  const past = [
    { title: 'AI for Everyone', when: 'Sep 2025', recap: 'Packed workshop demystifying ML basics.' },
    { title: 'Cloud 101', when: 'Aug 2025', recap: 'Deployed apps to the cloud in under an hour.' },
  ];

  const gallery = new Array(8).fill(0).map((_, i) => ({ id: i + 1 }));

  const handleContact = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    alert(`Thanks, ${name}! Your message has been received.`);
    form.reset();
  };

  return (
    <main>
      {/* About */}
      <section ref={sectionsRef?.about} id="about" className="scroll-mt-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">About SPECTRA</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              SPECTRA is the CSE Department club driven by student curiosity and mentorship. We focus on
              learning-by-building through projects, research, and community events that prepare members for
              real-world challenges.
            </p>
            <ul className="mt-6 space-y-3">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-3 text-slate-300">
                  <Trophy className="h-5 w-5 text-amber-400 mt-0.5" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <Users className="h-5 w-5" /> What we do
            </div>
            <p className="mt-2 text-sm text-slate-400">
              • Weekly meets and workshops
              <br />• Mentored project tracks
              <br />• Peer learning and portfolio building
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={sectionsRef?.team} id="team" className="scroll-mt-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Team</h2>
        <p className="mt-2 text-slate-400">Meet the leads and contributors who keep the club thriving.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {leads.map((p) => (
            <ProfileCard key={p.name} name={p.name} role={p.role} />
          ))}
        </div>

        <h3 className="mt-10 text-lg font-semibold text-slate-200">Members</h3>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {members.map((m) => (
            <div key={m.name} className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
              <div className="h-10 w-10 rounded-full bg-slate-800/80 flex items-center justify-center">
                <Users className="h-5 w-5 text-slate-300" />
              </div>
              <div className="mt-2 text-sm font-medium text-slate-200">{m.name}</div>
              <div className="text-xs text-slate-400">{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section ref={sectionsRef?.events} id="events" className="scroll-mt-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Events</h2>

        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <Calendar className="h-5 w-5" /> Upcoming
            </div>
            <ul className="mt-4 space-y-4">
              {upcoming.map((ev) => (
                <li key={ev.title} className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                  <div className="font-semibold text-white">{ev.title}</div>
                  <div className="text-xs text-slate-400">{ev.date} • {ev.time}</div>
                  <p className="mt-1 text-sm text-slate-300">{ev.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <Trophy className="h-5 w-5" /> Past Highlights
            </div>
            <ul className="mt-4 space-y-4">
              {past.map((ev) => (
                <li key={ev.title} className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                  <div className="font-semibold text-white">{ev.title}</div>
                  <div className="text-xs text-slate-400">{ev.when}</div>
                  <p className="mt-1 text-sm text-slate-300">{ev.recap}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section ref={sectionsRef?.gallery} id="gallery" className="scroll-mt-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Gallery</h2>
        <p className="mt-2 text-slate-400 text-sm">Compressed placeholders to save bandwidth.</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {gallery.map((g) => (
            <div key={g.id} className="aspect-video rounded-lg overflow-hidden border border-slate-800 bg-slate-900/60 flex items-center justify-center">
              <ImageIcon className="h-6 w-6 text-slate-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section ref={sectionsRef?.contact} id="contact" className="scroll-mt-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Contact Us</h2>
        <div className="mt-6 grid lg:grid-cols-3 gap-8">
          <form onSubmit={handleContact} className="lg:col-span-2 rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300">Name</label>
                <input name="name" required type="text" className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Email</label>
                <input name="email" required type="email" className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300">Message</label>
              <textarea name="message" required rows="4" className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-500 px-4 py-2 text-white">
              <Mail className="h-4 w-4" /> Send Message
            </button>
          </form>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="text-sm text-slate-300">Connect with us</div>
            <ul className="mt-3 space-y-2 text-slate-300 text-sm">
              <li>
                <a className="hover:text-white" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
              </li>
              <li>
                <a className="hover:text-white" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              </li>
              <li>
                <a className="hover:text-white" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProfileCard({ name, role }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center">
      <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-blue-500/40 to-sky-400/30 border border-slate-700 flex items-center justify-center">
        <Users className="h-7 w-7 text-slate-200" />
      </div>
      <div className="mt-2 font-medium text-slate-100">{name}</div>
      <div className="text-xs text-slate-400">{role}</div>
    </div>
  );
}
