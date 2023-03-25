import Footer1 from '@/components/AllFooters/footer1/Footer1';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllFooters/footer1/Footer1Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <Footer1 />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
  },
};

const Footers = () => {
  return (
    <div className="">
      <CategoryHome
        componentsObjects={componentsObjects}
        CategoryName="Footers"
      />
    </div>
  );
};

export default Footers;
