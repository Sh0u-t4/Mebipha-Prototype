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

# Copy website files with proper ownership
COPY --chown=appuser:appgroup . /usr/share/nginx/html

# Remove unnecessary files from the container
RUN rm -f /usr/share/nginx/html/Dockerfile \
    /usr/share/nginx/html/docker-compose*.yml \
    /usr/share/nginx/html/.dockerignore \
    /usr/share/nginx/html/README.md

# Set proper permissions
RUN chown -R appuser:appgroup /usr/share/nginx/html && \
    chown -R appuser:appgroup /var/cache/nginx && \
    chown -R appuser:appgroup /var/log/nginx && \
    chown -R appuser:appgroup /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R appuser:appgroup /var/run/nginx.pid

# Switch to non-root user
USER appuser

# Expose port 8080 (non-privileged port)
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:8080/ || exit 1

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
