import React from 'react';

export default function Hero() {
  return (
    <header className="hero">
      {/* Background image: use <img> for accessibility and browser optimization */}
      <img
        className="hero__bg"
        src="/assets/hero-large.jpg"
        srcSet="/assets/hero-small.jpg 600w, /assets/hero-medium.jpg 1200w, /assets/hero-large.jpg 2000w"
        sizes="(max-width: 720px) 100vw, 1200px"
        alt="Abstract tech background"
        loading="lazy"
      />

      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <h1 className="hero__title">Your concise headline here — short & scannable</h1>
        <p className="hero__sub">
          One short sentence that explains the core value. Keep it to 10–14 words.
        </p>
        {/* CTA buttons... */}
      </div>
    </header>
  );
}