
# Cloud Haven Host - Backend Integration Guide

This document provides information on how to integrate your backend server with the Cloud Haven Host frontend.

## API Configuration

The frontend is configured to communicate with a backend API at `https://api.cloudhaven.host`. You should update the base URL in `src/config/api.ts` to match your actual backend server.

## Required API Endpoints

The frontend expects the following API endpoints:

### Authentication

- `POST /auth/login` - Authenticate a user
- `POST /auth/register` - Register a new user
- `POST /auth/logout` - Log out a user

### Site Management

- `GET /sites` - Get all sites for the authenticated user
- `GET /sites/:id` - Get details for a specific site
- `POST /sites/create` - Create a new WordPress site
- `DELETE /sites/:id` - Delete a WordPress site

### Backups

- `GET /sites/:id/backups` - Get backups for a site
- `POST /sites/:id/backups/:backupId/restore` - Restore a site from a backup

### Server Operations

- `GET /server/stats` - Get server statistics
- `GET /containers` - Get container information
- `POST /containers/:id/restart` - Restart a container

### Security

- `GET /security/logs` - Get security logs
- `GET /sites/:id/ssl` - Get SSL certificates for a site
- `POST /sites/:id/ssl` - Request a new SSL certificate

### Billing

- `GET /billing/plans` - Get available plans
- `GET /billing/invoices` - Get invoices for the authenticated user
- `POST /billing/subscribe` - Subscribe to a plan

### Admin

- `GET /admin/users` - Get all users (admin only)
- `GET /admin/users/:id/sites` - Get sites for a specific user (admin only)
- `GET /admin/monitoring` - Get server monitoring data (admin only)
- `GET /admin/transactions` - Get transaction history (admin only)

## Authentication

The frontend expects the backend to use token-based authentication. When a user logs in or registers, the backend should return a token, which will be stored in localStorage and included in subsequent requests.

## Response Formats

### User Object
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "plan": "free | standard | enterprise",
  "sites": 0,
  "status": "active | suspended"
}
```

### Site Object
```json
{
  "id": "string",
  "domain": "string",
  "plan": "free | standard | enterprise",
  "status": "online | offline | provisioning | error",
  "createdAt": "string",
  "storage": {
    "used": 0,
    "total": 0
  },
  "bandwidth": {
    "used": 0,
    "total": 0
  }
}
```

### Backup Object
```json
{
  "id": "string",
  "siteId": "string",
  "created": "string",
  "size": 0,
  "type": "string"
}
```

### Server Stats Object
```json
{
  "cpu": [
    {
      "server": "string",
      "usage": 0
    }
  ],
  "memory": [
    {
      "server": "string",
      "usage": 0
    }
  ],
  "disk": [
    {
      "server": "string",
      "usage": 0
    }
  ]
}
```

## Backend Implementation Recommendations

1. Use Docker/Kubernetes for containerization
2. Implement server provisioning scripts using Ansible/Terraform
3. Use a database like PostgreSQL for user and site management
4. Implement WordPress site provisioning using shell scripts or Node.js
5. Set up Let's Encrypt for SSL certificate management
6. Configure Nginx as a reverse proxy
7. Use Redis for caching
8. Implement automatic backups with scheduled tasks

## Development Testing

For development purposes, you can create mock API responses that match the expected formats. This allows you to test the frontend without a fully functioning backend.

## Scaling Considerations

As your platform grows, consider:

1. Implementing a load balancer
2. Setting up database replication
3. Using a distributed file system for backups
4. Implementing a CDN for static assets
5. Setting up monitoring and alerting
