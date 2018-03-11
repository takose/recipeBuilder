import { connect } from 'react-redux';
import React from 'react';
import styles from './StepList.scss';
import Step from './Step';
import EditorStyles from './StepEditor.scss';

class StepList extends React.Component {
  render() {
    const {
      steps, actions, sendCommand,
    } = this.props;
    const stepList = [];
    const stepKeys = Object.keys(steps);
    stepKeys.pop();
    stepKeys.forEach((key) => {
      stepList.push(<Step
        id={key}
        key={key}
        step={steps[key]}
        action={actions.find(a => a.id === steps[key].actionId)}
        showAction={false}
        sendCommand={player && steps[key].options !== null ? sendCommand : null}
        customStyles={player ? PlayerStyles : EditorStyles}
      />);
    });
    return (
      <div className={styles.stepList}>
        {stepList}
      </div>
    );
  }
}

export default connect(state => ({
  steps: state.steps,
  actions: state.actions,
}))(StepList);
