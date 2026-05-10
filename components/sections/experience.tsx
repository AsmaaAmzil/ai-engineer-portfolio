"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Computational Multi-Agent System Research",
    organization: "Cadi Ayyad University & Institut de Recherche sur le Cancer (IRC)",
    location: "Morocco",
    period: "Feb 2026 – June 2026",
    description: "Final Year Research Internship focusing on mechanistic multi-agent systems for emergent hypothesis generation. Integrated 600+ tools and 15+ databases via MCP into structured pipelines.",
    highlights: [
      "Built heterogeneous agent architectures with distinct decision logic",
      "Developed full-stack application with React/FastAPI/Docker",
      "Designed interpretable, policy-relevant output systems",
    ],
  },
  {
    type: "work",
    title: "Battery Management System Optimization",
    organization: "Cadi Ayyad University & Innovex Company",
    location: "Morocco",
    period: "July 2025 – Jan 2026",
    description: "Research internship focused on predictive models for battery health monitoring with embedded deployment capabilities.",
    highlights: [
      "Built predictive models for SoC, SoH, and RUL estimation",
      "Deployed real-time inference on ESP32 microcontrollers",
      "Designed RL pipelines for intervention testing",
    ],
  },
  {
    type: "work",
    title: "Software Development Intern",
    organization: "Drupal Development Team",
    location: "Morocco",
    period: "July – Aug 2024",
    description: "Full-stack CMS development internship working with PHP and Drupal.",
    highlights: [
      "Built and customized web components using PHP",
      "Contributed to full-stack CMS-based applications",
      "Gained experience in enterprise web development",
    ],
  },
  {
    type: "education",
    title: "Master's in Artificial Intelligence",
    organization: "Cadi Ayyad University, Faculty of Sciences Semlalia",
    location: "Marrakech, Morocco",
    period: "2023 – 2026",
    description: "Advanced studies in AI with focus on multi-agent systems, deep learning, and computational modeling.",
    highlights: [
      "Multi-Agent Systems & Emergent Behavior",
      "Deep Learning & Reinforcement Learning",
      "Explainable AI & Interpretable Models",
    ],
  },
  {
    type: "education",
    title: "Bachelor's in Computer Science",
    organization: "Cadi Ayyad University, Faculty of Sciences Semlalia",
    location: "Marrakech, Morocco",
    period: "2020 – 2023",
    description: "Foundation in computer science with emphasis on programming, algorithms, and software engineering.",
    highlights: [
      "Data Structures & Algorithms",
      "Software Engineering Principles",
      "Database Systems & Networking",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="relative py-20 md:py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-violet-600 bg-violet-100 border border-violet-200 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Career Journey
          </motion.span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-foreground">Experience & </span>
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A timeline of research internships, professional experience, and academic milestones 
            shaping my journey in AI and computational systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-300 via-purple-300 to-violet-400 opacity-30" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0
            const IconComponent = exp.type === "work" ? Briefcase : GraduationCap
            const colorClass = exp.type === "work" ? "violet" : "purple"

            return (
              <motion.div
                key={exp.title}
                className={`relative flex items-start gap-8 mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15 }}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-4 h-4 rounded-full ${
                      colorClass === "cyan" ? "bg-cyan" : "bg-purple"
                    } ring-4 ring-background`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.15 }}
                  />
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    className="group p-5 glass rounded-xl hover:border-violet-300 transition-all duration-300 hover:shadow-md"
                    whileHover={{ y: -4 }}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-xl shrink-0 ${
                        colorClass === "violet" ? "bg-violet-100 border-violet-200" : "bg-purple-100 border-purple-200"
                      } border flex items-center justify-center`}>
                        <IconComponent className={`w-5 h-5 ${
                          colorClass === "violet" ? "text-violet-600" : "text-purple-600"
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xs font-medium uppercase tracking-wider ${
                            colorClass === "violet" ? "text-violet-600" : "text-purple-600"
                          }`}>
                            {exp.type === "work" ? "Experience" : "Education"}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mt-1 group-hover:text-violet-600 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-0.5">{exp.organization}</p>
                      </div>
                    </div>

                    {/* Date & Location */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                            colorClass === "cyan" ? "bg-cyan" : "bg-purple"
                          }`} />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
