import { useEffect, useState } from "react"


const Tooltip = ({ position, text, children }) => {

  const [ show, setShow ] = useState(false);
  const [ css, setCss] = useState("");

  const handleOver = () => {
    setShow(true)
  }

  const handleOut = () => {
    setShow(false)
  }

  useEffect(() => {
      switch (position) {
        case "left" : setCss('absolute bottom-2 -left-14');
        break;
        case "right" : setCss('absolute bottom-2 -right-14');
        break;
        case "top" : setCss('absolute left-0 -top-8');
        break;
        case "bottom" : setCss('absolute left-0 -bottom-8');
        break;
        default : setCss('absolute left-0 -bottom-8');
      }
  },[position])

  return (
    
    <div className="relative" >

      <div  onMouseOver={handleOver} onMouseOut={handleOut}>
        {children}
      </div>

       {
          show && (  <span className={ css } ><span className="bg-orange-500 p-2 rounded-md text-white " >{text}</span></span>  )
       } 
    </div>
    
       
    
  )
}

export default Tooltip