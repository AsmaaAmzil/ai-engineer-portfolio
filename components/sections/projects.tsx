"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Github, ExternalLink, Brain, Cpu, FlaskConical, Zap, Database, Activity } from "lucide-react"

const projects = [
  {
    title: "Computational Multi-Agent System",
    subtitle: "Final Year Research Project",
    description: "Built a mechanistic multi-agent system where heterogeneous agents with distinct decision logic interact to produce emergent, system-level hypotheses. Integrated 600+ tools and 15+ databases via MCP into structured pipelines delivering interpretable, policy-relevant outputs.",
    tags: ["Multi-Agent Systems", "React", "FastAPI", "Docker", "MCP"],
    icon: Brain,
    color: "cyan",
    impact: "600+ tools integrated",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "AI Battery Material Design",
    subtitle: "Materials Informatics",
    description: "Developed battery-aware diffusion models with reinforcement learning fine-tuning and topology-aware evaluation for iterative inorganic material optimization.",
    tags: ["Diffusion Models", "Reinforcement Learning", "Materials Science"],
    icon: Zap,
    color: "purple",
    impact: "Novel material candidates",
    github: "#",
  },
  {
    title: "Battery Management System",
    subtitle: "Research Internship",
    description: "Built predictive models for SoC, SoH, and RUL estimation with unsupervised fault detection. Deployed real-time embedded inference pipelines on ESP32 microcontrollers for battery health monitoring.",
    tags: ["Time Series", "RL", "Embedded Systems", "ESP32"],
    icon: Activity,
    color: "blue",
    impact: "Real-time deployment",
    github: "#",
  },
  {
    title: "Cross-Domain Sequential Recommendation",
    subtitle: "CDSRec - Under Review",
    description: "Designed a domain-aware sequential recommendation architecture using hierarchical embeddings and adaptive fusion to model cross-domain user behavior transfer.",
    tags: ["Recommender Systems", "Self-Attention", "Deep Learning"],
    icon: Database,
    color: "cyan",
    impact: "Cross-domain transfer",
    github: "#",
  },
  {
    title: "Hierarchical Otoscopy Classification",
    subtitle: "Medical AI",
    description: "Proposed a hierarchical CNN framework separating screening and disease classification, validated with Grad-CAM and LIME for anatomically meaningful explanations.",
    tags: ["EfficientNet", "Explainable AI", "Medical Imaging"],
    icon: FlaskConical,
    color: "purple",
    impact: "Interpretable diagnosis",
    github: "#",
  },
  {
    title: "Hybrid Clinical NER Pipeline",
    subtitle: "Biomedical NLP",
    description: "Designed a hybrid clinical NER pipeline combining distant supervision with BioBERT/PubMedBERT and multi-source biomedical annotations for robust entity extraction.",
    tags: ["NLP", "BioBERT", "PubMedBERT", "spaCy"],
    icon: Brain,
    color: "blue",
    impact: "Multi-source extraction",
    github: "#",
  },
  {
    title: "EfficientPlantNet",
    subtitle: "Edge AI for Agriculture",
    description: "Developed an edge-deployable CNN framework with interpretable mechanisms for maize disease classification and real-time precision agriculture applications.",
    tags: ["Edge AI", "Raspberry Pi", "Computer Vision"],
    icon: Cpu,
    color: "cyan",
    impact: "Edge deployment",
    github: "#",
  },
  {
    title: "Distributed PyTorch Training",
    subtitle: "MLOps Infrastructure",
    description: "Implemented reproducible distributed CNN training with PyTorch multiprocessing, DVC versioning, and Kubeflow orchestration for scalable ML pipelines.",
    tags: ["MLOps", "DVC", "Kubeflow", "Distributed Systems"],
    icon: Database,
    color: "purple",
    impact: "Scalable pipelines",
    github: "#",
  },
]

const getColorClasses = (color: string) => {
  switch (color) {
    case "cyan":
      return {
        bg: "bg-cyan/10",
        border: "border-cyan/20",
        hoverBorder: "hover:border-cyan/40",
        text: "text-cyan",
        glow: "group-hover:shadow-cyan/10",
      }
    case "purple":
      return {
        bg: "bg-purple/10",
        border: "border-purple/20",
        hoverBorder: "hover:border-purple/40",
        text: "text-purple",
        glow: "group-hover:shadow-purple/10",
      }
    case "blue":
      return {
        bg: "bg-blue/10",
        border: "border-blue/20",
        hoverBorder: "hover:border-blue/40",
        text: "text-blue",
        glow: "group-hover:shadow-blue/10",
      }
    default:
      return {
        bg: "bg-cyan/10",
        border: "border-cyan/20",
        hoverBorder: "hover:border-cyan/40",
        text: "text-cyan",
        glow: "group-hover:shadow-cyan/10",
      }
  }
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const featuredProject = projects.find(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
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
            Featured Work
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Projects & </span>
            <span className="gradient-text">Research</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of AI systems, research projects, and engineering work spanning 
            healthcare, energy, and computational modeling.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="group relative p-8 glass rounded-3xl border border-cyan/20 hover:border-cyan/40 transition-all duration-500 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                      <featuredProject.icon className="w-6 h-6 text-cyan" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-cyan uppercase tracking-wider">Featured Project</span>
                      <h3 className="text-2xl font-bold text-foreground">{featuredProject.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-cyan bg-cyan/10 border border-cyan/20 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <motion.a
                      href={featuredProject.github}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-cyan text-primary-foreground rounded-full hover:bg-cyan-glow transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.a>
                    {featuredProject.demo && (
                      <motion.a
                        href={featuredProject.demo}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-foreground bg-secondary border border-border rounded-full hover:bg-muted transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Visual */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-cyan/10 via-purple/5 to-blue/10 border border-border/50">
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-cyan/10 border border-cyan/20 flex items-center justify-center"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <Brain className="w-10 h-10 text-cyan" />
                      </motion.div>
                      <div className="text-3xl font-bold gradient-text">{featuredProject.impact}</div>
                      <div className="text-sm text-muted-foreground mt-1">Key Achievement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => {
            const colors = getColorClasses(project.color)
            return (
              <motion.div
                key={project.title}
                className={`group relative p-6 glass rounded-2xl ${colors.hoverBorder} transition-all duration-300 ${colors.glow} shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -6 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                    <project.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <motion.a
                    href={project.github}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <span className={`text-xs font-medium ${colors.text} uppercase tracking-wider`}>
                      {project.subtitle}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 group-hover:text-cyan transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs text-muted-foreground bg-secondary/50 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-xs text-muted-foreground bg-secondary/50 rounded">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Impact */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text', 'bg')}`} />
                      <span className="text-xs text-muted-foreground">{project.impact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="https://github.com/AsmaaAmzil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-cyan transition-colors"
            whileHover={{ x: 5 }}
          >
            View all projects on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
