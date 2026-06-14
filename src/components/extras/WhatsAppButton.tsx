"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/551140028922?text=Olá! Tenho interesse na NeuroMind AI."
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-30" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-[0_8px_30px_rgba(34,197,94,0.4)] transition-transform group-hover:scale-110">
        <MessageCircle className="h-7 w-7" />
      </span>
    </a>
  );
}
