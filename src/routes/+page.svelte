<script>
  import MediaFrame from '$lib/components/MediaFrame.svelte';

  const leadership = [
    { level: 'Finalist',      name: 'Rithwik Nair' },
    { level: 'Semi-Finalist', name: 'Aanya Pathak' },
    { level: 'Semi-Finalist', name: 'Nishka Gupta' },
  ];
</script>

<svelte:head>
  <title>Luminary Robotics | FTC Team 36633</title>
  <meta name="description" content="Luminary Robotics, FTC Team 36633. A rookie FIRST Tech Challenge team in Central Texas." />
</svelte:head>

<!-- ── Hero ─────────────────────────────────────────────────── -->
<section class="hero">
  <div class="hero__inner container">
    <div class="hero__content">
      <img src="/logo-icon.png" alt="" class="hero__logo" />
      <p class="hero__label">FTC Team 36633</p>
      <h1 class="hero__title">LUMINARY</h1>
      <p class="hero__intro">
        A rookie <em>FIRST</em> Tech Challenge team in Central Texas, competing in our
        first season.
      </p>
      <blockquote class="hero__quote">
        <p>"<em>FIRST</em> is more than robots."</p>
      </blockquote>
      <div class="hero__actions">
        <a href="/about" class="btn btn--primary">About the Team</a>
        <a href="/contact" class="btn btn--outline">Get in Touch</a>
      </div>
    </div>
    <div class="hero__visual">
      <MediaFrame
        src="/team-photo.jpg"
        alt="The Luminary Robotics team, FTC 36633"
        caption="2026 Season Team"
        ratio="4 / 3"
        loading="eager"
      />
    </div>
  </div>
</section>

<!-- ── Experience ───────────────────────────────────────────── -->
<section class="section experience">
  <div class="container">
    <div class="experience__inner">
      <span class="section-header__label">Background</span>
      <h2 class="section-header__title">Experience We Bring</h2>

      <p class="experience__p">
        Before we started Luminary, we competed with Hunga Munga, Slingshot, ChaiGPT,
        and Shooting Stars. Over those seasons our old teams were recognized in a few
        areas:
      </p>

      <ul class="experience__list">
        <li>Inspire, Innovate, Think, Control, and Sustainability Awards</li>
        <li>Tournament and alliance achievements at the league and regional levels</li>
        <li>Recognition at the Texas State Cup and <em>FIRST</em> World Championship</li>
        <li>
          <em>FIRST</em> Leadership Award
          <ul class="experience__names">
            {#each leadership as person}
              <li>
                <span class="experience__level">{person.level}</span>
                <span>{person.name}</span>
              </li>
            {/each}
          </ul>
        </li>
      </ul>

      <p class="experience__p">
        That's where we learned to build, program, write, and run a team, and it's what
        we brought with us.
      </p>
    </div>
  </div>
</section>

<!-- ── Sponsors ─────────────────────────────────────────────── -->
<section class="section--sm sponsors">
  <div class="container">
    <div class="sponsors__inner">
      <div>
        <span class="section-header__label">Partners</span>
        <h2 class="sponsors__title">We're Looking for Sponsors</h2>
        <p class="sponsors__text">
          This is our first season, so we're starting from nothing on funding. Sponsorships
          pay for parts, tools, and competition fees, and your name goes on the robot.
        </p>
      </div>
      <div class="sponsors__actions">
        <a href="/sponsors" class="btn btn--outline btn--sm">Sponsorship Tiers</a>
        <a href="/contact" class="btn btn--ghost btn--sm">Contact Us</a>
      </div>
    </div>
  </div>
</section>

<style>
  /* ── Hero ─────────────────────────────────── */
  .hero {
    display: flex;
    align-items: center;
    min-height: 100vh;
    padding-top: var(--nav-h);
  }

  .hero__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-10);
    align-items: center;
    padding-bottom: var(--space-10);
  }

  .hero__content { max-width: 560px; }

  .hero__logo {
    width: 104px;
    height: 104px;
    object-fit: contain;
    margin-bottom: var(--space-5);
    filter: invert(1) brightness(1.1);
  }

  :global([data-theme="light"]) .hero__logo { filter: none; }

  .hero__label {
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent-blue);
    margin-bottom: var(--space-4);
  }

  .hero__title {
    font-family: var(--font-heading);
    font-size: clamp(3rem, 6vw, var(--text-5xl));
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1;
    color: var(--text);
    margin-bottom: var(--space-5);
  }

  .hero__intro {
    font-size: var(--text-md);
    color: var(--text-2);
    line-height: 1.7;
    max-width: 480px;
    margin-bottom: var(--space-6);
  }

  .hero__intro em { font-style: italic; }

  .hero__quote {
    border-left: 2px solid var(--border-2);
    padding-left: var(--space-4);
    margin-bottom: var(--space-7);
  }

  .hero__quote p {
    font-family: var(--font-heading);
    font-size: var(--text-lg);
    font-weight: 500;
    color: var(--text);
  }

  .hero__quote em { font-style: italic; }

  .hero__actions {
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
  }

  /* ── Experience ───────────────────────────── */
  .experience__inner { max-width: 760px; }

  .experience__p {
    font-size: var(--text-base);
    color: var(--text-2);
    line-height: 1.75;
  }

  .experience__list {
    list-style: none;
    margin: var(--space-5) 0;
    border-top: 1px solid var(--border);
  }

  .experience__list > li {
    position: relative;
    padding: var(--space-4) 0 var(--space-4) var(--space-5);
    border-bottom: 1px solid var(--border);
    font-size: var(--text-base);
    color: var(--text);
    line-height: 1.6;
  }

  .experience__list > li::before {
    content: '';
    position: absolute;
    left: 0;
    top: calc(var(--space-4) + 0.6em);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--accent-blue);
  }

  .experience__list em { font-style: italic; }

  .experience__names {
    list-style: none;
    margin-top: var(--space-3);
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .experience__names li {
    display: flex;
    align-items: baseline;
    gap: var(--space-4);
    font-size: var(--text-sm);
    color: var(--text-2);
  }

  .experience__level {
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-3);
    min-width: 110px;
    flex-shrink: 0;
  }

  /* ── Sponsors ─────────────────────────────── */
  .sponsors__inner {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--space-8);
    padding: var(--space-7);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    flex-wrap: wrap;
  }

  .sponsors__title {
    font-size: var(--text-xl);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text);
    margin-bottom: var(--space-3);
  }

  .sponsors__text {
    font-size: var(--text-sm);
    color: var(--text-2);
    line-height: 1.75;
    max-width: 620px;
  }

  .sponsors__actions {
    display: flex;
    gap: var(--space-2);
    flex-shrink: 0;
  }

  @media (max-width: 900px) {
    .hero { min-height: auto; }
    .hero__inner { grid-template-columns: 1fr; gap: var(--space-7); }
    .hero__visual { max-width: 460px; }
  }

  @media (max-width: 600px) {
    .hero__title { font-size: var(--text-3xl); }
    .sponsors__inner { padding: var(--space-6) var(--space-5); }
    .experience__names li { flex-direction: column; gap: 2px; }
  }
</style>
