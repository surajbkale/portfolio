"use client";

export function ContactSection() {
  return (
    <section className="py-20 lg:pb-32">
      <h2 className="text-6xl md:text-8xl font-bold mb-16 uppercase tracking-tighter leading-none">
        <span className="text-white block">Let's Work</span>
        <span className="text-[#333333] block">Together</span>
      </h2>

      <form className="flex flex-col gap-6 w-full max-w-3xl" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-sm text-gray-400">Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-[#1c1c1c] border border-white/5 rounded-[12px] p-4 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-sm text-gray-400">Email</label>
            <input 
              type="email" 
              placeholder="Your@email.com" 
              className="w-full bg-[#1c1c1c] border border-white/5 rounded-[12px] p-4 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400">Budget</label>
          <div className="relative">
            <select className="w-full bg-[#1c1c1c] border border-white/5 rounded-[12px] p-4 text-gray-400 focus:outline-none focus:border-orange-500 transition-colors appearance-none">
              <option value="">Select...</option>
              <option value="1k-5k">$1,000 - $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k+">$10,000+</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400">Message</label>
          <textarea 
            placeholder="Message" 
            rows={5}
            className="w-full bg-[#1c1c1c] border border-white/5 rounded-[12px] p-4 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-[12px] transition-colors mt-2"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
