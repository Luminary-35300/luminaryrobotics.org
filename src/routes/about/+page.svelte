<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import Timeline from '$lib/components/Timeline.svelte';

  const values = [
    { icon: '◎', title: 'Engineering Excellence', desc: 'We approach every challenge with rigor, precision, and an unwavering commitment to quality craftsmanship.' },
    { icon: '◈', title: 'Inclusive Collaboration', desc: 'Every voice on the team matters. We build better solutions through diverse perspectives and shared ownership.' },
    { icon: '◇', title: 'Community Impact', desc: 'Our work extends beyond competitions. We invest in the next generation through outreach and education.' },
    { icon: '◉', title: 'Continuous Growth', desc: 'We embrace failure as a learning opportunity and iterate relentlessly toward improvement.' },
  ];

  const timeline = [
    { year: 'Past Seasons', title: 'A Legacy of Excellence', desc: 'Members from Hunga Munga, Slingshot, ChaiGPT, and Shooting Stars competed individually, developing specialized expertise and mutual respect.' },
    { year: 'This Year', title: 'The Dream Team Assembles', desc: 'Recognizing that we are stronger together, the top talent from four teams merged to form Luminary Robotics for our inaugural season.' },
    { year: 'Present', title: 'More Than Robots', desc: 'We are setting a new standard for how competitors can unite, sharing knowledge and building a lasting engineering legacy.' },
  ];
</script>

<svelte:head>
  <title>About – Luminary Robotics FTC 35300</title>
  <meta name="description" content="Learn about Luminary Robotics FTC Team 35300 — our history, mission, core values, and journey through competitive robotics." />
</svelte:head>

<PageHero
  label="About Us"
  title="Who We Are"
  subtitle="Luminary Robotics is FTC Team 35300 — a student-led engineering organization competing at the highest level while investing in our community."
/>

