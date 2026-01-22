export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-b from-sky-100 to-white pt-24 pb-20 px-6 text-center">
        <h2 className="text-sm font-semibold tracking-wide text-gray-600">
          WELCOME TO
        </h2>

        <h1 className="text-4xl md:text-5xl font-extrabold mt-1">
          MY LARGE <span className="text-pink-500">PENS</span>
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          The Best Place to Buy Oversized Vape Pens!
        </p>

        <button
          className="mt-6 bg-pink-500 text-white px-8 py-3 rounded-lg shadow hover:bg-pink-600 transition"
        >
          SHOP NOW
        </button>

        <div className="mt-12 flex justify-center">
          <img
            src="/hero-example.png" // replace with your hero image
            className="rounded-xl w-full max-w-3xl"
            alt="Hero"
          />
        </div>
      </section>

      {/* PRODUCT GRID SECTION */}
      <section className="w-full max-w-7xl pt-16 px-6 pb-24">
        <h2 className="text-3xl font-bold text-center">
          OUR LARGE PENS
        </h2>

        <p className="text-center text-gray-600 mt-2 mb-10">
          Browse our oversized vape pens for sale!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* PRODUCT CARD TEMPLATE */}
          {[
            {
              name: "Stealth Black Vape Pen",
              price: "$149.99",
              img: "/products/black.webp"
            },
            {
              name: "Swizz Pink Vape Pen",
              price: "$149.99",
              img: "/products/pink.webp"
            },
            {
              name: "Mega White Vape Pen",
              price: "$149.99",
              img: "/products/mega-white.webp"
            },
            {
              name: "Mega White Vape Pen (Blue Dream)",
              price: "$149.99",
              img: "/products/mega-blue.webp"
            },
            {
              name: "Zet Extracts Blue Vape Pen",
              price: "$149.99",
              img: "/products/zet-blue.webp"
            },
            {
              name: "MAD RED 100+ Vape Pen",
              price: "$149.99",
              img: "/products/mad-red.webp"
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center"
            >
              <span className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full mb-3">
                NEW
              </span>

              <img src={p.img} alt={p.name} className="w-40 h-40 object-contain mb-4" />

              <h3 className="font-semibold text-lg text-center mb-1">
                {p.name}
              </h3>

              <p className="text-gray-800 font-bold mb-4">{p.price}</p>

              <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
                VIEW DETAILS
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
