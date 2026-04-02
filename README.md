# Prepwise — AI Mock Interview Platform

An on-demand AI-powered mock interview platform with real-time voice interaction and structured written feedback. Practice technical and behavioral interviews anytime, without scheduling.

**Live Demo** → *(add your deployed URL here)*

---

## What It Does

Most interview prep relies on static question banks or scheduling mock interviews with other people. Prepwise removes both constraints.

You select a role and interview type, and the platform generates a relevant question set via Google Gemini. A Vapi AI voice agent conducts the interview in real time — asking questions, listening to your responses, and following up naturally. When the session ends, you receive structured written feedback covering your answers, communication clarity, and areas to improve. Every session is saved so you can track your progress over time.

Key capabilities:
- **Real-time voice interviews** via Vapi AI — no typing, no scripts
- **Dynamic question generation** tailored to role and interview type (technical / behavioural / mixed)
- **Structured feedback** with consistent evaluation criteria across sessions
- **Session history** — all transcripts and feedback stored per user
- **Authentication** with Firebase Auth and secure Firestore rules
- **Dark/light mode** support

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript |
| Voice AI | Vapi AI (`@vapi-ai/web`) |
| LLM | Google Gemini (`@ai-sdk/google`) |
| Auth & Storage | Firebase Auth + Firestore |
| Styling | Tailwind CSS v4, Radix UI, shadcn/ui |
| Forms & Validation | React Hook Form + Zod |
| Notifications | Sonner |

---

## Project Structure
```
├── app/                  # Next.js App Router pages and API routes
├── components/           # Reusable UI components
├── constants/            # Interview types, question configs, feedback schemas
├── firebase/             # Firebase client and admin config
├── lib/                  # Utility functions, Vapi helpers, Gemini prompts
├── types/                # TypeScript interfaces
└── public/               # Static assets
```

---

## Running Locally

**Prerequisites:** Node.js 18+, a Firebase project, Vapi API key, Google Gemini API key
```bash
git clone https://github.com/VinayakMaharaj/jsm_mock_interview_platform.git
cd jsm_mock_interview_platform
yarn install
```

Create a `.env.local` file:
```env
# Firebase (client)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Firebase Admin (server)
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=

# Vapi AI
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Google Gemini
GOOGLE_GENERATIVE_AI_API_KEY=
```
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Design Decisions

**Why Vapi for voice?** Vapi handles the full WebRTC stack, turn detection, and interruption handling out of the box. Building this from scratch with raw WebSockets would have tripled the complexity without adding value.

**Why Firebase over a traditional backend?** For a solo project, Firebase Auth + Firestore gave me auth, real-time updates, and persistent storage without maintaining a separate server. The tradeoff is less query flexibility — acceptable here since the data model is simple.

**Why structured feedback schemas?** Early sessions produced inconsistent feedback that was hard to compare across attempts. Defining explicit evaluation criteria (communication clarity, technical accuracy, structure) and prompting Gemini against those criteria made feedback significantly more consistent and actionable.

---

## Author

**Vinayak Maharaj** — [LinkedIn](https://www.linkedin.com/in/vinayak-maharaj/) · [Portfolio](https://vinayakmaharaj.netlify.app/)
