"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function ContactDock({ open = false, onClose = () => {} }) {
  const panelRef = useRef(null);
  const lastActiveRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // Gmail-like minimize state
  const [minimized, setMinimized] = useState(false);

  // Simple controlled form (keeps UX enterprise-grade)
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  // Avoid Next.js hydration mismatch by only portaling after mount
  useEffect(() => setMounted(true), []);

  // When opening fresh, start un-minimized
  useEffect(() => {
    if (open) setMinimized(false);
  }, [open]);

  const isExpanded = open && !minimized;

  // ✅ SINGLE scroll lock (prevents jump + no scrollbar-padding gap)
  useEffect(() => {
    if (!mounted) return;

    const body = document.body;

    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    if (isExpanded) {
      lastActiveRef.current = document.activeElement;

      const scrollY = window.scrollY || window.pageYOffset || 0;
      body.dataset.jfScrollY = String(scrollY);

      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      body.style.overflow = "hidden";
    } else {
      const y = parseInt(body.dataset.jfScrollY || "0", 10);
      delete body.dataset.jfScrollY;

      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;

      if (y) window.scrollTo(0, y);
    }

    return () => {
      const y = parseInt(body.dataset.jfScrollY || "0", 10);
      delete body.dataset.jfScrollY;

      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;

      if (y) window.scrollTo(0, y);
    };
  }, [isExpanded, mounted]);

  // ✅ Escape key close (expanded closes; minimized closes too)
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // ✅ Focus panel on expand; restore focus on close
  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => panelRef.current?.focus?.(), 0);
    } else if (!open) {
      const el = lastActiveRef.current;
      if (el && typeof el.focus === "function") {
        setTimeout(() => el.focus(), 0);
      }
    }
  }, [isExpanded, open]);

  // ✅ Trap focus inside panel while expanded (Tab/Shift+Tab)
  useEffect(() => {
    if (!isExpanded) return;
    const node = panelRef.current;
    if (!node) return;

    const focusableSelector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const getFocusable = () =>
      Array.from(node.querySelectorAll(focusableSelector)).filter(
        (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
      );

    const onKeyDown = (e) => {
      if (e.key !== "Tab") return;

      const focusables = getFocusable();
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (document.activeElement === node) {
        e.preventDefault();
        first.focus();
        return;
      }

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    node.addEventListener("keydown", onKeyDown);
    return () => node.removeEventListener("keydown", onKeyDown);
  }, [isExpanded]);

  const canSend =
    form.name.trim().length > 0 &&
    form.email.trim().length > 0 &&
    form.message.trim().length > 0 &&
    !submitting;

  if (!mounted) return null;

  return createPortal(
    <div className={`jf-dockRoot ${open ? "is-open" : ""}`} aria-hidden={!open}>
      {/* Backdrop (only when expanded) */}
      <button
        type="button"
        className={`jf-dockBackdrop ${isExpanded ? "is-on" : ""}`}
        onClick={() => (isExpanded ? onClose() : null)}
        aria-label="Close contact panel"
        tabIndex={isExpanded ? 0 : -1}
        disabled={!isExpanded}
      />

      {/* Minimized bar (Gmail-style) */}
      {open && minimized ? (
        <div className="jf-miniBar" role="button" tabIndex={0}>
          <button
            type="button"
            className="jf-miniMain"
            onClick={() => setMinimized(false)}
            aria-label="Restore message panel"
          >
            <span className="jf-miniDot" aria-hidden="true" />
            <span className="jf-miniText">New message</span>
          </button>
          <div className="jf-miniActions">
            <button
              type="button"
              className="jf-miniBtn"
              onClick={() => setMinimized(false)}
              aria-label="Restore"
              title="Restore"
            >
              ⤢
            </button>
            <button
              type="button"
              className="jf-miniBtn"
              onClick={() => onClose()}
              aria-label="Close"
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>
      ) : null}

      {/* Panel */}
      <div
        className={`jf-dockPanel ${isExpanded ? "is-expanded" : ""}`}
        role="dialog"
        aria-modal={isExpanded ? "true" : "false"}
        aria-label="Contact panel"
        tabIndex={-1}
        ref={panelRef}
      >
        <div className="jf-dockHeader">
          <div className="jf-dockTitle">New message</div>
          <div className="jf-dockHeaderActions">
            <button
              type="button"
              className="jf-dockBtn"
              onClick={() => setMinimized(true)}
              aria-label="Minimize"
              title="Minimize"
            >
              —
            </button>
            <button
              type="button"
              className="jf-dockBtn"
              onClick={() => onClose()}
              aria-label="Close"
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <form
          className="jf-dockBody"
          onSubmit={async (e) => {
            e.preventDefault();
            if (!canSend) return;
            try {
              setSubmitting(true);
              await new Promise((r) => setTimeout(r, 450));
              setForm({ name: "", email: "", message: "" });
              onClose();
            } finally {
              setSubmitting(false);
            }
          }}
        >
          <input
            className="jf-dockInput"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            autoComplete="name"
          />
          <input
            className="jf-dockInput"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            autoComplete="email"
            inputMode="email"
          />
          <textarea
            className="jf-dockTextarea"
            name="message"
            placeholder="Tell us what you need…"
            rows={5}
            value={form.message}
            onChange={(e) =>
              setForm((p) => ({ ...p, message: e.target.value }))
            }
          />
          <div className="jf-dockFooter">
            <button type="button" className="jf-dockLink" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className={`jf-dockSend ${canSend ? "is-ready" : "is-disabled"}`}
              disabled={!canSend}
            >
              {submitting ? "Sending…" : "Send →"}
            </button>
          </div>
        </form>
      </div>

      <style>{`
        /* Root sits above EVERYTHING (footer included) */
        .jf-dockRoot{
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
        }
        .jf-dockRoot.is-open{ pointer-events: auto; }

        /* Backdrop */
        .jf-dockBackdrop{
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.18);
          opacity: 0;
          transition: opacity 180ms ease;
          border: 0;
          cursor: default;
          pointer-events: none;
        }
        .jf-dockBackdrop.is-on{
          opacity: 1;
          cursor: pointer;
          pointer-events: auto;
        }

        /* Minimized bar (bottom-right) */
        .jf-miniBar{
          position: absolute;
          right: 18px;
          bottom: 18px;
          width: min(420px, calc(100vw - 36px));
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.14);
          backdrop-filter: blur(14px);
          box-shadow: 0 22px 70px rgba(0,0,0,0.18);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 10px 10px 10px 12px;
          pointer-events: auto;
        }
        .jf-miniMain{
          display:flex;
          align-items:center;
          gap:10px;
          min-width: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
          padding: 6px 6px;
          border-radius: 12px;
        }
        .jf-miniMain:hover{
          background: rgba(255,255,255,0.10);
        }
        .jf-miniDot{
          width: 10px; height: 10px; border-radius: 999px;
          background: rgba(201,162,77,0.95);
          box-shadow: 0 0 0 2px rgba(255,255,255,0.22), 0 0 18px rgba(201,162,77,0.35);
          flex: 0 0 auto;
        }
        .jf-miniText{
          font-weight: 600;
          color: rgba(20,20,18,0.86);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .jf-miniActions{
          display:flex;
          gap: 8px;
          flex: 0 0 auto;
        }
        .jf-miniBtn{
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.10);
          border-radius: 999px;
          width: 34px;
          height: 34px;
          display: inline-grid;
          place-items: center;
          cursor: pointer;
        }

        /* Panel */
        .jf-dockPanel{
          position: absolute;
          right: 18px;
          bottom: 18px;
          width: min(420px, calc(100vw - 36px));
          max-height: min(560px, calc(100vh - 140px));
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.16);
          backdrop-filter: blur(14px);
          box-shadow: 0 22px 70px rgba(0,0,0,0.22);
          overflow: hidden;
          opacity: 0;
          transform: translateY(14px) scale(0.98);
          transition: opacity 180ms ease, transform 180ms ease;
          pointer-events: none;
          outline: none;
        }
        .jf-dockPanel.is-expanded{
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .jf-dockHeader{
          display:flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.14);
        }
        .jf-dockTitle{ font-weight:600; color: rgba(20,20,18,0.86); }
        .jf-dockHeaderActions{ display:flex; gap: 8px; }
        .jf-dockBtn{
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.10);
          border-radius: 999px;
          width: 36px;
          height: 36px;
          display: inline-grid;
          place-items: center;
          cursor: pointer;
        }
        .jf-dockBody{
          padding: 12px;
          display:flex;
          flex-direction: column;
          gap: 10px;
        }
        .jf-dockInput,
        .jf-dockTextarea{
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.10);
          padding: 10px;
          font-size: 13px;
          color: rgba(20,20,18,0.88);
          outline: none;
        }
        .jf-dockInput:focus,
        .jf-dockTextarea:focus{
          box-shadow: 0 0 0 3px rgba(201,162,77,0.18);
          border-color: rgba(201,162,77,0.28);
        }
        .jf-dockFooter{
          display:flex;
          justify-content: space-between;
          gap: 10px;
          margin-top: 6px;
        }
        .jf-dockSend{
          border-radius: 999px;
          padding: 10px 14px;
          border: 1px solid rgba(201,162,77,0.24);
          background: rgba(201,162,77,0.22);
          font-weight: 600;
          transition: transform 140ms ease, opacity 140ms ease;
        }
        .jf-dockSend.is-disabled{
          opacity: 0.55;
          cursor: not-allowed;
        }
        .jf-dockSend.is-ready:hover{
          transform: translateY(-1px);
        }
        .jf-dockLink{
          padding: 10px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.10);
        }
      `}</style>
    </div>,
    document.body
  );
}
