import './styles/App.css'
import LoginAndRegister from './Pages/LoginAndRegister'
import { Route, Routes, useNavigate } from 'react-router'
import { useContext } from 'react'
import UsersContext from './contexts/UsersContext'
import AllQuestions from './Pages/AllQuestions'
import Header from './UI/Header'
import NewQuestion from './Pages/NewQuestion'
import SpecificQuestion from './Pages/SpecificQuestion'
import EditQuestion from './Pages/EditQuestion'
import EditAnswer from './Pages/EditAnswer'

const App = () => {
  const { currentUser } = useContext(UsersContext)
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<LoginAndRegister />} />
        <Route path='questions' element={<AllQuestions />} />
        {
          // currentUser ?
          <Route path='newQuestion' element={<NewQuestion />} />
          // : navigate(-1)
        }
        <Route path='questions/:id' element={<SpecificQuestion />} />
        <Route path='questions/edit/:id' element={<EditQuestion />} />
        <Route path='answer/edit/:id' element={<EditAnswer />} />
      </Routes >
    </>
  )
}

export default App
