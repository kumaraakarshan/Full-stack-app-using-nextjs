// pages/aboutus.js

import Link from 'next/link';

const teamMembers = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

function AboutUsPage() { // Capitalized component name
  return (
    <div>
      <h1>The About Us Page</h1>
      <ul>
        {teamMembers.map((teamMember) => (
          <li key={teamMember.id}>
           <Link href={`/aboutus/${teamMember.id}`}>
  {teamMember.name}
</Link>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutUsPage;
