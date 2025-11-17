import {
  Armchair,
  Building,
  CalendarDays,
  ChartNoAxesCombined,
  Film,
  PartyPopper,
  ScreenShare,
  User,
} from 'lucide-react';

export const navs = [
  {
    name: 'Thống kê',
    url: '/admin/statistical',
    icon: <ChartNoAxesCombined />,
  },
  {
    name: 'Quản lý phim',
    url: '/admin/movies',
    icon: <Film />,
  },
  {
    name: 'Quản lý rạp',
    url: '/admin/cinemas',
    icon: <Building />,
  },
  {
    name: 'Quản lý phòng chiếu',
    url: '/admin/screens',
    icon: <ScreenShare />,
  },
  {
    name: 'Quản lý loại phòng chiếu',
    url: '/admin/screen-types',
    icon: <ScreenShare />,
  },
  {
    name: 'Quản lý ghế',
    url: '/admin/seats',
    icon: <Armchair />,
  },
  {
    name: 'Quản lý loại ghế',
    url: '/admin/seats-types',
    icon: <Armchair />,
  },
  {
    name: 'Quản lý suất chiếu',
    url: '/admin/showtimes',
    icon: <CalendarDays />,
  },
  {
    name: 'Quản lý ngày lễ',
    url: '/admin/holidays',
    icon: <PartyPopper />
  },
  {
    name: 'Quản lý user',
    url: '/admin/users',
    icon: <User />,
  },
];
