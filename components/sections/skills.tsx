"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Brain, 
  Code2, 
  Cloud, 
  Database, 
  FileCode, 
  FlaskConical, 
  Cpu, 
  Network,
  Layers
} from "lucide-react"

// Skills organized by expertise level (no percentages)
// Lavender-inspired expertise levels
const expertiseLevels = {
  expert: {
    label: "Expert",
    dot: "bg-gradient-to-br from-violet-400 to-purple-500",
    badge: "bg-gradient-to-r from-violet-100/80 to-purple-100/80",
    border: "border-violet-300/60",
    glow: "shadow-violet-200/50",
    text: "text-violet-800",
  },
  advanced: {
    label: "Advanced",
    dot: "bg-gradient-to-br from-purple-400 to-violet-500",
    badge: "bg-gradient-to-r from-purple-100/60 to-violet-100/60",
    border: "border-purple-300/50",
    glow: "shadow-purple-200/40",
    text: "text-purple-800",
  },
  proficient: {
    label: "Proficient",
    dot: "bg-gradient-to-br from-violet-300 to-purple-400",
    badge: "bg-gradient-to-r from-violet-50/80 to-purple-50/80",
    border: "border-violet-200/50",
    glow: "shadow-violet-100/30",
    text: "text-violet-700",
  },
}

const skillCategories = [
  {
    title: "AI / Machine Learning",
    icon: Brain,
    skills: [
      { name: "Deep Learning", level: "expert" },
      { name: "Reinforcement Learning", level: "advanced" },
      { name: "Explainable AI", level: "advanced" },
      { name: "Sequential / Time Series", level: "advanced" },
      { name: "Recommendation Systems", level: "proficient" },
      { name: "Multi-Agent Systems", level: "expert" },
      { name: "Transformer Models", level: "advanced" },
    ],
  },
  {
    title: "Computer Vision & NLP",
    icon: Layers,
    skills: [
      { name: "CNN / EfficientNet", level: "advanced" },
      { name: "Medical Imaging", level: "advanced" },
      { name: "Grad-CAM / LIME", level: "advanced" },
      { name: "BERT / BioBERT", level: "advanced" },
      { name: "Clinical NER", level: "proficient" },
      { name: "Text Classification", level: "advanced" },
      { name: "Edge AI Deployment", level: "proficient" },
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: Code2,
    skills: [
      { name: "PyTorch", level: "expert" },
      { name: "TensorFlow", level: "advanced" },
      { name: "scikit-learn", level: "advanced" },
      { name: "pandas / NumPy", level: "expert" },
      { name: "FastAPI", level: "advanced" },
      { name: "Hugging Face", level: "advanced" },
      { name: "spaCy", level: "proficient" },
    ],
  },
  {
    title: "MLOps & Infrastructure",
    icon: Cloud,
    skills: [
      { name: "Docker", level: "advanced" },
      { name: "DVC", level: "advanced" },
      { name: "Kubeflow", level: "proficient" },
      { name: "ONNX", level: "proficient" },
      { name: "Distributed Training", level: "advanced" },
      { name: "Git", level: "expert" },
    ],
  },
  {
    title: "Programming",
    icon: Cpu,
    skills: [
      { name: "Python", level: "expert" },
      { name: "C++", level: "proficient" },
      { name: "SQL", level: "advanced" },
      { name: "JavaScript / React", level: "proficient" },
      { name: "R", level: "proficient" },
      { name: "Bash / Linux", level: "advanced" },
    ],
  },
  {
    title: "Research & Data",
    icon: FlaskConical,
    skills: [
      { name: "Experimental Design", level: "advanced" },
      { name: "Statistical Analysis", level: "advanced" },
      { name: "Scientific Writing", level: "advanced" },
      { name: "Data Visualization", level: "advanced" },
      { name: "Reproducible Research", level: "advanced" },
    ],
  },
]

const getLevelStyle = (level: string) => {
  return expertiseLevels[level as keyof typeof expertiseLevels] || expertiseLevels.proficient
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-20 md:py-24 overflow-hidden" ref={ref}>
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
            Technical Arsenal
          </motion.span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-foreground font-[family-name:var(--font-poppins)]">Skills & </span>
            <span className="gradient-text font-[family-name:var(--font-script)] italic">Technologies</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning machine learning, computational modeling, 
            and full-stack development for building production-ready AI systems.
          </p>
        </motion.div>

        {/* Skills Grid - Honeycomb Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="group p-5 glass rounded-xl hover:border-violet-300 transition-all duration-300 hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + categoryIndex * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-violet-100 border border-violet-200 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-violet-600" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
              </div>

              {/* Skills Grid - Uniform Cards */}
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, skillIndex) => {
                  const levelStyle = getLevelStyle(skill.level)
                  return (
                    <motion.div
                      key={skill.name}
                      className="relative"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.03 }}
                      whileHover={{ y: -2 }}
                    >
                      {/* Skill Card - Clean uniform style */}
                      <div className={`
                        w-full h-full px-3 py-2.5 text-xs font-medium rounded-lg
                        ${levelStyle.badge} border ${levelStyle.border}
                        hover:shadow-md hover:${levelStyle.glow}
                        hover:border-violet-300
                        transition-all duration-300 cursor-default
                        group/skill backdrop-blur-sm
                        flex items-center justify-center text-center
                      `}>
                        <span className={`${levelStyle.text} group-hover/skill:text-violet-900 transition-colors line-clamp-2`}>
                          {skill.name}
                        </span>
                        
                        {/* Hover tooltip with level */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/skill:opacity-100 transition-all duration-300 pointer-events-none z-10">
                          <div className="px-2.5 py-1 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-[10px] font-medium rounded-full whitespace-nowrap shadow-lg shadow-violet-300/50">
                            {levelStyle.label}
                          </div>
                          <div className="w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-violet-500 mx-auto" />
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Marquee */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="text-center mb-8">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Tools I Work With</span>
          </div>
          <div className="relative overflow-hidden py-4">
            <div className="flex gap-6 animate-marquee">
              {[
                "PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "FastAPI", "React",
                "Docker", "Kubeflow", "DVC", "ONNX", "pandas", "NumPy", "spaCy", "NLTK",
                "Matplotlib", "Plotly", "Git", "Linux", "VS Code", "Jupyter",
                "PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "FastAPI", "React",
              ].map((tool, index) => (
                <span
                  key={`${tool}-${index}`}
                  className="px-4 py-2 text-sm font-medium text-violet-600 bg-violet-50 border border-violet-200 rounded-lg whitespace-nowrap hover:text-violet-700 hover:border-violet-300 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
