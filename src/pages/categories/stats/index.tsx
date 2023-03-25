import Stat1 from '@/components/AllStats/stat1/Stat1';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllStats/stat1/Stat1Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <Stat1 />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
  },
};

const Stats = () => {
  return (
    <div className="">
      <CategoryHome
        componentsObjects={componentsObjects}
        CategoryName="Stats"
      />
    </div>
  );
};

export default Stats;
