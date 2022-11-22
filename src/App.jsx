import  {Component} from "react";
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
}
 
render(){
  
  return (
    <FeedbackOptions />
  )
}

export default App;
