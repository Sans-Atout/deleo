import React, { ReactNode } from 'react';
import './Tabs.css';
import { EraseTask, ErasingMethod, ErasingRow } from '../row/ErasingRow';
import uuid from 'react-uuid';


class TabLabel extends React.Component<{ icons: string, label: string }>{

    render(): React.ReactNode {
        return <div className='tab-label-zone'>
            <div className='label'>
                <img className='tab-icons' src={this.props.icons} alt={this.props.label + "'s label"} />
                {this.props.label}
            </div>

        </div>
    }
}



class Tab {

    menu: TabLabel;
    content: EraseContent | SettingContent | WikiContent;

    constructor(icon: string, menu_label: string, content: EraseContent | SettingContent | WikiContent) {
        this.menu = new TabLabel({ icons: icon, label: menu_label });
        this.content = content;
    }

}

class EraseContent extends React.Component<{ isVisible: boolean, children: React.ReactNode}>{



    render(): React.ReactNode {

        if (this.props.isVisible) {
            return <div className='div-container'>
                <table className='erase-table'>
                    <thead>
                        <tr>
                            <th className='first-column'>Task \ File Name</th>
                            <th >Status</th>
                            <th className='method-colum'>Method</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>

            </div>;
        } else {
            return <div></div>;

        }
    }

}

class SettingContent extends React.Component<{ isVisible: boolean , children: React.ReactNode}>{

    render(): React.ReactNode {
        if (this.props.isVisible) {
            return <div>
                <h1>Hello</h1>

            </div>;
        } else {
            return <div></div>;

        }
    }

}

class WikiContent extends React.Component<{ isVisible: boolean }>{

    render(): React.ReactNode {
        if (this.props.isVisible) {
            return <div>
                <h1>Hello</h1>

            </div>;
        } else {
            return <div></div>;

        }
    }

}

export { TabLabel, EraseContent, SettingContent, WikiContent };