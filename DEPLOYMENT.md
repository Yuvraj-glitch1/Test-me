# Deployment Guide

This guide covers deploying the Test-Me application to various platforms.

## Vercel Deployment (Recommended)

### Prerequisites
- Vercel account
- GitHub repository
- Grok AI API key

### Steps

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables**
   - In project settings, add:
     \`\`\`
     XAI_API_KEY=your_grok_api_key_here
     \`\`\`

3. **Deploy**
   - Vercel will automatically build and deploy
   - Your app will be available at `https://your-project.vercel.app`

### Build Configuration

The app uses Next.js 14 with the App Router. No additional build configuration is needed.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `XAI_API_KEY` | Grok AI API key for quiz generation | Yes |

## Performance Considerations

- **API Routes**: All AI processing happens server-side
- **Client-side State**: Quiz data is stored in sessionStorage
- **Caching**: Consider implementing Redis for production quiz caching
- **Rate Limiting**: Implement rate limiting for API endpoints in production

## Security

- API keys are server-side only
- No sensitive data stored client-side
- CORS is handled by Next.js automatically
- Consider implementing user authentication for production use

## Monitoring

- Use Vercel Analytics for performance monitoring
- Monitor API usage and costs
- Set up error tracking (Sentry recommended)

## Scaling

For high-traffic scenarios:
- Implement database storage instead of sessionStorage
- Add Redis caching for generated quizzes
- Consider CDN for static assets
- Implement proper error handling and retry logic
