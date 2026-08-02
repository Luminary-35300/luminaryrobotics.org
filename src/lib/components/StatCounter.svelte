<script>
  let { value = 0, suffix = '', label = '', desc = '' } = $props();
</script>

<div class="stat-card">
  <div class="stat-card__value">
    {value}{suffix}
  </div>
  <div class="stat-card__label">{label}</div>
  {#if desc}
    <div class="stat-card__desc">{desc}</div>
  {/if}
</div>

<style>
  .stat-card {
    padding: var(--space-7) var(--space-6);
    border-right: 1px solid var(--border);
    text-align: center;
  }

  .stat-card:last-child { border-right: none; }

  .stat-card__value {
    font-family: var(--font-heading);
    font-size: var(--text-4xl);
    font-weight: 700;
    letter-spacing: -0.04em;
    color: var(--text);
    line-height: 1;
    margin-bottom: var(--space-2);
  }

  .stat-card__label {
    font-size: var(--text-sm);
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-3);
    margin-bottom: var(--space-2);
  }

  .stat-card__desc {
    font-size: var(--text-xs);
    color: var(--text-3);
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .stat-card {
      border-right: none;
      border-bottom: 1px solid var(--border);
      padding: var(--space-6);
    }
    .stat-card:last-child { border-bottom: none; }
  }
</style>
