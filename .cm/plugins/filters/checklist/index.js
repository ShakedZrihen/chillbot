const checklistFilter = async (empty, branch, files, pr, repo, callback) => { // made sync temporarily
	// Now that we have all the needed data here, we can use it to build our checklist
	/*
	console.log("Branch")
	console.log(branch)
	console.log("Files")
	console.log(files)
	console.log("PR")
	console.log(pr)
	console.log("Repo")
	console.log(repo)
	// */
	/* 
		This is an array of objects, each of which represents a check.
		Not all *must* be true for the PR to be accepted, which is why
		we don't just put them as automation conditions in the .cm file.
	*/
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
			title: "includes-docs",
			label: "The PR author is a first-time contributor",
			condition: true
		},
		{
			title: "requires-opsec",
			label: "The PR requires OpSec approval",
			condition: true
		}
	];

	const comment = await Promise.resolve(checks
		.map(check => `- [${check.condition ? "x" : " "}] ${check.label}`)
		.join("\n"));
	
	return callback(
		null, 
		comment
	);
};

module.exports = {
	async: true,
	filter: checklistFilter
}
