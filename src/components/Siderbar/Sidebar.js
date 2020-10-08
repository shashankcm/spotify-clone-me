import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import SidebarOptions from "./SidebarOptions/SidebarOptions";

import "./Sidebar.css";
import { useStoreProviderValue } from "../../store/DataLayer";

function Sidebar() {
  const [{ playlist }] = useStoreProviderValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />

      <SidebarOptions title="Home" Icon={HomeIcon} />
      <SidebarOptions title="Search" Icon={SearchIcon} />
      <SidebarOptions title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />
      {playlist?.items?.map((eachPlayList, index) => (
        <SidebarOptions key={index} title={eachPlayList.name} />
      ))}
    </div>
  );
}

export default Sidebar;
