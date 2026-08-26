<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import MediaFrame from '$lib/components/MediaFrame.svelte';

  const systems = [
    {
      label: 'Mechanical',
      title: 'Mechanical Systems',
      desc: 'Drivetrain, intake, scoring mechanisms, and the frame holding it all together. Write-up goes here as we finish it.',
      caption: 'Mechanical',
    },
    {
      label: 'Software',
      title: 'Programming',
      desc: 'How we organize the code, how driver control works, and what we use to test it. Write-up coming soon.',
      caption: 'Programming',
    },
    {
      label: 'Autonomous',
      title: 'Autonomous Routines',
      desc: 'Our autonomous strategy, the vision setup, and how we check whether a routine actually repeats. Write-up coming soon.',
      caption: 'Autonomous',
    },
  ];

  const gallery = ['Robot', 'CAD', 'Detail'];
</script>

<svelte:head>
  <title>Robot | Luminary Robotics FTC 36633</title>
  <meta name="description" content="The current season robot from Luminary Robotics FTC Team 36633: mechanical systems, programming, and autonomous routines." />
</svelte:head>

<PageHero
  label="Current Season"
  title="Our Robot"
  subtitle="What we're building this season."
/>

<!-- Hero image -->
<section class="robot-hero section--sm">
  <div class="container">
    <MediaFrame src="/images/robot/hero.jpg" alt="Luminary Robotics competition robot" caption="Robot" ratio="16 / 8" />
  </div>
</section>

<!-- Overview -->
<section class="section">
  <div class="container">
    <div class="overview-grid">
      <div>
        <span class="section-header__label">Overview</span>
        <h2 class="overview-heading">Robot Overview</h2>
        <p class="overview-p">We're still building. This page has the general idea for now, and we'll fill in the real details once the design stops changing every week.</p>
        <p class="overview-p">What we're aiming for: a robot that scores in autonomous, survives a full day of matches, and is quick to fix between them.</p>
      </div>
      <MediaFrame src="/images/robot/cad.jpg" alt="CAD render of the robot" caption="CAD" ratio="1 / 1" />
    </div>
  </div>
</section>

<div class="container"><div class="divider"></div></div>

<!-- Systems -->
<section class="section">
  <div class="container">
    <div class="systems-header">
      <span class="section-header__label">Engineering</span>
      <h2 class="section-header__title">Robot Systems</h2>
    </div>
    <div class="systems-list">
      {#each systems as sys, i}
        <div class="system-item" class:system-item--reverse={i % 2 === 1}>
          <div class="system-text">
            <span class="section-header__label">{sys.label}</span>
            <h3 class="system-heading">{sys.title}</h3>
            <p class="system-desc">{sys.desc}</p>
          </div>
          <MediaFrame src="" alt="" caption={sys.caption} ratio="16 / 10" />
        </div>
        {#if i < systems.length - 1}
          <div class="divider"></div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<div class="container"><div class="divider"></div></div>

<!-- Gallery -->
<section class="section">
  <div class="container">
    <div class="gallery-header">
      <span class="section-header__label">Gallery</span>
      <h2 class="section-header__title">Photo Gallery</h2>
    </div>
    <div class="gallery-grid">
      {#each gallery as item}
        <MediaFrame src="" alt="" caption={item} ratio="4 / 3" />
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
