import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Redirect,useHistory } from "react-router-dom";
import "./food_mng.css";
import Edit_food from '../edit_food/edit_food.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Food_mng() {
    const notify = (data) => {
      toast.warn(data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
  const [UploadPercentage, setUploadPercentage] = useState(0);
const url = useHistory();
  const [isLogged, setLogged] = useState();
  const [food_items, setFood_items] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [count,setCount] = useState(0);
  const [auth, setAuth] = useState({});
  // console.log(food_items);
  useEffect(() => {
    let config = {};
    let token = localStorage.getItem("vendor_token");

    if (token !== undefined) {
      config.headers = { authorazation: "Bearer " + token };
      setAuth(config)
      axios.get("isLogged", config).then((res) => {
        setLogged(res.data.loggin);
        console.log(res);
      });
    }

    axios.get("vendor/get_all_prodects", config).then((response) => {
      setFood_items(response.data.food_item);
    });
    // console.log(response.data.vendors);
  }, [count]);
  console.log(isLogged);
  const On_remove_vendor = (id) => {
    axios.post("remove_vendor", { id: id }).then((res) => {
      console.log(res);
    });
  };
  const onRemove_item =(item_id)=>{
    axios
      .post("vendor/remove-item", { item_id: item_id }, auth)
      .then((response) => {
        notify(response.data.msg);
      });
  }
  const onEdit_food=(item_id)=>{
url.push('/edit-item/'+item_id)
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
              <ToastContainer />

              <div className="popular_food_section">
                  <div className="add_food_btn_section">
                    <Link to="/add_food" className="add_food_btn">
                      Add Food
                    </Link>
                    </div>           
                <div className="pf_label">
                  <h3>All Food Items</h3>
                </div>
                <div className="pf_card_wrapper">
                  {food_items.map((item, key) => {
                    return (
                      <div className="pf_card" key={key}>
                        <div className="img_section_pf">
                          <img
                            src={
                              "http://localhost:3008/vendor_food_image/" +
                              item._id +
                              ".jpg"
                            }
                            alt=""
                          />
                          {/* category: "fast food" description: "sample dics"
                                itemPrice: 200 item_name: "Burger" vendor_id:
                                "5fd651278243e81e3803201b" vendor_name: "dadasd" */}
                          {/* _id: "5fd999e580b17725106e2b6f" */}
                        </div>
                        <div className="info_section_pf">
                          <div className="starts">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                          <div className="pf_name">
                            <p>{item.item_name} </p>
                          </div>
                          <div className="mini_dic">
                            <p>{item.short_description}</p>
                          </div>
                          <div className="mini_dic">
                            <p>category : {item.category}</p>
                          </div>
                          <div className="pf_price">
                            <h4>
                              <i class="fas fa-rupee-sign"></i> {item.itemPrice}
                            </h4>
                          </div>
                          <div className="add_to_cart">
                            <button className="orange_button" onClick={()=>onEdit_food(item._id)}>
                              <i class="fas fa-pencil-alt"></i>
                              Edit Item
                            </button>
                            <button
                              onClick={() => onRemove_item(item._id)}
                              className="red_button"
                            >
                              <i class="fas fa-trash-alt"></i>
                              Remove Item
                            </button>
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
