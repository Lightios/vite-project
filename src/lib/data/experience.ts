import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'tutor',
		company: 'Self-employed',
		description: 'Teaching mathematics to students',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills(),
		name: 'Math Tutor',
		color: 'green',
		links: [],
		logo: Assets.Math,
		shortDescription: 'Teaching mathematics to students'
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('python', 'kivy'),
		name: 'Freelancer',
		color: 'blue',
		links: [],
		logo: Assets.Freelance,
		shortDescription: 'Creating awesome applications for customers.'
	},
];

export const title = 'Experience';
