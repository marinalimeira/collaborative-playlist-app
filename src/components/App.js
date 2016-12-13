import React from 'react';
import VideoPage from './video/VideoPage';
import Header from './Header';

const renderContent = () => {
  if (localStorage.getItem("name") === null) {
    return (<div />);
  } else {
    return (<VideoPage />);
  }
}

const App = () => (
  <div className="wrapper">
    <Header />
    {renderContent()}
  </div>
);

export default App;
