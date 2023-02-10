import useRating from "../../store/store";
import { Answers } from "../Answers/Answers";
import "./RatingCard.css";

export const RatingCard = () => {
  const setIsRating = useRating((state) => state.setIsRating);
  const answers = [1, 2, 3, 4, 5];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRating(false);
  };

  return (
    <form className="rating_form" onSubmit={handleSubmit}>
      <h1 className="title">How did we do?</h1>

      <p className="description">
        Please let us know we didi with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <Answers answers={answers} />

      <button type="submit" className="submit_button">
        SUBMIT
      </button>
    </form>
  );
};
