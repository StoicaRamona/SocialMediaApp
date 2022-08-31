import classes from "./RightContent.module.scss";
import topPicture from "../../../assets/town.jpeg";
import gift from "../../../assets/gift.png";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import Switch from "@mui/material/Switch";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import ContactsIcon from "@mui/icons-material/Contacts";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
// import avatar1 from "../../../assets/avatar1.jpeg";
// import avatar2 from "../../../assets/avatar2.jpeg";
// import avatar3 from "../../../assets/avatar3.jpeg";
// import avatar4 from "../../../assets/avatar4.jpeg";
// import avatar5 from "../../../assets/avatar5.jpeg";
import ChatFriend from "./ChatFriends/ChatFriend";
import { useState } from "react";

function RightContent() {
  const USERS = [
    { id: 0, src: "images/avatar1.jpeg", userName: "Melinda Wood" },

    { id: 1, src: "images//avatar5.jpeg", userName: "Lee Simpson" },

    { id: 2, src: "images//avatar3.jpeg", userName: "Alex Morgan" },

    { id: 3, src: "images//avatar4.jpeg", userName: "Bert Estrada" },

    { id: 4, src: "images//avatar2.jpeg", userName: "Anita Foster" },
  ];

  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prevState) => {
      return !prevState;
    });
  };

 

  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList((prevState) => {
      return !prevState;
    });
  };


  const [query, setQuery] = useState("");

  const [visible, setInvisible] = useState(true);

  const hideThis = () => {
    setInvisible((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={classes.rightSideContent}>
      <div className={classes.addSection}>
        <div>
          {visible && (
            <div className={classes.birthdayContainer}>
              <img className={classes.gift} src={gift} alt="gift logo"></img>
              <span className={classes.birthdayText}>
                <b>Adele Arnold</b> and <b>2 other friends</b> have a birhday
                today.
              </span>
              <CloseIcon onClick={hideThis}></CloseIcon>
            </div>
          )}
        </div>
        <img
          className={classes.topPicture}
          src={topPicture}
          alt="add picture"
        ></img>
      </div>
      <div className={classes.rightTopChat}>
        <span>Contacts</span>
        <div className={classes.rightChatIcons}>
          <VideoCallIcon />
          <SearchIcon onClick={toggleList}></SearchIcon>
          {showList && (
          
            <input
              type="text"
              placeholder="Search..."
              className={classes.searchNameFilter}
              onChange={(e) => setQuery(e.target.value)} 
            />
           

          )}
 
          <MoreHorizIcon onClick={toggleOptions}></MoreHorizIcon>
          {showOptions && (
            <ul className={classes.listOptionRight}>
              <li className={classes.listItemOptionRight}>
                <li className={classes.listItemOptionRightLeft}>
                  <PhoneCallbackIcon className={classes.listOptionRightIcon} />
                  <span>Incoming call sounds</span>
                </li>
                <Switch defaultChecked />
              </li>
              <li className={classes.listItemOptionRight}>
                <li className={classes.listItemOptionRightLeft}>
                  <VolumeMuteIcon className={classes.listOptionRightIcon} />
                  <span>Message sounds</span>
                </li>
                <Switch />
              </li>
              <li className={classes.listItemOptionRight}>
                <li className={classes.listItemOptionRightLeft}>
                  <ContactsIcon className={classes.listOptionRightIcon} />
                  <span>Show contacts</span>
                </li>
                <Switch defaultChecked />
              </li>
            </ul>
          )}
        </div>
      </div>
      <ul className={classes.rightSideFriendList}>
        {USERS.filter((u) => u.userName.toLowerCase().includes(query)).map(
          (u) => {
            return <ChatFriend USERS={u} key={u.id} />;
          }
        )}
      </ul>
    </div>
  );
}

export default RightContent;
