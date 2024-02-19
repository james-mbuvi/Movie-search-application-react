import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchMovie from './components/SearchMovie';
import MovieResults from './components/MovieResult';
import Authntication from './Authntification ';
import More from './components/Videos';
import {auth} from './config';
import { onAuthStateChanged } from "firebase/auth";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [user, setUser] = useState(null);
    const [showVideos, setShowVideos] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const getMovieRequest = async (search) => {
        const url = `http://www.omdbapi.com/?s=${search}&apikey=263d22d8`;
        const res = await fetch(url);
        const resJson = await res.json();

        if (resJson.Search) {
            setMovies(resJson.Search);
        }
    };

    useEffect(() => {
        if (search !== '') {
            getMovieRequest(search);
        }
    }, [search]);

    const themeClass = isDarkTheme ? 'dark-theme' : 'light-theme';
    const themeLabel = isDarkTheme ? 'Dark Mode' : 'Light Mode';

    return (
        <div className={`app-container ${themeClass}`}>
            <div className="container">
                <div className="row justify-content-center mt-3">
                    <div className="col-auto">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="themeSwitch" onChange={toggleTheme} />
                            <label className="form-check-label" htmlFor="themeSwitch">{themeLabel}</label>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-md-8 col-lg-6">
                        <SearchMovie search={search} setSearch={setSearch} />
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-md-8 col-lg-6">
                        <MovieResults movies={movies} />
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-md-8 col-lg-6">
                        <div className="card text-center mb-3">
                            {user && showVideos ? (
                                <More />
                            ) : (
                                <Authntication onAuthenticated={() => setShowVideos(true)} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;













