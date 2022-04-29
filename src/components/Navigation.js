import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Navigation.module.scss";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (state) => {
    if (state === "agree") {
      setOpen(false);
      navigate("/auth");
      setIsLoggedIn(!isLoggedIn);
    } else {
      setOpen(false);
    }
  };

  const login = () => {
    navigate("/");
    setIsLoggedIn(!isLoggedIn);
  };

  const toggleAuth = () => {
    isLoggedIn ? login() : handleClickOpen();
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <header className={classes.header}>
        <Link to="/">
          <div className={classes.logo}>Social Media App</div>
        </Link>
        <nav>
          <ul className={classes.menu}>
            <li className={classes.menuItem}>
              <Link to="/profile">Profile</Link>
            </li>

            <li className={classes.menuItem}>
              <Link to="/friends">Friends</Link>
            </li>

            <li className={classes.menuItem}>
              <Link to="/chat">Chat</Link>
            </li>

            <li className={classes.menuItem}>
              <button onClick={toggleAuth}>
                {isLoggedIn ? "Login" : "Logout"}
              </button>
            </li>
          </ul>
        </nav>
        <div className={classes.topMenu}>
          <MenuIcon className={classes.menuIcon} onClick={handleClick} />

          <Menu anchorEl={anchorEl} open={openMenu} onClose={handleCloseMenu}>
            <MenuItem>
              <Link className={classes.menuLink} to="/profile">
                Profile
              </Link>
            </MenuItem>
            <MenuItem>Friends</MenuItem>
            <MenuItem>Chat</MenuItem>
          </Menu>
        </div>
      </header>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to log out?"}
          </DialogTitle>
          {/* <DialogContent>
            <DialogContentText id="alert-dialog-description">

            </DialogContentText>
          </DialogContent> */}
          <DialogActions>
            <Button onClick={() => handleClose("disagree")}>No</Button>
            <Button onClick={() => handleClose("agree")} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Navigation;
