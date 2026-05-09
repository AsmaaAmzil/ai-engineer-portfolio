"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react"

const techBadges = [
  "Multi-Agent Systems",
  "Deep Learning",
  "Reinforcement Learning",
  "NLP / Transformers",
  "Explainable AI",
  "PyTorch",
  "TensorFlow",
  "FastAPI",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-cyan bg-cyan/10 border border-cyan/20 rounded-full"
          >
            <Sparkles className="w-4 h-4" />
            <span>Open to Research & Engineering Opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-foreground">Building </span>
            <span className="gradient-text text-glow-cyan">Intelligent Systems</span>
            <br />
            <span className="text-foreground">That Shape </span>
            <span className="gradient-text text-glow-purple">Tomorrow</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI Engineer & Computational Researcher specializing in{" "}
            <span className="text-cyan">Multi-Agent Systems</span>,{" "}
            <span className="text-purple">Deep Learning</span>, and{" "}
            <span className="text-blue">Interpretable AI</span>. Bridging research and engineering
            to build systems that understand, adapt, and deliver real-world impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 text-base font-semibold bg-cyan text-primary-foreground rounded-full hover:bg-cyan-glow transition-all glow-cyan"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold bg-secondary text-secondary-foreground border border-border rounded-full hover:bg-muted transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold bg-secondary text-secondary-foreground border border-border rounded-full hover:bg-muted transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="https://github.com/AsmaaAmzil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-cyan bg-secondary/50 rounded-full border border-border/50 hover:border-cyan/30 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/asmaa-amzil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-cyan bg-secondary/50 rounded-full border border-border/50 hover:border-cyan/30 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:asmaaamzil19@gmail.com"
              className="p-3 text-muted-foreground hover:text-cyan bg-secondary/50 rounded-full border border-border/50 hover:border-cyan/30 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Floating Tech Badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {techBadges.map((badge, index) => (
              <motion.span
                key={badge}
                className="px-3 py-1.5 text-xs font-medium text-muted-foreground bg-secondary/50 border border-border/50 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "oklch(0.75 0.18 195 / 0.5)",
                  color: "oklch(0.75 0.18 195)",
                }}
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-cyan/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
