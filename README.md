# 易經 I Ching Oracle

An interactive web application for consulting the ancient Chinese I Ching (Book of Changes) oracle. This divination system has been used for over 3,000 years for guidance and reflection.

## Features

- 🎴 Generate random I Ching hexagrams
- 📖 View all 64 hexagrams with their traditional meanings
- 🎨 Beautiful, modern web interface with traditional aesthetics
- 🐳 Docker support for easy deployment
- 🚀 Lightweight Node.js/Express backend

## Quick Start

### Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Running with Docker

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

2. **Open your browser:**
   Navigate to `http://localhost:3000`

### Running with Docker (manual)

1. **Build the image:**
   ```bash
   docker build -t iching .
   ```

2. **Run the container:**
   ```bash
   docker run -p 3000:3000 iching
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## How to Use

1. Clear your mind and focus on a question or situation you'd like guidance on
2. Click "Consult the Oracle" button
3. The system will generate a hexagram through random selection
4. Read the hexagram's name, description, and judgment
5. Reflect on how the wisdom applies to your question

## Deployment Options

### Deploy to Cloud Platforms

The app can be easily deployed to various platforms:

- **Heroku**: Use the included Dockerfile
- **Railway**: Connect your GitHub repo and deploy
- **DigitalOcean App Platform**: Deploy from GitHub
- **AWS ECS/Fargate**: Use the Docker image
- **Google Cloud Run**: Deploy the container

### Environment Variables

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment mode (production/development)

## Project Structure

```
iching/
├── public/              # Frontend files
│   ├── index.html      # Main HTML page
│   ├── style.css       # Styling
│   └── script.js       # Client-side JavaScript
├── hexagrams.js        # I Ching hexagram data (all 64)
├── server.js           # Express server
├── package.json        # Node.js dependencies
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
└── README.md          # This file
```

## About the I Ching

The I Ching (易經, Yìjīng) or "Book of Changes" is one of the oldest Chinese classical texts. It's based on a system of 64 hexagrams, each composed of six lines that can be either broken (yin) or unbroken (yang). Each hexagram represents a different situation or state of being, accompanied by ancient wisdom and guidance.

## Technology Stack

- **Backend**: Node.js with Express
- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Containerization**: Docker
- **Styling**: CSS3 with modern effects

## License

ISC

## Disclaimer

This application is for entertainment and reflection purposes only. The I Ching is a tool for contemplation and should not replace professional advice. 
