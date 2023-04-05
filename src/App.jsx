import React from 'react';
import Header from './components/Header';
import ChatList from './components/ListChat/ListChat';
import PageView from './components/PageView/PageView';

function App() {

  return (
    <div className="App">
      <Header/>
      <div className='main-container'>
        <ChatList/>
        <PageView/>
      </div>
    </div>
  )
}

export default App;
