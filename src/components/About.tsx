export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
              About Quanterae Solutions
            </h2>
            <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
              <p>
                At <strong>Quanterae Solutions LTD</strong>, we specialize in transforming 
                businesses through comprehensive management consulting that spans every 
                critical department.
              </p>
              <p>
                With extensive hands-on experience managing sales teams, customer retention 
                programs, staff development, and process optimization, we bring a unique 
                360-degree perspective to your business challenges.
              </p>
              <p>
                Our approach is rooted in practical experience, not just theory. We&apos;ve been 
                in the trenches, managing diverse departments across various industries, and 
                we understand what it takes to drive real, measurable results.
              </p>
              <p>
                Whether you&apos;re a growing startup or an established enterprise, we tailor 
                our solutions to your specific needs, ensuring sustainable growth and 
                operational excellence.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-slate-800/50 px-6 py-3 rounded-full border border-gold-500/30">
                <span className="font-semibold text-gold-400">Hands-On Experience</span>
              </div>
              <div className="bg-slate-800/50 px-6 py-3 rounded-full border border-gold-500/30">
                <span className="font-semibold text-gold-400">Results-Driven</span>
              </div>
              <div className="bg-slate-800/50 px-6 py-3 rounded-full border border-gold-500/30">
                <span className="font-semibold text-gold-400">Tailored Solutions</span>
              </div>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-6">
            {[
              {
                title: "Strategic Vision",
                description: "We help you see the bigger picture while managing the details that matter.",
                icon: "🎯",
              },
              {
                title: "Proven Methodologies",
                description: "Our frameworks are battle-tested across multiple industries and company sizes.",
                icon: "✅",
              },
              {
                title: "Sustainable Growth",
                description: "We build systems that scale with your business for long-term success.",
                icon: "🚀",
              },
              {
                title: "Collaborative Approach",
                description: "We work alongside your team, transferring knowledge and building capabilities.",
                icon: "🤝",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-gold-500/50 hover:shadow-lg hover:shadow-gold-500/10 transition-all"
              >
                <div className="text-4xl opacity-80">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
