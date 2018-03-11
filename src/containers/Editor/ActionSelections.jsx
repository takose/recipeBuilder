import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './TempStep.scss';
import { updateStepAction, updateOption } from '../../actions';

class ActionSelections extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    steps: PropTypes.PropTypes.object.isRequired,
    stepId: PropTypes.number.isRequired,
    actions: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentActionIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    onActionNameClick: PropTypes.func.isRequired,
  }
  render() {
    const {
      steps, stepId, currentActionIds, actions, onActionNameClick, deviceOptions,
    } = this.props;
    const currentStep = steps[stepId];
    const currentActionNames = currentActionIds.map((id) => {
      const action = actions.find(a => a.id === id);
      const isCurrentAction = action.id === currentStep.actionId;
      return (
        <button
          key={action.id}
          className={
            isCurrentAction ? styles.actionName : styles.actionNameInactive
          }
          onClick={() => onActionNameClick(isCurrentAction, id, deviceOptions)}
        >
          {action.name_ja}
        </button>
      );
    });

    return (
      <div className={styles.actionNamesWrapper}>
        {
          currentStep.ingredientIds.length > 0 || currentStep.toolIds.length > 0 ? (
            <div>
              <p>Select:</p>
              <div className={styles.actionNames}>
                {currentActionNames}
              </div>
            </div>
          ) : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentActionIds: state.currentStep.actionIds,
  ingredients: state.ingredients,
  actions: state.actions,
  steps: state.steps,
  deviceOptions: state.deviceOptions,
});

const mapDispatchToProps = dispatch => ({
  onActionNameClick: (isCurrentAction, currentActionId, deviceOptions) => {
    if (isCurrentAction) {
      dispatch(updateStepAction(''));
      dispatch(updateOption(null));
    } else {
      dispatch(updateStepAction(currentActionId));
      if (currentActionId === 'measure') {
        dispatch(updateOption({
          device: 'smoon',
          content: {
            amount: 0,
          },
        }));
      } else if (currentActionId === 'pour') {
        const optionContent = deviceOptions.puta.pod.map(p => (
          {
            ingredientId: p,
            time: 0,
          }
        ));
        const option = {
          device: 'puta',
          content: [
            ...optionContent,
          ],
        };
        dispatch(updateOption(option));
      } else if (currentActionId === 'fry' || currentActionId === 'stew') {
        dispatch(updateOption({
          device: 'ff',
          content: {
            power: 0,
            time: 0,
          },
        }));
      } else if (currentActionId === 'switch_power') {
        dispatch(updateOption({
          device: 'ff',
          content: {
            power: 0,
          },
        }));
      } else {
        dispatch(updateOption(null));
      }
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionSelections);
