import Content from "../components/Content";
import SideBar from "../components/SideBar";
export const Dashboard = () => {

    return (
        <>
        <div className="container-fluid position-relative d-flex p-0">
            <SideBar/>
            <Content />
        </div>
          <script src="js/main.js"></script>
        </>
    );
};