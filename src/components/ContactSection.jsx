import { useState } from "react";

const ContactSection = () => {
  const [email, setEmail] = useState("");

  const handleSend = () => {
    if (!email.trim()) return;
    window.location.href = `mailto:rahulaetopaz@gmail.com?subject=Newsletter Subscription&body=Please add me to your newsletter: ${email}`;
  };

  return (
    <section className="bg-[#1a1a2e] text-white">

      {/* Top CTA */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center sm:text-left">
            Lets Connect there
          </h1>
          <button
            onClick={() => window.location.href = "mailto:rahulaetopaz@gmail.com?subject=Hire Enquiry"}
            className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 px-6 py-3 rounded-full font-semibold flex items-center gap-2 whitespace-nowrap"
          >
            Hire me <span>↗</span>
          </button>
        </div>
      </div>

      <hr className="border-white/10 mx-4 sm:mx-6" />

      {/* Footer grid */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Have a project in mind or looking to collaborate? Feel free to reach out — let’s create something amazing together.
            </p>
            
           
           
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-orange-400 font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-gray-300 text-sm">
              <span>+91 7868961046</span>
              <span>rahulaetopaz@gmail.com</span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-orange-400 font-semibold mb-4">Get the latest information</h3>
            <div className="flex bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-4 py-2 text-black text-sm outline-none min-w-0"
              />
              <button
                onClick={handleSend}
                className="bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all duration-200 px-4 text-white font-bold flex-shrink-0 rounded-r-full"
              >
                →
              </button>
            </div>
            
          </div>

        </div>
      </div>

      <hr className="border-white/10 mx-4 sm:mx-6" />

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500 text-xs sm:text-sm text-center">
       
        <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
          <span className="hover:text-orange-400 cursor-pointer transition-colors">User Terms & Conditions</span>
          <span>|</span>
          <span className="hover:text-orange-400 cursor-pointer transition-colors">Privacy Policy</span>
        </div>
      </div>

    </section>
  );
};

export default ContactSection;
