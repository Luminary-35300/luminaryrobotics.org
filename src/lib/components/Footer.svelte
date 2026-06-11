<script>
  const quickLinks = [
    { label: 'Home',     href: '/' },
    { label: 'About',    href: '/about' },
    { label: 'Team',     href: '/team' },
    { label: 'Robot',    href: '/robot' },
    { label: 'Outreach', href: '/outreach' },
    { label: 'Sponsors', href: '/sponsors' },
    { label: 'Contact',  href: '/contact' },
  ];

  const socials = [
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'YouTube',   href: '#', icon: 'youtube' },
  ];

  const year = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer__inner container">
    <div class="footer__top">
      <!-- Brand -->
      <div class="footer__brand">
        <div class="footer__logo">
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <circle cx="14" cy="14" r="13" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.9"/>
            <line x1="14" y1="1" x2="14" y2="6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="14" y1="22" x2="14" y2="27" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="1" y1="14" x2="6" y2="14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="22" y1="14" x2="27" y2="14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span class="footer__logo-name">Luminary Robotics</span>
        </div>
        <p class="footer__tagline">FTC Team 35300 — Building the future,<br>one season at a time.</p>
        <div class="footer__socials">
          <a href="https://instagram.com/luminaryrobotics" class="footer__social" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://youtube.com/@luminaryrobotics" class="footer__social" aria-label="YouTube">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick links -->
      <div class="footer__nav">
        <p class="footer__nav-title">Pages</p>
        <ul class="footer__nav-list" role="list">
          {#each quickLinks as link}
            <li><a href={link.href} class="footer__nav-link">{link.label}</a></li>
          {/each}
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer__contact">
        <p class="footer__nav-title">Contact</p>
        <ul class="footer__contact-list" role="list">
          <li>
            <a href="mailto:luminaryrobotics@gmail.com" class="footer__nav-link">
              luminaryrobotics@gmail.com
            </a>
          </li>
          <li class="footer__contact-label">FTC Team 35300</li>
        </ul>

        <div class="footer__cta">
          <p class="footer__cta-text">Interested in supporting Luminary?</p>
          <a href="/sponsors" class="btn btn--outline btn--sm">Become a Sponsor</a>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <p class="footer__copy">
        © {year} Luminary Robotics — FTC Team 35300. All rights reserved.
      </p>
      <p class="footer__ftc">
        Part of the <em>FIRST</em> Tech Challenge program.
      </p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--surface);
    border-top: 1px solid var(--border);
    position: relative;
    z-index: 1;
  }

  .footer__inner {
    padding-top: var(--space-10);
    padding-bottom: var(--space-6);
  }

  .footer__top {
    display: grid;
    grid-template-columns: 2fr 1fr 1.5fr;
    gap: var(--space-10);
    padding-bottom: var(--space-8);
    border-bottom: 1px solid var(--border);
  }

  .footer__logo {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    color: var(--text);
    margin-bottom: var(--space-4);
  }

  .footer__logo-name {
    font-family: var(--font-heading);
    font-size: var(--text-base);
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .footer__tagline {
    font-size: var(--text-sm);
    color: var(--text-3);
    line-height: 1.7;
    margin-bottom: var(--space-5);
  }

  .footer__socials {
    display: flex;
    gap: var(--space-3);
  }

  .footer__social {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    color: var(--text-3);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    transition: all var(--transition);
  }

  .footer__social:hover {
    color: var(--text);
    border-color: var(--border-2);
  }

  .footer__nav-title {
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-3);
    margin-bottom: var(--space-4);
  }

  .footer__nav-list,
  .footer__contact-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .footer__nav-link {
    font-size: var(--text-sm);
    color: var(--text-2);
    transition: color var(--transition);
  }

  .footer__nav-link:hover { color: var(--text); }

  .footer__contact-label {
    font-size: var(--text-sm);
    color: var(--text-3);
    margin-top: var(--space-1);
  }

  .footer__cta {
    margin-top: var(--space-6);
  }

  .footer__cta-text {
    font-size: var(--text-sm);
    color: var(--text-3);
    margin-bottom: var(--space-3);
  }

  .footer__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-5);
    gap: var(--space-4);
    flex-wrap: wrap;
  }

  .footer__copy,
  .footer__ftc {
    font-size: var(--text-xs);
    color: var(--text-3);
    line-height: 1;
  }

  .footer__ftc em { font-style: italic; }

  @media (max-width: 900px) {
    .footer__top { grid-template-columns: 1fr 1fr; }
    .footer__brand { grid-column: 1 / -1; }
  }

  @media (max-width: 560px) {
    .footer__top { grid-template-columns: 1fr; gap: var(--space-7); }
    .footer__bottom { flex-direction: column; align-items: flex-start; }
  }
</style>
