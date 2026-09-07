<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import TeamCard from '$lib/components/TeamCard.svelte';

  const students = [
    { name: 'Ishaan Desai',        role: 'Programming',       group: 'software', img: '/images/team/ishaan_new.png', bio: 'Autonomous and localization with Kalman filters.' },
    { name: 'Antara Save',         role: 'Programming',       group: 'software', img: '/images/team/antara.jpg',     bio: 'Sensor integration and TeleOp control.' },
    { name: 'Nathan Li',           role: 'Programming',       group: 'software', img: '/images/team/nathan.png',     bio: 'Finite state machines and autonomous routines.' },
    { name: 'Bao Nguyen',          role: 'Design/Hardware',   group: 'hardware', img: '/images/team/bao.png',        bio: '' },
    { name: 'Nishka Gupta',        role: 'Design/Hardware',   group: 'hardware', img: '/images/team/nishka.jpeg',    bio: '' },
    { name: 'Niketh Balakrishnan', role: 'Design/Hardware',   group: 'hardware', img: '/images/team/niketh.jpg',     bio: '' },
    { name: 'Rithwik Nair',        role: 'Design/Hardware',   group: 'hardware', img: '/images/team/rithwik.jpg',    bio: '' },
    { name: 'Reett Aulakh',        role: 'Outreach/Inspire',  group: 'outreach', img: '/images/team/reett.jpg',      bio: '' },
    { name: 'Aanya Pathak',        role: 'Outreach/Inspire',  group: 'outreach', img: '/images/team/aanya.jpg',      bio: '' },
    { name: 'Anika Khangarot',     role: 'Outreach/Inspire',  group: 'outreach', img: '/images/team/anika.jpeg',     bio: '' },
  ];

  const mentors = [
    { name: 'Himanshu Save',             role: 'Head Coach',      bio: 'Senior Research Scientist at the UT Austin Center for Space Research.' },
    { name: 'Balakrishnan Sundararaman', role: 'Assistant Coach', bio: 'Hardware Design Engineer at Samsung.' },
  ];

  function getGroupColor(group) {
    switch (group) {
      case 'software': return '#4d8fcc';
      case 'hardware': return '#6366f1';
      case 'outreach': return '#a855f7';
      default: return 'var(--accent)';
    }
  }
</script>

<svelte:head>
  <title>About &amp; Team | Luminary Robotics FTC 36633</title>
  <meta name="description" content="Luminary Robotics, FTC Team 36633: how the team started, what we are working toward, and the students and mentors behind it." />
</svelte:head>

<PageHero
  label="About Us"
  title="Who We Are"
  subtitle="Luminary Robotics is FTC Team 36633, a student-led rookie team competing in Central Texas."
/>


