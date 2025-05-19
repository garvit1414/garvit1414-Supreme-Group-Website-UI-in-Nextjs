export default function ContactSection() {
    return (
      <section id="contact" className="bg-[#0057B8] text-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="space-y-6">
            <h2 className="text-4xl font-semibold">Get in touch</h2>
            <div className="w-16 h-1 bg-white"></div>
            <p className="text-lg">For general enquiries</p>
            <div className="space-y-2 text-base">
              <p><strong>Address :</strong> 110, 16th Road, Chembur, Mumbai – 400071</p>
              <p><strong>Phone :</strong> +91 22 25208822</p>
              <p><strong>Email :</strong> info@supremegroup.co.in</p>
            </div>
          </div>
  
   
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-transparent border-b border-white placeholder-white py-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full bg-transparent border-b border-white placeholder-white py-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border-b border-white placeholder-white py-2 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-transparent border-b border-white placeholder-white py-2 focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="mt-4 bg-white text-black rounded-full px-6 py-2 font-medium"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    )
  }
  