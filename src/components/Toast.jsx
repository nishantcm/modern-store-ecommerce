"use client";

import { useToast } from "@/context/ToastContext";

export default function Toast() {
  const { toasts, dismissToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-6 left-1/2 z-[100] flex -translate-x-1/2 flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          role="status"
          className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-lg ring-1 ring-black/10"
        >
          <i className="fa-solid fa-heart text-red-500" />
          <span>{toast.message}</span>
          <button
            type="button"
            onClick={() => dismissToast(toast.id)}
            className="ml-2 text-gray-400 transition hover:text-gray-700"
            aria-label="Dismiss"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
      ))}
    </div>
  );
}
