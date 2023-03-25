import Slider1 from '@/components/AllSliders/slider1/Slider1';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllSliders/slider1/Slider1Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <Slider1 />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
  },
};

const Sliders = () => {
  return (
    <div className="">
      <CategoryHome
        componentsObjects={componentsObjects}
        CategoryName="Sliders"
      />
    </div>
  );
};

export default Sliders;
