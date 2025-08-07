import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBmi] = useState("")
  const [message, setMessage] = useState("")

  const calBmi = (e) => {
    e.preventDefault()  // form reload से बचने के लिए

    if (weight === "" || height === "") {
      alert("Please enter valid weight and height")
      return
    }

    const h = parseFloat(height)
    const w = parseFloat(weight)

    if (isNaN(h) || isNaN(w) || h === 0) {
      alert("Invalid input values")
      return
    }

    const calculatedBmi = (w / (h * h)) * 703
    const bmiValue = calculatedBmi.toFixed(1)
    setBmi(bmiValue)

    // BMI Category
    if (calculatedBmi < 18.5) {
      setMessage("You are underweight")
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
      setMessage("You are a healthy weight")
    } else {
      setMessage("You are overweight")
    }
  }

  const reload = () => {
    window.location.reload()
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-2 '>
      <div className="container border-2 p-2 rounded-[10px] bg-white shadow-lg shadow-yellow-200 ">
        <h1 className='text-2xl font-bold mb-4'>BMI Calculator</h1>

        <form onSubmit={calBmi}>
          <div className="mb-3">
            <label htmlFor="weight" className='block'>Weight (lbs)</label>
            <input
              id="weight"
              type="text"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className='border p-2 w-full rounded'
            />
          </div>

          <div className="mb-3">
            <label htmlFor="height" className='block'>Height (inches)</label>
            <input
              id="height"
              type="text"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className='border p-2 w-full rounded'
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button className='bg-blue-500 text-white px-4 py-2 rounded' type='submit'>Submit</button>
            <button className='bg-gray-400 text-white px-4 py-2 rounded' type='button' onClick={reload}>Reload</button>
          </div>
        </form>

        <div className="mt-6">
          {bmi && (
            <>
              <h3 className='text-lg font-semibold'>Your BMI: {bmi}</h3>
              <p className='text-green-600 font-medium'>{message}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
