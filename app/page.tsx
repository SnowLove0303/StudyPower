const navigationItems = [
  { id: "workspace", label: "工作台", icon: "⌂", active: true },
  { id: "mind-map", label: "思维导图", icon: "◌", active: false },
  { id: "word", label: "Word 工作台", icon: "W", active: false },
  { id: "files", label: "我的文件", icon: "□", active: false },
];

export default function Home() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            S
          </span>
          <span className="brand-name">StudyPower</span>
        </div>

        <nav className="sidebar-nav" aria-label="主要功能">
          <p className="nav-label">工作空间</p>
          {navigationItems.map((item) => (
            <a
              className={`sidebar-link${item.active ? " is-active" : ""}`}
              href={`#${item.id}`}
              key={item.id}
              aria-current={item.active ? "page" : undefined}
            >
              <span className="nav-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="nav-text">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <a className="sidebar-link" href="#settings">
            <span className="nav-icon" aria-hidden="true">
              ⚙
            </span>
            <span className="nav-text">设置</span>
          </a>
        </div>
      </aside>

      <section id="workspace" className="workspace" aria-label="内容区域" />
    </main>
  );
}
