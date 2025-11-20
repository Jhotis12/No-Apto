import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import img1 from "../icon/img1.png"
import img2 from "../icon/img2.jpg"
document.querySelector('#app').innerHTML = `
  <div>
    
      <img src="icon/img1.png" />
      <img src="icon/img2.jpg"  alt="img 2" style ="height:450px" />
      
    
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
