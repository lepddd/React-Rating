import useRating from "../../store/store";
import { shallow } from "zustand/shallow";
import "./Answers.css";

type Props = {
  answers: number[];
};

export const Answers = ({ answers }: Props) => {
  const { answer, setAnswer } = useRating(
    (state) => ({ answer: state.answer, setAnswer: state.setAnswer }),
    shallow
  );

  return (
    <div className="box">
      {answers.map((rating, index) => (
        <span
          className={`rating_button ${answer === rating ? "active" : ""}`}
          key={index}
          onClick={() => setAnswer(rating)}
        >
          {rating}
        </span>
      ))}
    </div>
  );
};
