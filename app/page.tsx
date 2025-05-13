"use server";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { ArrowRight, BarChart3 } from "lucide-react";

export default async function Index() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f2ebe5]">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
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
                    <Button className="bg-[#6964b5] hover:bg-[#5a56a3]">
                      Get Started Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px]">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-4 shadow-xl">
                      <div className="h-[300px] w-[250px] md:h-[400px] md:w-[300px] rounded-xl bg-[#38a8bb]/10 flex flex-col p-4">
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <h3 className="font-bold text-[#38a8bb]">
                              My Budget
                            </h3>
                            <p className="text-sm text-gray-500">May 2025</p>
                          </div>
                          <BarChart3 className="h-5 w-5 text-[#38a8bb]" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 w-3/4 rounded-full bg-[#6964b5]"></div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 w-1/2 rounded-full bg-[#f06655]"></div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 w-2/3 rounded-full bg-[#f9b14d]"></div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 w-1/4 rounded-full bg-[#38a8bb]"></div>
                          </div>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-2">
                          <div className="rounded-lg bg-white p-2 shadow">
                            <p className="text-xs text-gray-500">
                              Total Budget
                            </p>
                            <p className="font-bold">$2,500.00</p>
                          </div>
                          <div className="rounded-lg bg-white p-2 shadow">
                            <p className="text-xs text-gray-500">Spent</p>
                            <p className="font-bold">$1,345.75</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
