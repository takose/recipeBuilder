import React from 'react';
import { connect } from 'react-redux';
import styles from './Kitchen.scss';
import StepWrapper from './StepWrapper';
import StepNavigation from '../containers/StepNavigation';

class Kitchen extends React.Component {
  render() {
    const { currentEquipmentId, stepId } = this.props;
    return (
      <div className={styles.kitchenWrapper}>
        <StepNavigation />
        <div className={styles.kitchen}>
          <div className={styles.stove}>
            <div className={styles.stoveStep}>
              { (currentEquipmentId === 'ff') ? <StepWrapper /> : null }
            </div>
          </div>
          <div className={styles.table}>
            <div className={styles.tableStep}>
              { (currentEquipmentId === 'table') ? <StepWrapper /> : null }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  currentEquipmentId: state.currentStep.equipmentId,
  stepId: state.currentStep.stepId,
}))(Kitchen);
