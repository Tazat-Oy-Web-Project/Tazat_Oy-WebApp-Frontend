// ---- Contact Form Component ---- //

interface ContactFormProps {
  form: {
    fullName: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    message: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function ContactForm({ form, onChange, onSubmit }: ContactFormProps) {
  return (
    <div className="flex flex-col xl:col-span-7 gap-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 md:p-10 border-2 border-orange-200 hover:shadow-[0_20px_60px_rgb(0,0,0,0.25)] transition-all duration-300">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
        <p className="text-sm text-gray-500">Fill out the form below and we'll get back to you shortly</p>
      </div>

      <form onSubmit={onSubmit}>
        {/* Form Fields - Double */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Row 1*/}
          <div className="flex flex-col group">
            <label className="text-base font-semibold text-gray-700 mb-2 transition-colors duration-200 group-focus-within:text-amber-600">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={onChange}
              required
              placeholder="Ryan Wick"
              className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 hover:border-gray-400 bg-gray-50/50 focus:bg-white"
            />
          </div>

          <div className="flex flex-col group">
            <label className="text-base font-semibold text-gray-700 mb-2 transition-colors duration-200 group-focus-within:text-amber-600">
              Company Name <span className="text-gray-500 text-sm font-normal">(optional)</span>
            </label>
            <input 
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={onChange}
              placeholder="Your Company Ltd."
              className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 hover:border-gray-400 bg-gray-50/50 focus:bg-white"
            />
          </div>


          {/* Row 2*/}
          <div className="flex flex-col group">
            <label className="text-base font-semibold text-gray-700 mb-2 transition-colors duration-200 group-focus-within:text-amber-600">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              placeholder="ryan@example.com"
              className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 hover:border-gray-400 bg-gray-50/50 focus:bg-white"
            />
          </div>

          <div className="flex flex-col group">
            <label className="text-base font-semibold text-gray-700 mb-2 transition-colors duration-200 group-focus-within:text-amber-600">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input 
              type="tel"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={onChange}
              required
              placeholder="0411234567"
              className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 hover:border-gray-400 bg-gray-50/50 focus:bg-white"
            />
          </div>                           

        </div>


        {/* Form Fields - Single */}
        <div className="flex flex-col group mt-6">
          <label className="text-base font-semibold text-gray-700 mb-2 transition-colors duration-200 group-focus-within:text-amber-600">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            required
            placeholder="Tell us about your inquiry, questions, or how we can help you..."
            className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 hover:border-gray-400 bg-gray-50/50 focus:bg-white resize-y min-h-[150px]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-200 mt-6">
          <p className="text-sm text-gray-500">
            <span className="text-red-500">*</span> Required fields
          </p>
          <button
            type="submit"
            className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-3 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto flex items-center justify-center gap-2 hover:cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            Send Message
          </button>
        </div>
      </form>

    </div>
  );
}

export default ContactForm;
