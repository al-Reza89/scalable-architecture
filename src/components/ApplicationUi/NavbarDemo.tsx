import Image from 'next/image';
import Link from 'next/link';

export interface INavbarDemo {
  categories: any;
}

const NavbarDemo: React.FC<INavbarDemo> = ({ categories }) => {
  // console.log(categories.category);

  return (
    <div className="w-[24%] h-60  ">
      <Link href={`category/${categories.url}`}>
        <div className="h-[75%] w-full bg-black rounded-t-md cursor-pointer  relative ">
          <Image
            src={`/images/${categories.url}.svg`}
            alt={`${categories.url}`}
            fill
            className="w-full h-full hover:touch-pinch-zoom  "
          />
        </div>
        <div className="h-[25%] bg-[rgb(71,75,83)] rounded-b-md px-2  py-1 ">
          <div className="font-sans">{categories.category}</div>
          <div className="text-xs ">See all Components</div>
        </div>
      </Link>
    </div>
  );
};

export default NavbarDemo;
