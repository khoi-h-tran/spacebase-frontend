import type { MechanicKey } from './types'

export const MECHANICS: Record<MechanicKey, { label: string; description: string }> = {
  money:         { label: 'Money',        description: 'Gain coins'                                           },
  income:        { label: 'Income',       description: 'Raise income floor permanently'                       },
  vp:            { label: 'VP',           description: 'Gain victory points'                                  },
  charge:        { label: 'Charge',       description: 'Gain charge tokens on this sector'                    },
  chain_right:   { label: '→',            description: 'Also collect the next sector\'s rewards'              },
  chain_left:    { label: '←',            description: 'Also collect the previous sector\'s rewards'          },
  shift_die:     { label: 'Shift Die',    description: 'Increase the effective die value by up to N'          },
  set_die:       { label: 'Set Die',      description: 'Before rolling, fix one die to any value'             },
  buy_card:      { label: 'Buy Card',     description: 'Buy a card from the market'                           },
  claim_cards:   { label: 'Claim Cards',  description: 'Claim free cards from the market; still get to buy'  },
  swap_sectors:  { label: 'Swap Sectors', description: 'Swap cards between two of your sectors'               },
  exchange_card: { label: 'Exchange',     description: 'Exchange this card with any card on your board'       },
  double:        { label: '2×',           description: 'Double all rewards this activation'                   },
  place_charge:  { label: 'Place Charge', description: 'Place a charge token on any sector'                  },
  you_win:       { label: 'You Win',      description: 'Instant victory when charge requirement is met'       },
  reroll_die:    { label: 'Reroll',       description: 'Reroll one or both dice'                                },
}
