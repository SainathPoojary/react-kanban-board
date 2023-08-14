import { useEffect, useRef, useState } from "react";
import downIcon from "../assets/icons/down.svg";
import upIcon from "../assets/icons/up.svg";
import tuneIcon from "../assets/icons/tune.svg";

export default function Navbar({ setGroup, setOrder }) {
  const [show, setShow] = useState(true);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="min-w-full bg-white px-14 py-5 flex flex-col justify-center items-center  md:block">
      <button
        ref={buttonRef}
        className="flex gap-2 px-2 py-1 border-2 rounded-md shadow-sm transition duration-200 ease-in-out hover:bg-gray-100"
        onClick={(e) => {
          // e.stopPropagation();
          setShow(!show);
        }}
      >
        <img src={tuneIcon} alt="" className="w-6" />
        <p>Display</p>
        <img
          src={show ? upIcon : downIcon}
          alt={"Dropdown icon"}
          className="w-6"
        />
      </button>

      <div
        ref={dropdownRef}
        id="dropdown"
        className={`${
          !show && "hidden"
        } z-10 top-16 absolute m-3  bg-white shadow-sm border-2 flex gap-5 flex-col py-4 px-5 rounded-lg w-96`}
      >
        <div className="flex justify-between items-center">
          <p className="font-medium text-gray-500">Grouping</p>
          <select
            className="w-28 py-1 px-2 border-2 bg-white rounded-lg"
            onChange={(e) => {
              setShow(false);
              setGroup(e.target.value);
            }}
          >
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-medium text-gray-500">Ordering</p>
          <select
            className="w-28 py-1 px-2 border-2 bg-white rounded-lg"
            onChange={(e) => {
              setShow(false);
              setOrder(e.target.value);
            }}
          >
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}
