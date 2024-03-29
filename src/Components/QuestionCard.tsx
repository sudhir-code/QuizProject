import { answerObject } from "../App";
import { Wrappers,ButtonWrapper} from "./QuestionCard.styles"
type props = {
    question : string,
    answers : string[],
    callback :(e: React.MouseEvent<HTMLButtonElement>) =>void,
    userAnswer: answerObject | undefined,
    questioNr: number,
    totalQuestions:number
}
const   QuestionCard :React.FC<props>= ({question,answers,callback,userAnswer,questioNr,totalQuestions}) => (
    <Wrappers>
    <p className="number">question:{questioNr}/{totalQuestions}</p>
    <p dangerouslySetInnerHTML={{__html:question}}></p>
    <div>
    {
        answers.map((answer) =>(
            <ButtonWrapper 
            key={answer}
            correct = {userAnswer?.correctAnswer === answer}
            userClicked = {userAnswer?.answer === answer}
            >
                <button disabled = { userAnswer ? true:false} value={answer}onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html:answer}}/>
                </button>
            </ButtonWrapper>
        ))
    }
</div>
    </Wrappers>
)
export default QuestionCard;