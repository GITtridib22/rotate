"use client";

import { useState } from "react";
import Link from "next/link";
import db from "@/data/mockDB.json";

export default function Dashboard() {
  // State for Demo Toggles (so judges can see edge cases on the live URL)
  const [demoState, setDemoState] = useState("default");

  // Derive mock data based on selected demo state
  let user = { ...db.user };
  
  if (demoState === "firstDay") {
    user.firstDayState = true;
    user.hasMissedDay = false;
    user.currentStreak = 0;
    user.totalCompleted = 0;
  } else if (demoState === "missedDay") {
    user.firstDayState = false;
    user.hasMissedDay = true;
  }

  const todayTask = db.todayTask;
  const progressPercentage = user.totalDays > 0 ? Math.round((user.totalCompleted / user.totalDays) * 100) : 0;

  return (
    <main className="container dashboard-container animate-pop pb-24">
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
          <p className="text-secondary mt-4">You have 0 days in your streak. Complete today's task to ignite it!</p>
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
            <p className="warning-text">⚠️ You missed a day! Don't let the streak die completely.</p>
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

      {/* Demo Controls Floating Panel for Judges */}
      <div className="demo-controls glass-card">
        <p className="demo-title">Judge Controls (Edge Cases)</p>
        <div className="demo-buttons">
          <button 
            className={`demo-btn ${demoState === "default" ? "active" : ""}`}
            onClick={() => setDemoState("default")}
          >
            Normal
          </button>
          <button 
            className={`demo-btn ${demoState === "missedDay" ? "active" : ""}`}
            onClick={() => setDemoState("missedDay")}
          >
            Missed Day
          </button>
          <button 
            className={`demo-btn ${demoState === "firstDay" ? "active" : ""}`}
            onClick={() => setDemoState("firstDay")}
          >
            Empty Profile
          </button>
        </div>
      </div>
    </main>
  );
}
