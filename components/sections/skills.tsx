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
  Layers,
  Zap,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  Boxes,
  Clock,
  Eye,
  Stethoscope,
  ScanEye,
  ScrollText,
  BotMessageSquare,
  FileType,
  CpuIcon,
  Container,
  GitBranch,
  LayoutGrid,
  Binary,
  Terminal,
  BarChart3,
  PenTool,
  PieChart,
  FlaskConicalIcon,
  type LucideIcon
} from "lucide-react"

// Lavender expertise levels with left accent colors
const expertiseLevels = {
  expert: {
    label: "Expert",
    accent: "bg-gradient-to-b from-violet-400 to-purple-500",
    glow: "shadow-violet-400/30",
    badge: "bg-violet-500/10 text-violet-400 border-violet-400/30",
  },
  advanced: {
    label: "Advanced",
    accent: "bg-gradient-to-b from-purple-400 to-violet-400",
    glow: "shadow-purple-400/30",
    badge: "bg-purple-500/10 text-purple-400 border-purple-400/30",
  },
  proficient: {
    label: "Proficient",
    accent: "bg-gradient-to-b from-violet-300 to-purple-400",
    glow: "shadow-violet-300/20",
    badge: "bg-violet-400/10 text-violet-300 border-violet-300/30",
  },
}

interface Skill {
  name: string
  description: string
  icon: LucideIcon
  level: "expert" | "advanced" | "proficient"
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI / Machine Learning",
    skills: [
      { name: "Deep Learning", description: "Neural networks & representation learning", icon: Brain, level: "expert" },
      { name: "Reinforcement Learning", description: "Agents that learn by interacting", icon: Zap, level: "advanced" },
      { name: "Explainable AI", description: "Interpretable & trustworthy models", icon: Sparkles, level: "advanced" },
      { name: "Sequential / Time Series", description: "Forecasting & temporal modeling", icon: Clock, level: "advanced" },
      { name: "Recommendation Systems", description: "Personalized & contextual recommendations", icon: Target, level: "proficient" },
      { name: "Multi-Agent Systems", description: "Coordinated intelligent agents", icon: Users, level: "expert" },
      { name: "Transformer Models", description: "Attention-based architectures & LLMs", icon: Boxes, level: "advanced" },
    ],
  },
  {
    title: "Computer Vision & NLP",
    skills: [
      { name: "CNN / EfficientNet", description: "Convolutional neural networks", icon: Eye, level: "advanced" },
      { name: "Medical Imaging", description: "Clinical image analysis & diagnosis", icon: Stethoscope, level: "advanced" },
      { name: "Grad-CAM / LIME", description: "Model interpretability techniques", icon: ScanEye, level: "advanced" },
      { name: "BERT / BioBERT", description: "Pre-trained language models", icon: BotMessageSquare, level: "advanced" },
      { name: "Clinical NER", description: "Named entity recognition for healthcare", icon: FileType, level: "proficient" },
      { name: "Text Classification", description: "Document categorization & sentiment", icon: ScrollText, level: "advanced" },
      { name: "Edge AI Deployment", description: "On-device inference optimization", icon: CpuIcon, level: "proficient" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "PyTorch", description: "Deep learning framework", icon: Brain, level: "expert" },
      { name: "TensorFlow", description: "Production ML at scale", icon: Layers, level: "advanced" },
      { name: "scikit-learn", description: "Classical ML algorithms", icon: TrendingUp, level: "advanced" },
      { name: "pandas / NumPy", description: "Data manipulation & computation", icon: Database, level: "expert" },
      { name: "FastAPI", description: "Modern web APIs for ML", icon: Code2, level: "advanced" },
      { name: "Hugging Face", description: "Transformers & model hub", icon: BotMessageSquare, level: "advanced" },
      { name: "spaCy", description: "Industrial-strength NLP", icon: FileCode, level: "proficient" },
    ],
  },
  {
    title: "MLOps & Infrastructure",
    skills: [
      { name: "Docker", description: "Containerization & deployment", icon: Container, level: "advanced" },
      { name: "DVC", description: "Data version control", icon: GitBranch, level: "advanced" },
      { name: "Kubeflow", description: "ML workflows on Kubernetes", icon: LayoutGrid, level: "proficient" },
      { name: "ONNX", description: "Interoperable model format", icon: Binary, level: "proficient" },
      { name: "Distributed Training", description: "Multi-GPU & cluster training", icon: Network, level: "advanced" },
      { name: "Git", description: "Version control & collaboration", icon: GitBranch, level: "expert" },
    ],
  },
  {
    title: "Programming & Tools",
    skills: [
      { name: "Python", description: "Primary language for ML/AI", icon: Terminal, level: "expert" },
      { name: "SQL", description: "Database querying & management", icon: Database, level: "advanced" },
      { name: "JavaScript / React", description: "Frontend & interactive UIs", icon: Code2, level: "proficient" },
      { name: "C++", description: "Performance-critical systems", icon: Cpu, level: "proficient" },
      { name: "R", description: "Statistical computing", icon: BarChart3, level: "proficient" },
      { name: "Bash / Linux", description: "Command-line & automation", icon: Terminal, level: "advanced" },
    ],
  },
  {
    title: "Research & Analysis",
    skills: [
      { name: "Experimental Design", description: "Controlled study methodology", icon: FlaskConicalIcon, level: "advanced" },
      { name: "Statistical Analysis", description: "Hypothesis testing & inference", icon: BarChart3, level: "advanced" },
      { name: "Scientific Writing", description: "Publication & documentation", icon: PenTool, level: "advanced" },
      { name: "Data Visualization", description: "Charts & interactive plots", icon: PieChart, level: "advanced" },
      { name: "Reproducible Research", description: "Versioned & documented work", icon: FlaskConical, level: "advanced" },
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

        {/* Skills Grid - Vertical Cards with Lavender Accent */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <h3 className="text-sm font-semibold text-foreground/80 mb-4 pl-2 border-l-2 border-violet-300">
                {category.title}
              </h3>

              {/* Skill Cards */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => {
                  const levelStyle = getLevelStyle(skill.level)
                  const SkillIcon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      className="group relative flex items-stretch overflow-hidden rounded-xl bg-violet-950/5 border border-violet-200/20 hover:border-violet-300/40 hover:bg-violet-950/10 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ x: 4 }}
                    >
                      {/* Left Lavender Accent Bar */}
                      <div className={`w-1 ${levelStyle.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />
                      
                      {/* Content */}
                      <div className="flex-1 flex items-center gap-3 px-4 py-3">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-400/20 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                          <SkillIcon className="w-4 h-4 text-violet-400" />
                        </div>
                        
                        {/* Text Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-foreground group-hover:text-violet-200 transition-colors">
                              {skill.name}
                            </span>
                            {/* Level Badge */}
                            <span className={`text-[10px] px-1.5 py-0.5 rounded border ${levelStyle.badge}`}>
                              {levelStyle.label}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5 truncate">
                            {skill.description}
                          </p>
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
