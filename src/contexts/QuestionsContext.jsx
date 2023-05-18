import { createContext, useEffect, useReducer } from "react";
import { QuestionActionType } from "./constants";

const QuestionsContext = createContext()

export const DATA = 'http://localhost:8080/questions'

const reducer = (questions, action) => {
  switch (action.type) {
    case QuestionActionType.GET:
      return action.data
    case QuestionActionType.DELETE:
      fetch(DATA + '/' + action.id, {
        method: 'DELETE',
      })
      return questions.filter(e => e.id !== action.id)
    case QuestionActionType.ADD:
      fetch(DATA, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.data)
      })
      return [...questions, action.data]
    default:
      return questions
  }
}

const QuestionProvider = ({ children }) => {
  const [questions, dispatch] = useReducer(reducer, undefined)

  useEffect(() => {
    (async () => {
      const res = await fetch(DATA)

      const data = await res.json()

      dispatch({
        type: QuestionActionType.GET,
        data: data,
      })
    })()
  }, [])

  return (
    <QuestionsContext.Provider value={{ questions, dispatch }}>
      {children}
    </QuestionsContext.Provider>
  )
}

export { QuestionProvider }
export default QuestionsContext