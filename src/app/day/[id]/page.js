"use client";

import { useState } from "react";
import Link from "next/link";
import db from "@/data/mockDB.json";

export default function ChallengeDay({ params }) {
  const { id } = params; // from /day/[id]
  const task = db.todayTask;
  
  const [githubUrl, setGithubUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!githubUrl || !linkedinUrl) return;
    
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <main className="container day-container animate-pop">
      <header className="day-header">
        <Link href="/dashboard" className="back-btn">
          ← Back to Dashboard
        </Link>
        <span className="badge-glow">Day {task.day}</span>
      </header>

      {isSuccess ? (
        <div className="success-screen animate-celebration">
          <div className="celebration-icon">✨🏆✨</div>
          <h1 className="hero-title text-neon">Proof Verified!</h1>
          <p className="hero-subtitle mb-4">You absolute legend. You shipped it.</p>
          <p className="text-secondary">Your streak is now {db.user.currentStreak + 1} days.</p>
          <Link href="/dashboard" className="btn-primary mt-6">
            Return to Dashboard
          </Link>
        </div>
      ) : (
        <>
          <article className="task-content">
            <h1 className="hero-title">{task.title}</h1>
            <div className="divider"></div>
            
            <section className="task-section">
              <h2 className="section-title">What needs to be built</h2>
              <p className="task-desc text-large">{task.description}</p>
            </section>
          </article>

          <section className="submission-zone glass-card">
            <h2 className="section-title">Submit Proof of Work</h2>
            <form onSubmit={handleSubmit} className="submit-form">
              <div className="input-group">
                <label>GitHub Commit URL</label>
                <input 
                  type="url" 
                  placeholder="https://github.com/..." 
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  required 
                  className="modern-input"
                />
              </div>
              
              <div className="input-group">
                <label>LinkedIn Post URL</label>
                <input 
                  type="url" 
                  placeholder="https://linkedin.com/..." 
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  required 
                  className="modern-input"
                />
              </div>

              <button 
                type="submit" 
                className={`btn-primary ${isSubmitting ? "loading" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Verifying..." : "Submit Proof"}
              </button>
            </form>
          </section>
        </>
      )}
    </main>
  );
}
