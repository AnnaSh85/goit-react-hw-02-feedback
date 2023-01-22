import style from './vote.module.css';
import { Component } from "react";
import Statistics from './Statistics/Statistics';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Section from 'modules/Section/Section';
import Notification from './Notification/Notification';

const voteOptions = ["good", "bad", "neutral"];

class Vote extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    countTotalFeedback() {
        const { good, bad, neutral } = this.state;
        const total = good + bad + neutral;
        return total;
    }

    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        if (!total) {
            return 0;
        }
        const result = ((this.state.good / total) * 100).toFixed(0); 
        return Number(result);
    }

    leaveVote = (name) => {
        this.setState(prevState => {
            return {
                [name]: prevState[name] + 1
            }
        });
    }

    render() {
        const { good, bad, neutral } = this.state;
        const total = this.countTotalFeedback(); 
        const positivePercentage = this.countPositiveFeedbackPercentage(); 
        return (
        <div className={style.wrapper}>
              
                <Section title="Please leave feedback">
                    <FeedbackOptions options={voteOptions} leaveVote={this.leaveVote}/> 
                </Section>
            
                <Section title="Statistic">
                      
                   {this.countTotalFeedback() !== 0 ? (
                    <Statistics
                        total={total}
                        good={good}
                        bad={bad}
                        neutral={neutral}
                        positivePercentage={positivePercentage} /> ) : (                         
                        <Notification message="There is no feedback"></Notification>)}
                </Section>
         </div>)
    }
}

export default Vote;

     