"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Lock, Send, X, Brain, Cpu, FlaskConical, Zap, Database, Activity } from "lucide-react"

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
        bg: "bg-violet-100",
        border: "border-violet-200",
        hoverBorder: "hover:border-violet-400",
        text: "text-violet-600",
        glow: "group-hover:shadow-violet-200",
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
        bg: "bg-purple-100",
        border: "border-purple-200",
        hoverBorder: "hover:border-purple-400",
        text: "text-purple-600",
        glow: "group-hover:shadow-purple-200",
      }
    default:
      return {
        bg: "bg-violet-100",
        border: "border-violet-200",
        hoverBorder: "hover:border-violet-400",
        text: "text-violet-600",
        glow: "group-hover:shadow-violet-200",
      }
  }
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<string>("")
  const [requestForm, setRequestForm] = useState({ name: "", email: "", message: "" })
  const [isRequestSent, setIsRequestSent] = useState(false)

  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  const handleRequestClick = (projectTitle: string) => {
    setSelectedProject(projectTitle)
    setIsRequestModalOpen(true)
    setIsRequestSent(false)
    setRequestForm({ name: "", email: "", message: "" })
  }

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with the request details
    const subject = encodeURIComponent(`Project Access Request: ${selectedProject}`)
    const body = encodeURIComponent(
      `Hi Asmaa,\n\n` +
      `I'd like to request access to view your project "${selectedProject}".\n\n` +
      `My Details:\n` +
      `Name: ${requestForm.name}\n` +
      `Email: ${requestForm.email}\n\n` +
      `Purpose/Context:\n${requestForm.message || "I'd like to learn more about this project."}\n\n` +
      `Best regards,\n${requestForm.name}`
    )
    window.location.href = `mailto:asmaaamzil19@gmail.com?subject=${subject}&body=${body}`
    setIsRequestSent(true)
    setTimeout(() => {
      setIsRequestModalOpen(false)
    }, 2000)
  }

  return (
    <section id="projects" className="relative py-20 md:py-24 overflow-hidden" ref={ref}>
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
            Featured Work
          </motion.span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-foreground">Projects & </span>
            <span className="gradient-text">Research</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
            <div className="group relative p-6 glass rounded-2xl border border-violet-200 hover:border-violet-400 transition-all duration-500 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 via-transparent to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-violet-100 border border-violet-200 flex items-center justify-center">
                      <featuredProject.icon className="w-6 h-6 text-violet-600" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-violet-600 uppercase tracking-wider">Featured Project</span>
                      <h3 className="text-xl font-bold text-foreground">{featuredProject.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-violet-600 bg-violet-50 border border-violet-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <motion.button
                      onClick={() => handleRequestClick(featuredProject.title)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-violet-500 text-white rounded-full hover:bg-violet-600 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Lock className="w-4 h-4" />
                      Request Access
                    </motion.button>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Lock className="w-3 h-3" />
                      <span>Private Project</span>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-violet-100 via-purple-50 to-violet-50 border border-violet-100">
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-violet-100 border border-violet-200 flex items-center justify-center"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <Brain className="w-10 h-10 text-violet-500" />
                      </motion.div>
                      <div className="text-2xl font-bold gradient-text">{featuredProject.impact}</div>
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
                  <motion.button
                    onClick={() => handleRequestClick(project.title)}
                    className="p-2 text-violet-600 hover:text-violet-700 hover:bg-violet-100 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    title="Request Access"
                  >
                    <Lock className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <span className={`text-xs font-medium ${colors.text} uppercase tracking-wider`}>
                      {project.subtitle}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 group-hover:text-violet-600 transition-colors">
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

                  {/* Request Access */}
                  <div className="pt-4 border-t border-border/50">
                    <motion.button
                      onClick={() => handleRequestClick(project.title)}
                      className="flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <Lock className="w-4 h-4" />
                      Request Access
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Private Repository Note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground bg-secondary/50 border border-border/50 rounded-full">
            <Lock className="w-3.5 h-3.5" />
            Projects are in private repositories — request access to view code
          </div>
        </motion.div>
      </div>

      {/* Request Access Modal */}
      {isRequestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsRequestModalOpen(false)}
          />
          <motion.div
            className="relative w-full max-w-md glass rounded-2xl border border-violet-200 shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/50">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Request Access</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{selectedProject}</p>
              </div>
              <button
                onClick={() => setIsRequestModalOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            {!isRequestSent ? (
              <form onSubmit={handleRequestSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={requestForm.name}
                    onChange={(e) => setRequestForm({ ...requestForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-violet-300 focus:ring-1 focus:ring-violet-300 transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={requestForm.email}
                    onChange={(e) => setRequestForm({ ...requestForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-violet-300 focus:ring-1 focus:ring-violet-300 transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Purpose / Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={requestForm.message}
                    onChange={(e) => setRequestForm({ ...requestForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-violet-300 focus:ring-1 focus:ring-violet-300 transition-all resize-none text-foreground placeholder:text-muted-foreground"
                    placeholder="I'm interested in this project for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-violet-500 text-white rounded-xl hover:bg-violet-600 transition-all"
                >
                  <Send className="w-4 h-4" />
                  Send Request
                </button>
              </form>
            ) : (
              <div className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Send className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Request Sent!</h4>
                <p className="text-sm text-muted-foreground">
                  An email has been prepared. Check your email client to send it.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  )
}
