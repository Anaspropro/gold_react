/* eslint-disable react/prop-types */
const add = (a, b) => {
  return a + b
}

const Props = ({props, text, param}) => {
  return (
    <>
      <h2>Hello, welcome to react!!!</h2>
      <h4>It is nice having you here 🤗🤗🤗</h4>
      <p> {add(2, 5)} </p>
      <h2> {text} </h2>
      <p> {param} </p>
      <p> {props} </p>
    </>
  )
}

export default Props