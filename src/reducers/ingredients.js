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
    image_url: 'https://i.gyazo.com/d9d19d7070d31d17fb1f666a45fbe1b6.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'dashi',
    name: 'dashi',
    name_ja: '白だし',
    image_url: 'https://i.gyazo.com/20c5b1597fe33788476307d2ceb8e16c.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'garlic',
    name: 'garlic',
    name_ja: 'にんにく',
    image_url: 'https://i.gyazo.com/8e1798936dad3858aae8bb2a270595bf.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'olieve_oil',
    name: 'olieve_oil',
    name_ja: 'オリーブオイル',
    image_url: 'http://1.bp.blogspot.com/-mD0jvkOxI1I/UTbWy8x6LII/AAAAAAAAOko/z6MdC9DsGww/s400/olive_oil.png',
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
    image_url: 'https://i.gyazo.com/0a76b0cda861df5e32410ef9e08d8d2d.png',
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
