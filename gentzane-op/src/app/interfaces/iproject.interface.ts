export type UNIRCategory = 'Frontend' | 'Backend' | 'Database' | 'Fullstack';
export type DigipenCategory = 'CS120' | 'CS250' | 'CS300' | 'CS380';
export interface IProject {
    id: number;
    title: string;
    image: string;
    description: string;
    tags: string[];
    link: string;
    category: 'UNIR' | 'DigiPen';
    course: UNIRCategory | DigipenCategory;
    release?: string; 
}
