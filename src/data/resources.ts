export interface CrisisResource {
  region: string
  name: string
  contact: string
  description: string
}

export const CRISIS_RESOURCES: CrisisResource[] = [
  {
    region: 'United States',
    name: '988 Suicide & Crisis Lifeline',
    contact: 'Call or text 988',
    description: 'Free, confidential support 24/7 for people in distress.',
  },
  {
    region: 'United States',
    name: 'Crisis Text Line',
    contact: 'Text HOME to 741741',
    description: 'Free 24/7 text support with a trained crisis counselor.',
  },
  {
    region: 'United Kingdom',
    name: 'Samaritans',
    contact: 'Call 116 123',
    description: 'Free 24/7 confidential support for anyone in distress.',
  },
  {
    region: 'Canada',
    name: 'Talk Suicide Canada',
    contact: 'Call or text 9-8-8',
    description: '24/7 bilingual support for anyone thinking about suicide.',
  },
  {
    region: 'Australia',
    name: 'Lifeline Australia',
    contact: 'Call 13 11 14',
    description: '24/7 crisis support and suicide prevention services.',
  },
  {
    region: 'International',
    name: 'Find a Helpline',
    contact: 'findahelpline.com',
    description: 'Directory of crisis lines by country.',
  },
]

export const JOURNAL_PROMPTS = [
  'What is one thing that went okay today, even a small thing?',
  'What is weighing on my mind right now?',
  'What do I need more of this week?',
  'What is something I would tell a friend who felt like this?',
  'What is one thing I can let go of today?',
  'What am I grateful for right now, even something tiny?',
  'What does my body need right now — rest, movement, food, water?',
  'Write freely about whatever is on your mind.',
]
