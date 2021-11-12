import {
    Dashboard,
    Meals,
    Settings,
    Search,
    Planner,
} from 'ui';

import { 
    IoFastFood, 
    IoCalendar,
    IoSearch, 
    IoPersonCircle, 
    IoChatbubble,  
    IoLogOut,
    IoSettingsSharp, 
    IoLogIn 
} from "react-icons/io5";

export const dashRoutes = {
    dashboard: {
        title: 'Dashboard',
        component: Dashboard,
        path: '/dashboard',
        private: true
    },
    meals: {
        title: 'Meals',
        component: Meals,
        path: '/meals',
        icon: IoFastFood,
        private: true
    },
    search: {
        title: 'Search',
        component: Search,
        path: '/search',
        icon: IoSearch,
        private: true
    },
    planner: {
        title: 'Planner',
        component: Planner,
        path: '/planner',
        icon: IoCalendar,
        private: true
    },
    settings: {
        title: 'Settings',
        component: Settings,
        path: '/settings',
        icon: IoSettingsSharp,
        private: true
    },
};