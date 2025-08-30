"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-3 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 dark:bg-slate-800/60 dark:border-slate-700 dark:hover:bg-slate-800"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        ) : (
          <Sun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        )}
      </motion.div>
    </motion.button>
  );
}
