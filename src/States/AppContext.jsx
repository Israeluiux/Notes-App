import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [liked, setLiked] = useState(false)

    return(
        <AppContext.Provider value={{liked, setLiked}}>
            { children }
        </AppContext.Provider>
    )
}
