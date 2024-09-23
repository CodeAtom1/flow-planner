import Content from "../components/Content";
import SideBar from "../components/SideBar";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserList from "../components/UserList";
import { TopNavBar } from "../components/TopNavBar";
export const Dashboard = () => {

    return (
        <>
        <Router>
            <div className="container-fluid position-relative d-flex p-0">
                <SideBar/>
                <TopNavBar>
                    <Routes>
                        <Route path="/users" element={<UserList />} />
                        <Route path="/dashboard" element={<Content />} />
                    </Routes>
                </TopNavBar>
            </div>
        </Router>
          <script src="js/main.js"></script>
        </>
    );
};