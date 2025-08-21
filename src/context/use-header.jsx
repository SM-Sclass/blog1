import { createContext, useState } from "react";

const HeaderContext = createContext()

export function HeaderContextProvider({ children }) {
    const [profileData, setProfileData] = useState(null)

    return (
        <HeaderContext.Provider value={
            {
                profileData
            }
        }>
            {children}
        </HeaderContext.Provider>
    )
}


export default HeaderContext