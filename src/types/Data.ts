import { Details, Experience, Qualification, Reference, Skill } from '.';

export type Data = {
	experiences: Experience[];
	references: Reference[];
	skills: Skill[];
	details: Details;
	qualifications: Qualification[];
};
