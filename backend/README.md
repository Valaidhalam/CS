# T. Thulasi Raman Associates - Backend API

This repository contains the Node.js/Express backend for the T. Thulasi Raman Associates website. It handles contact forms, career applications, email notifications, WhatsApp alerts, and provides a protected admin API.

## Features
- **Public APIs**: Contact form and Careers form submission.
- **Admin APIs**: JWT-protected endpoints to manage queries.
- **Integrations**: Nodemailer (Email) and Twilio (WhatsApp).
- **Security**: Helmet, CORS, Rate Limiting, Joi Validation.
- **Database**: MongoDB with Mongoose ORM.

## Setup Instructions

### 1. Prerequisites
- Node.js (v16+)
- MongoDB connection string (Atlas or local)

### 2. Installation
```bash
npm install
```

### 3. Environment Configuration
Copy the `.env.example` file to `.env` and fill in your actual credentials.
```bash
cp .env.example .env
```

### 4. Running the Server
**Development Mode:**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

## API Endpoints

### Public Routes
- `POST /api/contact` - Submit contact enquiry
- `POST /api/careers` - Submit career application

### Admin Routes (Protected - requires `Authorization: Bearer <token>`)
- `POST /api/admin/auth/login` - Admin login
- `GET /api/admin/enquiries` - Get all enquiries
- `PATCH /api/admin/enquiries/:id` - Update enquiry status

## Deployment (Railway, Render, Vercel Serverless)
This Express application is stateless and connects to managed services (MongoDB, Twilio, SMTP). It is ready to be deployed to platforms like Railway or Render. 
1. Push this code to a Git repository.
2. Link the repository to your hosting service.
3. Add all variables from `.env` to the environment settings in your hosting provider's dashboard.
4. Deploy the application. The start command is `node server.js`.
