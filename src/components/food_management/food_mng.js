import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

import { Redirect, useHistory } from "react-router-dom";

import Axios from "axios";
import "./food_mng.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Vendor() {
               let config = {};
      let token = localStorage.getItem("vendor_token");
      if (token !== null) {
        config.headers = { authorazation: "Bearer " + token };
      }
  const routeHistory = useHistory();
  const { useState } = React;

  const [columns, setColumns] = useState([
    {
      title: "Logo",
      field: "logo",
      render: (rowData) => (
        <img
          style={{
            height: 50,
            width: 50,
            objectFit: "cover",
            borderRadius: "50%",
          }}
          src={"http://localhost:3008/vendor_food_image/" + rowData._id + ".jpg"}
        />
      ),
    },
    { title: "Id", field: "_id", hidden: true },
    { title: "Item Name", field: "item_name" },
    { title: "Price", field: "itemPrice" },
    { title: "Category", field: "category" },
   
  ]);

  const [data, setData] = useState([]);
  const dataFetch = (query) => {
    return new Promise((resolve, reject) => {
      let config = {};
      let token = localStorage.getItem("vendor_token");
      if (token !== null) {
        config.headers = { authorazation: "Bearer " + token };
      }

      let url = "http://localhost:3008/vendor/get_all_prodects";

      fetch(url, config)
        .then((response) => response.json())
        .then((result) => {
          console.log(data)
          setData(result.food_item);
          resolve();
        });
    });
  };
  useEffect(() => {
    dataFetch();
  }, []);
  return (
    <>
      <div className="vendor_management">
        {/* <div className="vendor_insert_btn_section">
          <Button
            onClick={onAddVendor}
            id="add_vendor_btn"
            variant="contained"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            Insert Vendor
          </Button>
        </div> */}

        <div className="vendorTable">
          <MaterialTable
            title="Food Management"
            columns={columns}
            data={data}
             options={{

              actionsColumnIndex: -1,
              exportButton: true,
            }}
             actions={[
        {
          icon: 'add',
          tooltip: 'Add Item',
          isFreeAction: true,
          onClick: (event) => routeHistory.push('/add_food'),
        },
         rowData => ({
          icon: 'edit',
          tooltip: 'Edit User',
          onClick: (event, rowData) => routeHistory.push('/edit-item/'+rowData._id),
          disabled: rowData.birthYear < 2000
        }),
         rowData => ({



          icon: 'delete',
          tooltip: 'Delete User',
          onClick: (event, rowData) => {
        new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...data];
                    const index = rowData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);
Axios.post('vendor/remove-item',{item_id:rowData._id},config)
                    resolve();
                  }, 1000);
                })
          }
        }),
      ]}
           
          />
        </div>
      </div>
    </>
  );
}
