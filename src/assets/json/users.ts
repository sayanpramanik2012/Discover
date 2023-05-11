import { NavigationItem } from '../../app/brand-bar/navigation-items.enum';

export const users = [
  {
    name: 'Test',
    visibleItems: [NavigationItem.Mb, NavigationItem.Ct],
    per: 1,
  },
  {
    name: 'Omkar',
    visibleItems: [NavigationItem.Mb, NavigationItem.Ct, NavigationItem.Fs],
    per: 2,
  },
  {
    name: 'Sayan',
    visibleItems: [
      NavigationItem.Mb,
      NavigationItem.Ct,
      NavigationItem.Bt,
      NavigationItem.Fs,
    ],
    per: 3,
  },
];
