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
    const { step, id, action } = this.props;
    return (
      <div className={styles.step}>
        <div className={styles.overview}>
          {parseInt(id, 10) + 1}. {action.name_ja}
        </div>
        <StepImage step={step} />
        <div className={styles.description}>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
})(Step);
