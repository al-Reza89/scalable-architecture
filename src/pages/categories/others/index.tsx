import Other1 from '@/components/AllOthers/other1/Other1';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllOthers/other1/Other1Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <Other1 />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
  },
};

const Others = () => {
  return (
    <div className="">
      <CategoryHome
        componentsObjects={componentsObjects}
        CategoryName="Others"
      />
    </div>
  );
};

export default Others;
