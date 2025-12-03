# Django-React Full Stack App

A full-stack web application combining Django backend with React frontend, featuring user authentication, note management, and a modern UI.

## Project Structure

```
Django-React-Full-Stack-App/
├── backend/                 # Django REST API
│   ├── api/                # Main application
│   │   ├── models.py       # Database models
│   │   ├── serializers.py  # DRF serializers
│   │   ├── views.py        # API views
│   │   ├── urls.py         # API routes
│   │   └── migrations/     # Database migrations
│   ├── backend/            # Django settings
│   │   ├── settings.py     # Configuration
│   │   ├── urls.py         # Main URL routing
│   │   ├── asgi.py         # ASGI config
│   │   └── wsgi.py         # WSGI config
│   ├── manage.py           # Django CLI
│   ├── db.sqlite3          # SQLite database
│   └── requirements.txt    # Python dependencies
│
└── frontend/               # React application
    ├── src/
    │   ├── components/     # Reusable components
    │   │   ├── Form.jsx
    │   │   ├── Note.jsx
    │   │   ├── ProtectedRoute.jsx
            ├── LoadingIndicator.jsx
    │   │   └── LogoutButton.jsx
    │   ├── pages/          # Page components
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   └── NotFound.jsx
    │   ├── styles/         # CSS files
    │   ├── api.js          # API client
    │   ├── constants.js    # App constants
    │   ├── App.jsx         # Main app component
    │   └── main.jsx        # Entry point
    ├── package.json        # Node dependencies
    ├── vite.config.js      # Vite configuration
    └── index.html          # HTML template
```

## Features

- **User Authentication** - Register and login functionality with JWT tokens
- **Protected Routes** - Secure pages that require authentication
- **Note Management** - Create, read, update, and delete notes
- **Responsive UI** - Modern, user-friendly interface with loading indicators
- **REST API** - Django REST Framework backend with proper serialization

## Tech Stack

### Backend
- **Django** - Web framework
- **Django REST Framework** - REST API development
- **SQLite** - Database
- **Python** - Backend language

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **JavaScript (ES6+)** - Frontend language

## Getting Started

### Prerequisites
- Python 3.8+
- Node.js 14+
- pip (Python package manager)
- npm or yarn (Node package manager)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
# On Windows
venv\Scripts\Activate.ps1
# On macOS/Linux
source venv/bin/activate
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
```

#### Using .env for backend (local / production)

This project supports environment variables via a `.env` file (backend) — there is a template at `backend/.env.example`.

1. Copy the example to create your local `.env`:

```bash
cd backend
copy .env.example .env  # on Windows
# or on macOS / Linux:
# cp .env.example .env
```

2. Edit `backend/.env` and set values for `SECRET_KEY`, `DEBUG`, `ALLOWED_HOSTS` and database variables.

Note: `backend/backend/settings.py` reads environment variables and will prefer `DB_*` values when provided (use Postgres in production).


4. Apply database migrations:
```bash
python manage.py migrate
```

5. Run the development server:
```bash
python manage.py runserver
```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install Node dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## API Endpoints

- `POST /api/register/` - Register a new user
- `POST /api/login/` - Login and get JWT token
- `GET /api/notes/` - Get all notes (requires authentication)
- `POST /api/notes/` - Create a new note (requires authentication)
- `PUT /api/notes/{id}/` - Update a note (requires authentication)
- `DELETE /api/notes/{id}/` - Delete a note (requires authentication)

## Development

### Running Both Servers Simultaneously

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate  # or venv\Scripts\Activate.ps1 on Windows
python manage.py runserver
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Building for Production

**Backend:**
```bash
python manage.py collectstatic
```

**Frontend:**
```bash
npm run build
```

## Authentication

The application uses JWT (JSON Web Token) authentication:
1. Users register or login to get a token
2. The token is stored in localStorage
3. Protected routes check for valid tokens
4. All API requests include the token in headers

## File Descriptions

### Key Frontend Files
- `api.js` - Axios client for API communication
- `constants.js` - Application constants and configuration
- `App.jsx` - Main application component with routing
- `ProtectedRoute.jsx` - Higher-order component for route protection

### Key Backend Files
- `models.py` - User and Note database models
- `serializers.py` - DRF serializers for data validation
- `views.py` - API view logic
- `urls.py` - URL routing configuration

## Troubleshooting

### Common Issues

**CORS Errors:**
- Ensure Django CORS settings are properly configured
- Check that frontend URL matches backend CORS whitelist

**API Connection Issues:**
- Verify backend is running on correct port
- Check API base URL in `frontend/src/api.js`
- Ensure firewall allows local connections

**Database Issues:**
- Run migrations: `python manage.py migrate`
- Clear database and start fresh: `rm db.sqlite3` then `python manage.py migrate`

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the repository.
