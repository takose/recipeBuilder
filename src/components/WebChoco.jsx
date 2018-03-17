import 'normalize.css';
import 'babel-polyfill';
import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import Sidebar from '../containers/Sidebar';
import PlayerStyles from '../containers/StepPlayer.scss';
import StepList from '../containers/StepList';
import Step from '../containers/Step';
import styles from './WebChoco.scss';
import { toggleFake, resetPlayingStep } from '../actions';

class webChoco extends React.Component {
  state = {
    socket: null,
    butter: 0,
    mass: 0,
    sugar: 0,
  }

  componentDidMount = () => {
    this.setState({
      socket: this.connectWebSocket(),
    });
  }

  onChange = (e, ingredient) => {
    if (ingredient === 'butter') {
      this.setState({ butter: e.target.value });
    } else if (ingredient === 'mass') {
      this.setState({ mass: e.target.value });
    } else if (ingredient === 'sugar') {
      this.setState({ sugar: e.target.value });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const states = {
      sugar: this.state.sugar,
      mass: this.state.mass,
      butter: this.state.butter,
    };
    this.sendCommand('webChoco', states);
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
    const { id, onClick } = this.props;
    return (
      <div className={styles.root}>
        <Sidebar />
        <div className={styles.content}>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="sugar">
              砂糖:
              <input
                type="number"
                id="sugar"
                name="sugar"
                value={this.state.sugar}
                onChange={e => this.onChange(e, 'sugar')}
              />
            </label>
            <br/>
            <label htmlFor="butter">
              カカオバター:
              <input
                type="number"
                id="sugar"
                name="sugar"
                value={this.state.butter}
                onChange={e => this.onChange(e, 'butter')}
              />
            </label>
            <br/>
            <label htmlFor="Mass">
              カカオマス:
              <input
                type="number"
                id="sugar"
                name="sugar"
                value={this.state.mass}
                onChange={e => this.onChange(e, 'mass')}
              />
            </label>
            <br/>
            <input type="submit" value="つくる" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const currentStep = state.steps[state.currentStep.playingId];
  return ({
    isFake: state.currentStep.isFake,
    id: state.currentStep.playingId,
    currentStep,
    action: state.actions.find(action => (currentStep != null && action.id === currentStep.actionId)),
  });
};

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(toggleFake());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(webChoco);
