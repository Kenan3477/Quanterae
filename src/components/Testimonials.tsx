"use client";

import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "We brought in Quanterae to help with our retentions department, and the results speak for themselves. They analyzed our staff performance and processes, then implemented strategic changes that increased our retention rate by 60%. The hands-on approach, including script writing and direct staff training, made all the difference.",
      author: "Wiseguys Team",
      role: "Retentions Department",
      company: "Wiseguys",
      result: "60% increase in retention rate"
    },
    {
      quote: "We had over £100k in debt that we'd written off as unrecoverable. Quanterae came in, assessed our recovery processes and staff efficiency, and completely transformed our approach. They didn't just give advice—they wrote scripts, trained our team personally, and helped us recover what we thought was lost forever.",
      author: "Kensington Mint Team",
      role: "Debt Recovery Department",
      company: "Kensington Mint",
      result: "£100k+ recovered in previously unrecoverable debt"
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            Real Results
          </h2>
          <p className="text-xl text-slate-400">
            Case studies from businesses we&apos;ve helped transform
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
                  <div className="text-sm font-bold text-green-400 mt-2">
                    ✓ {testimonials[activeIndex].result}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-3 mb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-gold-400 w-8"
                      : "bg-slate-600 hover:bg-slate-500"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            {[
              { value: "60%", label: "Retention Increase" },
              { value: "£100k+", label: "Debt Recovered" },
              { value: "2", label: "Major Case Studies" },
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

