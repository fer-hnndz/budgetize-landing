import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CreditCard,
  DollarSign,
  FileText,
  PieChart,
  Share2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Image
            src="/Budgetize-Logo-Black.svg"
            alt="Budgetize Logo"
            width={256}
            height={256}
            className="w-11 aspect-square"
          />

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:underline"
            >
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:underline hidden sm:inline-flex"
            >
              Log in
            </Link>
            <Button className="bg-[#6964b5] hover:bg-[#5a56a3]">
              Get Started
            </Button>
          </div>
        </div>
      </header>

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
                          <p className="text-xs text-gray-500">Total Budget</p>
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

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#6964b5]/10 px-3 py-1 text-sm text-[#6964b5]">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need to Manage Your Finances
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Budgetize offers a comprehensive set of tools to help you
                  track, plan, and optimize your personal finances.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#6964b5]/10">
                    <CreditCard className="h-5 w-5 text-[#6964b5]" />
                  </div>
                  <CardTitle>Multiple Accounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Create accounts in different currencies and track all your
                    finances in one place.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#f06655]/10">
                    <PieChart className="h-5 w-5 text-[#f06655]" />
                  </div>
                  <CardTitle>Budget Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Plan your expenses with customizable budgets and track your
                    spending against them.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#f9b14d]/10">
                    <BarChart3 className="h-5 w-5 text-[#f9b14d]" />
                  </div>
                  <CardTitle>Detailed Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Get a condensed view of your transactions with powerful
                    analytics and reports.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#38a8bb]/10">
                    <Share2 className="h-5 w-5 text-[#38a8bb]" />
                  </div>
                  <CardTitle>Shared Accounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Collaborate with family or friends by sharing accounts and
                    tracking expenses together.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#6964b5]/10">
                    <Calendar className="h-5 w-5 text-[#6964b5]" />
                  </div>
                  <CardTitle>Scheduled Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Set up recurring transactions for bills and subscriptions to
                    never miss a payment.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#f06655]/10">
                    <FileText className="h-5 w-5 text-[#f06655]" />
                  </div>
                  <CardTitle>Cross-Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Available on any browser on desktop and as a home screen app
                    on mobile devices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#f2ebe5]"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#6964b5]/10 px-3 py-1 text-sm text-[#6964b5]">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Choose the Plan That's Right for You
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Budgetize is free to use with basic features. Upgrade to
                  Budgetize+ for advanced features.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>
                    Basic personal finance tracking
                  </CardDescription>
                  <div className="mt-4 text-4xl font-bold">$0</div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-[#6964b5]"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Multiple accounts
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-[#6964b5]"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Basic transaction logging
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-[#6964b5]"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Simple budget planning (5 categories)
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      Shared accounts
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      Scheduled transactions
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#6964b5] hover:bg-[#5a56a3]">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-0 shadow-md relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-[#f06655] px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle>Monthly</CardTitle>
                  <CardDescription>
                    Budgetize+ with all premium features
                  </CardDescription>
                  <div className="mt-4 text-4xl font-bold">
                    $4.99
                    <span className="text-sm font-normal text-gray-500">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-[#f06655]">3 days free trial</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-[#f06655]"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      All free features
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-[#f06655]"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Shared accounts (up to 4 people)
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-[#f06655]"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Scheduled transactions
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-[#f06655]"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Unlimited categories for budgets
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-[#f06655]"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Detailed reports & analytics
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#f06655] hover:bg-[#e05545]">
                    Subscribe Now
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Lifetime</CardTitle>
                  <CardDescription>
                    One-time payment for lifetime access
                  </CardDescription>
                  <div className="mt-4 text-4xl font-bold">$95</div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-[#f9b14d]">Best value</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-[#f9b14d]"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      All Budgetize+ features
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-[#f9b14d]"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Lifetime updates
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-[#f9b14d]"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-[#f9b14d]"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      File attachments for transactions
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-[#f9b14d]"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Early access to new features
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#f9b14d] hover:bg-[#e9a13d]">
                    Buy Lifetime
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#38a8bb] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Take Control of Your Finances?
                </h2>
                <p className="max-w-[600px] text-white/80 md:text-xl/relaxed">
                  Join thousands of users who are already managing their
                  finances with Budgetize.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-[#38a8bb] hover:bg-white/90">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/20"
                >
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#6964b5]/10 px-3 py-1 text-sm text-[#6964b5]">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about Budgetize.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Is my financial data secure?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Yes, we take security seriously. Budgetize uses encryption
                    to protect your data, and we never share your information
                    with third parties.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Can I use Budgetize offline?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Budgetize requires an internet connection to sync your data
                    across devices. However, we're working on an offline mode
                    for future updates.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>How do I cancel my subscription?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    You can cancel your subscription at any time from your
                    account settings. Your access will continue until the end of
                    your billing period.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Can I import data from other apps?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Yes, Budgetize supports importing data from CSV files and
                    several popular finance apps. Check our documentation for
                    details.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>
                    Is there a limit to how many accounts I can create?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    No, there's no limit to the number of accounts you can
                    create in Budgetize, even on the free plan. Create as many
                    as you need to organize your finances.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>How do shared accounts work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    With Budgetize+, you can invite up to 4 people to share an
                    account. Everyone can add transactions and view the account,
                    making it perfect for families or roommates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <Image
            src="/Budgetize-Logo-Black.svg"
            alt="BudgetizeLogo"
            width={128}
            height={128}
            className="w-10 aspect-square"
          />
          <p className="text-center text-sm text-gray-500 md:text-left">
            © 2025 Budgetize. All rights reserved. Open source personal finance
            tracker.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              Terms
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
