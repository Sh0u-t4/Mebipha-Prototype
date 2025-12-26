# Stage 1: Build stage (for potential future enhancements)
FROM nginx:1.27-alpine AS production

# Set metadata labels
LABEL maintainer="Mebipha E-commerce"
LABEL version="1.0"
LABEL description="Mebipha E-commerce website - Static site with Nginx"

# Create a non-root user for Nginx
RUN addgroup -g 1001 -S appgroup && \
    adduser -u 1001 -S appuser -G appgroup

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy entrypoint script
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Copy website files with proper ownership
COPY --chown=appuser:appgroup . /usr/share/nginx/html

# Remove unnecessary files from the container
RUN rm -f /usr/share/nginx/html/Dockerfile \
    /usr/share/nginx/html/docker-compose*.yml \
    /usr/share/nginx/html/.dockerignore \
    /usr/share/nginx/html/README.md

# Create nginx cache and log directories with proper permissions
RUN mkdir -p /var/cache/nginx/client_temp && \
    mkdir -p /var/cache/nginx/proxy_temp && \
    mkdir -p /var/cache/nginx/fastcgi_temp && \
    mkdir -p /var/cache/nginx/uwsgi_temp && \
    mkdir -p /var/cache/nginx/scgi_temp && \
    mkdir -p /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown -R appuser:appgroup /usr/share/nginx/html && \
    chown -R appuser:appgroup /var/cache/nginx && \
    chown -R appuser:appgroup /var/log/nginx && \
    chown -R appuser:appgroup /etc/nginx/conf.d && \
    chown -R appuser:appgroup /var/run/nginx.pid

# Install su-exec for user switching
RUN apk add --no-cache su-exec

# Expose port 8080 (non-privileged port)
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:8080/ || exit 1

# Use entrypoint script to setup permissions and start nginx
ENTRYPOINT ["/docker-entrypoint.sh"]
