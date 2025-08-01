import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [clubs, setClubs] = useState([]);
  const [clubName, setClubName] = useState("");
  const [city , setCity] = useState("");
  const [year, setYear] = useState("");

  const callAPIGetClubs = () => {
    fetch("http://localhost:3001/data")
    .then((data) => data.json())
    .then((res) => setClubs(res));
  }

  const setForm = () => {
    const formData = {
      "name": clubName,
      "city": city,
      "year": year,
    }

    fetch('http://localhost:3001/set', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    location.reload();
  }

  useEffect(() => {
    callAPIGetClubs();
  }, []);

  return (
    <div className='windows'>
    <h1>Mexican Futball Clubs</h1>

    <div className='cont_form'>
      <form className='form_c' action={setForm} method="post">
        <label htmlFor="f_name">
          <span className="f_span">Name:</span>
          <input type="text" name="name" id="f_name" value={clubName} onChange={(e) => setClubName(e.target.value)}/>
        </label>
        <label htmlFor="f_city">
          <span className="f_span">City:</span>
          <input type="text" name="city" id="f_city" value={city} onChange={(e) => setCity(e.target.value)}/>
        </label>

        <label htmlFor="f_y">
          <span className="f_span">Year founded:</span>
          <input type="number" name="year_founded" id="f_y" value={year} onChange={(e) => setYear(e.target.value)}/>
        </label>

        <input type="submit" value="Submit" className='submit'/>
        
      </form>
    </div>

    <div className='cont_data'>

      <div className='grid'>
        <p>Club name</p>
        <p>City</p>
        <p>Year founded</p>

        <p>sdfsfdsdf</p>
        <p>s dss d d</p>
        <p>9898</p>

        {clubs.map((ele) => {
          return (<>
          <p>{ele["name"]}</p>
          <p>{ele["city"]}</p>
          <p>{ele["founded_year"]}</p>
          </>)
        })}

      </div>

    </div>
    
    </div>
  )
}

export default App
