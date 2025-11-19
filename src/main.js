import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="No-Apto/src/icon/Imagen-3-generated-image-sunset-painting-monet.original.png" target="_blank">
      <img src="public/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="No-Apto/src/icon/photo-1689308271305-58e75832289b.jpg" target="_blank">
      <img src="src/javascript.svg" class="logo vanilla" alt="JavaScript logo" />
    </a>
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
