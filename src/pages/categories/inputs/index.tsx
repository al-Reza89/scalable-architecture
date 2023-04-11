import Input1Raw from '@/components/AllInputs/input1/Input1Raw';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllInputs/input1/Input1Text';
import Input2Raw from '@/components/AllInputs/input2/Input2Raw';
import {
  Code2,
  RawCode2,
  RawCss2,
} from '@/components/AllInputs/input2/Input2Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <Input1Raw />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
  },
  components2: {
    component: <Input2Raw />,
    code: Code2,
    RawCode: RawCode2,
    RawCss: RawCss2,
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
