import './App.css'

function App() {
  return (
    <>
      
 <div className="header-grid">
  <div className="header-item" id={style.menu}>
    <a href="https://panzarino.org">
      <h3
        style={{
          textAlign: "center",
      
          fontWeight: 700,
          fontFamily: '"Alegreya"'
        }}
      >
     Home
      
      
      </h3>
    </a>
  </div>
  <div className="header-item" id={style.menu}>
    <a href="https://panzarino.org/shop">
      <h3
        style={{
          textAlign: "center",
          
          fontWeight: 700,
          fontFamily: '"Alegreya"'
        }}
      >
   
Shop
        
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
  <div className="header-item" id={style.menu}>
    <a href="https://panzarino.org/posts">
      <h3
        style={{
   
          textAlign: "center",
    
          fontWeight: 700,
          fontFamily: '"Alegreya"'
        }}
      >
     
    Blog
    
      </h3>
    </a>
  </div>
  <div className="header-item" id={style.menu}>
    <a href="https://panzarino.org/checkout">
      <h3
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontFamily: '"Alegreya"'
        }}
      >
     Checkout
      </h3>
    </a>
  </div>
</div>

    </>
  )
}

export default App
