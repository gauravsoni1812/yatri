import React from 'react'
import "./FormSection.css"
import { useState } from 'react';
const FormSection = () => {

  const [selectedOption, setSelectedOption] = useState('');
  const [subselection, setSubselection] = useState('')
  const handleOptionSelect = (e, option) => {
    console.log(option, "option selected");
    e.preventDefault()
    setSelectedOption(option);
  };

  const handlesubSelect = (e, option) => {
    e.preventDefault()
    setSubselection(option);
  }


  return (
    <div className='form'>
      <p className='para'>INDIA'S LEADING ONE WAY INTERCITY CAB SERVICE PROVIDER  </p>
      <form className='f1'>
        <div className='f2'>
          <button
            className={selectedOption === 'Outstation' ? 'selected' : ''}
            onClick={(e) => handleOptionSelect(e, 'Outstation')}
          >
            Outstation
          </button>
          <button
            className={selectedOption === 'Local' ? 'selected' : ''}
            onClick={(e) => handleOptionSelect(e, 'Local')}
          >
            Local
          </button>
          <button
            className={selectedOption === 'Airport' ? 'selected' : ''}
            onClick={(e) => handleOptionSelect(e, 'Airport')}
          >
            Airport
          </button>
        </div>

        {selectedOption === "Outstation" ?
          <div className='f3'>
            <button
              className={subselection === 'One way' ? 'selected' : ''}
              onClick={(e) => handlesubSelect(e, 'One way')}
            >One way</button>
            <button
              className={subselection === 'Round Trip' ? 'selected' : ''}
              onClick={(e) => handlesubSelect(e, 'Round Trip')}
            >Round Trip</button>
          </div>
          :
          <div></div>
        }

        {selectedOption === "Outstation" && subselection === "One way" && <div className='f4'>
          <div className='f6'>
            <p>From</p>
            <input type="text" placeholder='start typing city' />
          </div>
          <div className='f6'>
            <p>To</p>
            <input type="text" placeholder='start typing city' />
          </div>
          <div className='f6'>
            <p>Pick Up Date</p>
            <input type="text" placeholder='start typing date' />
          </div>
          <div className='f6'>
            <p>Pick Up at</p>
            <input type="text" placeholder='start typing time' />
          </div>

        </div>}


        {selectedOption === "Outstation" && subselection === "Round Trip" ? <div className='f4'>
          <div className='f6'>
            <p>From</p>
            <input type="text" placeholder='start typing city' />
          </div>
          <div className='f6'>
            <p>To</p>
            <input type="text" placeholder='start typing city' />
          </div>
          <div className='f6'>
            <p>Pick Up Date</p>
            <input type="text" placeholder='start typing date' />
          </div>
          <div className='f6'>
            <p>Return date</p>
            <input type="text" placeholder='start typing time' />
          </div>
          <div className='f6'>
            <p>Pick Up at</p>
            <input type="text" placeholder='start typing time' />
          </div>

        </div> : <></>}
        {selectedOption === 'Local' ? <div className='f4'>
          <div className='f6'>
            <p>From</p>
            <input type="text" placeholder='start typing city' />
          </div>
          <div className='f6'>
            <p>Pick Up Date</p>
            <input type="text" placeholder='start typing date' />
          </div>
          <div className='f6'>
            <p>Pick Up at</p>
            <input type="text" placeholder='start typing time' />
          </div>
        </div> : <></>}

        
        {selectedOption === 'Airport' ? <div className='f4'>
          <div className='f6'>
            <p>From</p>
            <input type="text" placeholder='start typing city' />
          </div>
          <div className='f6'>
            <p>Pick Up Date</p>
            <input type="text" placeholder='start typing date' />
          </div>
          <div className='f6'>
            <p>Pick Up at</p>
            <input type="text" placeholder='start typing time' />
          </div>

        </div> : <></>}

        {/* <div className='f4'>
          <div className='f6'>
            <p>From</p>
            <input type="text" placeholder='start typing city' />
          </div>
          <div className='f6'>
            <p>To</p>
            <input type="text" placeholder='start typing city' />
          </div>
          <div className='f6'>
            <p>Pick Up Date</p>
            <input type="text" placeholder='start typing date' />
          </div>
          <div className='f6'>
            <p>Pick Up at</p>
            <input type="text" placeholder='start typing time' />
          </div>

        </div> */}
        <button className='f5'>Explore Cabs</button>
      </form>

    </div>
  )
}

export default FormSection