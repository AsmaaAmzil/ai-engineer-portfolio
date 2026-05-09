"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, GitBranch, GitCommit, Star, Code2 } from "lucide-react"

// Simulated contribution data for visual effect
const generateContributions = () => {
  const weeks = 52
  const days = 7
  const contributions: number[][] = []
  
  for (let w = 0; w < weeks; w++) {
    const week: number[] = []
    for (let d = 0; d < days; d++) {
      // Generate random contribution levels (0-4)
      const random = Math.random()
      if (random < 0.3) week.push(0)
      else if (random < 0.5) week.push(1)
      else if (random < 0.7) week.push(2)
      else if (random < 0.9) week.push(3)
      else week.push(4)
    }
    contributions.push(week)
  }
  return contributions
}

const contributions = generateContributions()

const stats = [
  { icon: GitCommit, label: "Commits", value: "500+", color: "cyan" },
  { icon: GitBranch, label: "Repositories", value: "25+", color: "purple" },
  { icon: Star, label: "Stars Earned", value: "50+", color: "blue" },
  { icon: Code2, label: "Languages", value: "8+", color: "cyan" },
]

const languages = [
  { name: "Python", percentage: 65, color: "#3572A5" },
  { name: "TypeScript", percentage: 15, color: "#3178C6" },
  { name: "C++", percentage: 10, color: "#F34B7D" },
  { name: "R", percentage: 5, color: "#198CE7" },
  { name: "Other", percentage: 5, color: "#6E7681" },
]

const getContributionColor = (level: number) => {
  switch (level) {
    case 0: return "bg-secondary/30"
    case 1: return "bg-cyan/20"
    case 2: return "bg-cyan/40"
    case 3: return "bg-cyan/60"
    case 4: return "bg-cyan/80"
    default: return "bg-secondary/30"
  }
}

export function GitHubStatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-cyan bg-cyan/10 border border-cyan/20 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Open Source
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">GitHub </span>
            <span className="gradient-text">Activity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building in public and contributing to the AI/ML community through open source projects.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-5 glass rounded-xl text-center"
                whileHover={{ scale: 1.02, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <stat.icon className={`w-6 h-6 mx-auto mb-3 ${
                  stat.color === "cyan" ? "text-cyan" : stat.color === "purple" ? "text-purple" : "text-blue"
                }`} />
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contribution Graph */}
          <motion.div
            className="p-6 glass rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Github className="w-5 h-5" />
                Contribution Graph
              </h3>
              <span className="text-sm text-muted-foreground">Last 12 months</span>
            </div>
            
            {/* Contribution Grid */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1 min-w-max">
                {contributions.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((day, dayIndex) => (
                      <motion.div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`w-3 h-3 rounded-sm ${getContributionColor(day)}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + (weekIndex * 7 + dayIndex) * 0.001 }}
                        whileHover={{ scale: 1.5 }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                />
              ))}
              <span>More</span>
            </div>
          </motion.div>

          {/* Language Breakdown */}
          <motion.div
            className="p-6 glass rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              Most Used Languages
            </h3>
            
            {/* Language Bar */}
            <div className="h-4 rounded-full overflow-hidden flex mb-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  className="h-full"
                  style={{ backgroundColor: lang.color }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${lang.percentage}%` } : {}}
                  transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                />
              ))}
            </div>

            {/* Language Labels */}
            <div className="flex flex-wrap gap-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {lang.name} <span className="text-foreground font-medium">{lang.percentage}%</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="https://github.com/AsmaaAmzil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-secondary text-foreground border border-border rounded-full hover:bg-muted hover:border-cyan/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              View GitHub Profile
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
