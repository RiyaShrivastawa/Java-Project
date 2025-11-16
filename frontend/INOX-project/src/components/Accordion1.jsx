import React, { useContext, useEffect, useState } from "react";
import { RiWheelchairFill } from "react-icons/ri";
import { MdOutlineDirections } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { globalVar } from "../globalContext/GlobalContext";
import { useNavigate } from "react-router-dom";

const Accordion1 = ({ data, filterData }) => {
  let navigate = useNavigate();
  let { setUpdateShowPanel, setDeleteData, setIsModalOpen, inoxLoginType } =
    useContext(globalVar);
  const [isOpen, setIsOpen] = useState(false);
  // let [data, setData] = useState({});

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  let handleDeleteShow = (data) => {
    console.log(data);
    setIsModalOpen(true);
    setDeleteData({
      comp: "",
      data: data,
    });
  };
  console.log(data);

  let handleBooking = (ele) => {
    navigate("/selectseats", { state: ele });
  };

  return (
    <section className="show-timings-container">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="inoxhead">
          <h2 className="inoxh2">{data?.name || filterData?.cinema}</h2>
          <p className="inoxp">{data?.address}</p>
        </div>
        <div className="accordionicons">
          <p>20.1km away</p>
          <div>
            <RiWheelchairFill />
          </div>
          <div>
            <MdOutlineDirections />
          </div>
          <div>
            <FaRegHeart />
          </div>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
      </div>

      {isOpen && (
        <>
          {data.movies.map((movie) => {
            return (
              <div className="downaccordion">
                <div className="accordion-content">
                  <h1>{movie.moviename.toUpperCase()}</h1>
                  <p>
                    {movie.duration} • {movie.movieLanguage.toUpperCase()} •
                    {movie.genre}
                  </p>

                  <div className="timings-row">
                    {movie?.shows?.map((ele) => {
                      return (
                        <div
                          className="time-box"
                          onClick={() => {
                            handleBooking({
                              ele,
                              movieName: movie.moviename.toUpperCase(),
                              theaterName: data.name,
                            });
                          }}
                        >
                          {ele.time}
                        </div>
                      );
                    })}
                  </div>

                  {/* {inoxLoginType=== "ADMIN" &&  <div className="button-container">
              <button
                className="delete-show-button"
                onClick={() => {
                  handleDeleteShow(data);
                }}>
                Delete Show
              </button>
            </div>} */}
                </div>
              </div>
            );
          })}
        </>
      )}
    </section>
  );
};

export default Accordion1;
