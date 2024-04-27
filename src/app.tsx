import { Outlet } from "react-router-dom";
import SideBar from "./components/navigation/Sidebar";
import Header from "./components/navigation/Header";

const App = () => {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <SideBar />
                        <Outlet />
                </div>
            </div>
        </>
    )
}

export default App;