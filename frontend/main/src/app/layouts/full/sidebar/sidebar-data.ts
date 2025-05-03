import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'solar:atom-line-duotone',
    route: '/dashboard',
  },
  {
    divider: true,
    navCap: 'Apps',
  },
  {
   displayName: 'jobs',
    iconName: 'solar:atom-line-duotone',
    route: '/jobs',
  
  },
  {
    displayName: 'Apply for Jobs',
    iconName: 'solar:calendar-mark-line-duotone',
    route: '/apply',
  },
  {
    displayName: 'contacts',
    iconName: 'solar:atom-line-duotone',
    route: '/sent',
  },

  {
    displayName: 'Courses',
    iconName: 'solar:book-bookmark-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/apps/courses',
    chip: true,
    external: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },

];
