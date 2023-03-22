import NavbarDemo from './ApplicationUi/NavbarDemo';

const componentsCategory = [
  {
    category: 'headers',
  },
  {
    category: 'sidebar',
  },
  {
    category: 'sidebar',
  },
  {
    category: 'sidebar',
  },
  {
    category: 'sidebar',
  },
];
const AppliCationSection = () => {
  return (
    <div className="bg-[rgb(47,48,51)]">
      <div className="max-w-6xl mx-auto">
        <div className="py-10">
          <span className="pb- font-serif text-4xl">Application UI</span>
          <div className="pt-6 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2  ">
            {componentsCategory.map((categories, index) => (
              <div key={index} className=" w-[1100px] mt-4 ">
                <NavbarDemo category={categories.category} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliCationSection;
