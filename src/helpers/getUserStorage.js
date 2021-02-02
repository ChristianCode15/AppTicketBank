

export const getUserStorage = () => {
    return{
        username: localStorage.getItem('username'),
        desk: localStorage.getItem('desk'),        
    }
}
