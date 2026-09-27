"use client";

import { useState } from "react";
import Image from "next/image";
export default function ContactPageForm() {
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
    console.log("Forma poslata", formData);
    alert("Hvala na poruci! Kontaktiraćemo vas uskoro.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.82fr)]">
      <div className="w-full border border-black/10 bg-white p-6 sm:p-8 md:p-10 lg:p-12">
        <div className="mb-10 border-b border-black/10 pb-8">
          <span className="mb-3 block font-replica text-xs font-bold uppercase tracking-[0.2em] text-track-cyan">
            Pošaljite upit
          </span>
          <h2 className="font-replica text-3xl font-bold leading-[1.05] text-black md:text-5xl">
            Stupite u kontakt sa nama
          </h2>
          <p className="mt-5 max-w-2xl font-replica-light text-sm leading-relaxed text-gray-600 md:text-base">
            Popunite formu ispod i naš tim će vam odgovoriti u najkraćem mogućem roku.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative pt-4">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ime i prezime"
                required
                className="w-full bg-transparent border-b border-gray-300 py-2 text-lg font-replica-light focus:outline-none focus:border-track-cyan transition-colors placeholder-transparent peer text-black"
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
                className="w-full bg-transparent border-b border-gray-300 py-2 text-lg font-replica-light focus:outline-none focus:border-track-cyan transition-colors placeholder-transparent peer text-black"
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
              className="w-full bg-transparent border-b border-gray-300 py-2 text-lg font-replica-light focus:outline-none focus:border-track-cyan transition-colors placeholder-transparent peer text-black"
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
              className="w-full bg-transparent border-b border-gray-300 py-2 text-lg font-replica-light focus:outline-none focus:border-track-cyan transition-colors placeholder-transparent peer resize-none text-black"
            ></textarea>
            <label 
              htmlFor="message" 
              className="absolute left-0 top-6 text-gray-500 font-replica-light transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-sm peer-focus:text-track-cyan top-0 text-sm cursor-text"
            >
              Vaša poruka
            </label>
          </div>

          <div className="mt-4">
            <button 
              type="submit" 
              className="group relative inline-flex min-h-12 w-full items-center justify-center overflow-hidden bg-black px-12 py-4 text-white transition-all hover:shadow-lg md:w-auto"
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

      <div className="relative min-h-[420px] w-full overflow-hidden border border-black/10 sm:min-h-[520px] lg:min-h-full">
        <Image
          src="/photos/kontakt.jpg"
          alt="Morbidelli motocikl — kontakt Morbidelli Srbija"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
