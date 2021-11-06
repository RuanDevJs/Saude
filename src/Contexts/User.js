import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }){
    const [authenticated, setAuthenticaded] = useState(false);

    return(
        <UserContext.Provider value={authenticated}>
            {children}
        </UserContext.Provider>
    )
}
