import { InitialHomePage } from "components/InitialHomePage/InitialHomePage";
import { LoginHomePage } from "components/LogInHomePage/LoginHomePage";
import { useAuth } from "hooks/useAuth";


  
const Home = () => {
    const { isLoggedIn } = useAuth();



    return isLoggedIn ? (
        <LoginHomePage/>
    ) : (
        <InitialHomePage/>
    );
};



export default Home;