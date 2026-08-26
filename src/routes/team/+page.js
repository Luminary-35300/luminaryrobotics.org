import { redirect } from '@sveltejs/kit';

// The roster moved onto the About page; keep the old /team URL working.
export function load() {
  redirect(308, '/about');
}
