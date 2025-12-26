# Docker Deployment Guide 
 
## Overview 
 
This project is containerized using Docker with production-ready best practices: 
 
- **Multi-stage builds** for optimized image size 
- **Non-root user** for enhanced security 
- **Health checks** for container monitoring 
- **Read-only filesystem** with tmpfs mounts 
- **Security headers** configured in Nginx 
- **Gzip compression** for better performance 
- **Caching strategies** for static assets 
 
## Prerequisites 
 
- Docker Desktop (Windows/Mac) or Docker Engine (Linux) 
- Docker Compose v3.8 or higher
 
## Quick Start 
 
### Production Mode 
 
```bash 
# Build and start the container 
docker-compose up -d 
 
# View logs 
docker-compose logs -f 
 
# Check health status 
docker-compose ps 
 
# Stop the container 
docker-compose down 
``` 
 
Access the website at: http://localhost:8080
 
### Development Mode 
 
Development mode includes live reloading with volume mounts: 
 
```bash 
# Start in development mode 
docker-compose -f docker-compose.dev.yml up -d 
 
# View logs 
docker-compose -f docker-compose.dev.yml logs -f 
 
# Stop 
docker-compose -f docker-compose.dev.yml down 
```
 
## Docker Commands 
 
### Building 
 
```bash 
# Build the image 
docker build -t mebipha-ecommerce:latest . 
 
# Build with no cache 
docker build --no-cache -t mebipha-ecommerce:latest . 
```
 
### Running 
 
```bash 
# Run container 
docker run -d -p 8080:8080 --name mebipha mebipha-ecommerce:latest 
 
# Run with custom port 
docker run -d -p 3000:8080 --name mebipha mebipha-ecommerce:latest 
```
 
### Managing Containers 
 
```bash 
# View running containers 
docker ps 
 
# View logs 
docker logs mebipha 
 
# Follow logs 
docker logs -f mebipha 
 
# Stop/Start/Restart 
docker stop mebipha 
docker start mebipha 
docker restart mebipha 
 
# Remove container 
docker rm mebipha 
docker rm -f mebipha 
```
 
## Security Features 
 
1. **Non-root User**: Container runs as appuser (UID 1001) 
2. **Read-only Filesystem**: Root filesystem is read-only with tmpfs 
3. **No New Privileges**: Prevents privilege escalation 
4. **Minimal Base Image**: Alpine Linux for smaller attack surface 
5. **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc. 
 
## Performance Optimizations 
 
1. **Gzip Compression**: Enabled for text and JavaScript 
2. **Static Asset Caching**: 1-year cache for images, fonts, CSS, JS 
3. **Worker Processes**: Auto-scaled based on CPU cores
 
## Troubleshooting 
 
### Container won't start 
Check logs: docker-compose logs 
Check port usage: netstat -ano | findstr :8080 
 
### Health check failing 
docker inspect mebipha-ecommerce 
Test manually: curl http://localhost:8080 
 
### Permission issues 
docker-compose build --no-cache 
docker-compose up -d
