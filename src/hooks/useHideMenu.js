import { useContext, useEffect } from 'react'
import { UIContext } from '../context/UIContext';

export const useHideMenu = (ocultar) => {
    
    const {showMenu, hiddenMenu} = useContext(UIContext);

    useEffect(() => {
        if( ocultar ){
        hiddenMenu()
        } else{
            showMenu()
        }
    },[ocultar, hiddenMenu, showMenu])
}
