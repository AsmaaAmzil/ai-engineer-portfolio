"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, ExternalLink, FileText, Award, Clock } from "lucide-react"

const publications = [
  {
    title: "Interpretable Speech Emotion Recognition",
    status: "Published",
    venue: "Peer-reviewed Publication",
    abstract: "Constructed a multi-dataset SER benchmark; evaluated interpretable classifiers linking acoustic signal patterns to emotional states with robust feature representations.",
    tags: ["Affective Computing", "Acoustic Features", "Interpretable Models"],
    link: "#",
    year: "2025",
  },
  {
    title: "Cross-Domain Sequential Recommendation (CDSRec)",
    status: "Under Review",
    venue: "Journal Submission",
    abstract: "Modelled how individual-level preferences and attention patterns propagate across behavioural domains—directly relevant to studying how digital consumption habits transfer across platforms and contexts.",
    tags: ["Behavioural Dynamics", "Heterogeneous Preferences", "Attention Models"],
    link: "#",
    year: "2025",
  },
  {
    title: "Benchmarking Feature Selection for Interpretable ML",
    status: "Under Review",
    venue: "Journal Submission",
    abstract: "Evaluated filter, wrapper, and embedded methods under standardised protocols with emphasis on interpretability, stability, and actionable policy-relevant insights.",
    tags: ["SHAP", "XGBoost", "Model Interpretability"],
    link: "#",
    year: "2025",
  },
  {
    title: "Hybrid Clinical Named Entity Recognition",
    status: "Under Review",
    venue: "Conference Submission",
    abstract: "Hybrid clinical NER pipeline combining distant supervision with biomedical transformers for robust multi-source information extraction from clinical texts.",
    tags: ["NLP", "BioBERT/PubMedBERT", "Biomedical Text"],
    link: "#",
    year: "2025",
  },
  {
    title: "Hierarchical Deep Learning for Otoscopy Classification",
    status: "Under Review",
    venue: "Conference Submission",
    abstract: "Hierarchical CNN with interpretable mechanisms (Grad-CAM, LIME) for anatomically grounded, human-readable explanations in medical image diagnosis.",
    tags: ["Explainable AI", "EfficientNet", "Medical Imaging"],
    link: "#",
    year: "2025",
  },
]

export function ResearchSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="research" className="relative py-20 md:py-24 overflow-hidden" ref={ref}>
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
            Academic Work
          </motion.span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-foreground">Research & </span>
            <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Contributing to the scientific discourse through peer-reviewed publications 
            and ongoing research in AI, NLP, and interpretable machine learning.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {[
            { icon: Award, value: "1", label: "Published" },
            { icon: Clock, value: "4", label: "Under Review" },
            { icon: BookOpen, value: "5+", label: "Total Works" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-4 text-center glass rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <stat.icon className="w-5 h-5 text-violet-600 mx-auto mb-2" />
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              className="group relative p-5 glass rounded-xl hover:border-violet-300 transition-all duration-300 hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    pub.status === "Published"
                      ? "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20"
                      : "text-amber-400 bg-amber-400/10 border border-amber-400/20"
                  }`}
                >
                  {pub.status}
                </span>
                <span className="text-xs text-muted-foreground">{pub.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-violet-600 transition-colors">
                {pub.title}
              </h3>

              {/* Venue */}
              <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" />
                {pub.venue}
              </p>

              {/* Abstract */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                {pub.abstract}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs text-muted-foreground bg-secondary/50 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <motion.a
                href={pub.link}
                className="inline-flex items-center gap-1.5 text-sm text-violet-600 hover:text-violet-700 transition-colors"
                whileHover={{ x: 3 }}
              >
                Read Paper
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Research Interests */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-center mb-6 text-foreground">Research Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Multi-Agent Systems",
              "Emergent Behaviour Modeling",
              "Explainable AI",
              "Computational Drug Discovery",
              "Behavioural Dynamics",
              "Information Consumption Patterns",
              "Threshold & Tipping Dynamics",
              "Sequential Decision Making",
              "Biomedical NLP",
              "Interpretable Machine Learning",
            ].map((interest, index) => (
              <motion.span
                key={interest}
                className="px-4 py-2 text-sm font-medium text-muted-foreground bg-secondary/50 border border-border/50 rounded-full hover:border-violet-300 hover:text-violet-600 transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
