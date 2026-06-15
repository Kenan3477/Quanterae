"use client";

import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Quanterae Solutions transformed our sales department completely. Within 6 months, we saw a 40% increase in conversion rates and our team has never been more motivated.",
      author: "Sarah Mitchell",
      role: "CEO, TechVenture Ltd",
      company: "Technology Sector",
    },
    {
      quote: "The process optimization work was phenomenal. We reduced operational costs by 30% while improving service quality. Their hands-on approach made all the difference.",
      author: "James Patterson",
      role: "Operations Director",
      company: "Manufacturing Industry",
    },
    {
      quote: "Our customer retention rates improved dramatically after implementing their strategies. The team's expertise in building lasting customer relationships is unmatched.",
      author: "Emily Chen",
      role: "Head of Customer Success",
      company: "SaaS Company",
    },
    {
      quote: "From staff management to strategic planning, they covered everything. Their comprehensive approach helped us scale from 20 to 100+ employees smoothly.",
      author: "Michael Roberts",
      role: "Founder & MD",
      company: "Growing Startup",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-slate-400">
            Hear from businesses we&apos;ve helped transform
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-black/20 p-8 md:p-12 mb-8 relative border border-slate-700">
            <div className="text-6xl text-gold-400/30 absolute top-4 left-4 font-serif">&ldquo;</div>
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed italic">
                {testimonials[activeIndex].quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-slate-900 font-bold text-2xl">
                  {testimonials[activeIndex].author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white text-lg">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-slate-400">
                    {testimonials[activeIndex].role}
                  </div>
                  <div className="text-sm text-gold-400">
                    {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex
                    ? "w-12 h-3 bg-gold-500"
                    : "w-3 h-3 bg-slate-600 hover:bg-slate-500"
                } rounded-full`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            {[
              { value: "4.9/5", label: "Client Rating" },
              { value: "98%", label: "Client Retention" },
              { value: "100+", label: "Projects Delivered" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold-400 font-serif mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
