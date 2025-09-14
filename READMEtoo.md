# Test-Me

A full-stack AI-powered quiz application built with Next.js, React, and Grok AI. Generate personalized quizzes on any topic with intelligent feedback and detailed explanations.

## Features

- **AI-Powered Quiz Generation**: Create quizzes on any topic using Grok AI
- **Customizable Difficulty**: Choose from Easy, Medium, or Hard difficulty levels
- **Interactive Quiz Interface**: Clean, responsive design with progress tracking
- **Intelligent Feedback**: Get personalized AI feedback based on your performance
- **Detailed Explanations**: Learn from mistakes with comprehensive explanations
- **Real-time Progress**: Track your progress with visual indicators and timers

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **AI Integration**: Grok AI (xAI) via AI SDK
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- Grok AI API key (XAI_API_KEY)

### Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables:
   \`\`\`bash
   XAI_API_KEY=your_grok_api_key_here
   \`\`\`

4. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Endpoints

### POST /api/generate-quiz

Generate a new quiz based on topic, difficulty, and number of questions.

**Request Body:**
\`\`\`json
{
  "topic": "Mathematics",
  "difficulty": "medium",
  "numQuestions": 5
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "quiz": {
    "questions": [
      {
        "id": 1,
        "question": "What is 2 + 2?",
        "options": ["3", "4", "5", "6"],
        "correctAnswer": 1,
        "explanation": "2 + 2 equals 4 because..."
      }
    ]
  },
  "sessionId": "quiz_1234567890_abc123"
}
\`\`\`

### POST /api/submit-quiz

Submit quiz answers and get results with AI feedback.

**Request Body:**
\`\`\`json
{
  "sessionId": "quiz_1234567890_abc123",
  "quiz": { /* quiz object */ },
  "answers": { "0": 1, "1": 2 },
  "topic": "Mathematics",
  "difficulty": "medium"
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "sessionId": "quiz_1234567890_abc123",
  "score": 80,
  "correctAnswers": 4,
  "totalQuestions": 5,
  "results": [/* detailed results */],
  "feedback": "Great job! You showed strong understanding...",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
\`\`\`

### GET /api/quiz-topics

Get predefined quiz topics organized by category.

**Response:**
\`\`\`json
{
  "success": true,
  "topics": [
    {
      "id": "math",
      "name": "Mathematics",
      "category": "Academic"
    }
  ],
  "groupedTopics": {
    "Academic": [/* topics */],
    "Technology": [/* topics */]
  }
}
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── api/
│   │   ├── generate-quiz/route.ts    # Quiz generation endpoint
│   │   ├── submit-quiz/route.ts      # Quiz submission endpoint
│   │   └── quiz-topics/route.ts      # Topics endpoint
│   ├── quiz/
│   │   ├── setup/page.tsx           # Quiz configuration page
│   │   ├── take/page.tsx            # Quiz taking interface
│   │   └── results/page.tsx         # Results and feedback page
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Landing page
│   └── globals.css                  # Global styles
├── components/
│   └── ui/                          # shadcn/ui components
├── lib/
│   └── utils.ts                     # Utility functions
└── README.md
\`\`\`

## Usage

1. **Start a Quiz**: Visit the homepage and click "Start Quiz"
2. **Configure Quiz**: Choose your topic, difficulty level, and number of questions
3. **Take Quiz**: Answer questions at your own pace with progress tracking
4. **View Results**: Get your score, AI feedback, and detailed explanations

## Customization

### Adding New Topics

Edit the `QUIZ_TOPICS` array in `/app/api/quiz-topics/route.ts`:

\`\`\`typescript
const QUIZ_TOPICS = [
  { id: "new-topic", name: "New Topic", category: "Custom" },
  // ... existing topics
]
\`\`\`

### Modifying AI Prompts

Update the prompts in `/app/api/generate-quiz/route.ts` and `/app/api/submit-quiz/route.ts` to customize AI behavior.

### Styling

The app uses a custom design system with emerald green as the primary color. Modify the color scheme in `globals.css` or component files.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For issues or questions, please open a GitHub issue or contact the development team.
