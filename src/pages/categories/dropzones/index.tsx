import DropZone1 from '@/components/AllDropZones/dropzone1/DropZone1';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllDropZones/dropzone1/DropZone1Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <DropZone1 />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
  },
};

const Dropzones = () => {
  return (
    <div className="">
      <CategoryHome
        componentsObjects={componentsObjects}
        CategoryName="Dropzones"
      />
    </div>
  );
};

export default Dropzones;
