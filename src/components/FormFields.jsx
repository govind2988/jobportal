import React from 'react'

export const InputText = ({
  labelText,
  inputId,
  inputName,
  onChange,
  className,
  placeHolder,
  inputValue,
  defaultValue,
  inputDisable,
  maxLength,
  mandatorySymbol,
  InputType,
}) => {
  return (
    <div className="w-full mt-6 flex flex-col text-left">
      <label className="font-medium text-sm h-6">
        {labelText}
        <span className="text-red-500">{mandatorySymbol}</span>
      </label>
      <input
        onChange={onChange}
        name={inputName}
        disabled={inputDisable}
        value={inputValue}
        defaultValue={defaultValue}
        placeholder={placeHolder}
        id={inputId}
        className={`border border-gray-300 px-3 py-2 focus:outline-none rounded-md text-sm placeholder:text-sm ${className}`}
        maxLength={maxLength}
        type={InputType}
      />
    </div>
  );
};



export const RadioButton = ({
  inputId,
  inputName,
  onChange,
  inputValue,
  inputDisable,
  radioLabelText,
  checked,
}) => {
  return (
    <div className="flex items-center mr-4">
      <input
        onChange={onChange}
        name={inputName}
        disabled={inputDisable}
        value={inputValue}
        checked={checked}
        id={inputId}
        type="radio"
        className="h-4 w-4 mr-2 rounded-full border-gray-300 bg-white focus:outline-none"
      />
      <label htmlFor={inputId} className="text-sm text-gray-500">
        {radioLabelText}
      </label>
    </div>
  );
};


export const ButtonOutline = ({
  buttonName 
}) => {
  return (
    <button className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white  px-4 py-2 rounded-md">
      {buttonName}
    </button>
  );
};


export const ButtonSolid = ({ buttonName, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
    >
      {buttonName}
    </button>
  );
};


