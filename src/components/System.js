
import React, { useState } from "react";

const SolarSystemForm = () => {
  const [formValues, setFormValues] = useState({
    noOfPanels: 4,
    panelVoltage: 585,
    wp: 8.19,
    panelMake: "JINKO SOLAR",
    panelModel: "JKM570-590N-72HL4",
    inverterCapacity: "",
    inverterType: "Hybrid",
    inverterMake: "KNOX",
    inverterModel: "Axpert WP TWIN 8K",
    inverterHybrid: "Axpert",
    inverterSerial: "",

    invMake: "",
    invModel: "",
    invSerial: "",

    secondSetPanelsMake: "",
    secondSetPanelsModel: "",
    secondSetPanelsCount: "",
    secondSetPanelsWatt: "",
    secondSetPanelsKW: "0.000",
    secondInverterMake: "",
    secondInverterModel: "",
    secondInverterCapacity: "",
    secondInverterSerial: "",
    overallSystemSize: 8.19,
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 bg-gray-">
      <h2 className="text-2xl font-bold mb-1  text-start py-2 px-3 text-white bg-[#526042]">System Information</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <tbody>
          {/* System Size */}
          <tr className="border-2 border-gray-400">
            <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">System Size</td>
            <td className="border  p-1 border-r-white">No. of Panels</td>
            <td className="border  p-1" colSpan="2">
              <input
                type="number"
                name="noOfPanels"
                value={formValues.noOfPanels}
                onChange={handleChange}
                className="w-full p-1 border border-gray-500"
              />
            </td>
            <td className="border p-1 border-r-white">X Panel Voltage</td>
            <td className="border p-1 ">
              <input
                type="number"
                name="panelVoltage"
                value={formValues.panelVoltage}
                onChange={handleChange}
                className="w-full p-1 border border-gray-500"
              />
            </td>
            <td className="border  p-1 border-r-white">Wp</td>
            <td className="border  p-1 " colSpan="4">
              <input
                type="number"
                name="wp"
                value={formValues.wp}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300"
              />
            </td>
          </tr>

          {/* Panel Make & Model */}
          <tr className="border-2 border-gray-400">
            <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">Panel Make & Model</td>
            <td className="border border-gray-300 p-1 " colSpan="4">
              <input
                type="text"
                name="panelMake"
                value={formValues.panelMake}
                onChange={handleChange}
                className="w-full p-1 border border-gray-500"
              />
            </td>
            <td className="border border-gray-300 p-1 " colSpan="4">
              <input
                type="text"
                name="panelModel"
                value={formValues.panelModel}
                onChange={handleChange}
                className="w-full p-1 border border-gray-500"
              />
            </td>
          </tr>

          {/* Inverter Capacity & Type */}
          <tr>
            <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">Inverter Capacity & Type</td>
            <td className="border border-gray-300 border-r-white ">Rated Capacity</td>
            <td className="border p-1 border-gray-00 " colSpan="2">
              <input
                type="text"
                name="inverterMake"
                value={formValues.inverterMake}
                onChange={handleChange}
                className="w-full p-1 border  border-gray-500"
              />
            </td>
            <td className="borde border-gray-00 ">Model</td>
            <td className="border p-1 border-gray-300 " colSpan="2">
              <input
                type="text"
                name="inverterModel"
                value={formValues.inverterModel}
                onChange={handleChange}
                className="w-full p-1 border border-gray-500"
              />
            </td>
            <td className="border border-gray-300 ">Hybrid</td>
            <td className="border border-gray-300 " colSpan="2">
              <input
                type="text"
                name="inverterHybrid"
                value={formValues.inverterHybrid}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300"
              />
            </td>
          </tr>

          {/* Second Set of Inverters */}
          <tr>
            <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">Inverter Make & Model</td>
            <td className="border border-gray-300 " colSpan="2">Make
              <input
                type="text"
                name="invMake"
                value={formValues.invMake}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300"
              />
            </td>
            <td className="border border-gray-300 " colSpan="2">Model
              <input
                type="text"
                name="invModel"
                value={formValues.invModel}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300"
              />
            </td>
            <td className="border border-gray-300 " colSpan="4">Inverter Serial Number
              <input
                type="text"
                name="invSerial"
                value={formValues.invSerial}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300"
              />
            </td>
          </tr>

          {/* Second Set of Solar Panels */}
          <tr>
            <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">Second Set of Solar Panels</td>
            <td className="border border-gray-300 ">Make
              <input
                type="text"
                name="secondSetPanelsMake"
                value={formValues.secondSetPanelsMake}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300"
              />
            </td>
            <td className="border border-gray-300 " colSpan="2">Model
              <input
                type="text"
                name="secondSetPanelsModel"
                value={formValues.secondSetPanelsModel}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300"
              />
            </td>
            <td className="border border-gray-300 "># of Panels
              <input
                type="number"
                name="secondSetPanelsCount"
                value={formValues.secondSetPanelsCount}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300"
              />
            </td>
            <td className="border border-gray-300 ">Watts/Panel
              <input
                type="number"
                name="secondSetPanelsWatt"
                value={formValues.secondSetPanelsWatt}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300"
              />
            </td>
            <td className="border border-gray-300 " colSpan="3">KW of 2nd Set
              <input
                type="number"
                name="secondSetPanelsKW"
                value={formValues.secondSetPanelsKW}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300"
              />
            </td>
          </tr>


          {/* Second set of Inverters */}
<tr>
  <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">Second set of Inverters</td>
  <td className="border border-gray-300 ">
    Make
    <input
      type="text"
      name="secondInverterMake"
      value={formValues.secondInverterMake}
      onChange={handleChange}
      className="w-full p-1 border border-gray-300"
    />
  </td>
  <td className="border border-gray-300 " colSpan="2">
    Model
    <input
      type="text"
      name="secondInverterModel"
      value={formValues.secondInverterModel}
      onChange={handleChange}
      className="w-full p-1 border border-gray-300"
    />
  </td>
  <td className="border border-gray-300 " colSpan="2">
    Rated Capacity
    <input
      type="number"
      name="secondInverterCapacity"
      value={formValues.secondInverterCapacity}
      onChange={handleChange}
      className="w-full p-1 border border-gray-300"
    />
  </td>
  <td className="border border-gray-300 " colSpan="3">
    Inverter Serial Number
    <input
      type="text"
      name="secondInverterSerial"
      value={formValues.secondInverterSerial}
      onChange={handleChange}
      className="w-full p-1 border border-gray-300"
    />
  </td>
</tr>



          {/* Overall System Size */}
          <tr>
            <td className="border border-gray-300  font-bold">Overall System Size</td>
            <td className="border border-gray-300 " colSpan="8">
              <input
                type="number"
                name="overallSystemSize"
                value={formValues.overallSystemSize}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SolarSystemForm;





// import React, { useState } from "react";

// const SolarSystemForm = () => {
//   const [formValues, setFormValues] = useState({
//     noOfPanels: 14,
//     panelVoltage: 585,
//     wp: 8.19,
//     panelMake: "JINKO SOLAR",
//     panelModel: "JKM570-590N-72HL4",
//     inverterCapacity: "",
//     inverterType: "Hybrid",
//     inverterMake: "KNOX",
//     inverterModel: "Axpert WP TWIN 8K",
//     inverterSerial: "",
//     secondSetPanelsMake: "",
//     secondSetPanelsModel: "",
//     secondSetPanelsCount: "",
//     secondSetPanelsWatt: "",
//     secondSetPanelsKW: "0.000",
//     secondInverterMake: "",
//     secondInverterModel: "",
//     secondInverterCapacity: "",
//     secondInverterSerial: "",
//     overallSystemSize: 8.19,
//   });

//   const handleChange = (e) => {
//     setFormValues({ ...formValues, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="p-6 bg-gray-100">
//       <h2 className="text-xl font-bold mb-4">System Information</h2>
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <tbody>
//           {/* System Size */}
          
//           <tr>
//           <td for="name" class="w-1/3 md:w-1/6  text-xs font-medium text-white bg-[#7b9162]  placeholder border-b-2 border-white" >COMPANY NAME</td>
//             <td className="border border-gray-300 ">No. of Panels</td>
//             <td className="border border-gray-300 ">
//               <input
//                 type="number"
//                 name="noOfPanels"
//                 value={formValues.noOfPanels}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 ">X Panel Voltage</td>
//             <td className="border border-gray-300 ">
//               <input
//                 type="number"
//                 name="panelVoltage"
//                 value={formValues.panelVoltage}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 ">Wp</td>
//             <td className="border border-gray-300 ">
//               <input
//                 type="number"
//                 name="wp"
//                 value={formValues.wp}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//           </tr>

//           {/* Panel Make & Model */}
//           <tr>
//           <label for="name" class="w-1/3 md:w-1/6  text-xs font-medium text-white bg-[#7b9162]  placeholder border-b-2 border-white" >PANEL MAKE & MODEL</label>
//             {/* <td className="border border-gray-300 ">Panel Make</td> */}
//             <td className="border border-gray-300 ">
//               <input
//                 type="text"
//                 name="panelMake"
//                 value={formValues.panelMake}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             {/* <td className="border border-gray-300 ">Panel Model</td> */}
//             <td className="border border-gray-300 " colSpan="3">
//               <input
//                 type="text"
//                 name="panelModel"
//                 value={formValues.panelModel}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//           </tr>

//           {/* Inverter Make & Model */}
//           <tr>
//           <label for="name" class="w-1/3 md:w-1/6  text-xs font-medium text-white bg-[#7b9162]  placeholder border-b-2 border-white" >Inverter CAPACITY & TYPE</label>
//             <td className="border border-gray-300 ">Inverter Make</td>
//             <td className="border border-gray-300 ">
//               <input
//                 type="text"
//                 name="inverterMake"
//                 value={formValues.inverterMake}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 ">Inverter Model</td>
//             <td className="border border-gray-300 " colSpan="3">
//               <input
//                 type="text"
//                 name="inverterModel"
//                 value={formValues.inverterModel}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 ">Inverter Model</td>
//             <td className="border border-gray-300 " colSpan="3">
//               <input
//                 type="text"
//                 name="inverterModel"
//                 value={formValues.inverterModel}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//           </tr>

//            {/* Inverter Make & Model */}
//            <tr>
//           <label for="name" class="w-1/3 md:w-1/6  text-xs font-medium text-white bg-[#7b9162]  placeholder border-b-2 border-white" >Inverter CAPACITY & TYPE</label>
//             <td className="border border-gray-300 ">Inverter Make</td>
//             <td className="border border-gray-300 ">
//               <input
//                 type="text"
//                 name="inverterMake"
//                 value={formValues.inverterMake}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 ">Inverter Model</td>
//             <td className="border border-gray-300 " colSpan="3">
//               <input
//                 type="text"
//                 name="inverterModel"
//                 value={formValues.inverterModel}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 ">Inverter Model</td>
//             <td className="border border-gray-300 " colSpan="3">
//               <input
//                 type="text"
//                 name="inverterModel"
//                 value={formValues.inverterModel}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//           </tr>

//             <h5 className="w-full">For more than one make/model of panels on a single inverter, use this area to define the additional solar panels</h5>
         
//           {/* Second Set of Solar Panels */}
//           <tr>
//             <label for="name" class="w-1/3 md:w-1/6  text-xs font-medium text-white bg-[#7b9162]  placeholder border-b-2 border-white" >SECOND SET OF SOLAR PANEL</label>
//             <td className="border border-gray-300 ">
//             Make
//               <input
//                 type="text"
//                 name="secondSetPanelsMake"
//                 value={formValues.secondSetPanelsMake}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             {/* <td className="border border-gray-300 ">Model</td> */}
//             <td className="border border-gray-300 ">
//             Model
//               <input
//                 type="text"
//                 name="secondSetPanelsModel"
//                 value={formValues.secondSetPanelsModel}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             {/* <td className="border border-gray-300 "># of Panels</td> */}
//             <td className="border border-gray-300 ">
//             # of Panels
//               <input
//                 type="number"
//                 name="secondSetPanelsCount"
//                 value={formValues.secondSetPanelsCount}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//           {/* </tr> */}

//           {/* Watts & KW for 2nd Set */}
//           {/* <tr> */}
//             {/* <td className="border border-gray-300 ">Watts/Panel</td> */}
//             <td className="border border-gray-300 ">
//             Watts/Panel
//               <input
//                 type="number"
//                 name="secondSetPanelsWatt"
//                 value={formValues.secondSetPanelsWatt}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             {/* <td className="border border-gray-300 "></td> */}
//             <td className="border border-gray-300 " colSpan="3">
//             KW of 2nd Set
//               <input
//                 type="number"
//                 name="secondSetPanelsKW"
//                 value={formValues.secondSetPanelsKW}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//           </tr>

//           {/* Second Inverter */}
//           <tr>
//           <label for="name" class="w-1/3 md:w-1/6  text-xs font-medium text-white bg-[#7b9162]  placeholder border-b-2 border-white" >Inverter CAPACITY & TYPE</label>
//             <td className="border border-gray-300 ">
//             Make
//               <input
//                 type="text"
//                 name="secondInverterMake"
//                 value={formValues.secondInverterMake}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>

            
//             <td className="border border-gray-300 ">
//             Model
//               <input
//                 type="text"
//                 name="secondInverterModel"
//                 value={formValues.secondInverterModel}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 ">
//             Rated Capacity
//               <input
//                 type="text"
//                 name="secondInverterCapacity"
//                 value={formValues.secondInverterCapacity}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 ">
//             Inverter Serial Number
//               <input
//                 type="text"
//                 name="secondInverterCapacity"
//                 value={formValues.secondInverterCapacity}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//           </tr>

//           {/* Overall System Size */}
//           <tr>
//             <td className="border border-gray-300  font-bold">Overall System Size</td>
//             <td className="border border-gray-300 " colSpan="5">
//               <input
//                 type="number"
//                 name="overallSystemSize"
//                 value={formValues.overallSystemSize}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//           </tr>

//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SolarSystemForm;










// import React, { useState } from "react";

// const SolarSystemForm = () => {
//   const [formValues, setFormValues] = useState({
//     noOfPanels: 4,
//     panelVoltage: 585,
//     wp: 8.19,
//     panelMake: "JINKO SOLAR",
//     panelModel: "JKM570-590N-72HL4",
//     inverterCapacity: "",
//     inverterType: "Hybrid",
//     inverterMake: "KNOX",
//     inverterModel: "Axpert WP TWIN 8K",
//     inverterHybrid: "Axpert",
//     inverterSerial: "",

//     invMake: "",
//     invModel: "",
//     invSerial: "",

//     secondSetPanelsMake: "",
//     secondSetPanelsModel: "",
//     secondSetPanelsCount: "",
//     secondSetPanelsWatt: "",
//     secondSetPanelsKW: "0.000",
//     secondInverterMake: "",
//     secondInverterModel: "",
//     secondInverterCapacity: "",
//     secondInverterSerial: "",
//     overallSystemSize: 8.19,
//   });

//   const handleChange = (e) => {
//     setFormValues({ ...formValues, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="p-6 bg-gray-100">
//       <h2 className="text-xl font-bold mb-4">System Information</h2>
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <tbody>
//           {/* System Size */}
//           <tr>
//             <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">System Size</td>
//             <td className="border border-gray-300 ">No. of Panels</td>
//             <td className="border border-gray-300 " colSpan="2">
//               <input
//                 type="number"
//                 name="noOfPanels"
//                 value={formValues.noOfPanels}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 ">X Panel Voltage</td>
//             <td className="border border-gray-300 ">
//               <input
//                 type="number"
//                 name="panelVoltage"
//                 value={formValues.panelVoltage}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 ">Wp</td>
//             <td className="border border-gray-300  " colSpan="4">
//               <input
//                 type="number"
//                 name="wp"
//                 value={formValues.wp}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//           </tr>

//           {/* Panel Make & Model */}
//           <tr>
//             <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">Panel Make & Model</td>
//             <td className="border border-gray-300  " colSpan="4">
//               <input
//                 type="text"
//                 name="panelMake"
//                 value={formValues.panelMake}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300  " colSpan="4">
            
//               <input
//                 type="text"
//                 name="panelModel"
//                 value={formValues.panelModel}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//           </tr>

//           {/* Inverter Make & Model */}
//           <tr>
//             <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">Inverter Capacity & Type</td>
//             <td className="border border-gray-300 ">Rate Capacity</td>
//             <td className="border border-gray-300 " colSpan="2">
//               <input
//                 type="text"
//                 name="inverterMake"
//                 value={formValues.inverterMake}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 ">Model</td>
//             <td className="border border-gray-300 " colSpan="2">
//               <input
//                 type="text"
//                 name="inverterModel"
//                 value={formValues.inverterModel}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 ">Hybrid</td>
//             <td className="border border-gray-300 " colSpan="2">
//               <input
//                 type="text"
//                 name="inverterHybrid"
//                 value={formValues.inverterHybrid}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//           </tr>

//             {/* Second set of Inverters */}
//             <tr>
//             <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">Inverter Make & Model</td>
//             <td className="border border-gray-300 " colSpan="2">
//             Make
//               <input
//                 type="text"
//                 name="secondSetPanelsMake"
//                 value={formValues.invMake}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 " colSpan="2">
//             Model
//               <input
//                 type="text"
//                 name="secondSetPanelsModel"
//                 value={formValues.invModel}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 " colSpan="4">
//             Inverter Serial Number
//               <input
//                 type="number"
//                 name="secondSetPanelsWatt"
//                 value={formValues.invSerial}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//           </tr>


//           {/* Second Set of Solar Panels */}
//           <tr>
//             <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">Second Set of Solar Panels</td>
//             <td className="border border-gray-300 ">
//             Make
//               <input
//                 type="text"
//                 name="secondSetPanelsMake"
//                 value={formValues.secondSetPanelsMake}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 " colSpan="2">
//             Model
//               <input
//                 type="text"
//                 name="secondSetPanelsModel"
//                 value={formValues.secondSetPanelsModel}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 ">
//             # of Panels
//               <input
//                 type="number"
//                 name="secondSetPanelsCount"
//                 value={formValues.secondSetPanelsCount}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 ">
//             Watts/Panel
//               <input
//                 type="number"
//                 name="secondSetPanelsWatt"
//                 value={formValues.secondSetPanelsWatt}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 " colSpan="3">
//             KW of 2nd Set
//               <input
//                 type="number"
//                 name="secondSetPanelsKW"
//                 value={formValues.secondSetPanelsKW}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//           </tr>



          // {/* Second set of Inverters */}
          // <tr>
          //   <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">Second set of Inverters</td>
          //   <td className="border border-gray-300 ">
          //   Make
          //     <input
          //       type="text"
          //       name="secondSetPanelsMake"
          //       value={formValues.secondSetPanelsMake}
          //       onChange={handleChange}
          //       className="w-full p-1 border border-gray-300"
          //     />
          //   </td>
          //   <td className="border border-gray-300 " colSpan="2">
          //   Model
          //     <input
          //       type="text"
          //       name="secondSetPanelsModel"
          //       value={formValues.secondSetPanelsModel}
          //       onChange={handleChange}
          //       className="w-full p-1 border border-gray-300"
          //     />
          //   </td>
          //   <td className="border border-gray-300 " colSpan="2">
          //   Rated Capacity
          //     <input
          //       type="number"
          //       name="secondSetPanelsCount"
          //       value={formValues.secondSetPanelsCount}
          //       onChange={handleChange}
          //       className="w-full p-1 border border-gray-300"
          //     />
          //   </td>
          //   <td className="border border-gray-300 " colSpan="3">
          //   Inverter Serial Number
          //     <input
          //       type="number"
          //       name="secondSetPanelsWatt"
          //       value={formValues.secondSetPanelsWatt}
          //       onChange={handleChange}
          //       className="w-full p-1 border border-gray-300"
          //     />
          //   </td>
          //   {/* <td className="border border-gray-300 " colSpan="3">
          //   KW of 2nd Set
          //     <input
          //       type="number"
          //       name="secondSetPanelsKW"
          //       value={formValues.secondSetPanelsKW}
          //       onChange={handleChange}
          //       className="w-full p-1 border border-gray-300"
          //     />
          //   </td> */}
          // </tr>

//           {/* Overall System Size */}
//           <tr>
//             <td className="border border-gray-300  font-bold">Overall System Size</td>
//             <td className="border border-gray-300 " colSpan="8">
//               <input
//                 type="number"
//                 name="overallSystemSize"
//                 value={formValues.overallSystemSize}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300"
//               />
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SolarSystemForm;






