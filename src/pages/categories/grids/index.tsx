import Grid1 from '@/components/AllGrids/grid1/Grid1';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllGrids/grid1/Grid1Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <Grid1 />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
  },
};

const Grids = () => {
  return (
    <div className="">
      <CategoryHome
        componentsObjects={componentsObjects}
        CategoryName="Grids"
      />
    </div>
  );
};

export default Grids;
