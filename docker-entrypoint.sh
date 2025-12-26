#!/bin/sh
set -e

# Create nginx cache and log subdirectories with proper permissions
# This runs as root before switching to appuser
mkdir -p /var/cache/nginx/client_temp
mkdir -p /var/cache/nginx/proxy_temp
mkdir -p /var/cache/nginx/fastcgi_temp
mkdir -p /var/cache/nginx/uwsgi_temp
mkdir -p /var/cache/nginx/scgi_temp
mkdir -p /var/log/nginx
touch /var/run/nginx.pid

# Create log files before testing (nginx -t needs to write to them)
touch /var/log/nginx/error.log
touch /var/log/nginx/access.log

# Set ownership for appuser
chown -R appuser:appgroup /var/cache/nginx
chown -R appuser:appgroup /var/log/nginx
chown -R appuser:appgroup /var/run/nginx.pid

# Test nginx configuration before starting (as root)
nginx -t

# Switch to appuser and start nginx
exec su-exec appuser nginx -g "daemon off;"

