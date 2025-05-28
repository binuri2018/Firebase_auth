# Firebase Authentication Project

A modern web application demonstrating secure user authentication using Firebase Authentication services. This project showcases best practices for implementing user authentication in a React application.

## 🚀 Features

- User Authentication (Sign Up, Sign In, Sign Out)
- Email/Password Authentication
- Protected Routes
- Responsive Design
- Modern React Practices
- Firebase Integration

## 🛠️ Tech Stack

- React 19
- Firebase 11.7.1
- React Router DOM 7.6.0
- Create React App
- Modern JavaScript (ES6+)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- A Firebase account and project

## 🔧 Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd firebase-auth
```

2. Install dependencies:
```bash
npm install
```

3. Create a Firebase project:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication services
   - Add your web application to the project
   - Copy your Firebase configuration

4. Create a `.env` file in the root directory and add your Firebase configuration:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## 🚀 Getting Started

1. Start the development server:
```bash
npm start
```

2. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## 🔒 Security

This project implements several security best practices:
- Environment variables for sensitive data
- Protected routes for authenticated users
- Secure Firebase Authentication implementation
- CORS configuration for API security

## 📚 Project Structure

```
firebase-auth/
├── public/              # Static files
├── src/                 # Source files
│   ├── components/      # React components
│   ├── contexts/        # React contexts
│   ├── hooks/          # Custom hooks
│   ├── pages/          # Page components
│   ├── services/       # Firebase services
│   └── utils/          # Utility functions
├── .env                # Environment variables
├── package.json        # Project dependencies
└── README.md          # Project documentation
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Firebase Documentation
- React Documentation
- Create React App Team
