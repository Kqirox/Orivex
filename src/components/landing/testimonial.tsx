"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, User } from "lucide-react";

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
  return (
    <section className="py-24" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
            style={{ color: "#0F172A" }}
          >
            What Our Learners Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl max-w-xl mx-auto font-body"
            style={{ color: "#5F6368" }}
          >
            Join thousands of learners who are already building their careers
            and earning rewards.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl flex flex-col justify-between p-10"
              style={{ border: "1px solid #E2E8F0" }}
            >
              {/* Quote Icon + Text */}
              <div className="relative mb-10">

                <p
                  className="text-base leading-relaxed font-body relative z-10 pr-8"
                  style={{ color: "#5F6368" }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div
                className="flex items-center gap-4 pt-6"
                style={{ borderTop: "1px solid #E2E8F0" }}
              >
                {/* Empty Avatar Placeholder */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#F1F5F9" }}
                >
                  <User className="w-6 h-6" style={{ color: "#94A3B8" }} />
                </div>

                <div>
                  <h4
                    className="font-heading font-bold text-base"
                    style={{ color: "#0F172A" }}
                  >
                    {item.author}
                  </h4>
                  <p
                    className="text-sm font-body"
                    style={{ color: "#5F6368" }}
                  >
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
