import './App.css'

function App() {
  return (
    <>
 <div className="header-grid">
  <div className="header-item">
    <a href="https://panzarino.org">
      <h3
        style={{
          marginTop: "-5px",
          textAlign: "center",
          fontSize: 25,
          fontWeight: 700,
          fontFamily: '"Alegreya"'
        }}
      >
        <i className="fa fa-home" aria-hidden="true">
          <p className="home-header">Home</p>
        </i>
      </h3>
    </a>
  </div>
  <div className="header-item">
    <a href="https://panzarino.org/shop">
      <h3
        style={{
          marginTop: "-5px",
          textAlign: "center",
          fontSize: 25,
          fontWeight: 700,
          fontFamily: '"Alegreya"'
        }}
      >
        <i className="fa-solid fa-bag-shopping">
          <p className="shop">Services</p>
        </i>
      </h3>
    </a>
  </div>
  <div className="header-item">
    <a href="https://panzarino.org">
      <h3 style={{ fontSize: 24, fontWeight: 700, fontFamily: '"Alegreya"' }}>
        Panzarino
      </h3>
    </a>
  </div>
  <div className="header-item">
    <a href="https://panzarino.org/posts">
      <h3
        style={{
          marginTop: "-5px",
          textAlign: "center",
          fontSize: 25,
          fontWeight: 700,
          fontFamily: '"Alegreya"'
        }}
      >
        <i className="fas fa-blog">
          <p className="blog">Blog</p>
        </i>
      </h3>
    </a>
  </div>
  <div className="header-item">
    <a href="https://panzarino.org/checkout">
      <h3
        style={{
          marginTop: "-5px",
          textAlign: "center",
          fontSize: 25,
          fontWeight: 700,
          fontFamily: '"Alegreya"'
        }}
      >
        <i className="fa-solid fa-cart-shopping">
          <p className="cart">Cart</p>
        </i>
      </h3>
    </a>
  </div>
</div>

    </>
  )
}

export default App
