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
import Input3Raw from '@/components/AllInputs/input3/Input3Raw';
import {
  Code3,
  RawCode3,
  RawCss3,
} from '@/components/AllInputs/input3/Input3Text';
import Input4Raw from '@/components/AllInputs/input4/Input4Raw';
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
  components3: {
    component: <Input3Raw />,
    code: Code3,
    RawCode: RawCode3,
    RawCss: RawCss3,
  },
  components4: {
    component: <Input4Raw />,
    code: Code3,
    RawCode: RawCode3,
    RawCss: RawCss3,
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
