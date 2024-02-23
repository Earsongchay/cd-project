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
      link: '/list-artist/create',
    },
    {
      name: 'Track',
      icon: 'audiotrack',
      link: '/track',

    },
    {
      name: 'Vinyl',
      icon: 'album',
      link: '/vinyl',

    },
    {
      name: 'Shopping',
      icon: 'shopping_basket',
      link: '/shopping',

    },
    {
      name: 'Cart',
      icon: 'shopping_cart',
      link: '/demand',

    },
    {
      name: 'Setting',
      icon: 'settings',
      children: [
        {
          name: 'Profile',
          icon: 'manage_accounts',
          link: '/dashboard',
        },
        {
          name: 'Progressing',
          icon: 'connect_without_contact',
          link: '/setting/interviewtemplate',
        },
    //     {
    //       name: 'Interview Status',
    //       icon: 'fact_check',
    //       link: '/setting/interview-status',
    //     },
    //     {
    //       name: 'Job',
    //       icon: 'hail',
    //       link: '/setting/job',
    //     },
    //     {
    //       name: 'Project',
    //       icon: 'assignment_ind',
    //       link: '/setting/projects',
    //     },
    //     {
    //       name: 'Mail Configuration',
    //       icon: 'mark_email_read',
    //       link: '/setting/mail-configuration',
    //     },
    //     {
    //       name: 'Mail Template',
    //       icon: 'view_quilt',
    //       link: '/setting/mailtemplate',
    //     },
    //     {
    //       name: 'System Configuration',
    //       icon: 'settings_applications',
    //       link: '/setting/system-config',
    //     },
    //     {
    //       name: 'Status Candidate',
    //       icon: 'how_to_reg',
    //       link: '/setting/statuscandidate',
    //     },
    //     {
    //       name: 'University',
    //       icon: 'school',
    //       link: '/setting/university',
    //     },
    //   ],
    // },
    // {
    //   name: 'Administration',
    //   icon: 'admin_panel_settings',
    //   children: [
    //     {
    //       name: 'User',
    //       icon: 'people_outline',
    //       link: 'istration/users',
    //     },
    //     {
    //       name: 'Role',
    //       icon: 'policy',
    //       link: 'istration/roles',
    //     },
    //     {
    //       name: 'Group',
    //       icon: 'groups',
    //       link: 'istration/groups',
    //     },
      ],
    }
  ];
