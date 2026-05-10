import React from 'react';
import './style.css';
import { useState, useEffect,Suspense,lazy } from 'react';
// import Pagination from './Pagination';
import Coditas from './Coditas';
// import InfiniteScrolling from './InfiniteScrolling';
import OtpInput from './OtpInput';
import AutoComplete from './AutoComplete';
import TrafficLight from './TrafficLight';
import ModalPopUp from './ModalPopUp';
import CountDownTimer from './CountDownTimer';
// import Retry from './Retry';
import ImplementationOfUseFetchHook from './ImplementationOfUseFetchHook';
// import UserForm from './UserForm';
// import FileUpload from './FileUpload';
// import Employee from './UseCallback/Employee.js';
// import Employee from './UseCallBack/Employee.js';
const InfiniteScrolling = lazy(() => import("./InfiniteScrolling"));
const Pagination = lazy(() => import("./Pagination"));
const Retry = lazy(() => import("./Retry"));
const UserForm = lazy(() => import("./UserForm"));
const FileUpload = lazy(() => import("./FileUpload"));
const Employee = lazy(() => import("./UseCallBack/Employee.js") )
export default function App() {
  return (
    <div>
      {/* <Coditas /> */}
      {/* <Pagination /> */}
      {/* <InfiniteScrolling /> */}
      {/* <OtpInput /> */}
      {/* <AutoComplete /> */}
      {/* <TrafficLight /> */}
      {/* <ModalPopUp /> */}
      {/* <CountDownTimer /> */}
      {/* <Retry /> */}
      {/* <ImplementationOfUseFetchHook /> */}
      {/* <UserForm /> */}
      {/* <FileUpload /> */}
      <Employee />
    </div>
  );
}
