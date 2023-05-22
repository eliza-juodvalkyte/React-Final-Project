import { useContext, useState } from "react"
import QuestionsContext from "../contexts/QuestionsContext"
import Question from "../UI/Question"
import Sort from "../UI/Sort"

const AllQuestions = () => {
  const { questions } = useContext(QuestionsContext)
  const [buttonPressed, setButtonPressed] = useState(null)

  const sortByNewest = () => {
    setButtonPressed('newest')
  }

  const sortByOldest = () => {
    setButtonPressed('oldest')

  }

  const all = () => {
    setButtonPressed(null)
  }
  console.log(buttonPressed)

  return (
    <main className="allQuestions">
      <section className="sorting">
        <button onClick={() => sortByNewest()}>Newest</button>
        <button onClick={() => sortByOldest()}>Oldest</button>
        <button onClick={() => all()}>All</button>
      </section>
      {
        Array.isArray(questions) && questions.length > 0 &&
        <section className="allQuestions">
          {
            questions.map(question =>
              <Question question={question} key={question.id}></Question>)
          }
        </section>
      }
    </main>
  )
}

export default AllQuestions
