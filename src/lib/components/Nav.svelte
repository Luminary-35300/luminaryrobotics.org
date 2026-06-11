<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme.js';
  import { searchOpen } from '$lib/stores/search.js';

  let scrolled = $state(false);
  let mobileOpen = $state(false);
  let currentTheme = $state('light');

  const navLinks = [
    { href: '/',         label: 'Home' },
    { href: '/about',    label: 'About' },
    { href: '/team',     label: 'Team' },
    { href: '/robot',    label: 'Robot' },
    { href: '/outreach', label: 'Outreach' },
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/contact',  label: 'Contact' },
  ];

  onMount(() => {
    theme.init();
    const unsubscribe = theme.subscribe(t => { currentTheme = t; });

    const handleScroll = () => { scrolled = window.scrollY > 20; };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchOpen.update(v => !v);
      }
      if (e.key === 'Escape') {
        searchOpen.set(false);
        mobileOpen = false;
      }
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      unsubscribe();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKey);
    };
  });

  function isActive(href) {
    if (href === '/') return $page.url.pathname === '/';
    return $page.url.pathname.startsWith(href);
  }
</script>

<nav class="nav" class:nav--scrolled={scrolled}>
  <div class="nav__inner">
    <!-- Logo -->
    <a href="/" class="nav__logo" aria-label="Luminary Robotics Home">
      <div class="nav__logo-mark">
        <img src="/logo-icon.png" alt="Luminary Robotics mark" class="nav__logo-img" />
      </div>
      <div class="nav__logo-text">
        <span class="nav__logo-name">LUMINARY</span>
        <span class="nav__logo-num">FTC 35300</span>
      </div>
    </a>

    <!-- Desktop links -->
    <ul class="nav__links" role="list">
      {#each navLinks as link}
        <li>
          <a
            href={link.href}
            class="nav__link"
            class:nav__link--active={isActive(link.href)}
            aria-current={isActive(link.href) ? 'page' : undefined}
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>

    <!-- Actions -->
    <div class="nav__actions">
      <button
        class="nav__search-btn"
        onclick={() => searchOpen.set(true)}
        aria-label="Open search (Cmd+K)"
        id="nav-search-btn"
      >
        <div class="nav__search-left">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" stroke-width="1.5"/>
            <path d="M10.5 10.5L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span>Search</span>
        </div>
        <span class="nav__search-hint">⌘K</span>
      </button>

      <button
        class="nav__theme-btn"
        onclick={() => theme.toggle()}
        aria-label={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        id="nav-theme-toggle"
      >
        {#if currentTheme === 'dark'}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/>
            <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        {:else}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        {/if}
      </button>

      <button
        class="nav__hamburger"
        onclick={() => mobileOpen = !mobileOpen}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
        id="nav-hamburger"
      >
        <span class="nav__ham-line" class:nav__ham-line--open={mobileOpen}></span>
        <span class="nav__ham-line" class:nav__ham-line--open={mobileOpen}></span>
        <span class="nav__ham-line" class:nav__ham-line--open={mobileOpen}></span>
      </button>
    </div>
  </div>

  {#if mobileOpen}
    <div class="nav__mobile">
      <ul class="nav__mobile-links" role="list">
        {#each navLinks as link}
          <li>
            <a
              href={link.href}
              class="nav__mobile-link"
              class:nav__mobile-link--active={isActive(link.href)}
              onclick={() => mobileOpen = false}
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</nav>

<style>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--z-nav);
    height: var(--nav-h);
    display: flex;
    align-items: center;
    transition: background var(--transition-slow), border-color var(--transition-slow), backdrop-filter var(--transition-slow);
    border-bottom: 1px solid transparent;
    --nav-btn-h: 36px;
  }

  .nav--scrolled {
    background: rgba(8, 8, 13, 0.88);
    border-bottom-color: var(--border);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  :global([data-theme="light"]) .nav--scrolled {
    background: rgba(248, 249, 251, 0.88);
  }

  .nav__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: var(--max-w);
    margin: 0 auto;
    padding: 0 var(--space-6);
    gap: var(--space-6);
  }

  .nav__logo {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    text-decoration: none;
    flex-shrink: 0;
  }

  .nav__logo-mark {
    display: flex;
    align-items: center;
    transition: opacity var(--transition);
  }

  .nav__logo-img {
    /* Tall: match the full stacked text height (~38px with name+num+gap) */
    height: 42px;
    width: 42px;
    object-fit: contain;
    /* Invert for dark theme */
    filter: invert(1) brightness(1.15);
  }

  :global([data-theme="light"]) .nav__logo-img {
    filter: none;
  }

  .nav__logo:hover .nav__logo-mark { opacity: 1; }

  .nav__logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1;
  }

  .nav__logo-name {
    font-family: var(--font-heading);
    font-size: var(--text-base);
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--text);
  }

  .nav__logo-num {
    font-size: var(--text-xs);
    font-weight: 400;
    color: var(--text-3);
    letter-spacing: 0.06em;
    margin-top: 2px;
  }

  .nav__links {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    list-style: none;
  }

  .nav__link {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-2);
    padding: 6px 14px;
    border-radius: var(--radius);
    text-decoration: none;
    letter-spacing: 0.01em;
    transition: color var(--transition), background var(--transition);
  }

  .nav__link:hover { color: var(--text); background: var(--surface-2); }
  .nav__link--active { color: var(--text); }

  .nav__actions {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    flex-shrink: 0;
  }

  /* Fixed height for search bar so theme btn can match */

  .nav__search-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px 0 16px;
    height: var(--nav-btn-h);
    min-width: 160px;
    font-size: var(--text-sm);
    font-family: var(--font-body);
    color: var(--text-3);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    cursor: pointer;
    transition: all var(--transition);
    white-space: nowrap;
  }

  .nav__search-btn:hover {
    color: var(--text-2);
    border-color: var(--border-2);
  }

  .nav__search-left {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  .nav__search-hint {
    font-size: var(--text-xs);
    color: var(--text-3);
    letter-spacing: 0;
  }

  .nav__theme-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--nav-btn-h);
    height: var(--nav-btn-h);
    background: transparent;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    color: var(--text-2);
    cursor: pointer;
    transition: all var(--transition);
    flex-shrink: 0;
  }

  .nav__theme-btn:hover {
    color: var(--text);
    border-color: var(--border-2);
    background: var(--surface-2);
  }

  .nav__hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    width: 36px;
    height: 36px;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    cursor: pointer;
    padding: 0;
  }

  .nav__ham-line {
    display: block;
    width: 16px;
    height: 1.5px;
    background: var(--text-2);
    border-radius: 1px;
    transition: all var(--transition);
  }

  .nav__mobile {
    position: absolute;
    top: var(--nav-h);
    left: 0;
    right: 0;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    padding: var(--space-4) var(--space-6);
    animation: slideDown 0.18s ease;
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .nav__mobile-links { list-style: none; display: flex; flex-direction: column; gap: var(--space-1); }

  .nav__mobile-link {
    display: block;
    font-size: var(--text-base);
    font-family: var(--font-body);
    color: var(--text-2);
    padding: var(--space-3) var(--space-4);
    border-radius: var(--radius);
    transition: all var(--transition);
  }

  .nav__mobile-link:hover,
  .nav__mobile-link--active { color: var(--text); background: var(--surface-2); }

  @media (max-width: 900px) {
    .nav__links { display: none; }
    .nav__search-hint { display: none; }
    .nav__hamburger { display: flex; }
  }

  @media (max-width: 480px) {
    .nav__search-btn { display: none; }
  }
</style>
