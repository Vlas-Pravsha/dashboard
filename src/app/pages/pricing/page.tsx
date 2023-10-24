import SecondHeader from "@/components/Header/HeaderForPricing/HeaderForPricing";
import Cart from "@/components/Pricing/Cart/Cart";
import { Item } from "@/components/Pricing/Cart/CartItem/CartItem";
import Footer from "@/components/Pricing/Footer/Footer";
import Questions from "@/components/Pricing/Qustions/Questions";
import Table from "@/components/Pricing/Table/Table";
import React from "react";
import { v1 } from "uuid";
import s from "./Pricing.module.scss";

const cartData: Item[] = [
  {
    id: v1(),
    title: "Starter",
    description: "Best option for personal use & for your next project.",
    price: "$29",
    options: [
      { id: v1(), text: "Individual configuration" },
      { id: v1(), text: "No setup, or hidden fees" },
      { id: v1(), text: "Team size: 1 developer" },
      { id: v1(), text: "Premium support: 6 months" },
      { id: v1(), text: "Free updates: 6 months" },
    ],
  },
  {
    id: v1(),
    title: "Company",
    description: "Relevant for multiple users, extended & premium support.",
    price: "$99",
    options: [
      { id: v1(), text: "Individual configuration" },
      { id: v1(), text: "No setup, or hidden fees" },
      { id: v1(), text: "Team size: 10 developers" },
      { id: v1(), text: "Premium support: 24 months" },
      { id: v1(), text: "Free updates: 24 months" },
    ],
  },
  {
    id: v1(),
    title: "Starter",
    description: "Best option for personal use & for your next project.",
    price: "$29",
    options: [
      { id: v1(), text: "Individual configuration" },
      { id: v1(), text: "No setup, or hidden fees" },
      { id: v1(), text: "Team size: 100+ developers" },
      { id: v1(), text: "Premium support: 36 months" },
      { id: v1(), text: "Free updates: 36 months" },
    ],
  },
];
const questionsData = [
  {
    id: v1(),
    title: "What do you mean by Figma assets?",
    answer:
      "You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.",
  },
  {
    id: v1(),
    title: "What does lifetime access exactly mean?",
    answer:
      "Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.",
  },
  {
    id: v1(),
    title: "How does support work?",
    answer: (
      <>
        Were aware of the importance of well qualified support, that is why we
        decided that support will only be provided by the authors that actually
        worked on this project. Feel free to
        <span className={s.link}> contact us</span>, and well help you out as
        soon as we can.
      </>
    ),
  },
  {
    id: v1(),
    title:
      "I want to build more than one project with FlowBite. Is that allowed?",
    answer:
      "You can use FlowBite for an unlimited amount of projects, whether it's a personal website, a SaaS app, or a website for a client. As long as you don't build a product that will directly compete with FlowBite either as a UI kit, theme, or template, it's fine. Find out more information by reading the license.",
  },
  {
    id: v1(),
    title: "What does free updates include?",
    answer: (
      <>
        The free updates that will be provided is based on the
        <span className={s.link}> roadmap</span> that we have laid out for this
        project. It is also possible that we will provide extra updates outside
        of the roadmap as well.
      </>
    ),
  },
  {
    id: v1(),
    title: "What does the free version include?",
    answer: (
      <>
        The <span className={s.link}>free version</span> of FlowBite includes a
        minimal style guidelines, component variants, and a dashboard page with
        the mobile version alongside it. You can use this version for any
        purposes, because it is open-source under the MIT license.
      </>
    ),
  },
  {
    id: v1(),
    title: "What is the difference between FlowBite and Tailwind UI?",
    answer:
      "Although both FlowBite and Tailwind UI are built for integration with Tailwind CSS, the main difference is in the design, the pages, the extra components and UI elements that FlowBite includes.  Additionally, FlowBite is a project that is still in development, and later it will include both the application, marketing, and e-commerce UI interfaces.",
  },
  {
    id: v1(),
    title: "How do I purchase a license for my entire team?",
    answer: (
      <>
        You can purchase a license that you can share with your entire team
        here:
        <ul>
          <li className={s.link}>
            Figma Files - Buy a team license for $299 USD USD
          </li>
          <li className={s.link}>
            Figma Files + Tailwind CSS code pre-order - Buy a team license for
            $699 $559
          </li>
          <li className={s.link}>
            Tailwind CSS code pre-order - Buy a team license for $399 $319 USD
          </li>
        </ul>
        Please use a single account to share with your team to access the
        download files.
      </>
    ),
  },
  {
    id: v1(),
    title: "Can I build/sell templates or themes using FlowBite?",
    answer:
      "It is not allowed to use FlowBite or parts of the project to build themes, templates, UI kits, or page builders. Find out more information by reading the license.",
  },
  {
    id: v1(),
    title: "Can I use FlowBite in open-source projects?",
    answer:
      "Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself. With that being said, feel free to use this design kit for your open-source projects. Find out more information by reading the license.",
  },
  {
    id: v1(),
    title: "Can I use FlowBite for commercial purposes?",
    answer:
      "Absolutely! You can use this design kit to build any type of commercial business, whether it's a SaaS, an e-commerce app, an application UI. As long as it is not a design resource that you will re-sell, it is alright to use it for commercial purposes. Find out more information by reading the license.",
  },
  {
    id: v1(),
    title: "Can I get an invoice?",
    answer: (
      <>
        After opening the checkout process, you will be able to add all of your
        personal or company information that you want to be available on the
        invoice. After the purchase, you will get an email with the invoice. If
        you forgot to complete the information, or you didnt get the invoice by
        email, feel free to <span className={s.link}>contact us</span> and help
        you out with the invoice.
      </>
    ),
  },
  {
    id: v1(),
    title:
      "When will I get access to the Tailwind CSS code if I pre-ordered it?",
    answer: (
      <>
        The official date that we have set out to release the code version of
        FlowBite is the 25th of September, 2021. We are already working on the
        integration and if you have a pre-order, you will also get frequent
        updates about the progress. You will be one of the first to know when it
        will be available.
      </>
    ),
  },
  {
    id: v1(),
    title: "What is your refund policy?",
    answer: (
      <>
        If you are unhappy with your purchase, just
        <span className={s.link}> contact us</span> within 30 days and we will
        issue a full refund.
      </>
    ),
  },
  {
    id: v1(),
    title:
      "Is it allowed to use the design assets, such as the fonts, icons, and illustrations?",
    answer: (
      <>
        What you see is what you get. Which means that all icons, fonts, and
        illustrations can be used based on the licensing that we researched or
        purchased. For example, we purchased rights to use the illustrations in
        Flowbite.
      </>
    ),
  },
  {
    id: v1(),
    title: "Where can I access my download files?",
    answer: (
      <>
        After you purchased one of the plans, you will get two emails: one for
        the invoice, and another one with the download files. Soon we will
        create a way that you will be able to access the download files from the
        FlowBite dashboard from this website.
      </>
    ),
  },
  {
    id: v1(),
    title:
      "I have a company registered for VAT. Where can I add the VAT for the invoice?",
    answer: (
      <>
        After initializing the checkout process from Paddle, you will be able to
        see a text Add VAT code. Click on that, and add the VAT code for your
        company. This will also remove the extra VAT tax from the purchase.
      </>
    ),
  },
  {
    id: v1(),
    title: "Why would I pre-order the Tailwind CSS code?",
    answer: (
      <>
        If you decide to pre-order the Tailwind CSS code, which will arrive on
        the 25th of September 2021, you can get a base 20% price reduction and
        purchase it only for $119, instead of $149.
      </>
    ),
  },
];

