export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-8 text-center">
            Who are we?
          </h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Quanterae Solutions LTD</strong> is a consulting firm that supports companies from growing startups to established SMEs.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              We offer much more than just &apos;business advice&apos;—for many companies, we are an outsourced part of their team, helping them navigate challenges and seize opportunities.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              To sum it up: we assist with <strong className="text-gold-400">growth, planning, and development</strong> through a professional yet approachable process. Every business is different, and we tailor our approach to fit your unique needs.
            </p>
          </div>

          <h3 className="text-3xl font-bold font-serif text-white mb-8 text-center">
            What do we do?
          </h3>
          
          <div className="bg-slate-900/50 border border-gold-500/30 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Every business owner and company comes to us for different reasons—<strong className="text-white">boosting sales, staff management, process optimization, and strategic planning</strong> are just some of the areas we work on.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              The common theme? <strong className="text-gold-400">They all want to be better.</strong>
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Whether you need help with one department or comprehensive support across your entire operation, we bring hands-on experience and practical solutions that drive real results.
            </p>
          </div>

          {/* Key Differentiators */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Real Experience",
                description: "We've managed departments ourselves—sales, retention, operations, and more.",
                icon: "✓",
              },
              {
                title: "Practical Solutions",
                description: "No theoretical fluff. Just proven strategies that work in the real world.",
                icon: "✓",
              },
              {
                title: "Flexible Partnership",
                description: "From one-off assessments to ongoing support, we adapt to your needs.",
                icon: "✓",
              },
              {
                title: "Transparent Approach",
                description: "Clear communication, honest feedback, and measurable outcomes.",
                icon: "✓",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-slate-800/30 p-6 rounded-xl border border-slate-700"
              >
                <div className="text-2xl text-gold-400 font-bold">{value.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
