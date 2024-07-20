import DirectoryComponent from "../../components/directory/DirectoryComponent";
import { Outlet } from "react-router-dom";

function Home() {
    return (
        <div>
            <DirectoryComponent />
            <Outlet />
            
        </div>
    );
}

export default Home;
