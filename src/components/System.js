import React from 'react';

const Client = () => {
  return (
    <div className=" md:p-4">
    <h2 class="text-2xl font-bold mb-1  text-start py-2 px-3 text-white bg-[#344d6c]">SYSTEM INFORMATION</h2>
    <form>
      {/* <!-- Main grid layout --> */}
      <div class="grid grid-cols-1 md:grid-cols- gap-x- gap-y-">
        {/* <!-- Name --> */}
        <div class="flex">
          <label for="name" class="w-1/3 md:w-1/6  text-xs font-medium text-white bg-[#4e74a1] p-1 placeholder border-b-2 border-white " >SYSTEM SIZE</label>
          <div className='flex flex-col md:flex-row justify-   gap-x-2 px-5 border p-1'>
                <div className='flex flex-col md:flex-row items-center p-'>
                      
                    <label for="phone" class="block text-xs font-light text-gray-700  pr-1">No. of Panels =</label>
                        <input type="text" id="phone" name="phone" placeholder="14"  class="mt- block p-1 border border-gray-300 md:w-16 w-full text-centerw-16 text-center"/>
                    </div>
                    <div className='flex flex-col md:flex-row  items-center'>
                    <label for="phone" class="block text-xs font-light text-gray-700 pr-1">X Panel Voltage</label>
                    <input type="text" id="phone" name="phone" placeholder="585" class="mt- block  p-1 border border-gray-300 w-full md:w-16 text-center " />
                    </div>
                    <div className='flex flex-col md:flex-row  items-center'>
                        <label for="phone" class="block text-xs font-light text-gray-700 pr-1">Wp =</label>
                        <input type="text" id="phone" name="phone" placeholder="8.190" class=" block  p-1 border border-gray-300 w-full md:w-16 text-center " />
                        <label for="phone" class="block text-xs font-light text-gray-700 pl-1">KW (PV SOLAR PANELS)</label>
                    </div>
            </div>
        </div>

        <div class="flex  border">
  <label for="cnic" class="w-1/3 md:w-1/6  text-xs font-medium text-white bg-[#4e74a1] p-0.5 placeholder border-b-2 border-white">
    PANEL MAKE & MODEL
  </label>
  <div class="flex flex-col md:flex-row p-1  gap-1">
    <input type="text" id="cnic" name="cnic" placeholder="36302-7681633-2" class="py-1 p-2 border border-gray-300 w-full md:w-1/2 text-center" />
    <input type="text" id="cnic" name="cnic" placeholder="36302-7681633-2" class="py-1 p-2 border border-gray-300 w-full md:w-1/2 text-center" />
  </div>
</div>


        {/* <!-- Address --> */}
        <div class="flex border ">
          <label for="address" class="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#4e74a1] p- placeholder border-b-2 border-white">INVERTER & CAPACITY TYPE</label>
          <div className='flex flex-col md:flex-row    gap-x-2 md:px-5 p-1'>
                      <div className='flex flex-col md:flex-row  items-center'>
                        <label for="phone" class="block text-xs font-light text-gray-700  pr-1">Rated Capacity =</label>
                        <input type="text" id="phone" name="phone" placeholder="14"  class="mt- block p-1 border border-gray-300 md:w-32 w-full text-centerw-16 text-center"/>                      
                      </div>
                      <div className='flex flex-col md:flex-row  items-center'>
                        <label for="phone" class="block text-xs font-light text-gray-700 pr-1">,  On-Grid</label>
                        <input type="text" id="phone" name="phone" placeholder="585" class="mt- block  p-1 border border-gray-300 md:w-16 w-full text-center " />
                      </div>
                      <div className='flex flex-col md:flex-row  items-center'>
                        <label for="phone" class="block text-xs font-light text-gray-700 pr-1">, Hybrid</label>
                        <input type="text" id="phone" name="phone" placeholder="8.190" class=" block  p-1 border border-gray-300 md:w-16 w-full text-center " />
                      </div>
            </div>
        </div>

        {/* <!-- Mailing Address --> */}
        <div class="flex gap-2 border p-0.5">
          <label for="mailing_address" class="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#4e74a1] p-1 placeholder border-b-2 border-white">INVERTER MAKE & MODEL</label>
          {/* <div className=' md:flex md:flex-row   gap-x-9'> */}
          <div className='flex flex-col md:flex-row     gap-x-2 md:px-5  p-1'>
                      <div class="">
                        <label for="phone" class="block text-xs font-light text-gray-700">Make</label>
                        <input type="text" id="phone" name="phone" placeholder="1,853"  class="mt-1 block w-full  border  border-gray-300  " />
                      </div>
                      <div>
                        <label for="phone" class="block text-xs font-light text-gray-700">Model</label>
                        <input type="text" id="phone" name="phone" placeholder="10,319" class="mt-1 block w-full  border border-gray-300  " />
                      </div>
                      <div>
                        <label for="phone" class="block text-xs font-light text-gray-700">Inverter Serial Number</label>
                        <input type="text" id="phone" name="phone" placeholder="-8,466" class="mt-1 block w-full  border border-gray-300  " />
                      </div>
            </div>
        </div>

            <div>

              {/* ------------------------------------------------------------------------------ */}
        <p className='bg-[#fbee57] text-sm py-1' >For more than one make/model of panels on a single inverter, use this area to define the additional solar panels</p>
        {/* ------------------------------------------------------------------------------------------ */}
        <div class="flex gap-2 border p-0.5">
          <label for="mailing_address" class="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#4e74a1] p-1 placeholder border-b-2 border-white">Second set of solar panels</label>
          <div className=' md:flex md:flex-row   gap-x-1'>
                      <div class="">
                        <label for="phone" class="block text-xs font-light text-gray-700">Make</label>
                        <input type="text" id="phone" name="phone" placeholder="1,853"  class="mt-1 block w-full  border  border-gray-300  " />
                      </div>
                      <div>
                        <label for="phone" class="block text-xs font-light text-gray-700">Model</label>
                        <input type="text" id="phone" name="phone" placeholder="10,319" class="mt-1 block w-full  border border-gray-300  " />
                      </div>
                      <div>
                        <label for="phone" class="block text-xs font-light text-gray-700"># of panels</label>
                        <input type="text" id="phone" name="phone" placeholder="-8,466" class="mt-1 block md:w-16 w-full  border border-gray-300  " />
                      </div>
                          <div>
                          <label for="phone" class="block text-xs font-light text-gray-700">Watts/ panel</label>
                          <input type="text" id="phone" name="phone" placeholder="-8,466" class="mt-1 block md:w-16 w-full  border border-gray-300  " />
                          </div>
                      <div>
                        <label for="phone" class="block text-xs font-light text-gray-700">KW of 2nd Set of Panels</label>
                        <input type="text" id="phone" name="phone" placeholder="-8,466" class="mt-1 block w-full  border border-gray-300  " />
                      </div>
            </div>
        </div>
                        {/* --------------------------------------------------------------------------Second set of Inverters */}
        <div class="flex gap-2 border p-0.5">
          <label for="mailing_address" class="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#4e74a1] p-1 placeholder border-b-2 border-white">Second set of Inverters</label>
          <div className=' md:flex md:flex-row  gap-x-1'>
                      <div class="">
                        <label for="phone" class="block text-xs font-light text-gray-700">Make</label>
                        <input type="text" id="phone" name="phone" placeholder="1,853"  class="mt-1 block w-full  border  border-gray-300  " />
                      </div>
                      <div>
                        <label for="phone" class="block text-xs font-light text-gray-700">Model</label>
                        <input type="text" id="phone" name="phone" placeholder="10,319" class="mt-1 block w-full  border border-gray-300  " />
                      </div>
                      <div>
                        <label for="phone" class="block text-xs font-light text-gray-700">Rated Capacity</label>
                        <input type="text" id="phone" name="phone" placeholder="-8,466" class="mt-1 block md:w-32 w-full  border border-gray-300  " />
                      </div>
                      <div>     
                          <div>
                          <label for="phone" class="block text-xs font-light text-gray-700">Inverter Serial Number</label>
                          <input type="text" id="phone" name="phone" placeholder="-8,466" class="mt-1 block w-full  border border-gray-300  " />
                          </div>
                      </div>
            </div>
        </div>
            </div>
            {/* <!-- DISCO --> */}
            <div class=" gap-x-6 grid grid-cols-1 md:grid-cols-2 border">
                <div class="flex justify-between">
                    <label for="phone" class="w-1/3 text-xs font-medium text-white bg-[#4e74a1]  placeholder border-b-2 border-white">OVERALL SYSTEM SIZE</label>
                    <div className='p-0.5'>
                       <input type="text" id="phone" name="phone" placeholder="Multan Electric Power Company" class=" py-1 md:w-4/5 p-2 border border-gray-300 w-16 text-center " />
                    </div>
                </div>
            </div>
          </div> 
    </form>
  </div>
  );
};

