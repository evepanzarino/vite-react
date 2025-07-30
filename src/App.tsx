import './App.css'

function App() {
  return (
    <>
      
 <div className="header-grid">
  <div className="header-item">
    <a href="https://panzarino.org">
      <h3
        style={{
          textAlign: "center",
      
          fontWeight: 700,
          fontFamily: '"Alegreya"'
        }}
      >
     
          <p className="home-header">Home</p>
      
      </h3>
    </a>
  </div>
  <div className="header-item">
    <a href="https://panzarino.org/shop">
      <h3
        style={{
          textAlign: "center",
          
          fontWeight: 700,
          fontFamily: '"Alegreya"'
        }}
      >
   
          <p className="shop">Services</p>
        
      </h3>
    </a>
  </div>
  <div className="header-item">
    <a href="https://panzarino.org">
      <h3 style={{  fontWeight: 700, fontFamily: '"Alegreya"' }}>
        Panzarino
      </h3>
    </a>
  </div>
  <div className="header-item">
    <a href="https://panzarino.org/posts">
      <h3
        style={{
   
          textAlign: "center",
    
          fontWeight: 700,
          fontFamily: '"Alegreya"'
        }}
      >
     
          <p className="blog">Blog</p>
    
      </h3>
    </a>
  </div>
  <div className="header-item">
    <a href="https://panzarino.org/checkout">
      <h3
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontFamily: '"Alegreya"'
        }}
      >

          <p className="cart">Cart</p>
     
      </h3>
    </a>
  </div>
</div>

    </>
  )
}

export default App
