 logo = document.querySelector('.logo');

if (logo) {
  logo.addEventListener('click', () => {
    logo.classList.toggle('is-paused');
  });
}
document.querySelectorAll(
  'h1, h2, h3, p, label, small, .sum-row span, .sum-row b, .trust b, .trust span'
).forEach((element) => {
  const nodes = [...element.childNodes];

  nodes.forEach((node) => {
    if (node.nodeType !== Node.TEXT_NODE) return;

    const parts = node.textContent.split(/(\s+)/);
    const fragment = document.createDocumentFragment();

    parts.forEach((part) => {
      if (part.trim()) {
        const word = document.createElement('span');
        word.className = 'word';
        word.textContent = part;
        fragment.appendChild(word);
      } else {
        fragment.appendChild(document.createTextNode(part));
      }
    });

    node.replaceWith(fragment);
  });
});