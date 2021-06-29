import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TuneIcon from '@material-ui/icons/Tune';
import PieChartIcon from '@material-ui/icons/PieChart';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

export const SidebarData = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/home'
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/dashboard'
  },
  {
    title: 'Tables',
    icon: <TuneIcon />,
    link: '/tables'
  },
  {
    title: 'Charts',
    icon: <PieChartIcon />,
    link: '/charts'
  },
  {
    title: 'Popups',
    icon: <ChatBubbleOutlineIcon />,
    link: '/popups'
  },
]