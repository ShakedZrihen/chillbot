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

  branch.commits.messages.forEach(message => {
    const match = message.match(/^(feat|fix|chore|docs|style|refactor|perf|test|build|ci):/);
    if (match) {
      commitTypes[match[1]].push(message);
    } else {
      commitTypes.other.push(message);
    }
  });

  const formatCommitSection = (type, commits) => 
    commits.length ? `- **${type}:**\n${commits.map(msg => `  - ${msg}`).join('\n')}\n` : '';

  const result = `
## Pull Request for Branch: ${branch.name}

### Base Branch
- **Base:** ${branch.base}

### Commits
- **Number of Commits:** ${branch.num_of_commits}
${Object.entries(commitTypes)
  .map(([type, commits]) => formatCommitSection(type, commits))
  .join('')}
  `;

  process.env[__filename] = result;
  return result;

}

module.exports = generatePRDescription;
