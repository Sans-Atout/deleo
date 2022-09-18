import { Component, ReactNode } from "react";
import './form-modal.css';
import close from '../images/close.svg';

import { ErasingMethod } from "../row/ErasingRow";

class ModalForm extends Component<{ isVisible: boolean, isFolder: boolean }>{

    render(): ReactNode {

        return <aside className="modal-area" >
            <div className="modal-wrapper">
                <h1>Add a new {(this.props.isFolder) ? "folder's" : "file's"} erase task</h1>
                <form>
                    <div className="form-input">
                        <label htmlFor="task_name">Name :</label>
                        <input type='text' name="task_name"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="task_method">Method :</label>
                        <div className="select">
                            <select>
                                <option value="PS">Pseudo Random</option>
                                <option value="Gutmann">Gutmann</option>
                                <option value="HMGIS5">HMGI S5</option>
                                <option value="DODMECE">DOD 522022 MECE</option>
                                <option value="DODME">DOD 522022 ME</option>
                                <option value="AFSSI">AFSSI 5020</option>
                                <option value="RCMP">RCMP TSSIT OPS II</option>
                            </select>
                            <span className="focus"></span>
                        </div>

                    </div>
                    <div className="file-selected">
                        <p className="title">Selected file :</p>
                        <div className="file">
                            <p className="file-name">/home/pi/.local/share/Trash/files/test).pdf</p>

                            <div className="close">
                                <img className="close-icon" src={close} alt="close bouton" />
                            </div>
                        </div>
                    </div>
                    <div className="drop-zone">
                        <span className="drop-zone__prompt">Drop file here or click to upload</span>
                        <input type="file" name="myFile" className="drop-zone__input" multiple={true}/>
                    </div>

                    <div className="submit-btn btn">
                        Add Task
                    </div>
                </form>
            </div>
        </aside>
    }
}

export default ModalForm;