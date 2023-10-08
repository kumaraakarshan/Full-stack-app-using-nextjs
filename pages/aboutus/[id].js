

import { useRouter } from 'next/router';

const teamMembers = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

function TeamMemberPage() {
  const router = useRouter();
  const { id } = router.query;

  const teamMember = teamMembers.find((member) => member.id === Number(id));

  if (!teamMember) {
    return <p>Developer doesn't exist</p>;
  }

  return (
    <div>
      <h1>{teamMember.name}</h1>
      <p>{teamMember.role}</p>
    </div>
  );
}

export default TeamMemberPage;
