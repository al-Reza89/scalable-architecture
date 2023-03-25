import Table1 from '@/components/AllTables/table1/Table1';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllTables/table1/Table1Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <Table1 />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
  },
};

const Tables = () => {
  return (
    <div className="">
      <CategoryHome
        componentsObjects={componentsObjects}
        CategoryName="Tables"
      />
    </div>
  );
};

export default Tables;
