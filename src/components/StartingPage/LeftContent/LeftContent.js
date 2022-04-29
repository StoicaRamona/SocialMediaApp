import classes from "./LeftContent.module.scss";
import ListItemButton from "@mui/material/ListItemButton";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import HistoryIcon from "@mui/icons-material/History";
import EventIcon from "@mui/icons-material/Event";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import List from "@mui/material/List";
import { useState } from "react";
import { Divider } from "@mui/material";

const LeftContent = () => {
  
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.leftSideContent}>
      <List className={classes.leftSideWrapper }>
        <ListItemButton className={classes.leftSideListItem}>
          <PeopleIcon className={classes.leftIcon} htmlColor="rgb(0, 89, 255)" />
          <span className={classes.leftItemText}>Friends</span>
        </ListItemButton>
        <ListItemButton className={classes.leftSideListItem}>
          <GroupsIcon className={classes.leftIcon} htmlColor="lightseagreen" />
          <span className={classes.leftItemText}>Groups</span>
        </ListItemButton>
        <ListItemButton className={classes.leftSideListItem}>
          <OndemandVideoIcon className={classes.leftIcon} htmlColor="rgb(0, 89, 255)" />
          <span className={classes.leftItemText}>Videos</span>
        </ListItemButton>
        <ListItemButton className={classes.leftSideListItem}>
          <HistoryIcon className={classes.leftIcon} htmlColor="gold"/>
          <span className={classes.leftItemText}>Memories</span>
        </ListItemButton>
        <ListItemButton className={classes.leftSideListItem}>
          <EventIcon className={classes.leftIcon} htmlColor="rgb(255, 123, 0)" />
          <span className={classes.leftItemText}>Events</span>
        </ListItemButton>
        <ListItemButton className={classes.leftSideListItem}>
          <BookmarkIcon className={classes.leftIcon} htmlColor="darkmagenta"/>
          <span className={classes.leftItemText}>Saved</span>
        </ListItemButton>
        <ListItemButton className={classes.leftSideListItem}>
          <VideogameAssetIcon className={classes.leftIcon} htmlColor="rgb(0, 89, 255)" />
          <span className={classes.leftItemText}>Games</span>
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItemButton className={classes.leftSideListItem}>
              <BloodtypeIcon className={classes.leftIcon} htmlColor="red" />
              <span className={classes.leftItemText}>Blood Donations </span>
            </ListItemButton>
            <ListItemButton className={classes.leftSideListItem}>
              <StarIcon className={classes.leftIcon} htmlColor="gold" />
              <span className={classes.leftItemText}>Favorites</span>
            </ListItemButton>
              <ListItemButton className={classes.leftSideListItem}>
              <VolunteerActivismRoundedIcon className={classes.leftIcon} htmlColor="red" />
              <span className={classes.leftItemText}> Fundraisers </span>
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick}>
          {open ? (
            <>
              {" "}
              <ExpandLess className={classes.leftIcon} />{" "}
              <span> See less </span>{" "}
            </>
          ) : (
            <>
              {" "}
              <ExpandMore className={classes.leftIcon} />{" "}
              <span> See more </span>{" "}
            </>
          )}
        </ListItemButton>

        <Divider></Divider>
      </List>
    </div>
  );
};

export default LeftContent;
