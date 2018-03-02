import 'normalize.css';
import 'babel-polyfill';
import React from 'react';
// import SerialPort from 'serialport';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
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
  }

  onTimeChange = (e) => {
    const newStep = this.state.steps;
    newStep[this.state.activeStepId].time = parseInt(e.target.value, 10);
    this.setState({
      steps: newStep,
    });
    if (this.state.steps[this.state.activeStepId].power !== '') {
    }
  }

  onPowerChange = (e) => {
    const newStep = this.state.steps;
    newStep[this.state.activeStepId].power = parseInt(e.target.value, 10);
    this.setState({
      steps: newStep,
    });
    if (this.state.steps[this.state.activeStepId].time !== '') {
    }
  }

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
  //   const port = new SerialPort('/dev/tty-usbserial1', {
  //     baudRate: 57600,
  //     autoOpen: false,
  //   });

  //   console.log('playFF');
  //   await setTimeout(() => {
  //     console.log('enter');
  //   }, 1000);

  //   port.on('error', (err) => {
  //     console.log('Error: ', err.message);
  //   });

  //   port.on('data', (data) => {
  //     console.log('Data:', data);
  //   });
  };

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
      </button>
    ));
    const isPlayable = this.state.isPlay || this.state.steps.length > 1;

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
              onClick={isPlayable ? null : this.playFF}
            >
              PLAY
            </button>
          </div>
        </div>
      </div>
    );
  }
}

