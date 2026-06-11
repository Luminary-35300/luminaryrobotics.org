<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import TeamCard from '$lib/components/TeamCard.svelte';

  const sections = [
    {
      label: 'Leadership & Guidance',
      title: 'Mentors & Professionals',
      members: [
        { name: 'Sponsor Name 1', role: 'Engineering Mentor', bio: 'Expert in mechanical design.', img: '' },
        { name: 'Sponsor Name 2', role: 'Software Mentor', bio: 'Guiding the programming team.', img: '' },
      ]
    }
  ];
</script>

<svelte:head>
  <title>Mentors & Professionals – Luminary Robotics FTC 35300</title>
  <meta name="description" content="Meet the mentors and professionals who guide and support Luminary Robotics." />
</svelte:head>

<PageHero
  label="Our Guidance"
  title="Mentors & Professionals"
  subtitle="Meet the professionals who guide and support Luminary Robotics."
/>

<div class="container">
  {#each sections as sec, si}
    <section class="team-section section--sm">
      <div class="team-section__header reveal">
        <span class="section-header__label">{sec.label}</span>
        <h2 class="section-header__title">{sec.title}</h2>
      </div>
      <div class="team-grid" class:team-grid--2={sec.members.length <= 2}>
        {#each sec.members as member, i}
          <div class="reveal" style="transition-delay:{i*80}ms">
            <TeamCard
              name={member.name}
              role={member.role}
              bio={member.bio}
              img={member.img}
            />
          </div>
        {/each}
      </div>
    </section>
    {#if si < sections.length - 1}
      <div class="divider"></div>
    {/if}
  {/each}
</div>

<style>
  .team-section { padding-top: var(--space-8); padding-bottom: var(--space-8); }
  .team-section__header { margin-bottom: var(--space-7); }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-5);
  }

  .team-grid--2 {
    grid-template-columns: repeat(2, 1fr);
    max-width: 680px;
  }

  .divider { height: 1px; background: var(--border); }

  @media (max-width: 1024px) {
    .team-grid { grid-template-columns: repeat(3, 1fr); }
  }

  @media (max-width: 768px) {
    .team-grid, .team-grid--2 { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 480px) {
    .team-grid, .team-grid--2 { grid-template-columns: 1fr; }
  }
</style>
