import DragNDrop1 from '@/components/AllDragNDrops/dragNDrop1/DragNDrop1';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllDragNDrops/dragNDrop1/DragNDrop1Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <DragNDrop1 />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
  },
};

const DragNDrops = () => {
  return (
    <div className="">
      <CategoryHome
        componentsObjects={componentsObjects}
        CategoryName="DragNDrops"
      />
    </div>
  );
};

export default DragNDrops;
