import classes from "./ChatFriend.module.scss";

const ChatFriend = (props) => {
    return (
        <li className={classes.rightSideFriend}>
            <div className={classes.rightSideProfileContainer}>
              <img
                className={classes.userPicture}
                src={props.USERS.src}
                alt="Profile picture"
              ></img>
              <span className={classes.rightSideOnline}></span>
            </div>
            <span className={classes.rightSideUserName}>{props.USERS.userName}</span>
          </li>

    );
}

export default ChatFriend;