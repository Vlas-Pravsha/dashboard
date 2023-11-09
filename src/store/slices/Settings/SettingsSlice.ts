import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface CounterState {
  selectItem: SelectItem[];
  selectedValue: string;
  selected: string;
  selectOpen: boolean;
  languageOptions: LanguageItem[];
  timeOptions: TimeItem[];
  emailData: EmailItem[];
  alertsData: AlertsItem[];
  // usersData: User[];
}

type User = {
  id: number;
  name: string;
  country: string;
  visited: string;
  avatar: string;
  status: boolean;
};

type AlertsItem = {
  id: number;
  title: string;
  status: boolean;
  text: string;
};

type EmailItem = {
  id: number;
  title: string;
  status: boolean;
  text: string;
};

type TimeItem = {
  id: number;
  value: string;
};

type LanguageItem = {
  id: number;
  value: string;
};
type SelectItem = {
  value: string;
  id: number;
};

const initialState: CounterState = {
  selected: "",
  selectOpen: false,
  selectedValue: "",
  alertsData: [
    {
      id: 1,
      title: "Company News",
      text: "Get Themesberg news, announcements, and product updates",
      status: false,
    },
    {
      id: 2,
      title: "Account Activity",
      status: true,
      text: "Get important notifications about you or activity you've missed",
    },
    {
      id: 3,
      title: "Meetups Near You",
      status: true,
      text: "Get an email when a Dribbble Meetup is posted close to my location",
    },
    {
      id: 4,
      title: "New Messages",
      status: false,
      text: "Get Themsberg news, announcements, and product updates",
    },
  ],
  emailData: [
    {
      id: 1,
      title: "Rating reminders",
      status: false,
      text: "Send an email reminding me to rate an item a week after purchase",
    },
    {
      id: 2,
      title: "Item update notifications",
      status: true,
      text: "Send user and product notifications for you",
    },
    {
      id: 3,
      title: "Item comment notifications",
      status: true,
      text: "Send me an email when someone comments on one of my items",
    },
    {
      id: 4,
      title: "Buyer review notifications",
      status: false,
      text: "Send me an email when someone leaves a review with their rating",
    },
  ],
  selectItem: [
    { value: "Front End", id: 1 },
    { value: "Back End", id: 2 },
    { value: "Full Stack", id: 3 },
    { value: "Other", id: 4 },
  ],
  languageOptions: [
    { id: 1, value: "English" },
    { id: 2, value: "Spanish" },
    { id: 3, value: "French" },
    { id: 4, value: "German" },
    { id: 5, value: "Italian" },
    { id: 6, value: "Ukrainian" },
  ],
  timeOptions: [
    { id: 1, value: "GMT+2 Eastern Europe Time (EET)" },
    { id: 2, value: "GMT+3 Moscow Time (MSK)" },
    { id: 3, value: "GMT+4 Casablanca Time (CET)" },
    { id: 4, value: "GMT+5 Kolkata Time (IST)" },
    { id: 5, value: "GMT+6 Bangkok Time (BTT)" },
    { id: 6, value: "GMT+7 Jakarta Time (WIB)" },
    { id: 7, value: "GMT+8 Beijing Time (CST)" },
  ],
};

export const SettingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setEmailData: (state, action: PayloadAction<EmailItem[]>) => {
      state.emailData = action.payload;
    },
    setAlertsData: (state, action: PayloadAction<AlertsItem[]>) => {
      state.alertsData = action.payload;
    },
    changeAlertsStatus: (state, action: PayloadAction<number>) => {
      state.alertsData = state.alertsData.map((item) =>
        item.id === action.payload ? { ...item, status: !item.status } : item
      );
    },
    changeEmailStatus: (state, action: PayloadAction<number>) => {
      state.emailData = state.emailData.map((item) =>
        item.id === action.payload ? { ...item, status: !item.status } : item
      );
    },
    setSelectedValue(state, action: PayloadAction<string>) {
      state.selectedValue = action.payload;
    },
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.selectOpen = action.payload;
    },
    setSelected: (state, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
  },
});

export const {
  setSelectedValue,
  setAlertsData,
  setEmailData,
  changeAlertsStatus,
  changeEmailStatus,
  setSelected,
  setOpen,
} = SettingsSlice.actions;

export default SettingsSlice.reducer;
