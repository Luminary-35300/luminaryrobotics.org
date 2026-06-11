<script>
  let { label = '', title = '', subtitle = '' } = $props();
</script>

<section class="page-hero">
  <div class="page-hero__inner container">
    {#if label}
      <span class="page-hero__label">{label}</span>
    {/if}
    <h1 class="page-hero__title">{title}</h1>
    {#if subtitle}
      <p class="page-hero__subtitle">{subtitle}</p>
    {/if}
  </div>
  <div class="page-hero__line" aria-hidden="true"></div>
</section>

<style>
  .page-hero {
    padding-top: calc(var(--nav-h) + var(--space-10));
    padding-bottom: var(--space-8);
    position: relative;
  }

  .page-hero__inner {
    position: relative;
    z-index: 1;
  }

  .page-hero__label {
    display: block;
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent-blue);
    margin-bottom: var(--space-3);
  }

  .page-hero__title {
    font-size: clamp(2rem, 5vw, var(--text-4xl));
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--text);
    margin-bottom: var(--space-4);
    max-width: 700px;
  }

  .page-hero__subtitle {
    font-size: var(--text-md);
    color: var(--text-2);
    max-width: 560px;
    line-height: 1.7;
  }

  .page-hero__line {
    margin-top: var(--space-8);
    height: 1px;
    background: var(--border);
  }
</style>
