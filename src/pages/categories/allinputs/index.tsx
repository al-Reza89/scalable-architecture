import Input1 from '@/components/AllInputs/input1/Input1';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllInputs/input1/Input1Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <Input1 />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
  },
};

const Inputs = () => {
  return (
    <div className="">
      <CategoryHome
        componentsObjects={componentsObjects}
        CategoryName="Inputs"
      />
    </div>
  );
};

export default Inputs;
