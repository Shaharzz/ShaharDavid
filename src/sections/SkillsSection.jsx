const skillCategories = [
	{
		title: 'Cybersecurity',
		skills: [
			{
				label: 'Penetration Testing (Kali Linux)',
				details: [
					'Kali Linux, Nmap, Burp Suite, Metasploit',
					'ffuf, Gobuster, Hydra, Netcat, Wireshark',
					'Web app testing, service enumeration, exploitation',
				],
			},
			{
				label: 'CTF',
				details: [
					'Binary exploitation, web, forensics, crypto, reversing',
					'Linux privilege escalation and Windows post-exploitation',
					'Team-based problem solving under time pressure',
				],
			},
			{
				label: 'Reverse Engineering',
				details: [
					'Ghidra, IDA Pro, x64dbg, Cutter, Radare2',
					'Frida, WinDbg, dnSpy, strings, objdump',
					'Static and dynamic analysis for malware and binaries',
				],
			},
			{
				label: 'Vulnerability Research',
				details: [
					'Proof-of-concept development and root cause analysis',
					'Memory corruption, input validation, and attack surfaces',
					'Reproducible notes, debugging, and disclosure mindset',
				],
			},
			{
				label: 'YARA',
				details: [
					'Malware classification, triage, and pattern matching',
					'Strings, condition logic, and rule optimization',
					'IOC extraction and repeatable detection workflows',
				],
			},
			{
				label: 'Suricata',
				details: [
					'Network detection rules and alert tuning',
					'Packet inspection, protocol analysis, and threat hunting',
					'Rule writing for actionable, low-noise detections',
				],
			},
		],
	},
	{
		title: 'Programming',
		skills: [
			'Python',
			'Java',
			'C#',
			'C/C++',
			'Assembly',
		],
	},
	{
		title: 'Computer Science',
		skills: ['Data Structures & Algorithms', 'OOP', 'Operating Systems'],
	},
]

function SkillChip({ skill }) {
	const hasDetails = Array.isArray(skill.details) && skill.details.length > 0

	if (!hasDetails) {
		return <span className="tag">{skill.label}</span>
	}

	return (
		<button className="tag tag-popover-trigger" type="button">
			<span>{skill.label}</span>
			<span className="skill-popover" role="tooltip">
				<span className="skill-popover-title">Tools & focus</span>
				{skill.details.map((detail) => (
					<span className="skill-popover-line" key={detail}>
						{detail}
					</span>
				))}
			</span>
		</button>
	)
}

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
								<SkillChip key={skill.label ?? skill} skill={skill.label ? skill : { label: skill }} />
							))}
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default SkillsSection
