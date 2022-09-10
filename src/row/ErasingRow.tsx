import React from 'react';
import './ErasingRow.css';

enum ErasingMethod {
    PS = "Random",
    Gutmann = "Gutmann",
    HMGIS5 = "HMGI S5",
    DODMECE = "DOD 522022 MECE",
    DODME = "DOD 522022 ME",
    AFSSI = "AFSSI 5020",
    RCMP = "RCMP TSSIT OPS II"
}

enum Status {
    ToDo = "To do",
    Error = "Error",
    Progress = "Progress",
    Done = "Complete",
    Pause = "Pause"
}

class EraseTask {

    taskName: string;
    paths: Array<string>;
    method: ErasingMethod;
    status: Status;

    constructor(name: string, toErase: Array<string>, eraseMethod: ErasingMethod) {
        this.taskName = name;
        this.paths = toErase;
        this.method = eraseMethod;
        this.status = Status.ToDo;
    }

    getDisplayName() {
        if (this.taskName.length === 0) {
            return (this.paths.length === 1) ? this.paths.at(0) : "Deleo Task";
        }
        return this.taskName;
    }
}


//<span>{this.props.erase.method}</span>
class ErasingRow extends React.Component<{ key: string, erase: EraseTask }>{


    render(): React.ReactNode {
        return <tr>
            <React.Fragment key={this.props.key}>

                <td className='first-column'>{this.props.erase.getDisplayName()}</td>
                <td >{this.props.erase.status}</td>
                <td className='method-colum' onClick={() => { console.log(this) }} >{this.props.erase.method}</td>
                <td ></td>
            </React.Fragment>
        </tr>
    }

}

export { ErasingRow, ErasingMethod, EraseTask };
