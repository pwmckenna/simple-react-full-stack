import React, { useContext, useEffect } from 'react';
import FluxibleContext from 'fluxible-context';
import { useStores } from 'fluxible-hooks';
import { UsernameStore } from '../stores';

const fetchUsername = async (context) => {
  const { data: username } = await context.service.read('username').end();
  context.dispatch('USERNAME', username);
  return username;
};

export default () => {
  const context = useContext(FluxibleContext);
  useEffect(() => {
    context.executeAction(fetchUsername);
  }, []);
  const username = useStores([UsernameStore], ctx => ctx.getStore(UsernameStore).getUsername());
  return <div>{username}</div>;
};
