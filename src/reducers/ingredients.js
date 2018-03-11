const initialState = [
  {
    id: 'salmon',
    name: 'salmon',
    name_ja: '鮭',
    image_url: 'http://1.bp.blogspot.com/-b2W2ifAD3B8/VEETDUS6API/AAAAAAAAoYk/CWPpdhcPUWY/s450/fish_sake_kirimi.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'cabbage',
    name: 'cabbage',
    name_ja: '白菜',
    image_url: 'http://2.bp.blogspot.com/-7kSHbON57sE/UkJM4oCs9kI/AAAAAAAAYU4/wxHKVqDMs0E/s400/hakusai.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'mushroom',
    name: 'mushroom',
    name_ja: 'しめじ',
    image_url: 'http://1.bp.blogspot.com/-dXDBZaZlsz4/UsZtL8rLVNI/AAAAAAAAczA/M1QnhzlIKxE/s400/kinoko_shimeji.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'cream',
    name: 'cream',
    name_ja: '生クリーム',
    image_url: 'https://i.gyazo.com/ebdcccacf463e9d8eda6f126f3cf0476.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'dashi',
    name: 'dashi',
    name_ja: '白だし',
    image_url: 'https://i.gyazo.com/80acd23e019931b3aa105c601ad12c36.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'garlic',
    name: 'garlic',
    name_ja: 'にんにく',
    image_url: 'https://i.gyazo.com/2e3f10dbdcb572abfefdcafbba94fa13.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'butter',
    name: 'butter',
    name_ja: 'バター',
    image_url: 'https://i.gyazo.com/a97bd4befce4fe205e69b9d38318ec7e.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'potato_starch',
    name: 'potato_starch',
    name_ja: '片栗粉',
    image_url: 'http://2.bp.blogspot.com/-lcJUgdFg-zE/VD3R5Ble0SI/AAAAAAAAoKs/atXlY08fM5M/s400/cooking_katakuriko.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'salt',
    name: 'salt',
    name_ja: '塩',
    image_url: 'https://i.gyazo.com/c25abb67fab04198f6c8f01867aca284.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'water',
    name: 'water',
    name_ja: '水',
    image_url: 'http://4.bp.blogspot.com/-x1wpk9HRedI/UICmyfbj1KI/AAAAAAAAGbA/ARFlXgvHqE4/s400/medicine_cup_water.png',
    merged: false,
    addedActionIds: [],
  },
];

const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INGREDIENT_STATE':
      return state.map((i) => {
        if (action.ingredientId === i.id) {
          return {
            ...i,
            addedActionIds: [
              ...i.addedActionIds,
              action.actionId,
            ],
          };
        }
        return i;
      });
    case 'UPDATE_MERGED_INGREDIENT_STATE':
      return state.map((i) => {
        if (action.ingredientId === i.id) {
          return {
            ...i,
            merged: true,
          };
        }
        return i;
      });
    default:
      return state;
  }
};

export default ingredients;
