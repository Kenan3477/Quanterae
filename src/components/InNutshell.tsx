export default function InNutshell() {
  return (
    <section className="py-20 bg-slate-800 border-t border-b border-slate-700">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center text-white mb-6">
            In a nutshell, we...
          </h2>
          <p className="text-xl md:text-2xl text-center text-slate-300 leading-relaxed mb-12">
            Support businesses with a professional, insight-driven approach
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Strategy",
                description: "Clear roadmaps and actionable plans tailored to your business goals"
              },
              {
                icon: "📈",
                title: "Growth",
                description: "Proven methods to scale sales, retention, and operational efficiency"
              },
              {
                icon: "🤝",
                title: "Partnership",
                description: "We become part of your team, not just advisors looking in from outside"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gold-400 mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gold-500/10 border-2 border-gold-500 rounded-xl px-8 py-6">
              <p className="text-2xl font-bold text-gold-400">
                📞 One Call when Tech goes wrong
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-slate-900/50 border border-gold-500/30 rounded-xl px-8 py-6">
              <p className="text-slate-300 text-lg mb-2">
                <strong className="text-gold-400">We&apos;re different</strong> from traditional consultancies.
              </p>
              <p className="text-slate-400">
                You&apos;ll find no corporate jargon here—just real solutions that work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
