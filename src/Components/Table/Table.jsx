import React from 'react'
import arrow from '../Assets/arrowd.svg'
import checked from '../Assets/checked.svg'




const Table = () => {
  return (
<table className='w-[70rem] shadow-md rounded-md'>
  <tr className='bg-rightBg '>
    <th className=' pl-2 text-left '>
        <div className='flex space-x-2'>
        <input type="checkbox"  />
        <h1 >Invoice</h1>
        <img src={arrow} alt="" />
        </div>    
    </th>
    <th className='pl-2 py-2 text-left '>Amount</th>
    <th className='pl-2 py-2 text-left'>Data</th>
    <th className='pl-2 py-2 text-left '>Status</th>
    <th className='pl-2 py-2 text-left'>Users on plan</th>
  </tr>
  <tr > 
    <td className='px-2 py-2 w-[40%]'>
        <div className='flex space-x-2'>
            <input type="checkbox"  />
            <p >Basic Plan-Dec 2022</p>
        </div>
    </td>
    <td className='px-2 py-2 w-[20%]'>Maria Anders</td>
    <td className='px-2 py-2 w-[10%]'>Germany</td>
    <td className='px-2 py-2 w-[10%]'>
        <div className='flex justify-center items-center w-[60px] text-[#3c7b49] rounded-md space-x-1 bg-[#ecfdf3]'>
            <img src={checked} alt="" />
            <p>Paid</p>
        </div>
    </td>
    <td className='px-2 py-2 w-[20%]'>Germany</td>
  </tr>
 
</table>
  )
}

export default Table