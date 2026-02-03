import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Menu,
  ArrowRight
} from 'lucide-react';

import Logo from '/Users/sai/Personal/Core Carat/core-carat/src/assets/Logo.png';
import Appointment from "./Pages/Appointment";
import bgi1 from "./assets/bgi1.png";
import img1 from "./assets/img2.jpg";
import img2 from "./assets/img1.jpg";
/* ---------------- SCROLL REVEAL ---------------- */

const ScrollReveal = ({ children, direction = 'up', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';
    if (direction === 'left') return 'translate(-50px, 0)';
    if (direction === 'right') return 'translate(50px, 0)';
    if (direction === 'up') return 'translate(0, 50px)';
    return 'translate(0, 0)';
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      style={{
        transform: getTransform(),
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

/* ---------------- SECTION COMPONENT ---------------- */

const Section = ({
  title,
  subtitle,
  content,
  image,
  reverse,
  id
}) => (
  <section
    id={id}
    className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
  >
    <div
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } items-center gap-12 md:gap-24`}
    >
      <div className="w-full md:w-1/2">
        <ScrollReveal direction={reverse ? 'right' : 'left'}>
          <span className="text-emerald-800 uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block font-medium">
            {subtitle}
          </span>

          <h2 className="text-4xl md:text-6xl font-serif mb-8 text-emerald-950 leading-tight">
            {title}
          </h2>

          <p className="text-gray-600 leading-relaxed font-light text-lg mb-10 max-w-lg">
            {content}
          </p>
        </ScrollReveal>
      </div>

      <div className="w-full md:w-1/2">
        <ScrollReveal direction="up" delay={200}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);
const Promises = () => {
  const items = [
    {
      icon: "📜",
      label: "BIS Hallmarked Jewellery",
    },
    {
      icon: "🔁",
      label: "Lifetime Exchange & Buyback",
    },
    {
      icon: "⏱️",
      label: "7–14 Day Customisation",
    },
    {
      icon: "💎",
      label: "SDI Certified Diamonds",
    },
    {
      icon: "🏠",
      label: "One-on-One Consultations",
    },
    {
      icon: "📅",
      label: "Personalised Appointments",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h3 className="uppercase tracking-[0.4em] text-sm mb-16 text-gray-700">
          Our Promises
        </h3>

        {/* Icons row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12">

          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-5">

              <div className="text-4xl opacity-80">
                {item.icon}
              </div>

              <p className="text-xs tracking-wide text-gray-700 leading-snug max-w-[140px]">
                {item.label}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: "Are lab-grown diamonds real diamonds?",
      a: "Yes. Lab-grown diamonds are chemically, physically, and optically identical to mined diamonds. They have the same sparkle, hardness, and durability, just created in a lab instead of underground."
    },
    {
      q: "Will my diamond come with a certificate?",
      a: "Absolutely. Every diamond we offer is certified by trusted international grading labs, so you’ll know exactly what you're getting, just like with mined diamonds."
    },
    {
      q: "Why should I choose lab-grown over natural diamonds?",
      a: "Lab-grown diamonds can cost 30 to 50% less than mined diamonds of the same size and quality. You get identical brilliance, clarity, and durability. "
    },
    {
      q: "Can I customize my jewelry?",
      a: "Yes. Every piece we make is crafted after you place your order, so customization is at the heart of what we do. We support full personalization over pre-made designs"
    },
    {
      q: "Is lab-grown diamond jewelry durable enough for everyday wear?",
      a: "Definitely. Lab-grown diamonds are just as strong and durable as mined diamonds. They’re rated 10 on the Mohs hardness scale, making them ideal for everyday wear."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-[#FBFBF9]">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl md:text-6xl font-serif text-center mb-20 text-[#0A1B16]">
          Frequently Asked <i className="font-light">Questions</i>
        </h2>

        <div className="divide-y divide-gray-200">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="group py-8 cursor-pointer"
            >
              {/* QUESTION */}
              <div className="flex justify-between items-center">
                <h4 className="text-lg md:text-xl font-medium text-[#0A1B16]">
                  {item.q}
                </h4>

                <span className="text-xl opacity-40 group-hover:opacity-80 transition">
                  +
                </span>
              </div>

              {/* ANSWER */}
              <div
                className="
                  max-h-0 overflow-hidden
                  opacity-0
                  transition-all duration-500 ease-out
                  group-hover:max-h-[300px]
                  group-hover:opacity-100
                  mt-0 group-hover:mt-4
                "
              >
                <p className="text-gray-600 font-light leading-relaxed pr-8">
                  {item.a}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

/* ---------------- MAIN APP ---------------- */

export default function App() {
  const [view, setView] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FBFBF9] font-sans">

      {/* NAVBAR */}
      {view === "home" && (
        <nav
          className={`fixed w-full z-40 transition-all duration-700 px-6 md:px-12 pt-[calc(env(safe-area-inset-top)+3.5rem)] pb-8 md:pt-10 md:pb-10
 ${isScrolled
              ? 'bg-[#0b1a15]/95 backdrop-blur-md shadow-sm'
              : 'bg-transparent text-white'
            }`}
        >
          <div className="max-w-8xl mx-auto relative flex items-center justify-between">


            {/* CENTER LOGO — ALL SCREENS */}
            <button
              onClick={() => setView("home")}
              className="
    absolute left-1/2 -translate-x-1/2
    md:static md:translate-x-1/2
  "
            >
              <img
                src={Logo}
                alt="Core-Carat"
                className="h-10 md:h-20 object-contain"
              />
            </button>



            {/* DESKTOP ONLY BUTTON */}
            <button
              onClick={() => setView("appointment")}
              className="hidden md:block px-6 py-4 border border-white/40 text-white
               uppercase tracking-[0.3em] text-[10px]
               hover:bg-white hover:text-[#0A1B16] transition-all"
            >
              Request Catalogue
            </button>

          </div>
        </nav>
      )
      }

      {/* HOME PAGE */}
      {
        view === 'home' && (
          <>
            {/* HERO */}
            <div className="relative h-screen w-full flex items-center justify-center bg-emerald-950 overflow-hidden">

              <img
                src={bgi1}
                alt="Core Carat Hero"
                className="
    absolute inset-0 h-full w-full object-cover opacity-50
    object-[28.5%_center]
    md:object-center
  "
              />

              <div className="relative z-30 text-center text-white px-6 md:left-80">


                <ScrollReveal>
                  <span className="uppercase tracking-[0.6em] text-[10px] md:text-xs mb-6 block opacity-70">
                    Precision • Structure • Permanence
                  </span>

                  <h1 className="text-6xl md:text-9xl font-serif italic mb-8 leading-tight">
                    Built From the Core.
                  </h1>

                  <p className="max-w-xl mx-auto font-light text-base md:text-xl opacity-80 leading-relaxed mb-12">
                    Some moments deserve more than a memory, they deserve to last forever. Made with intention. Meant to last. Worn to feel.
                  </p>

                  <button
                    onClick={() => setView('appointment')}
                    className="bg-white text-emerald-950 px-10 py-4 uppercase tracking-[0.3em] text-xs font-semibold hover:bg-[#FBFBF9] transition-all"
                  >
                    Request Catalogue
                  </button>
                </ScrollReveal>
              </div>
            </div>

            <Section
              subtitle="What Makes"
              title={
                <>
                  Lab-Grown
                  <br />
                  <i className="font-light"> Diamonds</i>
                  <br />
                  Better?
                </>
              }
              content="Because wanting something beautiful shouldn’t come with second thoughts.
Our diamonds are grown using advanced technology to mirror nature, without the environmental cost or ethical uncertainty. What you get is pure brilliance, exceptional quality, and a diamond that’s every bit as real as the love or intention behind it.
"
              image={img1}
            />
            <Promises />

            <Section
              reverse
              subtitle="Begin Your Journey"
              title={
                <>
                  Request the <br />
                  <i className="font-light">Core Carat Catalogue</i>
                </>
              }
              content={
                <>
                  <p className="mb-10">
                    Explore our curated collection of precision-engineered diamond jewellery.
                    Receive detailed specifications, pricing ranges, and design possibilities
                    tailored to your requirements.
                  </p>

                  <button
                    onClick={() => setView("appointment")}
                    className="
          border border-[#0A1B16]/90
          px-12 py-5
          uppercase tracking-[0.4em] text-[10px] font-semibold
          hover:bg-[#0A1B16] hover:text-white
          transition-all
        "
                  >
                    Request Catalogue
                  </button>
                </>
              }
              image={img2}
            />

          </>
        )
      }

      {/* ✅ THIS WAS MISSING */}
      {view === "appointment" && (
        <div className="fixed inset-0 z-[9999] bg-[#FBFBF9] overflow-y-auto">
          <Appointment goHome={() => setView("home")} />
        </div>
      )}


      <FAQSection />


      <footer className="bg-[#0A1B16] text-white/70 px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="flex flex-col md:flex-row md:justify-between gap-16">

            {/* BRAND */}
            <div className="max-w-sm">
              <div className="text-xl font-serif tracking-[0.25em] text-white mb-4">
                CORE CARAT
              </div>

              <p className="text-sm font-light leading-relaxed">
                Precision-engineered lab-grown diamond jewellery.
                Designed with intention. Crafted to endure.
              </p>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="uppercase tracking-[0.3em] text-[10px] text-white mb-6">
                Contact
              </h4>

              <ul className="space-y-4 text-sm font-light">
                <li>Surat, India</li>
                <li>
                  <a
                    href="mailto:concierge@corecarat.com"
                    className="hover:text-white transition-colors"
                  >
                    concierge@corecarat.com
                  </a>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h4 className="uppercase tracking-[0.3em] text-[10px] text-white mb-6">
                Catalogue
              </h4>

              <button
                onClick={() => setView("appointment")}
                className="
            border border-white/40
            px-8 py-3
            uppercase tracking-[0.3em] text-[10px] font-semibold
            hover:bg-white hover:text-[#0A1B16]
            transition-all
          "
              >
                Request Catalogue
              </button>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/10 my-16" />

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/50">
            <p>
              © {new Date().getFullYear()} Core-Carat. All rights reserved.
            </p>

            <div className="flex gap-8">
              <span>Lab-Grown Diamonds</span>
              <span>Made-to-Order</span>
              <span>India</span>
            </div>
          </div>

        </div>
      </footer>


    </div >
  );
}
