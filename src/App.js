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
const Table = lazy(() => import("./DynamicDataTable/Table"));
const Notification = lazy(() => import("./NotificationSystem/Notification.js"))
import useNotification from './NotificationSystem/useNotification';
export default function App() {
  const {NotificationComponent,triggerNotification} = useNotification("top-right");
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
      {/* <Table /> */}
      {/* <Employee /> */}
      <button onClick={() => triggerNotification({
        type:"success",
        message:"Payment Successful",
        duration:3000
      })}>Success</button>
       <button onClick={() => triggerNotification({
        type:"error",
        message:"Payment Failed",
        duration:3000
      })}>Error</button>
      <button onClick={() => triggerNotification({
        type:"warning",
        message:"Cannot process Payment",
        duration:6000
      })}>Warning</button>
      <button onClick={() => triggerNotification({
        type:"info",
        message:"Payment process after 12 hours",
        duration:10000
      })}>Info</button>
      { NotificationComponent}
      {/* <Notification type="success"  message="Payment Successful" /> */}
    </div>
  );
}
