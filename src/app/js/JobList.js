import React from 'react';


const JobList = (props) => {
  
    //const [job,setJobs] = useState(companyData);
    const {handleButtons,job} = props;
    return ( 
        
        <div className="container flex">
            
      
            <div className="cardContainer">
       {job.map((data) => {
             const {id,company,logo,new:newList,featured,position,role,level,postedAt,contract,location,languages,tools} = data;
        
          
           
             return (
            <div className="jobCard" key={id}>
           <img src={logo} alt="Company's logo" />
                <div className="topContainer">
                    <p className="topContainer-name"> {company} {newList && <span className="topContainer-new"> NEW  </span> } {featured && <span className="topContainer-featured"> FEATURED </span>} </p>
                </div>
                <div className="middleContainer">
                    <article>
                       <p>{position} </p>  
                   <ul className="middleContainer-info flex"> 
                   <li>{postedAt}</li> 
                   <li>{location}</li> 
                   <li>{contract}</li> 
                   </ul>  
                    </article>
                </div>

                <div className="bottomContainer flex">
                    <button value={role} onClick={()=>handleButtons(role)}> {role} </button>
                    <button value={level}onClick={()=>handleButtons(level)}> {level} </button>
                    {languages.map((lan)=>{
                       return(
                           <div>
                               <button value={lan} onClick={()=>handleButtons(lan)}> {lan} </button>
                           </div>
                       );
                   })}
                    {tools.map((tools)=>{
                       return(
                           <div>
                               <button value={tools} onClick={()=>handleButtons(tools)}>  {tools} </button>
                           </div>
                       );
                   })}
                </div>
            </div>
           );
       })}
            </div>
        </div>
     );
}
 
export default JobList;