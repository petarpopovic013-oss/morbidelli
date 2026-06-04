export const MOTORCYCLE_CATEGORIES = [
  'Scooter', 'Trail', 'Street fighter', 'Cruisers', 'Naked'
] as const;

export type MotorcycleCategory = typeof MOTORCYCLE_CATEGORIES[number];
