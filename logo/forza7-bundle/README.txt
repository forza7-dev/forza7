Forza7 — Marcellus identity bundle
====================================

CONTENTS
--------
wordmark/
  forza7-marcellus.svg     Vector — scales infinitely, use anywhere
  forza7-{w}w.png          PNGs at 2400 / 1600 / 1200 / 800 / 600 / 400 px wide
  f7-marcellus.svg         Vector F7
  f7-{w}w.png              PNGs at 1200 / 800 / 400 / 200 px wide

favicon/
  favicon.svg              Square mark — F top-left, 7 dropped to bottom-right
  favicon-{N}.png          512 / 256 / 180 / 128 / 64 / 48 / 32 / 16 px squares

TYPEFACE
--------
Marcellus by Brian J. Bonislawsky, 2010 — Google Fonts (Open Font License).
Self-host or load via:
  <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet">

COLORS
------
F      #3F8B9A   teal      (sampled from forza7.dev)
orza   #1F2244   deep navy ink
7      #B86348   warm coral / terracotta

WEIGHTS
-------
F and 7   bold (synthetic — Marcellus ships only 400; thicken with text-stroke or use the provided PNG/SVG)
orza      regular 400

HTML EMBED
----------
<!-- favicon -->
<link rel="icon" type="image/svg+xml" href="favicon/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="favicon/favicon-180.png">

<!-- header wordmark, live text -->
<link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet">
<style>
  .forza7 {
    font-family:'Marcellus', serif;
    font-weight:400;
    line-height:1;
  }
  .forza7 .f, .forza7 .seven {
    font-weight:700;                   /* synthetic bold */
    -webkit-text-stroke:0.04em currentColor;
    paint-order: stroke fill;
  }
  .forza7 .f     { color:#3F8B9A; }
  .forza7 .orza  { color:#1F2244; }
  .forza7 .seven { color:#B86348; }
</style>
<span class="forza7"><span class="f">F</span><span class="orza">orza</span><span class="seven">7</span></span>
