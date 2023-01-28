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
import filters from "./assets/filters.svg";
import home from "./assets/home.svg";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

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
      transform: scale(0.75);
      padding: 7.5px;
      border-radius: 30px;
      transition: background 0.2s linear;

      &:hover {
        background-color: #754be5;
      }
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
    height: 100px;
    align-items: center;

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
      cursor: pointer;
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
      span {
        margin-left: 1%;
      }
    }
  }
`;

const ProjectsContainer = styled.section`
  min-width: calc(100% - 75px);
  max-width: calc(100%);
  min-height: calc(100% - 100px);
  max-height: calc(100% - 100px);

  .Projects {
    width: 100%;
    height: 100%;
    display: flex;

    .asideProjects {
      width: 67%;
      margin-left: 4%;
      height: calc(95vh - 100px);
      background-color: #fff;
      border-radius: 32px;

      header {
        width: 100%;
        height: 15%;
        display: flex;

        h1 {
          font-size: 28px;
          transform: translateX(40%);
        }

        section {
          width: 100%;
          display: flex;
          justify-content: right;
          align-items: center;
          img {
            transform: translateX(0);
            margin-right: 3%;
          }

          button {
            background-color: #754be5;
            color: white;
            border: none;
            outline: none;
            width: 143px;
            height: 43px;
            margin-right: 4%;
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 30px;
            cursor: pointer;
          }
        }
      }
      .ProjectsContainer {
        width: 100%;
        height: 85%
        display: flex;
        flex-direction: row;

        .ProjectState {
          float: left;
          width: 30%;
          margin-left: 2.5%;
          background-color: #f2f6fe;
          border-radius: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2.5%;
          flex-direction: column;

          input{
            -webkit-appearance: none;

            &::-webkit-slider-thumb{
              -webkit-appearance: none;
              appearance: none;
              background-color: #754be5;
              height: 0.5rem;
              width: 1rem; 
            }

          }
        }
      }
    }
    .asideTeam {
      width: 20%;
      margin-left: 4%;
      height: calc(95vh - 100px);
      background-color: #fff;
      border-radius: 32px;
    }
  }
`;

const ProjectCreation = styled.div`
  width: 30vw;
  height: 30vw;
  background: white;
  z-index: 9;
  position: absolute;
  border-radius: 30px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 0 0 0 9999px #000000b0;
  display: none;
  .exitt {
    cursor: pointer;
    width: 50px;
    height: 50px;
    position: absolute;
    right: 20px;
    top: 30px;
  }
  .exit {
    background-color: black;
    width: 30px;
    height: 0;
    border: 1px solid black;

    transform: rotate(45deg);
    cursor: pointer;

    .exit2 {
      position: absolute;
      background-color: black;
      width: 30px;
      height: 0;
      border: 1px solid black;
      right: 25px;
      top: 25px;
      transform: rotate(-90deg) translateX(26px) translateY(25px);
    }
  }

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      margin-bottom: 20%;
      border: none;
      background-color: #d6dae0;
      width: 50%;
      height: 30px;
      padding-left: 5px;
      border-radius: 30px;

      &:focus {
        border: none;
        outline: none;
      }
    }
    label:first-child {
      margin-top: 20%;
    }
    button {
      background-color: #754be5;
      color: white;
      border: none;
      outline: none;
      width: 143px;
      height: 43px;
      margin-right: 4%;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      cursor: pointer;
    }
  }
`;

function App() {
  const [userPic, setUserPic] = useState<string>();
  const [userName, setUserName] = useState<string>();

  const [projects, setProjects] = useState<
    { title: string; description: string }[]
  >([]);
  const [titles, setTitles] = useState<string>("");
  const [descriptions, setDescriptions] = useState<string>("");

  function SubmitProject(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setProjects([...projects, { title: titles, description: descriptions }]);
    setTitles("");
    setDescriptions("");
  }
  const progress = useRef<HTMLInputElement>(null);
  function ProgressBar() {
    if (progress.current) {
      progress.current.style.background = `
        linear-gradient(93deg, rgba(117,75,229,255) ${progress.current.value}%, rgba(255,255,255,1) ${progress.current.value}%)
      `;
    }
  }
  function getUser() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setUserPic(data.results[0].picture.thumbnail);
        setUserName(data.results[0].name.first);
      });
  }

  useEffect(() => {
    getUser();
  }, []);
  function CreateProject() {
    gsap.to(".ProjectCreation", { display: "block" });
  }
  function CloseProject() {
    gsap.to(".ProjectCreation", { delay: 0, duartion: 0, display: "none" });
  }

  return (
    <div id="App">
      <ProjectCreation className="ProjectCreation">
        <div className="exitt" onClick={CloseProject}>
          <div className="exit">
            <div className="exit2"></div>
          </div>
        </div>
        <div>
          <form onSubmit={SubmitProject}>
            <label htmlFor="title">Title</label>
            <input
              required
              type="text"
              name="title"
              value={titles}
              onChange={(event) => setTitles(event.target.value)}
            ></input>
            <label htmlFor="Description">Description</label>
            <input
              required
              type="text"
              name="Description"
              value={descriptions}
              onChange={(event) => setDescriptions(event.target.value)}
            ></input>
            <button type="submit">Create Project</button>
          </form>
        </div>
      </ProjectCreation>
      <NavBar>
        <div className="NavBar__logo">
          <div className="circle"></div>
        </div>
        <div className="NavBar__menu">
          <img src={home} alt=""></img>
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
            <span>{userName}</span>
            <img src={keyboardarrowdown} alt="" />
          </div>
        </header>
        <ProjectsContainer>
          <section className="Projects">
            <aside className="asideProjects">
              <header>
                <h1>Projects</h1>
                <section>
                  <img src={filters} alt="" />
                  <button onClick={CreateProject}>Create Project</button>
                </section>
              </header>
              <section className="ProjectsContainer">
                {projects.map((projects, index) => (
                  <div className="ProjectState" key={index}>
                    <h1>{projects.title}</h1>
                    <h2>{projects.description}</h2>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      defaultValue={0}
                      ref={progress}
                      onChange={ProgressBar}
                    ></input>
                  </div>
                ))}
              </section>
            </aside>
            <aside className="asideTeam"></aside>
          </section>
        </ProjectsContainer>
      </MainContainer>
    </div>
  );
}

export default App;
