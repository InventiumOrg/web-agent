import { Outlet } from "react-router-dom";
import SideBar from "./components/navigation/Sidebar";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";

const App = () => {
    return (
        <>
            <Header />
                <SideBar />
                <Outlet />
            <Footer />
        </>
    )
}

export default App;