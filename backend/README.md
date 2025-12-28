# Django-React Full Stack App - Backend

The Django REST Framework backend for the Django-React full stack application, providing authentication and note management APIs.

## Project Structure

```
backend/
├── api/                         # Main Django app
│   ├── migrations/              # Database migrations
│   ├── admin.py                 # Django admin configuration
│   ├── apps.py                  # App configuration
│   ├── models.py                # Database models (User, Note)
│   ├── serializers.py           # DRF serializers for API
│   ├── views.py                 # API views and viewsets
│   ├── urls.py                  # API route definitions
│   └── tests.py                 # Unit tests
├── backend/                     # Django project settings
│   ├── settings.py              # Django configuration
│   ├── urls.py                  # Main URL routing
│   ├── asgi.py                  # ASGI configuration
│   ├── wsgi.py                  # WSGI configuration
│   └── middleware/              # Custom middleware
├── manage.py                    # Django management CLI
├── db.sqlite3                   # SQLite database
├── requirements.txt             # Python dependencies
├── .env.example                 # Environment variables template
└── README.md                    # This file
```

## Features

- **User Authentication** - JWT token-based authentication
- **User Registration** - Create new user accounts
- **Note Management** - Full CRUD operations for notes
- **REST API** - Clean, RESTful API endpoints
- **Database Models** - User and Note models with relationships
- **Admin Interface** - Django admin for managing data
- **Serialization** - DRF serializers for data validation and transformation

## Tech Stack

- **Django 3.2+** - Web framework
- **Django REST Framework** - REST API development
- **SQLite** - Database (development)
- **Python 3.8+** - Backend language
- **Django Simple JWT** - JWT authentication

## Getting Started

### Prerequisites

- Python 3.8+ installed
- pip (Python package manager)
- Virtual environment (recommended)

### Installation

1. Navigate to the backend directory:

```bash
cd backend
```

2. Create and activate a virtual environment:

```bash
# Windows
python -m venv venv
venv\Scripts\Activate.ps1

# macOS/Linux
python -m venv venv
source venv/bin/activate
```

3. Install Python dependencies:

```bash
pip install -r requirements.txt
```

4. Create a `.env` file from the template (if applicable):

```bash
cp .env.example .env
```

### Database Setup

Run database migrations:

```bash
python manage.py migrate
```

Create a superuser for admin access:

```bash
python manage.py createsuperuser
```

### Running the Server

Start the development server:

```bash
python manage.py runserver
```

The API will be available at `http://localhost:8000`.

Access the admin panel at `http://localhost:8000/admin/`.

## API Endpoints

### Authentication

- `POST /api/auth/register/` - Register a new user
  ```json
  {
    "username": "john",
    "email": "john@example.com",
    "password": "securepass123"
  }
  ```

- `POST /api/auth/login/` - Login and get JWT token
  ```json
  {
    "username": "john",
    "password": "securepass123"
  }
  ```

- `POST /api/auth/logout/` - Logout (invalidate token)

- `GET /api/auth/user/` - Get current user info (requires authentication)

### Notes

- `GET /api/notes/` - List all user notes (requires authentication)

- `POST /api/notes/` - Create a new note (requires authentication)
  ```json
  {
    "title": "My Note",
    "content": "Note content here"
  }
  ```

- `GET /api/notes/{id}/` - Get a specific note (requires authentication)

- `PUT /api/notes/{id}/` - Update a note (requires authentication)
  ```json
  {
    "title": "Updated Title",
    "content": "Updated content"
  }
  ```

- `DELETE /api/notes/{id}/` - Delete a note (requires authentication)

## Key Files

- **`models.py`** - Defines `User` and `Note` database models
- **`serializers.py`** - DRF serializers for validation and data conversion
- **`views.py`** - API views and viewsets handling requests
- **`urls.py`** - URL routing for API endpoints
- **`settings.py`** - Django configuration and installed apps

## Environment Variables

Create a `.env` file with the following variables:

```
DEBUG=True
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=sqlite:///db.sqlite3
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

## CORS Configuration

Ensure CORS is properly configured in `settings.py` to allow requests from your frontend:

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",  # Vite dev server
    "http://localhost:3000",  # Alternative port
]
```

## Running Tests

Execute the test suite:

```bash
python manage.py test
```

## Deployment

For production deployment:

1. Set `DEBUG=False` in `.env`
2. Configure `ALLOWED_HOSTS`
3. Use a production database (PostgreSQL, MySQL)
4. Set up proper `SECRET_KEY`
5. Configure CORS for your production domain
6. Use a production WSGI server (Gunicorn, uWSGI)

See `Procfile` for deployment configuration.

## Troubleshooting

**Issue: Database errors**
- Run migrations: `python manage.py migrate`
- Check database file permissions

**Issue: CORS errors**
- Verify frontend URL is in `CORS_ALLOWED_ORIGINS`
- Check browser console for specific error

**Issue: Authentication failures**
- Ensure JWT token is sent in Authorization header
- Verify token hasn't expired
- Check user credentials

## Further Reading

- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Django Simple JWT](https://github.com/jpadilla/django-rest-framework-simplejwt)
- [CORS in Django](https://github.com/adamchainz/django-cors-headers)
