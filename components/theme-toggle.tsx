"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-slate-800 hover:shadow-lg transition-all duration-300 light:bg-white/60 light:border-slate-200 light:hover:bg-white"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "light" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-slate-300 light:text-slate-700" />
        ) : (
          <Moon className="w-5 h-5 text-slate-300 light:text-slate-700" />
        )}
      </motion.div>
    </motion.button>
  );
}
