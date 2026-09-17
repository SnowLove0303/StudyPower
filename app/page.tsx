"use client";

import type { FormEvent, KeyboardEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type Shortcut = {
  id: string;
  name: string;
  url: string;
  category: string;
  description: string;
};

const STORAGE_KEY = "studypower-shortcuts";

const DEFAULT_SHORTCUTS: Shortcut[] = [
  {
    id: "google",
    name: "Google",
    url: "https://www.google.com",
    category: "搜索",
    description: "快速搜索学习资料",
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com",
    category: "开发",
    description: "查看代码与项目仓库",
  },
  {
    id: "bilibili",
    name: "哔哩哔哩",
    url: "https://www.bilibili.com",
    category: "学习",
    description: "发现课程与学习视频",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    url: "https://chatgpt.com",
    category: "AI",
    description: "整理思路与解决问题",
  },
];

function createId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function readStoredShortcuts() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) return null;

    const validShortcuts = parsed.filter(
      (item): item is Shortcut =>
        typeof item === "object" &&
        item !== null &&
        typeof item.id === "string" &&
        typeof item.name === "string" &&
        typeof item.url === "string" &&
        typeof item.category === "string" &&
        typeof item.description === "string" &&
        isHttpUrl(item.url),
    );

    return validShortcuts;
  } catch {
    return null;
  }
}

export default function HomePage() {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>(DEFAULT_SHORTCUTS);
  const [query, setQuery] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [formError, setFormError] = useState("");
  const [form, setForm] = useState({
    name: "",
    url: "",
    category: "学习",
    description: "",
  });
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedShortcuts = readStoredShortcuts();
    if (storedShortcuts) setShortcuts(storedShortcuts);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(shortcuts));
    }
  }, [isHydrated, shortcuts]);

  useEffect(() => {
    const focusSearch = (event: globalThis.KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if (event.key === "/" && !isTyping) {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };

    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, []);

  const filteredShortcuts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return shortcuts;

    return shortcuts.filter((shortcut) =>
      [shortcut.name, shortcut.url, shortcut.category, shortcut.description]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query, shortcuts]);

  const openShortcut = (shortcut: Shortcut) => {
    window.open(shortcut.url, "_blank", "noopener,noreferrer");
  };

  const handleSearchKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && filteredShortcuts[0]) {
      event.preventDefault();
      openShortcut(filteredShortcuts[0]);
    }
  };

  const handleAddShortcut = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = form.name.trim();
    const url = form.url.trim();
    const category = form.category.trim();
    const description = form.description.trim() || "快速打开常用入口";

    if (!name || !url || !category) {
      setFormError("请填写名称、网址和分类");
      return;
    }

    if (!isHttpUrl(url)) {
      setFormError("请输入有效的 HTTP 或 HTTPS 地址");
      return;
    }

    setShortcuts((current) => [
      ...current,
      { id: createId(), name, url, category, description },
    ]);
    setForm({ name: "", url: "", category: "学习", description: "" });
    setFormError("");
    setIsFormOpen(false);
  };

  const removeShortcut = (id: string) => {
    setShortcuts((current) => current.filter((shortcut) => shortcut.id !== id));
  };

  return (
    <>
      <nav className="navigation" aria-label="主导航">
        <a className="brand" href="/">
          StudyPower
        </a>
      </nav>

      <main className="launcher-shell">
        <section className="launcher-header" aria-labelledby="launcher-title">
          <div>
            <p className="eyebrow">STUDYPOWER</p>
            <h1 id="launcher-title">快速启动器</h1>
            <p className="subtitle">把常用入口放在这里，搜索后按 Enter 即可打开。</p>
          </div>
          <button className="add-button" type="button" onClick={() => setIsFormOpen(true)}>
            <span aria-hidden="true">+</span>
            新增快捷方式
          </button>
        </section>

        <section className="search-section" aria-label="搜索快捷方式">
          <label className="search-box">
            <span className="search-icon" aria-hidden="true">⌕</span>
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="搜索名称、网址或分类"
              aria-label="搜索名称、网址或分类"
            />
            <kbd>/</kbd>
          </label>
        </section>

        {isFormOpen && (
          <section className="form-panel" aria-label="新增快捷方式">
            <div className="form-heading">
              <div>
                <p className="eyebrow">NEW SHORTCUT</p>
                <h2>新增快捷方式</h2>
              </div>
              <button
                className="close-button"
                type="button"
                onClick={() => {
                  setIsFormOpen(false);
                  setFormError("");
                }}
                aria-label="关闭新增快捷方式"
              >
                ×
              </button>
            </div>
            <form className="shortcut-form" onSubmit={handleAddShortcut}>
              <label>
                名称
                <input
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  placeholder="例如：我的课程"
                  autoFocus
                />
              </label>
              <label>
                网址
                <input
                  value={form.url}
                  onChange={(event) => setForm({ ...form, url: event.target.value })}
                  placeholder="https://example.com"
                  type="url"
                />
              </label>
              <label>
                分类
                <input
                  value={form.category}
                  onChange={(event) => setForm({ ...form, category: event.target.value })}
                  placeholder="例如：学习"
                />
              </label>
              <label>
                描述 <span>（可选）</span>
                <input
                  value={form.description}
                  onChange={(event) => setForm({ ...form, description: event.target.value })}
                  placeholder="一句话说明这个入口"
                />
              </label>
              {formError && <p className="form-error" role="alert">{formError}</p>}
              <div className="form-actions">
                <button
                  className="cancel-button"
                  type="button"
                  onClick={() => {
                    setIsFormOpen(false);
                    setFormError("");
                  }}
                >
                  取消
                </button>
                <button className="submit-button" type="submit">保存快捷方式</button>
              </div>
            </form>
          </section>
        )}

        <section className="shortcut-section" aria-live="polite">
          <div className="section-heading">
            <h2>我的入口</h2>
            <span>{filteredShortcuts.length} 个快捷方式</span>
          </div>

          {filteredShortcuts.length > 0 ? (
            <div className="shortcut-grid">
              {filteredShortcuts.map((shortcut) => (
                <article className="shortcut-card" key={shortcut.id}>
                  <a
                    className="shortcut-open"
                    href={shortcut.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`打开 ${shortcut.name}`}
                  >
                    <span className="shortcut-icon" aria-hidden="true">
                      {shortcut.name.slice(0, 1).toUpperCase()}
                    </span>
                    <span className="shortcut-copy">
                      <strong>{shortcut.name}</strong>
                      <small>{shortcut.description}</small>
                      <span className="shortcut-category">{shortcut.category}</span>
                    </span>
                    <span className="open-arrow" aria-hidden="true">↗</span>
                  </a>
                  <button
                    className="delete-button"
                    type="button"
                    onClick={() => removeShortcut(shortcut.id)}
                    aria-label={`删除 ${shortcut.name}`}
                  >
                    ×
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span className="empty-icon" aria-hidden="true">⌕</span>
              <strong>没有找到匹配的快捷方式</strong>
              <span>试试其他关键词，或新增一个入口。</span>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
