import 'normalize.css';
import 'babel-polyfill';
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';
import io from 'socket.io-client';
import DrawChart from '../containers/FF/DrawChart';
import styles from './FF.scss';

export default class FF extends React.Component {
  state = {
    steps: [
      {
        power: '',
        time: '',
      },
    ],
    activeStepId: 0,
    socket: null,
  }

  componentDidMount = () => {
    this.setState({
      socket: this.connectWebSocket(),
    });
  }

  onTimeChange = (e) => {
    const newStep = this.state.steps;
    newStep[this.state.activeStepId].time = parseInt(e.target.value, 10);
    this.setState({
      steps: newStep,
    });
  }

  onPowerChange = (e) => {
    const newStep = this.state.steps;
    newStep[this.state.activeStepId].power = parseInt(e.target.value, 10);
    this.setState({
      steps: newStep,
    });
  }

  connectWebSocket = () => (
    io('http://localhost:3000', {
      query: {
        type: 'user',
      },
    })
  );

  addStep = () => {
    this.setState({
      steps: [
        ...this.state.steps,
        {
          power: '0',
          time: '0',
        },
      ],
      isPlay: false,
    });
  }

  changeActiveStep = (id) => {
    this.setState({
      activeStepId: id,
    });
  }

  playFF = async () => {
    let idx = 0;
    for (let step of this.state.steps) {
      await this.sendCommand(step, idx);
      idx = idx + 1;
      console.log('done 1 step');
    }
    console.log('done steps');
    console.log('**done steps**');
    this.state.socket.emit('users/state:update', {
      deviceId: 'ff',
      states: {
        power: '0',
        time: '0',
      },
    });
    this.setState({ isPlay: false });
  }

  sendCommand = (step, idx) => {
    const device = {
      id: idx,
      deviceId: 'ff',
      states: step,
    };
    this.state.socket.emit('users/state:update', device);
    this.state.socket.on('users/state:update/return', () => {
    });
    return new Promise((resolve) => {
      this.state.socket.once('users/ff/done', () => {
        this.state.socket.emit('users/ff/done/return');
        resolve();
      });
    });
  };

  deleteStep = (id) => {
    const { steps } = this.state;
    steps.splice(id, 1);
    this.setState({ steps });
  }

  render() {
    const isButtonActive = this.state.steps[this.state.steps.length - 1].time > 0;
    const forms = this.state.steps.map((step, idx) => (
      <button
        className={styles.step}
        onClick={() => this.changeActiveStep(idx)}
      >
        {`${idx + 1}. 強さ`}
        <input
          type="number"
          min={0}
          max={6}
          value={step.power}
          onChange={this.onPowerChange}
          className={styles.select}
        />
        で
        <input
          type="number"
          min={0}
          value={step.time}
          onChange={this.onTimeChange}
          className={styles.select}
        />
        分
        {
          (this.state.steps.length !== 1) ? (
            <button
              className={styles.trash}
              onClick={() => this.deleteStep(idx)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          ) : null
        }
      </button>
    ));
    const isPlayable = !this.state.isPlay && this.state.steps.length > 1;

    return (
      <div className={styles.root}>
        <h1 className={styles.title}>FF Dashboard</h1>
        <div className={styles.workspace}>
          <div className={styles.chart}>
            <DrawChart steps={this.state.steps} />
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.steps}>
              {forms}
              <div className={isButtonActive ? styles.addStep : styles.addStepInactive}>
                Next
                <button
                  className={styles.addStepButton}
                  onClick={isButtonActive ? this.addStep : null}
                >
                  <div className={styles.plus}>
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </button>
              </div>
            </div>
            <button
              className={isPlayable ? styles.playButton : styles.playButtonInactive}
              onClick={isPlayable ? () => {
                this.setState({ isPlay: true });
                this.playFF();
              } : null}
            >
              PLAY
            </button>
          </div>
        </div>
      </div>
    );
  }
}

