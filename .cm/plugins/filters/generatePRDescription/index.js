function generatePRDescription(branch, pr) {
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
      commitTypes[match[1]].push(message.replace(`${match[1]}:`, '').trim());
    } else {
      commitTypes.other.push(message);
    }
  });

  const formatCommitSection = (type, commits) =>
    commits.length ? `- **${type}:**\n${commits.map(msg => `  - ${msg}`).join('\n')}\n` : '';
  
  const addTests = branch.commits.messages.some(message => message.includes('test:')) ? 'X' : ' ';
  const testedInDev = pr.comments.some(comment => comment.content.includes('/dev')) ? 'X' : ' ';
  console.log({addTests});
  const result = `
## Branch Details
- **Base:** ${branch.base}

## What changed ?
${Object.entries(commitTypes)
      .map(([type, commits]) => formatCommitSection(type, commits))
      .join('')}

## Checklist
 - [${testedInDev}] Flow Tested on dev
 - [${addTests}] Add tests  
  `;

  process.env[__filename] = result.spit('\n').filter(Boolean).join('\n    ');
  return result.spit('\n').filter(Boolean).join('\n ');

}

module.exports = generatePRDescription;
