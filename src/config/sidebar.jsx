import BookIcon from "@mui/icons-material/Book";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import FaxIcon from "@mui/icons-material/Fax";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import DataArrayIcon from "@mui/icons-material/DataArray";
import PolicyIcon from "@mui/icons-material/Policy";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import NightShelterIcon from "@mui/icons-material/NightShelter";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const sidebar = [
  {
    key: "sidebar-dashBoard",
    label: "Dashboard",
    icon: <DashboardIcon />,
    route: "/",
    type: "item",
  },
  {
    key: "sidebar-frontDesk",
    label: "Front Desk",
    icon: <BookIcon />,
    type: "dropdown",
    subItems: [
      {
        key: "sidebar-roomRack",
        label: "Room Rack",
        icon: <DataArrayIcon />,
        route: "/roomRack",
        type: "item",
      },
      {
        key: "sidebar-roomStatus",
        label: "Room Status",
        icon: <TroubleshootIcon />,
        route: "/roomStatus",
        type: "item",
      },
      {
        key: "sidebar-checkIn",
        label: "CheckIN",
        icon: <CheckBoxIcon />,
        route: "/checkIn",
        type: "item",
      },
      {
        key: "sidebar-checkOut",
        label: "CheckOut",
        icon: <ArrowOutwardIcon/>,
        route: "/checkout",
        type: "item",
      },
      {
        key: "sidebar-inHouse",
        label: "In House",
        icon: <NightShelterIcon />,
        type: "item",
      },
    ],
  },
  {
    key: "sidebar-reservation",
    label: "Reservation",
    icon: <BookOnlineIcon />,
    route: "/reservation",
    type: "item",
  },
  {
    key: "sidebar-crm",
    label: "CRM",
    route: "/crm",
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
    route: "/hr",
    type: "item",
  },
  {
    key: "sidebar-reporting",
    label: "Reporting",
    icon: <AssessmentIcon />,
  },
  {
    key: "sidebar-policy",
    label: "Policy Management",
    icon: <PolicyIcon />,
  },
];
export default sidebar;
