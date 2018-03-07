import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StepImage from './StepImage';
import styles from './Step.scss';

class Step extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    step: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    action: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
  }

  render() {
    const { step, id, action, ingredients } = this.props;
    let description;
    switch (step.actionId) {
      case 'measure':
        description = `${step.options}cc`;
        break;
      case 'pour':
        description = step.options.map((option) => {
          const ingredient = ingredients.find(i => i.id === option.ingredientId);
          return `${ingredient.name_ja}: ${option.time}分後`;
        });
        break;
      default:
        break;
    }
    return (
      <div className={styles.step}>
        <div className={styles.overview}>
          {parseInt(id, 10) + 1}. {action.name_ja}
        </div>
        <StepImage step={step} />
        <div className={styles.description}>
          {description}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  ingredients: state.ingredients,
}))(Step);
