import Button1 from '@/components/AllButtons/button1/Button1';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllButtons/button1/Button1Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <Button1 />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
  },
};

const Buttons = () => {
  return (
    <div className="">
      <CategoryHome
        componentsObjects={componentsObjects}
        CategoryName="Buttons"
      />
    </div>
  );
};

export default Buttons;
