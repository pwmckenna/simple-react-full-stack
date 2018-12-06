import React, { useState, useEffect, useContext } from 'react';
import FluxibleContext from 'fluxible-context';
import './app.css';
import ReactImage from './react.png';

export default () => {
  const { service } = useContext(FluxibleContext);
  const [username, setUsername] = useState();
  
  useEffect(async () => {
    const { data: userInfo } = await service.read('userInfo').end();
    setUsername(userInfo.username);
  }, []);
  return (
    <div>
      {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
      <img src={ReactImage} alt="react" />
    </div>
  );
};
