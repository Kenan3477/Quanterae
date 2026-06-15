import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold font-serif mb-4">
              <span className="text-white">Quanterae</span>
              <span className="text-gold-400"> Solutions</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Transforming businesses through expert management consulting across all 
              departments. Your partner for sustainable growth and operational excellence.
            </p>
            <div className="mb-6">
              <a 
                href="mailto:ken@simpleemails.co.uk" 
                className="text-gold-400 hover:text-gold-300 transition-colors text-sm"
              >
                📧 ken@simpleemails.co.uk
              </a>
            </div>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors group"
                  aria-label={social}
                >
                  <span className="text-sm group-hover:text-slate-900">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold-400">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "#services", label: "Services" },
                { href: "#expertise", label: "Expertise" },
                { href: "#about", label: "About Us" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold-400">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Sales Optimization",
                "Retention Strategies",
                "Staff Management",
                "Process Optimization",
                "Strategic Planning",
                "Change Management",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-slate-400 hover:text-gold-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © {currentYear} Quanterae Solutions LTD. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-slate-400 hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 hover:text-gold-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-400 hover:text-gold-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
