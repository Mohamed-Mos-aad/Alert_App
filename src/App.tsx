import './App.css'
import Alert from './components/UI/Alert/Alert'
import AlertDetails from './alertsDetails/index'
import { useEffect, useState } from 'react'

function App() {
  const [deleteId,setDeleteId] = useState('');

  const [data,setData] = useState(AlertDetails);


  useEffect(()=>{
    const filtered = data.filter((alert)=> alert.id !== deleteId);
    setData(filtered);
  },[deleteId])

  return (
    <>
      <div className="container">
        {data.map((alert)=>
          <Alert key={alert.id} id={alert.id} type={alert.type} icon={alert.icon} title={alert.title} description={alert.description} setDeleteId={setDeleteId}/>
        )}
      </div>
    </>
  )
}

export default App
