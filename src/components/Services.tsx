export default function Services() {
  const services = [
    {
      title: "Sales Optimization",
      description: "Maximize revenue with data-driven sales strategies, pipeline management, and conversion optimization.",
      icon: "📈",
      features: ["Sales Process Design", "Team Performance", "Revenue Growth", "CRM Strategy"],
    },
    {
      title: "Retention Strategies",
      description: "Build lasting customer relationships through strategic retention programs and engagement initiatives.",
      icon: "🤝",
      features: ["Customer Loyalty", "Churn Reduction", "Engagement Programs", "Feedback Systems"],
    },
    {
      title: "Staff Management",
      description: "Optimize your workforce with effective recruitment, training, and performance management systems.",
      icon: "👥",
      features: ["Talent Acquisition", "Training Programs", "Performance Reviews", "Team Development"],
    },
    {
      title: "Process Optimization",
      description: "Streamline operations and eliminate inefficiencies through systematic process improvement.",
      icon: "⚙️",
      features: ["Workflow Analysis", "Automation", "Quality Control", "Cost Reduction"],
    },
    {
      title: "Strategic Planning",
      description: "Develop comprehensive business strategies aligned with your long-term goals and market opportunities.",
      icon: "🎯",
      features: ["Market Analysis", "Growth Planning", "Risk Management", "KPI Development"],
    },
    {
      title: "Change Management",
      description: "Navigate organizational change smoothly with structured transition planning and stakeholder engagement.",
      icon: "🔄",
      features: ["Transition Planning", "Stakeholder Buy-in", "Communication", "Culture Shift"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            Comprehensive Business Solutions
          </h2>
          <p className="text-xl text-slate-400">
            End-to-end management consulting services tailored to your unique business challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-300 hover:-translate-y-2 border border-slate-700 hover:border-gold-500/50"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform opacity-80 group-hover:opacity-100">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-serif group-hover:text-gold-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-300">
                    <svg
                      className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
