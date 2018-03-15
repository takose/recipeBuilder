import 'normalize.css';
import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import Sidebar from '../containers/Sidebar';
import styles from './App.scss';
import { toggleFake } from '../actions';

class Settings extends React.Component {
  state = {
    socket: null,
  }

  componentDidMount = () => {
    this.setState({
      socket: this.connectWebSocket(),
    });
  }

  onClick = (deviceId, podId) => {
    const states = {
      ff: {
        power: '0',
        time: '0',
      },
      integlass: {
        amount: 200,
      },
      smoon: {
        amount: 200,
      },
      puta: {
        podId,
      },
    };
    this.sendCommand(deviceId, states[deviceId]);
  }

  connectWebSocket = () => (
    io('http://192.168.1.105:3000', {
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
    const { isFake, onChange } = this.props;
    console.log(isFake)
    return (
      <div className={styles.root}>
        <Sidebar />
        <div className={styles.settingContent}>
          <button className={styles.deviceInit} onClick={() => this.onClick('ff')}>FF</button>
          <button className={styles.deviceInit} onClick={() => this.onClick('smoon')}>Smoon</button>
          <button className={styles.deviceInit} onClick={() => this.onClick('integlass')}>integlass</button>
          <button className={styles.deviceInit} onClick={() => this.onClick('puta', 'A')}>A</button>
          <button className={styles.deviceInit} onClick={() => this.onClick('puta', 'B')}>B</button>
          <button className={styles.deviceInit} onClick={() => this.onClick('puta', 'C')}>C</button>
          <button className={styles.deviceInit} onClick={() => this.onClick('puta', 'D')}>D</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFake: state.currentStep.isFake,
});

const mapDispatchToProps = dispatch => ({
  onChange: () => {
    dispatch(toggleFake());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
