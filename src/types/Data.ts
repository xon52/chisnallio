import { Experience, Skill, Summary } from '.';

export type Data = {
	title: string;
	summary: Summary;
	skills: Skill[];
	experiences: Experience[];
};
