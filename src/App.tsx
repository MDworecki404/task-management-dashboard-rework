import "./App.css";
import clock from "./assets/clock.svg";
import cog from "./assets/cog.svg";
import filedocument from "./assets/filedocument.svg";
import mail from "./assets/mail.svg";
import user from "./assets/user.svg";
import search from "./assets/search.svg";
import notifications from "./assets/notifications.svg";
import calendar from "./assets/calendar.svg";
import keyboardarrowdown from "./assets/keyboardarrowdown.svg";
import styled from "styled-components";
import { useState, useEffect } from "react";

const NavBar = styled.nav`
  min-width: 75px;
  max-width: 7%;
  height: 100%;
  background-color: #1e0059;

  .NavBar__logo {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20%;

    .circle {
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background: rgb(2, 0, 36);
      background: linear-gradient(
        360deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(240, 149, 65, 1) 0%,
        rgba(117, 75, 229, 1) 79%,
        rgba(65, 159, 227, 1) 100%
      );
      transform: translateY(0%);

      &::before {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background: linear-gradient(
          235deg,
          rgba(2, 0, 36, 1) 0%,
          rgba(240, 149, 65, 1) 0%,
          rgba(117, 75, 229, 1) 79%,
          rgba(65, 159, 227, 1) 100%
        );
        transform: translateY(100%) translateX(-60%);
      }
      &::after {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background: linear-gradient(
          135deg,
          rgba(2, 0, 36, 1) 0%,
          rgba(240, 149, 65, 1) 0%,
          rgba(117, 75, 229, 1) 79%,
          rgba(65, 159, 227, 1) 100%
        );
        transform: translateY(-20%) translateX(60%);
      }
    }
  }
  .NavBar__menu {
    width: 100%;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 32px;
      height: 32px;
      margin-top: 5vh;
      cursor: pointer;
    }
    img:nth-child(1) {
      margin-top: 0;
    }
  }
`;
const MainContainer = styled.section`
  min-width: calc(100% - 75px);
  height: 100%;
  background-color: #f2f6fe;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 2%;

    .MainContainter__hamburger--menu {
      width: 40px;
      height: 50px;
      margin-left: 4%;
      cursor: pointer;

      .line {
        width: 75%;
        height: 0px;
        outline: 1px solid #615d69;
        transform: translateY(25px);

        &::before {
          content: "";
          display: inline-block;
          width: 100%;
          height: 0px;
          outline: 1px solid #615d69;
          transform: translateY(-10px) translateX(0px);
        }
        &::after {
          content: "";
          display: inline-block;
          width: 100%;
          height: 0px;
          outline: 1px solid #615d69;
          transform: translateY(-47px) translateX(0px);
        }
      }
    }

    img {
      margin-left: 2%;
      transform: translateX(120%);
    }
    input {
      outline: none;
      border: none;
      width: 30%;
      height: 50px;
      border-radius: 30px;
      padding-left: 40px;
      &::placeholder {
        transition: all 0.3s ease;
      }
      &:focus {
        &::placeholder {
          opacity: 0;
          transform: translateY(-20px);
        }
      }
    }

    .user-menu {
      width: 50%;
      display: flex;
      justify-content: right;
      align-items: center;
      img {
        transform: translateX(0);
        cursor: pointer;
      }

      .vLine {
        width: 0px;
        height: 32px;
        outline: 2px solid #615d69;
        margin-left: 6%;
        margin-right: 5%;
      }
      .userPic {
        border-radius: 100%;
      }
    }
  }
`;

function App() {
  const [userPic, setUserPic] = useState();

  function getUser() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setUserPic(data.results[0].picture.thumbnail);
      });
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div id="App">
      <NavBar>
        <div className="NavBar__logo">
          <div className="circle"></div>
        </div>
        <div className="NavBar__menu">
          <img src={user} alt="" />
          <img src={mail} alt="" />
          <img src={clock} alt="" />
          <img src={filedocument} alt="" />
          <img src={cog} alt="" />
        </div>
      </NavBar>
      <MainContainer>
        <header>
          <div className="MainContainter__hamburger--menu">
            <div className="line"></div>
          </div>
          <img src={search} alt="" />
          <input type="text" placeholder="Search"></input>
          <div className="user-menu">
            <img src={notifications} alt="" />
            <img src={calendar} alt="" />
            <div className="vLine"></div>
            <img className="userPic" src={userPic} alt="" />
            <img src={keyboardarrowdown} alt="" />
          </div>
        </header>
      </MainContainer>
    </div>
  );
}

export default App;
