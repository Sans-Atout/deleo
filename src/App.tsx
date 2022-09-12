import React from 'react';
import './main-component/base.css';
import Header from './header/Header';
import { EraseContent, SettingContent, TabLabel, WikiContent } from './tabs/Tabs';
import { EraseTask, ErasingMethod, Status, } from './row/ErasingRow';
import uuid from 'react-uuid';
import { configDir } from '@tauri-apps/api/path';

import './App.css';

//Icons 
import settings from './images/settings.svg';
import book from './images/book.svg';
import trash from './images/trash.svg';
import { fs } from '@tauri-apps/api';

class App extends React.Component<{}, { app_path: string, configuration: {} }> {

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
      this.setState({ app_path: config_path },this.readConfigFile)

    })()
      .catch(error => {
        console.log(error)
      });

  }


  render(): React.ReactNode {
    var hello = [<EraseTask key={uuid()} name='My First Erasing Task' method={ErasingMethod.RCMP} status={Status.ToDo} paths={["trash:///container"]} />, <EraseTask key={uuid()} name='My First Erasing Task' method={ErasingMethod.RCMP} status={Status.ToDo} paths={["trash:///container"]} />]
    return <div className="App">
      <Header hasButon={true}></Header>
      <div className='container'>
        <div className='tabs-list'>
          <TabLabel icons={trash} label="Erase" />
          <TabLabel icons={book} label='Doc' />
          <TabLabel icons={settings} label='Settings' />
        </div>
        <div className='main-info'>
          <EraseContent isVisible={true}>
            {hello}

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
