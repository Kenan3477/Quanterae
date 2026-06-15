"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" });
      
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            Let&apos;s Transform Your Business
          </h2>
          <p className="text-xl text-slate-400">
            Schedule a consultation to discuss your unique challenges and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all placeholder-slate-500"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all placeholder-slate-500"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all placeholder-slate-500"
                  placeholder="Your Company Ltd"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all placeholder-slate-500"
                  placeholder="+44 123 456 7890"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-slate-300 mb-2">
                  Service Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="sales">Sales Optimization</option>
                  <option value="retention">Retention Strategies</option>
                  <option value="staff">Staff Management</option>
                  <option value="process">Process Optimization</option>
                  <option value="strategic">Strategic Planning</option>
                  <option value="change">Change Management</option>
                  <option value="comprehensive">Comprehensive Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all resize-none placeholder-slate-500"
                  placeholder="Tell us about your business challenges..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="bg-green-900/30 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg">
                  Thank you! We&apos;ll get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-serif text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Ready to take your business to the next level? We&apos;re here to help. 
                Reach out for a free consultation and let&apos;s discuss how we can drive 
                meaningful results for your organization.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: "📧",
                  title: "Email",
                  content: "info@quanteraesolutions.com",
                  link: "mailto:info@quanteraesolutions.com",
                },
                {
                  icon: "📱",
                  title: "Phone",
                  content: "+44 (0) 20 1234 5678",
                  link: "tel:+442012345678",
                },
                {
                  icon: "📍",
                  title: "Location",
                  content: "London, United Kingdom",
                  link: null,
                },
                {
                  icon: "🕐",
                  title: "Business Hours",
                  content: "Mon - Fri: 9:00 AM - 6:00 PM",
                  link: null,
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-3xl opacity-80">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-white mb-1">{item.title}</div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gold-400 hover:text-gold-300 transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <div className="text-slate-400">{item.content}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-gold-500/30 mt-8">
              <h4 className="font-bold text-white mb-2">Free Consultation</h4>
              <p className="text-sm text-slate-400">
                Every engagement starts with a complimentary consultation to understand 
                your unique needs and challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
