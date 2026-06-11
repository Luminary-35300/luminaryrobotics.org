<script>
  import StatCounter from '$lib/components/StatCounter.svelte';

  const achievements = [
    {
      label: 'League Tournament',
      awards: [
        { rank: '1st', name: 'Winning Alliance Captain', team: 'Slingshot', isTrophy: true },
        { rank: '1st', name: 'Inspire Award',          team: 'ChaiGPT', isTrophy: true },
        { rank: '2nd', name: 'Inspire Award',          team: 'Slingshot' },
        { rank: '3rd', name: 'Inspire Award',          team: 'Shooting Stars' },
        { rank: '2nd', name: 'Control Award',          team: 'Hunga Munga' },
        { rank: '—',   name: 'Finalist Alliance Captain', team: 'Hunga Munga' },
      ]
    },
    {
      label: 'Central Texas Regional',
      awards: [
        { rank: '3rd', name: 'Inspire Award',           team: 'ChaiGPT' },
        { rank: 'Finalist', name: 'FIRST Leadership Award', team: 'Rithwik Nair' },
        { rank: 'Semi-Finalist', name: 'FIRST Leadership Award', team: 'Aanya Pathak, Nishka Gupta' },
        { rank: '2nd', name: 'Innovate Award',          team: 'Shooting Stars' },
        { rank: '2nd', name: 'Think Award',             team: 'Slingshot' },
        { rank: '—',   name: 'Division Finalist Alliance', team: 'Slingshot' },
      ]
    },
    {
      label: 'Texas State Cup',
      awards: [
        { rank: '1st', name: 'Inspire Award', team: 'ChaiGPT', isTrophy: true },
      ]
    },
    {
      label: 'FIRST World Championship',
      awards: [
        { rank: '3rd', name: 'Sustain Award', team: 'Slingshot' },
      ]
    },
  ];

  const stats = [
    { value: 4,    suffix: '',  label: 'Competition Wins',   desc: 'Across all previous teams' },
    { value: 1200, suffix: '+', label: 'Outreach Hours',     desc: 'Combined team legacy' },
    { value: 9,    suffix: '',  label: 'Team Members',       desc: 'Luminary roster' },
    { value: 3,    suffix: '',  label: 'Seasons Competed',   desc: 'Years of experience' },
  ];

  const sponsors = [
    '[Sponsor Logo]',
    '[Sponsor Logo]',
    '[Sponsor Logo]',
    '[Sponsor Logo]',
    '[Sponsor Logo]',
  ];

  const previews = [
    {
      label: 'Outreach',
      title: 'Community Impact',
      desc: 'Luminary Robotics is committed to growing STEM education in our community through workshops, demos, and partnerships.',
      href: '/outreach',
      cta: 'View Outreach',
    },
    {
      label: 'Robot',
      title: 'This Season\'s Robot',
      desc: 'Engineered for precision. Explore the mechanical systems, programming, and autonomous routines powering our competition robot.',
      href: '/robot',
      cta: 'Meet the Robot',
    },
    {
      label: 'Team',
      title: 'The People Behind It',
      desc: 'A dedicated team of engineers, programmers, designers, and community advocates working toward a common goal.',
      href: '/team',
      cta: 'Meet the Team',
    },
  ];
</script>

<svelte:head>
  <title>Luminary Robotics – FTC Team 35300</title>
  <meta name="description" content="FTC Team 35300 – Luminary Robotics. An elite competitive robotics organization building the future through engineering, community outreach, and STEM education." />
</svelte:head>

