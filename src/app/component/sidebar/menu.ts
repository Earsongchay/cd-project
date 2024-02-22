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
      icon: 'person',
      link: '/list-artist',

    },
    // {
    //   name: 'Interview',
    //   icon: 'history_toggle_off',
    //   link: '/interview',
    //
    // },
    // {
    //   name: 'Candidate',
    //   icon: 'person_add',
    //   link: '/candidate',
    //
    // },
    // {
    //   name: 'Demand',
    //   icon: 'auto_graph',
    //   link: '/demand',
    //
    // },
    // {
    //   name: 'Report',
    //   icon: 'bar_chart',
    //   link: '/candidate/report',
    // },
    // {
    //   name: 'Advance Report',
    //   icon: 'query_stats',
    //   link: '/candidate/advance-report',
    // },
    // {
    //   name: 'Activity',
    //   icon: 'list_alt',
    //   link: '/activities',
    // },
    // {
    //   name: 'Reminder',
    //   icon: 'notification_important',
    //   link: '/reminders',
    // },
    // {
    //   name: 'Setting',
    //   icon: 'settings',
    //   children: [
    //     {
    //       name: 'Company Profile',
    //       icon: 'home_work',
    //       link: '/setting/feature-company-profile',
    //     },
    //     {
    //       name: 'File Manager',
    //       icon: 'snippet_folder',
    //       link: '/setting/file-manager',
    //     },
    //     {
    //       name: 'Interview Template',
    //       icon: 'social_distance',
    //       link: '/setting/interviewtemplate',
    //     },
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
    //   ],
    // },
  ];
