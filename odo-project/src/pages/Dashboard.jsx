import React from "react";
import MiniAreaChart from "../components/MiniAreaChart";
import SalesReportChart from "../components/SalesReportChart";

function Dashboard() {
  const charts = [
    {
      title: "Revenue Generated",
      value: "₦50,000.00",
      data: [
        { value: 5000 },
        { value: 10000 },
        { value: 20000 },
        { value: 30000 },
        { value: 50000 },
      ],
    },
    {
      title: "Users",
      value: "1,200",
      data: [
        { value: 200 },
        { value: 400 },
        { value: 800 },
        { value: 1000 },
        { value: 1200 },
      ],
    },
    {
      title: "Orders",
      value: "350",
      data: [
        { value: 50 },
        { value: 100 },
        { value: 200 },
        { value: 300 },
        { value: 350 },
      ],
    },
  ];

  return (
    <>
      <section className="flex">
        {/* Sidebar Section */}
        <div className="w-[312px] bg-[#002853]">
          <div className="mx-[16px] flex flex-col text-[16px] leading-[24px] font-[inter] font-[500]">
            {/* Header subsection */}
            <div className="flex justify-between mt-[16px]">
              <img
                className="w-[125px] h-[58px]"
                src="home-logo.png"
                alt="home-logo"
              />
              <p className="mt-[28px] text-[#B1B1B1] text-[10px] font-[montserrat] font-[600]">
                ver 0.10
              </p>
            </div>

            {/* Navigation Links */}
            <div className="pt-[81px]">
              <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                <img src="home-icon.png" alt="home-icon" />
                <h4 className="ml-[12px] text-[#009EDA]"> Home </h4>
              </button>
            </div>

            <div className="pt-[24px]">
              <h3 className="text-[#73809C]">Payments</h3>
              <div className="pt-[8px] flex flex-col gap-[4px] ">
                <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                  <img src="transactions-icon.png" alt="transactions-icon" />
                  <h4 className="ml-[12px] text-[#F2F4F7]"> Transactions </h4>
                </button>
                <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                  <img src="customers-icon.png" alt="customers-icon" />
                  <h4 className="ml-[12px] text-[#F2F4F7]"> Customers </h4>
                </button>
                <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                  <img src="refunds-icon.png" alt="refunds-icon" />
                  <h4 className="ml-[12px] text-[#F2F4F7]"> Refunds </h4>
                </button>
                <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                  <img src="payouts-icon.png" alt="payouts-icon" />
                  <h4 className="ml-[12px] text-[#F2F4F7]"> Payouts </h4>
                </button>
                <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                  <img src="disputes-icon.png" alt="disputes-icon" />
                  <h4 className="ml-[12px] text-[#F2F4F7]"> Disputes </h4>
                </button>
                <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                  <img
                    src="transaction-splits-icon.png"
                    alt="transaction-splits-icon"
                  />
                  <h4 className="ml-[12px] text-[#F2F4F7]">
                    Transaction Splits
                  </h4>
                </button>
                <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                  <img src="subaccounts-icon.png" alt="subaccounts-icon" />
                  <h4 className="ml-[12px] text-[#F2F4F7]"> Subaccounts </h4>
                </button>
              </div>
            </div>

            <div className="pt-[24px]">
              <h3 className="text-[#73809C]">Recurring</h3>
              <div className="pt-[8px] flex flex-col gap-[4px] ">
                <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                  <img src="subscribers-icon.png" alt="subscribers-icon" />
                  <h4 className="ml-[12px] text-[#F2F4F7]"> Subscribers </h4>
                </button>
                <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                  <img src="plans-icon.png" alt="plans-icon" />
                  <h4 className="ml-[12px] text-[#F2F4F7]"> Plans </h4>
                </button>
                <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                  <img src="subscriptions-icon.png" alt="subscriptions-icon" />
                  <h4 className="ml-[12px] text-[#F2F4F7]"> Subscriptions </h4>
                </button>
              </div>
            </div>

            <div className="pt-[24px]">
              <h3 className="text-[#73809C]">Commerce</h3>
              <div className="pt-[8px] flex flex-col gap-[4px] ">
                <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                  <img src="payment-pages-icon.png" alt="payment-pages-icon" />
                  <h4 className="ml-[12px] text-[#F2F4F7]"> Payment pages </h4>
                </button>
                <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                  <img src="products-icon.png" alt="products-icon" />
                  <h4 className="ml-[12px] text-[#F2F4F7]"> Products </h4>
                </button>
                <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                  <img src="storefronts-icon.png" alt="storefronts-icon" />
                  <h4 className="ml-[12px] text-[#F2F4F7]"> Storefronts </h4>
                </button>
                <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                  <img src="orders-icon.png" alt="orders-icon" />
                  <h4 className="ml-[12px] text-[#F2F4F7]"> Orders </h4>
                </button>
              </div>
            </div>

            <div className="mt-[60px] mb-[70px] flex flex-col gap-[4px] ">
              <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                <img src="audit-logs-icon.png" alt="audit-logs-icon" />
                <h4 className="ml-[12px] text-[#F2F4F7]"> Audit logs </h4>
              </button>
              <button className="flex items-center bg-[#007AFF26] pl-[12px] py-[8px] w-full rounded-[6px] cursor-pointer">
                <img src="settings-icon.png" alt="settings-icon" />
                <h4 className="ml-[12px] text-[#F2F4F7]"> Settings </h4>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <main className=" w-full h-screen">
          {/* Header Section */}
          <div className="w-full h-[71px] flex items-center">
            <div className="relative w-[679px] ml-[43px] ">
              <input
                className="border border-[#D0D5DD] rounded-[8px] focus:outline-none w-full pl-[14px] py-[8px]"
                placeholder="Search"
                type="text"
              />
              <img
                className="absolute left-[639px] top-[7px]"
                src="/search-input-icon.png"
                alt="search-input-icon"
              />
            </div>
            <div className="ml-[140px] flex items-center w-[229px] justify-between">
              <div>
                <img src="bell-avatar.png" alt="bell-avatar" />
              </div>
              <div>
                <img
                  className=""
                  src="profile-avatar.png"
                  alt="profile-avatar"
                />
              </div>
              <div>
                <h3 className="font-[inter] font-[500] text-[14px]">
                  Olivia Rhye
                </h3>
                <span className="font-[inter] font-[400] text-[12px] text-[#959595] ">
                  olivia@untitledui.com
                </span>
              </div>
            </div>
          </div>

          {/* Body Section */}
          <div className="bg-[#F4F7FE]">
            <div className="">
              <div className="max-w-[1000px]  ">
                {/* welcome back section */}
                <div className="w-full ml-[44px]">
                  <div className="flex justify-between ">
                    <p className="mt-[18px] flex flex-col">
                      <span className="font-[montserrat] font-[500] text-[16px] leading-[15px]">
                        Welcome back,
                      </span>
                      <span className="font-[montserrat] font-[600] text-[24px] leading-[15px] mt-[15px] mb-[19px]">
                        Olivia Rhye
                      </span>
                      <span className="font-[montserrat] font-[500] text-[14px] leading-[15px]">
                        Here's what's going on at your business right now
                      </span>
                    </p>
                    <p className="mt-[47px] font-[montserrat] font-[500] text-[14px] leading-[15px]">
                      7 August, 2024
                    </p>
                  </div>
                  <div></div>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[24px] ml-[39px] ">
                  {charts.map((chart, index) => (
                    <MiniAreaChart
                      key={index}
                      title={chart.title}
                      value={chart.value}
                      data={chart.data}
                    />
                  ))}

                  <div className="col-span-1 sm:col-span-2 row-span-1 lg:col-span-2">
                    <SalesReportChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
export default Dashboard;
// This is the dashboard page component for the ODO project.
