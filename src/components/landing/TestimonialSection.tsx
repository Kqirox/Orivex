import { testimonials } from "../../../data/testimonials-mock-data";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { TCard } from "./Tcard";

const TestimonialSlider = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={40}
            loop={true}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay]}
            className="w-full"
        >
            {testimonials.map((t, i) => (
                <SwiperSlide key={i}   >
                    <TCard key={t.name} {...t} delay={i * 0.1}  />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default function TestimonialSection() {
    return (
        <section
            id="testimonials"
            style={{ background: "#F3F4F6", padding: "100px 24px !important" }}
        >
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 72 }}>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                            fontWeight: 800,
                            color: "#111827",
                            marginBottom: 12,
                            letterSpacing: "-0.5px",
                        }}
                    >
                        Success Stories
                    </h2>
                    <p style={{ fontSize: 16, color: "#6B7280", margin: 0 }}>
                        Hear from learners and employers who've transformed their lives
                        with Learnault
                    </p>
                </div>


                <TestimonialSlider />
            </div>
        </section>
    );
}