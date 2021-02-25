import { OptionType } from 'types/options';

export const gameStatusList: OptionType[] = [
  { value: 1, label: 'Owned' },
  { value: 2, label: 'Wishlist' },
];

export const publishersList: OptionType[] = [
  { value: 0, label: 'All' },
  { value: 1, label: 'Oink Games' },
  { value: 2, label: 'Repos Production' },
];

export const tagsList: OptionType[] = [
  { value: 'cooperative', label: 'Cooperative' },
  { value: 'bluffing', label: 'Bluffing' },
  { value: 'two-teams', label: '2 Teams' },
  { value: 'individual', label: 'Individual' },
  { value: 'discussion', label: 'Discussion' },
  { value: 'board', label: 'Board' },
  { value: 'card', label: 'Card' },
];
