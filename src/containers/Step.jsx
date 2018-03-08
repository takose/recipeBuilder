import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StepImage from './StepImage';

class Step extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    step: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    action: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    sendCommand: PropTypes.func,
  }

  static defaultProps = {
    sendCommand: null,
  }

  render() {
    const { step, id, action, ingredients, sendCommand, styles } = this.props;
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
    let deviceSwitch = null;
    if (step.options !== undefined && sendCommand !== null) {
      const options = step;
      deviceSwitch = (
        <button
          className={styles.switch}
          onClick={() => {
            sendCommand(step.options.name, options);
          }}
        >
          ON
        </button>
      );
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
        {deviceSwitch}
      </div>
    );
  }
}

export default connect(state => ({
  ingredients: state.ingredients,
}))(Step);
