import React, { useState } from 'react'
import Home from "./Home/Home"
import Footer from "./Footer/Footer"
import QuestionsCard from "./QuestionsCard/QuestionsCard"
import Story from 'Story/Story'
import data from "./data.json"

export const App = () => {
  const [showHome, setShowHome] = useState(true)
  const [current, setCurrent] = useState(null)
  const [questionsRecord, setQuestionsRecord] = useState([])
  const [showStory, setShowStory] = useState(false)
  const [result, setResult] = useState({
    answer1: 'dark',
    answer2: '',
    answer3: 'Kamino',
    answer4: '',
    answer5: 500,
    asnwer6: ''
  })

  return (
    <>
      <section className="main-content">
        {showHome && <><Home
          setShowHome={setShowHome}
          current={current}
          setCurrent={setCurrent}
          setQuestionsRecord={setQuestionsRecord}
          questionsRecord={questionsRecord} />
          <Footer /></>
        }
        {current && <QuestionsCard
          setShowHome={setShowHome}
          showHome={showHome}
          data={data}
          current={current}
          setCurrent={setCurrent}
          setShowStory={setShowStory}
          setQuestionsRecord={setQuestionsRecord}
          questionsRecord={questionsRecord}
          setResult={setResult}
          result={result}
        />
        }
        {showStory && <Story
          result={result}
        />}
      </section>

    </>
  )
}
