import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'master-system',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [], // { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }
		logo: Assets.MasterSystem,
		name: 'Multi K.O. Tournament System',
		period: {
			from: new Date(2021, 10, 1),
			to: new Date()
		},
		skills: getSkills('python', 'kivy'),
		type: 'Desktop Application',
	},
	{
		slug: 'vl',
		color: '#5e95e3',
		description:
			'Valorant Lineups is a comprehensive mobile application tailored for Valorant players to enhance their in-game strategies. The app offers a vast collection of lineups, enabling players to execute advanced techniques without the need for extensive memorization. By providing real-time guidance and detailed instructions, Valorant Lineups streamlines the learning process and empowers players to perform at their best, improving both individual and team performance.',
		shortDescription:
			'Mobile app for Valorant players to use in-game lineups without prior memorization, enhancing gameplay strategies.',
		links: [], // { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }
		logo: Assets.ValorantLineups,
		name: 'Valorant Lineups',
		period: {
			from: new Date(2021, 7, 1),
			to: new Date(2023, 7, 30)
		},
		skills: getSkills('python', 'kivy', 'kotlin', 'compose'),
		type: 'Mobile Application',
	},
	{
		slug: 'demiurg',
		color: '#5e95e3',
		shortDescription:
			'Text-based game creator and interpreter, developed in a team, enabling users to design and play complex interactive narratives.',
		description:
			'Demiurg is a comprehensive application developed as part of a Software Engineering course, created by a team of five. The project includes a robust game creator and interpreter for text-based games, allowing users to design intricate game worlds with advanced mechanics such as non-linear quests and dynamic storylines. The creator empowers users to craft detailed interactive narratives, while the interpreter provides an immersive experience for playing these games. This project showcases our collaborative effort and proficiency in software development, highlighting our ability to deliver sophisticated tools for creative expression.',
		links: [{ to: 'https://github.com/Lightios/Demiurg_Creator/', label: 'GitHub - Game Creator' }, { to: 'https://github.com/ushka1/project-demiurg/', label: 'GitHub - Game Interpreter'} ],
		logo: Assets.Demiurg,
		name: 'Demiurg',
		period: {
			from: new Date(2023, 2, 1),
			to: new Date(2023, 6, 30)
		},
		skills: getSkills('python', 'kivy'),
		type: 'Desktop Application',
	},
	{
		slug: 'daymath',
		color: '#5e95e3',
		shortDescription:
			'Educational app for Polish students, featuring math quizzes, explanations, and animations, still in development.',
		description:
			'DayMath is a comprehensive educational application I developed independently during my university studies, targeting students in Polish primary and secondary schools. The app is designed to enhance mathematical learning through a variety of interactive features, including math quizzes, detailed textual explanations of various topics, and animations that visualize and clarify complex problems. These tools work together to provide an engaging and effective learning experience. Although the app is still a work in progress and has not been officially released, it represents my commitment to improving education through technology and my ongoing efforts to refine and expand its capabilities.',
		links: [], // { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }
		logo: Assets.DayMath,
		name: 'DayMath',
		period: {
			from: new Date(2024, 4, 1)
		},
		skills: getSkills('kotlin', 'compose', 'latex', 'python', 'manim'),
		type: 'Mobile Application',
	},
	{
		slug: 'movie-ai',
		color: '#ff3e00',
		shortDescription:
			'Desktop app recommending movies based on user ratings, developed for a course on AI fundamentals with a colleague.',
		description:
			'The Movie Recommendation System is a desktop application created in collaboration with a colleague as part of a Fundamentals of Artificial Intelligence course. This app enables users to rate movies they have watched, and employs AI algorithms to recommend new movies tailored to their preferences. By analyzing user ratings and employing sophisticated recommendation techniques, the system provides personalized movie suggestions, enhancing the user’s viewing experience. This project highlights our practical application of AI principles and our ability to develop user-centric, intelligent software solutions.',
		links: [{ to: 'https://github.com/Lightios/MovieRecommendationSystem', label: 'GitHub' }],
		logo: Assets.Recommendation,
		name: 'Movie Recommendation System',
		period: {
			from: new Date(2024, 4, 1),
			to: new Date(2024, 5, 30)
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Desktop application',
		// screenshots: [
		// 	{
		// 		label: 'screen 1',
		// 		src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '2',
		// 		src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '3',
		// 		src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '4',
		// 		src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '5',
		// 		src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '6',
		// 		src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	}
		// ]
	}
];

export const title = 'Projects';
