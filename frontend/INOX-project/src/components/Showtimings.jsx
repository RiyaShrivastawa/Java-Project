import React, { useContext, useEffect, useState } from "react";
import Accordion from "./Accordion1";
import Accordion1 from "./Accordion1";
import Accordion2 from "./Accordion1";
import Accordion3 from "./Accordion1";
import { CiCreditCard1 } from "react-icons/ci";
import { RiWheelchairFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { globalVar } from "../globalContext/GlobalContext";
import { useLocation } from "react-router-dom";

const ShowTimings = () => {
  let { inoxLoginType, addShowPanel, setAddShowPanel } = useContext(globalVar);

  let { state } = useLocation();

  let [allTheater, setAllTheater] = useState([]);
  let [searchedTheater, setSearchedTheater] = useState();
  const dates = [
    { day: "Sep 30", label: "Today" },
    { day: "Oct 01", label: "Tomorrow" },
    { day: "Oct 02", label: "Wed" },
    { day: "Oct 03", label: "Thu" },
    { day: "Oct 04", label: "Fri" },
    { day: "Oct 05", label: "Sat" },
    { day: "Oct 06", label: "Sun" },
  ];
  let filteredTheater = allTheater.find((data) => data?.name == state?.cinema);
  let searchTheater = (e) => {
    let { value, name } = e.target;
    setSearchedTheater(
      allTheater.filter(
        (theater) => theater?.name?.includes(value) && theater.movies.length > 0
      )
    );
  };

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(
          state != null
            ? `http://localhost:8080/open/cinemas/${
                state?.moviename || state?.movie
              }`
            : `http://localhost:8080/open/cinemas/alls`
        );
        setAllTheater(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="show-sec">
      <div className="show">
        <h2 className="showh2">Showtimings</h2>
        {inoxLoginType === "ADMIN" && (
          <button
            className="addshowbtn"
            onClick={(e) => {
              e.stopPropagation(), setAddShowPanel(true);
            }}
          >
            Add Show
          </button>
        )}
      </div>

      <div className="show-timings-container1">
        <div className="show-timings-header"></div>

        <div className="show-timings-dates">
          {dates.map((date, index) => (
            <div key={index} className="date-item">
              <span className="dateshow">{date.day}</span>
              <span className="dateshow">{date.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="status-options">
        <div className="show-timings-search-status">
          <div className="search-bar">
            <div className="ciSearch">
              <CiSearch />
            </div>
            <input
              type="text"
              placeholder="Search for cinema"
              className="search-input"
              onChange={searchTheater}
            />
          </div>
          <section className="optionitems">
            <div className="available">
              <div className="color1">
                <div className="colorg"></div>
                <div>Available</div>
              </div>

              <div className="color1">
                <div className="colory"></div>
                <div>Filling Fast</div>
              </div>

              <div className="color1">
                <div className="colorb"></div>
                <div>Sold Out</div>
              </div>

              <div className="color1">
                <div className="colorgray"></div>
                <div>Lapsed</div>
              </div>
            </div>
            <div className="status-item1">
              <div className="reacticons">
                <CiCreditCard1 />
                Subtitle
              </div>
              <div className="reacticons">
                <RiWheelchairFill />
                Accessibility
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="accor">
        {allTheater.length < 1 ? (
          <section className="dataNotFound">Data Not Found </section>
        ) : (
          <>
            {state?.cinema != null ? (
              <Accordion1 data={filteredTheater} filterData={state} />
            ) : (
              (searchedTheater || allTheater)
                .filter((theater) => theater.movies.length > 0)
                .map((data, i) => {
                  return <Accordion1 data={data} key={i} filterData={state} />;
                })
            )}
          </>
        )}
      </section>
    </section>
  );
};

export default ShowTimings;
