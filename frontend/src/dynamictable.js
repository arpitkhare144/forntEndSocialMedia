import { useEffect } from "react";
import TableData from "./tabledata";
function DynamicTable(){
// get table column
 const column = Object.keys(TableData[0]);
 // get table heading data
 const ThData =()=>{
    
     return column.map((data)=>{
         return <th key={data}>{data}</th>
     })
 }
// get table row data
const tdData =() =>{
   
     return TableData.map((data)=>{
       return(
           <tr>
                {
                   column.map((v)=>{
                       return <td>{data[v]}</td>
                   })
                }
           </tr>
       )
     })
}
  return (
      <div className="">
      <table className="table my-3 text-center flex align-self-center  justify-content-center" >
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
       </div>
  )
}
export default DynamicTable;