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

const skillCategories = [
  {
    title: "AI / Machine Learning",
    icon: Brain,
    color: "pink",
    skills: [
      { name: "Deep Learning", level: 95 },
      { name: "Reinforcement Learning", level: 90 },
      { name: "Explainable AI (SHAP, Grad-CAM)", level: 88 },
      { name: "Sequential / Time Series", level: 85 },
      { name: "Recommendation Systems", level: 82 },
    ],
  },
  {
    title: "NLP & Transformers",
    icon: FileCode,
    color: "lavender",
    skills: [
      { name: "Transformers / BERT", level: 92 },
      { name: "Clinical NER", level: 88 },
      { name: "BioBERT / PubMedBERT", level: 85 },
      { name: "Text Classification", level: 90 },
      { name: "Sequence Modeling", level: 87 },
    ],
  },
  {
    title: "Multi-Agent Systems",
    icon: Network,
    color: "sky",
    skills: [
      { name: "Agent-Based Modeling", level: 93 },
      { name: "Emergent Behavior Analysis", level: 88 },
      { name: "Threshold Dynamics", level: 85 },
      { name: "Network Analysis", level: 82 },
      { name: "Simulation-Based Inference", level: 80 },
    ],
  },
  {
    title: "Computer Vision",
    icon: Layers,
    color: "rose",
    skills: [
      { name: "CNNs / EfficientNet", level: 90 },
      { name: "Image Classification", level: 92 },
      { name: "Medical Imaging", level: 85 },
      { name: "Grad-CAM / LIME", level: 88 },
      { name: "Edge AI Deployment", level: 78 },
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: Code2,
    color: "violet",
    skills: [
      { name: "PyTorch", level: 95 },
      { name: "TensorFlow", level: 88 },
      { name: "scikit-learn", level: 92 },
      { name: "pandas / NumPy", level: 95 },
      { name: "FastAPI", level: 85 },
    ],
  },
  {
    title: "MLOps & Cloud",
    icon: Cloud,
    color: "mint",
    skills: [
      { name: "Docker", level: 88 },
      { name: "DVC", level: 85 },
      { name: "Kubeflow", level: 78 },
      { name: "ONNX", level: 75 },
      { name: "Distributed Training", level: 82 },
    ],
  },
  {
    title: "Programming",
    icon: Cpu,
    color: "peach",
    skills: [
      { name: "Python", level: 98 },
      { name: "C++", level: 75 },
      { name: "R", level: 70 },
      { name: "SQL", level: 82 },
      { name: "JavaScript / React", level: 78 },
    ],
  },
  {
    title: "Research & Data",
    icon: FlaskConical,
    color: "orchid",
    skills: [
      { name: "Experimental Design", level: 90 },
      { name: "Statistical Analysis", level: 88 },
      { name: "Data Visualization", level: 85 },
      { name: "Scientific Writing", level: 88 },
      { name: "Reproducible Research", level: 90 },
    ],
  },
]

const getColorClasses = (color: string) => {
  switch (color) {
    case "pink":
      return {
        bg: "bg-pink-100",
        border: "border-pink-200",
        text: "text-pink-600",
        gradient: "from-pink-400 to-pink-300",
        glow: "shadow-pink-200",
      }
    case "lavender":
    case "violet":
    case "orchid":
      return {
        bg: "bg-purple-100",
        border: "border-purple-200",
        text: "text-purple-600",
        gradient: "from-purple-400 to-purple-300",
        glow: "shadow-purple-200",
      }
    case "sky":
      return {
        bg: "bg-sky-100",
        border: "border-sky-200",
        text: "text-sky-600",
        gradient: "from-sky-400 to-sky-300",
        glow: "shadow-sky-200",
      }
    case "rose":
      return {
        bg: "bg-rose-100",
        border: "border-rose-200",
        text: "text-rose-600",
        gradient: "from-rose-400 to-rose-300",
        glow: "shadow-rose-200",
      }
    case "mint":
      return {
        bg: "bg-emerald-100",
        border: "border-emerald-200",
        text: "text-emerald-600",
        gradient: "from-emerald-400 to-emerald-300",
        glow: "shadow-emerald-200",
      }
    case "peach":
      return {
        bg: "bg-orange-100",
        border: "border-orange-200",
        text: "text-orange-600",
        gradient: "from-orange-400 to-orange-300",
        glow: "shadow-orange-200",
      }
    default:
      return {
        bg: "bg-pink-100",
        border: "border-pink-200",
        text: "text-pink-600",
        gradient: "from-pink-400 to-pink-300",
        glow: "shadow-pink-200",
      }
  }
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-32 overflow-hidden" ref={ref}>
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
            Technical Arsenal
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground font-[family-name:var(--font-poppins)]">Skills & </span>
            <span className="gradient-text font-[family-name:var(--font-script)] italic">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning machine learning, computational modeling, 
            and full-stack development for building production-ready AI systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color)
            return (
              <motion.div
                key={category.title}
                className="group p-6 glass rounded-2xl hover:border-pink-300 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                    <category.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                        <span className={`text-xs font-medium ${colors.text}`}>{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${colors.gradient}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tools Marquee */}
        <motion.div
          className="mt-20"
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
                  className="px-4 py-2 text-sm font-medium text-pink-600 bg-pink-50 border border-pink-200 rounded-lg whitespace-nowrap hover:text-pink-700 hover:border-pink-300 transition-colors"
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
