<script>
  let { name = '', role = '', grade = '', bio = '', img = '' } = $props();
</script>

<article class="team-card" aria-label="{name}, {role}">
  <div class="team-card__photo {img ? '' : 'placeholder'}" aria-hidden="true">
    {#if img}
      <img src={img} alt={name} loading="lazy" />
    {:else}
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="18" r="10" stroke="currentColor" stroke-width="1.5"/>
        <path d="M4 44c0-11 9-20 20-20s20 9 20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    {/if}
  </div>
  <div class="team-card__body">
    <div class="team-card__meta">
      {#if grade}
        <span class="label">{grade}</span>
      {/if}
    </div>
    <h3 class="team-card__name">{name}</h3>
    <p class="team-card__role">{role}</p>
    {#if bio}
      <p class="team-card__bio">{bio}</p>
    {/if}
  </div>
</article>

<style>
  .team-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    transition: border-color var(--transition);
  }

  .team-card:hover { border-color: var(--border-2); }

  .team-card__photo {
    aspect-ratio: 4/3;
    background: var(--surface-2);
    border-bottom: 1px solid var(--border);
    color: var(--border-2);
    position: relative;
  }
  
  .team-card__photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  .team-card__photo.placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .team-card__body {
    padding: var(--space-5);
  }

  .team-card__meta {
    margin-bottom: var(--space-3);
  }

  .team-card__name {
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--text);
    margin-bottom: var(--space-1);
    letter-spacing: -0.01em;
  }

  .team-card__role {
    font-size: var(--text-sm);
    color: var(--accent-blue);
    font-weight: 500;
    letter-spacing: 0.02em;
    margin-bottom: var(--space-3);
  }

  .team-card__bio {
    font-size: var(--text-sm);
    color: var(--text-3);
    line-height: 1.65;
  }
</style>
