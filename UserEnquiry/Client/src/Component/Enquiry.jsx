import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ViewEnquiry from "./ViewEnquiry";
import ViewForm from "./ViewForm";

import Swal from "sweetalert2";

export default function Enquiry() {
  const [loading, setLoading] = useState(false);

  const [allEnquiryData, setAllEnquiryData] = useState([]);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
    _id: "",
  });

  const handlerChange = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    if (formData._id == "") {
      await axios.post("http://localhost:8020/enquiry/insert", formData);
      toast.success("Data save successfully!");
      setFormData({ Name: "", Email: "", Phone: "", Message: "", _id: "" });
    } else {
      await axios.put(
        `http://localhost:8020/enquiry/update/${formData._id}`,
        formData
      );

      toast.success("Update Enquiry successful!");
      setFormData({ Name: "", Email: "", Phone: "", Message: "", _id: "" });
    }
  };

  const getEnquiryData = async () => {
    await axios
      .get("http://localhost:8020/enquiry/list")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setAllEnquiryData(data.enquiryData);
      });
    setLoading(true);
  };

  const handlerEdit = async (enquiryId) => {
    await axios
      .get(`http://localhost:8020/enquiry/edit/${enquiryId}`)
      .then((res) => res.data)
      .then((data) => setFormData(data.data));
  };

  const handlerDelete = async (enquiryId) => {
    Swal.fire({
      title: "Do you want to Delete the Enquiry?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8020/enquiry/delete/${enquiryId}`);
        toast.success("Enquiry Delete Successfully!");
        getEnquiryData();
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Enquiry are not Deleted", "", "info");
      }
    });
  };

  useEffect(() => {
    getEnquiryData();
  }, [formData]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-6 bg-gray-500">
        User Enquiry
      </h1>
      <div className="grid grid-cols-[25%_auto] rounded-2xl gap-6">
        <ViewForm
          formData={formData}
          handlerChange={handlerChange}
          handlerSubmit={handlerSubmit}
        />

        {loading ? (
          <ViewEnquiry
            allEnquiryData={allEnquiryData}
            handlerDelete={handlerDelete}
            handlerEdit={handlerEdit}
          />
        ) : (
          <div className="text-center">
            <img
              className="w-[30%] h-[40%] mt-6 m-auto"
              src="../../src/assets/loading.gif"
            />
            <br />
            <h1 className="text-3xl text-blue-900 ">
              Loading data Plese wait....
            </h1>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
