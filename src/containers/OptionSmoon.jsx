import React from 'react';
import { connect } from 'react-redux';
import { updatePutaOption } from '../actions';
import styles from './OptionPuta.scss';

class OptionPuta extends React.Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <div className={styles.optionPuta}>
        <form onSubmit={onSubmit}>
          <label className={styles.label}>
            <input type="text" name="name" />
            CC
          </label>
          <br />
          <input className={styles.submit} type="submit" value="けってい" />
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
  onSubmit: (e) => {
    e.preventDefault();
    dispatch(updatePutaOption());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionPuta);

