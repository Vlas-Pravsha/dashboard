import React from "react";
import s from "./Registration.module.scss";
import Avatar1 from "../../assets/Img/UsersImg/neil-sims.png";
import Avatar2 from "../../assets/Img/UsersImg/jese-leos.png";
import Avatar3 from "../../assets/Img/UsersImg/lana-byrd.png";
import Avatar4 from "../../assets/Img/UsersImg/profile.png";
import Avatar5 from "../../assets/Img/UsersImg/andrey.png";
import Avatar6 from "../../assets/Img/UsersImg/thomas-lean.png";
import Avatar7 from "../../assets/Img/UsersImg/helene-engels.png";
import Avatar8 from "../../assets/Img/UsersImg/joseph-mcfall.png";
import Avatar9 from "../../assets/Img/UsersImg/leslie-livingston.png";
import Avatar10 from "../../assets/Img/UsersImg/michael-gough.png";
import Avatar11 from "../../assets/Img/UsersImg/roberta-casas.png";
import Avatar12 from "../../assets/Img/UsersImg/robert-brown.png";
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
