import 'normalize.css';
import 'babel-polyfill';
import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import Sidebar from '../containers/Sidebar';
import PlayerStyles from '../containers/StepPlayer.scss';
import StepList from '../containers/StepList';
import Step from '../containers/Step';
import styles from './App.scss';
import { toggleFake, resetPlayingStep } from '../actions';

class Player extends React.Component {
  state = {
    socket: null,
  }

  componentDidMount = () => {
    this.setState({
      socket: this.connectWebSocket(),
    });
  }

  componentWillReceiveProps = ({ action, onFinish }) => {
    if (action !== undefined) {
      setTimeout(() => {
        onFinish();
      }, 6000);
    }
  }

  connectWebSocket = () => (
    io('http://192.168.1.105:3000', {
      query: {
        type: 'user',
      },
    })
  );

  sendCommand = (deviceId, states) => {
    if (this.props.isFake) {
      return Promise.resolve(null);
    }
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
    const { id, currentStep, action, isFake, onClick } = this.props;
    return (
      <div className={styles.root}>
        <Sidebar />
        <div className={styles.content}>
          {action !== undefined ?
            <Step
              step={currentStep}
              id={id}
              action={action}
              showAction={false}
              sendCommand={currentStep.options != null && currentStep.options.device != null ? this.sendCommand : null}
              customStyles={PlayerStyles}
              player={true}
              isFake={isFake}
            /> : (
              <div className={styles.completed}>かんせい🎉</div>
            )
          }
        </div>
        <button onClick={onClick} className={isFake ? styles.toggleFake : styles.toggleFakeInactive}></button>
        <div className={styles.playerStepListWrapper}>
          <StepList />
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
  onFinish: () => {
    console.log('enter')
    dispatch(resetPlayingStep());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
