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
            1つめ:
            <input type="text" name="name" />
            分後
          </label>
          <br />
          <label className={styles.label}>
            2つめ:
            <input type="text" name="name" />
            分後
          </label>
          <br />
          <label className={styles.label}>
            3つめ:
            <input type="text" name="name" />
            分後
          </label>
          <br />
          <label className={styles.label}>
            4つめ:
            <input type="text" name="name" />
            分後
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
    ingredients: state.ingredients,
    tools: state.tools,
    steps: state.steps,
    equipments: state.equipments,
    toolPlace: state.toolPlace,
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (e) => {
    e.preventDefault();
    dispatch(updatePutaOption());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionPuta);
