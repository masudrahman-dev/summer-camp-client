import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Classes = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { data, isLoading, refetch, error } = useQuery({
    queryFn: async () => {
      const data = await axios(`${import.meta.env.VITE_BASE_URL}/classes`);
      return data?.data;
    },
    queryKey: ["classes"],
  });
  // console.log(data);

  const handleAddToCart = (item) => {
    if (user && user.email) {
      axios
        .post(`${import.meta.env.VITE_BASE_URL}/carts`, item)
        .then((response) => {
          const data = response.data;
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "class added successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while adding the food to the cart.",
            icon: "error",
          });
        });
        
    } else {
      Swal.fire({
        title: "Please login before select",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          refetch();
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  // console.log(data);
  return (
    <div className="mt-32">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex items-center justify-center py-4 md:py-12 flex-wrap">
          <h1 className="text-5xl font-semibold text-gray-900 dark:text-white ">
            Our All Classes
          </h1>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-7">
          {data?.map((item) => (
            <div
              key={item?._id}
              className={`card ${
                item?.seats == 0 ? "bg-rose-600" : "bg-base-100"
              }  dark:text-white shadow-xl`}
            >
              <figure>
                <LazyLoad threshold={0.95}>
                  <img className="w-full" src={item?.class_image} alt="Shoes" />
                </LazyLoad>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item?.class_name}</h2>

                <p>Instructor Name : {item?.instructor_name}</p>
                <p>Email : {item?.instructor_email}</p>
                <p>Available seats : {item?.seats}</p>
                <p>Price : $ {item?.price}</p>
                <div className="card-actions justify-end">
                  {item?.role === "admin" ||
                  item?.role == "instructor" ||
                  item?.seats == "0" ? (
                    <button disabled className="btn btn-primary">
                      Select
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="btn btn-primary"
                    >
                      Select
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
/**
 *
 *
 * https://bridgemusic.in/wp-content/uploads/2022/07/sagar.jpeg   Piano | SAGAR GUSAIN
 * https://bridgemusic.in/wp-content/uploads/2022/07/FB_IMG_1590746443116.jpg Guiter | HIMANSHU DELWAR
 * https://bridgemusic.in/wp-content/uploads/2022/07/Pawan-New.jpg drums | PAWAN MUNDEPHI
 * https://bridgemusic.in/wp-content/uploads/2022/07/IMG-20190911-WA0004.jpg singer | SHELLY
 * https://bridgemusic.in/wp-content/uploads/2022/07/Adithya.jpg keyboards | ADITHYA SREERAAM
 * https://bridgemusic.in/wp-content/uploads/2022/07/1509808_416176091860995_639110860_n.jpg Violin | SANDIP DEY
 *
 *
 */