export default Client;

















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
//       <table className="table-auto  border-collapse border border-gray-300">
//         <tbody>
//           {/* System Size */}
//           <tr>
//             <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">System Size</td>
//             <td className="border border-gray-300 w-16 text-center">No. of Panels</td>
//             <td className="border border-gray-300 w-16 text-center" colSpan="2">
//               <input
//                 type="number"
//                 name="noOfPanels"
//                 value={formValues.noOfPanels}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 w-16 text-center">X Panel Voltage</td>
//             <td className="border border-gray-300 w-16 text-center">
//               <input
//                 type="number"
//                 name="panelVoltage"
//                 value={formValues.panelVoltage}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 w-16 text-center">Wp</td>
//             <td className="border border-gray-300 w-16 text-center " colSpan="4">
//               <input
//                 type="number"
//                 name="wp"
//                 value={formValues.wp}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//           </tr>

//           {/* Panel Make & Model */}
//           <tr>
//             <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">Panel Make & Model</td>
//             <td className="border border-gray-300 w-16 text-center " colSpan="4">
//               <input
//                 type="text"
//                 name="panelMake"
//                 value={formValues.panelMake}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 w-16 text-center " colSpan="4">

//               <input
//                 type="text"
//                 name="panelModel"
//                 value={formValues.panelModel}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//           </tr>

