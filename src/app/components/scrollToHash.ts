// Scrolling to a section right after it mounts (or right after a route change)
// can race with layout still settling — e.g. a Framer Motion entrance
// animation still transforming the target, or the browser not yet having
// painted the new page. Waiting a couple of animation frames first gives
// layout a chance to settle so scrollIntoView targets the right position.
export function scrollToHash(hash: string) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}
