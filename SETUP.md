# Setup Guide - RKS Infra Website

## Quick Start

### 1. Install Dependencies

```bash
# Install root dependencies (backend)
npm install

# Install client dependencies (frontend)
cd client
npm install
cd ..
```

Or use the convenience script:
```bash
npm run install-all
```

### 2. Environment Configuration

Copy the example environment file:
```bash
cp .env.example .env
```

Edit `.env` with your settings:
- `PORT`: Backend server port (default: 5000)
- `NODE_ENV`: Environment (development/production)
- Email settings (optional): Configure if you want email notifications

### 3. Run Development Server

```bash
# Run both backend and frontend
npm run dev
```

Or run separately:
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
cd client && npm start
```

### 4. Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Health Check: http://localhost:5000/api/health

## Project Structure

```
RKSInfra-Web/
├── server/                    # Backend (MVC)
│   ├── controllers/          # Request handlers
│   │   ├── homeController.js
│   │   ├── serviceController.js
│   │   ├── contactController.js
│   │   └── portfolioController.js
│   ├── models/               # Data models
│   │   ├── homeModel.js
│   │   ├── serviceModel.js
│   │   ├── contactModel.js
│   │   └── portfolioModel.js
│   ├── routes/               # API routes
│   │   ├── homeRoutes.js
│   │   ├── serviceRoutes.js
│   │   ├── contactRoutes.js
│   │   └── portfolioRoutes.js
│   ├── middleware/           # Custom middleware
│   ├── utils/                # Utilities
│   └── index.js              # Server entry
├── client/                    # Frontend (React)
│   ├── public/               # Static files
│   └── src/
│       ├── components/       # Reusable components
│       │   ├── Navbar.js
│       │   └── Footer.js
│       ├── pages/            # Page components
│       │   ├── HomePage.js
│       │   ├── ServicesPage.js
│       │   ├── PortfolioPage.js
│       │   └── ContactPage.js
│       ├── services/         # API services
│       │   └── api.js
│       └── App.js            # Main app
└── package.json              # Root dependencies
```

## API Endpoints

### Home
- `GET /api/home` - Get homepage data

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID

### Contact
- `POST /api/contact` - Submit contact form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "subject": "Inquiry",
    "message": "Hello..."
  }
  ```

### Portfolio
- `GET /api/portfolio` - Get all portfolio items
- `GET /api/portfolio/:id` - Get portfolio item by ID

## Customization

### Update Company Information

1. **Contact Details**: Edit `client/src/pages/ContactPage.js`
2. **Services**: Edit `server/models/serviceModel.js`
3. **Portfolio**: Edit `server/models/portfolioModel.js`
4. **Homepage Content**: Edit `server/models/homeModel.js`
5. **Stats**: Edit stats in `server/models/homeModel.js`

### Styling

The project uses Tailwind CSS. Customize colors in `client/tailwind.config.js`.

### Email Configuration

To enable email notifications:

1. Set `ENABLE_EMAIL=true` in `.env`
2. Configure SMTP settings:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=contact@rksinfra.com
   ```

For Gmail, you'll need to:
- Enable 2-factor authentication
- Generate an App Password (not your regular password)

## Production Build

1. **Build React app:**
   ```bash
   npm run build
   ```

2. **Set environment:**
   ```bash
   NODE_ENV=production
   ```

3. **Start server:**
   ```bash
   npm start
   ```

The server will serve the built React app from `client/build/`.

## Database Integration (Future)

Currently, data is stored in memory. To add a database:

1. Install database driver (e.g., `mongoose` for MongoDB, `pg` for PostgreSQL)
2. Update models in `server/models/` to use database
3. Add connection configuration in `server/index.js`

## Troubleshooting

### Port Already in Use
Change the port in `.env`:
```
PORT=5001
```

### CORS Issues
Update `FRONTEND_URL` in `.env` to match your frontend URL.

### Email Not Sending
- Check SMTP credentials
- Verify `ENABLE_EMAIL=true`
- Check server logs for errors

## Next Steps

- [ ] Add database (MongoDB/PostgreSQL)
- [ ] Add authentication (if needed)
- [ ] Add admin panel
- [ ] Set up CI/CD
- [ ] Configure domain (www.rksinfra.com)
- [ ] Add SSL certificate
- [ ] Set up analytics

