import './App.css'
import Header from './components/Header'
import Activity from './components/Activity';
import Body from './components/Body';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    async function fetchData() {
  try {
    const res = await axios.get('https://www.boredapi.com/api/activity');
    setData(res.data)
  } catch (error) {
    console.log(error)
  }
    }
    fetchData();
  },[])
  return (
    <div className="App">
      <div className='ml-32 mt-20'>
        <Header keyNumber={data.key} price={data.price} />
      <Activity activity={data.activity} link={data.link} />
      <Body />
      </div>
      
      <Footer accessibility={data.accessibility} type={data.type} participants={data.participants} />
    </div>
  );
}

export default App;
