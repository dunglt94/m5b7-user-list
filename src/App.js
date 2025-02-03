import Users from "./components/Users";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path={"/user/add"} element={<UserDetails />} />
                <Route path={`/user/:userId`} element={<UserDetails />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
