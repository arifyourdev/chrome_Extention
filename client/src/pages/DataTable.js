import React, { useState } from 'react'
import { data } from '../tableData'
import { FaRegCopy,FaAngleLeft,FaAngleRight  } from "react-icons/fa6";
import { LiaFileExportSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const DataTable = () => {
    const itemsPerPage = 7;
    const [currentPage, setCurrentPage] = useState(1);
  
    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);
  
    // Calculate index range for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  
    // Event handler for next page
    const nextPage = () => {
      setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };
  
    // Event handler for previous page
    const prevPage = () => {
      setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    // Text Copy
    const copyText = (text) =>{
        navigator.clipboard.writeText(text)
        .then(() =>{
            console.log('Text copied to clipboard:', text);
        })
        .catch((error) => {
            console.error('Unable to copy text to clipboard:', error);
          });
    }

    // Checkbox
    const [selectedRows, setSelectedRows] = useState([]);

    // Function to toggle selection of a row
    const toggleRowSelection = (index) => {
      if (selectedRows.includes(index)) {
        setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
      } else {
        setSelectedRows([...selectedRows, index]);
      }
    };
  
    // Function to handle select all
    const handleSelectAll = () => {
      if (selectedRows.length === data.length) {
        setSelectedRows([]);
      } else {
        setSelectedRows(data.map((_, index) => index));
      }
    };
  
  return (
    <>
     <div className='table-container'>
        <div className='table-responsive'>
            <div className='table-options'>
                <div className='total-selected'>
                    <span>{selectedRows.length} selected</span>
                </div>
                <div className='table-del-expo'>
                    <button>Delete</button>
                    <button><LiaFileExportSolid/> Export as CSV</button>
                </div>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th><input type='checkbox' name='chekc' onChange={handleSelectAll} checked={selectedRows.length === data.length} /></th>
                        <th> Name</th>
                        <th>HQ Location</th>
                        <th>EMPLOYEES</th>
                        <th>INDUSTRY</th>
                        <th>FOUNDED</th>
                        <th>WEBSITE</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                {data.slice(startIndex, endIndex).map((item, index) => (
                        <tr key={index}>
                            <td>
                                <div className='t-check'>
                                    <input type='checkbox' name='chekc' onChange={() => toggleRowSelection(index)} checked={selectedRows.includes(index)} />
                                  <img src={item.image} style={{width:"40px"}}/>
                                </div>
                            </td>
                            <td><a href=''>{item.name}</a></td>
                            <td>{item.location}</td>
                            <td>{item.employee}</td>
                            <td>{item.industry}</td>
                            <td>{item.founded}</td>
                            <td>
                                <a href={item.website}>{item.website}</a> 
                                 <span className='copy' onClick={()=> copyText(item.website)}> {item.website === 'zoom.com' ? <FaRegCopy/> : '' }</span>
                                </td>
                            <td>
                                <a href=''>{item.email}</a> 
                                <span className='copy' onClick={() => copyText(item.email)}> {item.email === 'contact@zoom.com' ? <FaRegCopy/> : ''}</span>
                             </td>
                       </tr>
                    ))}
                    
                </tbody>
            </table>
            <div className='table-pagination'>
                <div className='counting'>
                   <div>Showing <span>{startIndex + 1}-{endIndex} of {data.length}</span></div>
                </div>
                <div className='pagination'>
                    <ul>
                       <li><Link onClick={prevPage} disabled={currentPage === 1}><FaAngleLeft /></Link></li>
                       {[...Array(totalPages)].map((_, page) => (
                            <li key={page}>
                                <Link onClick={() => setCurrentPage(page + 1)} className={currentPage === page + 1 ? 'active' : ''}>
                                {page + 1}
                                </Link>
                            </li>
                        ))}
                        <li><Link onClick={nextPage} disabled={currentPage === totalPages}><FaAngleRight /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default DataTable