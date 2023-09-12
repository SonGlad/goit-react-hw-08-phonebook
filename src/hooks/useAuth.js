import { useSelector } from 'react-redux';
import { 
    selectUser, 
    selectLoggedUser, 
    selectLoading, 
    selectRefreshing,
    // initialRoute,
    // selectRefreshed, 
} from 'redux/Auth/auth-selectors';



export const useAuth = () => {
    const isLoadingAuth = useSelector(selectLoading);
    const isLoggedIn = useSelector(selectLoggedUser);
    const user = useSelector(selectUser);
    const isRefreshing = useSelector(selectRefreshing);
    // const isCurrentRoute = useSelector(initialRoute);
    // const isRefreshed = useSelector(selectRefreshed);

    return {
        isLoadingAuth,
        isLoggedIn,
        user,
        isRefreshing,
        // isCurrentRoute,
        // isRefreshed,
    };
};