import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <>
     <div className='box'>
      <div className="progress">
        Step 0/3
      </div>
      <a href="/pages/username">
      <Button className='get-started'> 
        Get started!
      </Button>
      </a>
     </div>
    </>
  )
}
