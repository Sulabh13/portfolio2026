import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleWhatsAppChat = () => {
    const greeting = formData.name.trim()
      ? `Hi Sulabh, I'm ${formData.name.trim()}.`
      : 'Hi Sulabh,'

    const parts = [
      greeting,
      formData.phone.trim() ? `Phone: ${formData.phone.trim()}` : null,
      formData.email.trim() ? `Email: ${formData.email.trim()}` : null,
      formData.message.trim()
        ? `Message: ${formData.message.trim()}`
        : 'I saw your portfolio and would like to connect with you regarding an opportunity/project!',
    ].filter(Boolean)

    const whatsappUrl = `https://wa.me/916263110540?text=${encodeURIComponent(parts.join('\n'))}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const contactDetails = [
    {
      icon: 'bi-geo-alt-fill',
      label: 'Location',
      text: 'Balaghat, Madhya Pradesh, India',
      href: null,
      color: '#fca61f',
    },
    {
      icon: 'bi-telephone-fill',
      label: 'Call',
      text: '+91 62631-10540',
      href: 'tel:+916263110540',
      color: '#fca61f',
    },
    {
      icon: 'bi-whatsapp',
      label: 'WhatsApp Chat',
      text: '+91 62631-10540 (Chat Online)',
      href: 'https://wa.me/916263110540?text=Hi%20Sulabh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!',
      color: '#25D366',
      badge: 'Available',
    },
    {
      icon: 'bi-send-fill',
      label: 'Email',
      text: 'kumarsulabh2003@gmail.com',
      href: 'mailto:kumarsulabh2003@gmail.com',
      color: '#fca61f',
    },
    {
      icon: 'bi-globe-americas',
      label: 'Website',
      text: 'sulabh.com',
      href: 'https://sulabh.com',
      color: '#fca61f',
    },
  ]

  return (
    <section id="contact" className="py-16 px-6" style={{ backgroundColor: '#f3f3f3' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#6f34fe] text-xl font-semibold">Get in Touch</p>
          <h3 className="text-4xl font-bold mt-2" style={{ color: '#3f396d' }}>
            Any Questions? Feel Free to Contact
          </h3>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm sm:text-base">
            Reach out via form or start an instant chat on WhatsApp for a faster response.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Details & WhatsApp Card */}
          <div className="flex-1 w-full space-y-6" data-aos="slide-right">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-5">
              <h4 className="text-xl font-bold text-[#3f396d] mb-4">Contact Information</h4>
              {contactDetails.map(({ icon, label, text, href, color, badge }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                    style={{ backgroundColor: `${color}18` }}
                  >
                    <i className={`bi ${icon} text-2xl`} style={{ color }}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                        {label}
                      </span>
                      {badge && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          {badge}
                        </span>
                      )}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-700 text-base sm:text-lg font-medium hover:text-[#6f34fe] transition-colors truncate block"
                      >
                        {text}
                      </a>
                    ) : (
                      <p className="text-gray-700 text-base sm:text-lg font-medium truncate">{text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp Action Box */}
            <div className="bg-gradient-to-r from-[#25D366]/15 via-emerald-50 to-white rounded-2xl p-6 border border-[#25D366]/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-3xl shadow-md shrink-0">
                  <i className="bi bi-whatsapp"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#3f396d] text-lg">Instant WhatsApp Chat</h4>
                  <p className="text-gray-600 text-sm">Usually responds in minutes. Click to connect!</p>
                </div>
              </div>
              <a
                href="https://wa.me/916263110540?text=Hi%20Sulabh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <i className="bi bi-whatsapp text-lg"></i>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 w-full" data-aos="slide-left">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold text-[#3f396d] mb-2">Send a Message</h4>
              <p className="text-gray-500 text-sm mb-6">
                Fill the form below to send an email, or tap WhatsApp to message directly.
              </p>

              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                <input type="hidden" name="access_key" value="6942c2b0-fb2e-4812-b3c4-1be1259080e7" />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-[#6f34fe] focus:ring-2 focus:ring-[#6f34fe]/10 transition-all"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail Address"
                    required
                    className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-[#6f34fe] focus:ring-2 focus:ring-[#6f34fe]/10 transition-all"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile / WhatsApp No."
                    className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-[#6f34fe] focus:ring-2 focus:ring-[#6f34fe]/10 transition-all"
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-[#6f34fe] focus:ring-2 focus:ring-[#6f34fe]/10 transition-all"
                />

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-[#fca61f] text-white px-6 py-3.5 rounded-full text-base font-semibold hover:bg-[#6f34fe] hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <i className="bi bi-send-fill text-sm"></i>
                    <span>Submit Form</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppChat}
                    className="flex-1 bg-[#25D366] text-white px-6 py-3.5 rounded-full text-base font-semibold hover:bg-[#20ba5a] hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <i className="bi bi-whatsapp text-lg"></i>
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}