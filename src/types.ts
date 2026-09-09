export type MoodValue = 1 | 2 | 3 | 4 | 5

export interface MoodEntry {
  id: string
  timestamp: number
  mood: MoodValue
  tags: string[]
  note: string
}

export interface JournalEntry {
  id: string
  timestamp: number
  prompt: string
  text: string
}

export const MOODS: { value: MoodValue; label: string; emoji: string }[] = [
  { value: 1, label: 'Awful', emoji: '😞' },
  { value: 2, label: 'Low', emoji: '😕' },
  { value: 3, label: 'Okay', emoji: '😐' },
  { value: 4, label: 'Good', emoji: '🙂' },
  { value: 5, label: 'Great', emoji: '😄' },
]

export const MOOD_TAGS = [
  'Work', 'Family', 'Friends', 'Sleep', 'Health',
  'Money', 'Relationship', 'School', 'Alone time', 'Exercise',
]
