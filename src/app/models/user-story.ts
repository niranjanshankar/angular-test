import { Requirement } from './requirement';

export interface UserStory {
    name: string;
    description: string;
    category: string;
    subCategory: string;
    estimatedStartDate: Date;
    email: string;
    complexity: string;
    requirement: Requirement[];
    status: string;
}
