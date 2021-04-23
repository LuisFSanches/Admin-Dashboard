import React from 'react'
import '../../../node_modules/react-vis/dist/style.css'
import {XYPlot,LineSeries, VerticalGridLines, HorizontalGridLines} from 'react-vis'

export default function Charts() {
  //Dummy Data
  const data =[
    {x:0, y:8},
    {x:1, y:5},
    {x:2, y:4},
    {x:3, y:9},
    {x:5, y:7},
    {x:6, y:6},
    {x:7, y:3},
    {x:8, y:2}
  ]
  return (
    <div className={{marginTop:'15px'}}>
      <XYPlot height={300} width={300}>
        <VerticalGridLines/>
        <HorizontalGridLines/>
        <LineSeries data={data} color="red"/>
        <LineSeries data={data} color="purple"/>
        <LineSeries data={data} color="yellow"/>

      </XYPlot>
    </div>
  )
}
