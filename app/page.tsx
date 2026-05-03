export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      {/* Hero */}
      <section className="text-center mb-24">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-xs text-[#58a6ff] mb-6 uppercase tracking-widest">
          Database Tools
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Visual Diff for<br />
          <span className="text-[#58a6ff]">Database Schema Migrations</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Upload your SQL or migration files and instantly see interactive before/after diagrams with highlighted changes, dependency tracking, and breaking change detection.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $18/mo
        </a>
        <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. Instant access after payment.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["SQL & Migration Files", "D3.js Diagrams", "Breaking Change Alerts", "Dependency Graph", "Side-by-Side Diff"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-xs px-3 py-1 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$18</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited schema comparisons",
              "Interactive D3.js diagrams",
              "Breaking change detection",
              "Dependency impact analysis",
              "Export diagrams as PNG/SVG",
              "Priority support",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which schema formats are supported?",
              a: "We support raw SQL DDL files, Flyway/Liquibase migrations, Prisma schema files, and plain .sql migration scripts.",
            },
            {
              q: "How does breaking change detection work?",
              a: "The tool analyzes column renames, type changes, dropped constraints, and removed tables — flagging anything that could break existing queries or application code.",
            },
            {
              q: "Is my schema data stored on your servers?",
              a: "No. Schema parsing and diffing happens entirely in your browser. Nothing is sent to or stored on our servers.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} DB Schema Visualizer. All rights reserved.
      </footer>
    </main>
  )
}
