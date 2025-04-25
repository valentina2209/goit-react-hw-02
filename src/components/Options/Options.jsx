import css from './Options.module.css';

  const Options = ({ updateFeedback, onReset, totalFeedback }) => {
    return (
      <div>
        <button onClick={() =>  updateFeedback('good')}>Good</button>
        <button onClick={() =>  updateFeedback('neutral')}>Neutral</button>
        <button onClick={() =>  updateFeedback('bad')}>Bad</button>
        
        {totalFeedback && <button className={css.resetButton} onClick={onReset}>Reset</button>}
      </div>
    );
  };
  
  export default Options;

 