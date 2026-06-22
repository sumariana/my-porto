const skills = [
  'Flutter', 'React Native', 'Kotlin', 'Swift',
  'TypeScript', 'JavaScript', 'Firebase', 'BLE', 'WebSocket', 'Git',
];

export function renderSkills() {
  return `
    <h2 class="section-title">Skills</h2>
    <div class="skills-grid">
      ${skills.map(s => `<span class="skill-badge">${s}</span>`).join('')}
    </div>
  `;
}
