import { AiOutlineArrowLeft } from 'react-icons/ai';
import Headers1 from '../AllHeaders/Headers1';
import ShowNavbar from './ShowNavbar';

const componentsObjects = {
  components1: <Headers1 />,
  compnents2: <Headers1 />,
  compnents3: <Headers1 />,
};

const AllNavbars = () => {
  return (
    <div>
      <div>
        <div className="flex gap-1 text-blue-300 items-center cursor-pointer mb-5 ">
          <AiOutlineArrowLeft className="h-2 w-2" />
          <span className="font-thin text-sm">Back to all categories</span>
        </div>
        <span className="text-4xl font-extrabold  font-sans text-gray-400 ">
          Navbars
        </span>
        <div>
          {Object.entries(componentsObjects).map(([key, value]) => (
            <ShowNavbar key={key} component={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNavbars;
