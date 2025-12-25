# Fly.io Deployment Guide

## Prerequisites

1. **Install Fly CLI:**
   ```bash
   # Windows (PowerShell)
   powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"
   ```

2. **Sign up/Login to Fly.io:**
   ```bash
   fly auth signup
   # or if you have an account
   fly auth login
   ```

## Deployment Steps

### 1. Initialize Fly App

```bash
cd C:\Users\el_se\Projects\mernfronttoback
fly launch
```

When prompted:
- **App name**: Choose a unique name (e.g., `mern-social-network`)
- **Region**: Choose closest to you
- **PostgreSQL**: **NO** (we're using MongoDB Atlas)
- **Redis**: **NO**
- **Deploy now**: **NO** (we need to set secrets first)

### 2. Set Environment Variables

```bash
fly secrets set MONGO_URI="mongodb+srv://dentillo_admin:Mqqex1p3MHzqleAO@dentillo.naoyyds.mongodb.net/socialnetwork?retryWrites=true&w=majority&appName=Dentillo"

fly secrets set JWT_SECRET="mysecret"

fly secrets set NODE_ENV="production"

fly secrets set GITHUB_CLIENT_ID="20ce531e3592cf722003"

fly secrets set GITHUB_SECRET="3d1d277c8afeee5d6be4d7e1093c441923075f04"
```

### 3. Deploy

```bash
fly deploy
```

### 4. Open Your App

```bash
fly open
```

Your app will be live at: `https://your-app-name.fly.dev`

## Useful Commands

- **View logs**: `fly logs`
- **Check status**: `fly status`
- **Scale app**: `fly scale count 1`
- **SSH into app**: `fly ssh console`
- **List secrets**: `fly secrets list`
- **Restart app**: `fly apps restart`

## Updating Your App

When you make changes:

```bash
git add .
git commit -m "Your changes"
fly deploy
```

## Free Tier Limits

- 3 shared-cpu VMs
- 3GB total storage
- 160GB outbound data transfer/month
- Always-on (no sleep!)

## Troubleshooting

**Build fails:**
```bash
fly logs
```

**Database connection issues:**
```bash
fly secrets list  # Verify MONGO_URI is set
```

**Need to update secrets:**
```bash
fly secrets set MONGO_URI="new_connection_string"
```
