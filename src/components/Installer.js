// bg-[#526042]
// bg-[#7b9162]


import React from 'react';

const Client = () => {
  return (
    <div className=" md:p-4">
    <h2 class="text-2xl font-bold mb-1  text-start py-2 px-3 text-white bg-[#526042]">CINSTALLER INFORMATION</h2>
    <form>
      {/* <!-- Main grid layout --> */}
      <div class="grid grid-cols-1 md:grid-cols- gap-x- gap-y-">
        {/* <!-- Name --> */}
        <div class="flex  ">
          <label for="name" class="w-1/3 md:w-1/6   text-xs font-medium text-white bg-[#7b9162] p-2 placeholder border-b-2 border-white" >COMPANY NAME</label>
          <input type="text" id="name" name="name" placeholder="Maxtek Electrical Solutions" class="py-1 w-full p-2 border border-gray-300  "/>
        </div>
        {/* <!-- CNIC --> */}
        <div class="flex ">
          <label for="cnic" class="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162] p-0.5 placeholder border-b-2 border-white ">COMPANY ADDRESS</label>
          <input type="text" id="cnic" name="cnic" placeholder="58-Kacha Lawrance Road Lahore" class="py-1 w-full p-2 border border-gray-300  " />
        </div>
        {/* <!-- Address --> */}
        <div class="flex ">
          <label for="address" class="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162] p-0.5 placeholder border-b-2 border-white">AEDB REGISTRATION No</label>
          <input type="text" id="address" name="address" placeholder="CR/23/086/C-3" class="py-1 w-full p-2 border border-gray-300  " />
        </div>
        {/* <!-- Mailing Address --> */}
        <div class="flex ">
          <label for="mailing_address" class="w-1/3 md:w-1/6 text-xs font-medium text-white bg-[#7b9162] p-0.5 placeholder border-b-2 border-white">INSTALLING ENGINEER</label>
          <input type="text" id="mailing_address" name="mailing_address" placeholder="Muhammad Hasnain" class="py-1 w-full p-2 border border-gray-300  " />
        </div>
        {/* <!-- Phone and Email --> */}
        {/* <!-- <div class="gap-y-2"> --> */}
            <div class=" gap-x-6 grid  grid-cols-1 md:grid-cols-2 ">
                <div class="flex">
                    <label for="phone" class="w-1/3  text-xs font-medium text-white bg-[#7b9162] p-2 placeholder border-b-2 border-white">INSTALLER NAME </label>
                    <input type="text" id="phone" name="phone" placeholder=" Raza Farooq" class="py-1 w-full md:w-4/5 p-2 border border-gray-300  " />
                </div>
                <div class="flex">
                    <label for="phone" class="w-1/3 text-xs font-medium text-white md:text-center  bg-[#7b9162] p-0.5  border-b-2 border-t-2 border-white">INSTALLER CNIC</label>
                    <input type="text" id="phone" name="phone" placeholder="36104-1120161-1" class="py-1 w-full md:w-2/3 p-2 border border-gray-300  " />
                </div>
            </div>
            {/* <!-- DISCO --> */}
            <div class=" gap-x-6 grid grid-cols-1 md:grid-cols-2 ">
                <div class="flex">
                    <label for="phone" class="w-1/3 text-xs font-medium text-white bg-[#7b9162] p-0.5 placeholder border-b-2 border-white">INSTALLER PHONE</label>
                    <input type="text" id="phone" name="phone" placeholder="INSTALLER PHONE" class="py-1 w-full md:w-4/5 p-2 border border-gray-300  " />
                </div>
                <div class="flex">
                    <label for="phone" class="w-1/3 text-xs font-medium text-white md:text-center  bg-[#7b9162] p-2 border-b-2 border-white ">INSTALLER EMAIL</label>
                    <input type="text" id="phone" name="phone" placeholder="INSTALLER EMAIL" class="py-1 w-full md:w-2/3 p-2 border border-gray-300  " />
                </div>
            </div>
            {/* <!-- Reference Number --> */}
            
          </div>
        {/* <!-- </div> --> */}

    </form>
  </div>
  );
};

export default Client;





