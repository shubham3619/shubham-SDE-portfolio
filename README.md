# Shubham Sharma - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full-Stack MERN Developer.

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional UI
- **Responsive**: Fully responsive design for all devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Fast Performance**: Optimized for speed and performance
- **Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd shubham-portfollio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed.

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure your server to serve the `index.html` file for all routes (for client-side routing)

## 📁 Project Structure

```
shubham-portfollio/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer
│   │   └── sections/   # Hero, About, Skills, etc.
│   ├── data/           # Data files (personal info, projects, etc.)
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js     # Vite configuration
└── tailwind.config.js # Tailwind configuration
```

## 🎨 Customization

### Update Personal Information

Edit the data files in `src/data/`:
- `personalInfo.js` - Your personal details
- `skills.js` - Your skills
- `experience.js` - Work experience
- `projects.js` - Your projects
- `education.js` - Education details

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Add/Remove Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/App.jsx`

## 📝 Content Updates

To update content:
1. Edit the respective data files in `src/data/`
2. The changes will automatically reflect in the UI

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shubham Sharma**
- Email: shubhamsharma3619@gmail.com
- LinkedIn: [shubhamsharma2002](https://linkedin.com/in/shubhamsharma2002)
- GitHub: [shubham3619](https://github.com/shubham3619)

---

Built with ❤️ using React, Vite, and Tailwind CSS

