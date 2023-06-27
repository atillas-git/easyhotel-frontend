import BookIcon from "@mui/icons-material/Book";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import FaxIcon from "@mui/icons-material/Fax";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
const sidebar = [
  {
    key: "sidebar-frontDesk",
    label: "Front Desk",
    icon: <BookIcon />,
    type: "dropdown",
    subItems: [
      {
        key: "sidebar-reservation",
        label: "Reservation",
        icon: <BookOnlineIcon />,
        route: "/reservation",
        type: "item",
      },
    ],
  },
  {
    key: "sidebar-dashBoard",
    label: "Dashboard",
    icon: <DashboardIcon />,
    route: "/dashboard",
    type: "item",
  },
  {
    key: "sidebar-crm",
    label: "CRM",
    icon: <SupportAgentIcon />,
  },
  {
    key: "sidebar-bookingEngine",
    label: "Booking Engine",
    icon: <MenuBookIcon />,
    route: "/bookingEngine",
    type: "item",
  },
  {
    key: "sidebar-houseKeeping",
    label: "House Keeping",
    icon: <DryCleaningIcon />,
    route: "/houseKeeping",
    type: "item",
  },
  {
    key: "sidebar-hrManagement",
    label: "HR Management",
    icon: <FaxIcon />,
    route: "/hrManagement",
    type: "item",
  },
  {
    key: "sidebar-roomManagement",
    label: "Room Management",
    icon: <MeetingRoomIcon />,
    type: "dropdown",
    subItems: [
      {
        key: "sidebar-roomRack",
        label: "Room Rack",
        icon: <BookOnlineIcon />,
        route: "/roomRack",
        type: "item",
      },
    ],
  },
  {
    key: "sidebar-reporting",
    label: "Reporting",
    icon: <AssessmentIcon />,
  },
];
export default sidebar;
