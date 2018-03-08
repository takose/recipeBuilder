import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Option.scss';
import IngredientImage from '../IngredientImage';
import { updateOption } from '../../actions';

class OptionPuta extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  render() {
    const {
      onChange, options, ingredients,
    } = this.props;
    const putaPods = options.content.map((pod, idx) => {
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
            onChange={e => onChange(e, options, idx)}
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
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  options: state.steps[state.currentStep.stepId].options,
});

const mapDispatchToProps = dispatch => ({
  onChange: (e, options, idx) => {
    const result = options;
    result.content[idx].time = e.target.value;
    dispatch(updateOption(result));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionPuta);
