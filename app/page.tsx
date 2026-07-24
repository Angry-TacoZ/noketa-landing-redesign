"use client";

import { MouseEvent, useRef } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const canvas = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: MouseEvent<HTMLElement>) {
    const node = canvas.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${(event.clientX - rect.left) / rect.width}`);
    node.style.setProperty("--my", `${(event.clientY - rect.top) / rect.height}`);
  }

  return (
    <main>
      <section className="hero" onPointerMove={handlePointerMove}>
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Noketa home">
            <span className="brand-mark">✦</span> NOKETA
          </a>
          <div className="nav-links">
            <a href="#platform">Platform</a>
            <a href="#workflow">Workflow</a>
            <a href="#developers">Developers</a>
          </div>
          <a className="text-link" href="#start">Sign in <Arrow /></a>
        </nav>

        <div className="hero-copy" id="top">
          <p className="eyebrow enter-one"><span /> The email operating system</p>
          <h1 className="enter-two">Email is a<br /><em>living system.</em></h1>
          <p className="lede enter-three">Design, send, and evolve every customer moment from one beautifully opinionated workspace.</p>
          <div className="hero-actions enter-four">
            <a className="button button-light" href="#start">Start building <Arrow /></a>
            <a className="button button-ghost" href="#workflow">See the flow <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="hero-canvas" ref={canvas} aria-label="Email design workspace preview">
          <div className="canvas-glow" />
          <div className="canvas-topbar"><span className="window-dots"><i /><i /><i /></span><span>campaign / welcome_01</span><span className="saved">● live</span></div>
          <aside className="canvas-sidebar"><b>n</b><span className="active">▦</span><span>◈</span><span>⌘</span><span>⋯</span></aside>
          <div className="canvas-body">
            <div className="canvas-toolbar"><span>Desktop <b>⌄</b></span><span>Undo &nbsp; Redo</span><button>Publish</button></div>
            <div className="email-sheet">
              <div className="mail-logo">NORTH / FORM</div>
              <div className="mail-visual"><div className="orange-sun" /><div className="mail-arc" /></div>
              <div className="mail-copy"><p>FOR THE
                <br /><i>CURIOUSLY</i>
                <br />RESTLESS.</p><span>Explore the SS26 field collection →</span></div>
            </div>
            <div className="layer-menu"><small>LAYERS</small><b>Hero / image</b><span>Heading</span><span>Button</span><span>Footer</span></div>
          </div>
          <div className="canvas-caption"><span>real-time collaboration</span><i /><span>18m to publish</span></div>
        </div>
        <p className="hero-foot">SCROLL TO ENTER <span>↓</span></p>
      </section>

      <section className="statement" id="platform">
        <p className="eyebrow"><span /> One source of truth</p>
        <h2>Your brand moves fast.<br />Your email stack should keep up.</h2>
        <p className="statement-copy">Noketa turns a fragmented handoff into a connected practice—so your sharpest ideas ship as sharply as they started.</p>
        <div className="signal-row"><span>DESIGN</span><i /><span>WRITE</span><i /><span>TEST</span><i /><span>SEND</span><i /><span>LEARN</span></div>
      </section>

      <section className="workflow" id="workflow">
        <div className="section-label"><span>01</span><p>From first draft<br />to every inbox</p></div>
        <div className="workflow-main">
          <h2>Every detail<br />has a place.</h2>
          <p>Bring systems thinking to the messages your customers actually experience.</p>
          <a className="underlink" href="#developers">Explore the platform <Arrow /></a>
        </div>
        <div className="workflow-art" aria-hidden="true">
          <div className="grid-field" />
          <div className="workflow-window"><div /><span>People don&apos;t remember<br /><em>emails.</em> They remember<br />how your brand felt.</span><small>YOUR COMPANY<br />NEW COLLECTION</small></div>
          <div className="workflow-chip chip-one">✦ &nbsp; Brand token synced</div>
          <div className="workflow-chip chip-two">01:42 &nbsp; 96% inbox score</div>
        </div>
      </section>

      <section className="developer" id="developers">
        <div className="developer-heading"><p className="eyebrow"><span /> Built for velocity</p><h2>Calm on the surface.<br />Serious underneath.</h2></div>
        <div className="code-panel"><div className="code-head"><span>send-welcome.ts</span><span>connected</span></div><pre><code><i>import</i> {'{'} Noketa {'}'} <i>from</i> <b>&quot;@noketa/sdk&quot;</b>{"\n\n"}<i>const</i> email = <i>await</i> noketa.messages.create({'{'}{"\n"}  template: <b>&quot;welcome-01&quot;</b>,{"\n"}  to: customer.email,{"\n"}  variables: {'{'} firstName {'}'}{"\n"}{'}'});</code></pre><div className="code-result"><span>Delivered in 0.38s</span><span>Open rate signal queued</span></div></div>
        <div className="developer-notes"><p><b>Typed primitives</b> that make the right thing the easy thing.</p><p><b>One environment</b> for templates, tokens, and delivery health.</p></div>
      </section>

      <section className="closing" id="start">
        <p className="eyebrow"><span /> Make the inbox better</p>
        <h2>Less handoff.<br /><em>More signal.</em></h2>
        <a className="button button-light" href="https://app.noketa.io">Build with Noketa <Arrow /></a>
        <p className="closing-note">For teams who believe every customer touchpoint is a chance to be remembered.</p>
      </section>

      <footer><a className="brand" href="#top"><span className="brand-mark">✦</span> NOKETA</a><span>© 2026 NOKETA</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
