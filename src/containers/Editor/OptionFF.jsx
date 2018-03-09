import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateOption } from '../../actions';
import styles from './Option.scss';

class OptionFF extends React.Component {
  static propTypes = {
    onTimeChange: PropTypes.func.isRequired,
    onPowerChange: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    options: PropTypes.object.isRequired,
  }

  render() {
    const { onTimeChange, onPowerChange, options } = this.props;
    return (
      <div className={styles.option}>
        <div className={styles.form}>
          強さ
          <input
            type="text"
            name="power"
            onChange={e => onPowerChange(e, options)}
          />
          <input
            type="text"
            name="time"
            onChange={e => onTimeChange(e, options)}
          />
          分
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  options: state.steps[state.currentStep.stepId].options,
});

const mapDispatchToProps = dispatch => ({
  onTimeChange: (e, options) => {
    const newOption = {
      ...options,
      content: {
        ...options.content,
        time: parseInt(e.target.value, 10),
      },
    };
    e.preventDefault();
    dispatch(updateOption(newOption));
  },
  onPowerChange: (e, options) => {
    const newOption = {
      ...options,
      content: {
        ...options.content,
        power: parseInt(e.target.value, 10),
      },
    };
    e.preventDefault();
    dispatch(updateOption(newOption));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionFF);

