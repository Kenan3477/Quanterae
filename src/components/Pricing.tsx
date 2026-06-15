export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            Start Your Transformation Today
          </h2>
          <p className="text-xl text-slate-400">
            Begin with our comprehensive business assessment
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl border-2 border-gold-500/50 shadow-2xl shadow-gold-500/20 overflow-hidden">
            {/* Special Offer Badge */}
            <div className="bg-gradient-to-r from-gold-600 to-gold-500 py-3 px-6 text-center">
              <p className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                ⭐ Limited Time Offer ⭐
              </p>
            </div>

            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
                  One-Time Business Assessment
                </h3>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-slate-500 line-through text-2xl">£499</span>
                  <div className="flex items-baseline">
                    <span className="text-6xl md:text-7xl font-bold text-gold-400">£155</span>
                  </div>
                </div>
                <p className="text-slate-400 text-lg">
                  One-time payment • No recurring fees • Full comprehensive report
                </p>
              </div>

              {/* What's Included */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: "🔍",
                    title: "Complete Business Analysis",
                    description: "Deep dive into all your business operations"
                  },
                  {
                    icon: "📊",
                    title: "Department Review",
                    description: "Sales, retention, staff, and process evaluation"
                  },
                  {
                    icon: "📈",
                    title: "Growth Opportunities",
                    description: "Identify key areas for improvement and expansion"
                  },
                  {
                    icon: "📋",
                    title: "Detailed Action Plan",
                    description: "Customized roadmap with prioritized recommendations"
                  },
                  {
                    icon: "💡",
                    title: "Strategic Insights",
                    description: "Expert analysis from experienced consultants"
                  },
                  {
                    icon: "🎯",
                    title: "60-Minute Consultation",
                    description: "Review findings and discuss implementation strategy"
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-slate-950/50 border border-gold-500/30 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-gold-400 mb-4 text-center text-lg">
                  Why This Assessment?
                </h4>
                <ul className="space-y-3">
                  {[
                    "Uncover hidden inefficiencies costing you thousands",
                    "Get expert insights without long-term commitment",
                    "Receive actionable strategies you can implement immediately",
                    "Understand your business's true potential",
                    "Risk-free investment in your company's future"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-slate-300">
                      <svg
                        className="w-6 h-6 text-gold-400 mr-3 flex-shrink-0 mt-0.5"
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
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href="#contact"
                  className="inline-block bg-gold-500 text-slate-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gold-400 transition-all shadow-xl shadow-gold-500/30 hover:shadow-gold-500/50 hover:-translate-y-1 transform"
                >
                  Book Your Assessment Now - £155
                </a>
                <p className="text-slate-500 text-sm mt-4">
                  🔒 Secure payment • ⚡ Results within 7 days • 💯 Satisfaction guaranteed
                </p>
              </div>

              {/* Money Back Guarantee */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 bg-green-900/20 border border-green-500/30 px-6 py-3 rounded-full">
                  <span className="text-2xl">✓</span>
                  <span className="text-green-400 font-semibold">
                    100% Money-Back Guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">Trusted by businesses across the UK</p>
            <div className="flex justify-center gap-8 flex-wrap">
              {["⭐⭐⭐⭐⭐", "100+ Assessments", "95% Success Rate"].map((trust, idx) => (
                <div key={idx} className="text-slate-500 font-semibold">
                  {trust}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