const tableData = [
  {
    id: v1(),
    title: "Seperate business/personal",
    Freelancer: "active",
    Company: "active",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Estimate tax payments",
    Freelancer: "active",
    Company: "active",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Stock control",
    Freelancer: "active",
    Company: "active",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Create invoices & estimates",
    Freelancer: "disabled",
    Company: "active",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Manage bills & payments",
    Freelancer: "disabled",
    Company: "active",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Run payroll",
    Freelancer: "disabled",
    Company: "active",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Handle multiple currencies",
    Freelancer: "disabled",
    Company: "disabled",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Number of Users",
    Freelancer: "1 User",
    Company: "5-10 Users",
    Enterprise: "20+ Users",
  },
  {
    id: v1(),
    title: "Track deductible mileage",
    Freelancer: "disabled",
    Company: "disabled",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Track employee time",
    Freelancer: "disabled",
    Company: "disabled",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Multi-device",
    Freelancer: "disabled",
    Company: "disabled",
    Enterprise: "active",
  },
];
const Pricing = () => {
  return (
    <div className={s.wrapper}>
      <SecondHeader />
      <div className={s.container}>
        <h2 className={s.title}>Our pricing plan made simple</h2>
        <p className={s.description}>
          All types of businesses need access to development resources, so we
          give you the option to decide how much you need to use.
        </p>
        <Cart cartData={cartData} />
        <Table tableData={tableData} />
        <div className={s.title}>Frequently asked questions</div>
        <p className={s.description}>
          All types of businesses need access to development resources, so we
          give you the option to decide how much you need to use.
        </p>
        <Questions questionsData={questionsData} />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
