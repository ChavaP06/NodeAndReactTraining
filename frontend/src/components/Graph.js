// Import necessary modules
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios'


const Graph = () => {
  const [food, setFood] = useState([])
  const [price, setPrice] = useState([])

  const GetDataOnLoad = async () =>{
    let fetchData = await axios.get("http://localhost:4000/api/getFood")
    setFood(fetchData.data.map(e => e.name))
    setPrice(fetchData.data.map(e => e.price))
  }
  useEffect(() =>{
    GetDataOnLoad()
  },[])
  // Chart options
  const options = {
    chart: {
      id: "basic-bar"
    }, xaxis: {
      categories: food
    }
  };

  // Data series for the chart
  const series = [
    {
      name: "series-1",
      data: price
    }
  ];
  const CheckIfDataIsNull = () => {
    if(food.length == 0 || price.length == 0){
      return
    }else{
      return (
        <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
      )
    }
  }

  return (
    <div className='content-wrapper'>
    {CheckIfDataIsNull()}
    </div>
  );
};

export default Graph;


