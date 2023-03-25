import User1 from '@/components/AllUsers/user1/User1';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllUsers/user1/User1Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';

const componentsObjects = {
  components1: {
    component: <User1 />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
  },
};

const Users = () => {
  return (
    <div className="">
      <CategoryHome
        componentsObjects={componentsObjects}
        CategoryName="Users"
      />
    </div>
  );
};

export default Users;
