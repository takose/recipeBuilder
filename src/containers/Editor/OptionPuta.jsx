import React from 'react';
import { connect } from 'react-redux';
import styles from './Option.scss';
import IngredientImage from '../IngredientImage';

class OptionPuta extends React.Component {
  render() {
    const { onSubmit, putaOption, ingredients } = this.props;
    const putaPods = putaOption.map((pod, idx) => {
      const ingredient = ingredients.find((i) => pod === i.id)
      return (
        <label className={styles.label} id={`pod${idx}`}>
          <div className={styles.ingredientImage}>
            <IngredientImage
              item={ingredient}
              showAction={false}
            />
          </div>
          <input type="text" name="name" />
          分後
        </label>
      );
    });

    return (
      <div className={styles.option}>
        <form onSubmit={onSubmit}>
          <br />
          {putaPods}
          <br />
          <input className={styles.submit} type="submit" value="けってい" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  putaOption: state.deviceOptions.puta.pod,
});

const mapDispatchToProps = () => ({
  onSubmit: (e) => {
    e.preventDefault();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionPuta);
