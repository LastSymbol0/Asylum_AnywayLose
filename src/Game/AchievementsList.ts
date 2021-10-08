export type Achievement = 'First kill' | 'Interstellar' | 'Infinity war'

export type AchievementData = {
    type: Achievement,
    id: number,
    label: string,
    description: string,
}

export const AchievementsList: Achievement[] = [
    'First kill',
    'Interstellar',
    'Infinity war'
]