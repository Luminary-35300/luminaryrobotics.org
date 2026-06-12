<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import TeamCard from '$lib/components/TeamCard.svelte';

  const students = [
    { name: 'Ishaan Desai', role: 'Programming', group: 'software', img: '/images/team/ishaan.jpg', bio: 'Specialized in Autonomous' },
    { name: 'Antara Save', role: 'Programming', group: 'software', img: '', bio: 'Specialized in utilizing sensors and TeleOp' },
    { name: 'Nathan Li', role: 'Programming', group: 'software', img: '', bio: 'Specialized in Finite State Machines and autonomous' },
    { name: 'Rithwik Nair', role: 'Design/Hardware', group: 'hardware', img: '/images/team/rithwik.jpg', bio: '[Short bio placeholder]' },
    { name: 'Nishka Gupta', role: 'Design/Hardware', group: 'hardware', img: '', bio: '[Short bio placeholder]' },
    { name: 'Niketh Balakrishnan', role: 'Design/Hardware', group: 'hardware', img: '/images/team/niketh.jpg', bio: '[Short bio placeholder]' },
    { name: 'Bao Blows', role: 'Design/Hardware', group: 'hardware', img: '', bio: '[Short bio placeholder]' },
    { name: 'Aanya Pathak', role: 'Outreach/Inspire', group: 'outreach', img: '/images/team/aanya.jpg', bio: '[Short bio placeholder]' },
    { name: 'Reett Aulakh', role: 'Outreach/Inspire', group: 'outreach', img: '/images/team/reett.jpg', bio: '[Short bio placeholder]' },
  ];

  const mentors = [
    { name: 'Himanshu Save', role: 'Head Coach', grade: '', bio: 'Senior Research Scientist at UT Austin Center for Space Research', img: '' },
    { name: 'Balakrishnan Sundararaman', role: 'Assistant Coach', grade: '', bio: 'Hardware Design Engineer at Samsung', img: '' },
  ];

  function getGroupColor(group) {
    switch(group) {
      case 'software': return '#4d8fcc'; /* Accent Blue */
      case 'hardware': return '#6366f1'; /* Indigo */
      case 'outreach': return '#a855f7'; /* Purple */
      default: return 'var(--accent)';
    }
  }
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
  <!-- Desktop Circular Layout -->
  <section class="section team-circle-section reveal">
    <div class="circle-container">
      <div class="center-content">
        <img src="/logo-icon.png" alt="Luminary Logo" class="center-logo" />
        <h2 class="center-title">Luminaries</h2>
        <p class="center-desc">
          Each of our members have gained experience and developed expertise in their area — allowing us to keep learning and inspiring.
        </p>
      </div>

      {#each students as student, i}
        {@const angle = ((360 / students.length) * i + 270) % 360}
        <div 
          class="member-node" 
          style="--angle: {angle}deg; --node-color: {getGroupColor(student.group)};"
          tabindex="0"
          role="button"
          aria-label="{student.name} - {student.role}"
        >
          <div class="member-photo-wrapper">
            {#if student.img}
              <img src={student.img} alt={student.name} class="member-photo" />
            {:else}
              <div class="member-photo placeholder">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="18" r="10" stroke="currentColor" stroke-width="2"/>
                  <path d="M4 44c0-11 9-20 20-20s20 9 20 20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
            {/if}
          </div>

          <!-- Tooltip popout -->
          <div class="member-tooltip" style="
            left: {angle > 90 && angle < 270 ? 'auto' : 'calc(100% + 16px)'};
            right: {angle > 90 && angle < 270 ? 'calc(100% + 16px)' : 'auto'};
            text-align: {angle > 90 && angle < 270 ? 'right' : 'left'};
          ">
            <span class="tooltip-role" style="color: var(--node-color)">{student.role}</span>
            <h3 class="tooltip-name">{student.name}</h3>
            <p class="tooltip-bio">{student.bio}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Mobile Grid Fallback -->
  <section class="section team-mobile-section reveal">
    <div class="team-section__header">
      <span class="section-header__label">Luminaries</span>
      <h2 class="section-header__title">Student Team</h2>
      <p class="section-header__desc">Each of our members have gained experience and developed expertise in their area.</p>
    </div>
    <div class="team-grid">
      {#each students as student}
        <TeamCard
          name={student.name}
          role={student.role}
          bio={student.bio}
          img={student.img}
        />
      {/each}
    </div>
  </section>

  <div class="divider"></div>

  <!-- Mentors Section -->
  <section class="section team-section reveal">
    <div class="team-section__header">
      <span class="section-header__label">Leadership & Guidance</span>
      <h2 class="section-header__title">Mentors & Professionals</h2>
    </div>
    <div class="team-grid team-grid--2">
      {#each mentors as mentor}
        <TeamCard
          name={mentor.name}
          role={mentor.role}
          bio={mentor.bio}
          img={mentor.img}
        />
      {/each}
    </div>
  </section>
</div>

<style>
  /* ── Circular Layout (Desktop) ── */
  .team-circle-section {
    display: none; /* hidden on mobile */
    padding-top: var(--space-10);
    padding-bottom: var(--space-10);
  }

  .circle-container {
    position: relative;
    width: 600px;
    height: 600px;
    margin: 0 auto;
    border-radius: 50%;
    border: 1px solid var(--border);
  }

  .center-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .center-logo {
    width: 48px;
    height: 48px;
    margin-bottom: var(--space-4);
    opacity: 0.8;
  }

  .center-title {
    font-family: var(--font-heading);
    font-size: var(--text-3xl);
    letter-spacing: -0.02em;
    margin-bottom: var(--space-3);
    color: var(--text);
  }

  .center-desc {
    font-size: var(--text-base);
    color: var(--text-2);
    line-height: 1.6;
  }

  .member-node {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 140px;
    height: 140px;
    margin: -70px; /* offset by half dimensions */
    /* Position on the circle */
    transform: rotate(var(--angle)) translate(300px) rotate(calc(-1 * var(--angle)));
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
  }

  .member-node:hover,
  .member-node:focus-within {
    z-index: 50;
  }

  .member-photo-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid var(--node-color);
    background: var(--surface);
    overflow: hidden;
    transition: transform var(--transition) cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .member-node:hover .member-photo-wrapper,
  .member-node:focus-within .member-photo-wrapper {
    transform: scale(1.15);
  }

  .member-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .member-photo.placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--border-2);
    background: var(--surface-2);
    border: none;
  }

  /* Tooltip Popout */
  .member-tooltip {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: max-content;
    max-width: 240px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: var(--space-4);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, visibility 0.2s, transform 0.2s;
    pointer-events: none;
    z-index: 20;
  }

  /* Slide slightly based on side */
  .member-node:hover .member-tooltip,
  .member-node:focus-within .member-tooltip {
    opacity: 1;
    visibility: visible;
  }

  /* Specific border styling */
  .member-tooltip::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--node-color);
    border-radius: var(--radius) var(--radius) 0 0;
  }

  .tooltip-role {
    display: block;
    font-size: var(--text-xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: var(--space-1);
  }

  .tooltip-name {
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--text);
    margin-bottom: var(--space-2);
  }

  .tooltip-bio {
    font-size: var(--text-sm);
    color: var(--text-3);
    line-height: 1.5;
  }

  /* ── General / Mobile Layout ── */
  .team-section {
    padding-top: var(--space-8);
    padding-bottom: var(--space-8);
  }

  .team-section__header {
    margin-bottom: var(--space-7);
  }

  .team-mobile-section {
    display: block;
  }

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

  /* ── Responsive Queries ── */
  @media (min-width: 900px) {
    .team-circle-section {
      display: block;
    }
    .team-mobile-section {
      display: none;
    }
  }

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
