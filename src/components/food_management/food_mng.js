import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom';
import './food_mng.css'
export default function Food_mng() {
     const [UploadPercentage, setUploadPercentage] = useState(0);

    const [isLogged,setLogged] = useState();
    const [vendor_data,setVendor_data] = useState([]);
    const [isLoding,setIsLoding] = useState(false);
           useEffect(()=>{
               let config = {};
    let token = localStorage.getItem("vendor_token");

    if (token !== undefined) {
      config.headers = { authorazation: "Bearer " + token };
    
      axios.get("isLogged", config).then((res) => {
        setLogged(res.data.loggin);
        console.log(res);
      });
    }
                      
                    
        
                     
                 axios.get("vendors",config).then((response)=>{

                   setVendor_data(response.data.vendors);
                 })
                        // console.log(response.data.vendors);
                   

                 
                
                 
             
           },[])
console.log(isLogged);
const On_remove_vendor =(id)=>{
  axios.post('remove_vendor',{id:id}).then((res)=>{
    console.log(res);
  })
}
    return (
      <>
        {isLogged === false ? (
          <>
            <Redirect to="/login" />
          </>
        ) : (
          <>
            {isLoding === true ? (
              <>
                <div className="loding_spinne_wrapper"></div>
              </>
            ) : (
              <>
                <div className="add_vendor_wrapper">
                  <div className="vendor_btn">
                    <Link to="/add_food" className="addvendor_link">
                      Add food
                    </Link>
                  </div>
                </div>
                <div className="vendor_manage">
                  <div className="vendor_wrapper">
                    {vendor_data.map((vendor, key) => {
                      return (
                        <div className="vendor_card_wrapper" key={vendor._id}>
                          <div className="vendor_image_wrapper">
                            <img
                              src={
                                "http://localhost:3008/vendor_images/" +
                                vendor._id +
                                ".jpg"
                              }
                              alt={vendor.shope_name}
                              className="vender_img"
                              loading="lazy"
                            />
                          </div>
                          <div className="vendor_info_wrapper">
                            <div className="vendor_name">
                              <h4>{vendor.shope_name}</h4>
                            </div>
                            <div className="vendor_detials">
                              <ul className="vendor_info">
                                <li>
                                  <i class="fas fa-user"></i>{" "}
                                  <span>{vendor.name.toLowerCase()}</span>
                                </li>
                                <li>
                                  <i className="fas fa-calendar-alt"></i>{" "}
                                  <span>{vendor.serviceDays}</span>
                                </li>
                                <li>
                                  <i className="fas fa-clock"></i>{" "}
                                  <span>{vendor.serviceTime}</span>
                                </li>
                                <li>
                                  <i className="fas fa-map-marked-alt"></i>{" "}
                                  <span>{vendor.location.toLowerCase()}</span>
                                </li>
                              </ul>
                            </div>
                            <div className="IWrapper">
                              <Link to={`/edit_vendor/${vendor._id}`}>
                                <div className="edit_vendor">
                                  <div className="edit_circle">
                                    <i class="fas fa-pencil-alt"></i>
                                  </div>
                                </div>
                              </Link>
                              <Link
                                onClick={() => On_remove_vendor(vendor._id)}
                              >
                                <div className="edit_vendor">
                                  <div className="edit_circle">
                                    <i class="fas fa-trash-alt"></i>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </>
    );
}
