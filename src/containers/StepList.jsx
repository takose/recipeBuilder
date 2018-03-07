import { connect } from 'react-redux';
import React from 'react';
import styles from './StepList.scss';
import Step from './Step';

class StepList extends React.Component {
  render() {
    const { steps, actions } = this.props;
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
