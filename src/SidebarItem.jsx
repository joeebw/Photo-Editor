
function SidebarItem({name, selectOption, changeBg, index}) {
  return (
    <>
      <li className={`relative h-[60px] ${changeBg === name && 'bg-[#aaf9ee]'}`} 
        onClick={() => selectOption(index)}
      >
        <a className='h-full'>
          {name}
          {
            index !== 6 && 
            <span className="absolute bottom-0 left-[3.25rem] w-[120px] h-[2px] bg-[#4c746f]"></span>
          }
        </a>
      </li>
    </>
  )
}

export default SidebarItem
