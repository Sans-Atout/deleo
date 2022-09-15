import React, { ReactNode } from 'react';


import { AddTrashBtn, AddFolderBtn, AddFileBtn } from './btn/Button';

import './main-component/base.css';
import Header from './header/Header';
import { EraseContent, SettingContent, TabLabel, WikiContent } from './tabs/Tabs';
import { configDir } from '@tauri-apps/api/path';

import './App.css';
//Icons 
import settings from './images/settings.svg';
import book from './images/book.svg';
import trash from './images/trash.svg';
import { fs } from '@tauri-apps/api';

class App extends React.Component<{}, { app_path: string, configuration: {}, eraseTask: ReactNode[] }> {

  constructor() {
    super({});
    this.addnewEraseTask = this.addnewEraseTask.bind(this);

    var reactNode : ReactNode[] = [];
    this.state = {
      app_path: "",
      configuration: {},
      eraseTask: reactNode
    };
  }

  readConfigFile() {
    (async () => {
      var deleo_config: {};
      if (! await this.doesConfigExist()) {
        deleo_config = { langage: "en", delete_task: {} }
        await fs.writeFile(this.state.app_path + "deleo.json", JSON.stringify(deleo_config));
      }
      let file_content = fs.readTextFile(this.state.app_path + "deleo.json")
      console.log(file_content)

    })().catch(error => {
      console.log(error)
    });

  }

  async doesConfigExist() {
    return await fs.readTextFile(this.state.app_path + 'deleo.json').then(
      () => {
        return true;
      }
    ).catch(
      (error) => {
        return false;
      }
    )
  }

  componentDidMount() {
    (async () => {
      const config_path = await configDir();
      this.setState({ app_path: config_path }, this.readConfigFile)

    })()
      .catch(error => {
        console.log(error)
      });

  }

  addnewEraseTask(newEraseTask: ReactNode){
    var tmpEraseTask  = this.state.eraseTask;
    tmpEraseTask.push(newEraseTask);
    this.setState({eraseTask : tmpEraseTask});
  }

  render(): React.ReactNode {
    //var hello = [<EraseTask key={uuid_key[0]} tabKey={uuid_key[0]} name='My First Erasing Task' method={ErasingMethod.RCMP} status={Status.ToDo} paths={["trash:///container"]} />, <EraseTask key={uuid_key[1]} tabKey={uuid_key[1]} name='My First Erasing Task' method={ErasingMethod.RCMP} status={Status.ToDo} paths={["trash:///container"]} />]
    return <div className="App">
      <Header hasButon={true}>
        <AddFolderBtn />
        <AddFileBtn />
        <AddTrashBtn erase={this.addnewEraseTask} />
      </Header>
      <div className='container'>
        <div className='tabs-list'>
          <TabLabel icons={trash} label="Erase" />
          <TabLabel icons={book} label='Doc' />
          <TabLabel icons={settings} label='Settings' />
        </div>
        <div className='main-info'>
          <EraseContent isVisible={true}>
          {this.state.eraseTask}
          </EraseContent>
          <SettingContent isVisible={false}>

          </SettingContent>
          <WikiContent isVisible={false} />

        </div>
      </div>
    </div>;

  }
}

export default App;
