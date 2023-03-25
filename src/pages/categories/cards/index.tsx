import Card1 from '@/components/AllCards/card1/Card1';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllCards/card1/Card1Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <Card1 />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
  },
};

const Cards = () => {
  return (
    <div className="">
      <CategoryHome
        componentsObjects={componentsObjects}
        CategoryName="Cards"
      />
    </div>
  );
};

export default Cards;
