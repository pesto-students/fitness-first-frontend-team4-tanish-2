import "./trainerdashboard.css";
import Title from "./components/Navbar/Title.js";
import Menu from "./components/Navbar/Menu.js";
import UserNameAndImage from "./components/Navbar/UserNameAndImage.js";
import ClientsFollowersFollowing from "./components/Navbar/ClientsFollowersFollowing";
import Header from "./components/Header/Header.js"
import NewsFeed from "./components/newsFeed/NewsFeed";
import Todos from "./components/todos/Todos.js";
import React, {useState} from "react";
import DietMain from "./components/Diet/DietMain";
import ExerciseMain from "./components/Exercise/ExerciseMain";
import MyProfileMain from "./components/MyProfile/MyProfileMain";
import SettingsMain from "./components/Settings/SettingsMain";
import ClientMain from "./components/Client/ClientMain";
import Goals from "./components/Goals/Todos"



export default function Trainerdashboard() {
    
    const [MenuSelected, setMenuSelected] = useState("dashBoard");
    
    function getMenuSelected(getState) {
        setMenuSelected(getState);
        
    }

    function renderDashBoard() {
        return (<>
            <div className="header_and_newsFeed_goals_and_todos">

                <div className="header"><Header /></div>

                <div className="newsFeed_goals_and_todos">

                    <div className="news_feed"><NewsFeed /></div>

                    <div className="goals_and_todos">

                        <div className="goals"><Goals /></div>

                        <div className="todo"><Todos /></div>
                    </div>
                </div>
            </div>

            <div className="appointments_and_chats">
                <div className="appointments">apointments</div>
                <div className="chats">chats</div>
            </div>
        </>);
    }
    
    function conditionallyMangeMenu(){
        switch(MenuSelected){
            case "profile" : return(<MyProfileMain/>);
            // break;
            case "clients" : return(<ClientMain/>);
            // break;
            case "exercise" : return(<ExerciseMain/>);
            // break;
            case "diets" : return(<DietMain/>);
            // break;
            case "settings" : return(<SettingsMain/>);
            // break;
            default:

        }
    }

    function renderMenuSelected() {
        return (<>
            <div className="header_and_newsFeed_goals_and_todos_menus">
                {/* you have to extend this header till vw */}
                <div className="header"><Header /></div>
                {conditionallyMangeMenu()}
            </div>
        </>)
    }
    return (
        <div className="dashboard">
            <div className="navbar">
                <Title />
                <UserNameAndImage />
                <ClientsFollowersFollowing />
                <Menu setMenu={getMenuSelected} />
            </div>
            {MenuSelected === "dashBoard" ? renderDashBoard() : renderMenuSelected() }
        </div>

    )
}