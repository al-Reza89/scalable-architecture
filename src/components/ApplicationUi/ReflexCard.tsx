export interface IReflexCard {
  component: any;
}

const ReflexCard: React.FC<IReflexCard> = ({ component }) => {
  // console.log({ component: component.type });

  return <div className="  my-6  ">{component}</div>;
};

export default ReflexCard;
