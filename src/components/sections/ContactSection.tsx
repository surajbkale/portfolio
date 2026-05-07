"use client";

import { useActionState, useRef, useEffect } from "react";
import { sendContactEmail } from "@/app/actions/contact";

export function ContactSection() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, null);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset the form on successful submission
  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <section className="py-20 lg:pb-32">
      <h2 className="text-6xl md:text-8xl font-bold mb-16 uppercase tracking-tighter leading-none">
        <span className="text-white block">Let's Work</span>
        <span className="text-[#333333] block">Together</span>
      </h2>

      <form ref={formRef} action={formAction} className="flex flex-col gap-6 w-full max-w-3xl">
        {state?.success && (
          <div className="bg-green-500/10 border border-green-500 text-green-500 p-4 rounded-[12px] text-sm">
            {state.message}
          </div>
        )}
        {state?.error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-[12px] text-sm">
            {state.error}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-sm text-gray-400" htmlFor="name">Name</label>
            <input 
              id="name"
              name="name"
              type="text" 
              required
              placeholder="Your Name" 
              className="w-full bg-[#1c1c1c] border border-white/5 rounded-[12px] p-4 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-sm text-gray-400" htmlFor="email">Email</label>
            <input 
              id="email"
              name="email"
              type="email" 
              required
              placeholder="Your@email.com" 
              className="w-full bg-[#1c1c1c] border border-white/5 rounded-[12px] p-4 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400" htmlFor="message">Message</label>
          <textarea 
            id="message"
            name="message"
            required
            placeholder="Message" 
            rows={5}
            className="w-full bg-[#1c1c1c] border border-white/5 rounded-[12px] p-4 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isPending}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-[12px] transition-colors mt-2 flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </section>
  );
}
