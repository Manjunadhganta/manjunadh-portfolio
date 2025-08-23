"use client";
import { WavyBackgroundDemo } from "./WavyBackgroundDemo";

export default function Example() {
  return (
    <section id="contact" className="scroll-mt-10 md:scroll-mt-7">
      <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 py-16">
        {/* Aurora background behind the form */}
        <div className="absolute inset-0 z-0">
          <WavyBackgroundDemo />
        </div>

        {/* Contact Form */}
        <form className="relative z-10 w-full max-w-xl bg-black/50 backdrop-blur-md rounded-xl p-6 sm:p-10 text-white shadow-xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Let’s Get In Touch
          </h1>

          {/* Full Name */}
          <div className="mb-5">
            <label htmlFor="name" className="font-medium">Full Name</label>
            <div className="flex items-center mt-2 h-11 pl-3 border border-slate-300 rounded-lg transition-all overflow-hidden">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0" fill="#94a3b8"/>
              </svg>
              <input
                type="text"
                className="h-full px-2 w-full outline-none bg-transparent"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="font-medium">Email Address</label>
            <div className="flex items-center mt-2 h-11 pl-3 border border-slate-300 rounded-lg transition-all overflow-hidden">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#94a3b8"/>
              </svg>
              <input
                type="email"
                className="h-full px-2 w-full outline-none bg-transparent"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="font-medium">Message</label>
            <textarea
              rows={4}
              className="w-full mt-2 p-3 bg-transparent border border-slate-300 rounded-lg resize-none outline-none transition-all"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-black hover:bg-black hover:border-2 hover:border-white hover:text-white transition font-semibold"
          >
            Submit Form
            <svg className="mt-0.5" width="21" height="20" fill="none" viewBox="0 0 21 20">
              <path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#000" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
