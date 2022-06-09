import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';
import SpotifyWebApi from 'spotify-web-api-node';

function Dashboard() {
  const spotifyApi = new SpotifyWebApi({
    clientId:process.env.SPOTIFY_CLIENT_ID,
  })
  return (
    <div>
        <Sidebar/>
        <Body spotifyApi={spotifyApi}/>
    </div>
  )
}

export default Dashboard;