# RKS Infra - Modern IT Solutions Website

A production-ready, modern website for RKS Infra built with React, optimized for performance and easy content management.

## ✨ Features

- 🚀 **Production-Ready** - Optimized build, error handling, and performance
- 📱 **Fully Responsive** - Mobile-first design with Tailwind CSS
- ⚡ **Fast Loading** - Code splitting, lazy loading, and optimized assets
- 🎨 **Modern UI** - Beautiful, professional design with smooth animations
- 📝 **Easy Content Management** - Centralized content in `src/data/staticData.js`
- 🔧 **Configurable** - Easy-to-update constants in `src/config/constants.js`
- 🛡️ **Error Handling** - Error boundaries and graceful fallbacks
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and semantic HTML

## 🏗️ Project Structure

```
RKSInfra-Web/
├── public/                 # Static files
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── FAQ.js
│   │   ├── Loading.js     # Reusable loading component
│   │   ├── ErrorBoundary.js  # Error handling
│   │   └── SEO.js         # SEO optimization
│   ├── pages/             # Page components
│   │   ├── HomePage.js
│   │   ├── ServicesPage.js
│   │   ├── ContactPage.js
│   │   └── ...
│   ├── data/              # Content data
│   │   └── staticData.js  # All page content (easy to update!)
│   ├── services/          # API services
│   │   └── api.js         # API client (ready for backend)
│   ├── config/            # Configuration
│   │   └── constants.js   # Site config, navigation, etc.
│   ├── utils/             # Utilities
│   │   └── apiClient.js   # API client helper
│   ├── App.js             # Main app component
│   └── index.js           # Entry point
├── .env.example           # Environment variables template
├── vercel.json           # Vercel deployment config
├── tailwind.config.js    # Tailwind CSS configuration
├── CONTENT_MANAGEMENT_GUIDE.md  # How to update content
├── PRODUCTION_DEPLOYMENT.md     # Deployment guide
└── DEPLOYMENT_SUGGESTIONS.md    # Production recommendations
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd RKSInfra-Web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Updating Content

### Quick Updates

All content is centralized in `src/data/staticData.js`. See `CONTENT_MANAGEMENT_GUIDE.md` for detailed instructions.

**Common updates:**
- **Services:** Edit `staticData.services` array
- **Case Studies:** Edit `staticData.caseStudies` array
- **Homepage:** Edit `staticData.homeData` object
- **Site Info:** Edit `src/config/constants.js`

### Configuration

Update site-wide settings in `src/config/constants.js`:
- Contact information
- Social media links
- Navigation items
- SEO settings

## 🛠️ Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## 🚀 Deployment

### Vercel (Recommended)

Already configured! Just connect your GitHub repository to Vercel.

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

See `PRODUCTION_DEPLOYMENT.md` for detailed instructions.

### Other Platforms

See `PRODUCTION_DEPLOYMENT.md` for:
- Netlify deployment
- GitHub Pages
- Traditional hosting
- AWS/Azure/GCP

## 📚 Documentation

- **[CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md)** - How to update content easily
- **[PRODUCTION_DEPLOYMENT.md](./PRODUCTION_DEPLOYMENT.md)** - Step-by-step deployment guide
- **[DEPLOYMENT_SUGGESTIONS.md](./DEPLOYMENT_SUGGESTIONS.md)** - Production recommendations and best practices

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change color scheme:

```javascript
colors: {
  'deep-blue': '#0f172a',
  'security-blue': '#2563eb',
  'trust-green': '#10b981',
  // ... add your colors
}
```

### Styling

- Uses Tailwind CSS for styling
- Custom styles in `src/index.css`
- Component-specific styles in component files

## 🔧 Configuration

### Environment Variables

Create `.env` file (see `.env.example`):

```env
REACT_APP_SITE_URL=https://rksinfra.com
REACT_APP_WEB3FORMS_ACCESS_KEY=your-key
REACT_APP_USE_BACKEND_API=false
```

### API Configuration

Currently uses static data. To enable backend API:

1. Update `src/config/constants.js`:
   ```javascript
   API_CONFIG = {
     useBackendAPI: true,
     baseURL: 'https://your-api.com/api',
   }
   ```

2. Update API functions in `src/services/api.js`

## 🐛 Troubleshooting

### Build Errors

- Clear cache: `rm -rf node_modules/.cache`
- Reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be >= 18)

### Port Already in Use

Change port in `.env`:
```
PORT=3001
```

### Module Not Found

- Clear node_modules and reinstall
- Check import paths
- Verify all dependencies in package.json

## 📊 Performance

- **Code Splitting:** Pages are lazy-loaded
- **Image Optimization:** Ready for WebP and lazy loading
- **Bundle Size:** Optimized with tree-shaking
- **Caching:** Configured for production

## 🔒 Security

- Environment variables for sensitive data
- HTTPS recommended for production
- Error boundaries prevent crashes
- No sensitive data in code

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

[Your License Here]

## 📞 Support

For issues or questions:
- Email: contact@rksinfra.com
- Check documentation files
- Review code comments

## 🎯 Roadmap

- [ ] Backend API integration
- [ ] CMS integration for easier content management
- [ ] Blog section
- [ ] Client portal
- [ ] Advanced analytics

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies.**
