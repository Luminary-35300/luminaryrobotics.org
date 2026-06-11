<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import TeamCard from '$lib/components/TeamCard.svelte';

  const sections = [
    {
      label: 'Software',
      title: 'Programming Team',
      members: [
        { name: 'Ishaan Desai', role: '', grade: '10th', bio: '[Short bio placeholder]', img: '/images/team/ishaan.jpg' },
        { name: 'Antara Save', role: '', grade: '10th', bio: '[Short bio placeholder]', img: '' },
        { name: 'Nathan Li', role: '', grade: '10th', bio: '[Short bio placeholder]', img: '' },
      ]
    },
    {
      label: 'Design & Hardware',
      title: 'Design/Hardware Team',
      members: [
        { name: 'Rithwik Nair', role: '', grade: '11th', bio: '[Short bio placeholder]', img: '/images/team/rithwik.jpg' },
        { name: 'Nishka Gupta', role: '', grade: '11th', bio: '[Short bio placeholder]', img: '' },
        { name: 'Niketh Balakrishnan', role: '', grade: '10th', bio: '[Short bio placeholder]', img: '/images/team/niketh.jpg' },
        { name: 'Bao Blows', role: '', grade: '11th', bio: '[Short bio placeholder]', img: '' },
      ]
    },
    {
      label: 'Business & Outreach',
      title: 'Outreach Team',
      members: [
        { name: 'Aanya Pathak', role: '', grade: '11th', bio: '[Short bio placeholder]', img: '/images/team/aanya.jpg' },
        { name: 'Reett Aulakh', role: '', grade: '11th', bio: '[Short bio placeholder]', img: '/images/team/reett.jpg' },
      ]
    },
    {
      label: 'Leadership & Guidance',
      title: 'Mentors & Professionals',
      members: [
        { name: 'Himanshu Save', role: 'Head Coach', grade: '', bio: 'Senior Research Scientist at UT Austin Center for Space Research', img: '' },
        { name: 'Balakrishnan Sundararaman', role: 'Assistant Coach', grade: '', bio: 'Hardware Design Engineer at Samsung', img: '' },
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
