import { componentsCategory } from '@/data/ApplicationUiData';
import NavbarDemo from './ApplicationUi/NavbarDemo';

const AppliCationSection = () => {
  return (
    <div className="bg-[rgb(31,31,32)]">
      <div className="max-w-7xl mx-auto">
        <div className="py-10">
          <span className="pb- font-serif text-4xl">Application UI</span>
          <div className="pt-6 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2  ">
            {componentsCategory.map((categories, index) => (
              <div key={index} className=" w-[1250px] mt-4 ">
                <NavbarDemo categories={categories} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliCationSection;
