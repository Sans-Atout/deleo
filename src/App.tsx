import React from 'react';
import './main-component/base.css';
import Header from './header/Header';
import { EraseContent, SettingContent, TabLabel, WikiContent } from './tabs/Tabs'; 
import {EraseTask, ErasingMethod, Status, } from './row/ErasingRow';
import uuid from 'react-uuid';

import './App.css';

//Icons 
import settings from './images/settings.svg';
import book from './images/book.svg';
import trash from './images/trash.svg'; 

class App extends React.Component {

  //allEraseObject : EraseRow[];

  render(): React.ReactNode {
    return <div className="App">
        <Header hasButon={true}></Header>
          <div className='container'>
            <div className='tabs-list'>
              <TabLabel icons={trash} label="Erase"/>
              <TabLabel icons={book} label='Doc'/>
              <TabLabel icons={settings} label='Settings'/>
            </div>
            <div className='main-info'>
              <EraseContent isVisible={true}>
                <EraseTask key={uuid()} name='My First Erasing Task' method={ErasingMethod.RCMP} status={Status.ToDo} paths={["trash:///container"]}/>
  
              </EraseContent>
              <SettingContent isVisible={false}>
  
              </SettingContent>
              <WikiContent isVisible={false}/>
              
            </div>
          </div>
      </div>;
  
  }
}

export default App;
