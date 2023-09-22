import React from "react";
import s from "./Products.module.scss";
import ProductsList from "@/components/Crud/Products/ProductsList/ProductsList";
import { v1 } from "uuid";

const Products = () => {
  const productsData = [
    {
      name: "Education Dashboard",
      category: "Html templates",
      technology: "Angular",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$149",
      discount: "No",
    },
    {
      name: "React UI Kit",
      category: "Html templates",
      technology: "React JS",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$129",
      discount: "10%",
    },
    {
      name: "Education Dashboard",
      category: "Html templates",
      technology: "Angular",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$149",
      discount: "No",
    },
    {
      name: "React UI Kit",
      category: "Html templates",
      technology: "React JS",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$129",
      discount: "No",
    },
    {
      name: "Education Dashboard",
      category: "Html templates",
      technology: "Angular",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$149",
      discount: "25%",
    },
    {
      name: "Education Dashboard",
      category: "Html templates",
      technology: "Angular",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$149",
      discount: "10%",
    },
    {
      name: "React UI Kit",
      category: "Html templates",
      technology: "React JS",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$129",
      discount: "No",
    },
    {
      name: "Education Dashboard",
      category: "Html templates",
      technology: "Angular",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$149",
      discount: "No",
    },
    {
      name: "React UI Kit",
      category: "Html templates",
      technology: "React JS",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$129",
      discount: "No",
    },
    {
      name: "Education Dashboard",
      category: "Html templates",
      technology: "Angular",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$149",
      discount: "No",
    },
    {
      name: "Education Dashboard",
      category: "Html templates",
      technology: "Angular",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$149",
      discount: "30%",
    },
    {
      name: "React UI Kit",
      category: "Html templates",
      technology: "React JS",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$129",
      discount: "No",
    },
    {
      name: "Education Dashboard",
      category: "Html templates",
      technology: "Angular",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$149",
      discount: "No",
    },
    {
      name: "React UI Kit",
      category: "Html templates",
      technology: "React JS",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$129",
      discount: "No",
    },
    {
      name: "Education Dashboard",
      category: "Html templates",
      technology: "Angular",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$149",
      discount: "5%",
    },
    {
      name: "React UI Kit",
      category: "Html templates",
      technology: "React JS",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$129",
      discount: "No",
    },
    {
      name: "Education Dashboard",
      category: "Html templates",
      technology: "Angular",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$149",
      discount: "No",
    },
    {
      name: "Education Dashboard",
      category: "Html templates",
      technology: "Angular",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$149",
      discount: "No",
    },
    {
      name: "React UI Kit",
      category: "Html templates",
      technology: "React JS",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$129",
      discount: "50%",
    },
    {
      name: "Education Dashboard",
      category: "Html templates",
      technology: "Angular",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$149",
      discount: "No",
    },
    {
      name: "React UI Kit",
      category: "Html templates",
      technology: "React JS",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$129",
      discount: "No",
    },
    {
      name: "Education Dashboard",
      category: "Html templates",
      technology: "Angular",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$149",
      discount: "10%",
    },
    {
      name: "Education Dashboard",
      category: "Html templates",
      technology: "Angular",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$149",
      discount: "No",
    },
    {
      name: "React UI Kit",
      category: "Html templates",
      technology: "React JS",
      id: v1(),
      description:
        "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
      price: "$129",
      discount: "No",
    },
  ];
  return (
    <div className={s.wrapper}>
      <ProductsList productsData={productsData}></ProductsList>
    </div>
  );
};

export default Products;
