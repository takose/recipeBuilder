import 'normalize.css';
import 'babel-polyfill';
import React from 'react';
import io from 'socket.io-client';
import Sidebar from '../containers/Sidebar';
import StepList from '../containers/StepList';
import styles from './App.scss';

export default class Player extends React.Component {
  state = {
    socket: null,
  }

  componentDidMount = () => {
    this.setState({
      socket: this.connectWebSocket(),
    });
  }

  connectWebSocket = () => (
    io('http://localhost:3000', {
      query: {
        type: 'user',
      },
    })
  );

  sendCommand = (deviceId, states) => {
    const device = {
      deviceId,
      states,
    };
    this.state.socket.emit('users/state:update', device);
    this.state.socket.once('users/state:update/return', () => {
    });
    return new Promise((resolve) => {
      this.state.socket.once(`users/${deviceId}/done`, () => {
        this.state.socket.emit(`users/${deviceId}/done/return`);
        resolve();
      });
    });
  };

  render() {
    return (
      <div className={styles.root}>
        <Sidebar />
        <div className={styles.content}>
          <h1>Directions</h1>
          <StepList player={true} sendCommand={this.sendCommand} />
        </div>
      </div>
    );
  }
}

