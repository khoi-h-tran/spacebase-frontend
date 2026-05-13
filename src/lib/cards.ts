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
  { id: 'starter-1',  name: 'Starter 1',  sector: 1,  level: 1, cost: 0, station: [{ key: 'money',  amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'starter-2',  name: 'Starter 2',  sector: 2,  level: 1, cost: 0, station: [{ key: 'money',  amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'starter-3',  name: 'Starter 3',  sector: 3,  level: 1, cost: 0, station: [{ key: 'money',  amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'starter-4',  name: 'Starter 4',  sector: 4,  level: 1, cost: 0, station: [{ key: 'money',  amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'starter-5',  name: 'Starter 5',  sector: 5,  level: 1, cost: 0, station: [{ key: 'money',  amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'starter-6',  name: 'Starter 6',  sector: 6,  level: 1, cost: 0, station: [{ key: 'money',  amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'starter-7',  name: 'Starter 7',  sector: 7,  level: 1, cost: 0, station: [{ key: 'money',  amount: 3 }], deployed: [{ key: 'money', amount: 2 }], both: [] },
  { id: 'starter-8',  name: 'Starter 8',  sector: 8,  level: 1, cost: 0, station: [{ key: 'money',  amount: 3 }], deployed: [{ key: 'money', amount: 2 }], both: [] },
  { id: 'starter-9',  name: 'Starter 9',  sector: 9,  level: 1, cost: 0, station: [{ key: 'income', amount: 1 }], deployed: [{ key: 'money', amount: 3 }], both: [] },
  { id: 'starter-10', name: 'Starter 10', sector: 10, level: 1, cost: 0, station: [{ key: 'income', amount: 1 }], deployed: [{ key: 'money', amount: 3 }], both: [] },
  { id: 'starter-11', name: 'Starter 11', sector: 11, level: 1, cost: 0, station: [{ key: 'income', amount: 1 }], deployed: [{ key: 'money', amount: 4 }], both: [] },
  { id: 'starter-12', name: 'Starter 12', sector: 12, level: 1, cost: 0, station: [{ key: 'income', amount: 1 }], deployed: [{ key: 'money', amount: 5 }], both: [] },
]

export const SHIP_CARDS: Ship[] = [
  // Level 1 — sector 1
  { id: 'l1-1',  name: 'L1 S1',  sector: 1,  level: 1, cost: 3, station: [{ key: 'money', amount: 2 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-2',  name: 'L1 S1',  sector: 1,  level: 1, cost: 2, station: [{ key: 'vp', amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-3',  name: 'L1 S1',  sector: 1,  level: 1, cost: 2, station: [{ key: 'money', amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-4',  name: 'L1 S1',  sector: 1,  level: 1, cost: 4, station: [], deployed: [], both: [], stationCharge: { slots: [{ required: 'always' }], linked: false, effect: { key: 'shift_die', amount: 1 } }, deployedCharge: { slots: [{ required: 'always' }, { required: 'always' }], linked: true, effect: { key: 'shift_die', amount: 1 } } },
  // Level 1 — sector 2
  { id: 'l1-5',  name: 'L1 S2',  sector: 2,  level: 1, cost: 3, station: [{ key: 'money', amount: 2 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-6',  name: 'L1 S2',  sector: 2,  level: 1, cost: 2, station: [{ key: 'vp', amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-7',  name: 'L1 S2',  sector: 2,  level: 1, cost: 2, station: [{ key: 'money', amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-8',  name: 'L1 S2',  sector: 2,  level: 1, cost: 4, station: [], deployed: [], both: [], stationCharge: { slots: [{ required: 'always' }], linked: false, effect: { key: 'shift_die', amount: 1 } }, deployedCharge: { slots: [{ required: 'always' }, { required: 'always' }], linked: true, effect: { key: 'shift_die', amount: 1 } } },
  // Level 1 — sector 3
  { id: 'l1-9',  name: 'L1 S3',  sector: 3,  level: 1, cost: 3, station: [{ key: 'money', amount: 2 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-10', name: 'L1 S3',  sector: 3,  level: 1, cost: 2, station: [{ key: 'vp', amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-11', name: 'L1 S3',  sector: 3,  level: 1, cost: 2, station: [{ key: 'money', amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-12', name: 'L1 S3',  sector: 3,  level: 1, cost: 4, station: [], deployed: [], both: [], stationCharge: { slots: [{ required: 'always' }], linked: false, effect: { key: 'shift_die', amount: 1 } }, deployedCharge: { slots: [{ required: 'always' }, { required: 'always' }], linked: true, effect: { key: 'shift_die', amount: 1 } } },
  // Level 1 — sector 4
  { id: 'l1-13', name: 'L1 S4',  sector: 4,  level: 1, cost: 3, station: [{ key: 'money', amount: 2 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-14', name: 'L1 S4',  sector: 4,  level: 1, cost: 2, station: [{ key: 'vp', amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-15', name: 'L1 S4',  sector: 4,  level: 1, cost: 2, station: [{ key: 'money', amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-16', name: 'L1 S4',  sector: 4,  level: 1, cost: 4, station: [], deployed: [], both: [], stationCharge: { slots: [{ required: 'always' }], linked: false, effect: { key: 'shift_die', amount: 1 } }, deployedCharge: { slots: [{ required: 'always' }, { required: 'always' }], linked: true, effect: { key: 'shift_die', amount: 1 } } },
  // Level 1 — sector 5
  { id: 'l1-17', name: 'L1 S5',  sector: 5,  level: 1, cost: 4, station: [{ key: 'money', amount: 2 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-18', name: 'L1 S5',  sector: 5,  level: 1, cost: 2, station: [{ key: 'vp', amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-19', name: 'L1 S5',  sector: 5,  level: 1, cost: 3, station: [{ key: 'money', amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-20', name: 'L1 S5',  sector: 5,  level: 1, cost: 4, station: [], deployed: [], both: [], stationCharge: { slots: [{ required: 'always' }], linked: false, effect: { key: 'shift_die', amount: 1 } }, deployedCharge: { slots: [{ required: 'always' }, { required: 'always' }], linked: true, effect: { key: 'shift_die', amount: 1 } } },
  // Level 1 — sector 6
  { id: 'l1-21', name: 'L1 S6',  sector: 6,  level: 1, cost: 4, station: [{ key: 'money', amount: 2 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-22', name: 'L1 S6',  sector: 6,  level: 1, cost: 2, station: [{ key: 'vp', amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-23', name: 'L1 S6',  sector: 6,  level: 1, cost: 3, station: [{ key: 'money', amount: 1 }], deployed: [{ key: 'money', amount: 1 }], both: [] },
  { id: 'l1-24', name: 'L1 S6',  sector: 6,  level: 1, cost: 4, station: [], deployed: [], both: [], stationCharge: { slots: [{ required: 'always' }], linked: false, effect: { key: 'shift_die', amount: 1 } }, deployedCharge: { slots: [{ required: 'always' }, { required: 'always' }], linked: true, effect: { key: 'shift_die', amount: 1 } } },
  // Level 1 — sector 7
  { id: 'l1-25', name: 'L1 S7',  sector: 7,  level: 1, cost: 4, station: [{ key: 'money', amount: 1 }, { key: 'chain_right' }], deployed: [{ key: 'money', amount: 1 }, { key: 'chain_right' }], both: [] },
  { id: 'l1-26', name: 'L1 S7',  sector: 7,  level: 1, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l1-27', name: 'L1 S7',  sector: 7,  level: 1, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l1-28', name: 'L1 S7',  sector: 7,  level: 1, cost: 0, station: [], deployed: [], both: [] },
  // Level 1 — sector 8
  { id: 'l1-29', name: 'L1 S8',  sector: 8,  level: 1, cost: 5, station: [{ key: 'chain_left' }, { key: 'chain_right' }], deployed: [{ key: 'chain_left' }, { key: 'chain_right' }], both: [] },
  { id: 'l1-30', name: 'L1 S8',  sector: 8,  level: 1, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l1-31', name: 'L1 S8',  sector: 8,  level: 1, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l1-32', name: 'L1 S8',  sector: 8,  level: 1, cost: 0, station: [], deployed: [], both: [] },
  // Level 1 — sector 9
  { id: 'l1-33', name: 'L1 S9',  sector: 9,  level: 1, cost: 5, station: [{ key: 'chain_left' }, { key: 'chain_right' }], deployed: [{ key: 'chain_left' }, { key: 'chain_right' }], both: [] },
  { id: 'l1-34', name: 'L1 S9',  sector: 9,  level: 1, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l1-35', name: 'L1 S9',  sector: 9,  level: 1, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l1-36', name: 'L1 S9',  sector: 9,  level: 1, cost: 0, station: [], deployed: [], both: [] },
  // Level 1 — sector 10
  { id: 'l1-37', name: 'L1 S10', sector: 10, level: 1, cost: 5, station: [{ key: 'chain_left' }, { key: 'chain_right' }], deployed: [{ key: 'chain_left' }, { key: 'chain_right' }], both: [] },
  { id: 'l1-38', name: 'L1 S10', sector: 10, level: 1, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l1-39', name: 'L1 S10', sector: 10, level: 1, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l1-40', name: 'L1 S10', sector: 10, level: 1, cost: 0, station: [], deployed: [], both: [] },
  // Level 1 — sector 11
  { id: 'l1-41', name: 'L1 S11', sector: 11, level: 1, cost: 5, station: [{ key: 'chain_left' }, { key: 'chain_right' }], deployed: [{ key: 'chain_left' }, { key: 'chain_right' }], both: [] },
  { id: 'l1-42', name: 'L1 S11', sector: 11, level: 1, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l1-43', name: 'L1 S11', sector: 11, level: 1, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l1-44', name: 'L1 S11', sector: 11, level: 1, cost: 0, station: [], deployed: [], both: [] },
  // Level 1 — sector 12
  { id: 'l1-45', name: 'L1 S12', sector: 12, level: 1, cost: 4, station: [{ key: 'vp', amount: 3 }, { key: 'chain_left' }], deployed: [{ key: 'vp', amount: 1 }, { key: 'chain_left' }], both: [] },
  { id: 'l1-46', name: 'L1 S12', sector: 12, level: 1, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l1-47', name: 'L1 S12', sector: 12, level: 1, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l1-48', name: 'L1 S12', sector: 12, level: 1, cost: 0, station: [], deployed: [], both: [] },

  // Level 2 — sector 1
  { id: 'l2-1',  name: 'L2 S1',  sector: 1,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-2',  name: 'L2 S1',  sector: 1,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-3',  name: 'L2 S1',  sector: 1,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-4',  name: 'L2 S1',  sector: 1,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  // Level 2 — sector 2
  { id: 'l2-5',  name: 'L2 S2',  sector: 2,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-6',  name: 'L2 S2',  sector: 2,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-7',  name: 'L2 S2',  sector: 2,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-8',  name: 'L2 S2',  sector: 2,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  // Level 2 — sector 3
  { id: 'l2-9',  name: 'L2 S3',  sector: 3,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-10', name: 'L2 S3',  sector: 3,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-11', name: 'L2 S3',  sector: 3,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-12', name: 'L2 S3',  sector: 3,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  // Level 2 — sector 4
  { id: 'l2-13', name: 'L2 S4',  sector: 4,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-14', name: 'L2 S4',  sector: 4,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-15', name: 'L2 S4',  sector: 4,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-16', name: 'L2 S4',  sector: 4,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  // Level 2 — sector 5
  { id: 'l2-17', name: 'L2 S5',  sector: 5,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-18', name: 'L2 S5',  sector: 5,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-19', name: 'L2 S5',  sector: 5,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-20', name: 'L2 S5',  sector: 5,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  // Level 2 — sector 6
  { id: 'l2-21', name: 'L2 S6',  sector: 6,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-22', name: 'L2 S6',  sector: 6,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-23', name: 'L2 S6',  sector: 6,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-24', name: 'L2 S6',  sector: 6,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  // Level 2 — sector 7
  { id: 'l2-25', name: 'L2 S7',  sector: 7,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-26', name: 'L2 S7',  sector: 7,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-27', name: 'L2 S7',  sector: 7,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-28', name: 'L2 S7',  sector: 7,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  // Level 2 — sector 8
  { id: 'l2-29', name: 'L2 S8',  sector: 8,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-30', name: 'L2 S8',  sector: 8,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-31', name: 'L2 S8',  sector: 8,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-32', name: 'L2 S8',  sector: 8,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  // Level 2 — sector 9
  { id: 'l2-33', name: 'L2 S9',  sector: 9,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-34', name: 'L2 S9',  sector: 9,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-35', name: 'L2 S9',  sector: 9,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-36', name: 'L2 S9',  sector: 9,  level: 2, cost: 0, station: [], deployed: [], both: [] },
  // Level 2 — sector 10
  { id: 'l2-37', name: 'L2 S10', sector: 10, level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-38', name: 'L2 S10', sector: 10, level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-39', name: 'L2 S10', sector: 10, level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-40', name: 'L2 S10', sector: 10, level: 2, cost: 0, station: [], deployed: [], both: [] },
  // Level 2 — sector 11
  { id: 'l2-41', name: 'L2 S11', sector: 11, level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-42', name: 'L2 S11', sector: 11, level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-43', name: 'L2 S11', sector: 11, level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-44', name: 'L2 S11', sector: 11, level: 2, cost: 0, station: [], deployed: [], both: [] },
  // Level 2 — sector 12
  { id: 'l2-45', name: 'L2 S12', sector: 12, level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-46', name: 'L2 S12', sector: 12, level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-47', name: 'L2 S12', sector: 12, level: 2, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l2-48', name: 'L2 S12', sector: 12, level: 2, cost: 0, station: [], deployed: [], both: [] },

  // Level 3 — sector 1
  { id: 'l3-1',  name: 'L3 S1',  sector: 1,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-2',  name: 'L3 S1',  sector: 1,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-3',  name: 'L3 S1',  sector: 1,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  // Level 3 — sector 2
  { id: 'l3-4',  name: 'L3 S2',  sector: 2,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-5',  name: 'L3 S2',  sector: 2,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-6',  name: 'L3 S2',  sector: 2,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  // Level 3 — sector 3
  { id: 'l3-7',  name: 'L3 S3',  sector: 3,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-8',  name: 'L3 S3',  sector: 3,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-9',  name: 'L3 S3',  sector: 3,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  // Level 3 — sector 4
  { id: 'l3-10', name: 'L3 S4',  sector: 4,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-11', name: 'L3 S4',  sector: 4,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-12', name: 'L3 S4',  sector: 4,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  // Level 3 — sector 5
  { id: 'l3-13', name: 'L3 S5',  sector: 5,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-14', name: 'L3 S5',  sector: 5,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-15', name: 'L3 S5',  sector: 5,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  // Level 3 — sector 6
  { id: 'l3-16', name: 'L3 S6',  sector: 6,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-17', name: 'L3 S6',  sector: 6,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-18', name: 'L3 S6',  sector: 6,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  // Level 3 — sector 7
  { id: 'l3-19', name: 'L3 S7',  sector: 7,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-20', name: 'L3 S7',  sector: 7,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-21', name: 'L3 S7',  sector: 7,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  // Level 3 — sector 8
  { id: 'l3-22', name: 'L3 S8',  sector: 8,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-23', name: 'L3 S8',  sector: 8,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-24', name: 'L3 S8',  sector: 8,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  // Level 3 — sector 9
  { id: 'l3-25', name: 'L3 S9',  sector: 9,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-26', name: 'L3 S9',  sector: 9,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-27', name: 'L3 S9',  sector: 9,  level: 3, cost: 0, station: [], deployed: [], both: [] },
  // Level 3 — sector 10
  { id: 'l3-28', name: 'L3 S10', sector: 10, level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-29', name: 'L3 S10', sector: 10, level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-30', name: 'L3 S10', sector: 10, level: 3, cost: 0, station: [], deployed: [], both: [] },
  // Level 3 — sector 11
  { id: 'l3-31', name: 'L3 S11', sector: 11, level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-32', name: 'L3 S11', sector: 11, level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-33', name: 'L3 S11', sector: 11, level: 3, cost: 0, station: [], deployed: [], both: [] },
  // Level 3 — sector 12
  { id: 'l3-34', name: 'L3 S12', sector: 12, level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-35', name: 'L3 S12', sector: 12, level: 3, cost: 0, station: [], deployed: [], both: [] },
  { id: 'l3-36', name: 'L3 S12', sector: 12, level: 3, cost: 0, station: [], deployed: [], both: [] },
]

export const SHIP_CARDS_BY_ID    = Object.fromEntries(SHIP_CARDS.map(c    => [c.id, c]))
export const STARTER_CARDS_BY_ID = Object.fromEntries(STARTER_CARDS.map(c => [c.id, c]))
export const COLONY_CARDS_BY_ID  = Object.fromEntries(COLONY_CARDS.map(c  => [c.id, c]))
