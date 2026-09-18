"use client";

import React, { useState } from "react";

const navigationItems = [
  {
    id: "workspace",
    label: "工作台 (太阳)",
    texture: "/sun.jpg",
    theme: "theme-sun",
    planetClass: "sun-sphere",
  },
  {
    id: "apps",
    label: "应用台 (海王星)",
    texture: "/neptune.jpg",
    theme: "theme-neptune",
    planetClass: "neptune-sphere",
  },
];

export default function Home() {
  const [activeId, setActiveId] = useState("workspace");

  return (
    <main className="app-shell">
      {/* 动态黑洞背景视频层 */}
      <div className="bg-video-container" aria-hidden="true">
        <video
          className="bg-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/wallhaven-pojl63.png"
        >
          <source src="/blackhole_sim.mp4" type="video/mp4" />
        </video>
        <div className="bg-vignette" />
      </div>

      <aside className="sidebar" aria-label="太阳系天体功能导航">
        <nav className="sidebar-nav" aria-label="行星系统功能">
          {navigationItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                className={`planet-link ${item.theme}${isActive ? " is-active" : ""}`}
                href={`#${item.id}`}
                key={item.id}
                title={item.label}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActiveId(item.id)}
              >
                <img
                  src={item.texture}
                  alt={item.label}
                  className={`planet-texture ${item.planetClass}`}
                />
              </a>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <a
            className="settings-link"
            href="#settings"
            title="设置"
            aria-label="设置"
          >
            <span className="nav-icon" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </span>
          </a>
        </div>
      </aside>

      <section id={activeId} className="workspace" aria-label="内容区域" />
    </main>
  );
}
