"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Code2, Database, FlaskConical, Lightbulb, Network } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Deep expertise in neural architectures, reinforcement learning, and building production-ready ML systems.",
  },
  {
    icon: Network,
    title: "Multi-Agent Systems",
    description: "Designing mechanistic multi-agent architectures that model emergent behaviors and complex system dynamics.",
  },
  {
    icon: FlaskConical,
    title: "Computational Research",
    description: "Bridging theoretical research with practical engineering to deliver interpretable, policy-relevant solutions.",
  },
  {
    icon: Code2,
    title: "Full-Stack AI Apps",
    description: "End-to-end development from model training to deployment with React, FastAPI, and cloud infrastructure.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Building robust data pipelines, integrating 600+ tools and databases for scalable AI applications.",
  },
  {
    icon: Lightbulb,
    title: "Explainable AI",
    description: "Creating interpretable models with SHAP, Grad-CAM, and LIME for transparent, trustworthy AI systems.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-pink-600 bg-pink-100 border border-pink-200 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground font-[family-name:var(--font-poppins)]">Crafting </span>
            <span className="gradient-text font-[family-name:var(--font-script)] italic">AI Solutions</span>
            <span className="text-foreground font-[family-name:var(--font-poppins)]"> That Matter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master&apos;s student in Artificial Intelligence with a passion for understanding how 
            individual-level decisions give rise to system-level outcomes. I build interpretable, 
            policy-relevant models that connect computation, behaviour, and real-world impact.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Column - Bio */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="p-6 glass rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-foreground">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Currently pursuing my Master&apos;s in AI at Cadi Ayyad University, I&apos;ve developed 
                  expertise across the full spectrum of intelligent systems—from theoretical foundations 
                  to production deployment.
                </p>
                <p>
                  My research focuses on <span className="text-pink-500 font-medium">computational multi-agent systems</span> and 
                  <span className="text-purple-500 font-medium"> behavioural dynamics</span>, exploring how heterogeneous actors 
                  interact to produce emergent phenomena. This work spans healthcare, energy systems, and 
                  information consumption patterns.
                </p>
                <p>
                  I believe in building AI that&apos;s not just powerful, but <span className="text-sky-500 font-medium">interpretable</span> and 
                  <span className="text-pink-500 font-medium"> actionable</span>—systems that researchers, policymakers, and 
                  engineers can trust and understand.
                </p>
              </div>
            </div>

            {/* Education Cards */}
            <div className="space-y-3">
              <div className="p-4 glass rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 border border-pink-200 flex items-center justify-center shrink-0">
                    <span className="text-pink-600 font-bold text-sm">M</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Master&apos;s in Artificial Intelligence</h4>
                    <p className="text-sm text-muted-foreground">Cadi Ayyad University • 2023 – 2026</p>
                  </div>
                </div>
              </div>
              <div className="p-4 glass rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                    <span className="text-purple-600 font-bold text-sm">B</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Bachelor&apos;s in Computer Science</h4>
                    <p className="text-sm text-muted-foreground">Cadi Ayyad University • 2020 – 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            className="lg:col-span-3 grid sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="group p-5 glass rounded-2xl hover:border-pink-300 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 border border-pink-200 flex items-center justify-center group-hover:border-pink-400 transition-colors">
                  <item.icon className="w-6 h-6 text-pink-500" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-pink-600 group-hover:text-pink-700 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { value: "5+", label: "Research Publications" },
            { value: "10+", label: "AI/ML Projects" },
            { value: "600+", label: "Tools Integrated" },
            { value: "3", label: "Languages" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-6 text-center glass rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
