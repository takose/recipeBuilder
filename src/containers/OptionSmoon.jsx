import React from 'react';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import { updateOption } from '../actions';
import styles from './Option.scss';

class OptionPuta extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className={styles.option}>
        <form className={styles.form}>
          <input
            type="text"
            name="name"
            onChange={onChange}
          />
          CC
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: (e) => {
    e.preventDefault();
    dispatch(updateOption(e.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionPuta);