<!-- ── Team: circular layout (desktop) ─────────────────────── -->
<section class="section team-circle-section" id="team">
  <div class="circle-container">
    <div class="center-content">
      <img src="/logo-icon.png" alt="Luminary Logo" class="center-logo" />
      <h2 class="center-title">Luminaries</h2>
      <p class="center-desc">
        Ten of us, across programming, hardware, and outreach.
      </p>
    </div>

    {#each students as student, i}
      {@const angle = ((360 / students.length) * i + 270) % 360}
      <div
        class="member-node"
        style="--angle: {angle}deg; --node-color: {getGroupColor(student.group)};"
        tabindex="0"
        role="button"
        aria-label="{student.name}, {student.role}"
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

<div class="container">
  <!-- ── Team: grid (mobile) ───────────────────────────────── -->
  <section class="section team-mobile-section">
    <div class="roster__header">
      <span class="section-header__label">Our People</span>
      <h2 class="section-header__title">The Team</h2>
      <p class="section-header__desc">
        Ten of us, across programming, hardware, and outreach.
      </p>
    </div>
    <div class="roster-grid">
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

  <section class="section" id="mentors">
    <div class="roster__header">
      <span class="section-header__label">Guidance</span>
      <h2 class="section-header__title">Mentors</h2>
    </div>
    <div class="roster-grid roster-grid--2">
      {#each mentors as mentor}
        <TeamCard name={mentor.name} role={mentor.role} bio={mentor.bio} />
      {/each}
    </div>
  </section>

  <div class="divider"></div>

  <section class="section" id="story">
    <div class="story">
      <div class="story__text">
        <span class="section-header__label">Our Start</span>
        <h2 class="story__heading">How Luminary Started</h2>
        <p>
          This is our first season. We started Luminary after competing with
          <strong>Hunga Munga</strong>, <strong>Slingshot</strong>,
          <strong>ChaiGPT</strong>, and <strong>Shooting Stars</strong>.
        </p>
        <p>
          We spent years on opposite sides of the field and picked up a lot of respect for
          how each of those teams worked. What we learned there shaped Luminary, and we're
          glad to build on it.
        </p>
      </div>
      <dl class="facts">
        <div class="fact">
          <dt>Team Number</dt>
          <dd>FTC 36633</dd>
        </div>
        <div class="fact">
          <dt>Season</dt>
          <dd>Rookie year</dd>
        </div>
        <div class="fact">
          <dt>Roster</dt>
          <dd>10 students, 2 mentors</dd>
        </div>
        <div class="fact">
          <dt>Program</dt>
          <dd><em>FIRST</em> Tech Challenge</dd>
        </div>
      </dl>
    </div>
  </section>

  <div class="divider"></div>

  <section class="section">
    <div class="goals">
      <span class="section-header__label">What We Do</span>
      <h2 class="section-header__title">Our Goals</h2>
      <p>
        We want a robot that still works in the last match of the day, not just the first.
        That means doing the engineering properly and writing it down as we go.
      </p>
      <p>
        We also want to be useful to newer teams. We all learned FTC from somebody else,
        so we answer questions when people ask.
      </p>
    </div>
  </section>
</div>

<style>
  /* ── Story ── */
  .story {
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: var(--space-10);
    align-items: start;
  }

  .story__text { display: flex; flex-direction: column; gap: var(--space-4); }

  .story__heading {
    font-size: var(--text-2xl);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text);
  }

  .story__text p {
    font-size: var(--text-base);
    color: var(--text-2);
    line-height: 1.75;
  }

  .facts {
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface);
  }

  .fact {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--space-4);
    padding: var(--space-4) var(--space-5);
    border-bottom: 1px solid var(--border);
  }

  .fact:last-child { border-bottom: none; }

  .fact dt {
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-3);
  }

  .fact dd {
    font-size: var(--text-sm);
    color: var(--text);
    text-align: right;
  }

  .fact dd em { font-style: italic; }

  /* ── Goals ── */
  .goals { max-width: 720px; }

  .goals p {
    font-size: var(--text-base);
    color: var(--text-2);
    line-height: 1.75;
    margin-bottom: var(--space-4);
  }

  .goals p:last-child { margin-bottom: 0; }

  /* ── Team: circular layout ── */
  .team-circle-section {
    display: none; /* desktop only, see media query */
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
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-bottom: var(--space-4);
    opacity: 0.9;
    filter: invert(1) brightness(1.1);
  }

  :global([data-theme="light"]) .center-logo { filter: none; }

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
    transform: rotate(var(--angle)) translate(300px) rotate(calc(-1 * var(--angle)));
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
  }

  .member-node:hover,
  .member-node:focus-within { z-index: 50; }

  .member-photo-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid var(--node-color);
    background: var(--surface);
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
    pointer-events: none;
    z-index: 20;
  }

  .member-node:hover .member-tooltip,
  .member-node:focus-within .member-tooltip {
    opacity: 1;
    visibility: visible;
  }

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

  /* ── Roster grids ── */
  .roster__header { margin-bottom: var(--space-7); }

  .team-mobile-section { display: block; }

  .roster-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-5);
  }

  .roster-grid--2 {
    grid-template-columns: repeat(2, 1fr);
    max-width: 680px;
  }

  .divider { height: 1px; background: var(--border); }

  @media (min-width: 900px) {
    .team-circle-section { display: block; }
    .team-mobile-section { display: none; }
  }

  @media (max-width: 900px) {
    .story { grid-template-columns: 1fr; gap: var(--space-7); }
    .roster-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 560px) {
    .roster-grid,
    .roster-grid--2 { grid-template-columns: 1fr; }
  }
</style>
