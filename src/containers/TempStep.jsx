import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import Ingredient from './Ingredient';
import styles from './TempStep.scss';
import OptionPuta from './OptionPuta';
import OptionSmoon from './OptionSmoon';

class TempStep extends React.Component {
  render() {
    const { ingredients, tools, stepId, steps, equipments, toolPlace } = this.props;
    const currentStep = steps[stepId];
    const currentTools = currentStep.toolIds.length > 0 ?
      tools.map((t) => {
        if (currentStep.toolIds.includes(t.id)) {
          return (
            <div
              className={styles.tool}
              style={{
                backgroundImage: `url(${t.image_url})`,
              }}
              src={t.image_url}
              alt="tool"
            />
          );
        }
        return null;
      }) :
      (
        <div
          className={styles.tool}
          style={{
            backgroundImage: "url('https://i.gyazo.com/5491ce24a2df9e79f48f5bab25f0a082.png')",
            height: '50%',
          }}
        />
      );
    const ingredient = ingredients.find(i => i.id === currentStep.ingredientId);
    return (
      <div className={styles.step}>
        <div className={styles.tools}>
          {currentTools}
        </div>
        <div className={styles.ingredients}>
          {ingredient !== undefined ?
            <div className={styles.ingredient}>
              <Ingredient
                ingredient={ingredient}
                showAction={false}
              />
            </div> :
            <div
              className={styles.ingredient}
              style={{
                backgroundImage: "url('https://i.gyazo.com/8d2105d58afc3c850accb43630c7c63f.png')",
                height: '50%',
              }}
            />
          }
        </div>
        {_.isEqual(currentStep.toolIds, ['pot', 'puta']) ?
          <div className={styles.options}>
            <OptionPuta stepId={stepId} />
          </div>
          : null
        }
        {currentStep.toolIds.includes('spoon') ?
          <div className={styles.options}>
            <OptionSmoon stepId={stepId} />
          </div>
          : null
        }
      </div>
    );
  }
}

export default connect((state) => {
  return {
    ingredients: state.ingredients,
    tools: state.tools,
    steps: state.steps,
    equipments: state.equipments,
    toolPlace: state.toolPlace,
  };
})(TempStep);
