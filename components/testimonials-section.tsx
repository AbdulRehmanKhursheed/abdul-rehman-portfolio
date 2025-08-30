"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    company: "TechCorp Solutions",
    content: "Abdul delivered an exceptional e-commerce platform that exceeded our expectations. His expertise in React, Next.js, and AWS helped us scale from 0 to 10,000+ users within months. The performance optimizations he implemented reduced our loading times by 60%.",
    rating: 5,
    image: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    content: "Working with Abdul was a game-changer for our startup. He not only built a robust mobile app but also mentored our junior developers. His cloud infrastructure knowledge saved us thousands in monthly costs while improving reliability.",
    rating: 5,
    image: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder & CEO",
    company: "GreenTech",
    content: "Abdul's technical expertise and attention to detail are unmatched. He transformed our vision into a beautiful, high-performance application. His commitment to clean code and best practices made future development seamless.",
    rating: 5,
    image: "ER"
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    company: "CodeCraft",
    content: "As a fellow developer, I'm impressed by Abdul's code quality and architecture decisions. His TypeScript skills and testing approach set a high standard. The projects he delivered were production-ready from day one.",
    rating: 5,
    image: "DK"
  },
  {
    name: "Lisa Thompson",
    role: "UX Director",
    company: "DesignHub",
    content: "Abdul understands the balance between technical excellence and user experience. His implementations are not only technically sound but also user-friendly. He's a true full-stack developer who thinks holistically.",
    rating: 5,
    image: "LT"
  },
  {
    name: "Alex Morgan",
    role: "DevOps Engineer",
    company: "CloudScale",
    content: "Abdul's cloud infrastructure work is exceptional. His AWS implementations are cost-effective, secure, and scalable. He helped us migrate our entire infrastructure with zero downtime and significant cost savings.",
    rating: 5,
    image: "AM"
  }
];

const TestimonialsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-slate-800 light:bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-900/20 border border-emerald-800 rounded-full text-emerald-300 font-medium mb-6 light:bg-emerald-50 light:border-emerald-200 light:text-emerald-700"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Quote className="w-4 h-4" />
              <span>Client Feedback</span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold heading-gradient mb-6">
              What Clients Say
            </h2>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed light:text-slate-600">
              Don&apos;t just take my word for it. Here&apos;s what clients and colleagues 
              have to say about working with me on their projects.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={itemVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 light:bg-white/60 light:border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-emerald-500" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-400 leading-relaxed mb-6 line-clamp-6 light:text-slate-600">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.image}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100 light:text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-400 light:text-slate-600">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-slate-500 light:text-slate-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={itemVariants}
          >
            {[
              { label: "Client Satisfaction", value: "100%", icon: "⭐" },
              { label: "Projects Delivered", value: "50+", icon: "🚀" },
              { label: "Average Rating", value: "5.0", icon: "🏆" },
              { label: "Repeat Clients", value: "80%", icon: "🔄" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400 light:text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
