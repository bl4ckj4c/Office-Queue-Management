import { Navbar, Button } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css'
import DateRangePicker from 'react-bootstrap-daterangepicker';






function ManagerView(){

  const [startD, setStartD] = useState(null);
  const [endD, setEndD] = useState(null);
  
  const handleApply = (event, picker) =>  {
      setStartD(picker.startDate.format());
      setEndD(picker.endDate.format());
      console.log("start "+picker.startDate.format());
      console.log("end "+picker.endDate.format("YYYY-MM-DD"));

// format() returns ISO format with timezone, otherwise add YYYY-MM-DDTHH:mm:ss
  };

  return (
 /*    <Navbar className="fixed-top" bg="info">
    <Navbar.Brand  >
      <svg className="bi bi-check-all" width="23" height="23" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
      </svg>
      <span className="text-white" > Administration statistics </span>
    </Navbar.Brand>
  </Navbar> */
  <DateRangePicker onApply={handleApply}>
  <input type="text" className="form-control" />
      </DateRangePicker>
  )

  //see if it's possible to limit the date range (maxDate), usage of Date()?
}



export default ManagerView;