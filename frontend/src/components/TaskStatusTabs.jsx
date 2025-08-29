import React from "react";

const TaskStatusTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`relative px-3 md:px-4 py-2 text-sm font-medium ${
              activeTab == tab.label
                ? "text-primary"
                : "text-gray-500 hover:rext-gray-700"
            } cursor-pointer`}
            onClick={() => setActiveTab(tab.label)}
          >
            <div className="">
                <span className=""></span>
                <span className={`text-xs ml-2 px-2 py-0.5 rounded-full ${
                    activeTab === tab.label
                }`}></span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskStatusTabs;
