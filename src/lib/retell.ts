/**
 * Helper to programmatically open the Retell AI Jay Chat Widget.
 */
export function openRetellChat(): void {
  const tryOpen = (): boolean => {
    // 1. Scan children of document.body for open shadow roots containing retell elements
    for (const el of Array.from(document.body.children)) {
      if (el.shadowRoot) {
        const shadow = el.shadowRoot;
        const chat = shadow.getElementById('retell-chat') as HTMLElement | null;
        const fab = (shadow.getElementById('retell-fab') ||
          shadow.querySelector('.retell-fab')) as HTMLElement | null;

        if (chat && (chat.style.display === 'flex' || window.getComputedStyle(chat).display === 'flex')) {
          // Already open
          return true;
        }

        if (fab) {
          fab.click();
          return true;
        }
      }
    }

    // 2. Scan all elements in document for shadow roots as fallback
    const all = document.querySelectorAll('*');
    for (let i = 0; i < all.length; i++) {
      const shadow = all[i].shadowRoot;
      if (shadow) {
        const chat = shadow.getElementById('retell-chat') as HTMLElement | null;
        const fab = (shadow.getElementById('retell-fab') ||
          shadow.querySelector('.retell-fab')) as HTMLElement | null;

        if (chat && (chat.style.display === 'flex' || window.getComputedStyle(chat).display === 'flex')) {
          return true;
        }

        if (fab) {
          fab.click();
          return true;
        }
      }
    }

    // 3. Direct document fallback
    const directFab = document.getElementById('retell-fab') || document.querySelector('.retell-fab');
    if (directFab instanceof HTMLElement) {
      directFab.click();
      return true;
    }

    return false;
  };

  if (!tryOpen()) {
    let attempts = 0;
    const interval = window.setInterval(() => {
      attempts++;
      if (tryOpen() || attempts >= 25) {
        window.clearInterval(interval);
      }
    }, 100);
  }
}

// Global listener for open-chat-widget custom events
if (typeof window !== 'undefined') {
  window.addEventListener('open-chat-widget', () => {
    openRetellChat();
  });
}
