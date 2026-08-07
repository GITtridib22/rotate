import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="container landing-container animate-pop">
      <div className="hero-section text-center">
        <div className="badge-glow">ABTalks Challenge</div>
        <h1 className="hero-title">
          60 Days to <span className="text-neon">Get Noticed.</span>
        </h1>
        <p className="hero-subtitle">
          Code daily. Build your streak. Prove your consistency to recruiters.
        </p>
      </div>

      <div className="timeline-section">
        <h2 className="section-title">How it Works</h2>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-node">1</div>
            <div className="timeline-content">
              <h3>Code Every Day</h3>
              <p>Pick a track and build something small every single day.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-node">2</div>
            <div className="timeline-content">
              <h3>Submit Proof</h3>
              <p>Push to GitHub and share your learnings on LinkedIn.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-node">3</div>
            <div className="timeline-content">
              <h3>Build a Streak</h3>
              <p>Create an undeniable public record of your consistency.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <Link href="/dashboard" className="btn-primary">
          Start Your Challenge
        </Link>
        <p className="cta-microcopy">No credit card. Just pure grit.</p>
      </div>
    </main>
  );
}
