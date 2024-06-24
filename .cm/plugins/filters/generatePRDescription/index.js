function generatePRDescription(branch) {
  if (process.env[__filename]) {
    return process.env[__filename];
  }

  const commitTypes = {
    feat: [],
    fix: [],
    chore: [],
    docs: [],
    style: [],
    refactor: [],
    perf: [],
    test: [],
    build: [],
    ci: [],
    other: []
  };

  branch.commits.messages.filter(message => !message.includes('Merge branch')).forEach(message => {
    const match = message.match(/^(feat|fix|chore|docs|style|refactor|perf|test|build|ci):/);
    if (match) {
      commitTypes[match[1]].push(message);
    } else {
      commitTypes.other.push(message);
    }
  });

  const formatCommitSection = (type, commits) =>
    commits.length ? `- **${type}:**\n${commits.map(msg => `  - ${msg}`).join('\n')}\n` : '';
  
  const addTests = branch.commits.messages.includes('test:') ? 'X' : ' ';

  const result = `
## Base Branch
- **Base:** ${branch.base}

## Description
${Object.entries(commitTypes)
      .map(([type, commits]) => formatCommitSection(type, commits))
      .join('')}

## Checklist
 - [ ] Flow Tested on dev
 - [${addTests}] Add tests  
  `;

  process.env[__filename] = result;
  return result;

}

module.exports = generatePRDescription;
