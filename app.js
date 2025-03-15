import { Holo } from 'holo-js';
import 'beercss';
import 'material-dynamic-colors';

const app = Holo.init();
app.setTitle("NEOAPPS");

app.render(`
<header class ="navbar">
  <nav>
<img src="https://github.com/neoapps-dev.png" id="small-pic" alt="Yamen Hermassi" class="profile-picture-small">
  <h5 class="max">About me</h5>
    <button id="menu" class="circle ripple transparent">
      <i>more_vert</i>
    </button>
  </nav>
</header>

<div class="page active" id="placeholder">
<div class="centered-layout">
<progress class="circle"></progress>
</div>
</div>

<div class="page" id="main-content">
  <div class="container">
    <img src="https://github.com/neoapps-dev.png" alt="NEOAPPS" class="profile-picture">

    <div class="card">
      <div class="card-body">
        <h3 class="wavy">Who are you?</h3>
        <p>
          I'm a <span class="wavy">15yo</span> Android and Web developer passionate about creating elegant and efficient mobile and web applications.
          My focus is on <span class="wavy">reinventing the wheel</span>, utility app development, and experimenting with programming langauges.
        </p>
        <p>I specialize in Rust, Java, Dart, C++, C, <a href="https://github.com/astralang">Astra</a> and Javascript, always striving to build apps that offer a seamless experience.</p>
      </div>
    </div>
    
    <h4>Projects</h4>
    
<article class="round">
    <div class="projects">
      <div class="card">
        <div class="card-body">
          <h5 style="margin-left: 12px">Holo.js</h5>
          <p style="margin-left: 8px">The new UI framework for Javascript. (fun fact: this website is built with it)</p>
          <button onclick="window.location.href = 'https://holo.js.org'" id="button1" style="margin-top: 6px" class="ripple">View Project</button>
        </div>
      </div>
    </div>
    </article>
<article class="round">
    <div class="projects">
      <div class="card">
        <div class="card-body">
          <h5 style="margin-left: 12px">Astra</h5>
          <p style="margin-left: 8px">The powerful transpiled programming language.</p>
          <button onclick="https://astralang.netlify.app" id="button1" style="margin-top: 6px" class="ripple">View Project</button>
        </div>
      </div>
    </div>
    </article>
<article class="round">
    <div class="projects">
      <div class="card">
        <div class="card-body">
          <h5 style="margin-left: 12px">Dartcore</h5>
          <p style="margin-left: 8px">The powerful Dart HTTP server framework, with middleware, auth, headers and more!</p>
          <button onclick="https://dartcore.netlify.app" id="button1" style="margin-top: 6px" class="ripple">View Project</button>
        </div>
      </div>
    </div>
    </article>
<article class="round">
    <div class="projects">
      <div class="card">
        <div class="card-body">
          <h5 style="margin-left: 12px">Uni</h5>
          <p style="margin-left: 8px">The powerful package manager for GNU/Linux systems.</p>
          <button onclick="https://github.com/neoapps-dev/uni" id="button1" style="margin-top: 6px" class="ripple">View Project</button>
        </div>
      </div>
    </div>
    </article>
<article class="round">
    <div class="projects">
      <div class="card">
        <div class="card-body">
          <h5 style="margin-left: 12px">EasyLua</h5>
          <p style="margin-left: 8px"> lightweight Lua utility library designed to simplify everyday programming tasks.</p>
          <button onclick="https://easylua.foo.ng" id="button1" style="margin-top: 6px" class="ripple">View Project</button>
        </div>
      </div>
    </div>
    </article>
<article class="round">
    <div class="projects">
      <div class="card">
        <div class="card-body">
          <h5 style="margin-left: 12px">BuildIt</h5>
          <p style="margin-left: 8px">a simple and universal solution for automating build processes across multiple platforms,</p>
          <button onclick="https://github.com/neoapps-dev/buildit" id="button1" style="margin-top: 6px" class="ripple">View Project</button>
        </div>
      </div>
    </div>
    </article>
<article class="round">
    <div class="projects">
      <div class="card">
        <div class="card-body">
          <h5 style="margin-left: 12px">eBash</h5>
          <p style="margin-left: 8px">a variety of aliases and functions to make your bash experience easier.</p>
          <button onclick="https://github.com/neoapps-dev/ebash" id="button1" style="margin-top: 6px" class="ripple">View Project</button>
        </div>
      </div>
    </div>
    </article>

<hr style="margin-top: 300px">

    <div class="footer">
      &copy; 2025 NEOAPPS (based on yamenher's website). All rights reserved.
    </div>
  </div>
</div>

<div class="snackbar" id="snackbar" popover>
  <span>Redirecting...</span>
</div>

<div id="blur" class="overlay blur"></div>
<dialog id="dialog" class="modal top" popover>
  <h5 class="wavy">My Links</h5>
  <div>
    <p>Check out these useful links:</p>
    <div>
      <button class="ripple" onclick="window.open('https://t.me/neoapps_music', '_blank')"><i class="fa-brands fa-telegram"></i>Telegram</button>
      <button class="ripple" onclick="window.open('https://github.com/neoapps-dev', '_blank')"><i class="fa-brands fa-github"></i>GitHub</button>
    </div>
  </div>
</dialog>
<style>:root,
 body.dark { 
  --primary: rgb(255 181 160);
  --surface-tint: rgb(255 181 160);
  --on-primary: rgb(86 31 15);
  --primary-container: rgb(114 53 35);
  --on-primary-container: rgb(255 219 209);
  --secondary: rgb(231 189 178);
  --on-secondary: rgb(68 42 34);
  --secondary-container: rgb(93 64 55);
  --on-secondary-container: rgb(255 219 209);
  --tertiary: rgb(216 197 141);
  --on-tertiary: rgb(59 47 5);
  --tertiary-container: rgb(83 70 25);
  --on-tertiary-container: rgb(245 225 167);
  --error: rgb(255 180 171);
  --on-error: rgb(105 0 5);
  --error-container: rgb(147 0 10);
  --on-error-container: rgb(255 218 214);
  --background: rgb(26 17 15);
  --on-background: rgb(241 223 218);
  --surface: rgb(26 17 15);
  --on-surface: rgb(241 223 218);
  --surface-variant: rgb(83 67 63);
  --on-surface-variant: rgb(216 194 188);
  --outline: rgb(160 140 135);
  --outline-variant: rgb(83 67 63);
  --shadow: rgb(0 0 0);
  --scrim: rgb(0 0 0);
  --inverse-surface: rgb(241 223 218);
  --inverse-on-surface: rgb(57 46 43);
  --inverse-primary: rgb(143 76 56);
  --primary-fixed: rgb(255 219 209);
  --on-primary-fixed: rgb(58 11 1);
  --primary-fixed-dim: rgb(255 181 160);
  --on-primary-fixed-variant: rgb(114 53 35);
  --secondary-fixed: rgb(255 219 209);
  --on-secondary-fixed: rgb(44 21 15);
  --secondary-fixed-dim: rgb(231 189 178);
  --on-secondary-fixed-variant: rgb(93 64 55);
  --tertiary-fixed: rgb(245 225 167);
  --on-tertiary-fixed: rgb(35 27 0);
  --tertiary-fixed-dim: rgb(216 197 141);
  --on-tertiary-fixed-variant: rgb(83 70 25);
  --surface-dim: rgb(26 17 15);
  --surface-bright: rgb(66 55 52);
  --surface-container-lowest: rgb(20 12 10);
  --surface-container-low: rgb(35 25 23);
  --surface-container: rgb(39 29 27);
  --surface-container-high: rgb(50 40 37);
  --surface-container-highest: rgb(61 50 47);
}
    body {
      font-family: 'Outfit', sans-serif;
      background-color: var(--surface);
      color: var(--on-surface);
      margin: 0;
      padding-top: 30px;
    }
    
    header, .navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  z-index: 10; 
}

    .container {
      max-width: 960px;
      margin: 24px auto;
      padding: 24px;
    }

    .profile-picture {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      display: block;
      margin-bottom: 16px;
      border: 3px solid var(--md-sys-color-primary);
      box-shadow: 0px 0px 12px rgba(76, 175, 80, 0.5);
    }
    
     .profile-picture-small {
      width: 40pxpx;
      height: 40px;
      border-radius: 50%;
      display: block;
    }

    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
      margin-top: 16px;
    }

    .footer {
      text-align: center;
      padding: 16px;
      font-size: 0.9rem;
      color: var(--md-sys-color-outline);
      margin-top: 40px;
    }
    
    .centered-layout {
        display: grid;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .wavy {
        text-decoration-line: underline;
        text-decoration-color: var(--primary);
        text-decoration-style: wavy;
        text-decoration-thickness: 1px;
    }
  
    @font-face {
        font-family: 'ProductSansFont';
        src: url('fonts/product_sans_regular.ttf') format('truetype');
    }

    * {
        font-family: 'ProductSansFont', sans-serif;
    }
</style>
`);
const navbar = document.querySelector('.navbar');
const navHeight = navbar.offsetHeight;
let ticking = false;
let totalHeight = 140;
let scrollPercentage = 0;
const dialog = document.getElementById("dialog");
let lastScrollTime = 0;
const scrollDelay = 1;

