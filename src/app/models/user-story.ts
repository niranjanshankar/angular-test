import { Requirement } from './requirement';

export interface UserStory {
    name: string;
    description: string;
    category: string;
    subCategory: string;
    estimatedStartDate: string;
    sponsorEmail: string;
    complexity: 'easy' | 'medium' | 'difficult';
    requirement: Requirement[];
    status: 'open' | 'closed' | 'in progress' | 'to do';
}
