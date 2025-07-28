import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <div class="header-grid">
	<div class="header-item">
	<a href="https://panzarino.org"><h3 style="margin-top:-5px;text-align:center;font-size: 25px; font-weight:700; font-family: 'Alegreya';"><i class="fa fa-home" aria-hidden="true"><p class="home-header">Home</p></i></h3></a>
	</div>
	<div class="header-item">
	<a href="https://panzarino.org/shop"><h3 style="margin-top:-5px;text-align:center;font-size: 25px; font-weight:700; font-family: 'Alegreya';"><i class="fa-solid fa-bag-shopping"><p class="shop">Services</p></i></h3></a>
	</div>
	<div class="header-item">
		<a href="https://panzarino.org"><h3 style="font-size: 24px;font-weight:700; font-family: 'Alegreya';">Panzarino</h3></a>
	
	</div>
	<div class="header-item">
	<a href="https://panzarino.org/posts"><h3 style="margin-top:-5px;text-align:center;font-size: 25px; font-weight:700; font-family: 'Alegreya';"><i class='fas fa-blog'><p class="blog">Blog</p></i></h3></a>
	</div>
		<div class="header-item">
	<a href="https://panzarino.org/checkout"><h3 style="margin-top:-5px;text-align:center;font-size: 25px; font-weight:700; font-family: 'Alegreya';"><i class="fa-solid fa-cart-shopping"><p class="cart">Cart</p></i></h3></a>
	</div>
	</div>
    </>
  )
}

export default App
