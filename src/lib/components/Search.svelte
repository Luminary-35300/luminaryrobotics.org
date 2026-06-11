<script>
  import { onMount } from 'svelte';
  import { searchOpen } from '$lib/stores/search.js';
  import { goto } from '$app/navigation';

  let query = $state('');
  let inputEl = $state(null);
  let selectedIdx = $state(0);

  const pages = [
    { label: 'Home',           href: '/',         desc: 'Main landing page' },
    { label: 'About',          href: '/about',     desc: 'Team history, mission, values, and timeline' },
    { label: 'Meet The Team',  href: '/team',      desc: 'Roster, roles, and team member profiles' },
    { label: 'Robot',          href: '/robot',     desc: 'Current season robot, specs, and systems' },
    { label: 'Outreach',       href: '/outreach',  desc: 'Community programs, events, and impact' },
    { label: 'Sponsors',       href: '/sponsors',  desc: 'Sponsorship tiers and partnership info' },
    { label: 'Contact',        href: '/contact',   desc: 'Get in touch with the team' },
  ];

  let filtered = $derived(
    query.trim()
      ? pages.filter(p =>
          p.label.toLowerCase().includes(query.toLowerCase()) ||
          p.desc.toLowerCase().includes(query.toLowerCase())
        )
      : pages
  );

  onMount(() => {
    if (inputEl) inputEl.focus();
  });

  function navigate(href) {
    searchOpen.set(false);
    query = '';
    goto(href);
  }

  function handleKey(e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); selectedIdx = Math.min(selectedIdx + 1, filtered.length - 1); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); selectedIdx = Math.max(selectedIdx - 1, 0); }
    if (e.key === 'Enter' && filtered[selectedIdx]) navigate(filtered[selectedIdx].href);
  }

  function close() {
    searchOpen.set(false);
    query = '';
  }
</script>

{#if $searchOpen}
  <div class="search-backdrop" onclick={close} onkeydown={() => {}} role="button" tabindex="-1" aria-label="Close search"></div>

  <div class="search-panel" role="dialog" aria-label="Site search" aria-modal="true">
    <div class="search-input-wrap">
      <svg class="search-icon" width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" stroke-width="1.5"/>
        <path d="M10.5 10.5L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <input
        bind:this={inputEl}
        bind:value={query}
        onkeydown={handleKey}
        type="search"
        placeholder="Search pages..."
        class="search-input"
        id="search-input"
        autocomplete="off"
        spellcheck="false"
      />
      <button class="search-esc" onclick={close} aria-label="Close">ESC</button>
    </div>

    <div class="search-divider"></div>

    <ul class="search-results" role="listbox" aria-label="Search results">
      {#each filtered as result, i}
        <li
          class="search-result"
          class:search-result--selected={i === selectedIdx}
          role="option"
          aria-selected={i === selectedIdx}
          onclick={() => navigate(result.href)}
          onkeydown={(e) => e.key === 'Enter' && navigate(result.href)}
          tabindex="0"
        >
          <div class="search-result__icon" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div>
            <div class="search-result__label">{result.label}</div>
            <div class="search-result__desc">{result.desc}</div>
          </div>
        </li>
      {:else}
        <li class="search-empty">No results found for "<strong>{query}</strong>"</li>
      {/each}
    </ul>

    <div class="search-footer">
      <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
      <span><kbd>↵</kbd> Open</span>
      <span><kbd>ESC</kbd> Close</span>
    </div>
  </div>
{/if}

<style>
  .search-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    z-index: calc(var(--z-search) - 1);
    animation: fadeIn 0.15s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .search-panel {
    position: fixed;
    top: 15vh;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 800px;
    background: var(--surface);
    border: 1px solid var(--border-2);
    border-radius: var(--radius-md);
    z-index: var(--z-search);
    box-shadow: 0 24px 64px rgba(0,0,0,0.4);
    animation: panelIn 0.18s ease;
    overflow: hidden;
  }

  @keyframes panelIn {
    from { opacity: 0; transform: translateX(-50%) translateY(-16px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  .search-input-wrap {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-4) var(--space-5);
  }

  .search-icon { color: var(--text-3); flex-shrink: 0; }

  .search-input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    font-family: var(--font-body);
    font-size: var(--text-base);
    color: var(--text);
    appearance: none;
  }

  .search-input::placeholder { color: var(--text-3); }

  .search-esc {
    font-size: var(--text-xs);
    font-family: var(--font-body);
    color: var(--text-3);
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: 2px;
    padding: 2px 8px;
    cursor: pointer;
    letter-spacing: 0.06em;
  }

  .search-divider { height: 1px; background: var(--border); }

  .search-results {
    list-style: none;
    max-height: 320px;
    overflow-y: auto;
    padding: var(--space-2);
  }

  .search-result {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-4);
    border-radius: var(--radius);
    cursor: pointer;
    transition: background var(--transition);
  }

  .search-result:hover,
  .search-result--selected { background: var(--surface-2); }

  .search-result__icon {
    color: var(--text-3);
    margin-top: 3px;
    flex-shrink: 0;
  }

  .search-result--selected .search-result__icon { color: var(--accent-blue); }

  .search-result__label {
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--text);
  }

  .search-result__desc {
    font-size: var(--text-xs);
    color: var(--text-3);
    margin-top: 2px;
  }

  .search-empty {
    padding: var(--space-5) var(--space-5);
    font-size: var(--text-sm);
    color: var(--text-3);
    text-align: center;
  }

  .search-empty strong { color: var(--text-2); }

  .search-footer {
    display: flex;
    gap: var(--space-5);
    padding: var(--space-3) var(--space-5);
    border-top: 1px solid var(--border);
    font-size: var(--text-xs);
    color: var(--text-3);
  }

  kbd {
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: 2px;
    padding: 1px 5px;
    font-family: monospace;
    font-size: 11px;
    margin-right: 3px;
  }
</style>
