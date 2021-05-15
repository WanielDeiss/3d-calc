export type FilamentColors =
  | 'red'
  | 'blue'
  | 'yellow'
  | 'brown'
  | 'white'
  | 'gray'
  | 'orange'
  | 'black'
  | 'green'
  | 'gold'
  | 'pink'
  | 'purple'
  | 'transparent'
  | 'copper';
export type FilamentTypes = 'pla' | 'petg';

export interface Filament {
  type: FilamentTypes;
  name: string;
  color: FilamentColors;
  weight: number;
  price: number;
}
