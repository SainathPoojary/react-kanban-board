
function groupBy(group, data) {
    const { tickets, users } = data;
    const groupedData = {};
  
    if (group === "status" || group === "user" || group === "priority") {
      tickets.forEach((ticket, index) => {
        let groupKey;
        let userIndex = -1;
  
        if (group === "status") {
          groupKey = ticket.status;
        } else if (group === "user") {
          const user = users.find((user) => user.id === ticket.userId);
          if (user) {
            groupKey = user.name;
            userIndex = users.indexOf(user);
          } else {
            groupKey = "Unknown";
          }
        } else if (group === "priority") {
          groupKey = ticket.priority;
        }
  
        if (!groupedData[groupKey]) {
          groupedData[groupKey] = [];
        }

        const user = users.find((user) => user.id === ticket.userId);
  
        const ticketWithUserName = { ...ticket, user: user};
        groupedData[groupKey].push(ticketWithUserName);
      });
    } else {
      console.error("Invalid groupBy parameter. Use 'status', 'user', or 'priority'. used:" +group);
    }
  
    console.log(groupedData)
    return groupedData;
  }
  

  function orderBy(groupedData, sortBy) {
    const sortedData = {};
  
    if (sortBy === "priority" || sortBy === "title") {
      for (const groupKey in groupedData) {
        if (groupedData.hasOwnProperty(groupKey)) {
          const group = groupedData[groupKey];
          if (sortBy === "priority") {
            sortedData[groupKey] = group.sort((a, b) => b.priority - a.priority);
          } else if (sortBy === "title") {
            sortedData[groupKey] = group.sort((a, b) => a.title.localeCompare(b.title));
          }
        }
      }
    } else {
      console.error("Invalid sortBy parameter. Use 'Priority' or 'Title'.");
      return null;
    }
  
    return sortedData;
  }
  

  

export {groupBy,orderBy}