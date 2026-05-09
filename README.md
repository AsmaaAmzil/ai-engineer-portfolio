# AI Engineer Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS, showcasing AI engineering projects, skills, and professional experience.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, TypeScript
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Dark/Light Theme**: Theme switching with next-themes
- **Interactive UI**: Beautiful UI components with Radix UI and shadcn/ui
- **Smooth Animations**: Framer Motion for engaging animations
- **GitHub Integration**: Dynamic GitHub stats and repositories display
- **Contact Form**: Functional contact form with form validation
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Technologies Used

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library

### UI Components
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Beautiful and accessible component library
- **Lucide React** - Icon library

### Development
- **pnpm** - Package manager
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/AsmaaAmzil/ai-engineer-portfolio.git
cd ai-engineer-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Build for production
```bash
pnpm build
pnpm start
```

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

## 📁 Project Structure

```
ai-engineer-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── sections/          # Page sections
│   ├── ui/               # UI components
│   └── ...               # Other components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/               # Static assets
├── styles/               # Additional styles
└── ...                   # Configuration files
```

## 🎨 Customization

### Personal Information
Update your personal information in the relevant components:
- `components/sections/hero.tsx` - Hero section
- `components/sections/about.tsx` - About section
- `components/sections/experience.tsx` - Work experience
- `components/sections/projects.tsx` - Project showcase
- `components/sections/skills.tsx` - Skills and technologies

### GitHub Integration
Add your GitHub username in the GitHub stats component:
```typescript
// components/sections/github-stats.tsx
const username = 'your-username';
```

### Theme Customization
Modify the theme in `tailwind.config.js` and `app/globals.css` to match your brand colors.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [Coming Soon]
- **Portfolio**: [Your Portfolio URL]
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

Built with ❤️ using Next.js and modern web technologies.
