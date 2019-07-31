import React , {Component} from 'react';
import './../../../styles/menu.css'
import {Link} from 'react-router-dom';

export default class Menu  extends Component
{
    render()
    {
        return (
            <div id="menu" style={{width : this.props.show ? '100%' : '0'}}>
                <a style={{cursor : 'pointer'}} className="closebtn" onClick={() => this.props.close()}>&times;</a>

                <ul className="overlay-content">

                    <li>
                        <Link to="/" className={"item " }>الرئيسية</Link>
                    </li>

                    <li>
                        <Link to="/books-library" className={"item " }>المكتبة الرقمية</Link>
                    </li>

                    <li>
                        <Link to="/audio-library" className={"item " }>المكتبة الصوتية</Link>
                    </li>

                    <li>
                        <Link to="/video-library" className={"item " }>المكتبة المرئية</Link>
                    </li>

                    <li>
                        <Link to="/links" className={"item " }>مؤسسات قرانية</Link>
                    </li>

                </ul>

            </div>
        )
    }
}