import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MessageSender from '../Message/MessageSender';
import StoryReel from '../Story/StoryReel';
import Post from '../Post/Post';
import { db } from '../../firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                console.log('snapshot: ', snapshot);
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                );
            });
    }, []);

    return (
        <Container>
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
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
    max-width: 1000px;
    width: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 16px;
    margin-top: 16px;
`;
