import React from "react";
import { useParams } from "react-router-dom";
import TopNav from "../Utils/TopNav";
import PageNotFound from "./PageNotFound";

const TaskDetails = () => {
  const { id } = useParams();
  const items = JSON.parse(localStorage.getItem("todoItems"));

  const details = items.find((val) => val.id.toString() === id);

  if(!details){
    return <PageNotFound />
  }

  return (
    <div className=" w-full relative min-h-screen bg-purple-600">
      <div className=" max-w-[1300px] px-10 max-md:px-5 m-auto">
        <div>
          <TopNav title={"Task Details"} />

          <div className=" rounded-2xl bg-purple-700 max-w-[600px] m-auto mt-16 py-10 px-8 max-sm:p-5 text-white">
            <h1 className=" text-center text-4xl max-sm:text-2xl font-bold">
              Task
            </h1>

            <div className=" mt-8">
              <div className="max-sm:text-base font-semibold flex gap-4 items-center border-b pt-4 pb-3">
                <h2 className="text-left text-lg max-sm:text-sm min-w-28">
                  Task Name:
                </h2>
                <p className=" text-left text-base max-sm:text-sm font-normal">
                  {details.title}
                </p>
              </div>

              <div className="max-sm:text-base font-semibold flex gap-4 items-center border-b pt-4 pb-3">
                <h2 className="text-left text-lg max-sm:text-sm min-w-28">
                  Description:
                </h2>
                <p className="text-left text-base max-sm:text-sm font-normal">
                  {details.description ? details.description : "-"}
                </p>
              </div>

              <div className="text-xl max-sm:text-base font-semibold flex gap-4 items-center border-b pt-4 pb-3">
                <h2 className=" text-left text-lg max-sm:text-sm min-w-28">
                  Created:
                </h2>
                <p className="text-left text-base max-sm:text-sm font-normal">
                  {details.currentTime}
                </p>
              </div>

              <div className="max-sm:text-base font-semibold flex gap-4 items-center border-b pt-4 pb-3">
                <h2 className="text-left text-lg max-sm:text-sm min-w-28">
                  Complete:
                </h2>
                <p className=" text-left text-base max-sm:text-sm font-normal">
                  {details.check ? "Completed" : "Not completed"}
                </p>
              </div>

              <div className="max-sm:text-base font-semibold flex gap-4 items-center pt-4 pb-3">
                <h2 className="text-left text-lg max-sm:text-sm min-w-28">
                  Catagory:
                </h2>

                <div className="flex flex-wrap gap-3 max-sm:gap-2">
                  {details.catagory.map((val, index) => (
                    <p
                      className="text-left text-base bg-purple-600 border-purple-300 border-2 flex items-center gap-1 font-medium rounded-2xl px-3 py-1 max-sm:text-xs max-sm:py-0"
                      key={index}
                    >
                       <span className=" text-xl max-sm:text-lg">{val.emoji}</span> {val.catagory}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
