import { Holo } from 'holo-js';
import 'beercss';
import 'material-dynamic-colors';

const app = Holo.init(true);
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
--primary:#9ecaff;
--on-primary:#003258;
--primary-container:#00497d;
--on-primary-container:#d1e4ff;
--secondary:#bbc7db;
--on-secondary:#253140;
--secondary-container:#3b4858;
--on-secondary-container:#d7e3f7;
--tertiary:#d6bee4;
--on-tertiary:#3b2948;
--tertiary-container:#523f5f;
--on-tertiary-container:#f2daff;
--error:#ffb4ab;
--on-error:#690005;
--error-container:#93000a;
--on-error-container:#ffb4ab;
--background:#1a1c1e;
--on-background:#e2e2e6;
--surface:#121316;
--on-surface:#e2e2e6;
--surface-variant:#43474e;
--on-surface-variant:#c3c7cf;
--outline:#8d9199;
--outline-variant:#43474e;
--shadow:#000000;
--scrim:#000000;
--inverse-surface:#e2e2e6;
--inverse-on-surface:#2f3033;
--inverse-primary:#0061a4;
--surface-dim:#121316;
--surface-bright:#38393c;
--surface-container-lowest:#0d0e11;
--surface-container-low:#1a1c1e;
--surface-container:#1e2022;
--surface-container-high:#282a2d;
--surface-container-highest:#333538;
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
