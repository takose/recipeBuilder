import React from 'react';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import { updatePutaOption } from '../actions';
import styles from './Option.scss';

class OptionPuta extends React.Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <div className={styles.option}>
        <form onSubmit={onSubmit} className={styles.form}>
          <input type="text" name="name" />
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
  onSubmit: (e) => {
    e.preventDefault();
    dispatch(updatePutaOption());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionPuta);

