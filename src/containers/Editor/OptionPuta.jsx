import React from 'react';
import { connect } from 'react-redux';
import styles from './Option.scss';
import IngredientImage from '../IngredientImage';
import { updateOption } from '../../actions';

class OptionPuta extends React.Component {
  render() {
    const { onChange, putaOption, ingredients } = this.props;
    const putaPods = putaOption.map((pod, idx) => {
      const ingredient = ingredients.find(i => pod.ingredientId === i.id)
      return (
        <label className={styles.label} id={`pod${idx}`}>
          <div className={styles.ingredientImage}>
            <IngredientImage
              item={ingredient}
              showAction={false}
            />
          </div>
          <input
            type="text"
            name="name"
            onChange={e => onChange(e, putaOption, idx)}
          />
          分後
        </label>
      );
    });

    return (
      <div className={styles.option}>
        <form>
          <br />
          {putaPods}
          <br />
          <input
            className={styles.submit}
            type="submit"
            value="けってい"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  putaOption: state.steps[state.currentStep.stepId].options,
});

const mapDispatchToProps = dispatch => ({
  onChange: (e, putaOption, idx) => {
    const result = putaOption;
    result[idx].time = e.target.value;
    dispatch(updateOption(result));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionPuta);
