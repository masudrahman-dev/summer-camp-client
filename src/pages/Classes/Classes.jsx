import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import ClassesCard from "./ClassesCard";
import { AuthContext } from "../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Classes = () => {
  const [userData, setUserData] = useState(null);
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const { data, isLoading, refetch, error } = useQuery({
    queryFn: async () => {
      const data = await axios(`${import.meta.env.VITE_BASE_URL}/classes`);

      return data?.data;
    },
    queryKey: ["users"],
  });
  // console.log("data :>> ", data);

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_BASE_URL}/classes`)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // find one
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/${user?.email}`)
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [user]);

  const role = userData?.role;
  // console.log("role :>> ", role);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mt-32">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex items-center justify-center py-4 md:py-12 flex-wrap">
          <h1 className="text-5xl font-semibold text-gray-900 dark:text-white ">
            Instructors
          </h1>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-7">
          {data?.map((item) => (
            <ClassesCard
              key={item._id}
              class_name={item.class_name}
              instructor_email={item.instructor_email}
              class_image={item.class_image}
              instructor_name={item.instructor_name}
              price={item.price}
              seats={item.seats}
              status={item.status}
              _id={item._id}
              role={role}
              refetch={refetch}
            />
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
