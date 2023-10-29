from .base import *

DEBUG = True
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env(
    "DJANGO_SECRET_KEY",
    default="a9+qhaqgf*h!j0+&=#mey&u7ks%pt!13@=57dau0reqe3h2zd3",
)


ALLOWED_HOSTS = ["localhost", "0.0.0.0", "127.0.0.1"]


EMAIL_BACKEND = "djcelery_email.backends.CeleryEmailBackend"
EMAIL_HOST = env("EMAIL_HOST", default="mailhog")
EMAIL_PORT = env("EMAIL_PORT")
DEFAULT_FROM_EMAIL = "info@mytaxnetwork.com"
DOMAIN = env("DOMAIN")
SITE_NAME = "My Tax Network"

# CORS HEADERS
CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True
