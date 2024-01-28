import React, { useState } from "react";
import { APIURL } from "./../ApiUrl";
import axios from "axios";

import {
  InputText,
  ButtonSolid,
  RadioButton,
} from "./../components/FormFields";

import { XCircleIcon } from "@heroicons/react/24/outline";

function CreateJob({ isOpen, onClose, jobList }) {
  const [jobtitle, setJobtitle] = useState();
  const [companyname, setCompanyname] = useState();
  const [industry, setIndustry] = useState();
  const [location, setLocation] = useState();
  const [remotetype, setRemotetype] = useState();
  const [minexp, setMinexp] = useState();
  const [maxexp, setMaxexp] = useState();
  const [minsalary, setMinsalary] = useState();
  const [maxsalary, setMaxsalary] = useState();
  const [totalemployee, setTotalemployee] = useState();
  const [submitClicked, setSubmitClicked] = useState(false);
  const [applytype, setApplytype] = useState("QuickApply");


  const [showStep1, setShowStep1] = useState(true);
  const [showStep2, setShowStep2] = useState(false);

  const createJobNext = (e) =>{
     setSubmitClicked(true);
     e.preventDefault();

     if (!jobtitle) {
       return;
     }
     if (!companyname) {
       return;
     }
     if (!industry) {
       return;
     }
     
      setShowStep1(false);
      setShowStep2(true);
  } 


  const createJobSave = async () => {

    await axios.post(APIURL, {
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
      applytype
    });
    onClose();
    jobList();
  };






  return (
    <>
     

      {isOpen ? (
        <div className="fixed w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50 top-0">
          <div className="bg-white w-10/12 md:w-2/4 p-8 rounded-xl border border-gray-300 relative">
            <XCircleIcon
              onClick={onClose}
              className="h-8 w-8 text-white absolute z-50 -right-7 -top-7 cursor-pointer opacity-30 hover:opacity-100"
              aria-hidden="true"
            />
            <div className="flex justify-between text-xl">
              <h1>Create a job </h1>
              <span>Step {showStep1 ? "1" : "2"} </span>
            </div>

            <div className="overflow-auto max-h-96 lg:max-h-full">
              {showStep1 ? (
                <div className="step1Container">
                  <InputText
                    placeHolder={"ex. UX UI Designer"}
                    labelText={"Job title"}
                    mandatorySymbol={"*"}
                    inputValue={jobtitle}
                    onChange={(e) => setJobtitle(e.target.value)}
                    className={`${
                      !jobtitle && submitClicked ? "border-red-400" : ""
                    }`}
                  />

                  <InputText
                    placeHolder={"ex. Google"}
                    labelText={"Company name"}
                    mandatorySymbol={"*"}
                    inputValue={companyname}
                    onChange={(e) => setCompanyname(e.target.value)}
                    className={`${
                      !companyname && submitClicked ? "border-red-400" : ""
                    }`}
                  />

                  <InputText
                    placeHolder={"ex. Information Technology"}
                    labelText={"Industry"}
                    mandatorySymbol={"*"}
                    inputValue={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className={`${
                      !industry && submitClicked ? "border-red-400" : ""
                    }`}
                  />

                  <div className="flex flex-col lg:flex-row lg:gap-6">
                    <InputText
                      placeHolder={"ex.Chennai"}
                      labelText={"Location"}
                      inputValue={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />

                    <InputText
                      placeHolder={"ex. In-office"}
                      labelText={"Remote type"}
                      inputValue={remotetype}
                      onChange={(e) => setRemotetype(e.target.value)}
                    />
                  </div>

                  <div className="flex mt-24 justify-end">
                    <ButtonSolid buttonName={"Next"} onClick={createJobNext} />
                  </div>
                </div>
              ) : (
                <div className="step2Container">
                  <div className="flex flex-col lg:flex-row lg:gap-6">
                    <InputText
                      placeHolder={"Minimum"}
                      labelText={"Experience"}
                      InputType={"number"}
                      inputValue={minexp}
                      onChange={(e) => setMinexp(e.target.value)}
                    />

                    <InputText
                      placeHolder={"Maximum"}
                      labelText={""}
                      InputType={"number"}
                      inputValue={maxexp}
                      onChange={(e) => setMaxexp(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col lg:flex-row lg:gap-6">
                    <InputText
                      placeHolder={"Minimum"}
                      labelText={"Salary"}
                      InputType={"number"}
                      inputValue={minsalary}
                      onChange={(e) => setMinsalary(e.target.value)}
                    />

                    <InputText
                      placeHolder={"Maximum"}
                      labelText={""}
                      InputType={"number"}
                      inputValue={maxsalary}
                      onChange={(e) => setMaxsalary(e.target.value)}
                    />
                  </div>

                  <InputText
                    placeHolder={"ex. 100"}
                    labelText={"Total employee"}
                    InputType={"number"}
                    inputValue={totalemployee}
                    onChange={(e) => setTotalemployee(e.target.value)}
                  />

                  <div className="w-full mt-6 flex flex-col text-left items-start">
                    <label className="font-medium text-sm mb-3">
                      Apply type <span className="text-red-500">*</span>
                    </label>

                    <div className="flex">
                      <RadioButton
                        inputName={"applytype"}
                        radioLabelText={"Quick Apply"}
                        inputId={"QuickApply"}
                        inputValue={"QuickApply"}
                        checked={applytype}
                        onChange={(e) => setApplytype(e.target.value)}
                      />
                      <RadioButton
                        inputName={"applytype"}
                        radioLabelText={"External Apply"}
                        inputId={"ExternalApply"}
                        inputValue={"ExternalApply"}
                        onChange={(e) => setApplytype(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex mt-24 justify-end">
                    <ButtonSolid buttonName={"Save"} onClick={createJobSave} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default CreateJob;
