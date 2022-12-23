import React, { useEffect, useState } from 'react'
import './covid.css';
// import redEmoji from './red_circle';

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch('https://api.opencovid.ca/summary?geo=can&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json');
      // console.log(res);
      const allData = await res.json();
      console.log(allData.data[0]);
      setData(allData.data[0]);
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    getCovidData();
  }, []);


  return (
    <div>
      <h1> 🔴LIVE </h1>
      {/* <img src={red_circle} alt="img-red-circle"/> */}
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
      <section>
      <ul>
        <li className='card'>
          <div className='card_main'>
            <div className='card_inner'>
              <p className="card_name"><span>OUR </span>COUNTRY</p>
              <p className='card_total card_small'>CANADA</p>
            </div>
          </div>
        </li >
        <li className='card'>
          <div className='card_main'>
            <div className='card_inner'>
              <p className="card_name"><span>TOTAL </span>HOSPITALIZATIONS</p>
              <p className='card_total card_small'>{data.hospitalizations}</p>
            </div>
          </div>
        </li >
        <li className='card'>
          <div className='card_main'>
            <div className='card_inner'>
              <p className="card_name"><span>TOTAL </span>CONFIRMED CASES</p>
              <p className='card_total card_small'>{data.cases}</p>
            </div>
          </div>
        </li >
        <li className='card'>
          <div className='card_main'>
            <div className='card_inner'>
              <p className="card_name"><span>TOTAL </span>DEATHS</p>
              <p className='card_total card_small'>{data.deaths}</p>
            </div>
          </div>
        </li >
        <li className='card'>
          <div className='card_main'>
            <div className='card_inner'>
              <p className="card_name"><span>TOTAL </span>ACTIVE CASES</p>
              <p className='card_total card_small'>4379</p>
            </div>
          </div>
        </li >
        <li className='card'>
          <div className='card_main'>
            <div className='card_inner'>
              <p className="card_name"><span>LAST </span>UPDATED</p>
              <p className='card_total card_small'>{data.date}</p>
            </div>
          </div>
        </li >
      </ul >
      </section>
      {/* <footer>
        <a href="https://anisam04.github.io/">Coded by Ani</a>
      </footer> */}
      <div class="footerWrap">
    <div class="footer">
      <div class="footerContent">
      <a href="https://anisam04.github.io/">Coded by Ani</a>

      </div>     
    </div>
</div>
    </div >
  )
}

export default Covid;