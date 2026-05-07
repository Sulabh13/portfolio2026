export default function Services() {
  return (
    <section id="service" className="py-20 bg-gray-50">
      <div className="text-center">
        <h2 className="text-4xl font-bold">My Expertise</h2>
        <p className="text-gray-500">Digital Services</p>
      </div>

      <div className="max-w-7xl mx-auto mt-10 grid md:grid-cols-3 gap-8 px-6">

        <div className="shadow p-6 rounded-xl text-center">
          <h3 className="text-xl font-bold">Web Design</h3>
          <p className="text-gray-500 mt-3">
            Modern responsive designs.
          </p>
        </div>

        <div className="shadow p-6 rounded-xl text-center">
          <h3 className="text-xl font-bold">Web Development</h3>
          <p className="text-gray-500 mt-3">
            Clean scalable websites.
          </p>
        </div>

        <div className="shadow p-6 rounded-xl text-center">
          <h3 className="text-xl font-bold">Debugging</h3>
          <p className="text-gray-500 mt-3">
            Error-free performance.
          </p>
        </div>

      </div>
    </section>
  )
}