import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateOption } from '../../actions';
import styles from './Option.scss';

class OptionPuta extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    options: PropTypes.object.isRequired,
  }

  render() {
    const { onChange, options } = this.props;
    return (
      <div className={styles.option}>
        <form className={styles.form}>
          <input
            type="text"
            name="name"
            onChange={e => onChange(e, options)}
          />
          CC
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  options: state.steps[state.currentStep.stepId].options,
});

const mapDispatchToProps = dispatch => ({
  onChange: (e, options) => {
    const newOption = {
      ...options,
      content: {
        amount: e.target.value,
      },
    };
    e.preventDefault();
    dispatch(updateOption(newOption));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionPuta);

