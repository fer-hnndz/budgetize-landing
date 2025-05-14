"use server";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import Link from "next/link";

import { FaLongArrowAltRight } from "react-icons/fa";
import { FiPieChart } from "react-icons/fi";
import { AiOutlineBank } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";

export default async function Index() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <section className="block w-full py-12 md:py-24 lg:py-32 bg-[#f2ebe5]">
            <div className="flex flex-col lg:flex-row container mx-auto px-4 md:px-6">
              <div className="flex flex-col justify-center space-y-4 container">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Take Control of Your Finances
                  </h1>
                  <p className="max-w-[600px] text-gray-700 md:text-xl">
                    Budgetize is an open source personal finance tracker that
                    helps you manage your money, plan expenses, and gain
                    insights into your spending habits.
                  </p>
                </div>

                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="flex flex-row bg-[#6964b5] rounded-md items-center justify-center text-sm text-white p-2"
                    href="https://web.budgetizeapp.com"
                  >
                    <span className="ml-2">Start Budgeting</span>
                    <FaLongArrowAltRight className="ml-2 mr-2" />
                  </Link>

                  <button className="bg-white rounded-md p-2 text-sm hover:cursor-pointer">
                    Learn More
                  </button>
                </div>
              </div>

              <Image
                src="/hero-ui-nobg.png"
                alt="Hero Image"
                width={1280}
                height={720}
                className="float-end w-full aspect-video -translate-x-6 lg:-translate-0"
              />
            </div>
          </section>

          <section id="features" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container-sm lg:container-xl mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#6964b5]/10 px-3 py-1 text-sm text-[#6964b5]">
                    Features
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Everything You Need to Track Your Finances
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Budgetize offers a comprehensive set of tools to help you
                    track, plan, and optimize your personal finances.
                  </p>
                </div>
              </div>

              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white shadow text-black p-4 rounded-md flex flex-col justify-center lg:justify-normal">
                  <div className="mb-2 text-xl bg-budgetPrimary-400/30 text-budgetPrimary-500 flex items-center justify-center w-8 h-8 p-1.5 rounded-md">
                    {<AiOutlineBank />}
                  </div>
                  <span className="text-xl font-bold">Multiple Accounts</span>{" "}
                  <p className="mt-1 text-gray-500">
                    Create accounts in different currencies and track all your
                    finances in one place.
                  </p>
                </div>

                <div className="bg-white shadow text-black p-4 rounded-md flex flex-col justify-center lg:justify-normal">
                  <div className="mb-2 text-xl bg-budgetAccent-400/30 text-budgetAccent-500 flex items-center justify-center w-8 h-8 p-1.5 rounded-md">
                    {<FiPieChart />}
                  </div>
                  <span className="text-xl font-bold">Budget Planning</span>{" "}
                  <p className="mt-1 text-gray-500">
                    Plan your expenses with customizable budgets and track your
                    spending against them.
                  </p>
                </div>
                <div className="bg-white shadow text-black p-4 rounded-md flex flex-col justify-center lg:justify-normal">
                  <div className="mb-2 text-xl bg-budgetGold/20 text-budgetGold flex items-center justify-center w-8 h-8 p-1.5 rounded-md">
                    {<FaRegChartBar />}
                  </div>
                  <span className="text-xl font-bold">Detailed Insights</span>{" "}
                  <p className="mt-1 text-gray-500">
                    Get a condensed view of your transactions with powerful
                    analytics and reports.
                  </p>
                </div>
                <div className="bg-white shadow text-black p-4 rounded-md flex flex-col justify-center lg:justify-normal">
                  <div className="mb-2 text-xl bg-budgetTerracota/20 text-budgetTerracota flex items-center justify-center w-8 h-8 p-1.5 rounded-md">
                    {<GrGroup />}
                  </div>
                  <span className="text-xl font-bold">Shared Accounts</span>{" "}
                  <p className="mt-1 text-gray-500">
                    Collaborate with family or friends by sharing accounts and
                    tracking expenses together.
                  </p>
                </div>
                <div className="bg-white shadow text-black p-4 rounded-md flex flex-col justify-center lg:justify-normal">
                  <div className="mb-2 text-xl bg-budgetPrimary-400/30 text-budgetPrimary-500 flex items-center justify-center w-8 h-8 p-1.5 rounded-md">
                    {<FiPieChart />}
                  </div>
                  <span className="text-xl font-bold">
                    Scheduled Transactions
                  </span>{" "}
                  <p className="mt-1 text-gray-500">
                    Set up recurring transactions for bills and subscriptions to
                    never miss a payment.
                  </p>
                </div>
                <div className="bg-white shadow text-black p-4 rounded-md flex flex-col justify-center lg:justify-normal">
                  <div className="mb-2 text-xl bg-budgetAccent-400/30 text-budgetAccent-500 flex items-center justify-center w-8 h-8 p-1.5 rounded-md">
                    {<FiPieChart />}
                  </div>
                  <span className="text-xl font-bold">Cross-Platform</span>{" "}
                  <p className="mt-1 text-gray-500">
                    Available on any browser on desktop and as a home screen app
                    on mobile devices.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
