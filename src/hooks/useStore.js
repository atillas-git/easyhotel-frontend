import { create } from 'zustand'

export const useStore = create((set) => ({
  user: localStorage.getItem("easyhotel_user") ? JSON.parse(localStorage.getItem("easyhotel_user")) : null,
  isAuthorized:false,
  theme : localStorage.getItem("easyhotel_theme") ? localStorage.getItem("easyhotel_theme") : "default",
  loginClient: (newUser) => set((state)=>{
    localStorage.setItem("easyhotel_user",JSON.stringify(newUser))
    return {
        ...state,
        isAuthorized:true,
        user:newUser
    }
  }),
  logoutClient: () => set((state)=>{
    localStorage.removeItem("easyhotel_user")
    return {
        ...state,
        isAuthorized:false,
        user:null
    }
  }),
  authorize:()=>set((state)=>({
    ...state,
    isAuthorized:true
  })),
  unAuthorize:()=>set((state)=>({
    ...state,
    isAuthorized:false
  })),
  setTheme:(newTheme)=>set((state)=>{
    if(typeof newTheme !== "string"){
        return state;
    }
    localStorage.setItem("easyhotel_theme",newTheme)
    return{
        ...state,
        theme:newTheme
    }
  })
}))

export default useStore;