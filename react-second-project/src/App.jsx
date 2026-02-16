
import { Suspense } from 'react'
import './App.css'
import Bottles from './component/Bottles/Bottles'

function App() {

  //creating fake json data
  //manually
  // const bottles =[
  //   {Id:1, Name:"Pink-Nike-Bottle", Price:"250taka", Color:"Pink"},
  //   {Id:2, Name:"Pink-Nike-Bottle", Price:"250taka", Color:"Pink"},
  //   {Id:3, Name:"Pink-Nike-Bottle", Price:"250taka", Color:"Pink"},
  //   {Id:4, Name:"Pink-Nike-Bottle", Price:"250taka", Color:"Pink"},
  // ]


  const bottlesPromise = fetch('./bottles.json')
  .then(res => res.json());

  return (
    <>
      <h2>Buy Awesome Water Bottles:-</h2>
      <Suspense fallback={<h3>This Page is Loading</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
