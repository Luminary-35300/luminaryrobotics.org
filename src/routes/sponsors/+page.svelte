<script>
  import PageHero from '$lib/components/PageHero.svelte';

  const tiers = [
    {
      name: 'Platinum',
      label: 'platinum',
      amount: '$2,500+',
      desc: 'Premier visibility across all materials, websites, and competition presentations. Includes exclusive team liaison and presentation opportunities.',
      logos: [],
      perks: [
        'Large logo on robot',
        'Premier website placement',
        'Featured in all media',
        'Team presentation access',
        'Dedicated sponsor report',
        'Event tickets & recognition',
      ],
    },
    {
      name: 'Gold',
      label: 'gold',
      amount: '$1,000 to $2,499',
      desc: 'Prominent recognition across team materials, website, and competition events with logo placement on robot.',
      logos: [],
      perks: [
        'Medium logo on robot',
        'Website recognition',
        'Social media feature',
        'Competition recognition',
        'Sponsor update report',
      ],
    },
    {
      name: 'Silver',
      label: 'silver',
      amount: '$500 to $999',
      desc: 'Website recognition and inclusion in all season-end materials and team presentations.',
      logos: [],
      perks: [
        'Logo on team materials',
        'Website recognition',
        'Social media mention',
        'Season-end report',
      ],
    },
    {
      name: 'Bronze',
      label: 'bronze',
      amount: '$100 to $499',
      desc: 'Website recognition and acknowledgment in team materials and communications.',
      logos: [],
      perks: [
        'Website recognition',
        'Thank-you acknowledgment',
        'Season-end mention',
      ],
    },
  ];

  const reasons = [
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
      title: 'STEM Investment',
      desc: 'Directly support student engineering education and hands-on learning in your community.',
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>',
      title: 'Brand Visibility',
      desc: 'Reach parents, educators, students, and industry professionals at regional and state competitions.',
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2h16v20l-3-2-2 2-3-2-3 2-2-2-3 2z"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>',
      title: 'Tax Benefits',
      desc: 'Contributions may qualify as charitable donations. Consult your tax professional for details.',
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
      title: 'Community Impact',
      desc: 'Partner with an organization that gives back through outreach, workshops, and STEM advocacy.',
    },
  ];
</script>

<svelte:head>
  <title>Sponsors | Luminary Robotics FTC 36633</title>
  <meta name="description" content="Support Luminary Robotics FTC Team 36633. Learn about sponsorship tiers, benefits, and how your partnership helps advance STEM education." />
</svelte:head>

<PageHero
  label="Partnership"
  title="Our Sponsors"
  subtitle="Luminary Robotics is grateful for the organizations and individuals who make our program possible. Explore sponsorship opportunities below."
/>

