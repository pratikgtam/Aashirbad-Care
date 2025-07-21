"use client";
import Image from "next/image";
import { useState } from "react";

const services = [
  { name: "Medical Care", icon: "/file.svg", desc: "Skilled nursing, medication, wound care, injections." },
  { name: "Personal Care", icon: "/window.svg", desc: "Bathing, grooming, mobility, hygiene assistance." },
  { name: "Post-Surgery", icon: "/next.svg", desc: "Recovery support, pain management, rehab." },
  { name: "Elderly Support", icon: "/globe.svg", desc: "Companionship, daily living help, safety." },
  { name: "Nutrition", icon: "/vercel.svg", desc: "Meal planning, feeding, dietary guidance." },
  { name: "Emotional Support", icon: "/file.svg", desc: "Counseling, companionship, mental wellness." },
];

const whyChoose = [
  {
    title: "Personalized Care",
    desc: "Every client receives a tailored care plan that respects their unique needs and preferences.",
    icon: "❤️",
  },
  {
    title: "Affordable Pricing",
    desc: "Transparent, flexible packages for every budget. No hidden fees.",
    icon: "💸",
  },
  {
    title: "Certified Professionals",
    desc: "Our team is trained, background-checked, and passionate about care.",
    icon: "🎓",
  },
];

const testimonials = [
  {
    quote: "Aashirbad Care gave my father the dignity and comfort he deserved at home. The nurses were kind and skilled.",
    name: "Sita R.",
  },
  {
    quote: "Their team supported my recovery after surgery. I felt safe and cared for every step of the way.",
    name: "Rajesh K.",
  },
  {
    quote: "Affordable, reliable, and truly compassionate. Highly recommend for anyone needing home care in Nepal!",
    name: "Mina T.",
  },
];

const pricing = [
  { plan: "Hourly", price: "NPR 500/hr", features: ["Flexible hours", "No minimums"] },
  { plan: "Daily", price: "NPR 3500/day", features: ["8-12 hours", "Personalized care"] },
  { plan: "Monthly", price: "NPR 75,000/mo", features: ["24/7 care", "Best value"] },
];

const faqs = [
  {
    q: "What services do you provide?",
    a: "We offer medical, personal, post-surgery, elderly, nutrition, and emotional support care at home.",
  },
  {
    q: "Are your caregivers certified?",
    a: "Yes, all our staff are certified, background-checked, and trained for home care.",
  },
  {
    q: "How do I book a service?",
    a: "Simply fill out the contact form or call us. We'll guide you through the process.",
  },
  {
    q: "Is there a minimum booking period?",
    a: "No, we offer flexible hourly, daily, and monthly packages to suit your needs.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col bg-[#f6fbff] text-[#183153]">
      {/* Header */}
      <header className="w-full bg-white/80 shadow-sm sticky top-0 z-20">
        <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">
          <div className="flex items-center gap-2">
            <Image src="/file.svg" alt="Aashirbad Care Logo" width={40} height={40} className="rounded-full bg-blue-100 p-1" />
            <span className="font-bold text-xl tracking-tight text-blue-700">Aashirbad Care</span>
          </div>
          <ul className="hidden md:flex gap-8 font-medium text-blue-900">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
          <a href="#contact" className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">Book Now</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-blue-800">Compassionate Home Care Service in Nepal</h1>
        <p className="text-lg md:text-2xl text-blue-700 mb-8 max-w-2xl">Affordable, 24/7 healthcare and emotional support at the comfort of your home.</p>
        <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg transition mb-4">Book a Service Now</a>
      </section>

      {/* Our Services */}
      <section id="services" className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-blue-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.name} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
              <Image src={s.icon} alt={s.name} width={48} height={48} className="mb-4" />
              <h3 className="font-semibold text-lg text-blue-700 mb-2">{s.name}</h3>
              <p className="text-blue-900 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="bg-blue-50 py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-blue-800">Why Choose Aashirbad Care?</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChoose.map((w) => (
            <div key={w.title} className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center">
              <span className="text-4xl mb-4">{w.icon}</span>
              <h3 className="font-semibold text-lg text-blue-700 mb-2">{w.title}</h3>
              <p className="text-blue-900 text-sm">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-blue-800">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border-l-4 border-green-400">
              <p className="italic text-blue-900 mb-4">“{t.quote}”</p>
              <span className="font-semibold text-green-700">— {t.name}</span>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-green-50 py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-blue-800">Pricing</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((p) => (
            <div key={p.plan} className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center border border-green-200">
              <h3 className="font-semibold text-lg text-blue-700 mb-2">{p.plan}</h3>
              <div className="text-2xl font-bold text-green-600 mb-4">{p.price}</div>
              <ul className="text-blue-900 text-sm mb-4">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow transition">Book Now</a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-blue-800">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="bg-white rounded-xl shadow p-4">
              <button
                className="w-full flex justify-between items-center text-left font-semibold text-blue-700 text-lg focus:outline-none"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                {faq.q}
                <span className="ml-2 text-blue-500">{openFaq === i ? "-" : "+"}</span>
              </button>
              {openFaq === i && (
                <p className="mt-2 text-blue-900 text-sm">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-blue-50 py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-blue-800">Contact Us</h2>
        <form className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-8 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" name="name" required placeholder="Your Name" className="flex-1 rounded-lg border border-blue-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <input type="tel" name="phone" required placeholder="Phone Number" className="flex-1 rounded-lg border border-blue-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
          <input type="text" name="service" required placeholder="Service Needed" className="rounded-lg border border-blue-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <textarea name="message" rows={4} placeholder="Your Message" className="rounded-lg border border-blue-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transition">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-blue-100 py-8 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-2">
            <Image src="/file.svg" alt="Aashirbad Care Logo" width={32} height={32} className="rounded-full bg-blue-100 p-1" />
            <span className="font-bold text-lg text-blue-700">Aashirbad Care</span>
          </div>
          <div className="flex gap-6 text-blue-700 text-sm items-center">
            <a href="mailto:info@aashirbadcare.com" className="hover:underline">info@aashirbadcare.com</a>
            <span>|</span>
            <a href="tel:+9779800000000" className="hover:underline">+977 9800000000</a>
            <span>|</span>
            <span>Kathmandu, Nepal</span>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500"><svg width="24" height="24" fill="currentColor" className="inline"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z"/></svg></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500"><svg width="24" height="24" fill="currentColor" className="inline"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400"><svg width="24" height="24" fill="currentColor" className="inline"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 8.99 4.07 7.13 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.12 2.94 3.99 2.97A8.6 8.6 0 0 1 2 19.54c-.63 0-1.25-.04-1.86-.11A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg></a>
          </div>
        </div>
        <div className="text-center text-xs text-blue-400 mt-4">© {new Date().getFullYear()} Aashirbad Care. All rights reserved.</div>
      </footer>
    </div>
  );
}
