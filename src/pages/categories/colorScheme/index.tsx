import {
  Code,
  RawCode,
  RawCss,
} from '@/components/AllHeaders/Header1/Header1Text';
import Headers1 from '@/components/AllHeaders/Header1/Headers1';
import Header2 from '@/components/AllHeaders/Header2/Header2';
import {
  Code2,
  RawCode2,
  RawCss2,
} from '@/components/AllHeaders/Header2/Header2Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <Headers1 />,
    code: Code,
    RawCode: RawCode,
    RawCss: RawCss,
  },
  components2: {
    component: <Header2 />,
    code: Code2,
    RawCode: RawCode2,
    RawCss: RawCss2,
  },
};

const ColorScheme = () => {
  return (
    <div className="">
      <CategoryHome
        componentsObjects={componentsObjects}
        CategoryName="ColorScheme"
      />
    </div>
  );
};

export default ColorScheme;
