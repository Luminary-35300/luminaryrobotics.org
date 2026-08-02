<script>
  import StatCounter from '$lib/components/StatCounter.svelte';
  import MediaFrame from '$lib/components/MediaFrame.svelte';

  const achievements = [
    {
      label: 'League Tournament',
      awards: [
        { rank: '1st', name: 'Winning Alliance Captain', team: 'Slingshot', isTrophy: true },
        { rank: '1st', name: 'Inspire Award',          team: 'ChaiGPT', isTrophy: true },
        { rank: '2nd', name: 'Inspire Award',          team: 'Slingshot' },
        { rank: '3rd', name: 'Inspire Award',          team: 'Shooting Stars' },
        { rank: '2nd', name: 'Control Award',          team: 'Hunga Munga' },
        { rank: '-',   name: 'Finalist Alliance Captain', team: 'Hunga Munga' },
      ]
    },
    {
      label: 'Central Texas Regional',
      awards: [
        { rank: '3rd', name: 'Inspire Award',           team: 'ChaiGPT' },
        { rank: '2nd', name: 'Innovate Award',          team: 'Shooting Stars' },
        { rank: '2nd', name: 'Think Award',             team: 'Slingshot' },
        { rank: '-',   name: 'Division Finalist Alliance', team: 'Slingshot' },
      ]
    },
    {
      label: 'FIRST Leadership Award',
      awards: [
        { rank: 'Finalist', name: 'Rithwik Nair', team: '' },
        { rank: 'Semi-Finalist', name: 'Aanya Pathak, Nishka Gupta', team: '' },
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

  const previews = [
    {
      label: 'Outreach',
      title: 'Community Impact',
      desc: 'Luminary Robotics is committed to growing STEM education in our community through workshops, demos, and partnerships.',
      href: '/outreach',
      cta: 'View Outreach',
      img: '',
    },
    {
      label: 'Robot',
      title: 'This Season\'s Robot',
      desc: 'Engineered for precision. Explore the mechanical systems, programming, and autonomous routines powering our competition robot.',
      href: '/robot',
      cta: 'Meet the Robot',
      img: '',
    },
    {
      label: 'Team',
      title: 'The People Behind It',
      desc: 'A dedicated team of engineers, programmers, designers, and community advocates working toward a common goal.',
      href: '/team',
      cta: 'Meet the Team',
      img: '',
    },
  ];
</script>

<svelte:head>
  <title>Luminary Robotics | FTC Team 36633</title>
  <meta name="description" content="Luminary Robotics, FTC Team 36633. A competitive robotics team building the future through engineering, community outreach, and STEM education." />
</svelte:head>

<!-- ── Hero ─────────────────────────────────────────────────── -->
<section class="hero">
  <div class="hero__bg" aria-hidden="true"></div>
  <div class="hero__inner container">
    <div class="hero__content">
      <div class="hero__logo-wrap">
        <img src="/logo-icon.png" alt="Luminary Robotics mark" class="hero__logo" />
      </div>
      <div class="hero__label">FTC Team 36633</div>
      <h1 class="hero__title">LUMINARY</h1>
      <div class="hero__mission">
        <blockquote class="hero__quote">
          <p>"FIRST is more than robots."</p>
          <cite>Founder of FIRST</cite>
        </blockquote>
      </div>
      <div class="hero__actions">
        <a href="/team" class="btn btn--primary" id="hero-cta-team">Meet The Team</a>
        <a href="/contact" class="btn btn--outline" id="hero-cta-contact">Contact Us</a>
      </div>
    </div>
    <div class="hero__visual">
      <MediaFrame
        src="/images/team-group.jpg"
        alt="The Luminary Robotics team, FTC 36633"
        caption="2026 Season Team"
        ratio="4 / 3"
        class="hero__photo"
      />
  </div>
</section>

<!-- ── Definition ────────────────────────────────────────────── -->
<section class="section section--sm definition-section">
  <div class="container text-center reveal">
    <blockquote class="definition-quote">
      <p class="definition-word">lu·mi·nar·y</p>
      <p class="definition-pos">/ˈlo͞oməˌnerē/ • noun</p>
      <p class="definition-text">A person who <strong class="definition-highlight">inspires</strong> or influences others, especially one leading positive change in their community.</p>
    </blockquote>
  </div>
</section>

<div class="divider-accent container"><div class="divider--accent"></div></div>

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
                  <span class="award-row__rank" class:award-row__rank--dash={award.rank === '-' || award.rank === 'FIN'}>{award.rank}</span>
                {/if}
                <div class="award-row__info">
                  <span class="award-row__name" class:award-row__name--shiny={award.name.includes('Inspire Award') || award.name.includes('Winning Alliance Captain')}>{award.name}</span>
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

<!-- ── Sponsors ──────────────────────────────────────────────── -->
<section class="section--sm sponsors-preview">
  <div class="container">
    <div class="sponsors-preview__header reveal">
      <span class="section-header__label">Partners</span>
      <div class="sponsors-preview__title-row">
        <h2 class="section-header__title" style="margin-bottom:0">Back Our Rookie Season</h2>
        <a href="/sponsors" class="btn btn--ghost btn--sm">Sponsorship Tiers →</a>
      </div>
    </div>
    <div class="sponsors-invite reveal">
      <p class="sponsors-invite__text">
        Luminary is a first-year team assembling its founding group of partners. Your support
        puts hardware in students' hands and our robot on the field, with your name alongside it.
      </p>
      <a href="/contact" class="btn btn--outline btn--sm">Become a Founding Sponsor</a>
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
          <MediaFrame src={preview.img} alt={preview.title} caption={preview.label} ratio="16 / 10" class="preview-card__image" />
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
    justify-content: center;
    min-height: 100vh;
    padding-top: var(--nav-h);
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
    /* Invert for dark theme */
    filter: invert(1) brightness(1.1);
  }

  :global([data-theme="light"]) .hero__logo {
    filter: none;
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
    margin-bottom: var(--space-7);
    max-width: 480px;
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .hero__quote {
    border-left: 3px solid var(--accent-blue);
    padding-left: var(--space-4);
    font-style: italic;
  }

  .hero__quote p {
    font-size: var(--text-lg);
    color: var(--text);
    font-family: var(--font-heading);
    font-weight: 500;
  }

  .hero__quote cite {
    display: block;
    font-size: var(--text-xs);
    color: var(--text-3);
    margin-top: var(--space-2);
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }


  .hero__actions {
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
  }

  .hero__visual {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-3);
  }

  .hero__visual :global(.hero__photo) {
    box-shadow: 0 24px 60px -30px rgba(0, 0, 0, 0.6);
  }

  :global([data-theme='light']) .hero__visual :global(.hero__photo) {
    box-shadow: 0 24px 60px -34px rgba(13, 13, 22, 0.35);
  }

  .hero__photo-tag {
    font-size: var(--text-xs);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-3);
    padding-left: var(--space-1);
  }

  /* ── Definition ───────────────────────────── */
  .definition-section { padding-top: 0; }
  .definition-quote {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);
  }
  .definition-word {
    font-family: var(--font-heading);
    font-size: var(--text-3xl);
    font-weight: 700;
    color: var(--text);
    letter-spacing: 0.05em;
  }
  .definition-pos {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--text-3);
    font-style: italic;
    margin-bottom: var(--space-4);
  }
  .definition-text {
    font-family: var(--font-body);
    font-size: var(--text-lg);
    color: var(--text-2);
    line-height: 1.6;
  }
  .definition-highlight {
    color: var(--accent-blue);
    font-weight: 600;
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
    min-width: 0;
    flex: 1;
  }

  .award-row__name {
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--text);
    line-height: 1.2;
  }

  .award-row__name--shiny {
    background: linear-gradient(110deg, #c59b27 0%, #f5d061 50%, #c59b27 100%);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  :global([data-theme="light"]) .award-row__name--shiny {
    background: linear-gradient(110deg, #8c6b10 0%, #d4af37 50%, #8c6b10 100%);
    -webkit-background-clip: text;
    background-clip: text;
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

  .sponsors-invite {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-6);
    margin-top: var(--space-6);
    padding: var(--space-6) var(--space-7);
    background: var(--surface);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent-blue);
    border-radius: var(--radius);
    flex-wrap: wrap;
  }

  .sponsors-invite__text {
    font-size: var(--text-base);
    color: var(--text-2);
    line-height: 1.7;
    max-width: 640px;
    margin: 0;
  }

  .sponsors-invite .btn { flex-shrink: 0; }

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
    transition: border-color var(--transition);
  }

  .preview-card:hover {
    border-color: var(--border-2);
  }

  /* MediaFrame sits flush inside the card: drop its own frame, keep a base divider */
  .preview-card :global(.preview-card__image) {
    border: none;
    border-bottom: 1px solid var(--border);
    border-radius: 0;
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
    .hero { min-height: auto; }
    .hero__inner { grid-template-columns: 1fr; text-align: left; gap: var(--space-7); }
    .hero__visual { max-width: 460px; }
    .previews__grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 600px) {
    .achievements__grid { grid-template-columns: 1fr; }
    .achievement-card { padding: var(--space-5) var(--space-4); }
    .award-row { gap: var(--space-3); }
    .award-row__rank { min-width: 40px; font-size: var(--text-xl); }
    .award-row__trophy-wrapper { width: 40px; height: 40px; }
    .award-row__name { font-size: var(--text-base); }
    .hero__title { font-size: var(--text-3xl); }
    .sponsors-preview__logos { grid-template-columns: repeat(2, 1fr); }
  }
</style>
