import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import {
    Login,
    Register,
    Home,
} from "./pages";
import useAuth from "./contexts/auth";

const App = () => {
    const { credential } = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Navigate to="/login" />} />
                <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login />} />
                <Route path={`${process.env.PUBLIC_URL}/register`} element={<Register />} />
                {
                    !!credential.authenticated ?
                        <Route path={`${process.env.PUBLIC_URL}/home`} element={<Home />} />
                        :
                        <Route path={`${process.env.PUBLIC_URL}/home`} element={<Navigate to="/login" />} />
                }
            </Routes>
        </BrowserRouter>
    );
};
export default App;