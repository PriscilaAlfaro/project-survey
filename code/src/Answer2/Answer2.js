import React from 'react'
import './Answer2.css'

const Answer2 = ({ answer, setResult, result }) => {

    const onChangeSets = (event) => {
        event.preventDefault()
        setResult({ ...result, answer2: event.target.value })

    }


    return (
        <div className="answer_dropdown_container">
            {answer.questionNumber === 2 &&
                <>
                    <div className="answer_form_dropdown">
                        <select
                            className="select_form_dropdown"
                            onChange={onChangeSets}
                            value={result.answer2}
                        >
                            {result.answer1 === "dark" && answer.options.dark.map(option => {
                                return (
                                    <option value={option.character} key={option.character}>
                                        {option.character}
                                    </option>
                                )
                            })}
                            {result.answer1 === "ligth" && answer.options.ligth.map(option => {
                                return (
                                    <option value={option.character} key={option.character}>
                                        {option.character}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="dropdown_image_container">
                        {result.answer1 === "dark" && answer.options.dark.map(option => {
                            return (
                                <div key={option.character} className="dropdown_image_uni_container">
                                    <img className="dropdown_image_dark dropdown_image" src={option.image} />
                                    <p>{option.character}</p>
                                </div>
                            )
                        })}
                        {result.answer1 === "ligth" && answer.options.ligth.map(option => {
                            return (
                                <div key={option.character} className="dropdown_image_uni_container">
                                    <img className="dropdown_image_ligth dropdown_image" src={option.image} />
                                    <p>{option.character}</p>
                                </div>
                            )
                        })}
                    </div>
                </>
            }
        </div>
    )
}


export default Answer2