import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home";
import Confirmation from "./pages/confirmation";
import Password from "./pages/password";
import Username from "./pages/username";
import Birthday from "./pages/birthday";
 
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/pages/username" element={<Username />} />
                <Route
                    path="/pages/password"
                    element={<Password />}
                />
                <Route path="/pages/password" element={<Password />} />
                <Route path="/pages/birthday" element={<Birthday />} />
                <Route
                    path="/pages/confirmation"
                    element={<Confirmation />}
                />
            </Routes>
        </Router>
    );
}
 
export default App;
