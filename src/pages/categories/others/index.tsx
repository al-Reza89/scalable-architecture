import Other1 from '@/components/AllOthers/other1/Other1';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllOthers/other1/Other1Text';
import Other3Raw from '@/components/AllOthers/other3/Other3Raw';
import {
  Code3,
  RawCode3,
  RawCss3,
} from '@/components/AllOthers/other3/Other3Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <Other1 />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
  },
  components3: {
    component: <Other3Raw />,
    code: Code3,
    RawCode: RawCode3,
    RawCss: RawCss3,
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