<!-- Tiers -->
<div class="container">
  {#each tiers as tier, ti}
    <section class="tier-section section--sm reveal">
      <div class="tier-header">
        <div class="tier-header__left">
          <span class="tier-badge tier-badge--{tier.label}">{tier.name}</span>
          <h2 class="tier-title">{tier.name} Sponsors</h2>
          <p class="tier-amount">{tier.amount}</p>
          <p class="tier-desc">{tier.desc}</p>
        </div>
        <div class="tier-perks">
          <p class="tier-perks__title">Included</p>
          <ul class="tier-perks__list">
            {#each tier.perks as perk}
              <li class="tier-perk">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7l3 3 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {perk}
              </li>
            {/each}
          </ul>
        </div>
      </div>
      <div class="tier-logos">
        {#each tier.logos as logo}
          <div class="sponsor-logo placeholder" aria-label="{logo}">{logo}</div>
        {/each}
        <div class="sponsor-logo sponsor-logo--cta">
          <span>Your Logo Here</span>
          <a href="/contact" class="btn btn--outline btn--sm">Get in Touch</a>
        </div>
      </div>
    </section>
    {#if ti < tiers.length - 1}
      <div class="divider"></div>
    {/if}
  {/each}
</div>

<div class="container"><div class="divider"></div></div>

<!-- Why sponsor -->
<section class="section">
  <div class="container">
    <div class="why-header reveal">
      <span class="section-header__label">Partnership</span>
      <h2 class="section-header__title">Why Sponsor Luminary?</h2>
      <p class="section-header__desc">Partnering with Luminary Robotics is a direct investment in STEM education and in the students building it in your community.</p>
    </div>
    <div class="why-grid">
      {#each reasons as r, i}
        <div class="why-card reveal" style="transition-delay:{i*80}ms">
          <div class="why-card__icon" aria-hidden="true">{@html r.icon}</div>
          <h3 class="why-card__title">{r.title}</h3>
          <p class="why-card__desc">{r.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section class="sponsor-cta">
  <div class="container">
    <div class="sponsor-cta__inner reveal">
      <div>
        <h2 class="sponsor-cta__title">Become a Sponsor</h2>
        <p class="sponsor-cta__desc">Interested in partnering with Luminary Robotics? We'd love to discuss how we can work together to advance STEM education and competitive robotics.</p>
      </div>
      <div class="sponsor-cta__actions">
        <a href="/contact" class="btn btn--primary" id="sponsor-cta-contact">Contact Us</a>
        <a href="mailto:luminaryrobotics@gmail.com" class="btn btn--outline">Send an Email</a>
      </div>
    </div>
  </div>
</section>

<style>
  .tier-section { padding: var(--space-8) 0; }

  .tier-header {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: var(--space-10);
    margin-bottom: var(--space-6);
  }

  .tier-badge {
    display: inline-flex;
    font-size: var(--text-xs);
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: var(--radius-sm);
    margin-bottom: var(--space-4);
    border: 1px solid;
  }

  .tier-badge--platinum { color: #b0bec5; border-color: rgba(176,190,197,0.3); background: rgba(176,190,197,0.06); }
  .tier-badge--gold     { color: var(--accent-gold); border-color: rgba(201,168,76,0.3); background: rgba(201,168,76,0.06); }
  .tier-badge--silver   { color: var(--accent); border-color: rgba(145,152,170,0.3); background: rgba(145,152,170,0.06); }
  .tier-badge--bronze   { color: #c07950; border-color: rgba(192,121,80,0.3); background: rgba(192,121,80,0.06); }

  .tier-title {
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.01em;
    margin-bottom: var(--space-2);
  }

  .tier-amount {
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--text-3);
    letter-spacing: 0.04em;
    margin-bottom: var(--space-3);
  }

  .tier-desc {
    font-size: var(--text-base);
    color: var(--text-2);
    line-height: 1.7;
    max-width: 480px;
  }

  .tier-perks__title {
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-3);
    margin-bottom: var(--space-4);
  }

  .tier-perks__list { list-style: none; display: flex; flex-direction: column; gap: var(--space-2); }

  .tier-perk {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    font-size: var(--text-sm);
    color: var(--text-2);
  }

  .tier-perk svg { color: var(--accent-blue); flex-shrink: 0; }

  .tier-logos {
    display: flex;
    gap: var(--space-4);
    flex-wrap: wrap;
  }

  .sponsor-logo {
    height: 80px;
    min-width: 140px;
    flex: 1;
    max-width: 200px;
    border-radius: var(--radius);
    font-size: var(--text-xs);
    color: var(--text-3);
  }

  .sponsor-logo--cta {
    background: transparent;
    border: 1.5px dashed var(--border-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-3);
    font-size: var(--text-xs);
    color: var(--text-3);
    letter-spacing: 0.06em;
  }

  .why-header { margin-bottom: var(--space-7); }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-4);
  }

  .why-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: var(--space-6);
    transition: border-color var(--transition);
  }

  .why-card:hover { border-color: var(--border-2); }

  .why-card__icon {
    color: var(--accent-blue);
    margin-bottom: var(--space-4);
    display: flex;
  }

  .why-card__icon :global(svg) {
    width: 24px;
    height: 24px;
  }

  .why-card__title {
    font-size: var(--text-base);
    font-weight: 600;
    color: var(--text);
    margin-bottom: var(--space-3);
    letter-spacing: -0.01em;
  }

  .why-card__desc {
    font-size: var(--text-sm);
    color: var(--text-3);
    line-height: 1.65;
  }

  .sponsor-cta {
    background: var(--surface);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: var(--space-10) 0;
    margin-top: var(--space-8);
    position: relative;
    z-index: 1;
  }

  .sponsor-cta__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-8);
  }

  .sponsor-cta__title {
    font-size: var(--text-2xl);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text);
    margin-bottom: var(--space-3);
  }

  .sponsor-cta__desc {
    font-size: var(--text-base);
    color: var(--text-2);
    max-width: 560px;
    line-height: 1.7;
  }

  .sponsor-cta__actions {
    display: flex;
    gap: var(--space-3);
    flex-shrink: 0;
    flex-wrap: wrap;
  }

  .divider { height: 1px; background: var(--border); }

  @media (max-width: 1024px) {
    .why-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 900px) {
    .tier-header { grid-template-columns: 1fr; }
    .sponsor-cta__inner { flex-direction: column; align-items: flex-start; }
  }

  @media (max-width: 560px) {
    .why-grid { grid-template-columns: 1fr; }
  }
</style>
