"use client";

import { motion } from "framer-motion";
import { Activity, Bot, TrendingUp, Zap } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative hidden lg:block">
      <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-primary/20 via-cyan-500/10 to-accent/20 blur-3xl" />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/90 shadow-[0_20px_60px_rgba(12,61,110,0.15)] backdrop-blur-sm"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-surface/80 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <span className="ml-2 text-xs font-semibold text-text-muted">
            NeuroMind Command Center
          </span>
          <span className="ml-auto flex items-center gap-1 text-[10px] font-bold text-green-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            AO VIVO
          </span>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Automações", value: "12.4K", icon: Zap, color: "from-blue-500 to-cyan-500" },
              { label: "Precisão", value: "98.7%", icon: Bot, color: "from-purple-500 to-blue-500" },
              { label: "Economia", value: "R$ 284K", icon: TrendingUp, color: "from-emerald-500 to-teal-500" },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="rounded-xl bg-surface p-3"
              >
                <div className={`mb-2 inline-flex rounded-lg bg-gradient-to-br ${m.color} p-1.5`}>
                  <m.icon className="h-3.5 w-3.5 text-white" />
                </div>
                <p className="text-lg font-extrabold text-primary-dark">{m.value}</p>
                <p className="text-[10px] font-medium text-text-muted">{m.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <div className="mt-4 rounded-xl bg-gradient-to-b from-primary/5 to-transparent p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold text-primary-dark">Performance Neural</span>
              <Activity className="h-4 w-4 text-primary" />
            </div>
            <div className="flex h-20 items-end gap-1.5">
              {[40, 65, 45, 80, 60, 90, 75, 95, 85, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-primary to-cyan-400 opacity-80"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        className="absolute -left-6 top-1/4 rounded-xl border border-green-200 bg-white px-4 py-2.5 shadow-lg"
      >
        <p className="text-xs font-bold text-green-600">+500% Produtividade</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute -right-4 bottom-1/4 rounded-xl border border-primary/20 bg-white px-4 py-2.5 shadow-lg"
      >
        <p className="text-xs font-bold text-primary">IA Generativa Ativa</p>
      </motion.div>
    </div>
  );
}
