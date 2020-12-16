import React,{useEffect,useState ,useContext} from 'react';
import {Bar, Doughnut, HorizontalBar, Line} from 'react-chartjs-2'
import {Redirect,useHistory} from 'react-router-dom'
import {LogutContaxt} from '../header/Header'
import './dashbord.css'
import axios from 'axios'
const Dashbord = (props) => {
   const route = useHistory();
   const logout = useContext(LogutContaxt);
   const [isLogin,setIslogin] =useState(true);


  useEffect(() => {
       let config = {};
       let token = localStorage.getItem("vendor_token");

       if (token !== undefined) {
         config.headers = { authorazation: "Bearer " + token };

         axios.get("isLogged", config).then((res) => {
           setIslogin(res.data.loggin);
           console.log(res);
         });
       }

  }, []);


   const saleReportThisMonth=(canvas)=>{
      const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 250);
         gradient.addColorStop(0, 'rgba(250,174,50,1)');   
        gradient.addColorStop(1, 'rgba(250,174,50,0)');

     return{
         
      labels:['1','10','20','30','31'],
      datasets:[
         {
            label:'Sale Reporte 2020(k)',
            data:[5,6,4,5,6],
              pointColor : "#fff",
                    pointStrokeColor : "#ff6c23",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#ff6c23",
            backgroundColor: gradient,
         }
      ]
   }
    
   }


   const saleReportThisMonth2=(canvas)=>{
      const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 250);
        gradient.addColorStop(0, '#44918a');   
        gradient.addColorStop(1, '#1f2d4273');

     return{
         
      labels:['1','10','20','30','31'],
      datasets:[
         {
            label:'Sale Reporte 2020(k)',
            data:[5,6,4,5,6],
              pointColor : "#fff",
                    pointStrokeColor : "#ff6c23",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#ff6c23",
            backgroundColor: gradient,
         }
      ]
   }
    
   }
    var options = {
        responsive: true,
        datasetStrokeWidth : 3,
        pointDotStrokeWidth : 4,
        scaleLabel : "<%= Number(value).toFixed(0).replace('.', ',') + '°C'%>"
    };
    return (
      <>
        {isLogin === false ? (
          <>
            <Redirect to="/login" />
          </>
        ) : (
          <>
              <div className="dashbord">
    <div className="dashbord_overlay">
            <div class="card_container">
<svg xmlns="http://www.w3.org/2000/svg" width="63.714" height="56.635" viewBox="0 0 63.714 56.635">
  <path id="boxes-solid" d="M61.944,31.857H53.1V42.476l-3.54-2.356-3.54,2.356V31.857H37.167a1.775,1.775,0,0,0-1.77,1.77V54.865a1.775,1.775,0,0,0,1.77,1.77H61.944a1.775,1.775,0,0,0,1.77-1.77V33.627A1.775,1.775,0,0,0,61.944,31.857ZM19.468,24.778H44.246a1.775,1.775,0,0,0,1.77-1.77V1.77A1.775,1.775,0,0,0,44.246,0H35.4V10.619l-3.54-2.356-3.54,2.356V0H19.468A1.775,1.775,0,0,0,17.7,1.77V23.008A1.775,1.775,0,0,0,19.468,24.778Zm7.079,7.079H17.7V42.476l-3.54-2.356-3.54,2.356V31.857H1.77A1.775,1.775,0,0,0,0,33.627V54.865a1.775,1.775,0,0,0,1.77,1.77H26.548a1.775,1.775,0,0,0,1.77-1.77V33.627A1.775,1.775,0,0,0,26.548,31.857Z" fill="#fff"/>
</svg>

<span className="info">
   10 Total Item
</span>
                
            </div>
         <div class="card_container green">
<svg xmlns="http://www.w3.org/2000/svg" width="43.497" height="43.54" viewBox="0 0 43.497 43.54">
  <g id="checklist" transform="translate(-0.251)">
    <path id="Path_90" data-name="Path 90" d="M62.153,145.924a1.313,1.313,0,0,0,1.814-.105l3.193-3.643a1.274,1.274,0,0,0-1.918-1.678L62.9,143.167l-.627-.567a1.274,1.274,0,1,0-1.71,1.888Z" transform="translate(-54.805 -128.161)" fill="#fff"/>
    <path id="Path_91" data-name="Path 91" d="M175.418,182.345h-7.355a1.273,1.273,0,1,0,0,2.547h7.355a1.273,1.273,0,1,0,0-2.547Z" transform="translate(-152.385 -166.85)" fill="#fff"/>
    <path id="Path_92" data-name="Path 92" d="M76.711,244.5H60.189a1.273,1.273,0,1,0,0,2.547H76.711a1.273,1.273,0,1,0,0-2.547Z" transform="translate(-53.678 -223.724)" fill="#fff"/>
    <path id="Path_93" data-name="Path 93" d="M62.153,317.7a1.313,1.313,0,0,0,1.814-.105l3.193-3.643a1.274,1.274,0,0,0-1.918-1.678L62.9,314.947l-.627-.567a1.274,1.274,0,1,0-1.71,1.888Z" transform="translate(-54.805 -285.344)" fill="#fff"/>
    <path id="Path_94" data-name="Path 94" d="M175.418,354.07h-7.355a1.273,1.273,0,1,0,0,2.547h7.355a1.273,1.273,0,1,0,0-2.547Z" transform="translate(-152.385 -323.982)" fill="#fff"/>
    <path id="Path_95" data-name="Path 95" d="M76.711,415.337H60.189a1.273,1.273,0,1,0,0,2.547H76.711a1.273,1.273,0,1,0,0-2.547Z" transform="translate(-53.678 -380.042)" fill="#fff"/>
    <path id="Path_96" data-name="Path 96" d="M40.639,0H16.367a2.226,2.226,0,0,0-.78.153A4.191,4.191,0,0,0,14.8.077a4.153,4.153,0,0,0-3.93,2.813H9.505a1.819,1.819,0,0,0-1.813,1.7H3.2A2.948,2.948,0,0,0,.251,7.53V40.6A2.948,2.948,0,0,0,3.2,43.54H26.4a2.95,2.95,0,0,0,2.844-2.176H40.853a3.161,3.161,0,0,0,2.9-3.106V3.106A3.111,3.111,0,0,0,40.639,0Zm-30.4,5.437h1.689A1.274,1.274,0,0,0,13.2,4.189a1.6,1.6,0,0,1,3.2,0,1.274,1.274,0,0,0,1.274,1.248H19.36v1.4H10.235ZM26.795,40.6a.4.4,0,0,1-.4.4H3.2a.4.4,0,0,1-.4-.4V7.529a.4.4,0,0,1,.4-.4H7.686V7.4A1.986,1.986,0,0,0,9.671,9.386H19.924A1.986,1.986,0,0,0,21.909,7.4V7.133H26.4a.4.4,0,0,1,.4.4Zm14.4-2.339a.558.558,0,0,1-.494.555l-.037,0H29.344V7.529A2.948,2.948,0,0,0,26.4,4.586H21.9a1.835,1.835,0,0,0-1.828-1.7H18.728c-.04-.117-.086-.231-.136-.344H40.639a.56.56,0,0,1,.56.559Z" fill="#fff"/>
  </g>
</svg>

<span className="info">
   10 Total Orders
</span>
                
            </div>
         <div class="card_container red">
<svg xmlns="http://www.w3.org/2000/svg" width="55.926" height="56.006" viewBox="0 0 55.926 56.006">
  <g id="cancel" transform="translate(0 0)">
    <path id="Path_61" data-name="Path 61" d="M53.109,53.142a.825.825,0,0,0,0-1.65h-7.18a.825.825,0,1,0,0,1.65h2.765v2.4a15.247,15.247,0,0,0-5.033,1.108.825.825,0,1,0,.622,1.529A13.8,13.8,0,0,1,63.3,70.87V73.14H35.744V70.87a13.728,13.728,0,0,1,5.815-11.2.825.825,0,1,0-.951-1.349A15.379,15.379,0,0,0,34.093,70.87v2.615a2.671,2.671,0,0,0,1.3,4.981H63.646a2.636,2.636,0,0,0,2.633-2.633v-.058a2.633,2.633,0,0,0-1.333-2.289V70.87a15.368,15.368,0,0,0-14.6-15.33v-2.4ZM64.629,75.775v.058a.984.984,0,0,1-.982.983H35.392a.984.984,0,0,1-.982-.983v-.058a.985.985,0,0,1,.973-.984H63.656a.984.984,0,0,1,.973.984Zm0,0" transform="translate(-29.231 -45.86)" fill="#fff"/>
    <path id="Path_62" data-name="Path 62" d="M39.876,336.713h23.6a.825.825,0,1,0,0-1.651h-23.6a.825.825,0,0,0,0,1.651Zm0,0" transform="translate(-34.834 -298.411)" fill="#fff"/>
    <path id="Path_63" data-name="Path 63" d="M62.9,382.723a.825.825,0,0,0-.825-.825h-22.2a.825.825,0,0,0,0,1.65h22.2A.825.825,0,0,0,62.9,382.723Zm0,0" transform="translate(-34.834 -340.124)" fill="#fff"/>
    <path id="Path_64" data-name="Path 64" d="M39.872,428.73a.825.825,0,0,0,0,1.651h16.5a.825.825,0,1,0,0-1.651Zm0,0" transform="translate(-34.83 -381.833)" fill="#fff"/>
    <path id="Path_65" data-name="Path 65" d="M220.931,430.381h4.525a.825.825,0,0,0,0-1.651h-4.525a.825.825,0,1,0,0,1.651Zm0,0" transform="translate(-196.083 -381.833)" fill="#fff"/>
    <path id="Path_66" data-name="Path 66" d="M54.776,43.038a.825.825,0,0,0,1.649-.066A12.519,12.519,0,0,0,41.077,31.279V2.266A2.27,2.27,0,0,0,38.809,0H24.054a.825.825,0,0,0,0,1.651H38.809a.617.617,0,0,1,.617.616V31.781a12.533,12.533,0,0,0-1.7,22.573H2.768a.617.617,0,0,1-.617-.616V2.266a.617.617,0,0,1,.617-.616H20.753a.825.825,0,0,0,0-1.651H2.768A2.27,2.27,0,0,0,.5,2.266V53.738A2.27,2.27,0,0,0,2.768,56H38.809a2.251,2.251,0,0,0,1.479-.551,12.527,12.527,0,0,0,15.783-8.979.826.826,0,1,0-1.6-.395,10.874,10.874,0,1,1,.308-3.042Zm0,0" transform="translate(-0.5 0.001)" fill="#fff"/>
    <path id="Path_67" data-name="Path 67" d="M339.21,349.978a2.461,2.461,0,0,0,1.751-.725l2.414-2.414,2.381,2.381a2.508,2.508,0,0,0,3.448.115,2.476,2.476,0,0,0,.086-3.583l-2.414-2.414,2.381-2.381a2.566,2.566,0,0,0,.747-1.8,2.47,2.47,0,0,0-4.216-1.733l-2.414,2.414-2.381-2.38a2.476,2.476,0,1,0-3.534,3.468l2.414,2.414-2.38,2.381A2.481,2.481,0,0,0,339.21,349.978Zm-.55-3.092,2.774-2.774a1.094,1.094,0,0,0,0-1.548l-2.807-2.807a.824.824,0,0,1,.03-1.2.857.857,0,0,1,1.17.061L342.6,341.4a1.093,1.093,0,0,0,1.547,0c2.824-2.715,2.794-3.049,3.391-3.049a.83.83,0,0,1,.55,1.442l-2.774,2.774a1.094,1.094,0,0,0,0,1.547c2.715,2.824,3.049,2.794,3.049,3.391a.829.829,0,0,1-1.442.55l-2.775-2.774a1.093,1.093,0,0,0-1.547,0l-2.807,2.807a.82.82,0,0,1-.584.242A.829.829,0,0,1,338.659,346.886Zm0,0" transform="translate(-299.955 -299.867)" fill="#fff"/>
  </g>
</svg>

              <span className="info">
   10 Canciled Orders
</span>  
            </div>
            
         <div class="card_container">
<svg xmlns="http://www.w3.org/2000/svg" width="61.417" height="42.992" viewBox="0 0 61.417 42.992">
  <path id="users-solid" d="M9.213,50.425a6.142,6.142,0,1,0-6.142-6.142A6.147,6.147,0,0,0,9.213,50.425Zm42.992,0a6.142,6.142,0,1,0-6.142-6.142A6.147,6.147,0,0,0,52.2,50.425ZM55.275,53.5H49.133a6.124,6.124,0,0,0-4.328,1.785,14.037,14.037,0,0,1,7.207,10.5h6.334a3.068,3.068,0,0,0,3.071-3.071V59.638A6.147,6.147,0,0,0,55.275,53.5Zm-24.567,0A10.748,10.748,0,1,0,19.96,42.748,10.743,10.743,0,0,0,30.708,53.5Zm7.37,3.071h-.8a14.839,14.839,0,0,1-13.147,0h-.8A11.058,11.058,0,0,0,12.283,67.622v2.764a4.607,4.607,0,0,0,4.606,4.606H44.527a4.607,4.607,0,0,0,4.606-4.606V67.622A11.058,11.058,0,0,0,38.078,56.567ZM16.611,55.281A6.124,6.124,0,0,0,12.283,53.5H6.142A6.147,6.147,0,0,0,0,59.638v3.071a3.068,3.068,0,0,0,3.071,3.071H9.395a14.072,14.072,0,0,1,7.216-10.5Z" transform="translate(0 -32)" fill="#fff"/>
</svg>

                            <span className="info">
   10 Total Users
</span>  
            </div>
        
           




                     <div className="charts">
                        <div className="saleReport_Chart1">
                           <Line options={options} data={saleReportThisMonth}/>
                           
                        </div>
                        <div className="saleReport_Chart1">
                           <Bar options={options} data={saleReportThisMonth2}/>
                           
                        </div>
                        </div>
    </div>
        </div>

          </>
        )}
      </>
    );
}

export default Dashbord;
 