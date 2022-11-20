import { DatePicker } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ALL_RANGES } from './constant/dateRanges';
import UserData from './components/UserData';
import { addUserData } from './store/action/userAction';
import {allUserData} from './userdata';
const { RangePicker } = DatePicker;
function App() {
  const [userdata, setData] = useState([]);
  const [searchData, setSerach] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [datefilter, setDateFilterData] = useState([]);
  const [dateRange, setDateRange] = useState([]);
  let startDate = new Date(dateRange[0])
  let endDate = new Date(dateRange[1])

  const {userData} = useSelector((state) =>({
    userData: state.userDataState.userData
  }),
  function (prev, curr) {
    if(prev.userData === curr.userData) {
      return true;
    }
    return false;
   }
  );

  useEffect(()=>{
    if(searchData && searchData.length) {
      setFilterData(userData.filter((data) => data.name.toLowerCase().startsWith(searchData.toLowerCase())))
    }else{
      setFilterData([])
    }
    if (dateRange && dateRange.length) {
      let filterdata = userData.filter((data) => {
        let newstr = new Date(data.startDate);
        let endstr = new Date(data.endDate);
        return newstr >= startDate && endstr <= endDate;
      })
      setDateFilterData(filterdata)
    }
  },[searchData, dateRange])

  const dispatch = useDispatch()
  useEffect(()=> {
    if (allUserData && allUserData.length) {
      dispatch(addUserData(allUserData));
    }
  },[]);

  const handleDateChange = (dates) => {
    if (dates === null || dates.length === 0) {
      setDateRange([])
    } else {
      setDateRange(dates)
    }
  }

  return (
    <div className="App">
      <textarea placeholder='please enter json formated data' style={{width: '90%', height: '200px'}} onChange={(e)=>{setData(e.target.value)}}></textarea> <br></br>
      <button style={{width: '100px', height: '50px'}} onClick={()=>{
     dispatch(addUserData(JSON.parse(userdata)));
    }}>Add Data</button>
    <hr></hr>

    <div style={{display: 'flex', justifyContent:'space-evenly', marginBottom:'2%'}}>
    <div>
    <RangePicker
    presets={ALL_RANGES}
    format='DD-MM-YYYY'
    onChange={handleDateChange}
     />
    </div>
    <div>
      <input style={{height:'25px'}} placeholder='search' onChange={(e)=> setSerach(e.target.value)}/>
    </div>
    </div>
    <div>
      <UserData userData = {searchData && searchData.length? filterData : dateRange && dateRange.length ? datefilter : userData}></UserData>
    </div>
    </div>
  );
}

export default App;
