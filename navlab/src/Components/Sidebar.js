import React from 'react'
import { SidebarData } from './SidebarData';
import '../App.css'
import Switch from '@mui/material/Switch';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Sidebar() {
  return (
    <div className="Sidebar">
        <ul className="SidebarList">
            {SidebarData.map((val,key)=> {
                return (
                    <li key = {key}
                    className = "row"
                    onClick={() => {window.location.pathname = val.link}}>
                        {" "}
                        <div id="icon" className = "spaceList">{val.icon}</div>{" "}
                        <div id="title">{val.title}</div> 
                    </li>
                )
            })}
        </ul>
        <Switch {...label} />
        <IconButton aria-label="pluscircle" className="addButton" size="large">
            <AddCircleIcon fontSize="large" color ="primary" />
        </IconButton>
    </div>
  )
}
