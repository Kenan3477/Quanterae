"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-gold-600 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-gold-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gold-400 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-200 mt-2">
              Expert Management
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Comprehensive business management consulting across all departments. 
            From sales optimization to staff retention, we drive results that matter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#contact"
              className="group bg-gold-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Schedule Consultation
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
            <Link
              href="#services"
              className="group bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800/50 transition-all border-2 border-slate-700 hover:border-gold-500/50 w-full sm:w-auto"
            >
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-3xl mx-auto">
            {[
              { number: "100+", label: "Clients Served" },
              { number: "95%", label: "Success Rate" },
              { number: "50+", label: "Projects Completed" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold-400 font-serif">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-500/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gold-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
