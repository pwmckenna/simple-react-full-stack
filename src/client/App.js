import React, { useContext } from 'react';
import FluxibleContext from 'fluxible-context';
import './app.css';

// export default class App extends Component {
//   state = { username: null };

//   componentDidMount() {
//     fetch('/api/getUsername')
//       .then(res => res.json())
//       .then(user => this.setState({ username: user.username }));
//   }

//   render() {
//     const { username } = this.state;
//     return (
//       <div>
//         {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
//         <img src={ReactImage} alt="react" />
//       </div>
//     );
//   }
// }

export default () => {
  const { getStore, executeAction } = useContext(FluxibleContext);

  console.log('fluxible', { getStore, executeAction });
  return <div>hello world</div>;
};
