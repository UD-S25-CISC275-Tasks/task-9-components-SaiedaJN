// import React, { useState } from "react";
// import { Button } from "react-bootstrap";

// export enum QuestionType {
//     ShortAnswer = "short_answer_question",
//     MultipleChoice = "multiple_choice_question"
// }

// export function ChangeType(): React.JSX.Element {
//     const [questionType, setQuestionType] = useState<QuestionType>(QuestionType.ShortAnswer);

//     return (
//         <div>
//             <Button onClick={() => 
//                 setQuestionType(
//                     questionType === QuestionType.ShortAnswer
//                         ? QuestionType.MultipleChoice
//                         : QuestionType.ShortAnswer
//                 )
//             }>
//                 Change Type
//             </Button>
//             <div>{questionType === QuestionType.ShortAnswer ? "Short Answer" : "Multiple Choice"}</div>
//         </div>
//     );
// }

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export enum QuestionType {
    ShortAnswer = "short_answer_question",
    MultipleChoice = "multiple_choice_question"
}

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(QuestionType.ShortAnswer);

    return (
        <div>
            <Button onClick={() => {
                setQuestionType(
                    questionType === QuestionType.ShortAnswer
                        ? QuestionType.MultipleChoice
                        : QuestionType.ShortAnswer
                );
            }}>
                Change Type
            </Button>
            <div>{questionType === QuestionType.ShortAnswer ? "Short Answer" : "Multiple Choice"}</div>
        </div>
    );
}
