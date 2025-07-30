import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

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
       <FontAwesomeIcon icon={faHouse} />
          <p className="home-header">Home</p>
        </i>
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
       <FontAwesomeIcon icon={faHouse} />
          <p className="shop">Services</p>
        </i>
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
      <FontAwesomeIcon icon={faHouse} />
          <p className="blog">Blog</p>
        </i>
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
    <FontAwesomeIcon icon={faHouse} />
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
