export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6" style={{ backgroundColor: '#f3f3f3' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#6f34fe] text-xl font-semibold">Get in Touch</p>
          <h3 className="text-4xl font-bold mt-2" style={{ color: '#3f396d' }}>
            Any Questions? Feel Free to Contact
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Details */}
          <div className="flex-1 space-y-5" data-aos="slide-right">
            {[
              { icon: 'bi-geo-alt-fill', text: 'Balaghat, Madhya Pradesh, India' },
              { icon: 'bi-telephone-fill', text: '+91 62631-10540' },
              { icon: 'bi-send-fill', text: 'kumarsulabh2003@gmail.com' },
              { icon: 'bi-globe-americas', text: 'sulabh.com' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-4">
                <i className={`bi ${icon} text-2xl`} style={{ color: '#fca61f' }}></i>
                <p className="text-gray-600 text-lg">{text}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="flex-1" data-aos="slide-left">
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="6942c2b0-fb2e-4812-b3c4-1be1259080e7" />
              {[
                { name: 'name', placeholder: 'Name', type: 'text' },
                { name: 'email', placeholder: 'E-mail', type: 'email' },
                { name: 'phone', placeholder: 'Mobile No.', type: 'text' },
              ].map(({ name, placeholder, type }) => (
                <input
                  key={name}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  required
                  className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fca61f] transition-colors"
                />
              ))}
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                required
                className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fca61f] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#fca61f] text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-[#6f34fe] hover:-translate-y-1 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}