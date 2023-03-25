import ColorScheme1 from '@/components/AllColorScheme/colorScheme1/ColorScheme1';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllColorScheme/colorScheme1/ColorScheme1Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <ColorScheme1 />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
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
