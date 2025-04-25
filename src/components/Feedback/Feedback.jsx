import css from './Feedback.module.css'

const Feedback = ({ feedback, total, positiveFeedback }) => {
    return (
      <div className={css.container}>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {positiveFeedback}%</p>
      </div>
    );
  };
  
  export default Feedback;

 