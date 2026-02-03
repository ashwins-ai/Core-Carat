import React, { useState } from "react";
import {
    Calendar,
    MapPin,
    Phone,
    ChevronRight
} from "lucide-react";

export default function Appointment({ goHome }) {
    const [formStatus, setFormStatus] = useState("idle"); // idle | loading | success | error

    const handleAppointmentSubmit = async (e) => {
        e.preventDefault();

        if (formStatus === "loading") return;
        setFormStatus("loading");

        const formData = new FormData(e.target);

        // 🛡 Honeypot — silent drop
        if (formData.get("company")) {
            setFormStatus("idle");
            return;
        }

        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            catalogue: formData.get("catalogue"),
            message: formData.get("message"),
            source: "Core-Carat Website",
        };

        try {
            await fetch(
                "https://script.google.com/macros/s/AKfycbzlbEpmNAiA2F2sUV-FlQuFyYKvBjHbolaM52z-tHPH6zRTmsyi6P_16V_VhampabbgGA/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            setFormStatus("success");
            e.target.reset();
        } catch (err) {
            console.error(err);
            setFormStatus("error");
        }
    };

    return (
        <div className="min-h-screen flex items-center relative z-50">
            <div className="w-full px-6 md:px-12 max-w-7xl mx-auto py-24">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                    {/* LEFT PANEL */}
                    <div>
                        <button
                            onClick={goHome}
                            className="flex items-center gap-2 text-emerald-800 text-xs uppercase tracking-widest mb-12 hover:gap-4 transition-all"
                        >
                            <ChevronRight className="rotate-180" size={14} />
                            Back to Home
                        </button>

                        <h1 className="text-5xl md:text-7xl font-serif mb-8 text-emerald-950 leading-tight">
                            By Appointment <br />
                            <i className="font-light">Only.</i>
                        </h1>

                        <p className="text-gray-600 font-light leading-relaxed mb-12 text-lg">
                            Our studio operates exclusively by private appointment to ensure full creative attention for your bespoke commission.
                        </p>

                        <div className="space-y-10">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-emerald-50 flex items-center justify-center rounded-full text-emerald-900">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="uppercase tracking-widest text-xs font-bold mb-1">
                                        Our Studio
                                    </h4>
                                    <p className="text-gray-500 font-light text-sm">
                                        Level 14, The Diamond Exchange<br />
                                        Bandra Kurla Complex, Mumbai
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-emerald-50 flex items-center justify-center rounded-full text-emerald-900">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="uppercase tracking-widest text-xs font-bold mb-1">
                                        Concierge
                                    </h4>
                                    <p className="text-gray-500 font-light text-sm">
                                        +91 790 352 1331
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FORM PANEL */}
                    <div className="bg-white p-8 md:p-12 shadow-2xl border border-gray-100 rounded-sm">

                        {formStatus === "success" ? (
                            <div className="text-center py-20">
                                <div className="w-20 h-20 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <Calendar size={32} />
                                </div>

                                <h3 className="text-3xl font-serif mb-4">
                                    Inquiry Received
                                </h3>

                                <p className="text-gray-500 font-light mb-8">
                                    Our concierge will contact you within 24 hours.
                                </p>

                                <button
                                    onClick={() => setFormStatus("idle")}
                                    className="text-emerald-900 uppercase tracking-widest text-xs font-bold underline decoration-emerald-200"
                                >
                                    Submit Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleAppointmentSubmit} className="space-y-8">

                                {/* Honeypot */}
                                <input
                                    type="text"
                                    name="company"
                                    tabIndex="-1"
                                    autoComplete="off"
                                    className="hidden"
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                                            Full Name
                                        </label>
                                        <input
                                            name="name"
                                            required
                                            type="text"
                                            className="w-full border-b border-gray-200 py-3 outline-none focus:border-emerald-800 bg-transparent transition-colors font-light"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                                            Email
                                        </label>
                                        <input
                                            name="email"
                                            required
                                            type="email"
                                            className="w-full border-b border-gray-200 py-3 outline-none focus:border-emerald-800 bg-transparent transition-colors font-light"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                                            Phone Number
                                        </label>
                                        <input
                                            name="phone"
                                            required
                                            type="tel"
                                            className="w-full border-b border-gray-200 py-3 outline-none focus:border-emerald-800 bg-transparent transition-colors font-light"
                                        />
                                    </div>

                                    <select
                                        name="catalogue"
                                        required
                                        className="w-full border-b border-gray-200 py-3 outline-none focus:border-emerald-800 bg-transparent transition-colors font-light text-gray-400"
                                    >
                                        <option value="">Select a category</option>
                                        <option value="Bespoke Engagement">Bespoke Engagement</option>
                                        <option value="High Jewelry Commission">High Jewelry Commission</option>
                                        <option value="Investment Diamonds">Investment Diamonds</option>
                                        <option value="Heirloom Redesign">Heirloom Redesign</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                                        Your Vision
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="3"
                                        className="w-full border-b border-gray-200 py-3 outline-none focus:border-emerald-800 bg-transparent transition-colors font-light"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === "loading"}
                                    className="w-full bg-emerald-950 text-white py-5 uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-black transition-all disabled:opacity-50"
                                >
                                    {formStatus === "loading" ? "Submitting…" : "Request Catalogue"}
                                </button>

                                {formStatus === "error" && (
                                    <p className="text-red-500 text-xs text-center">
                                        Something went wrong. Please try again.
                                    </p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
