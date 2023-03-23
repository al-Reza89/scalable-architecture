import AllNavbars from '@/components/ApplicationUi/AllNavbars';
import Headers from '@/components/Headers';

const Navbars = () => {
  return (
    <div className="">
      <Headers />
      <div className="max-w-7xl mx-auto pt-10 ">
        <AllNavbars />
      </div>
    </div>
  );
};

export default Navbars;
