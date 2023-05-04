import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import './Layout.css';

export const Layout = () => {
    return(
        <div className="main">
            <Header/>
            <Outlet/>
        </div>
    )
}