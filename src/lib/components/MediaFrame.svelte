<script>
  // A branded image frame. Shows the image when `src` resolves; otherwise
  // falls back to a restrained, intentional panel (ghosted mark + caption)
  // instead of a dashed "[placeholder]" box.
  let {
    src = '',
    alt = '',
    caption = '',
    ratio = '16 / 10',
    class: className = '',
  } = $props();

  let failed = $state(false);
</script>

<figure class="media {className}" style="aspect-ratio: {ratio};">
  {#if src && !failed}
    <img {src} {alt} loading="lazy" onerror={() => (failed = true)} />
  {:else}
    <div class="media__ph" role="img" aria-label={alt || caption || 'Image coming soon'}>
      <img src="/logo-icon.png" alt="" aria-hidden="true" class="media__mark" />
      {#if caption}<figcaption class="media__cap">{caption}</figcaption>{/if}
    </div>
  {/if}
</figure>

<style>
  .media {
    position: relative;
    width: 100%;
    margin: 0;
    overflow: hidden;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    background: var(--surface-2);
  }

  .media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .media__ph {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-3);
    /* Soft branded wash: reads as a deliberate surface, not a stub */
    background:
      radial-gradient(120% 80% at 50% 0%, var(--surface-3) 0%, transparent 60%),
      linear-gradient(160deg, var(--surface) 0%, var(--surface-2) 100%);
  }

  .media__mark {
    width: 44px;
    height: 44px;
    object-fit: contain;
    opacity: 0.18;
    filter: invert(1) brightness(1.1);
  }

  :global([data-theme='light']) .media__mark {
    filter: none;
    opacity: 0.14;
  }

  .media__cap {
    font-family: var(--font-body);
    font-size: var(--text-xs);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-3);
  }
</style>
