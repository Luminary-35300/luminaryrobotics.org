<script>
  import PageHero from '$lib/components/PageHero.svelte';

  let form = $state({ name: '', email: '', organization: '', message: '' });
  let submitted = $state(false);
  let submitting = $state(false);
  let errors = $state({});

  function validate() {
    const e = {};
    if (!form.name.trim())        e.name = 'Name is required.';
    if (!form.email.trim())       e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.message.trim())     e.message = 'Message is required.';
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    errors = validate();
    if (Object.keys(errors).length) return;

    submitting = true;
    
    const subject = encodeURIComponent(`Website Contact: ${form.name} from ${form.organization || 'No Organization'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.organization || 'N/A'}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:luminaryrobotics@gmail.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      submitting = false;
      submitted = true;
    }, 800);
  }

  const contactInfo = [
    {
      label: 'Email',
      value: 'contact@luminaryrobotics.org',
      href: 'mailto:contact@luminaryrobotics.org',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M3 7l9 6 9-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    },
    {
      label: 'Instagram',
      value: '@luminaryrobotics',
      href: '#',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`,
    },
    {
      label: 'YouTube',
      value: 'Luminary Robotics',
      href: '#',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22.5 6.5s-.2-1.5-.9-2.1c-.9-.9-1.8-.9-2.2-1C17 3.2 12 3.2 12 3.2s-5 0-7.4.2c-.5.1-1.4.1-2.2 1-.6.6-.9 2.1-.9 2.1S1.2 8.2 1.2 10v1.7c0 1.7.3 3.5.3 3.5s.2 1.5.9 2.1c.9.9 2 .8 2.5.9C6.5 18.4 12 18.4 12 18.4s5 0 7.4-.2c.5-.1 1.4-.1 2.2-1 .6-.6.9-2.1.9-2.1s.3-1.8.3-3.5v-1.7c-.1-1.8-.3-3.4-.3-3.4z" stroke="currentColor" stroke-width="1.5"/></svg>`,
    },
  ];
</script>

<svelte:head>
  <title>Contact – Luminary Robotics FTC 35300</title>
  <meta name="description" content="Get in touch with Luminary Robotics FTC Team 35300. For sponsorship inquiries, mentorship, or general questions." />
</svelte:head>

<PageHero
  label="Get In Touch"
  title="Contact Us"
  subtitle="Whether you're a potential sponsor, mentor, student, or community partner — we'd love to hear from you."
/>

