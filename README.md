🏆 Digital Heroes: Performance with Purpose
Digital Heroes is a full-stack performance-tracking platform where competitive drive meets charitable impact. Built as part of a high-stakes trainee selection process, this application allows users to track their progress through a specialized "Rolling 5-Score" system while contributing a percentage of their subscription to global humanitarian causes.

📖 Table of Contents
Vision & Core Philosophy

Technical Architecture

Key Features & PRD Compliance

Database Logic

Installation & Setup

Security & Scalability

🎯 Vision & Core Philosophy
The Digital Heroes mission is to ensure that personal growth benefits the world. Unlike traditional leaderboards, our platform focuses on "Impact-First" design. We believe that tracking performance should be a transparent, rewarding, and charitable experience. Every feature is crafted to reduce "sports-centric" clutter and prioritize a minimalist, professional aesthetic that emphasizes social good.

💻 Technical Architecture
The application is built using a modern MERN-lite stack, transitioning from a serverless architecture to a custom-built Node.js/Express backend for greater control over business logic and data security.

Frontend: React.js (Vite) with Tailwind CSS for high-speed, responsive UI.

Animations: Framer Motion for smooth, professional transitions.

Backend: Node.js & Express RESTful API.

Database: MongoDB (Localhost/127.0.0.1) using Mongoose ODM.

Authentication: JWT (JSON Web Tokens) with bcryptjs password hashing.

✨ Key Features & PRD Compliance
This project was developed in strict accordance with the selection PRD to demonstrate engineering discipline:

👤 Subscription-Based Access (PRD Section 04)
A secure subscription gate ensures that only active "Digital Heroes" can participate in the monthly prize pool. The status is managed in real-time via the backend and reflected in the UI through conditional rendering.

📊 Rolling 5-Score Array (PRD Section 05)
A custom database algorithm ensures that only the five most recent scores are stored per user.

Middleware Logic: When a 6th score is added, the oldest entry is automatically pruned.

Integrity: Users are restricted from entering multiple scores for the same date (Section 10).

🌍 Charitable Integration (PRD Section 08)
Users select a verified charity during onboarding. The system is designed to allocate 10% of the $10 monthly fee to the chosen organization. This "Impact Tracker" is a core component of the user dashboard.

🎲 Winner Verification (PRD Section 07)
Transparency is paramount. The platform includes a dedicated "Winners" module where users can verify the legitimacy of monthly draws and view the collective charitable impact made by the community.

🛡️ Admin Control Panel (PRD Section 11)
A protected route accessible only to users with the admin flag. Admins can oversee user activity, manage charity listings, and monitor the health of the prize pool.

🗄️ Database Logic
The "Rolling 5" logic is implemented at the Schema level to ensure data consistency regardless of where the API is called from.

JavaScript
// Example of the Rolling 5 logic used in this project
userSchema.pre('save', function(next) {
  if (this.scores.length > 5) {
    this.scores.sort((a, b) => b.date - a.date);
    this.scores = this.scores.slice(0, 5);
  }
  next();
});
🚀 Installation & Setup
1. Prerequisites
Node.js (v18 or higher)

MongoDB installed and running locally on 127.0.0.1:27017

2. Backend Configuration
Bash
cd backend
npm install
# Create a .env file with:
# PORT=5000
# MONGO_URI=mongodb://127.0.0.1:27017/digital_heroes
# JWT_SECRET=your_secret_key
npm start
3. Frontend Configuration
Bash
cd frontend
npm install
npm run dev
🛡️ Security & Scalability
Data Protection: Sensitive environment variables are managed via .env and excluded from version control.

Auth Flow: Implements stateless JWT authentication to allow for future horizontal scaling.

UI/UX: The "Obsidian" dark theme is optimized for long-duration use, following the minimalist professional guidelines of the PRD.

🏁 Evaluation Checklist (Section 16)
[x] Submissions/Draws: Correctly handled via Score Array.

[x] Aesthetic: Minimalist, high-end "Impact" focus.

[x] Verification: Publicly accessible winner verification page.

[x] Security: Password hashing and protected API endpoints.
