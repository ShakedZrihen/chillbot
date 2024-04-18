const checklistFilter = (empty, branch, files, pr, repo) => { 
    
    console.log({empty, branch, files, pr, repo});
	
    const checks = [
        {
            title: "low-risk",
            label: "The PR is a low-risk change",
            condition: true
        },
        {
            title: "has-jira",
            label: "The PR has a Jira reference in the title",
            condition: true
        },
        {
            title: "updates-tests",
            label: "The PR includes updates to tests",
            condition: true
        },
        {
            title: "includes-docs",
            label: "The PR includes reference documentation",
            condition: true
        },
        {
            title: "first-time-contrib",
            label: "The PR author is a first-time contributor",
            condition: true
        },
        {
            title: "requires-opsec",
            label: "The PR requires OpSec approval",
            condition: true
        }
    ];

    const comment = checks
        .map(check => `- [${check.condition ? "x" : " "}] ${check.label}`)
        .join("\n");
	
    console.log({comment});
    return comment;
};

module.exports = checklistFilter;
