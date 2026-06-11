<script>
  import PageHero from '$lib/components/PageHero.svelte';

  const specs = [
    { label: 'Weight',         value: '[XX lbs]' },
    { label: 'Dimensions',     value: '[X" × X" × X"]' },
    { label: 'Drive System',   value: '[Mecanum / Tank / Swerve]' },
    { label: 'Programming',    value: '[Java / Blocks]' },
    { label: 'Control Hub',    value: 'REV Control Hub' },
    { label: 'Motors',         value: '[# × Motor Type]' },
    { label: 'Servos',         value: '[# × Servo Type]' },
    { label: 'Sensors',        value: '[Sensors placeholder]' },
  ];

  const systems = [
    {
      label: 'Mechanical',
      title: 'Mechanical Systems',
      desc: '[Mechanical Description Placeholder] — Overview of the drivetrain, intake, scoring mechanisms, and structural design choices made by the engineering team.',
      image: true,
    },
    {
      label: 'Software',
      title: 'Programming',
      desc: '[Programming Description Placeholder] — Overview of the codebase architecture, teleop control scheme, sensor integration, and software tools used by the programming team.',
      image: true,
    },
    {
      label: 'Autonomous',
      title: 'Autonomous Routines',
      desc: '[Autonomous Description Placeholder] — Overview of the autonomous period strategy, computer vision systems, path planning, and repeatability testing.',
      image: true,
    },
  ];

  const gallery = ['[Photo 1]', '[Photo 2]', '[Photo 3]', '[Photo 4]', '[CAD Render]', '[Detail Shot]'];
</script>

<svelte:head>
  <title>Robot – Luminary Robotics FTC 35300</title>
  <meta name="description" content="Explore the current season robot from Luminary Robotics FTC Team 35300 — mechanical systems, programming, autonomous routines, and technical specifications." />
</svelte:head>

<PageHero
  label="Current Season"
  title="Our Robot"
  subtitle="Engineered for competition. Built with precision. Explore the systems that power Luminary Robotics on the field."
/>

<!-- Hero image -->
<section class="robot-hero section--sm">
  <div class="container">
    <div class="robot-hero__image placeholder reveal" aria-label="Robot hero image placeholder">
      <div class="robot-hero__inner">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity="0.3">
          <rect x="20" y="8" width="40" height="30" rx="2" stroke="currentColor" stroke-width="1.5"/>
          <rect x="10" y="42" width="60" height="24" rx="2" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="30" cy="22" r="5" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="50" cy="22" r="5" stroke="currentColor" stroke-width="1.5"/>
          <rect x="4" y="48" width="8" height="12" rx="1" stroke="currentColor" stroke-width="1.5"/>
          <rect x="68" y="48" width="8" height="12" rx="1" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <p>[Robot Hero Image]</p>
      </div>
    </div>
  </div>
</section>

<!-- Overview -->
<section class="section">
  <div class="container">
    <div class="overview-grid reveal">
      <div>
        <span class="section-header__label">Overview</span>
        <h2 class="overview-heading">Robot Overview</h2>
        <p class="overview-p">[Overview Text Placeholder] — A comprehensive description of this season's robot: its design philosophy, competitive strategy, and how it addresses the game's unique challenges.</p>
        <p class="overview-p">The robot has been designed to maximize autonomous points, maintain reliable teleop performance, and adapt to various field configurations throughout the season.</p>
      </div>
      <div class="cad-placeholder placeholder reveal" aria-label="CAD render placeholder">
        <div>
          <p class="placeholder-label">[CAD Render]</p>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="container"><div class="divider"></div></div>

