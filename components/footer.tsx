"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/AsmaaAmzil", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/asmaa-amzil", label: "LinkedIn" },
  { icon: Mail, href: "mailto:asmaaamzil19@gmail.com", label: "Email" },
]

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-16 overflow-hidden border-t border-border/30">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <motion.a
              href="#"
              className="inline-block text-2xl font-bold gradient-text font-[family-name:var(--font-script)]"
              whileHover={{ scale: 1.05 }}
            >
              Asmaa Amzil
            </motion.a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI Engineer & Computational Researcher building intelligent systems 
              that bridge research and real-world impact.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-violet-600 hover:text-violet-700 bg-violet-50 rounded-lg border border-violet-200 hover:border-violet-300 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-violet-600 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Get In Touch
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Marrakech, Morocco</p>
              <a
                href="mailto:asmaaamzil19@gmail.com"
                className="block hover:text-violet-600 transition-colors"
              >
                asmaaamzil19@gmail.com
              </a>
              <a
                href="tel:+212680046270"
                className="block hover:text-violet-600 transition-colors"
              >
                +212 680046270
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Asmaa Amzil. Built with</span>
            <Heart className="w-3.5 h-3.5 text-violet-500 mx-1 fill-violet-500" />
            <span>and caffeine.</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 text-sm text-violet-600 hover:text-violet-700 bg-violet-50 rounded-full border border-violet-200 hover:border-violet-300 transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </motion.button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full blur-[100px] bg-violet-300/20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full blur-[80px] bg-purple-300/15 pointer-events-none" />
    </footer>
  )
}
