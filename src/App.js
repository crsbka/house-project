import './App.css';
import Result from "./Result";
import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./About";
import Home from "./Home";


export default function App() {
    return (

        <div className="App">
            <header>
                <img src="./logo.png" className="card-img-top" alt="..."/>
            </header>


            <main>
                <Router>
                    <Navbar/>

                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        {/*<Route path="/market" component={Market}/>*/}
                    </Routes>
                </Router>
            </main>



            <footer className="App-footer">
                <small>© COPYRIGHT 2022 BY HOMEDELTA INC ALL RIGHTS RESERVED</small>
            </footer>

        </div>

    );
}