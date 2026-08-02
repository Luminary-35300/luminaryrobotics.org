<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import MediaFrame from '$lib/components/MediaFrame.svelte';

  const specs = [
    { label: 'Weight',       value: 'TBA' },
    { label: 'Dimensions',   value: 'TBA' },
    { label: 'Drive System', value: 'TBA' },
    { label: 'Programming',  value: 'Java' },
    { label: 'Control Hub',  value: 'REV Control Hub' },
    { label: 'Motors',       value: 'TBA' },
    { label: 'Servos',       value: 'TBA' },
    { label: 'Sensors',      value: 'TBA' },
  ];

  const systems = [
    {
      label: 'Mechanical',
      title: 'Mechanical Systems',
      desc: 'The drivetrain, intake, scoring mechanisms, and structural design built by our engineering team. Full write-up coming as the season progresses.',
      caption: 'Mechanical',
    },
    {
      label: 'Software',
      title: 'Programming',
      desc: 'Our codebase architecture, teleop control scheme, sensor integration, and the tools our programming team relies on. Full write-up coming soon.',
      caption: 'Programming',
    },
    {
      label: 'Autonomous',
      title: 'Autonomous Routines',
      desc: 'Autonomous strategy, computer vision, path planning, and the repeatability testing behind it. Full write-up coming soon.',
      caption: 'Autonomous',
    },
  ];

  const gallery = ['Robot', 'Robot', 'Robot', 'Robot', 'CAD', 'Detail'];
</script>

<svelte:head>
  <title>Robot | Luminary Robotics FTC 36633</title>
  <meta name="description" content="The current season robot from Luminary Robotics FTC Team 36633: mechanical systems, programming, autonomous routines, and technical specifications." />
</svelte:head>

<PageHero
  label="Current Season"
  title="Our Robot"
  subtitle="Engineered for competition. Built with precision. Explore the systems that power Luminary Robotics on the field."
/>

<!-- Hero image -->
<section class="robot-hero section--sm">
  <div class="container">
    <MediaFrame src="/images/robot/hero.jpg" alt="Luminary Robotics competition robot" caption="Robot" ratio="16 / 8" class="reveal" />
  </div>
</section>

<!-- Overview -->
<section class="section">
  <div class="container">
    <div class="overview-grid reveal">
      <div>
        <span class="section-header__label">Overview</span>
        <h2 class="overview-heading">Robot Overview</h2>
        <p class="overview-p">A look at this season's robot: how it's designed, the strategy behind it, and how it handles the challenges of this year's game. Full details are coming as we lock in the build.</p>
        <p class="overview-p">Our goal is a robot that scores well in autonomous, stays reliable through teleop, and adapts to different field setups across the season.</p>
      </div>
      <MediaFrame src="/images/robot/cad.jpg" alt="CAD render of the robot" caption="CAD" ratio="1 / 1" class="reveal" />
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
          <MediaFrame src={sys.img} alt="{sys.title}" caption={sys.caption} ratio="16 / 10" class="system-image" />
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
      <p class="section-header__desc">Technical specifications for this season's robot. Values marked TBA are finalized closer to competition.</p>
    </div>
    <div class="specs-table reveal">
      {#each specs as spec}
        <div class="spec-row">
          <dt class="spec-label">{spec.label}</dt>
          <dd class="spec-value" class:spec-value--tba={spec.value === 'TBA'}>{spec.value}</dd>
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
        <MediaFrame src={''} alt="Robot photo" caption={item} ratio="4 / 3" class="reveal" />
      {/each}
    </div>
  </div>
</section>

<style>
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

  .spec-value--tba {
    color: var(--text-3);
    letter-spacing: 0.06em;
  }

  .gallery-header { margin-bottom: var(--space-6); }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
  }

  .divider { height: 1px; background: var(--border); }

  @media (max-width: 900px) {
    .overview-grid, .system-item, .system-item--reverse {
      grid-template-columns: 1fr;
      direction: ltr;
    }
    .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 560px) {
    .gallery-grid { grid-template-columns: 1fr; }
  }
</style>
