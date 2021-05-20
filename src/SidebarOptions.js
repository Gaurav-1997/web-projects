import React from "react";
import {Button} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import "./styles/SidebarOptions.css";

const SidebarOptions = ({Icon, title, number, selected}) => {
  return (
    <div className={`sidebar_option ${selected && 'sidebar_option-active'}`}>
    <Icon/>
    <h3>{title}</h3>
    <p>{number}</p>
    </div>
  );
};

export default SidebarOptions;