<!-- ── Hero ─────────────────────────────────────────────────── -->
<section class="hero">
  <div class="hero__bg" aria-hidden="true"></div>
  <div class="hero__inner container">
    <div class="hero__content">
      <div class="hero__logo-wrap">
        <img src="/logo-icon.png" alt="Luminary Robotics mark" class="hero__logo" />
      </div>
      <div class="hero__label">FTC Team 35300</div>
      <h1 class="hero__title">Luminary<br>Robotics</h1>
      <p class="hero__mission">
        FIRST IS MORE THAN ROBOTS — We build robots that compete at the highest level
        while inspiring the next generation of engineers and scientists in our community.
      </p>
      <div class="hero__actions">
        <a href="/team" class="btn btn--primary" id="hero-cta-team">Meet The Team</a>
        <a href="/contact" class="btn btn--outline" id="hero-cta-contact">Contact Us</a>
      </div>
    </div>
    <div class="hero__visual">
      <div class="hero__robot placeholder" aria-label="Hero robot image placeholder">
        <div class="hero__robot-inner">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity="0.4">
            <rect x="20" y="8" width="40" height="30" rx="2" stroke="currentColor" stroke-width="1.5"/>
            <rect x="10" y="42" width="60" height="24" rx="2" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="30" cy="22" r="5" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="50" cy="22" r="5" stroke="currentColor" stroke-width="1.5"/>
            <rect x="4" y="48" width="8" height="12" rx="1" stroke="currentColor" stroke-width="1.5"/>
            <rect x="68" y="48" width="8" height="12" rx="1" stroke="currentColor" stroke-width="1.5"/>
            <path d="M32 70v6M48 70v6M26 76h28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <p class="hero__robot-label">[Hero Robot Image]</p>
        </div>
      </div>
    </div>
  </div>
  <div class="hero__scroll-hint" aria-hidden="true">
    <div class="hero__scroll-line"></div>
  </div>
</section>

