import { useEffect, useState } from "react";

const POST_DATA = [
  {
    id: 0,
    username: "Melinda Wood",
    postDate: "20/07/2022",
    numberOfLikes: 45,
    numberOfShares: 12,
    profileImg: "images/avatar1.jpeg",
    postImg:"images/oldtown.jpg",
    text: "This is my new dynamic post",
    comments: [
      {
        username: "Bert Estrada",
        profilePic:"images//avatar4.jpeg",
        date: "21/09/2021",
        comment: "This is my first dynamic content",
      },
      {
        username: "Alex Morgan",
        profilePic:"images//avatar3.jpeg",
        date: "22/10/2021",
        comment: "This is my second dynamic content",
      },
    ],
  },
  {
    id: 1,
    username: "Lee Simpson",
    postDate: "20/09/2021",
    numberOfLikes: 78,
    numberOfShares: 12,
    profileImg: "images//avatar5.jpeg",
    postImg:"images/citybeach.jpg",
    text: "This is my second dynamic post",
    comments: [
      {
        username: "Anita Foster",
        profilePic:"images//avatar2.jpeg",
        date: "23/09/2021",
        comment: "This is my second dynamic content",
      },
    ],
  },
];
const usePost = (interval) => {
  const [post, setPost] = useState({
    postData: POST_DATA,
    changed: 0,
  });

  useEffect(() => {
    const postInterval = setInterval(() => {
      setPost((prevState) => {
        if (prevState.postData.length > 3) {
          clearInterval(postInterval);
        }

        let newPost;
        if (prevState.postData.length > 0) {
          newPost = {
            ...POST_DATA[prevState.postData.length % 2],
            id: prevState.postData.length * Math.random * 100,
          };
        } else {
          newPost = {
            ...POST_DATA[prevState.postData[0]],
            id: prevState.postData.length * Math.random * 100,
          };
        }

        return {
          ...prevState,
          postData: [newPost, ...prevState.postData],
        };
      });
    }, interval);
  }, [post.changed]);

  const deletePost = (id) => {
    setPost((prevState) => {
      const removableElementIndex = prevState.postData.findIndex((post) => {
        return post.id === id;
      });

      prevState.postData.splice(removableElementIndex, 1);

      return {
        ...prevState,
        postData: prevState.postData,
        changed: prevState.changed + 1
      };
    });
  };

  return [post.postData, deletePost];
};

export default usePost;
