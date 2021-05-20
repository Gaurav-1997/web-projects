import React from "react";
import {Button, IconButton} from "@material-ui/core";
import { Add, Inbox, Star, Schedule, Send, InsertDriveFile, ExpandMore , Person, Duo, Phone} from "@material-ui/icons";
import "./styles/Sidebar.css";
import SidebarOptions from "./SidebarOptions";

const Sidebar = props => {

  const iconSelected =(id)=>{
    console.log(id);
      return id;
  };

  return (
    <div className="sidebar">
      <Button 
      className="sidebar_compose"
      startIcon={
                <Add fontSize="large" />}>
        Compose
        </Button>

        <SidebarOptions Icon={Inbox} title="Inbox" number={54} selected={iconSelected && "inbox"} onClick={iconSelected("inbox")}/>
        <SidebarOptions Icon={Star} title="Starred" number={5} selected={iconSelected && "starred"} onClick={iconSelected("starred")}/>
        <SidebarOptions Icon={Schedule} title="Snoozed" number={0} selected={iconSelected && "snoozed"} onClick={iconSelected("snoozed")}/>
        <SidebarOptions Icon={Send} title="Sent" number={10} selected={iconSelected && "sent"} onClick={iconSelected("sent")}/>
        <SidebarOptions Icon={InsertDriveFile} title="Drafts" number={0} selected={iconSelected && "draft"} onClick={iconSelected("drafts")}/>
        <SidebarOptions Icon={ExpandMore} title="More" number={5} selected={true} onClick={iconSelected("more")}/>

        <div className="sidebar_footer">
          <div className="sidebar_footerIcons">
            <IconButton>
              <Person />
            </IconButton>
            <IconButton>
              <Duo />
            </IconButton>
            <IconButton>
              <Phone />
            </IconButton>
          </div>
        </div>
    </div>
  );
};

export default Sidebar;