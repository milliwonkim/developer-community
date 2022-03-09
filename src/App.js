import React, { useEffect } from "react";
import styled from "styled-components";
import firebase from "firebase";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";
import Login from "./components/Login/Login";
import { useStateValue } from "./reducer/StateProvider";
import { actionTypes } from "./reducer/reducer";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const getAuth = async () => {
    try {
      await firebase.auth().onAuthStateChanged((user) => {
        if (Object.keys(user).length > 0) {
          dispatch({
            type: actionTypes.SET_USER,
            user: user
          });
        } else {
          console.log("not logged in");
        }
      });
    } catch (error) {
      console.log("auth check failed error: ", error);
    }
  };

  useEffect(() => {
    getAuth();
  }, [user]);

  return (
    <Container>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Feed />
            <Widgets />
          </AppBody>
        </>
      )}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  background-color: #f1f2f5;

  @media (max-width: 1300px) {
    height: 100%;
  }
`;

const AppBody = styled.div`
  margin: auto;
  display: flex;
  gap: 16px;
  max-width: 1000px;
  justify-content: space-around;

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
`;
