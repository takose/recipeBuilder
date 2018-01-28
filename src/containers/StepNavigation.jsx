import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCoffee from '@fortawesome/fontawesome-free-solid/faHandPointRight';
import { connect } from 'react-redux';
import styles from './StepNavigation.scss';
import { addStep, incrementCurrentStepId } from '../actions';

class StepNavigation extends React.Component {
  render() {
    return (
      <div className={styles.stepNavigation}>
        <button onClick={this.props.onNextStepClick}>
          Next <FontAwesomeIcon icon={faCoffee} />
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onNextStepClick: () => {
    dispatch(addStep());
    dispatch(incrementCurrentStepId());
  },
});

export default connect(state => ({}), mapDispatchToProps)(StepNavigation);

