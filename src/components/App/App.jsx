import { useState, useEffect } from 'react';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import Description from '../Description/Description';
import css from './App.module.css';

const App = () => {
  
  const loadFeedbackFromLocalStorage = () => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    return savedFeedback || { good: 0, neutral: 0, bad: 0 };
  };

  const [feedback, setFeedback] = useState(loadFeedbackFromLocalStorage);

  useEffect(() => {
  localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));  
  };
    
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div className={css.container}>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        updateFeedback={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback > 0}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
      
    </div>
  );
};

export default App;


