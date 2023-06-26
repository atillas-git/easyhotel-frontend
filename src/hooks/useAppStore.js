import { StoreContext } from "@/store/AppStore";
import { useContext } from "react";
export const useAppStore = () => {
  const { user, dispatch } = useContext(StoreContext);
  return { user, dispatch };
};
