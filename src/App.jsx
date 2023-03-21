import { useState } from 'react'
import './App.css'
import SidebarItem from './SidebarItem';
import Slider from './Slider';

const items = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  },
];

function App() {
  const [options, setOptions] = useState(items);
  const [selectedOption, setSelectedOption] = useState(options[0]);


  function handleSliderChange(e) {
    setOptions(prevOption => {
      return prevOption.map(option => {
        if (option.name !== selectedOption.name) return option
        option.value = e.target.value;
        return option;
      })
    })
  }


  function handleSelectedOption(index) {
    setSelectedOption(options[index]);
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return {filter: filters.join(' ')};
  }


  return (
    <div className='inline-flex w-full'>
      <div className='flex flex-col flex-1 items-center'>
        <div className='w-[34rem] h-4/5 mb-[1.5rem]'>
          <img src="https://images.unsplash.com/photo-1612096536102-93f503aa2419?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          alt="" 
          className='w-full h-full'
          style={getImageStyle()}
        />
        </div>
        <Slider
          min={selectedOption.range.min}
          max={selectedOption.range.max}
          value={selectedOption.value}
          handleChange={handleSliderChange}
        />
      </div>

      <div className=" bg-[#8ed2c9] h-screen w-56">
        <ul className="menu ">
          {
            options.map((option, index) => {
            return(
            <SidebarItem 
              name={option.name}
              index={index}
              changeBg={selectedOption.name} 
              selectOption={handleSelectedOption}
              key={option.name}
            />
            )})
          }
        </ul>
      </div>
    </div>
  )
}

export default App
