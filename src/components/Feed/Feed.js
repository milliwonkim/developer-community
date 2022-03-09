import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MessageSender from "../Message/MessageSender";
import StoryReel from "../Story/StoryReel";
import Post from "../Post/Post";
import firebase from "firebase/app";
import { db } from "../../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const events = await firebase.firestore().collection("posts");
    const docs = await (await events.get()).docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });

    setPosts(docs);
  };

  console.log("posts: ", posts);

  useEffect(() => {
    getData();
    // db.collection("posts")
    //   .get()
    //   .docs.map((doc) => {
    //     console.log("doc: ", doc);
    //   });
    // .orderBy("timestamp", "desc")
    // .onSnapshot((snapshot) => {
    //   console.log("snapshot: ", snapshot);
    //   setPosts(
    //     snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       data: doc.data()
    //     }))
    //   );
    // });
  }, []);

  return (
    <Container>
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.profilePic}
          message={post.message}
          timestamp={post.timestamp}
          username={post.username}
          image={post.image}
        />
      ))}
    </Container>
  );
}

export default Feed;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #ffffff;
  border-radius: 16px;
  max-width: 500px;
  width: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 16px;
  margin-top: 16px;
`;
