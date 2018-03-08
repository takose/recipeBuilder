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
    sendCommand: PropTypes.func,
  }

  static defaultProps = {
    sendCommand: null,
  }

  render() {
    const {
      step, id, action, ingredients, sendCommand, customStyles,
    } = this.props;
    let description;
    switch (step.actionId) {
      case 'measure':
        description = `${step.options.content.amount}cc`;
        break;
      case 'pour':
        description = step.options.content.map((option) => {
          const ingredient = ingredients.find(i => i.id === option.ingredientId);
          return (
            <div>
              {ingredient.name_ja}: {option.time}分後
            </div>
          );
        });
        break;
      default:
        break;
    }
    let deviceSwitch = null;
    if (sendCommand !== null) {
      const options = step;
      deviceSwitch = (
        <button
          className={customStyles.switch}
          onClick={() => {
            sendCommand(step.options.name, options);
          }}
        >
          ON
        </button>
      );
    }

    return (
      <div className={`${styles.step} ${customStyles.step}`}>
        <div className={`${styles.overview} ${customStyles.overview}`}>
          {parseInt(id, 10) + 1}. {action.name_ja}
        </div>
        <StepImage step={step} />
        <div className={`${styles.description} ${customStyles.description}`}>
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
