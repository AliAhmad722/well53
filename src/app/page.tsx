// src/app/cricket/page.tsx

export default function CricketPage() {
  const facts = [
    { title: "Origin", detail: "Cricket originated in England in the 16th century." },
    { title: "Format", detail: "Main formats: Test, One Day International (ODI), and T20." },
    { title: "World Cup", detail: "The ICC Cricket World Cup is held every 4 years." },
    { title: "T20 Leagues", detail: "IPL, PSL, and Big Bash are the most famous T20 leagues." },
    { title: "Famous Players", detail: "Legends include Sachin Tendulkar, Wasim Akram, and Ricky Ponting." },
    { title: "Runs & Wickets", detail: "Runs are scored with the bat, while bowlers aim to take wickets." },
    { title: "Longest Match", detail: "Test matches can last up to 5 days." },
    { title: "Fastest Format", detail: "T20 is the fastest and most entertaining cricket format." },
    { title: "Equipment", detail: "Bat, ball, stumps, gloves, and protective gear are essential." },
    { title: "Spirit of the Game", detail: "Cricket is often called the 'Gentleman’s Game' due to its traditions." },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-900 to-black text-white py-12 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center mb-10">
        🏏 Cricket – The Gentleman’s Game
      </h1>

      {/* Facts Grid */}
      <section className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map((fact, i) => (
          <div
            key={i}
            className="bg-green-800/60 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <h2 className="text-xl font-bold text-yellow-300">{fact.title}</h2>
            <p className="mt-2 text-gray-200">{fact.detail}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center mt-12 text-gray-400">
        © {new Date().getFullYear()} Cricket Info | Made with ❤️
      </footer>
    </main>
  );
}
