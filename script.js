const tabs = [...document.querySelectorAll('.tab')];
const panels = [...document.querySelectorAll('.tab-panel')];

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach((t) => t.classList.toggle('active', t === tab));
    panels.forEach((panel) => panel.classList.toggle('active', panel.id === target));

    history.replaceState(null, '', `#${target}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

const initial = window.location.hash.slice(1);
if (initial && document.getElementById(initial) && document.querySelector(`.tab[data-tab="${initial}"]`)) {
  const tab = document.querySelector(`.tab[data-tab="${initial}"]`);
  tabs.forEach((t) => t.classList.toggle('active', t === tab));
  panels.forEach((panel) => panel.classList.toggle('active', panel.id === initial));
}
