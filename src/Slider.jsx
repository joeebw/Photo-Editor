
function Slider({max, min, value, handleChange}) {
  return (
    <>
      <input type="range" 
        className='range range-accent range-sm w-[30rem]' 
        min={min} 
        max={max} 
        value={value}
        onChange={handleChange}
      />
    </>
  )
}

export default Slider
