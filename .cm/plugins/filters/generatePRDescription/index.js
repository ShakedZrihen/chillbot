function generatePRDescription(branch, pr, owner, repo) {
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

  branch.commits.messages.filter(message => !message.includes('Merge branch')).forEach((message, index) => {
    const match = message.match(/^(feat|fix|chore|docs|style|refactor|perf|test|build|ci):/);
    const commitSHA = branch.commits.shas[index];
    const commitURL = `https://github.com/${owner}/${repo}/commit/${commitSHA}`;
    const formattedMessage = `${message.replace(`${match ? match[1] : 'other'}:`, '').trim()} ([view commit](${commitURL}))`;
    if (match) {
      commitTypes[match[1]].push(formattedMessage);
    } else {
      commitTypes.other.push(formattedMessage);
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
  process.env[__filename] = result.split('\n').join('\n            ');
  return process.env[__filename];
}

module.exports = generatePRDescription;
