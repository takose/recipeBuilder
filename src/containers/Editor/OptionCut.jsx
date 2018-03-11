import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateOption } from '../../actions';
import styles from './Option.scss';

class OptionFF extends React.Component {
  static propTypes = {
    onSliderChange: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    options: PropTypes.object.isRequired,
  }

  render() {
    const { onSliderChange, options } = this.props;
    let text = '';
    switch (options.content.fineness) {
      case '1':
        text = 'みじん切り';
        break;
      case '2':
        text = '粗みじん';
        break;
      case '3':
        text = '薄切り';
        break;
      case '4':
        text = '小さめ';
        break;
      case '5':
        text = '一口大';
        break;
      case '6':
        text = '大きめ';
        break;
      default:
        break;
    }
    return (
      <div className={styles.option}>
        <div className={styles.form}>
          細かさ
          <input
            type="range"
            min="1"
            max="6"
            name="fineness"
            className={styles.slider}
            onChange={e => onSliderChange(e, options)}
          />
        </div>
        {text}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  options: state.steps[state.currentStep.stepId].options,
});

const mapDispatchToProps = dispatch => ({
  onSliderChange: (e, options) => {
    const newOption = {
      ...options,
      content: {
        ...options.content,
        fineness: e.target.value,
      },
    };
    e.preventDefault();
    dispatch(updateOption(newOption));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionFF);


