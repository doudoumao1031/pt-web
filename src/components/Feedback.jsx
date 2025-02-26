import { useState } from 'react'
import { HiOutlineUpload } from 'react-icons/hi'

export default function Feedback() {
  const [feedback, setFeedback] = useState('')
  const [charCount, setCharCount] = useState(0)
  
  const handleFeedbackChange = (e) => {
    const text = e.target.value
    if (text.length <= 520) {
      setFeedback(text)
      setCharCount(text.length)
    }
  }
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8">Feedback</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Enter the problem you are experiencing"
            value={feedback}
            onChange={handleFeedbackChange}
          ></textarea>
          
          <div className="flex justify-end text-sm text-gray-500 mt-1">
            <span>{charCount}/520</span>
          </div>
          
          <div className="mt-4">
            <button className="flex items-center text-blue-600 hover:text-blue-800">
              <HiOutlineUpload className="mr-1" /> Upload photos
            </button>
            <p className="text-xs text-gray-500 mt-1">
              *Two pictures could be uploaded at most one time, and the network capacity size of every picture cannot be over 3M.
            </p>
          </div>
          
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full">
            Submit
          </button>
          
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4">Hot issues</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded mr-2 mt-0.5">HOT</span>
                <a href="#" className="text-blue-600 hover:underline">Mobile phone can not be logged in, quickly bind email address</a>
              </li>
              <li className="flex items-start">
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded mr-2 mt-0.5">HOT</span>
                <a href="#" className="text-blue-600 hover:underline">Why do I need to register by email?</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">How to download the latest version of Potato?</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">What if the registration/login fails to send the verification code?</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 