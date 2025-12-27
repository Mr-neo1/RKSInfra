# RKS Infra - Modern IT Services Website

A production-ready, modern website for RKS Infra built with MVC architecture.

## 🏗️ Architecture

This project follows the **MVC (Model-View-Controller)** pattern:

- **Models** (`server/models/`): Data layer - handles business logic and data operations
- **Views** (`client/src/`): Presentation layer - React components for UI
- **Controllers** (`server/controllers/`): Control layer - handles requests and responses
- **Routes** (`server/routes/`): Route definitions that connect URLs to controllers

## 📁 Project Structure

```
RKSInfra-Web/
├── server/                 # Backend (MVC Architecture)
│   ├── controllers/        # Request handlers
│   ├── models/            # Data models and business logic
│   ├── routes/            # API route definitions
│   ├── middleware/        # Custom middleware
│   ├── utils/             # Utility functions
│   └── index.js           # Server entry point
├── client/                # Frontend (React)
│   ├── public/            # Static files
│   └── src/
│       ├── components/    # React components
│       ├── pages/        # Page components
│       ├── services/     # API services
│       ├── utils/        # Frontend utilities
│       └── App.js        # Main app component
├── .env.example          # Environment variables template
└── package.json          # Root package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install root dependencies:**
   ```bash
   npm install
   ```

2. **Install client dependencies:**
   ```bash
   cd client
   npm install
   cd ..
   ```

   Or use the convenience script:
   ```bash
   npm run install-all
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration.

### Development

Run both server and client in development mode:
```bash
npm run dev
```

Or run separately:
```bash
# Terminal 1 - Backend server
npm run server

# Terminal 2 - Frontend client
npm run client
```

- Backend API: http://localhost:5000
- Frontend App: http://localhost:3000

### Production Build

1. **Build the React app:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   NODE_ENV=production npm start
   ```

## 📡 API Endpoints

### Home
- `GET /api/home` - Get homepage data

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID

### Contact
- `POST /api/contact` - Submit contact form

### Portfolio
- `GET /api/portfolio` - Get all portfolio items
- `GET /api/portfolio/:id` - Get portfolio item by ID

### Health Check
- `GET /api/health` - Server health status

## 🔧 Configuration

### Email Setup (Optional)

To enable email notifications for contact form submissions:

1. Set `ENABLE_EMAIL=true` in `.env`
2. Configure SMTP settings:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=contact@rksinfra.com
   ```

### Contact Storage

Contacts are stored in memory by default. To persist to file:
- Set `SAVE_CONTACTS_TO_FILE=true` in `.env`
- Contacts will be saved to `server/data/contacts.json`

## 🛠️ Tech Stack

### Backend
- **Express.js** - Web framework
- **Node.js** - Runtime environment
- **Nodemailer** - Email service
- **Express Validator** - Input validation
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger

### Frontend
- **React** - UI library
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📝 Features

- ✅ Modern, responsive design
- ✅ MVC architecture
- ✅ RESTful API
- ✅ Contact form with validation
- ✅ Email notifications (optional)
- ✅ Production-ready structure
- ✅ Error handling
- ✅ Security middleware
- ✅ Environment-based configuration

## 🌐 Deployment

### Recommended Platforms

- **Vercel** - Frontend + Serverless functions
- **Heroku** - Full-stack deployment
- **AWS** - EC2 or Elastic Beanstalk
- **DigitalOcean** - App Platform or Droplets

### Environment Variables for Production

Make sure to set:
- `NODE_ENV=production`
- `PORT` (if not using default)
- Email configuration (if using email)
- `FRONTEND_URL` (for CORS)

## 📄 License

ISC

## 👥 Contact

For inquiries, visit www.rksinfra.com

