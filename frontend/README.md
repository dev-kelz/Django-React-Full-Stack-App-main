# Django-React Full Stack App - Frontend

The React frontend for the Django-React full stack application, built with Vite for fast development and optimized production builds.

## Project Structure

```
frontend/
├── src/
│   ├── components/              # Reusable React components
│   │   ├── Form.jsx             # Form component for notes
│   │   ├── Note.jsx             # Individual note display
│   │   ├── ProtectedRoute.jsx   # Authentication wrapper
│   │   ├── LoadingIndicator.jsx # Loading spinner
│   │   └── LogoutButton.jsx     # User logout button
│   ├── pages/                   # Page-level components
│   │   ├── Home.jsx             # Main notes page
│   │   ├── Login.jsx            # Login page
│   │   ├── Register.jsx         # Registration page
│   │   └── NotFound.jsx         # 404 page
│   ├── styles/                  # CSS stylesheets
│   ├── api.js                   # API client for backend communication
│   ├── constants.js             # App-wide constants and configuration
│   ├── App.jsx                  # Root component with routing
│   └── main.jsx                 # Application entry point
├── package.json                 # Node dependencies and scripts
├── vite.config.js               # Vite build configuration
├── index.html                   # HTML template
└── README.md                    # This file
```

## Features

- **Fast Development** - Vite with HMR (Hot Module Replacement) for instant feedback
- **Modern React** - Latest React patterns and hooks
- **Responsive Design** - Mobile-friendly UI components
- **User Authentication** - Login/Register with JWT token support
- **Protected Routes** - Route-level access control
- **RESTful API Integration** - Seamless backend communication

## Tech Stack

- **React 18+** - UI library
- **Vite** - Next-generation build tool
- **JavaScript (ES6+)** - Frontend language
- **CSS** - Styling

## Getting Started

### Prerequisites

- Node.js 14+ installed
- npm or yarn package manager

### Installation

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the frontend directory (if needed):

```bash
VITE_API_URL=http://localhost:8000
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Building

Build for production:

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Key Files

- **`api.js`** - HTTP client for communicating with the Django backend
- **`constants.js`** - Centralized configuration and constants
- **`App.jsx`** - Main routing and authentication logic
- **`ProtectedRoute.jsx`** - Wrapper for authenticated-only pages

## API Endpoints

The frontend communicates with these backend endpoints:

- `POST /api/auth/register/` - User registration
- `POST /api/auth/login/` - User login
- `POST /api/auth/logout/` - User logout
- `GET /api/auth/user/` - Get current user info
- `GET /api/notes/` - List all user notes
- `POST /api/notes/` - Create new note
- `PUT /api/notes/{id}/` - Update note
- `DELETE /api/notes/{id}/` - Delete note

## Troubleshooting

**Issue: API connection errors**
- Ensure the Django backend is running on the configured `VITE_API_URL`
- Check CORS settings in `backend/settings.py`

**Issue: Hot module replacement not working**
- Restart the dev server: `npm run dev`
- Clear browser cache

## Further Reading

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Vite + React Guide](https://vitejs.dev/guide/)
