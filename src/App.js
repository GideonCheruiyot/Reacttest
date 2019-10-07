import React  from 'react';
import './App.css';  
class App extends React.Component {
render() {
return (
<div id="container" className="container">
   < br />
   < br />
   <div className="row1">
      <div className="row no-gutters" id="row1">
         <div className="col-md-4 one">
            <div className="ondemand ">ON-DEMAND LEARNING</div>
            < br />
            < br />
            <div className="text1">Start any time with 60 days access</div>
         </div>
         <div className="col-md-4">
            < br />
            < br />
            <br />
            <div className="text3">18 hours of self-paced running</div>
         </div>
         <div className="col-md-2 ">
            < br />
            < br />
            <br />
            <div className="text4">$1250.00 </div>
            <div className="text5">USD</div>
         </div>
         <div className="space"></div>
         <div className="col-md-2" >
            < br />
            <br />
            <button type="button" className="btn aligning btn-secondary  btn-lg"> Register </button>
         </div>
      </div>
   </div>
   < br />
   < br />
   <div className="row2">
      <div className="row  no-gutters " id="row2">
         <div className="col-md-4  one">
            <div className="singapore">SINGAPORE, SG</div>
            < br />
            < br />
            <div className="text1">Sept 25-27</div>
         </div>
         <div className="col-md-2">
            < br />
            < br />
            <br />
            <div className="text3"> Wed - Fri</div>
         </div>
         <div className="col-md-2">
            < br />
            < br />
            <br />
            <div className="text3">9am-5pm</div>
         </div>
         <div className="col-md-2">
            < br />
            < br />
            <br />
            <div className="text4">$1600.00</div>
            <div className="text5">USD</div>
         </div>
         <div className="col-md-2" align="center">
            < br />
            <br />
            <button type="button" className="btn  btn-secondary btn-lg"> Add to waitlist </button>
         </div>
         <div className="col-md-2"></div>
      </div>
   </div>
   < br />
   < br />
   <div className="row3">
      <div className="row no-gutters" id="row3">
         <div className="col-md-4 one ">
            <div className="hongkong ">HONG KONG, HK</div>
            < br />
            < br />
            <div className="text1">Dec 05-07</div>
         </div>
         <div className="col-md-2">
            < br />
            < br/>
            <br />
            <div className="text3">Wed - Fri</div>
         </div>
         <div className="col-md-2">
            < br />
            < br />
            <br />
            <div className="text3"> 9am-5pm</div>
         </div>
         <div className="col-md-2">
            < br />
            < br />
             
            <div className="text4"> $1200.00 </div>
            <div className="text5"> USD</div>
            < br />
            <div className="pair"> 

            <del className="text6"> $1496.00 </del>
            <del className="text7"> USD</del>
             </div>
         </div>
         <div className="space"></div>
         <div className="col-md-2">
            < br />
            <br />
            <button type="button" className="btn aligning btn-secondary btn-lg"> Register </button>
         </div>
      </div>
   </div>
</div>
);
}
}
export default App;