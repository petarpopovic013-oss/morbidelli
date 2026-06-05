"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ovo bi u praksi slalo podatke na server
    console.log("Forma poslata", formData);
    alert("Hvala na poruci! Kontaktiraćemo vas uskoro.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="w-full bg-white text-black py-20 lg:py-32 font-replica flex justify-center px-6">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-track-cyan"></div>
            <h2 className="text-sm font-replica uppercase tracking-widest text-track-cyan">Kontakt</h2>
            <div className="w-12 h-[2px] bg-track-cyan"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-replica-light mb-4 leading-tight">
            Imate pitanje? <br />
            <span className="font-replica text-black">Stupite u kontakt sa nama.</span>
          </h3>
          <p className="text-lg font-replica-light text-gray-600 max-w-xl mx-auto mt-6">
            Popunite formu ispod i naš tim će vam odgovoriti u najkraćem mogućem roku.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
            <div className="relative pt-4">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ime i prezime"
                required
                className="w-full bg-transparent border-b border-gray-300 py-2 text-lg font-replica-light focus:outline-none focus:border-track-cyan transition-colors placeholder-transparent peer"
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 top-6 text-gray-500 font-replica-light transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-sm peer-focus:text-track-cyan top-0 text-sm cursor-text"
              >
                Ime i prezime
              </label>
            </div>
            
            <div className="relative pt-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email adresa"
                required
                className="w-full bg-transparent border-b border-gray-300 py-2 text-lg font-replica-light focus:outline-none focus:border-track-cyan transition-colors placeholder-transparent peer"
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 top-6 text-gray-500 font-replica-light transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-sm peer-focus:text-track-cyan top-0 text-sm cursor-text"
              >
                Email adresa
              </label>
            </div>
          </div>

          <div className="relative pt-4">
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Naslov poruke"
              required
              className="w-full bg-transparent border-b border-gray-300 py-2 text-lg font-replica-light focus:outline-none focus:border-track-cyan transition-colors placeholder-transparent peer"
            />
            <label 
              htmlFor="subject" 
              className="absolute left-0 top-6 text-gray-500 font-replica-light transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-sm peer-focus:text-track-cyan top-0 text-sm cursor-text"
            >
              Naslov poruke
            </label>
          </div>

          <div className="relative pt-4">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Vaša poruka"
              required
              rows={4}
              className="w-full bg-transparent border-b border-gray-300 py-2 text-lg font-replica-light focus:outline-none focus:border-track-cyan transition-colors placeholder-transparent peer resize-none"
            ></textarea>
            <label 
              htmlFor="message" 
              className="absolute left-0 top-6 text-gray-500 font-replica-light transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-sm peer-focus:text-track-cyan top-0 text-sm cursor-text"
            >
              Vaša poruka
            </label>
          </div>

          <div className="flex justify-center mt-6">
            <button 
              type="submit" 
              className="group relative inline-flex items-center justify-center px-12 py-4 bg-black text-white overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="absolute inset-0 w-full h-full bg-track-cyan transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 text-sm font-replica uppercase tracking-widest flex items-center gap-2">
                Pošalji poruku
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