<!-- ── Achievements ──────────────────────────────────────────── -->
<section class="section section--sm achievements">
  <div class="container">
    <div class="achievements__header text-center reveal">
      <span class="section-header__label">Recognition</span>
      <h2 class="h2">Awards &amp; Legacy</h2>
      <p class="text-lead mt-2">A foundation of excellence built across multiple seasons.</p>
      <div class="achievements__note">
        <strong>✦ Note on our legacy:</strong> Luminary Robotics is a rookie team formed from the merger of <em>Hunga Munga</em>, <em>Slingshot</em>, <em>ChaiGPT</em>, and <em>Shooting Stars</em>. The awards listed below were earned by those original teams and their many dedicated members prior to our merger. We are proud to carry their legacy forward.
      </div>
    </div>

    <div class="achievements__grid">
      {#each achievements as ach, i}
        <div class="achievement-card reveal" style="transition-delay: {i * 80}ms">
          <div class="achievement-card__comp">{ach.label}</div>
          <ul class="achievement-card__awards">
            {#each ach.awards as award}
              <li class="award-row">
                {#if award.isTrophy || award.isTrophyEmpty}
                  <div class="award-row__trophy-wrapper">
                    <svg class="award-row__trophy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M8 21h8M12 17v4M7 4h10M5 4h14v5a6 6 0 0 1-6 6H11a6 6 0 0 1-6-6V4z"/>
                    </svg>
                    {#if !award.isTrophyEmpty}
                      <span class="award-row__trophy-text">{award.rank}</span>
                    {/if}
                  </div>
                {:else}
                  <span class="award-row__rank" class:award-row__rank--dash={award.rank === '—' || award.rank === 'FIN'}>{award.rank}</span>
                {/if}
                <div class="award-row__info">
                  <span class="award-row__name">{award.name}</span>
                  <span class="award-row__team">{award.team}</span>
                </div>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>

<div class="divider-accent container"><div class="divider--accent"></div></div>

<!-- ── Statistics ────────────────────────────────────────────── -->
<section class="section--sm stats-section">
  <div class="container">
    <div class="stats-grid">
      {#each stats as stat}
        <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} desc={stat.desc} />
      {/each}
    </div>
  </div>
</section>

<div class="divider-accent container"><div class="divider--accent"></div></div>

<!-- ── Featured Sponsors ─────────────────────────────────────── -->
<section class="section--sm sponsors-preview">
  <div class="container">
    <div class="sponsors-preview__header reveal">
      <span class="section-header__label">Partners</span>
      <div class="sponsors-preview__title-row">
        <h2 class="section-header__title" style="margin-bottom:0">Featured Sponsors</h2>
        <a href="/sponsors" class="btn btn--ghost btn--sm">View All →</a>
      </div>
    </div>
    <div class="sponsors-preview__logos reveal">
      {#each sponsors as sp}
        <div class="sponsor-logo-placeholder placeholder" aria-label={sp}>{sp}</div>
      {/each}
    </div>
  </div>
</section>

<!-- ── Page Previews ─────────────────────────────────────────── -->
<section class="section previews">
  <div class="container">
    <div class="previews__header reveal">
      <span class="section-header__label">Explore</span>
      <h2 class="section-header__title">What We Do</h2>
    </div>
    <div class="previews__grid">
      {#each previews as preview, i}
        <a href={preview.href} class="preview-card reveal" style="transition-delay: {i * 100}ms" aria-label="{preview.title}">
          <div class="preview-card__image placeholder" aria-hidden="true">[Image]</div>
          <div class="preview-card__body">
            <span class="preview-card__label">{preview.label}</span>
            <h3 class="preview-card__title">{preview.title}</h3>
            <p class="preview-card__desc">{preview.desc}</p>
            <span class="preview-card__cta">{preview.cta} →</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  /* ── Hero ─────────────────────────────────── */
  .hero {
    display: flex;
    flex-direction: column;
    padding-top: calc(var(--nav-h) + var(--space-2));
    padding-bottom: var(--space-10);
    position: relative;
    overflow: hidden;
  }

  .hero__bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 50% at 70% 50%, rgba(77,143,204,0.04) 0%, transparent 70%);
    pointer-events: none;
  }

  :global([data-theme="light"]) .hero__bg {
    background: radial-gradient(ellipse 60% 50% at 70% 50%, rgba(37,99,235,0.03) 0%, transparent 70%);
  }

  .hero__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-10);
    align-items: center;
    padding-top: 0;
    padding-bottom: var(--space-10);
    position: relative;
    z-index: 1;
  }

  .hero__content {
    max-width: 560px;
  }

  .hero__logo-wrap {
    margin-bottom: var(--space-5);
  }

  .hero__logo {
    width: 120px;
    height: 120px;
    object-fit: contain;
    /* Drop white bg on dark theme — invert to black bg then screen blends it away */
    filter: invert(1) brightness(1.1);
    mix-blend-mode: screen;
  }

  :global([data-theme="light"]) .hero__logo {
    filter: none;
    mix-blend-mode: multiply;
  }

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
    line-height: 1.0;
    color: var(--text);
    margin-bottom: var(--space-5);
  }

  .hero__mission {
    font-size: var(--text-md);
    color: var(--text-2);
    line-height: 1.75;
    margin-bottom: var(--space-7);
    max-width: 480px;
  }

  .hero__actions {
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
  }

  .hero__visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero__robot {
    width: 100%;
    max-width: 380px;
    aspect-ratio: 1/1;
    border-radius: var(--radius);
    background: var(--surface);
    border: 1px dashed var(--border-2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: var(--space-4);
    color: var(--border-2);
  }

  .hero__robot-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-3);
  }

  .hero__robot-label {
    font-size: var(--text-sm);
    color: var(--text-3);
    letter-spacing: 0.04em;
  }

  .hero__scroll-hint {
    display: flex;
    justify-content: center;
    padding-bottom: var(--space-6);
    position: relative;
    z-index: 1;
  }

  .hero__scroll-line {
    width: 1px;
    height: 48px;
    background: linear-gradient(to bottom, var(--border-2), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; }
    50%       { opacity: 1; }
  }

  /* ── Achievements ─────────────────────────── */
  .achievements__header { margin-bottom: var(--space-8); }

  .achievements__note {
    font-size: var(--text-sm);
    color: var(--text-2);
    max-width: 720px;
    margin: var(--space-6) auto 0;
    padding: var(--space-4) var(--space-5);
    background: var(--surface-2);
    border-left: 3px solid var(--accent-gold);
    border-radius: 0 var(--radius) var(--radius) 0;
    line-height: 1.6;
    text-align: left;
  }
  
  .achievements__note strong {
    color: var(--text);
  }

  .achievements__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-5);
  }

  .achievement-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: var(--space-6) var(--space-7);
    transition: border-color var(--transition);
  }

  .achievement-card:hover { border-color: var(--border-2); }

  .achievement-card__comp {
    font-size: var(--text-xs);
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-gold);
    margin-bottom: var(--space-5);
    padding-bottom: var(--space-4);
    border-bottom: 1px solid var(--border);
  }

  .achievement-card__awards {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .award-row {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4) 0;
    border-bottom: 1px solid var(--border);
  }

  .award-row:last-child { border-bottom: none; }

  .award-row__rank {
    font-family: var(--font-heading);
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--text);
    min-width: 56px;
    flex-shrink: 0;
    line-height: 1;
    text-align: center;
  }

  .award-row__rank--dash {
    font-family: var(--font-body);
    font-size: var(--text-xl);
    color: var(--text-3);
    font-weight: 400;
  }

  .award-row__trophy-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    flex-shrink: 0;
    color: var(--accent-gold);
  }

  .award-row__trophy-icon {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .award-row__trophy-text {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    font-weight: 700;
    color: var(--text);
    z-index: 1;
    margin-top: -8px;
  }

  .award-row__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .award-row__name {
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--text);
    line-height: 1.2;
  }

  .award-row__team {
    font-size: var(--text-sm);
    color: var(--text-3);
    letter-spacing: 0.02em;
  }

  /* ── Stats ────────────────────────────────── */
  .stats-section { padding: var(--space-2) 0; }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    background: var(--surface);
  }

  /* ── Sponsors Preview ─────────────────────── */
  .sponsors-preview__title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
  }

  .sponsors-preview__logos {
    display: flex;
    gap: var(--space-4);
    flex-wrap: wrap;
    margin-top: var(--space-6);
  }

  .sponsor-logo-placeholder {
    height: 64px;
    min-width: 120px;
    flex: 1;
    font-size: var(--text-xs);
    color: var(--text-3);
    background: var(--surface);
    border: 1px dashed var(--border-2);
    border-radius: var(--radius);
  }

  /* ── Previews ─────────────────────────────── */
  .previews__header { margin-bottom: var(--space-7); }

  .previews__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-5);
  }

  .preview-card {
    display: flex;
    flex-direction: column;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    text-decoration: none;
    transition: border-color var(--transition), transform var(--transition-slow);
  }

  .preview-card:hover {
    border-color: var(--border-2);
    transform: translateY(-2px);
  }

  .preview-card__image {
    height: 200px;
    background: var(--surface-2);
    border-bottom: 1px solid var(--border);
    font-size: var(--text-sm);
    color: var(--text-3);
  }

  .preview-card__body {
    padding: var(--space-5);
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    flex: 1;
  }

  .preview-card__label {
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-blue);
  }

  .preview-card__title {
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--text);
    letter-spacing: -0.01em;
  }

  .preview-card__desc {
    font-size: var(--text-sm);
    color: var(--text-3);
    line-height: 1.65;
    flex: 1;
  }

  .preview-card__cta {
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--text-2);
    transition: color var(--transition);
    margin-top: var(--space-2);
  }

  .preview-card:hover .preview-card__cta { color: var(--accent-blue); }

  .divider-accent {
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 900px) {
    .hero__inner { grid-template-columns: 1fr; text-align: left; }
    .hero__visual { display: none; }
    .previews__grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 600px) {
    .achievements__grid { grid-template-columns: 1fr; }
    .hero__title { font-size: var(--text-3xl); }
    .sponsors-preview__logos { grid-template-columns: repeat(2, 1fr); }
  }
</style>
