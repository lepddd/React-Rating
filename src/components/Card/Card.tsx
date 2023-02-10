import "./Card.css";

type Props = {
  children?: JSX.Element;
};

export const Card = ({ children }: Props) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};
