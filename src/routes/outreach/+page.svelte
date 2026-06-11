<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import StatCounter from '$lib/components/StatCounter.svelte';

  const stats = [
    { value: 0, suffix: '+', label: 'Students Reached',  desc: 'Placeholder' },
    { value: 0, suffix: '+', label: 'Events Hosted',     desc: 'Placeholder' },
    { value: 0, suffix: '+', label: 'Volunteer Hours',   desc: 'Placeholder' },
    { value: 0, suffix: '',  label: 'Partner Schools',   desc: 'Placeholder' },
  ];

  const events = [
    {
      label: 'Workshop',
      title: '[Event Name Placeholder]',
      date: '[Date]',
      location: '[Location]',
      desc: '[Event description placeholder] — Description of the outreach event, its goals, participants, and impact on the community.',
    },
    {
      label: 'Demo',
      title: '[Event Name Placeholder]',
      date: '[Date]',
      location: '[Location]',
      desc: '[Event description placeholder] — Description of the outreach event, its goals, participants, and impact on the community.',
    },
    {
      label: 'Scrimmage',
      title: '[Event Name Placeholder]',
      date: '[Date]',
      location: '[Location]',
      desc: '[Event description placeholder] — Description of the outreach event, its goals, participants, and impact on the community.',
    },
  ];

  const gallery = ['[Image]','[Image]','[Image]','[Image]'];
</script>

<svelte:head>
  <title>Outreach – Luminary Robotics FTC 35300</title>
  <meta name="description" content="Luminary Robotics FTC Team 35300 community outreach — STEM education, workshops, and programs that inspire the next generation of engineers." />
</svelte:head>

<PageHero
  label="Community"
  title="Outreach Programs"
  subtitle="Beyond the competition field, Luminary Robotics is committed to growing STEM education and inspiring future engineers in our community."
/>

<!-- Hero image -->
<section class="section--sm">
  <div class="container">
    <div class="outreach-hero placeholder reveal" aria-label="Outreach hero image placeholder">
      <p>[Outreach Hero Image]</p>
    </div>
  </div>
</section>

<!-- Stats -->
<section class="section--sm">
  <div class="container">
    <div class="outreach-stats reveal">
      {#each stats as stat}
        <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} desc={stat.desc} />
      {/each}
    </div>
  </div>
</section>

<div class="container"><div class="divider"></div></div>

<!-- Description -->
<section class="section">
  <div class="container">
    <div class="outreach-desc reveal">
      <div>
        <span class="section-header__label">Our Approach</span>
        <h2 class="outreach-heading">Building Tomorrow's Engineers</h2>
        <p class="outreach-p">[Outreach Description Placeholder] — A detailed explanation of Luminary Robotics' approach to community outreach, the programs offered, and the philosophy behind our efforts to make STEM accessible.</p>
        <p class="outreach-p">Through hands-on workshops, school visits, and robotics demonstrations, we aim to spark curiosity and build foundational skills in students of all ages and backgrounds.</p>
      </div>
      <div class="outreach-img placeholder" aria-label="Outreach image placeholder">
        <p>[Outreach Image]</p>
      </div>
    </div>
  </div>
</section>

<div class="container"><div class="divider"></div></div>

