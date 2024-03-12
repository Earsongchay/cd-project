export interface MenuNode {
    name: string;
    icon?: string;
    link?: string;
    children?: MenuNode[];
  }

  export const MENU_DATA: MenuNode[] = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      link: '/dashboard',
    },
    {
      name: 'Artist',
      icon: 'wc',
      link: '/list-artist/list',

    },
    {
      name: 'Album',
      icon: 'multitrack_audio',
      link: '/list-album/list',
    },
    // {
    //   name: 'Track',
    //   icon: 'audiotrack',
    //   link: '/track',
    //
    // },
    // {
    //   name: 'Vinyl',
    //   icon: 'album',
    //   link: '/vinyl',
    //
    // },
    // {
    //   name: 'Shopping',
    //   icon: 'shopping_basket',
    //   link: '/shopping',
    //
    // },
    // {
    //   name: 'Cart',
    //   icon: 'shopping_cart',
    //   link: '/demand',
    //
    // },
    // {
    //   name: 'Setting',
    //   icon: 'settings',
    //   children: [
    //     {
    //       name: 'Profile',
    //       icon: 'manage_accounts',
    //       link: '/dashboard',
    //     },
    //     {
    //       name: 'Progressing',
    //       icon: 'connect_without_contact',
    //       link: '/setting/interviewtemplate',
    //     },
    //   ],
    // }
  ];
