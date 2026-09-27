# Professional Portfolio Website

A modern, responsive portfolio website built with **Next.js 14+**, **TypeScript**, and **Tailwind CSS**. Features dark mode support, smooth animations, and SEO optimization.

## 🚀 Features

- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Dark Mode Support** - Seamless light/dark theme toggle
- ✅ **SEO Optimized** - Meta tags, Open Graph, robots.txt, sitemap
- ✅ **Smooth Animations** - Framer Motion for fluid interactions
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Production Ready** - Optimized build and deployment
- ✅ **Easy Customization** - Simple constants file to update content

## 📋 Sections

1. **Navbar** - Sticky navigation with dark mode toggle
2. **Hero** - Eye-catching introduction with CTA buttons
3. **About** - Personal bio and professional background
4. **Projects** - Showcase of featured projects with links
5. **Skills** - Categorized technical skills
6. **Contact** - Contact form and social media links
7. **Footer** - Quick links and copyright info

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Dark Mode**: next-themes
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready (or any Node.js host)

## 📦 Installation

1. **Extract the project**:
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   Update `.env.local` with your site URL:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
   ```

## 🚀 Getting Started

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Your Content

Edit `src/lib/constants.ts` to customize:

- **Site Config**: Title, description, metadata
- **Social Links**: GitHub, LinkedIn, Twitter, Email
- **Projects**: Add your featured projects with descriptions and links
- **Skills**: Update skill categories and items
- **About Text**: Personalize your bio and background
- **Navigation**: Modify navigation links

### Update Your Info

1. Replace "Lakshay Mohabhoi" references with your name
2. Update email in Contact section
3. Add your social media links
4. Update project details with your own work
5. Add your profile photo in `public/images/`

### Styling

- **Colors**: Customize theme colors in `src/app/globals.css`
- **Fonts**: Modify fonts in `src/app/layout.tsx` (using Geist fonts from Google Fonts)
- **Animations**: Adjust animation timings and effects in component files

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Home page (assembles all components)
│   ├── globals.css         # Global styles and animations
│   ├── sitemap.ts          # SEO sitemap
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About me section
│   ├── Projects.tsx        # Projects showcase
│   ├── ProjectCard.tsx     # Individual project card
│   ├── Skills.tsx          # Skills section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── lib/
│   └── constants.ts        # Site config, portfolio data, skills
└── types/
    └── index.ts            # TypeScript interfaces

public/
├── robots.txt              # SEO robots file
└── images/                 # Your project images and photos

.env.local                 # Environment variables (local)
.env.local.example         # Environment template
next.config.ts             # Next.js configuration
tailwind.config.ts         # Tailwind CSS config
tsconfig.json              # TypeScript config
package.json               # Dependencies
```

## 🎨 Dark Mode

Dark mode is automatically enabled based on system preferences. Users can toggle between themes using the button in the navbar.

The theme persists using localStorage via `next-themes`.

## 🌐 SEO

The portfolio includes:

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ robots.txt for search engines
- ✅ XML sitemap generation
- ✅ Structured data ready

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are fully responsive and tested across breakpoints.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel will auto-detect Next.js and configure build settings
5. Add environment variables in Vercel dashboard
6. Deploy with one click

### Deploy to Other Platforms

The project is compatible with any platform supporting Node.js:
- Netlify
- Railway
- Heroku
- DigitalOcean
- AWS

## 📧 Contact Form

The contact form is currently set up with a simulated submission. To integrate with an email service:

1. **Resend**: Uncomment and configure in `src/components/Contact.tsx`
2. **SendGrid**: Add API integration
3. **Mailgun**: Configure webhook
4. **Firebase**: Real-time database

## 🔍 Performance

- ✅ Optimized images with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Static generation where possible
- ✅ Minified CSS and JavaScript
- ✅ Fast build times with Turbopack

## 🐛 Troubleshooting

### Dark mode not persisting
- Clear browser cache and localStorage
- Check `next-themes` is properly installed
- Verify `suppressHydrationWarning` in html tag

### Icons not displaying
- Ensure lucide-react is installed: `npm install lucide-react`
- Verify icon names are correct (Lucide React specific)

### Build errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version compatibility (18+)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev)
- [next-themes](https://github.com/pacocoursey/next-themes)

## 📄 License

This project is open source and available for personal use.

## 🎉 Quick Start

1. Update your profile information in `src/lib/constants.ts`
2. Add your projects with descriptions and links
3. Add your skills and categories
4. Update social media links with your profiles
5. Add your portfolio images to `public/images/`
6. Test dark mode functionality with the theme toggle
7. Deploy to Vercel or your hosting platform
8. Set up a custom domain
9. Monitor SEO with Google Search Console

## 💡 Tips

- Add a profile photo in the About section
- Keep project descriptions concise and impactful
- Regularly update your projects and skills
- Monitor analytics with Google Analytics
- Use alt text for images for better SEO
- Test on multiple devices and browsers before deployment

---

**Built with ❤️ for your professional portfolio | CODSOFT Internship Task 1**
