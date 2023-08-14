import React from "react";
import signal1 from "../assets/icons/signal-1.svg";
import signal2 from "../assets/icons/signal-2.svg";
import signal3 from "../assets/icons/signal-3.svg";
import todoIcon from "../assets/icons/todo.svg";
import inProgressIcon from "../assets/icons/inProgress.svg";
import backlogIcon from "../assets/icons/backlog.svg";

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

  function getStatusImage(status) {
    if (status === "Todo") {
      return todoIcon;
    } else if (status === "Backlog") {
      return backlogIcon;
    } else if (status === "In progress") {
      return inProgressIcon;
    } else {
      return todoIcon;
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
      <div className="flex gap-2 items-center mt-[5px] ">
        {group !== "status" && (
          <img src={getStatusImage(ticket.status)} className="h-6 w-6" alt="" />
        )}
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
