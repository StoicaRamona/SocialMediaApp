import classes from "./Newsfeed.module.scss";
import newPicture from "../../../assets/oldtown.jpg";
import { FaEllipsisH, FaThumbsUp, FaComment, FaShare } from "react-icons/fa";
import CommentsSection from "./Comments/CommentsSection";
import { useState } from "react";

const Newsfeed = (props) => {
  // const todaysDate = new Date('29.03.2021'); // to be used with input field to generate new comment

  // const [reactions, setReactions] = useState({
  //   likesNumber: props.postData.numberOfLikes,
  //   sharesNumber: props.postData.numberOfShares,
  // });

  const [likes, setLikes] = useState(props.postData.numberOfLikes);
  const [shares, setShares] = useState(props.postData.numberOfShares)

  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false)

  const toggleLikes = () => {
    setLikes(isLiked ? likes -1 : likes +1)
    setIsLiked(!isLiked)
  }

  const toggleShares = () => {
    setShares(isShared ? shares -1 : shares + 1)
    setIsShared(!isShared)
  }

  const [profileOptionsVisible, setProfileOptionVisible] = useState(false);


  // const toggleReactions = (reactionType) => {
  //   if (reactionType === "likes" && isLiked) {
  //     setReactions((prevState) => {
  //       return {
  //         ...prevState,
  //         likesNumber: prevState.likesNumber - 1,
  //       };
  //     });
  //   } else if (reactionType === "shares" && isShared) {
  //     setReactions((prevState) => {
  //       return {
  //         ...prevState,
  //         sharesNumber: prevState.sharesNumber - 1,
  //       };
  //     });
  //   } 
    
  //   else {
  //     setReactions((prevState) => {
  //       return {
  //         ...prevState,
  //         likesNumber: prevState.likesNumber + 1,
  //         sharesNumber: prevState.sharesNumber + 1,
  //       };
  //     });

  //   }
    
  //   setIsLiked(!isLiked)
  //   setIsShared(!isShared)
  // };

  const deleteThisPost = () => {
    props.removePost(props.postData.id);
  };

  const toggleProfileState = () => {
    setProfileOptionVisible( (prevState) => {
      return !prevState;
    })
  }

  return (
    <div className={classes.newsFeed}>
      <div className={classes.mainDiv}>
        <div className={classes.userInfo}>
          <a href="#">
            <img
              id={classes.profilepic}
              src={props.postData.profileImg}
              alt="Profile picture"
            />
            <span id={classes["username"]}>{props.postData.username}</span>
          </a>
          <div className={classes["context-menu"]} onClick={toggleProfileState} tabIndex="1">
          {/* <div className={classes["context-menu"]} onClick={toggleProfileState} onBlur={toggleProfileState} tabIndex="1"> */}
            <a href="#" id="context-menu-button">
              <FaEllipsisH />
            </a>
            {profileOptionsVisible && (
              <div className={classes["context-menu-dropdown"]}>
                <button onClick={deleteThisPost}>Delete this post</button>
              </div>
            )}
          </div>
        </div>

        <div>
          <img
            className={classes["post-image"]}
            src={props.postData.postImg}
            alt="New picture"
          />
          <p id={classes["postTitle"]}>{props.postData.text}</p>
        </div>
        <div className={classes["likes-shares"]}>
          <a href="#">
            <FaThumbsUp className={classes.postIcon}/>
            <span>{likes} likes</span>
          </a>
          <a href="#">
            <FaShare className={classes.postIcon} />
            <span>{shares} shares</span>
          </a>
        </div>
        <div className={classes["post-reaction"]}>
          <a
            href="#"
            id={classes["likeButton"]}
            onClick={toggleLikes}
          >
            <FaThumbsUp className={classes.postIcon} />
            <span>Like</span>
          </a>
          <a id={classes["commentButton"]}>
            <FaComment className={classes.postIcon} />
            <span>Comment </span>
          </a>
          <a
            href="#"
            id={classes["shareButton"]}
            onClick={toggleShares}
          >
            <FaShare className={classes.postIcon} />
            <span>Share</span>
          </a>
        </div>
        <div className={classes["comment-box-container"]}>
          <div className={classes.commentContent}>
            <input type="text" placeholder="Write a comment..." />
          </div>
          {props.postData.comments.map((comment) => {
            return <CommentsSection commentData={comment}></CommentsSection>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
