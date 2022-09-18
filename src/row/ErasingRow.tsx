import React from 'react';
import './ErasingRow.css';

enum ErasingMethod {
    PS = "Pseudo Random",
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

class EraseTask extends React.Component<{ tabKey: string, name: string, paths: Array<string>, method: ErasingMethod, status: Status}>{


    render(): React.ReactNode {
        return <tr>
            <React.Fragment key={this.props.tabKey}>

                <td className='first-column'>{this.getDisplayName()}</td>
                <td >{this.props.status}</td>
                <td className='method-colum' onClick={() => { console.log(this) }} >{this.props.method}</td>
                <td ></td>
            </React.Fragment>
        </tr>
    }

    getDisplayName() {
        if (this.props.name.length === 0) {
            return (this.props.paths.length === 1) ? this.props.paths.at(0) : "Deleo Task";
        }
        return this.props.name;
    }
}


export { Status, ErasingMethod, EraseTask };
