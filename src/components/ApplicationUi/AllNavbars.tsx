import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Code, RawCode, RawCss } from '../AllHeaders/Header1/Header1Text';
import Headers1 from '../AllHeaders/Header1/Headers1';
import Header2 from '../AllHeaders/Header2/Header2';
import { Code2, RawCode2, RawCss2 } from '../AllHeaders/Header2/Header2Text';
import ShowNavbar from './ShowNavbar';

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

const AllNavbars = () => {
  return (
    <div>
      <div className="">
        <div className="flex gap-1 text-blue-300 items-center cursor-pointer mb-5 ">
          <AiOutlineArrowLeft className="h-2 w-2" />
          <Link href={'/category'}>
            <span className="font-thin text-sm">Back to all categories</span>
          </Link>
        </div>
        <span className="text-4xl font-extrabold  font-sans text-gray-400 ">
          Navbars
        </span>
        <div>
          {Object.entries(componentsObjects).map(
            ([key, { component, code, RawCode, RawCss }]) => (
              <ShowNavbar
                key={key}
                component={component}
                code={code}
                RawCode={RawCode}
                RawCss={RawCss}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AllNavbars;
