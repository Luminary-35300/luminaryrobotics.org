<script>
  let { items = [] } = $props();
  // items: { year, title, desc }
</script>

<div class="timeline">
  {#each items as item, i}
    <div class="timeline__item reveal">
      <div class="timeline__marker" aria-hidden="true">
        <div class="timeline__dot"></div>
        {#if i < items.length - 1}
          <div class="timeline__line"></div>
        {/if}
      </div>
      <div class="timeline__content">
        <span class="timeline__year">{item.year}</span>
        <h3 class="timeline__title">{item.title}</h3>
        <p class="timeline__desc">{item.desc}</p>
      </div>
    </div>
  {/each}
</div>

<style>
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .timeline__item {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: var(--space-6);
    position: relative;
  }

  .timeline__marker {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6px;
    position: relative;
  }

  .timeline__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent-blue);
    border: 2px solid var(--bg);
    outline: 1px solid var(--accent-blue);
    flex-shrink: 0;
    position: relative;
    z-index: 1;
  }

  .timeline__line {
    flex: 1;
    width: 1px;
    background: var(--border);
    margin-top: var(--space-2);
    min-height: var(--space-7);
  }

  .timeline__content {
    padding-bottom: var(--space-8);
  }

  .timeline__year {
    display: block;
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-blue);
    margin-bottom: var(--space-2);
  }

  .timeline__title {
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--text);
    margin-bottom: var(--space-3);
    letter-spacing: -0.01em;
  }

  .timeline__desc {
    font-size: var(--text-base);
    color: var(--text-2);
    line-height: 1.7;
  }
</style>
