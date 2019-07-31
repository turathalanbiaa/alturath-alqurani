import React, {Component} from 'react';
import './App.css';
import LibraryPage from "./view/screen/library/LibraryPage";
import {ToastContainer} from 'react-toastify';
import SoundLibraryPage from "./view/screen/sound_library/SoundLibraryPage";
import VideoLibraryPage from "./view/screen/video_library/VideoLibraryPage";
import Home from "./view/screen/home/Home";
import {BrowserRouter, Route} from 'react-router-dom';
import LinksPage from './view/screen/links/LinksPage';

class App extends Component
{
    render()
    {
        return (
            <div>
                <ToastContainer hideProgressBar={true} rtl={true}/>

                <BrowserRouter>

                    <div>
                        <Route exact path="/" component={() => <Home/>}/>
                        <Route exact path="/links" component={() => <LinksPage/>}/>
                        <Route exact path="/books-library" component={() => <LibraryPage/>}/>
                        <Route exact path="/video-library" component={() => <VideoLibraryPage/>}/>
                        <Route exact path="/audio-library" component={() => <SoundLibraryPage/>}/>
                    </div>

                </BrowserRouter>
            </div>
        );
    }


    static instance = null;

    constructor(props)
    {
        super(props);
        if (App.instance === null)
        {
            App.instance = this;
        }
    }

    testCase = "Woooa dis is test!";

}

export default App;
