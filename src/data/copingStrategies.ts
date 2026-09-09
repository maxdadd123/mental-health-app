export interface CopingStrategy {
  id: string
  category: 'Anxious' | 'Sad' | 'Angry' | 'Overwhelmed' | 'Can\'t sleep'
  title: string
  steps: string[]
}

export const COPING_STRATEGIES: CopingStrategy[] = [
  {
    id: 'grounding-54321',
    category: 'Anxious',
    title: '5-4-3-2-1 Grounding',
    steps: [
      'Name 5 things you can see around you.',
      'Name 4 things you can touch or feel.',
      'Name 3 things you can hear.',
      'Name 2 things you can smell.',
      'Name 1 thing you can taste.',
    ],
  },
  {
    id: 'box-breathing',
    category: 'Anxious',
    title: 'Box Breathing',
    steps: [
      'Breathe in slowly for 4 seconds.',
      'Hold your breath for 4 seconds.',
      'Breathe out slowly for 4 seconds.',
      'Hold empty for 4 seconds, then repeat 4-6 times.',
    ],
  },
  {
    id: 'name-it',
    category: 'Sad',
    title: 'Name the Feeling',
    steps: [
      'Pause and ask: what am I actually feeling right now?',
      'Try to name it specifically (lonely, disappointed, tired, hurt).',
      'Say to yourself: "It makes sense that I feel this way because..."',
      'Remind yourself feelings are temporary visitors, not permanent residents.',
    ],
  },
  {
    id: 'small-comfort',
    category: 'Sad',
    title: 'One Small Comfort',
    steps: [
      'Pick one small, kind thing you can do for yourself right now.',
      'Options: warm drink, favorite song, a short walk, texting a friend.',
      'Do just that one thing — you don\'t need to fix everything at once.',
    ],
  },
  {
    id: 'timeout',
    category: 'Angry',
    title: 'The Pause',
    steps: [
      'Notice the urge to react and give yourself permission to pause.',
      'Step away from the situation if you can, even for 2 minutes.',
      'Unclench your jaw and drop your shoulders.',
      'Take 5 slow breaths before deciding what to do next.',
    ],
  },
  {
    id: 'physical-release',
    category: 'Angry',
    title: 'Release the Charge',
    steps: [
      'Anger is energy in the body — move it safely.',
      'Try: fast walk, shaking out your hands, squeezing a pillow, jumping jacks.',
      'Do this for 60-90 seconds, then check in on how you feel.',
    ],
  },
  {
    id: 'brain-dump',
    category: 'Overwhelmed',
    title: 'Brain Dump',
    steps: [
      'Grab paper or open a notes app.',
      'Write down everything on your mind, no order, no filtering.',
      'Circle the one thing that\'s actually urgent right now.',
      'Let the rest sit on the page instead of in your head.',
    ],
  },
  {
    id: 'one-next-step',
    category: 'Overwhelmed',
    title: 'Just the Next Step',
    steps: [
      'Forget the whole to-do list for a moment.',
      'Ask: what is the single next tiny step I can take?',
      'Do only that. Then ask the question again.',
    ],
  },
  {
    id: 'wind-down',
    category: 'Can\'t sleep',
    title: 'Body Scan Wind-Down',
    steps: [
      'Lie down comfortably and close your eyes.',
      'Slowly bring attention to your feet, then legs, then torso, then arms, then face.',
      'With each area, consciously relax the muscles.',
      'If your mind wanders, gently bring it back to the body.',
    ],
  },
  {
    id: '4-7-8',
    category: 'Can\'t sleep',
    title: '4-7-8 Breathing',
    steps: [
      'Breathe in quietly through your nose for 4 seconds.',
      'Hold your breath for 7 seconds.',
      'Exhale completely through your mouth for 8 seconds.',
      'Repeat the cycle 4 times.',
    ],
  },
]

export const CATEGORIES = Array.from(new Set(COPING_STRATEGIES.map((s) => s.category)))
