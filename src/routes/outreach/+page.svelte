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

  .divider { height: 1px; background: var(--border); }

  @media (max-width: 1024px) {
    .outreach-stats { grid-template-columns: repeat(2, 1fr); }
    .outreach-gallery { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 900px) {
    .outreach-desc { grid-template-columns: 1fr; }
    .outreach-img { display: none; }
    .events-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 560px) {
    .outreach-hero { height: 260px; }
    .outreach-gallery { grid-template-columns: repeat(2, 1fr); }
  }
</style>
