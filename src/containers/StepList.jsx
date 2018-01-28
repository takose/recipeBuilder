import { connect } from 'react-redux';
import React from 'react';
import { addStep } from '../actions';
import styles from './StepList.scss';

class StepList extends React.Component {
  render() {
    const steps = this.props.steps.map((step) => {
      const ingredients = step.ingredients.map(ingredient => (
        <div className={styles.element}>
          <img src={ingredient.image_url} alt={ingredient.name} />
        </div>
      ));
      const tools = step.tools.map(tool => (
        <div className={styles.element}>
          <img src={tool.image_url} alt={tool.name} />
        </div>
      ));
      return (
        <div className={styles.step}>
          <div className={styles.ingredients}>
            {ingredients}
          </div>
          <div className={styles.tools}>
            {tools}
          </div>
        </div>
      );
    });
    return (
      <div className={styles.stepList}>
        {steps}
        <button
          className={styles.stepAdder}
          onClick={() => this.props.onStepAddClick()}
        >
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