<section class="section">
  <div class="container">
    <div class="contact-grid">
      <!-- Form -->
      <div class="contact-form-wrap reveal">
        {#if submitted}
          <div class="form-success" role="alert">
            <div class="form-success__icon" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="currentColor" stroke-width="1.5"/>
                <path d="M9 16l5 5 9-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="form-success__title">Message Sent</h3>
            <p class="form-success__desc">Thank you for reaching out. A member of the Luminary Robotics team will get back to you shortly.</p>
          </div>
        {:else}
          <form class="contact-form" onsubmit={handleSubmit} novalidate id="contact-form">
            <div class="form-row">
              <div class="form-field">
                <label class="form-label" for="contact-name">Name <span aria-hidden="true">*</span></label>
                <input
                  id="contact-name"
                  class="input"
                  class:input--error={errors.name}
                  type="text"
                  placeholder="Your full name"
                  bind:value={form.name}
                  autocomplete="name"
                  aria-required="true"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {#if errors.name}<p class="form-error" id="name-error" role="alert">{errors.name}</p>{/if}
              </div>
              <div class="form-field">
                <label class="form-label" for="contact-email">Email <span aria-hidden="true">*</span></label>
                <input
                  id="contact-email"
                  class="input"
                  class:input--error={errors.email}
                  type="email"
                  placeholder="your@email.com"
                  bind:value={form.email}
                  autocomplete="email"
                  aria-required="true"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {#if errors.email}<p class="form-error" id="email-error" role="alert">{errors.email}</p>{/if}
              </div>
            </div>
            <div class="form-field">
              <label class="form-label" for="contact-org">Organization</label>
              <input
                id="contact-org"
                class="input"
                type="text"
                placeholder="Company, school, or organization (optional)"
                bind:value={form.organization}
                autocomplete="organization"
              />
            </div>
            <div class="form-field">
              <label class="form-label" for="contact-message">Message <span aria-hidden="true">*</span></label>
              <textarea
                id="contact-message"
                class="input"
                class:input--error={errors.message}
                placeholder="Tell us how you'd like to connect, or ask us anything about the team..."
                bind:value={form.message}
                aria-required="true"
                aria-describedby={errors.message ? 'message-error' : undefined}
              ></textarea>
              {#if errors.message}<p class="form-error" id="message-error" role="alert">{errors.message}</p>{/if}
            </div>
            <button type="submit" class="btn btn--primary" disabled={submitting} id="contact-submit">
              {#if submitting}
                <span class="btn-spinner" aria-hidden="true"></span>
                Sending…
              {:else}
                Send Message
              {/if}
            </button>
          </form>
        {/if}
      </div>

      <!-- Info -->
      <div class="contact-info reveal">
        <div class="contact-info__channels">
          <p class="contact-info__title">Contact Information</p>
          <div class="contact-channels">
            {#each contactInfo as ch}
              <a href={ch.href} class="channel-item">
                <div class="channel-icon">{@html ch.icon}</div>
                <div>
                  <div class="channel-label">{ch.label}</div>
                  <div class="channel-value">{ch.value}</div>
                </div>
              </a>
            {/each}
          </div>
        </div>

        <div class="contact-info__cta">
          <h3 class="cta-heading">Interested in Sponsoring?</h3>
          <p class="cta-desc">Luminary Robotics is actively seeking sponsors who share our commitment to STEM education and competitive excellence.</p>
          <a href="/sponsors" class="btn btn--outline btn--sm">View Sponsorship Tiers</a>
        </div>

        <div class="contact-info__cta">
          <h3 class="cta-heading">Are You a Student?</h3>
          <p class="cta-desc">Interested in joining the team or learning more about how we operate? Reach out and we'll be happy to talk.</p>
          <a href="/about" class="btn btn--outline btn--sm">Learn About the Team</a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-grid {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: var(--space-10);
    align-items: flex-start;
  }

  /* Form */
  .contact-form { display: flex; flex-direction: column; gap: var(--space-5); }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-5);
  }

  .form-field { display: flex; flex-direction: column; gap: var(--space-2); }

  .form-label {
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--text-2);
    letter-spacing: 0.02em;
  }

  .form-label span { color: var(--accent-blue); }

  .input--error { border-color: #e05252 !important; }

  .form-error {
    font-size: var(--text-xs);
    color: #e05252;
    margin: 0;
    line-height: 1.4;
  }

  .btn-spinner {
    width: 14px;
    height: 14px;
    border: 1.5px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    flex-shrink: 0;
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  /* Success state */
  .form-success {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
    padding: var(--space-8);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
  }

  .form-success__icon { color: var(--accent-blue); }

  .form-success__title {
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--text);
    letter-spacing: -0.01em;
  }

  .form-success__desc {
    font-size: var(--text-base);
    color: var(--text-2);
    line-height: 1.7;
    margin: 0;
  }

  /* Info panel */
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-7);
  }

  .contact-info__title {
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-3);
    margin-bottom: var(--space-4);
  }

  .contact-channels { display: flex; flex-direction: column; gap: var(--space-3); }

  .channel-item {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    text-decoration: none;
    transition: border-color var(--transition);
  }

  .channel-item:hover { border-color: var(--border-2); }

  .channel-icon {
    color: var(--text-3);
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }

  .channel-label {
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-3);
    margin-bottom: 2px;
  }

  .channel-value {
    font-size: var(--text-sm);
    color: var(--text);
  }

  .contact-info__cta {
    padding: var(--space-6);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .cta-heading {
    font-size: var(--text-base);
    font-weight: 600;
    color: var(--text);
    letter-spacing: -0.01em;
  }

  .cta-desc {
    font-size: var(--text-sm);
    color: var(--text-3);
    line-height: 1.65;
    margin: 0;
  }

  @media (max-width: 900px) {
    .contact-grid { grid-template-columns: 1fr; }
    .form-row { grid-template-columns: 1fr; }
  }
</style>
