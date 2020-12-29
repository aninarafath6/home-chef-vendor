import React, { useEffect, useRef, useState } from 'react'
import  './edit_food.css'
import { Redirect ,useParams} from "react-router-dom";
import formData from "form-data";
import axios from "axios";
import NumberFormat from "react-number-format";




export default function Edit_food(props) {
    const params = useParams();
   const selected_image = useRef();
   const popUpRef = useRef();
   const [isLogged, setLogged] = useState();

   const [file_path, setFile_path] = useState("Choose a File");
   const [UploadPercentage, setUploadPercentage] = useState(0);
   const [item_name, SetItemName] = useState("");
   const [itemPrice, setItemPrice] = useState(0);
   const [category, setCategory] = useState("");
   const [short_description, set_short_desc] = useState("");
   const [description, setDescription] = useState("");
   const [imgFile, setImgFile] = useState({});
   const [status, setStatus] = useState(false);
   useEffect(() => {
        popUpRef.current.classList.remove("open_popup");
     let config = {};
     let token = localStorage.getItem("vendor_token");

     if (token !== undefined) {
       config.headers = { authorazation: "Bearer " + token };

       axios.get("isLogged", config).then((res) => {
         setLogged(res.data.loggin);
         console.log(res);
       });
     }
     axios.get("vendor/for-item-edit/"+params.id,config).then(res=>{
            SetItemName(res.data.data.item_name);
            setItemPrice(res.data.data.itemPrice);
            setCategory(res.data.data.category);
            set_short_desc(res.data.data.short_description);
            setDescription(res.data.data.description)
             setFile_path(params.id+".jpg");
     })
    //  console.log(params.id)
   }, []);
   const onFileChange = (e) => {
     setImgFile(e.target.files[0]);
     console.log(imgFile);
     if (e.target.files[0]) {
       setFile_path(e.target.files[0].name);
       selected_image.current.src = URL.createObjectURL(e.target.files[0]);
       popUpRef.current.classList.remove("open_popup");
     } else {
       setFile_path("Choose a File");
     }
   };
   const remove_popup = () => {
     popUpRef.current.classList.add("open_popup");
   };
   const submitHadiler = (e) => {
     e.preventDefault();
     let formdata = new formData();

     formdata.append("image", imgFile);
     formdata.append("item_name", item_name);
     formdata.append("itemPrice", itemPrice);
     formdata.append("description", description);
     formdata.append("category", category);
     formdata.append("short_description", short_description);
     formdata.append("_id", params.id);

     const options = {
       onUploadProgress: (progrssEvent) => {
         const { loaded, total } = progrssEvent;
         let percent = Math.floor((loaded * 100) / total);
         console.log(`${loaded}kb  of ${total} kb | ${percent}%`);
         if (percent <= 100) {
           setUploadPercentage(percent);
         }
       },
     };
     let config = {};
     let token = localStorage.getItem("vendor_token");
     if (token !== null) {
       config.headers = { authorazation: "Bearer " + token };
     }
     axios.post("vendor/edit-food-item", formdata, config, options).then((res) => {

       console.log(res);
       setStatus(res.data.status);
    //    window.location.reload();
       // UploadPercentage(100);
       // setTimeout(() => {
       //   UploadPercentage(0);
       // }, 1000);
     });
   };
   const onShow_image =()=>{
            popUpRef.current.classList.remove("open_popup");

   }

   return (
     <>
       {isLogged === false ? (
         <Redirect to="/login" />
       ) : (
         <>
           {status === true ? (
             <Redirect to="/food_management" />
           ) : (
             <>
               <div className="add_vendor_container">
                 <div className="add_vendor_ovarly">
                   <div ref={popUpRef} className="popup open_popup">
                     <div className="selected_img">
                       <img
                         ref={selected_image}
                         src={
                           "http://localhost:3008/vendor_food_image/" +
                           params.id +
                           ".jpg"
                         }
                         alt=""
                       />
                       <i
                         onClick={remove_popup}
                         class="fas fa-times-circle"
                       ></i>{" "}
                     </div>
                   </div>
                   <div id="edit_vendor_section" className="add_vendor_section">
                     <form onSubmit={submitHadiler} className="add_vendor_form">
                       <div className="add_vendor_header_label">
                         {UploadPercentage === 0 ? (
                           <h3>Edit Food Item</h3>
                         ) : (
                           <h3>Uploading {UploadPercentage}%</h3>
                         )}
                       </div>
                       <div className="vendor_input_section">
                         <button
                           type="button"
                           className="image_show_button"
                           onClick={onShow_image}
                         >
                           show image
                         </button>
                         <div className="vendor_input">
                           <input
                             defaultValue={item_name}
                             name="vendor_name"
                             type="text"
                             required
                             id="vendor_name"
                             onChange={(e) => SetItemName(e.target.value)}
                           />
                           <label
                             htmlFor="vendor_name"
                             className="vender_input_label"
                           >
                             Item Name
                           </label>
                         </div>
                         <div className="vendor_input">
                           {/* <input
                              name="shope_name"
                              type="text"
                              required
                              id="shop_name"
                              onChange={(e) => setItemPrice(e.target.value)}
                            /> */}
                           <NumberFormat
                             value={itemPrice}
                             required
                             id="shop_name"
                             thousandSeparator={true}
                             prefix={"₹ "}
                             onChange={
                               (e) =>
                                 setItemPrice(
                                   e.target.value
                                     .split("₹")
                                     .pop()
                                     .split(",")
                                     .join("")
                                 )
                               // setItemPrice(parseInt(e.target.value.split("₹").pop()))
                             }
                           />

                           <label
                             htmlFor="shop_name"
                             className="vender_input_label"
                           >
                             Item Price
                           </label>
                         </div>

                         <div className="vendor_input">
                           <select
                             defaultValue={category}
                             name="select"
                             required
                             name=""
                             id=""
                             onChange={(e) => setCategory(e.target.value)}
                           >
                             <option value="" className="choos_servise_days">
                               Choose Category
                             </option>
                             <option value="fast food">Fast Food</option>
                             <option value="pizza">Pizza</option>
                             <option value="noodles">noodles</option>
                             <option value="pasta">pasta</option>
                           </select>
                         </div>
                         <div className="vendor_input">
                           <textarea
                             defaultValue={short_description}
                             minLength="55"
                             maxLength="100"
                             className="short_desc"
                             name="shope_name"
                             type="email"
                             required
                             id="short_desc"
                             onChange={(e) => set_short_desc(e.target.value)}
                           ></textarea>
                           <label
                             htmlFor="short_desc"
                             className="vender_input_label"
                           >
                             Short Description
                           </label>
                         </div>
                         <div className="vendor_input">
                           <textarea
                             defaultValue={description}
                             name="shope_name"
                             type="email"
                             required
                             id="vendor_email"
                             onChange={(e) => setDescription(e.target.value)}
                           ></textarea>
                           <label
                             htmlFor="vendor_email"
                             className="vender_input_label"
                           >
                             Item Description
                           </label>
                         </div>

                         <div className="vendor_input">
                           <input
                             name="img"
                             onChange={onFileChange}
                             className="file_button"
                             type="file"
                             id="time"
                           />
                           <label
                             htmlFor="time"
                             className=" sp_vender_input_label"
                           >
                             {file_path}
                           </label>
                         </div>
                        
                         <input
                           className="submit_vendor"
                           type="submit"
                           value="EDIT FOOD ITEM"
                         />
                       </div>
                     </form>
                   </div>
                 </div>
               </div>
             </>
           )}
           );
         </>
       )}
     </>
   );
}
