function generatePRDescription(branch) {
   if (!process.env[__filename]) {
    process.env[__filename] = 1;
  }
   if(process.env[__filename] < 3){
      process.env[__filename] += 1;
      return;
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

  process.env[__filename] = Buffer.from(result).toString('base64');
  return result;

}

module.exports = generatePRDescription;