<!-- Events -->
<section class="section">
  <div class="container">
    <div class="events-header reveal">
      <span class="section-header__label">Programs</span>
      <h2 class="section-header__title">Outreach Events</h2>
      <p class="section-header__desc">A selection of community programs and events organized by Luminary Robotics.</p>
    </div>
    <div class="events-grid">
      {#each events as event, i}
        <div class="event-card reveal" style="transition-delay:{i*80}ms">
          <div class="event-card__header">
            <span class="label label--blue">{event.label}</span>
            <div class="event-card__meta">
              <span class="event-card__date">{event.date}</span>
              <span class="event-card__sep">·</span>
              <span class="event-card__loc">{event.location}</span>
            </div>
          </div>
          <h3 class="event-card__title">{event.title}</h3>
          <p class="event-card__desc">{event.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<div class="container"><div class="divider"></div></div>

<!-- Gallery -->
<section class="section">
  <div class="container">
    <div class="gallery-header reveal">
      <span class="section-header__label">Gallery</span>
      <h2 class="section-header__title">Event Photos</h2>
    </div>
    <div class="outreach-gallery">
      {#each gallery as img, i}
        <div class="gallery-img placeholder reveal" style="transition-delay:{i*60}ms" aria-label="{img}">{img}</div>
      {/each}
    </div>
  </div>
</section>

<div class="container"><div class="divider"></div></div>

<!-- FTC Blueprint & Resources -->
<section class="section">
  <div class="container">
    <div class="blueprint-header reveal">
      <span class="section-header__label">Resources</span>
      <h2 class="section-header__title">FTC Blueprint — Free for Everyone</h2>
      <p class="section-header__desc">
        One of our core outreach missions is making FTC accessible to any student who wants to compete,
        regardless of experience or budget.
      </p>
    </div>

    <div class="blueprint-grid">
      <!-- FTCBlueprint Card -->
      <div class="blueprint-card reveal" style="transition-delay: 0ms">
        <div class="blueprint-card__icon blueprint-card__icon--blue" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
        </div>
        <div>
          <h3 class="blueprint-card__title">FTCBlueprint</h3>
          <p class="blueprint-card__desc">
            A free, comprehensive curriculum for learning FTC robotics programming from scratch — built by members of our founding teams.
            Whether you're writing your first line of Java or optimizing autonomous routines, FTCBlueprint walks you through every step.
          </p>
          <ul class="blueprint-card__list">
            <li>Java & FTC SDK fundamentals</li>
            <li>Hardware mapping & motor control</li>
            <li>Autonomous path planning</li>
            <li>Computer vision with EasyOpenCV</li>
            <li>Road Runner & advanced odometry</li>
          </ul>
          <a href="https://ftcblueprint.com" target="_blank" rel="noopener noreferrer" class="blueprint-card__link">
            Visit FTCBlueprint →
          </a>
        </div>
      </div>

      <!-- Rookie Startup Card -->
      <div class="blueprint-card reveal" style="transition-delay: 100ms">
        <div class="blueprint-card__icon blueprint-card__icon--gold" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </div>
        <div>
          <h3 class="blueprint-card__title">Starting a Rookie Team</h3>
          <p class="blueprint-card__desc">
            Luminary itself was born from a merger of experienced FTC members. We know exactly how overwhelming it can be to start fresh —
            so we've put together guidance for new teams navigating their first season.
          </p>
          <ul class="blueprint-card__list">
            <li>How to register with <em>FIRST</em></li>
            <li>Finding mentors & school sponsors</li>
            <li>Budget-friendly hardware starter kits</li>
            <li>Building a team culture from day one</li>
            <li>Competition season calendar & prep</li>
          </ul>
          <a href="/contact" class="blueprint-card__link">
            Reach out to us for help →
          </a>
        </div>
      </div>

      <!-- About FIRST Card -->
      <div class="blueprint-card blueprint-card--wide reveal" style="transition-delay: 200ms">
        <div class="blueprint-card__icon blueprint-card__icon--silver" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <div>
          <h3 class="blueprint-card__title">What is FIRST Tech Challenge?</h3>
          <p class="blueprint-card__desc">
            <em>FIRST</em> (For Inspiration and Recognition of Science and Technology) runs FTC for students grades 7–12.
            Teams of up to 15 members design, build, program, and operate robots to compete in an alliance-format game that changes every season.
            Beyond the field, teams are judged on engineering documentation, community outreach, and gracious professionalism — the idea
            that you can compete fiercely while respecting your opponents. <strong>"FIRST is more than robots."</strong>
          </p>
          <div class="blueprint-card__links-row">
            <a href="https://www.firstinspires.org/robotics/ftc" target="_blank" rel="noopener noreferrer" class="blueprint-card__link">FIRST Website →</a>
            <a href="https://ftc-docs.firstinspires.org" target="_blank" rel="noopener noreferrer" class="blueprint-card__link">FTC Docs →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .outreach-hero {
    width: 100%;
    height: 420px;
    border-radius: var(--radius);
    font-size: var(--text-sm);
    color: var(--text-3);
  }

  .outreach-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface);
    overflow: hidden;
  }

  .outreach-desc {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-10);
    align-items: center;
  }

  .outreach-heading {
    font-size: var(--text-2xl);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text);
    margin: var(--space-3) 0 var(--space-4);
  }

  .outreach-p {
    font-size: var(--text-base);
    color: var(--text-2);
    line-height: 1.75;
    margin-bottom: var(--space-3);
  }

  .outreach-img {
    aspect-ratio: 4/3;
    border-radius: var(--radius);
    font-size: var(--text-sm);
    color: var(--text-3);
  }

  .events-header { margin-bottom: var(--space-7); }

  .events-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-5);
  }

  .event-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: var(--space-6);
    transition: border-color var(--transition);
  }

  .event-card:hover { border-color: var(--border-2); }

  .event-card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-4);
    gap: var(--space-3);
    flex-wrap: wrap;
  }

  .event-card__meta {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-xs);
    color: var(--text-3);
  }

  .event-card__sep { opacity: 0.5; }

  .event-card__title {
    font-size: var(--text-md);
    font-weight: 600;
    color: var(--text);
    margin-bottom: var(--space-3);
    letter-spacing: -0.01em;
  }

  .event-card__desc {
    font-size: var(--text-sm);
    color: var(--text-3);
    line-height: 1.65;
  }

  .gallery-header { margin-bottom: var(--space-6); }

  .outreach-gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-4);
  }

  .gallery-img {
    aspect-ratio: 1;
    border-radius: var(--radius);
    font-size: var(--text-sm);
    color: var(--text-3);
  }

  /* ── FTC Blueprint ─────────────────────────── */
  .blueprint-header {
    margin-bottom: var(--space-8);
    max-width: 720px;
  }

  .blueprint-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-5);
  }

  .blueprint-card {
    display: flex;
    gap: var(--space-5);
    align-items: flex-start;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: var(--space-7);
    transition: border-color var(--transition);
  }

  .blueprint-card--wide {
    grid-column: 1 / -1;
  }

  .blueprint-card:hover { border-color: var(--border-2); }

  .blueprint-card__icon {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
  }

  .blueprint-card__icon--blue  { background: rgba(77,143,204,0.12); color: var(--accent-blue); }
  .blueprint-card__icon--gold  { background: rgba(180,145,70,0.12); color: var(--accent-gold); }
  .blueprint-card__icon--silver { background: rgba(160,160,180,0.12); color: var(--text-2); }

  .blueprint-card__title {
    font-size: var(--text-md);
    font-weight: 600;
    color: var(--text);
    letter-spacing: -0.01em;
    margin-bottom: var(--space-3);
  }

  .blueprint-card__desc {
    font-size: var(--text-sm);
    color: var(--text-2);
    line-height: 1.7;
    margin-bottom: var(--space-4);
  }

  .blueprint-card__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    margin-bottom: var(--space-5);
  }

  .blueprint-card__list li {
    font-size: var(--text-sm);
    color: var(--text-3);
    padding-left: var(--space-4);
    position: relative;
  }

  .blueprint-card__list li::before {
    content: '–';
    position: absolute;
    left: 0;
    color: var(--accent-blue);
    font-weight: 700;
  }

  .blueprint-card__link {
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--accent-blue);
    text-decoration: none;
    transition: opacity var(--transition);
  }

  .blueprint-card__link:hover { opacity: 0.75; }

  .blueprint-card__links-row {
    display: flex;
    gap: var(--space-5);
    flex-wrap: wrap;
  }

  .divider { height: 1px; background: var(--border); }

  @media (max-width: 1024px) {
    .outreach-stats { grid-template-columns: repeat(2, 1fr); }
    .outreach-gallery { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 900px) {
    .outreach-desc { grid-template-columns: 1fr; }
    .outreach-img { display: none; }
    .events-grid { grid-template-columns: 1fr; }
    .blueprint-grid { grid-template-columns: 1fr; }
    .blueprint-card--wide { grid-column: 1; }
  }

  @media (max-width: 560px) {
    .outreach-hero { height: 260px; }
    .outreach-gallery { grid-template-columns: repeat(2, 1fr); }
    .blueprint-card { flex-direction: column; }
  }
</style>
