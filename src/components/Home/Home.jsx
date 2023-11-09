import Drower2 from "../Drower/Drower2"
import Dashboard from "../Dashboard/Dashboard"

function Home() {
  return (
    <div style={{display:"flex", backgroundColor:"rgb(234, 234, 234)"}}>
        <div className="" style={{width:"25%"}}>
        <Drower2/>

        </div>
        <div className="" style={{width:"75%"}}>
        <Dashboard/>

        </div>

    </div>
  )
}

export default Home