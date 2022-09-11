import { CheckConclusion } from './consts';
import { GH_APP_USER_ID } from './env';

/**
 * In order to update the gate status we prioritize status in the following order:
 * In case one or more gates should fail the gate:
 *      -> we will mark gate as fail.
 * In case one or more gates should pass the gate and no gate is failed:
 *      -> we will mark gate as success.
 * In case gate should not mind about gate conclusion:
 *      -> we will mark it as neutral only if it have no other state.
 * @param currentConclusion
 * @param candidateConclusion
 * @returns Boolean
 */
export const isConclusionUpdateNedded = (
  currentConclusion: CheckConclusion,
  candidateConclusion: CheckConclusion
) => {
  return (
    !currentConclusion ||
    (currentConclusion !== CheckConclusion.failure &&
      ![(CheckConclusion.neutral, CheckConclusion.skipped)].includes(candidateConclusion))
  );
};

export const allApprovalsGitstream = approvals => {
  return (
    approvals.length &&
    approvals.map(({ user }) => user.id).every((id: number) => id === Number(GH_APP_USER_ID))
  );
};

export const gitStreamApproved = approvals => {
  return approvals.length && approvals.map(({ user }) => user.id).includes(Number(GH_APP_USER_ID));
};

export const extractOwnerAndRepoFromRepositoryName = fullname => {
  const owner = fullname?.split("/")[0];
  const repo = fullname?.split("/")[1]
  return {owner, repo}
};
