import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { blueGrey } from '@mui/material/colors';
// import Switch from '@mui/material/Switch';

// const label = { inputProps: { 'aria-label': 'Switch demo' } };


export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon sx={{ color: blueGrey[500] }} />,
        link: "/home"
    },
    {
        title: "Friends",
        icon: <PersonIcon sx={{ color: blueGrey[500] }}/>,
        link: "/friends"
    },
    {
        title: "Settings",
        icon: <SettingsIcon sx={{ color: blueGrey[500] }}/>,
        link: "/settings"
    },
    {
        title: "Marketplace",
        icon: <StorefrontIcon sx={{ color: blueGrey[500] }}/>,
        link: "/marketplace"
    },
    {
        title: "Profile",
        icon: <AccountBoxIcon sx={{ color: blueGrey[500] }}/>,
        link: "/profile"
    },
    {
        title: "Groups",
        icon: <GroupIcon sx={{ color: blueGrey[500] }}/>,
        link: "/groups"
    },
    {
        title: "Pages",
        icon: <ArticleIcon sx={{ color: blueGrey[500] }}/>,
        link: "/pages"
    },
    {
        title: "",
        icon: <ModeNightIcon sx={{ color: blueGrey[500] }}/>,
        link: "/home"
    },
]