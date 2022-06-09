import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';

function Dashboard() {
  const spotifyApi = new SpotifyWebApi({})
  return (
    <div>
        <Sidebar/>
        <Body/>
    </div>
  )
}

export default Dashboard;