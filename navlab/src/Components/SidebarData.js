import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import ModeNightIcon from '@mui/icons-material/ModeNight';
// import Switch from '@mui/material/Switch';



export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Friends",
        icon: <PersonIcon />,
        link: "/friends"
    },
    {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "/settings"
    },
    {
        title: "Marketplace",
        icon: <StorefrontIcon />,
        link: "/marketplace"
    },
    {
        title: "Profile",
        icon: <AccountBoxIcon />,
        link: "/profile"
    },
    {
        title: "Groups",
        icon: <GroupIcon />,
        link: "/groups"
    },
    {
        title: "Pages",
        icon: <ArticleIcon />,
        link: "/pages"
    },
    {
        title: "Home",
        icon: <ModeNightIcon />,
        link: "/home"
    },
]