import React from 'react';
import './Header.css';
import {AddTrashBtn, AddFolderBtn, AddFileBtn} from '../btn/Button';
import logo from './../images/logo.svg';

class Header extends React.Component<{hasButon:boolean}>{



    render() {
        return <header>
            <div className='logo-zone'>
                <img className='logo-img' src={logo} alt='deleo logo'/>
                <div className='app-info-zone'>
                    <p className='app-name'>deleo</p>
                    <p className='app-version'>v1.0.0 (64bits)</p>
                </div>
            </div>
            <div className='btn-zone'>
                <AddFolderBtn/>
                <AddFileBtn/>
                <AddTrashBtn/>

            </div>
        </header>
    }
}

export default Header;