<!-- Systems -->
<section class="section">
  <div class="container">
    <div class="systems-header reveal">
      <span class="section-header__label">Engineering</span>
      <h2 class="section-header__title">Robot Systems</h2>
    </div>
    <div class="systems-list">
      {#each systems as sys, i}
        <div class="system-item reveal" class:system-item--reverse={i % 2 === 1}>
          <div class="system-text">
            <span class="section-header__label">{sys.label}</span>
            <h3 class="system-heading">{sys.title}</h3>
            <p class="system-desc">{sys.desc}</p>
          </div>
          <div class="system-image placeholder" aria-label="{sys.title} image placeholder">
            <p class="placeholder-label">[{sys.title} Image]</p>
          </div>
        </div>
        {#if i < systems.length - 1}
          <div class="divider"></div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<div class="container"><div class="divider"></div></div>

<!-- Specs -->
<section class="section">
  <div class="container">
    <div class="specs-header reveal">
      <span class="section-header__label">Technical</span>
      <h2 class="section-header__title">Specifications</h2>
      <p class="section-header__desc">[Specifications Placeholder] — Detailed technical specifications of the robot.</p>
    </div>
    <div class="specs-table reveal">
      {#each specs as spec}
        <div class="spec-row">
          <dt class="spec-label">{spec.label}</dt>
          <dd class="spec-value">{spec.value}</dd>
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
      <h2 class="section-header__title">Photo Gallery</h2>
    </div>
    <div class="gallery-grid">
      {#each gallery as item, i}
        <div class="gallery-item placeholder reveal" style="transition-delay:{i*60}ms" aria-label="{item}">{item}</div>
      {/each}
    </div>
  </div>
</section>

<style>
  .robot-hero__image {
    width: 100%;
    height: 480px;
    border-radius: var(--radius);
    background: var(--surface);
    font-size: var(--text-sm);
    color: var(--text-3);
  }

  .robot-hero__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);
    color: var(--border-2);
  }

  .robot-hero__inner p {
    color: var(--text-3);
    font-size: var(--text-sm);
  }

  .overview-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-10);
    align-items: center;
  }

  .overview-heading {
    font-size: var(--text-2xl);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text);
    margin: var(--space-3) 0 var(--space-4);
  }

  .overview-p {
    font-size: var(--text-base);
    color: var(--text-2);
    line-height: 1.75;
    margin-bottom: var(--space-3);
  }

  .cad-placeholder {
    aspect-ratio: 1;
    border-radius: var(--radius);
    font-size: var(--text-sm);
    color: var(--text-3);
  }

  .systems-header { margin-bottom: var(--space-8); }
  .systems-list { display: flex; flex-direction: column; gap: var(--space-8); }

  .system-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-10);
    align-items: center;
  }

  .system-item--reverse { direction: rtl; }
  .system-item--reverse > * { direction: ltr; }

  .system-heading {
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--text);
    letter-spacing: -0.01em;
    margin: var(--space-3) 0 var(--space-4);
  }

  .system-desc {
    font-size: var(--text-base);
    color: var(--text-2);
    line-height: 1.75;
  }

  .system-image {
    aspect-ratio: 16/10;
    border-radius: var(--radius);
    font-size: var(--text-sm);
    color: var(--text-3);
  }

  .specs-header { margin-bottom: var(--space-6); }

  .specs-table {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    max-width: 640px;
  }

  .spec-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid var(--border);
    padding: var(--space-4) var(--space-5);
  }

  .spec-row:last-child { border-bottom: none; }

  .spec-label {
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--text-3);
    letter-spacing: 0.02em;
  }

  .spec-value {
    font-size: var(--text-sm);
    color: var(--text);
  }

  .gallery-header { margin-bottom: var(--space-6); }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
  }

  .gallery-item {
    aspect-ratio: 4/3;
    border-radius: var(--radius);
    font-size: var(--text-sm);
    color: var(--text-3);
    transition: border-color var(--transition);
  }

  .gallery-item:hover { border-color: var(--border-2); }

  .placeholder-label {
    font-size: var(--text-sm);
    color: var(--text-3);
    margin: 0;
  }

  .divider { height: 1px; background: var(--border); }

  @media (max-width: 900px) {
    .overview-grid, .system-item, .system-item--reverse {
      grid-template-columns: 1fr;
      direction: ltr;
    }
    .cad-placeholder { display: none; }
    .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 560px) {
    .gallery-grid { grid-template-columns: 1fr; }
    .robot-hero__image { height: 280px; }
  }
</style>
