import classes from "./CommentsSection.module.scss";
import newPicture from "../../../../assets/firephoto.jpeg";

const CommentsSection = (props) => {
  return (
    <div className={classes.comments}>
      <a href="#">
        <img
          className={classes["rounded-circle"]}
          id={classes.profilepic}
          src={props.commentData.profilePic}
          alt="Profile picture"
        />
      </a>

      <div className={classes.commentInfo}>
        <div>{props.commentData.username}</div>
        <div>{props.commentData.date}</div>
        <div>{props.commentData.comment}</div>
      </div>
    </div>
  );
};

export default CommentsSection;
