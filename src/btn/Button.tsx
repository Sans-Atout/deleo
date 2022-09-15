import React, { ReactNode } from 'react';

import './Button.css'
import { EraseTask, ErasingMethod, Status } from '../row/ErasingRow';
import uuid from 'react-uuid';



class AddTrashBtn extends React.Component<{erase:  (newEraseTask: ReactNode) => void} > {

    constructor(props : {erase: (newEraseTask: ReactNode) => void;}){
        //eraseTask :   (newEraseTask: ReactNode) => void
        //{erase: eraseTask}
        super(props);
        this.addTrashTask = this.addTrashTask.bind(this);
        //this.addTrashTask;

    }

    addTrashTask(){

        let key_node = uuid();
        let erase_array = ["/home/augustin/.local/share/Trash/info","/home/augustin/.local/share/Trash/files"];
        let newTask = <EraseTask key={key_node} tabKey={key_node} paths={erase_array} method={ErasingMethod.PS} status={Status.ToDo} name={"Erasing Trash"} />;
        console.log(this, newTask);
        this.props.erase(newTask);
        
    }

    render() {
        return <div className='btn primary' onClick={this.addTrashTask}>
            <svg className='icons' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 5.33333C26 6.07067 25.4176 6.66667 24.7 6.66667H1.3C0.5824 6.66667 0 6.07067 0 5.33333C0 4.596 0.5824 4 1.3 4H5.92673C6.48703 4 6.98229 3.63456 7.16039 3.08789L7.57117 1.82389C7.92607 0.733227 8.91801 0 10.0373 0H15.964C17.0846 0 18.0765 0.733258 18.4301 1.82259L18.8409 3.08919C19.0177 3.63319 19.5143 4 20.0746 4H24.7C25.4176 4 26 4.596 26 5.33333ZM22.49 9.37337L21.697 21.64C21.528 24.0933 19.526 26 17.147 26H8.853C6.474 26 4.472 24.0933 4.303 21.6533L3.51002 9.37337C3.49702 9.20004 3.56202 9.01322 3.67902 8.87988C3.80902 8.74655 3.97802 8.66667 4.16002 8.66667H21.84C22.022 8.66667 22.191 8.74655 22.321 8.87988C22.438 9.01322 22.503 9.20004 22.49 9.37337ZM11.7 13.3333C11.7 12.6 11.115 12 10.4 12C9.685 12 9.1 12.6 9.1 13.3333V20C9.1 20.7333 9.685 21.3333 10.4 21.3333C11.115 21.3333 11.7 20.7333 11.7 20V13.3333ZM16.9 13.3333C16.9 12.6 16.315 12 15.6 12C14.885 12 14.3 12.6 14.3 13.3333V20C14.3 20.7333 14.885 21.3333 15.6 21.3333C16.315 21.3333 16.9 20.7333 16.9 20V13.3333Z" fill="white" />
            </svg>

            <p>Add Trash</p>
        </div>
    }
}

class AddFileBtn extends React.Component {
    render() {
        return <div className='btn center-btn'>
            <svg className='icons' width="20" height="26" fill="none" version="1.1" viewBox="0 0 20 26" xmlns="http://www.w3.org/2000/svg">
                <path d="m13.667 4v-3.2799l5.6133 5.6133h-3.28c-1.28 0-2.3333-1.0533-2.3333-2.3333zm2.3333 4.3333c-2.3867 0-4.3333-1.9467-4.3333-4.3333v-4h-5.6667c-3.3067 0-6 2.6933-6 6v13.333c0 3.3067 2.6933 6 6 6h8c3.3067 0 6-2.6933 6-6v-11h-4z" fill="#fff" />
            </svg>
            <p>Add File</p>
        </div>
    }
}

class AddFolderBtn extends React.Component {
    render() {
        return <div className='btn'>
            <svg className='icons' width="25" height="22" fill="none" version="1.1" viewBox="0 0 25 22" xmlns="http://www.w3.org/2000/svg">
                <path d="m25 10.333v5.3333c0 3.308-2.6566 6-5.9211 6h-13.158c-3.2645 0-5.921-2.692-5.921-6v-9.3333c0-3.308 2.6566-6 5.921-6h2.8908c0.88158 0 1.7 0.44415 2.1895 1.1881l1.4592 2.2184c0.2448 0.37067 0.654 0.59342 1.0948 0.59342h5.5236c3.2645 0 5.9211 2.692 5.9211 6z" fill="#fff" />
            </svg>
            <p>Add Folder</p>
        </div>
    }
}

export { AddTrashBtn, AddFolderBtn, AddFileBtn };