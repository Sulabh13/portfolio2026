export default function BlogModal({ post, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-[#fca61f] hover:text-[#6f34fe] transition-colors"
        >
          <i className="bi bi-x-circle-fill"></i>
        </button>

        <h4 className="font-bold text-xl mb-2" style={{ color: '#3f396d' }}>{post.title}</h4>
        <p className="text-gray-400 text-sm mb-4">{post.author} · {post.date}</p>

        <div className="flex gap-3 mb-4">
          <a href="https://in.linkedin.com/in/sulabh-hathi-933a512b5" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin fa-xl" style={{ color: '#0077b5' }}></i>
          </a>
          <a href="https://wa.me/916263110540" target="_blank" rel="noreferrer">
            <i className="bi bi-whatsapp text-xl text-green-500"></i>
          </a>
          <i className="fa-brands fa-x-twitter fa-xl text-gray-700"></i>
        </div>

        <div className="text-gray-600 text-sm space-y-3">
          <div>
            <h5 className="font-bold text-base mb-1" style={{ color: '#3f396d' }}>🔧 Technologies Used:</h5>
            <ul className="list-disc list-inside space-y-1">
              {post.content.tech.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-base mb-1" style={{ color: '#3f396d' }}>🧠 The Idea:</h5>
            <p>{post.content.idea}</p>
          </div>
          <div>
            <h5 className="font-bold text-base mb-1" style={{ color: '#3f396d' }}>💡 What I Learned:</h5>
            <ul className="list-disc list-inside space-y-1">
              {post.content.learned.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </div>
        </div>

        {/* Comment Form */}
        <div className="mt-6">
          <h5 className="font-bold text-lg mb-4" style={{ color: '#3f396d' }}>Leave A Comment</h5>
          <div className="space-y-3">
            {['Name', 'E-mail', 'Mobile No.'].map(ph => (
              <input
                key={ph}
                type="text"
                placeholder={ph}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#fca61f]"
              />
            ))}
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#fca61f]"
            />
            <button className="bg-[#fca61f] text-white px-8 py-2 rounded-full font-semibold hover:bg-[#6f34fe] transition-colors duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}



