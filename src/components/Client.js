import React from 'react';

const Client = () => {
  return (
    <div className=" p-4">
    <h2 class="text-2xl font-bold mb-1  text-start py-2 px-3 text-white bg-[#212b35]">Client Information</h2>
    <form>
      {/* <!-- Main grid layout --> */}
      <div class="grid grid-cols-1 md:grid-cols- gap-x- gap-y-">
        {/* <!-- Name --> */}
        <div class="flex  ">
          <label for="name" class="w-1/3 md:w-1/6  text-xs font-medium text-white bg-gray-700 p-2 placeholder border-b-2 border-white " >NAME</label>
          <input type="text" id="name" name="name" placeholder="NIDA AHMAD BUKHARI" class="block py-1 px-3 w-full p-2 border border-gray-300 "/>
        </div>
        {/* <!-- CNIC --> */}
        <div class="flex ">
          <label for="cnic" class="w-1/3 md:w-1/6 text-xs font-medium text-white bg-gray-700 p-2 placeholder border-b-2 border-white ">CNIC</label>
          <input type="text" id="cnic" name="cnic" placeholder="36302-7681633-2" class="py-1 w-full p-2 border border-gray-300  " />
        </div>
        {/* <!-- Address --> */}
        <div class="flex ">
          <label for="address" class="w-1/3 md:w-1/6 text-xs font-medium text-white bg-gray-700 p-2 placeholder border-b-2 border-white">ADDRESS</label>
          <input type="text" id="address" name="address" placeholder="CHONGI NO 4 NISHAT ROAD MTN" class="w-full  py-1 p-2 border border-gray-300  " />
        </div>
        {/* <!-- Mailing Address --> */}
        <div class="flex ">
          <label for="mailing_address" class="w-1/3 md:w-1/6 text-xs font-medium text-white bg-gray-700 p-2 placeholder border-b-2 border-white">Mailing ADDRESS</label>
          <input type="text" id="mailing_address" name="mailing_address" placeholder="CHONGI NO 4 NISHAT ROAD MTN" class="w-full py-1 p-2 border border-gray-300  " />
        </div>
        {/* <!-- Phone and Email --> */}
        {/* <!-- <div class="gap-y-2"> --> */}
            <div class=" gap-x-6 grid  grid-cols-1 md:grid-cols-2 ">
                <div class="flex">
                    <label for="phone" class="w-1/3  text-xs font-medium text-white bg-gray-700 p-2 placeholder border-b-2 border-white">CELL PHONE </label>
                    <input type="text" id="phone" name="phone" placeholder="CELL PHONE # & EMAIL" class="w-full py-1 md:w-4/5 p-2 border border-gray-300  " />
                </div>
                <div class="flex">
                    <label for="phone" class="w-1/3 text-xs font-medium text-white md:text-center  bg-gray-700 p-2  border-b-2 border-t-2 border-white">CLIENT EMAIL</label>
                    <input type="text" id="phone" name="phone" placeholder="CLIENT EMAIL" class="w-full py-1 md:w-2/3 p-2 border border-gray-300  " />
                </div>
            </div>
            {/* <!-- DISCO --> */}
            <div class=" gap-x-6 grid grid-cols-1 md:grid-cols-2 ">
                <div class="flex">
                    <label for="phone" class="w-1/3 text-xs font-medium text-white bg-gray-700 p-2 placeholder border-b-2 border-white">DISCO</label>
                    <input type="text" id="phone" name="phone" placeholder="Multan Electric Power Company" class="w-full py-1 md:w-4/5 p-2 border border-gray-300  " />
                </div>
                <div class="flex">
                    <label for="phone" class="w-1/3 text-xs font-medium text-white md:text-center  bg-gray-700 p-2 border-b-2 border-white ">SUB DIVISION</label>
                    <input type="text" id="phone" name="phone" placeholder="GULGASHT" class="w-full py-1 md:w-2/3 p-2 border border-gray-300  " />
                </div>
            </div>
            {/* <!-- Reference Number --> */}
            <div class=" gap-x-6 grid grid-cols-1 md:grid-cols-2 ">
                <div class="flex">
                    <label for="phone" class="w-1/3 text-xs font-medium text-white bg-gray-700 p-2 placeholder border-b-2 border-white">REF NO</label>
                    <input type="text" id="phone" name="phone" placeholder="10 15171 6534707 U" class="w-full py-1 md:w-4/5 p-2 border border-gray-300  " />
                </div>
                <div class="flex">
                    <label for="phone" class="w-1/3 text-xs font-medium text-white md:text-center  bg-gray-700 p-1  border-b-2 border-white">CUSTOMER ID</label>
                    <input type="text" id="phone" name="phone" placeholder="001819 NAWAB PUR ROAD" class="w-full py-1 md:w-2/3 p-2 border border-gray-300  " />
                </div>
            </div>
            {/* <!-- Customer ID --> */}
            <div class=" gap-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <div class="flex">
                    <label for="phone" class="w-1/3 md:w-2/3 text-xs font-medium text-white bg-gray-700 p-2 placeholder border-b-2 border-white">METER NUMBER</label>
                    <input type="text" id="phone" name="phone" placeholder="S-P 1326483" class="w-full py-1 md:w-5/6 p-2 border border-gray-300  " />
                </div>
                <div class="flex">
                    <label for="phone" class="w-1/3 text-xs font-medium text-white md:text-center  bg-gray-700 p-2 border-b-2 border-t-2 border-white ">BILL TARIFF</label>
                    <input type="text" id="phone" name="phone" placeholder="A-1b(03)T" class="w-full py-1 md:w-2/3 p-2 border border-gray-300  " />
                </div>
                <div class="flex">
                    <label for="phone" class="w-1/3 text-xs font-medium text-white md:text-center  bg-gray-700 p-2  border-b-2 border-t-2 border-white">FEEDER</label>
                    <input type="text" id="phone" name="phone" placeholder="001819 NAWAB PUR ROAD" class="w-full py-1 md:w-2/3 p-2 border border-gray-300  " />
                </div>
            </div>
            {/* <!-- Meter Number --> */}
    
            {/* <!-- Sanction Load --> */}
            <div class=" gap-x-6 grid grid-cols-1 md:grid-cols-2 ">
                <div class="flex">
                    <label for="phone" class="w-1/3 text-xs font-medium text-white bg-gray-700 p-2 border-b-2  border-white ">SANCTION LOAD</label>
                    <input type="text" id="phone" name="phone" placeholder="6" class="w-full py-1 md:w-4/5 p-2 border border-gray-300  " />
                </div>
                <div class="flex">
                    <label for="phone" class="w-1/3 text-sx font-light text-white md:text-center  bg-gray-700 p-2  border-b-2 border-t-2 border-white">REQUIRED LOAD</label>
                    <input type="text" id="phone" name="phone" placeholder="8.190" class="w-full py-1 md:w-2/3 p-2 border border-gray-300  " />
                </div>
            </div>
    
            {/* <!-- Net Consumption --> */}
            <div class="flex gap-x-5 ">
              <label for="net_consumption" class="w-1/6 text-xs font-medium text-white bg-gray-700 p-2 border-b-2 border-t-2 border-white">NET CONSUMPTION</label>
                      <div class="">
                        <label for="phone" class="block text-xs font-light text-gray-700">RESIDENTIAL CONSUPTION OF CLIENT</label>
                        <input type="text" id="phone" name="phone" placeholder="1,853"  class="mt-1 block w-full p-2 border  border-gray-300  " />
                      </div>
                      <div>
                        <label for="phone" class="block text-xs font-light text-gray-700">kWh PRODUCTION FROM SOLAR SYSTEM</label>
                        <input type="text" id="phone" name="phone" placeholder="10,319" class="mt-1 block w-full p-2 border border-gray-300  " />
                      </div>
                      <div>
                        <label for="phone" class="block text-xs font-light text-gray-700">NET CONSUMPTION OF CLIENT</label>
                        <input type="text" id="phone" name="phone" placeholder="-8,466" class="mt-1 block w-full p-2 border border-gray-300  " />
                      </div>
                 </div>
          </div>
        {/* <!-- </div> --> */}

    </form>
  </div>
  );
};

export default Client;





