// import Users from "./components/Users";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import UserDetails from "./components/UserDetails";
import Users2 from "./components/Users2";

function App() {
  return (
    <div className="App">
        {/*<BrowserRouter>*/}
        {/*    <Routes>*/}
        {/*        <Route path="/" element={<Users />} />*/}
        {/*        <Route path={"/user/add"} element={<UserDetails />} />*/}
        {/*        <Route path={`/user/:userId`} element={<UserDetails />} />*/}
        {/*    </Routes>*/}
        {/*</BrowserRouter>*/}

        <Users2/>
    </div>
  );
}

export default App;