<div class="container">
  <!-- History -->
  <section class="section">
    <div class="about-grid reveal">
      <div class="about-text">
        <span class="section-header__label">Our Story</span>
        <h2 class="about-heading">The Dream Team Merger</h2>
        <p class="about-p">This is Luminary's inaugural year, born from a visionary merger of the best talent from four esteemed teams: <strong>Hunga Munga</strong>, <strong>Slingshot</strong>, <strong>ChaiGPT</strong>, and <strong>Shooting Stars</strong>.</p>
        <p class="about-p">After years of competing against each other and developing a deep respect for one another's engineering skills, we realized that our combined expertise could create something truly extraordinary. Luminary is a testament to the idea that competition eventually leads to collaboration.</p>
      </div>
      <div class="merger-diagram reveal" aria-label="Merger of Hunga Munga, Slingshot, ChaiGPT, and Shooting Stars into Luminary">
        <div class="merger-teams">
          <div class="merger-team">Hunga Munga</div>
          <div class="merger-team">Slingshot</div>
          <div class="merger-team">ChaiGPT</div>
          <div class="merger-team">Shooting Stars</div>
        </div>
        <div class="merger-lines">
          <svg width="100%" height="60" viewBox="0 0 400 60" preserveAspectRatio="none" fill="none">
            <path d="M50 0 C50 30, 200 30, 200 60" stroke="currentColor" stroke-width="2" stroke-opacity="0.3" />
            <path d="M150 0 C150 30, 200 30, 200 60" stroke="currentColor" stroke-width="2" stroke-opacity="0.3" />
            <path d="M250 0 C250 30, 200 30, 200 60" stroke="currentColor" stroke-width="2" stroke-opacity="0.3" />
            <path d="M350 0 C350 30, 200 30, 200 60" stroke="currentColor" stroke-width="2" stroke-opacity="0.3" />
          </svg>
        </div>
        <div class="merger-final">
          <img src="/logo-icon.png" alt="Luminary Logo" class="merger-logo logo-icon" />
          <div class="merger-final-name">Luminary</div>
        </div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- Mission -->
  <section class="section">
    <div class="mission-wrap reveal">
      <span class="section-header__label">Why We Exist</span>
      <blockquote class="mission-statement">
        "FIRST IS MORE THAN ROBOTS"
      </blockquote>
      <p class="mission-desc">We are an example of how competitors can evolve into collaborators, sharing knowledge and building a stronger community together.</p>
    </div>
  </section>

  <div class="divider"></div>

  <!-- Core Values -->
  <section class="section">
    <div class="values-header reveal">
      <span class="section-header__label">Principles</span>
      <h2 class="section-header__title">Core Values</h2>
      <p class="section-header__desc">[Core Values Placeholder] The principles that guide every decision we make as a team.</p>
    </div>
    <div class="values-grid">
      {#each values as val, i}
        <div class="value-card reveal" style="transition-delay:{i*80}ms">
          <div class="value-card__icon" aria-hidden="true">{val.icon}</div>
          <h3 class="value-card__title">{val.title}</h3>
          <p class="value-card__desc">{val.desc}</p>
        </div>
      {/each}
    </div>
  </section>

  <div class="divider"></div>

  <!-- Timeline -->
  <section class="section">
    <div class="timeline-header reveal">
      <span class="section-header__label">Journey</span>
      <h2 class="section-header__title">Our Timeline</h2>
      <p class="section-header__desc">Key milestones in the history of Luminary Robotics.</p>
    </div>
    <div class="timeline-wrap">
      <Timeline items={timeline} />
    </div>
  </section>
</div>

<style>
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-10);
    align-items: center;
  }

  .about-text { display: flex; flex-direction: column; gap: var(--space-4); }

  .about-heading {
    font-size: var(--text-2xl);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text);
  }

  .about-p {
    font-size: var(--text-base);
    color: var(--text-2);
    line-height: 1.75;
  }

  .about-image {
    aspect-ratio: 4/3;
    border-radius: var(--radius);
    font-size: var(--text-sm);
    color: var(--text-3);
  }

  .mission-wrap {
    text-align: center;
    max-width: 720px;
    margin: 0 auto;
  }

  .mission-statement {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 4vw, var(--text-3xl));
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text);
    line-height: 1.2;
    margin-top: var(--space-4);
    margin-bottom: var(--space-4);
    font-style: normal;
    border-left: none;
    padding: 0;
  }

  .mission-desc {
    font-size: var(--text-lg);
    color: var(--text-2);
    line-height: 1.6;
  }

  /* Merger Diagram */
  .merger-diagram {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: var(--space-6);
    color: var(--text-3);
  }

  .merger-teams {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: var(--space-2);
  }

  .merger-team {
    flex: 1;
    text-align: center;
    font-family: var(--font-heading);
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--text-2);
    background: var(--surface-2);
    border: 1px solid var(--border-2);
    border-radius: var(--radius-sm);
    padding: var(--space-3) var(--space-1);
    letter-spacing: -0.01em;
  }

  .merger-lines {
    width: 100%;
    height: 60px;
    margin: var(--space-2) 0;
  }

  .merger-final {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-3);
  }

  .merger-logo {
    width: 64px;
    height: 64px;
    object-fit: contain;
  }

  .merger-final-name {
    font-family: var(--font-heading);
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.02em;
  }

  .values-header { margin-bottom: var(--space-7); }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-4);
  }

  .value-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: var(--space-6);
    transition: border-color var(--transition);
  }

  .value-card:hover { border-color: var(--border-2); }

  .value-card__icon {
    font-size: 1.5rem;
    color: var(--accent-blue);
    margin-bottom: var(--space-4);
    opacity: 0.8;
  }

  .value-card__title {
    font-size: var(--text-base);
    font-weight: 600;
    color: var(--text);
    margin-bottom: var(--space-3);
    letter-spacing: -0.01em;
  }

  .value-card__desc {
    font-size: var(--text-sm);
    color: var(--text-3);
    line-height: 1.65;
  }

  .timeline-header { margin-bottom: var(--space-8); }
  .timeline-wrap { max-width: 640px; }

  .divider {
    height: 1px;
    background: var(--border);
  }

  @media (max-width: 900px) {
    .about-grid { grid-template-columns: 1fr; }
    .values-grid { grid-template-columns: repeat(2, 1fr); }
    .merger-teams { flex-direction: column; gap: var(--space-3); }
    .merger-lines { display: none; }
    .merger-diagram { padding: var(--space-8) var(--space-6); gap: var(--space-6); }
  }

  @media (max-width: 560px) {
    .values-grid { grid-template-columns: 1fr; }
  }
</style>
