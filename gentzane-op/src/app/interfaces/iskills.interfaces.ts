export interface ISkills {
    technical: string[],
    soft: string[],
    languages: ILanguages[]
}

export interface ILanguages{
    name: string,
    level: LanguageLevel
}

export type LanguageLevel = 'Nativo' | 'Avanzado' | 'Intermedio' | 'Básico';
