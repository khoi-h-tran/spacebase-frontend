import type { Colony, Ship } from './types'

export const COLONY_CARDS: Colony[] = [
  { id: 'colony-1',  sector: 1,  cost: 9,  vp: 3  },
  { id: 'colony-2',  sector: 2,  cost: 12, vp: 4  },
  { id: 'colony-3',  sector: 3,  cost: 15, vp: 5  },
  { id: 'colony-4',  sector: 4,  cost: 18, vp: 6  },
  { id: 'colony-5',  sector: 5,  cost: 21, vp: 7  },
  { id: 'colony-6',  sector: 6,  cost: 24, vp: 8  },
  { id: 'colony-7',  sector: 7,  cost: 27, vp: 9  },
  { id: 'colony-8',  sector: 8,  cost: 30, vp: 10 },
  { id: 'colony-9',  sector: 9,  cost: 33, vp: 11 },
  { id: 'colony-10', sector: 10, cost: 36, vp: 12 },
  { id: 'colony-11', sector: 11, cost: 39, vp: 13 },
  { id: 'colony-12', sector: 12, cost: 42, vp: 14 },
]

export const STARTER_CARDS: Ship[] = [
  { id: 'starter-1',  name: 'Starter 1',  sector: 1,  level: 1, cost: 0, station: { key: 'money',  amount: 1 }, deployed: { key: 'money', amount: 1 }, both: null },
  { id: 'starter-2',  name: 'Starter 2',  sector: 2,  level: 1, cost: 0, station: { key: 'money',  amount: 1 }, deployed: { key: 'money', amount: 1 }, both: null },
  { id: 'starter-3',  name: 'Starter 3',  sector: 3,  level: 1, cost: 0, station: { key: 'money',  amount: 1 }, deployed: { key: 'money', amount: 1 }, both: null },
  { id: 'starter-4',  name: 'Starter 4',  sector: 4,  level: 1, cost: 0, station: { key: 'money',  amount: 1 }, deployed: { key: 'money', amount: 1 }, both: null },
  { id: 'starter-5',  name: 'Starter 5',  sector: 5,  level: 1, cost: 0, station: { key: 'money',  amount: 1 }, deployed: { key: 'money', amount: 1 }, both: null },
  { id: 'starter-6',  name: 'Starter 6',  sector: 6,  level: 1, cost: 0, station: { key: 'money',  amount: 1 }, deployed: { key: 'money', amount: 1 }, both: null },
  { id: 'starter-7',  name: 'Starter 7',  sector: 7,  level: 1, cost: 0, station: { key: 'money',  amount: 3 }, deployed: { key: 'money', amount: 2 }, both: null },
  { id: 'starter-8',  name: 'Starter 8',  sector: 8,  level: 1, cost: 0, station: { key: 'money',  amount: 3 }, deployed: { key: 'money', amount: 2 }, both: null },
  { id: 'starter-9',  name: 'Starter 9',  sector: 9,  level: 1, cost: 0, station: { key: 'income', amount: 1 }, deployed: { key: 'money', amount: 3 }, both: null },
  { id: 'starter-10', name: 'Starter 10', sector: 10, level: 1, cost: 0, station: { key: 'income', amount: 1 }, deployed: { key: 'money', amount: 3 }, both: null },
  { id: 'starter-11', name: 'Starter 11', sector: 11, level: 1, cost: 0, station: { key: 'income', amount: 1 }, deployed: { key: 'money', amount: 4 }, both: null },
  { id: 'starter-12', name: 'Starter 12', sector: 12, level: 1, cost: 0, station: { key: 'income', amount: 1 }, deployed: { key: 'money', amount: 5 }, both: null },
]

