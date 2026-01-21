import Image from "next/image";

export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h3 className="welcome">WELCOME TO</h3>
          <h1 className="title">
            MY LARGE <span>PENS</span>
          </h1>
          <p>The Best Place to Buy Oversized Vape Pens!</p>
          <button className="shop-btn">SHOP NOW</button>
        </div>

        <div className="hero-right">
          <Image
            src="/samples/hero-pen.png"
            width={400}
            height={400}
            alt="Hero Pen"
            className="hero-img"
          />
        </div>
      </section>

      {/* PRODUCT CATALOG */}
      <section className="catalog">
        <h2 className="catalog-title">OUR LARGE PENS</h2>
        <p>Browse our oversized vape pens for sale!</p>

        <div className="product-grid">

          {/* PRODUCT CARD 1 */}
          <div className="product-card">
            <span className="badge">NEW</span>
            <Image
              src="/samples/pen-black.png"
              width={280}
              height={280}
              alt="Stealth Black Pen"
            />
            <h3>Stealth Black Vape Pen</h3>
            <p className="stars">★★★★★</p>
            <p className="price">$149.99</p>
            <button className="details-btn">VIEW DETAILS</button>
          </div>

          {/* PRODUCT CARD 2 */}
          <div className="product-card">
            <span className="badge">NEW</span>
            <Image
              src="/samples/pen-pink.png"
              width={280}
              height={280}
              alt="Pink Vape Pen"
            />
            <h3>Swizz Pink Vape Pen</h3>
            <p className="stars">★★★★★</p>
            <p className="price">$149.99</p>
            <button className="details-btn">VIEW DETAILS</button>
          </div>

          {/* PRODUCT CARD 3 */}
          <div className="product-card">
            <span className="badge">NEW</span>
            <Image
              src="/samples/pen-mega.png"
              width={280}
              height={280}
              alt="Mega White Pen"
            />
            <h3>Mega White Vape Pen</h3>
            <p className="stars">★★★★★</p>
            <p className="price">$149.99</p>
            <button className="details-btn">VIEW DETAILS</button>
          </div>

        </div>
      </section>
    </main>
  );
}