window.addEventListener('scroll', function() {
    const now = Date.now();
    if (now - lastScrollTime >= scrollDelay) {
        const scrollOffset = window.scrollY;
        scrollPercentage = (scrollOffset / totalHeight);

        if (scrollPercentage <= 1) {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    document.getElementById("small-pic").style.width = 40 * scrollPercentage + "px";
                    document.getElementById("small-pic").style.height = 40 * scrollPercentage + "px";
                });
            }
        }
        lastScrollTime = now;
    }
});

document.getElementById('button1').addEventListener('click', function() {
    delayedExecution();
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
app.expose(delay);

async function delayedExecution() {
    document.querySelector('#snackbar').showPopover();
    await delay(1500);
    window.location.href = 'https://github.com/yamenher/x-signer';
    await delay(1000);
    document.querySelector('#snackbar').hidePopover();
}
app.expose(delayedExecution);

async function hidePlaceholder() {
    await delay(1550);
    document.getElementById("placeholder").classList.remove("active");
    document.getElementById("main-content").classList.add("active");
}
app.expose(hidePlaceholder);

hidePlaceholder();
document.getElementById("small-pic").style.width = "0px";
document.getElementById("small-pic").style.height = "0px";

document.getElementById('menu').addEventListener('click', function() {
    dialog.showPopover();
    document.getElementById("blur").classList.add("active");
    document.body.style.overflow = 'hidden'; 
    window.addEventListener('click', (e) => {
    if (e.target == document.getElementById("blur")) {
      dialog.close();
      document.getElementById("blur").classList.remove("active");
      document.body.style.overflow = ''; 
    }
  });
});

app.exposeAsApp(); // for debugging purposes, remove on prod lol
