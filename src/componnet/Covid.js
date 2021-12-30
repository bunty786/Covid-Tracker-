import React,{useEffect,useState} from "react";
import axios from 'axios'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';



const Covid =(()=>{
    const [cData, setCData] = useState([])
    const [search,setSearch] = useState('')

    useEffect(()=>{
        axios.get('https://data.covid19india.org/data.json')
        .then(res=>{
            setCData(res.data.statewise)
            console.log(res.data.statewise)
        })
        .catch(error => console.log(error))
    },[])

    const OnClickHandler = e =>{
        setSearch(e.target.value);
           console.log('IM On Handler')
    }
    const filerdcData = cData.filter(cData =>
        cData.state.toLowerCase().includes(search.toLowerCase())
        )
    

    return(
        
        <div className="container-fluid">
            
            <div className="Heading">
            <div class="video__icon">
            <div class="circle--outer"></div>
            <div class="circle--inner"></div>
            
            </div>  
                <h1 className="liveTracker">Live Covid-19 Tracker</h1>
                <p>Please Search by State</p>
                </div>
                
            <div className="SearchInput">
            <form>
             <input className="inputstyle" type="value" placeholder="Search your state" onChange={OnClickHandler}  />
             </form>
             </div>     
            <div className="asad">
           
            
            <div className="table-responsive">
                
                            <table className="table table-striped table-dark">
                                <thead className="table-dark">
                                        <tr>
                                            <th>State</th>
                                            <th>Confirmed</th>
                                            <th>Deaths</th>
                                            <th>Recovered</th>
                                        </tr>
                                </thead>       
                                <tbody>                  
         
        {
           filerdcData.map((CurrElem,ind)=>{
            return( 
                         <tr className="tablerowid" key={ind}>
                            <th>{CurrElem.state}</th>
                            <th>{CurrElem.confirmed.toLocaleString()}</th>                
                            <th>{CurrElem.deaths.toLocaleString()}</th>                
                            <th>{CurrElem.recovered.toLocaleString()}</th>                                 
                          </tr>              
                                   
                  
                
            )
        })
        }
        </tbody>
        </table>
        </div>
        </div>
        </div>
        
    );

})
export default Covid;