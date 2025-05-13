"use server";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { ArrowRight, BarChart3 } from "lucide-react";
import Image from "next/image";

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

                <Image
                  src="/hero-ui-nobg.png"
                  alt="Hero Image"
                  width={1280}
                  height={720}
                  className="w-full aspect-video"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
