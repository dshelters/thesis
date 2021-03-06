import React from 'react';
import Video from './Video';
import Workspace from './Workspace';
import Chat from './Chat';

const Room = () => (
  <div className="container-fluid">
    <div className="col-md-8">
      <Workspace />
    </div>
    <div className="col-md-4">
      <Video />
      <Chat />
    </div>
  </div>
);

export default Room;
