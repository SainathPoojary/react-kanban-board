import React from "react";
import addIcon from "../assets/icons/add.svg";
import moreIcon from "../assets/icons/more.svg";
import signal1 from "../assets/icons/signal-1.svg";
import signal2 from "../assets/icons/signal-2.svg";
import signal3 from "../assets/icons/signal-3.svg";

export default function CardContainer({
  children,
  title,
  count,
  group,
  users,
}) {
  function getPriorityName(priority) {
    switch (priority) {
      case "4":
        return "Urgent";
      case "3":
        return "High";
      case "2":
        return "Medium";
      case "1":
        return "Low";
      default:
        return "No priority";
    }
  }
  function getSignalImage(priority) {
    if (priority === "1") {
      return signal1;
    } else if (priority === "2") {
      return signal2;
    } else {
      return signal3;
    }
  }

  return (
    <div className="max-h-[80vh] overflow-y-auto no-scrollbar min-w-fit flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          {group == "user" && (
            <img
              src={`https://ui-avatars.com/api/?name=${title.replace(
                / /g,
                "+"
              )}&background=random`}
              alt="profile picture"
              className="w-7 h-7 rounded-full"
            />
          )}
          {group == "priority" && (
            <img className="w-5 h-5" src={getSignalImage(title)} alt="Signal" />
          )}
          <p className="text-sm">
            {group === "priority" ? getPriorityName(title) : title}
          </p>
          <p className="text-sm text-gray-500 font-medium">{count}</p>
        </div>
        <div className="flex items-center gap-3">
          <button>
            <img className="w-5 h-5" src={addIcon} alt="Add" />
          </button>
          <button>
            <img className="w-5 h-5" src={moreIcon} alt="more" />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
