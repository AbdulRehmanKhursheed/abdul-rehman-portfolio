"use client";

import { motion } from "framer-motion";
import { Sun, Moon, Clock } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme, isAutoMode, toggleAutoMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <motion.button
        onClick={toggleTheme}
        className={`p-3 backdrop-blur-sm border rounded-xl hover:shadow-lg transition-all duration-300 ${
          isAutoMode
            ? "bg-white/40 border-slate-200/50 text-slate-600 dark:bg-slate-800/40 dark:border-slate-700/50 dark:text-slate-400"
            : "bg-white/60 border-slate-200 hover:bg-white text-slate-700 dark:bg-slate-800/60 dark:border-slate-700 dark:hover:bg-slate-800 dark:text-slate-300"
        }`}
        whileHover={{
          scale: isAutoMode ? 1.02 : 1.1,
          rotate: isAutoMode ? 0 : 5,
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        title={`Switch to ${theme === "light" ? "light" : "dark"} mode`}
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === "dark" ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "light" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
