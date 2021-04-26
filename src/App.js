import React, { useState } from 'react';

import s from './App.module.css';
import Section from './components/Section/Section';
import Statistic from './components/Section/Statistic/Statistic';
import FeedbackOptions from './components/Section/FeedbackOptions/FeedbackOptions';
import Notification from './components/Section/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickBtnGood = () => {
    setGood(prevGood => prevGood + 1);
  };

  const onClickBtnNeutral = () => {
    setNeutral(prevNeutraln => prevNeutraln + 1);
  };

  const onClickBtnBad = () => {
    setBad(prevBad => prevBad + 1);
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback(good, neutral, bad);

  const countPositiveFeedbackPercentage = total => {
    return total === 0 ? 0 : Math.trunc((good * 100) / total);
  };
  const percent = countPositiveFeedbackPercentage(total);

  return (
    <div className={s.blocks}>
      <Section title={'Please Leave Feedback'}>
        <FeedbackOptions
          good={'good'}
          neutral={'neutral'}
          bad={'bad'}
          btnGood={onClickBtnGood}
          btnNeutral={onClickBtnNeutral}
          btnBad={onClickBtnBad}
        />
      </Section>

      <Section title={'Statistic'}>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percent}
          />
        )}
      </Section>
    </div>
  );
}
