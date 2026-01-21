import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          MY LARGE <span>PENS</span>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="cart">🛒</div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h2>WELCOME TO</h2>
          <h1>
            MY LARGE <span>PENS</span>
          </h1>
          <p>The Best Place to Buy Oversized Vape Pens!</p>
          <button className="btn">SHOP NOW</button>
        </div>
        <Image
          src="/hero.png"
          width={420}
          height={420}
          alt="Large Vape Pens"
        />
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <h2>OUR LARGE PENS</h2>

        <div className="product-grid">
          <div className="card">
            <Image src="/pen-black.png" width={300} height={300} alt="" />
            <h3>Stealth Black Vape Pen</h3>
            <p className="price">$149.99</p>
            <button className="btn">View Details</button>
          </div>

          <div className="card">
            <Image src="/pen-pink.png" width={300} height={300} alt="" />
            <h3>Swizz Pink Vape Pen</h3>
            <p className="price">$149.99</p>
            <button className="btn">View Details</button>
          </div>

          <div className="card">
            <Image src="/pen-white.png" width={300} height={300} alt="" />
            <h3>Mega White Vape Pen</h3>
            <p className="price">$149.99</p>
            <button className="btn">View Details</button>
          </div>
        </div>
      </section>
    </main>
  );
}
