# A container for the LISTINGS COLLECTOR only.
#
# The admin panel is not meant to run here. It is designed to run on your own
# computer (see ../admin.sh), and the local-only guard in app/local_guard.py
# refuses admin requests from anywhere but loopback — which, inside a container
# reached from outside, means all of them. That is deliberate.
#
# Use this image only if you want the jobs and events API hosted somewhere.
# Most deployments do not need it: the GitHub Action already refreshes the
# feeds and commits them.

FROM python:3.12-slim

WORKDIR /srv
ENV PYTHONUNBUFFERED=1 PYTHONDONTWRITEBYTECODE=1

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app ./app

# The database and the exported JSON live here; mount a volume over it so they
# survive a redeploy.
VOLUME ["/srv/data"]
ENV QA_DB=/srv/data/feed.sqlite3 \
    QA_EXPORT_DIR=/srv/data \
    QA_MEDIA_DIR=/srv/data/media \
    # A container has to listen on all interfaces to be reachable at all; the
    # admin guard is what keeps the panel private, not the bind address.
    QA_HOST=0.0.0.0

EXPOSE 8000
HEALTHCHECK --interval=5m --timeout=10s --start-period=90s \
  CMD python -c "import urllib.request,sys; sys.exit(0 if urllib.request.urlopen('http://127.0.0.1:8000/api/health',timeout=8).status==200 else 1)"

CMD ["python", "-m", "app.cli", "serve"]