// NOTE: costs and rewards are placeholders — correct against the physical cards
export const SHIP_CARDS: Ship[] = [
  // Level 1
  { id: 'l1-1',  name: 'Ranger I',        sector: 1,  level: 1, cost: 3,  station: { key: 'money',  amount: 1 }, deployed: { key: 'money',  amount: 1 }, both: null },
  { id: 'l1-2',  name: 'Ranger II',       sector: 2,  level: 1, cost: 3,  station: { key: 'money',  amount: 2 }, deployed: { key: 'money',  amount: 1 }, both: null },
  { id: 'l1-3',  name: 'Ranger III',      sector: 3,  level: 1, cost: 3,  station: { key: 'money',  amount: 2 }, deployed: { key: 'money',  amount: 1 }, both: null },
  { id: 'l1-4',  name: 'Scout I',         sector: 4,  level: 1, cost: 4,  station: { key: 'money',  amount: 2 }, deployed: { key: 'money',  amount: 1 }, both: null },
  { id: 'l1-5',  name: 'Scout II',        sector: 5,  level: 1, cost: 4,  station: { key: 'income', amount: 1 }, deployed: { key: 'money',  amount: 1 }, both: null },
  { id: 'l1-6',  name: 'Scout III',       sector: 6,  level: 1, cost: 4,  station: { key: 'money',  amount: 3 }, deployed: { key: 'money',  amount: 1 }, both: null },
  { id: 'l1-7',  name: 'Frigate I',       sector: 7,  level: 1, cost: 5,  station: { key: 'money',  amount: 2 }, deployed: { key: 'money',  amount: 2 }, both: null },
  { id: 'l1-8',  name: 'Frigate II',      sector: 8,  level: 1, cost: 5,  station: { key: 'money',  amount: 3 }, deployed: { key: 'money',  amount: 1 }, both: null },
  { id: 'l1-9',  name: 'Frigate III',     sector: 9,  level: 1, cost: 5,  station: { key: 'income', amount: 1 }, deployed: { key: 'money',  amount: 2 }, both: null },
  { id: 'l1-10', name: 'Cruiser I',       sector: 10, level: 1, cost: 5,  station: { key: 'money',  amount: 3 }, deployed: { key: 'money',  amount: 1 }, both: null },
  { id: 'l1-11', name: 'Cruiser II',      sector: 11, level: 1, cost: 5,  station: { key: 'income', amount: 2 }, deployed: { key: 'money',  amount: 1 }, both: null },
  { id: 'l1-12', name: 'Cruiser III',     sector: 12, level: 1, cost: 5,  station: { key: 'money',  amount: 4 }, deployed: { key: 'money',  amount: 2 }, both: null },

  // Level 2
  { id: 'l2-1',  name: 'Destroyer I',     sector: 1,  level: 2, cost: 5,  station: { key: 'money',  amount: 3 }, deployed: { key: 'money',  amount: 2 }, both: null },
  { id: 'l2-2',  name: 'Destroyer II',    sector: 2,  level: 2, cost: 5,  station: { key: 'income', amount: 1 }, deployed: { key: 'money',  amount: 2 }, both: null },
  { id: 'l2-3',  name: 'Destroyer III',   sector: 3,  level: 2, cost: 6,  station: { key: 'money',  amount: 3 }, deployed: { key: 'money',  amount: 2 }, both: null },
  { id: 'l2-4',  name: 'Carrier I',       sector: 4,  level: 2, cost: 6,  station: { key: 'money',  amount: 4 }, deployed: { key: 'money',  amount: 2 }, both: null },
  { id: 'l2-5',  name: 'Carrier II',      sector: 5,  level: 2, cost: 7,  station: { key: 'income', amount: 2 }, deployed: { key: 'money',  amount: 2 }, both: null },
  { id: 'l2-6',  name: 'Carrier III',     sector: 6,  level: 2, cost: 7,  station: { key: 'money',  amount: 4 }, deployed: { key: 'money',  amount: 2 }, both: null },
  { id: 'l2-7',  name: 'Battleship I',    sector: 7,  level: 2, cost: 7,  station: { key: 'money',  amount: 4 }, deployed: { key: 'income', amount: 1 }, both: null },
  { id: 'l2-8',  name: 'Battleship II',   sector: 8,  level: 2, cost: 8,  station: { key: 'income', amount: 2 }, deployed: { key: 'money',  amount: 2 }, both: null },
  { id: 'l2-9',  name: 'Battleship III',  sector: 9,  level: 2, cost: 8,  station: { key: 'money',  amount: 5 }, deployed: { key: 'money',  amount: 2 }, both: null },
  { id: 'l2-10', name: 'Dreadnought I',   sector: 10, level: 2, cost: 8,  station: { key: 'money',  amount: 4 }, deployed: { key: 'income', amount: 1 }, both: null },
  { id: 'l2-11', name: 'Dreadnought II',  sector: 11, level: 2, cost: 9,  station: { key: 'income', amount: 3 }, deployed: { key: 'money',  amount: 2 }, both: null },
  { id: 'l2-12', name: 'Dreadnought III', sector: 12, level: 2, cost: 9,  station: { key: 'money',  amount: 6 }, deployed: { key: 'money',  amount: 3 }, both: null },

  // Level 3
  { id: 'l3-1',  name: 'Titan I',         sector: 1,  level: 3, cost: 7,  station: { key: 'money',  amount: 5 }, deployed: { key: 'money',  amount: 3 }, both: null },
  { id: 'l3-2',  name: 'Titan II',        sector: 2,  level: 3, cost: 8,  station: { key: 'income', amount: 2 }, deployed: { key: 'money',  amount: 3 }, both: null },
  { id: 'l3-3',  name: 'Titan III',       sector: 3,  level: 3, cost: 9,  station: { key: 'money',  amount: 6 }, deployed: { key: 'money',  amount: 2 }, both: null },
  { id: 'l3-4',  name: 'Leviathan I',     sector: 4,  level: 3, cost: 9,  station: { key: 'income', amount: 3 }, deployed: { key: 'money',  amount: 2 }, both: null },
  { id: 'l3-5',  name: 'Leviathan II',    sector: 5,  level: 3, cost: 10, station: { key: 'money',  amount: 5 }, deployed: { key: 'money',  amount: 3 }, both: null },
  { id: 'l3-6',  name: 'Leviathan III',   sector: 6,  level: 3, cost: 11, station: { key: 'money',  amount: 5 }, deployed: { key: 'income', amount: 2 }, both: null },
  { id: 'l3-7',  name: 'Colossus I',      sector: 7,  level: 3, cost: 11, station: { key: 'income', amount: 3 }, deployed: { key: 'money',  amount: 3 }, both: null },
  { id: 'l3-8',  name: 'Colossus II',     sector: 8,  level: 3, cost: 12, station: { key: 'money',  amount: 7 }, deployed: { key: 'money',  amount: 4 }, both: null },
  { id: 'l3-9',  name: 'Colossus III',    sector: 9,  level: 3, cost: 13, station: { key: 'income', amount: 4 }, deployed: { key: 'money',  amount: 2 }, both: null },
  { id: 'l3-10', name: 'Sovereign I',     sector: 10, level: 3, cost: 13, station: { key: 'money',  amount: 8 }, deployed: { key: 'money',  amount: 4 }, both: null },
  { id: 'l3-11', name: 'Sovereign II',    sector: 11, level: 3, cost: 14, station: { key: 'income', amount: 4 }, deployed: { key: 'income', amount: 2 }, both: null },
  { id: 'l3-12', name: 'Sovereign III',   sector: 12, level: 3, cost: 14, station: { key: 'money',  amount: 10 }, deployed: { key: 'money', amount: 5 }, both: null },
]

export const SHIP_CARDS_BY_ID    = Object.fromEntries(SHIP_CARDS.map(c    => [c.id, c]))
export const STARTER_CARDS_BY_ID = Object.fromEntries(STARTER_CARDS.map(c => [c.id, c]))
export const COLONY_CARDS_BY_ID  = Object.fromEntries(COLONY_CARDS.map(c  => [c.id, c]))
