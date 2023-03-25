import Carosel1 from '@/components/AllCarosels/carosel1/Carosel1';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllCarosels/carosel1/Carosel1Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <Carosel1 />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
  },
};

const Carosels = () => {
  return (
    <div className="">
      <CategoryHome
        componentsObjects={componentsObjects}
        CategoryName="Carosels"
      />
    </div>
  );
};

export default Carosels;
