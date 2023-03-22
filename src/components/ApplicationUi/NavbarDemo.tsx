import Image from 'next/image';
import Link from 'next/link';

export interface INavbarDemo {
  category: string;
}

const NavbarDemo: React.FC<INavbarDemo> = ({ category }) => {
  console.log(category);

  return (
    <div className="w-[24%] h-60 ">
      <Link href={`category/${category}`}>
        <div className="h-[75%] w-full bg-black rounded-t-md cursor-pointer  relative ">
          <Image
            src={'/images/navbar.svg'}
            alt="navbar"
            fill
            className="w-full h-full hover:touch-pinch-zoom "
          />
        </div>
        <div className="h-[25%] bg-[rgb(71,75,83)] rounded-b-md px-2  py-1 ">
          <div className="font-sans">{category}</div>
          <div className="text-xs ">See all Components</div>
        </div>
      </Link>
    </div>
  );
};

export default NavbarDemo;
