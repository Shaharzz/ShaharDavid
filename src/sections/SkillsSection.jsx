const skillCategories = [
	{
		title: 'Cybersecurity',
		skills: [
			'Penetration Testing (Kali Linux)',
			'CTF',
			'Reverse Engineering',
			'Vulnerability Research',
			'YARA',
			'Suricata',
		],
	},
	{
		title: 'Programming',
		skills: ['Python', 'Java', 'C#', 'C/C++', 'Assembly'],
	},
	{
		title: 'Computer Science',
		skills: ['Data Structures & Algorithms', 'OOP', 'Operating Systems'],
	},
]

function SkillsSection() {
	return (
		<section className="section" id="skills">
			<h2>Skills</h2>
			<div className="skills-groups">
				{skillCategories.map((category) => (
					<article className="skills-group" key={category.title}>
						<h3>{category.title}</h3>
						<div>
							{category.skills.map((skill) => (
								<span className="tag" key={skill}>
									{skill}
								</span>
							))}
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default SkillsSection
