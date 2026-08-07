import Link from "next/link";
import fs from "fs";
import path from "path";

export default async function Dashboard() {
  // Read mock database
  const filePath = path.join(process.cwd(), "src/data/mockDB.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const db = JSON.parse(jsonData);

  const { user, todayTask } = db;
  const progressPercentage = Math.round((user.totalCompleted / user.totalDays) * 100);

  return (
    <main className="container dashboard-container animate-pop">
      <header className="dashboard-header">
        <div>
          <h1 className="greeting">Welcome back, {user.name}</h1>
          <p className="standing-badge">🏆 {user.standing}</p>
        </div>
        <img src={user.avatar} alt="Avatar" className="avatar" />
      </header>

      {user.firstDayState ? (
        <div className="glass-card streak-card empty-state text-center">
          <h2>Your Journey Begins Today</h2>
          <p>You have 0 days in your streak. Complete today's task to ignite it!</p>
        </div>
      ) : (
        <div className={`glass-card streak-card ${user.hasMissedDay ? "missed-day" : "active-streak"}`}>
          <div className="streak-stats">
            <div>
              <div className="streak-number text-neon">{user.currentStreak} <span className="text-small">Days</span></div>
              <div className="text-secondary">Current Streak</div>
            </div>
            <div className="progress-circle">
              {progressPercentage}%
            </div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <p className="progress-text">{user.totalCompleted} out of {user.totalDays} days completed</p>
          {user.hasMissedDay && (
            <p className="warning-text">You missed a day! Don't let the streak die completely.</p>
          )}
        </div>
      )}

      <div className="glass-card task-card">
        <h2 className="section-title">Today's Task: Day {todayTask.day}</h2>
        <h3 className="task-title">{todayTask.title}</h3>
        <p className="task-desc">{todayTask.description}</p>
        
        {todayTask.isCompleted ? (
          <div className="completed-badge">
            ✓ Task Completed
          </div>
        ) : (
          <Link href={`/day/${todayTask.day}`} className="btn-primary mt-4">
            View & Submit Task
          </Link>
        )}
      </div>
    </main>
  );
}
