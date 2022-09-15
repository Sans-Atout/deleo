import React from 'react';
import './Header.css';
import logo from './../images/logo.svg';

class Header extends React.Component<{hasButon:boolean, children: React.ReactNode}>{



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

                {this.props.children}
            </div>
        </header>
    }
}

export default Header;