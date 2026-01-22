export default function Home() {
  return (
    <main className="w-full flex flex-col items-center bg-white">

      {/* PRODUCT GRID SECTION */}
      <section className="w-full max-w-7xl pt-28 px-6 pb-24">
        
        <h1 className="text-4xl font-extrabold text-center mb-4">
          MY LARGE <span className="text-pink-500">PENS</span>
        </h1>

        <p className="text-center text-gray-600 text-lg mb-12">
          Oversized vape pens — custom, collectible, and massive.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              name: "Mega Besos Vape Pen",
              price: "$149.99",
              img: "/besos.jpg",
,
            },
            {
              name: "Mega Sweetz Vape Pen",
              price: "$149.99",
              img: "/products/pink.webp",
            },
            {
              name: "Mega Locked & Loaded Vape Pen",
              price: "$149.99",
              img: "/products/mega-white.webp",
            },
            {
              name: "Mega Mad Labs Vape Pen",
              price: "$149.99",
              img: "/products/mega-blue.webp",
            },
            {
              name: "Mega Zet Extracts Vape Pen",
              price: "$149.99",
              img: "/products/zet-blue.webp",
            },
            {
              name: "Mega BowHouse Vape Pen",
              price: "$149.99",
              img: "/products/mad-red.webp",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center hover:shadow-2xl transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-44 h-44 object-contain mb-6"
              />

              <h3 className="font-semibold text-lg text-center mb-1">
                {p.name}
              </h3>

              <p className="text-gray-800 font-bold mb-4">{p.price}</p>

              <button className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600 transition">
                VIEW DETAILS
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
