<script>
  import PageHero from '$lib/components/PageHero.svelte';

  const tiers = [
    {
      name: 'Platinum',
      label: 'platinum',
      amount: '$2,500+',
      perks: [
        'Large logo on robot',
        'Top placement on this site',
        'Featured in all team media',
        'Team presentation access',
        'Dedicated sponsor report',
      ],
    },
    {
      name: 'Gold',
      label: 'gold',
      amount: '$1,000 to $2,499',
      perks: [
        'Medium logo on robot',
        'Recognition on this site',
        'Social media feature',
        'Sponsor update report',
      ],
    },
    {
      name: 'Silver',
      label: 'silver',
      amount: '$500 to $999',
      perks: [
        'Logo on team materials',
        'Recognition on this site',
        'Social media mention',
        'Season-end report',
      ],
    },
    {
      name: 'Bronze',
      label: 'bronze',
      amount: '$100 to $499',
      perks: [
        'Recognition on this site',
        'Thank-you acknowledgment',
        'Season-end mention',
      ],
    },
  ];

  const reasons = [
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
      title: 'Where It Goes',
      desc: 'Parts, tools, registration, and travel. It pays for students to build something real instead of reading about it.',
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>',
      title: 'Visibility',
      desc: "Your logo goes on the robot and on this site, and we're in front of parents, teachers, and other teams at every competition.",
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
      title: 'Local Impact',
      desc: 'We run demos and workshops around Central Texas and help new teams get off the ground.',
    },
  ];
</script>

<svelte:head>
  <title>Sponsors | Luminary Robotics FTC 36633</title>
  <meta name="description" content="Support Luminary Robotics FTC Team 36633. Sponsorship levels, what each one covers, and how to get in touch." />
</svelte:head>

<PageHero
  label="Partnership"
  title="Sponsor Luminary"
  subtitle="This is our first season and we don't have sponsors yet. Here's what each level covers."
/>

<div class="container">
  <!-- Tiers -->
  <section class="section--sm">
    <div class="tiers">
      {#each tiers as tier}
        <div class="tier tier--{tier.label}">
          <span class="tier__name">{tier.name}</span>
          <p class="tier__amount">{tier.amount}</p>
          <ul class="tier__perks">
            {#each tier.perks as perk}
              <li>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7l3 3 6-6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {perk}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </section>

  <div class="divider"></div>

  <!-- Why sponsor -->
  <section class="section">
    <div class="why-header">
      <span class="section-header__label">Partnership</span>
      <h2 class="section-header__title">Why Sponsor Luminary?</h2>
      <p class="section-header__desc">
        Where the money goes, and what you get for it.
      </p>
    </div>
    <div class="why-grid">
      {#each reasons as r}
        <div class="why-card">
          <div class="why-card__icon" aria-hidden="true">{@html r.icon}</div>
          <h3 class="why-card__title">{r.title}</h3>
          <p class="why-card__desc">{r.desc}</p>
        </div>
      {/each}
    </div>
  </section>

  <div class="divider"></div>

  <!-- CTA -->
  <section class="section--sm">
    <div class="cta">
      <div>
        <h2 class="cta__title">Interested in partnering?</h2>
        <p class="cta__desc">
          Tell us a bit about your organization and we'll send over our sponsorship packet.
        </p>
      </div>
      <div class="cta__actions">
        <a href="/contact" class="btn btn--primary" id="sponsor-cta-contact">Contact Us</a>
        <a href="mailto:luminaryrobotics@gmail.com" class="btn btn--outline">Send an Email</a>
      </div>
    </div>
  </section>
</div>

<style>
  /* ── Tiers ── */
  .tiers {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-4);
  }

  .tier {
    display: flex;
    flex-direction: column;
    background: var(--surface);
    border: 1px solid var(--border);
    border-top: 2px solid var(--border-2);
    border-radius: var(--radius);
    padding: var(--space-5);
  }

  .tier--platinum { border-top-color: #b9c0cc; }
  .tier--gold     { border-top-color: var(--accent-gold); }
  .tier--silver   { border-top-color: #9aa0ad; }
  .tier--bronze   { border-top-color: #a9784b; }

  .tier__name {
    font-size: var(--text-xs);
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-3);
  }

  .tier__amount {
    font-family: var(--font-heading);
    font-size: var(--text-lg);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text);
    margin: var(--space-2) 0 var(--space-4);
  }

  .tier__perks {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    padding-top: var(--space-4);
    border-top: 1px solid var(--border);
  }

  .tier__perks li {
    display: flex;
    align-items: flex-start;
    gap: var(--space-2);
    font-size: var(--text-sm);
    color: var(--text-2);
    line-height: 1.5;
  }

  .tier__perks svg {
    color: var(--accent-blue);
    flex-shrink: 0;
    margin-top: 5px;
  }

  /* ── Why ── */
  .why-header { margin-bottom: var(--space-7); }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-5);
  }

  .why-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: var(--space-6);
  }

  .why-card__icon {
    color: var(--accent-blue);
    margin-bottom: var(--space-4);
    display: flex;
  }

  .why-card__icon :global(svg) {
    width: 22px;
    height: 22px;
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

  /* ── CTA ── */
  .cta {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--space-8);
    flex-wrap: wrap;
  }

  .cta__title {
    font-size: var(--text-xl);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text);
    margin-bottom: var(--space-3);
  }

  .cta__desc {
    font-size: var(--text-base);
    color: var(--text-2);
    line-height: 1.7;
    max-width: 560px;
  }

  .cta__actions {
    display: flex;
    gap: var(--space-3);
    flex-shrink: 0;
  }

  .divider { height: 1px; background: var(--border); }

  @media (max-width: 900px) {
    .tiers { grid-template-columns: repeat(2, 1fr); }
    .why-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 520px) {
    .tiers { grid-template-columns: 1fr; }
  }
</style>
