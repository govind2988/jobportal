import React, { useState, useEffect } from "react";
import logo1 from "./../assets/images/logo1.svg";
import CreateJob from "./../components/CreateJob";
import EditJob from "./../components/EditJob"


import { APIURL } from "./../ApiUrl";
import axios from "axios"

import {
  PlusCircleIcon,
  PencilSquareIcon,
  TrashIcon,
  CheckIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";


function JobListing() {

  const [isCreatePopupOpen, setCreatePopupOpen] = useState(false);
  const [isEditPopupOpen, setEditPopupOpen] = useState(false);
  const [jobListApiData, setJobListApiData] = useState([]);
  const [notificationShown, setNotificationShown] = useState(false);
  const [updateNotificationShown, setUpdateNotificationShown] = useState(false);
  const [createNotificationShown, setCreateNotificationShown] = useState(false);

  const openCreatePopup = () => {
    setCreatePopupOpen(true);    
  }

  const closeCreatePopup = () => {
    setCreatePopupOpen(false);
    jobList();
    setCreateNotificationShown(true);
  }

    const openEditPopup = ({
      id,
      jobtitle,
      companyname,
      industry,
      location,
      remotetype,
      minexp,
      maxexp,
      minsalary,
      maxsalary,
      totalemployee,
      // quickApplyChecked,
      // externalApplyChecked,
      applytype,
    }) => {
      setEditPopupOpen(true);
      localStorage.setItem("id", id);
      localStorage.setItem("jobtitle", jobtitle);
      localStorage.setItem("companyname", companyname);
      localStorage.setItem("industry", industry);
      localStorage.setItem("location", location);
      localStorage.setItem("remotetype", remotetype);
      localStorage.setItem("minexp", minexp);
      localStorage.setItem("maxexp", maxexp);
      localStorage.setItem("minsalary", minsalary);
      localStorage.setItem("maxsalary", maxsalary);
      localStorage.setItem("totalemployee", totalemployee);
      localStorage.setItem("applytype", applytype);
    };

    const closeEditPopup = () => {
      setEditPopupOpen(false);
      jobList();
      setUpdateNotificationShown(true);
    };


    const deleteJob = async (id) => { 
      await axios.delete(APIURL + "/" + id);
      jobList();
      setNotificationShown(true);
    };

    const closeToaster = () => {
      setNotificationShown(false);
    };

    const closeUpdateToaster = () => {
      setUpdateNotificationShown(false);
    };

    const closeCreateToaster = () => {
      setCreateNotificationShown(false);
    };




  const jobList = async () => {
    const response = await axios.get(APIURL);
    setJobListApiData(response.data);
  }

  useEffect(() => {
    jobList();
  }, [])

    setTimeout(() => {
      setNotificationShown(false);
      setUpdateNotificationShown(false);
      setCreateNotificationShown(false);
    }, 5000);


  
  console.log("jobListApiData", jobListApiData)


  return (
    <>
      {notificationShown && (
        <div
          id="toast-default"
          class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 absolute right-4 z-50 top-4"
          role="alert"
        >
          <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 ">
            <ExclamationTriangleIcon className="w-6 h-6" />
          </div>
          <div class="ms-3 text-sm">
            <span>The Job removed successfully</span>
          </div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-default"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <XCircleIcon onClick={closeToaster} />
          </button>
        </div>
      )}

      {updateNotificationShown && (
        <div
          id="toast-default"
          class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 absolute right-4 z-50 top-4"
          role="alert"
        >
          <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 ">
            <CheckIcon className="w-6 h-6" />
          </div>
          <div class="ms-3 text-sm">
            <span>The Job Updated successfully</span>
          </div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-default"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <XCircleIcon onClick={closeUpdateToaster} />
          </button>
        </div>
      )}

      {createNotificationShown && (
        <div
          id="toast-default"
          class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 absolute right-4 z-50 top-4"
          role="alert"
        >
          <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 ">
            <CheckIcon className="w-6 h-6" />
          </div>
          <div class="ms-3 text-sm">
            <span>Job Created successfully</span>
          </div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-default"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <XCircleIcon onClick={closeCreateToaster} />
          </button>
        </div>
      )}

      {isCreatePopupOpen && (
        <CreateJob
          isOpen={isCreatePopupOpen}
          onClose={closeCreatePopup}
          jobList={jobList}
        />
      )}

      {isEditPopupOpen && (
        <EditJob isOpen={isEditPopupOpen} onClose={closeEditPopup} />
      )}

      <div className="h-full">
        <header className="bg-white flex p-6 fixed w-full z-10 top-0 shadow-lg">
          <div
            onClick={openCreatePopup}
            className="inline-flex items-center bg-red-600 cursor-pointer px-4 py-2 rounded text-white hover:bg-red-800"
          >
            <PlusCircleIcon
              className="h-5 w-5 text-white mr-1"
              aria-hidden="true"
            />
            Create Job
          </div>
        </header>

        <section className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-screen-2xl m-auto mt-24">
          {jobListApiData.map((data) => (
            <div
              key={data.id}
              className="group bg-white flex py-4 px-6 items-start rounded-xl relative"
            >
              <div className="flex absolute right-4 top-4 gap-3 md:invisible group-hover:visible">
                <PencilSquareIcon
                  className="h-5 w-5 text-gray-800 cursor-pointer opacity-30 hover:opacity-100"
                  aria-hidden="true"
                  onClick={() => openEditPopup(data)}
                />
                <TrashIcon
                  className="h-5 w-5 text-gray-800 cursor-pointer opacity-30 hover:opacity-100"
                  aria-hidden="true"
                  onClick={() => deleteJob(data.id)}
                />
              </div>
              <img src={logo1} className="mr-2" alt="Logo" />

              <div className="jobDetails text-left">
                <p className="text-2xl">{data.jobtitle}</p>
                <p>
                  {data.companyname} - {data.industry}
                </p>
                <p className="text-gray-500">
                  {data.location} ({data.remotetype})
                </p>
                <div className="my-4 leading-8">
                  Part-Time (9.00 am - 5.00 pm IST)
                  <br />
                  Experience ({data.minexp} - {data.maxexp} years) <br />
                  INR (₹) {data.minsalary} - {data.maxsalary} / Month <br />
                  {data.totalemployee} employees
                </div>

                {data.applytype === "QuickApply" ? (
                  <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                    Apply Now
                  </button>
                ) : (
                  <button className="bg-white border border-blue-700 hover:bg-blue-700 text-blue-700 hover:text-white px-4 py-2 rounded-md">
                    External Apply
                  </button>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default JobListing