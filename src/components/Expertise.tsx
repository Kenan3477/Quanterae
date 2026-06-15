export default function Expertise() {
  const departments = [
    {
      name: "Sales Department",
      description: "Drive revenue growth with optimized sales processes and high-performing teams",
      metrics: ["Pipeline Management", "Forecasting", "Team Coaching", "Deal Closure"],
    },
    {
      name: "Customer Success",
      description: "Build lasting relationships and reduce churn through strategic engagement",
      metrics: ["Onboarding", "Health Scoring", "Renewal Strategy", "Upselling"],
    },
    {
      name: "Operations",
      description: "Streamline workflows and maximize efficiency across all business processes",
      metrics: ["Process Design", "Resource Planning", "Quality Assurance", "Scalability"],
    },
    {
      name: "Human Resources",
      description: "Attract, develop, and retain top talent with modern HR strategies",
      metrics: ["Recruitment", "Training & Development", "Culture Building", "Performance Management"],
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Multi-Department Expertise
          </h2>
          <p className="text-xl text-slate-300">
            Proven experience managing and optimizing every critical business function
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 font-serif">{dept.name}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {dept.description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {dept.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-primary-600/20 px-3 py-2 rounded-lg text-sm text-center border border-primary-400/30"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/20">
            <p className="text-2xl font-semibold mb-2">
              Complete Department Coverage
            </p>
            <p className="text-slate-300">
              From front-line sales to back-office operations, we&apos;ve managed it all
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
