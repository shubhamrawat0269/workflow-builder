import React from "react";

const NotificationModal = () => {
  return (
    <div className="bg-zinc-700 m-10 p-8">
      <div className="flex justify-between items-center">
        <h3>Welcome to your new workspace!</h3>
        <button>CROSS</button>
      </div>
      <p>
        Your Free plan has been updated to our usage-based system. You can now:
      </p>
      <div className="notify-btns ">
        <button className="create-btn">View upgrade options</button>
        <button className="logout-btn ml-5">Learn More</button>
      </div>
    </div>
  );
};

export default NotificationModal;
