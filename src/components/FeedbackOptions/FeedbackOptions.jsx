import PropTypes from 'prop-types';
import { ButtonsBlock, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onFeedback }) => {
  // console.log(options);
  return (
    <ButtonsBlock>
    
       {options.map(option => {
        return (
          <li key={option}>
            <Button onClick={() => onFeedback(option)}>{option}</Button>
          </li>
        );
      })}
    </ButtonsBlock>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onFeedback: PropTypes.func.isRequired
}