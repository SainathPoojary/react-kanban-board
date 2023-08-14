import React from "react";
import signal1 from "../assets/icons/signal-1.svg";
import signal2 from "../assets/icons/signal-2.svg";
import signal3 from "../assets/icons/signal-3.svg";

export default function Card({ ticket, group }) {
  function getSignalImage(priority) {
    if (priority === 1) {
      return signal1;
    } else if (priority === 2) {
      return signal2;
    } else {
      return signal3;
    }
  }
  return (
    <div className="flex flex-col px-5 py-3 bg-white shadow-md rounded-md  md:w-[26rem]">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{ticket.id}</p>
        {group !== "user" && (
          <img
            src={`https://ui-avatars.com/api/?name=${ticket.user.name.replace(
              / /g,
              "+"
            )}&background=random`}
            alt="profile picture"
            className="w-7 h-7 rounded-full"
          />
        )}
      </div>
      <div className="flex gap-2 items-start mt-[5px] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 -960 960 960"
          fill="currentColor"
        >
          <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
        </svg>
        <h3>{ticket.title}</h3>
      </div>
      <div className="flex items-center gap-2 mt-2">
        {group !== "priority" && (
          <img
            src={getSignalImage(ticket.priority)}
            className="w-5 h-5"
            alt="high priority"
          />
        )}
        <div className="flex items-center gap-2 border-[1px] rounded-md py-[0.1rem] px-1 shadow-sm ">
          <div className="bg-gray-400 w-3 h-3 rounded-full "></div>
          <p className="text-sm  text-gray-500">Feature Request</p>
        </div>
      </div>
    </div>
  );
}
