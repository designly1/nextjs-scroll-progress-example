import React from 'react';

const StoryComponent = () => {
	const storyParagraphs = [
		`Once upon a stormy Halloween night, in a haunted corporate labyrinth known as InterGlobalSysTech, there lived a web developer named Martin. Martin was no ordinary developer; he had an unsettling gift: he could read error messages in the source code like ancient curses in forbidden tomes. Rumor had it, his code editor glowed with an eerie green light, and each keystroke echoed like distant thunder. His cubicle was littered with strange artifacts—an old USB drive, a half-eaten pumpkin, and a cursed mouse that only worked if he whispered incantations before clicking.`,

		`Martin’s employer, InterGlobalSysTech, Inc., was a sinister conglomerate housed in a decaying office tower with flickering lights and strange, guttural noises that echoed through the air ducts. The company specialized in software for mid-level municipal zoning departments, which, to Martin, seemed suspiciously like a front for something much darker. The higher-ups claimed they promoted "synergy," but Martin suspected they were actually in league with shadowy forces, summoning unspeakable horrors with every software update.`,

		`Martin's task was to maintain the company website—if one could call it that. To him, it was more of a digital graveyard, filled with forgotten plugins, undead div tags, and deprecated JavaScript functions haunting the codebase like restless spirits. Martin had heard legends of developers who had tried to refactor the site. None had been seen since, and the only trace they left behind was the ghostly line of code they’d last touched, now immortalized as a warning to others.`,

		`One eerie morning, Martin shuffled to his desk—a cobweb-covered relic tucked in a dim corner near the flickering light. He found Steve, his ghostly boss, hovering nearby. Steve looked like he hadn’t slept since the site launched in 1997, and his coffee seemed to emit faint, skeletal wisps of steam.`,

		`“Morning, Martin,” Steve said, his voice echoing as if from beyond the grave. “We have a new…*project.* It’s going to…*haunt*…our competition.” Martin gulped, bracing himself for whatever unholy terror awaited. It was the same look Steve had last year when they updated to "Dark Mode," which just involved turning off half the server room lights to save on electricity.`,

		`“Oh no…what now?” Martin muttered, his voice barely more than a whisper. He clutched his keyboard, which he’d come to believe was cursed. Once, it had mysteriously opened 38 tabs of Stack Overflow without him even touching it.`,

		`“We’re summoning…the power of *blockchain*,” Steve intoned, his eyes flickering with a malevolent glint. Martin could swear he heard the sound of a distant wolf howl, though it was probably just Gary from finance howling at another budget cut.`,

		`Martin’s blood ran cold. “Blockchain? Steve, are we…*selling souls* on the blockchain?”`,

		`“No, no, nothing so mundane,” Steve replied with a spectral grin. “But it *will* give us an advantage over…mortal competitors.” Martin couldn't help but shiver at the thought. The last time Steve had suggested an "advantage," it had involved embedding dozens of tracking pixels to “study” user behavior. The site’s bounce rate had gone up faster than a bat fleeing the sunrise.`,

		`For the next three nights, Martin worked tirelessly in the shadowy gloom of the office, trying to “integrate” blockchain by embedding ominous blinking skull GIFs on the “About Us” page. He wrote a script that made these skulls randomly appear near words like “innovate,” “disrupt,” and “pivot.” He wasn’t entirely sure what any of it meant, but the eerie effect pleased Steve to no end. Every time the skulls blinked, a chill ran down Martin’s spine.`,

		`Then, on the eve of Halloween, a message appeared in Martin’s inbox from Andrea, the spectral Director of UX/UI. She was known to haunt the office at strange hours, and it was whispered that she had once accidentally summoned an eldritch user flow that still roamed the website to this day. There was an old legend among employees that if you clicked on the wrong breadcrumb link, you’d end up in a menu so complex, you’d lose hours of your life trying to escape.`,

		`“Can you make the homepage look…more…*enticing*?” Andrea’s message read, written in what looked suspiciously like crimson ink. Martin shivered. To Andrea, “enticing” usually meant an overload of pop-ups and buttons that seemed to trap users in a looping labyrinth of pages. He suspected her ideas weren’t UX/UI at all but rather some ancient spellwork.`,

		`With a reluctant sigh, Martin got to work, adding shadowy animations, cryptic tooltips, and strange noises that whispered from hidden audio files when visitors dared to scroll. By midnight, he had transformed the homepage into a ghastly spectacle of flashing icons, ominous shadows, and floating eyes that followed the user’s mouse. Andrea cackled with delight in her email response. “Now, *that’s* how you UX!”`,

		`But Martin’s darkest challenge lay with Frank from IT. Frank was more of a malevolent presence than a colleague—a shapeless figure in outdated khakis who lurked in the server room like a digital banshee. One night, Frank sent Martin an urgent message with the subject line: “**THE COOKIES ARE WATCHING US**.”`,

		`“Martin…do you *know* what these cookies are doing?” Frank’s message read, as if each word had been torn from his very soul. Rumor had it that Frank once tried to quarantine a virus he found on the company website by burying his laptop in salt and performing a low-level format under a full moon.`,

		`“Relax, Frank,” Martin typed back, but he could feel his fingers tremble as he wrote. He explained that cookies were harmless…mostly. But Frank was not convinced. “We need…*protection*,” he replied ominously, suggesting they implement a firewall blessed by a tech-savvy exorcist.`,

		`In desperation, Martin created a “Quantum Cookie Safety” PDF, added a clipart pentagram for extra effect, and sent it back to Frank, who promptly printed and hung it all over the office with warnings to “Stay Vigilant.” Visitors who accidentally read it seemed more confused than reassured.`,

		`In the meantime, the sales team had an idea even darker than blockchain. “We need an AI chatbot that can *read minds,*” they whispered to Martin, their faces shrouded in the dim glow of their screens. They wore hooded cloaks now, claiming it helped them think more creatively.`,

		`Martin reluctantly crafted a chatbot named “ChadBot,” who would pop up on the site with chilling accuracy, asking questions like, “Are you *sure* you’re ready to commit?” and “What…*keeps you up at night*?” Somehow, ChadBot’s interactions actually increased sales by a spooky 13%. The team congratulated themselves, and Steve boasted about their “advanced AI sorcery.”`,

		`Despite the haunting atmosphere, Martin found small victories amidst the madness. On Halloween night, he coded a hidden “Easter egg” deep within the FAQ page: if a user scrolled three times to the left, a ghostly sloth would appear, whispering, “You found the hidden spirit…” Few dared to scroll so boldly, but those who did were left with chills and an inexplicable need to leave five-star reviews.`,

		`And so, Martin continued his unholy work, tweaking haunted dropdown menus, battling cursed pop-ups, and fielding strange requests from beings whose understanding of the internet seemed more supernatural than technical. He may not have saved the world, but he definitely added a shiver to it, one eerie line of code at a time.`,
	];

	return (
		<section id="story" className="flex flex-col gap-12 text-xl">
			{storyParagraphs.map((paragraph, index) => (
				<p key={index} className="text-justify">{paragraph}</p>
			))}
		</section>
	);
};

export default StoryComponent;
