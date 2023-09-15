import React from "react";
import s from "./Registration.module.scss";
const Avatar1 = "/Img/UsersImg/neil-sims.png";
const Avatar2 = "/Img/UsersImg/jese-leos.png";
const Avatar3 = "/Img/UsersImg/lana-byrd.png";
const Avatar4 = "/Img/UsersImg/profile.png";
const Avatar5 = "/Img/UsersImg/andrey.png";
const Avatar6 = "/Img/UsersImg/thomas-lean.png";
const Avatar7 = "/Img/UsersImg/helene-engels.png";
const Avatar8 = "/Img/UsersImg/joseph-mcfall.png";
const Avatar9 = "/Img/UsersImg/leslie-livingston.png";
const Avatar10 = "/Img/UsersImg/michael-gough.png";
const Avatar11 = "/Img/UsersImg/roberta-casas.png";
const Avatar12 = "/Img/UsersImg/robert-brown.png";
import UserList from "./UserList/UserList";

const usersData = [
  {
    id: 1,
    name: "Neil Sims",
    avatar: Avatar1,
    email: "neil.sims@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "Front-end developer",
    country: "United States",
    status: "Active",
  },
  {
    id: 2,
    name: "Roberta Casas",
    avatar: Avatar12,
    email: "roberta.casas@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "Designer",
    country: "Spain",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Gough",
    avatar: Avatar3,
    email: "michael.gough@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "React developer",
    country: "United Kingdom",
    status: "Active",
  },
  {
    id: 4,
    name: "Jese Leos",
    avatar: Avatar4,
    email: "jese.leos@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "Marketing",
    country: "United States",
    status: "Active",
  },
  {
    id: 5,
    name: "Bonnie Green",
    avatar: Avatar5,
    email: "bonnie.green@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "UI/UX Engineer",
    country: "Australia",
    status: "Offline",
  },
  {
    id: 6,
    name: "Thomas Lean",
    avatar: Avatar6,
    email: "thomas.lean@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "Vue developer",
    country: "Germany",
    status: "Active",
  },
  {
    id: 7,
    name: "Helene Engels",
    avatar: Avatar7,
    email: "helene.engels@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "Product owner",
    country: "Canada",
    status: "Active",
  },
  {
    id: 8,
    name: "Lana Byrd",
    avatar: Avatar8,
    email: "lana.byrd@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "Designer",
    country: "United States",
    status: "Active",
  },
  {
    id: 9,
    name: "Leslie Livingston",
    avatar: Avatar9,
    email: "leslie.livingston@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "Web developer",
    country: "France",
    status: "Offline",
  },
  {
    id: 10,
    name: "Robert Brown",
    avatar: Avatar10,
    email: "robert.brown@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "Laravel developer",
    country: "Russia",
    status: "Active",
  },
  {
    id: 11,
    name: "Neil Sims",
    avatar: Avatar11,
    email: "neil.sims@flowbite.com",
    position: "Front-end developer",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    country: "United States",
    status: "Active",
  },
  {
    id: 12,
    name: "Roberta Casas",
    avatar: Avatar1,
    email: "roberta.casas@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "Designer",
    country: "Spain",
    status: "Active",
  },
  {
    id: 13,
    name: "Michael Gough",
    avatar: Avatar2,
    email: "michael.gough@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "React developer",
    country: "United Kingdom",
    status: "Active",
  },
  {
    id: 14,
    name: "Jese Leos",
    avatar: Avatar3,
    email: "jese.leos@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "Marketing",
    country: "United States",
    status: "Active",
  },
  {
    id: 15,
    name: "Bonnie Green",
    avatar: Avatar4,
    email: "bonnie.green@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "UI/UX Engineer",
    country: "Australia",
    status: "Offline",
  },
  {
    id: 16,
    name: "Thomas Lean",
    avatar: Avatar5,
    email: "thomas.lean@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "Vue developer",
    country: "Germany",
    status: "Active",
  },
  {
    id: 17,
    name: "Helene Engels",
    avatar: Avatar6,
    email: "helene.engels@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "Product owner",
    country: "Canada",
    status: "Active",
  },
  {
    id: 18,
    name: "Lana Byrd",
    avatar: Avatar7,
    email: "lana.byrd@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "Designer",
    country: "United States",
    status: "Active",
  },
  {
    id: 19,
    name: "Leslie Livingston",
    avatar: Avatar8,
    email: "leslie.livingston@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "Web developer",
    country: "France",
    status: "Offline",
  },
  {
    id: 20,
    name: "Robert Brown",
    avatar: Avatar9,
    email: "robert.brown@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    position: "Laravel developer",
    country: "Russia",
    status: "Active",
  },
];

const Registration = () => {
  return (
    <div className={s.wrapper}>
      <UserList usersData={usersData}></UserList>
    </div>
  );
};

export default Registration;
