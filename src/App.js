import { useState } from 'react';
import JobList from './JobList';
import './app/scss/style.css';
import {companyData} from './data';
import bgMobile from './app/images/bg-header-mobile.svg';
import bgDesktop from './app/images/bg-header-desktop.svg';

function App() {
  const [job,setJobs] = useState(companyData);
  const [filters,setFilters] = useState([]);

 const filterFunc = ({role,level,tools,languages})=> {
   
    if (filters.length === 0) {
      return true;
    }
    const tag = [role,level];
    if(tools) {
    tag.push(...tools);
  }
  if(languages) {
    tag.push(...languages);
  }
 
  return filters.every((filter) => tag.includes(filter)); //check if the filters inside all the tag
    
  }


  const handleButton = (tag) => {

    //Avoid selecting the same tag twice
    if(filters.includes(tag)) return;

  setFilters([...filters,tag]); 
  }

  const handleFilterRemove = (passedFilter) => {
    
      setFilters(filters.filter((f) => f !== passedFilter));
    
    //setFilters(filters.filter((f) => f !== passedFilter));
  }

  const handleClear = (filter) => {
    setFilters(filter.filter((f) => f == filters));
  }
  const filteredJobs = job.filter(filterFunc);
  return (
    
    <div className="App">
      <header className="container flex flex-ai-c flex-jc-c">
      <img className="hide-for-desktop" src={bgMobile} alt="BG mobile"/>
       <img className="hide-for-mobile" src={bgDesktop} alt="BG desktop"/> 
      {filters.length > 0 && ( 
      <div className="searchBox flex">
         {filters.map((filter) => (
         <span onClick={()=>handleFilterRemove(filter)}> {filter} <em> x </em> </span>
         ))}
         <div className="searchBox-clear flex flex-ai-c">
           <span onClick={()=>handleClear(filters)}> Clear </span>
         </div>
      </div>
    
      )}
      </header>
      
    <JobList  job = {filteredJobs} handleButtons={handleButton}/>
   
    </div>
    
  );
}

export default App;
