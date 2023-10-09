import { Experience, Reference, Skill, Summary } from '.';

export type Data = {
	experiences: Experience[];
	references: Reference[];
	skills: Skill[];
	summary: Summary;
	title: string;
};
