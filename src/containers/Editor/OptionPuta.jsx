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
      onChange, podContents, ingredients, step,
    } = this.props;
    const putaPods = podContents.map((ingredientId, idx) => {
      const ingredient = ingredients.find(i => ingredientId === i.id);
      const podId = ['A', 'B', 'C', 'D'];
      return (
        <label className={styles.label} id={`ingredientId${idx}`}>
          <input
            type="radio"
            name="radio"
            onChange={e => onChange(e, step.options)}
            value={podId[idx]}
            checked={step.options.content.pod === podId[idx]}
          />
          <div className={styles.ingredientImage}>
            <IngredientImage
              item={ingredient}
              showAction={false}
            />
          </div>
        </label>
      );
    });

    return (
      <div className={styles.option}>
        {putaPods}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  step: state.steps[state.currentStep.stepId],
  ingredients: state.ingredients,
  podContents: state.deviceOptions.puta.pod,
});

const mapDispatchToProps = dispatch => ({
  onChange: (e, options) => {
    const result = options;
    result.content.pod = e.target.value;
    dispatch(updateOption(result));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionPuta);
