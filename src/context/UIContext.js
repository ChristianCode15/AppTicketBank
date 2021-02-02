import React, {createContext, useState} from 'react'

export const UIContext = createContext();

export const UIProvider = ({ children }) => {

    const [ocultarMenu, setOcultarrMenu] = useState(false);

    const showMenu = () => {
        setOcultarrMenu(false);
    } 

    const hiddenMenu = () => {
        setOcultarrMenu(true);
    } 

    return (
        <UIContext.Provider value={{
            ocultarMenu,
            showMenu,
            hiddenMenu
        }}>
            {children}
        </UIContext.Provider>
    )
}
