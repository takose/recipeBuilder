import { connect } from 'react-redux';
import React from 'react';
import { addStep } from '../actions';
import styles from './StepList.scss';

class StepList extends React.Component {
  render() {
    const steps = this.props.steps.map((step) => {
      const ingredients = step.ingredients.map(ingredient => (
        <img src={ingredient.image_url} alt={ingredient.name} />
      ));
      return (<div className="step">{ingredients}</div>);
    });
    return (
      <div className={styles.stepList}>
        {steps}
        <button onClick={() => this.props.onStepAddClick()}>
          +
        </button>
      </div>
    );
  }
}

export default connect(state => ({
  steps: state.steps,
}), {
  onStepAddClick: addStep,
})(StepList);
