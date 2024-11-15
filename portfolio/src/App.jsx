import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./styles/Home.css";
import "./styles/Header.css"
import "./styles/Footer.css"

import { Routes, Route } from "react-router-dom";
function App() {
    return (
   
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>

                <Footer />
            </>
        
    );
}

export default App;
