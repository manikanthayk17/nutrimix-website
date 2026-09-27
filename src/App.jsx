import "./App.css";

function App() {
  const whatsappNumber = "919591055805";

  const orderProduct = (product) => {
    const message = `Hello NUTRIMIX, I want to order ${product}. Please share the available options.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="website">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          NUTRIMIX
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="nav-order-btn"
          onClick={() => orderProduct("NUTRIMIX")}
        >
          Order Now
        </button>

      </nav>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <p className="small-title">
            THE HEALTH COMPANION
          </p>

          <h1>
            Premium Dry Fruits
            <br />
            & Pure Honey
          </h1>

          <p className="hero-text">
            Delicious premium dry fruits, natural ingredients
            and pure honey for your everyday nutrition.
          </p>

          <div className="hero-buttons">

            <a
              className="shop-btn"
              href="#products"
            >
              Shop Now
            </a>

            <a
              className="whatsapp-btn"
              href="https://wa.me/919591055805?text=Hello%20NUTRIMIX,%20I%20want%20to%20place%20an%20order."
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Order
            </a>

          </div>


          {/* FEATURES */}

          <div className="features">

            <div className="feature">
              <span>🌿</span>
              <p>Natural Ingredients</p>
            </div>

            <div className="feature">
              <span>🥜</span>
              <p>Premium Dry Fruits</p>
            </div>

            <div className="feature">
              <span>🍯</span>
              <p>Pure Honey</p>
            </div>

          </div>

        </div>


        {/* HERO IMAGE */}

        <div className="hero-image">

          <img
            src="/images/nutrimix-poster.jpeg"
            alt="NUTRIMIX Premium Products"
          />

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}

      <section className="products" id="products">

        <p className="section-small">
          OUR PRODUCTS
        </p>

        <h2>
          Taste Meets Nutrition
        </h2>

        <p className="section-description">
          Discover our premium products made with carefully
          selected ingredients.
        </p>


        <div className="product-container">


          {/* NUTRIMIX */}

          <div className="product-card">

            <div className="product-icon">
              🥜
            </div>

            <h3>
              NUTRIMIX
            </h3>

            <p>
              Premium dry fruits blended with natural
              ingredients and pure honey.
            </p>


            <div className="prices">

              <div>
                <span>25 ml</span>
                <strong>₹30</strong>
              </div>

              <div>
                <span>50 ml</span>
                <strong>₹55</strong>
              </div>

              <div>
                <span>75 ml</span>
                <strong>₹70</strong>
              </div>

            </div>


            <button
              className="product-order-btn"
              onClick={() => orderProduct("NUTRIMIX")}
            >
              Order NUTRIMIX
            </button>

          </div>


          {/* MASALA TANGYA */}

          <div className="product-card">

            <div className="product-icon">
              🌶️
            </div>

            <h3>
              MASALA TANGYA
            </h3>

            <p>
              A delicious combination of dry fruits,
              seeds, lemon and special spices.
            </p>


            <div className="prices">

              <div>
                <span>25 ml</span>
                <strong>₹30</strong>
              </div>

              <div>
                <span>50 ml</span>
                <strong>₹55</strong>
              </div>

              <div>
                <span>75 ml</span>
                <strong>₹70</strong>
              </div>

            </div>


            <button
              className="product-order-btn"
              onClick={() => orderProduct("MASALA TANGYA")}
            >
              Order MASALA TANGYA
            </button>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="why-us" id="about">

        <p className="section-small">
          WHY NUTRIMIX?
        </p>

        <h2>
          Made With Goodness
        </h2>

        <p className="section-description">
          We focus on quality ingredients and delicious
          combinations for everyday enjoyment.
        </p>


        <div className="why-container">

          <div className="why-card">

            <span>🌿</span>

            <h3>
              Natural
            </h3>

            <p>
              Carefully selected ingredients.
            </p>

          </div>


          <div className="why-card">

            <span>🥜</span>

            <h3>
              Premium
            </h3>

            <p>
              Quality dry fruits and seeds.
            </p>

          </div>


          <div className="why-card">

            <span>🍯</span>

            <h3>
              Pure Honey
            </h3>

            <p>
              Made with quality honey.
            </p>

          </div>


          <div className="why-card">

            <span>❤️</span>

            <h3>
              Made With Care
            </h3>

            <p>
              Prepared with attention to quality.
            </p>

          </div>

        </div>

      </section>


      {/* ================= OFFER ================= */}

      <section className="offer">

        <div className="offer-content">

          <p className="offer-small">
            LIMITED OFFER
          </p>

          <h2>
            Get 8% OFF
          </h2>

          <p>
            On your next order
          </p>

        </div>

        <button
          className="offer-btn"
          onClick={() => orderProduct("NUTRIMIX")}
        >
          Claim Offer
        </button>

      </section>


      {/* ================= CONTACT ================= */}

      <section className="contact" id="contact">

        <p className="section-small">
          CONTACT US
        </p>

        <h2>
          Ready to Try NUTRIMIX?
        </h2>

        <p>
          Place your order directly through WhatsApp.
        </p>


        <div className="contact-buttons">

          <a
            className="contact-whatsapp"
            href="https://wa.me/919591055805?text=Hello%20NUTRIMIX,%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noreferrer"
          >
            📱 WhatsApp
          </a>


          <a
            className="instagram-btn"
            href="https://www.instagram.com/nutrimix.official/"
            target="_blank"
            rel="noreferrer"
          >
            📸 Instagram
          </a>

        </div>


        <div className="contact-info">

          <p>
            📞 <strong>9591055805</strong>
          </p>

          <p>
            📸 <strong>@nutrimix.official</strong>
          </p>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-logo">
          NUTRIMIX
        </div>

        <p className="footer-tagline">
          THE HEALTH COMPANION
        </p>

        <div className="footer-links">

          <a href="#home">
            Home
          </a>

          <a href="#products">
            Products
          </a>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        <p className="copyright">
          © 2026 NUTRIMIX. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;