//           {/* Inverter Make & Model */}
//           <tr>
//             <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">Inverter Capacity & Type</td>
//             <td className="border border-gray-300 w-16 text-center">Rate Capacity</td>
//             <td className="border border-gray-300 w-16 text-center" colSpan="2">
//               <input
//                 type="text"
//                 name="inverterMake"
//                 value={formValues.inverterMake}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 w-16 text-center">Model</td>
//             <td className="border border-gray-300 w-16 text-center" colSpan="2">
//               <input
//                 type="text"
//                 name="inverterModel"
//                 value={formValues.inverterModel}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 w-16 text-center">Hybrid</td>
//             <td className="border border-gray-300 w-16 text-center" colSpan="2">
//               <input
//                 type="text"
//                 name="inverterHybrid"
//                 value={formValues.inverterHybrid}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//           </tr>

//             {/* Second set of Inverters */}
//             <tr>
//             <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">Inverter Make & Model</td>
//             <td className="border border-gray-300 w-16 text-center" colSpan="2">
//             Make
//               <input
//                 type="text"
//                 name="secondSetPanelsMake"
//                 value={formValues.invMake}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 w-16 text-center" colSpan="2">
//             Model
//               <input
//                 type="text"
//                 name="secondSetPanelsModel"
//                 value={formValues.invModel}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 w-16 text-center" colSpan="4">
//             Inverter Serial Number
//               <input
//                 type="number"
//                 name="secondSetPanelsWatt"
//                 value={formValues.invSerial}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//           </tr>

//           {/* Second Set of Solar Panels */}
//           <tr>
//             <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">Second Set of Solar Panels</td>
//             <td className="border border-gray-300 w-16 text-center">
//             Make
//               <input
//                 type="text"
//                 name="secondSetPanelsMake"
//                 value={formValues.secondSetPanelsMake}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 w-16 text-center" colSpan="2">
//             Model
//               <input
//                 type="text"
//                 name="secondSetPanelsModel"
//                 value={formValues.secondSetPanelsModel}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 w-16 text-center">
//             # of Panels
//               <input
//                 type="number"
//                 name="secondSetPanelsCount"
//                 value={formValues.secondSetPanelsCount}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 w-16 text-center">
//             Watts/Panel
//               <input
//                 type="number"
//                 name="secondSetPanelsWatt"
//                 value={formValues.secondSetPanelsWatt}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//             <td className="border border-gray-300 w-16 text-center" colSpan="3">
//             KW of 2nd Set
//               <input
//                 type="number"
//                 name="secondSetPanelsKW"
//                 value={formValues.secondSetPanelsKW}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//           </tr>

// {/* Second set of Inverters */}
// <tr>
//   <td className="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162]  border-b-2 border-white">Second set of Inverters</td>
//   <td className="border border-gray-300 w-16 text-center">
//   Make
//     <input
//       type="text"
//       name="secondSetPanelsMake"
//       value={formValues.secondSetPanelsMake}
//       onChange={handleChange}
//       className=" p-1 border border-gray-300"
//     />
//   </td>
//   <td className="border border-gray-300 w-16 text-center" colSpan="2">
//   Model
//     <input
//       type="text"
//       name="secondSetPanelsModel"
//       value={formValues.secondSetPanelsModel}
//       onChange={handleChange}
//       className=" p-1 border border-gray-300"
//     />
//   </td>
//   <td className="border border-gray-300 w-16 text-center" colSpan="2">
//   Rated Capacity
//     <input
//       type="number"
//       name="secondSetPanelsCount"
//       value={formValues.secondSetPanelsCount}
//       onChange={handleChange}
//       className=" p-1 border border-gray-300"
//     />
//   </td>
//   <td className="border border-gray-300 w-16 text-center" colSpan="3">
//   Inverter Serial Number
//     <input
//       type="number"
//       name="secondSetPanelsWatt"
//       value={formValues.secondSetPanelsWatt}
//       onChange={handleChange}
//       className=" p-1 border border-gray-300"
//     />
//   </td>
//   {/* <td className="border border-gray-300 w-16 text-center" colSpan="3">
//   KW of 2nd Set
//     <input
//       type="number"
//       name="secondSetPanelsKW"
//       value={formValues.secondSetPanelsKW}
//       onChange={handleChange}
//       className=" p-1 border border-gray-300"
//     />
//   </td> */}
// </tr>

//           {/* Overall System Size */}
//           <tr>
//             <td className="border border-gray-300 w-16 text-center font-bold">Overall System Size</td>
//             <td className="border border-gray-300 w-16 text-center" colSpan="8">
//               <input
//                 type="number"
//                 name="overallSystemSize"
//                 value={formValues.overallSystemSize}
//                 onChange={handleChange}
//                 className=" p-1 border border-gray-300"
//               />
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SolarSystemForm;
