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
      onChange, podContents, ingredients,
    } = this.props;
    const putaPods = podContents.map((ingredientId, idx) => {
      const ingredient = ingredients.find(i => ingredientId === i.id);
      return (
        <label className={styles.label} id={`ingredientId${idx}`}>
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
  podContents: state.deviceOptions.puta.pod,
});

const mapDispatchToProps = dispatch => ({
  onChange: (e, options, idx) => {
    const result = options;
    result.content[idx].time = e.target.value;
    dispatch(updateOption(result));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionPuta);
