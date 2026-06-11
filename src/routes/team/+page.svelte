<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import TeamCard from '$lib/components/TeamCard.svelte';

  const sections = [
    {
      label: 'Leadership',
      title: 'Leadership Team',
      members: [
        { name: '[Name]', role: 'Team Captain', grade: '12th Grade', bio: '[Short bio placeholder — leadership experience, interests, and goals.]' },
        { name: '[Name]', role: 'Co-Captain',   grade: '11th Grade', bio: '[Short bio placeholder — leadership experience, interests, and goals.]' },
      ]
    },
    {
      label: 'Engineering',
      title: 'Engineering Team',
      members: [
        { name: '[Name]', role: 'Lead Mechanical Engineer', grade: '12th Grade', bio: '[Short bio placeholder.]' },
        { name: '[Name]', role: 'Mechanical Engineer',      grade: '11th Grade', bio: '[Short bio placeholder.]' },
        { name: '[Name]', role: 'CAD Specialist',           grade: '10th Grade', bio: '[Short bio placeholder.]' },
        { name: '[Name]', role: 'Mechanical Engineer',      grade: '9th Grade',  bio: '[Short bio placeholder.]' },
      ]
    },
    {
      label: 'Software',
      title: 'Software Team',
      members: [
        { name: '[Name]', role: 'Lead Programmer',    grade: '12th Grade', bio: '[Short bio placeholder.]' },
        { name: '[Name]', role: 'Autonomous Lead',    grade: '11th Grade', bio: '[Short bio placeholder.]' },
        { name: '[Name]', role: 'Software Engineer',  grade: '10th Grade', bio: '[Short bio placeholder.]' },
      ]
    },
    {
      label: 'Business & Outreach',
      title: 'Business & Outreach Team',
      members: [
        { name: '[Name]', role: 'Business Lead',        grade: '12th Grade', bio: '[Short bio placeholder.]' },
        { name: '[Name]', role: 'Outreach Coordinator', grade: '11th Grade', bio: '[Short bio placeholder.]' },
        { name: '[Name]', role: 'Media & Marketing',    grade: '10th Grade', bio: '[Short bio placeholder.]' },
      ]
    },
  ];
</script>

<svelte:head>
  <title>Meet The Team – Luminary Robotics FTC 35300</title>
  <meta name="description" content="Meet the engineers, programmers, designers, and community leaders of Luminary Robotics FTC Team 35300." />
</svelte:head>

<PageHero
  label="Our People"
  title="Meet The Team"
  subtitle="Luminary Robotics is built by passionate students across engineering, software, business, and outreach disciplines."
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
              grade={member.grade}
              bio={member.bio}
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
