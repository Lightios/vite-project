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
		slug: 'demiurg',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/Lightios/Demiurg_Creator/', label: 'GitHub - Game Creator' }, { to: 'https://github.com/ushka1/project-demiurg/', label: 'GitHub - Game Runner'} ],
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
		slug: 'vl',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
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
		slug: 'daymath',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [], // { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }
		logo: Assets.DayMath,
		name: 'DayMath',
		period: {
			from: new Date(2024, 4, 1)
		},
		skills: getSkills('kotlin', 'compose', 'python'),
		type: 'Mobile Application',
	},
	{
		slug: 'movie-ai',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/Lightios/MovieRecommendationSystem', label: 'GitHub' }],
		logo: Assets.Recommendation,
		name: 'Movie Recommendation System',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
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
