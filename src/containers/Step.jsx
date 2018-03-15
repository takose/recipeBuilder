import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StepImage from './StepImage';
import styles from './Step.scss';
import { forwardStep } from '../actions';

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

  state = {
    done: false,
  }

  componentWillReceiveProps = ({ step, sendCommand }) => {
    this.setState({ done: false });
    if (sendCommand != null) {
      sendCommand(step.options.device, step.options.content).then(() => {
        setTimeout(() => {
          this.setState({ done: true });
        }, 1000);
      });
    }
  }

  render() {
    const {
      step, id, action, ingredients, sendCommand, customStyles, doneClick, player, currentStepId,
    } = this.props;

    if (this.state.done) {
      if (step.options != null && (step.options.device === 'ff' || step.options.device === 'puta')) {
        setTimeout(() => {
          doneClick();
        }, 1000);
      }
    }
    let description;
    switch (step.actionId) {
      case 'measure':
        description = `${step.options.content.amount}cc`;
        break;
      case 'pour':
        description = step.options.content.map((option) => {
          const ingredient = ingredients.find(i => i.id === option.ingredientId);
          return (
            <div className={styles.textStyle}>
              {ingredient.name_ja}: {option.time}分後
            </div>
          );
        });
        break;
      case 'switch_power':
        description = `${step.options.content.power}にする`;
        break;
      case 'fry':
        description = `${step.options.content.power}で${step.options.content.time}分`;
        break;
      case 'stew':
        description = `${step.options.content.power}で${step.options.content.time}分`;
        break;
      case 'cut':
        switch (step.options.content.fineness) {
          case '1':
            description = 'みじん切り';
            break;
          case '2':
            description = '粗みじん';
            break;
          case '3':
            description = '薄切り';
            break;
          case '4':
            description = '小さめ';
            break;
          case '5':
            description = '一口大';
            break;
          case '6':
            description = '大きめ';
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
    description = description != undefined ? (
      <div className={`${styles.description} ${customStyles.description}`}>
        {description}
      </div>
    ) : null;
    let deviceSwitch;
    if (sendCommand != null && this.state.done && (step.options.device === 'ff' || step.options.device === 'puta')) {
      deviceSwitch = (
        <button
          className={customStyles.autoSwitchDone}
        >
          完了
        </button>
      );
    } else if (sendCommand != null && this.state.done === false) {
      deviceSwitch = (
        <button
          className={customStyles.autoSwitch}
        >
          処理中...
        </button>
      );
    } else {
      deviceSwitch = (
        <button
          className={customStyles.switch}
          onClick={() => {
            doneClick();
            this.setState({ done: false });
          }}
        >
          完了
        </button>
      );
    }

    return (
      <div className={`${styles.step} ${customStyles.step}`}>
        <div className={`${styles.overview} ${customStyles.overview}`}>
          {parseInt(id, 10) + 1}. {action.name_ja}
        </div>
        <StepImage step={step} player={player} />
        {description}
        {player ? deviceSwitch : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  currentStepId: state.currentStep.stepId,
});

const mapDispatchToProps = dispatch => ({
  doneClick: () => {
    dispatch(forwardStep());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Step);
