"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { User } from "lucide-react";

const testimonials = [
  {
    quote:
      "Learnault helped me land my first remote job. The verifiable credentials proved my skills to employers who otherwise wouldn't have looked at my resume.",
    author: "Amara",
    role: "Frontend Developer",
    location: "Nigeria",
  },
  {
    quote:
      "I earned while learning blockchain — it changed my life. The token rewards paid for my internet connection while I studied smart contracts.",
    author: "Raj",
    role: "Web3 Engineer",
    location: "India",
  },
  {
    quote:
      "The credentials I earned are recognized by real employers. I transitioned from graphic design to UI/UX in just 3 months using the platform.",
    author: "Sofia",
    role: "Product Designer",
    location: "Brazil",
  },
];

const Testimonial = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : undefined}
            className="mb-6 font-heading text-4xl font-bold md:text-5xl lg:text-6xl text-text-primary"
          >
            What Our Learners Say
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.1 }}
            className="mx-auto max-w-xl text-lg md:text-xl font-body text-text-secondary"
          >
            Join thousands of learners who are already building their careers
            and earning rewards.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.1 }}
              className="flex flex-col justify-between rounded-2xl bg-surface p-10 ring-1 ring-border"
            >
              {/* Quote Icon + Text */}
              <div className="relative mb-10">
                <p className="relative z-10 pr-8 font-body text-base leading-relaxed text-text-secondary">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-border pt-6">
                {/* Empty Avatar Placeholder */}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary-background">
                  <User className="h-6 w-6 text-text-muted" />
                </div>

                <div>
                  <h4 className="font-heading text-base font-bold text-text-primary">
                    {item.author}
                  </h4>
                  <p className="font-body text-sm text-text-secondary">
                    {item.role} &bull; {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

