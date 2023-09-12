import { useSelector } from 'react-redux';
import { 
    selectUser, 
    selectLoggedUser, 
    selectLoading, 
    selectRefreshing,
    initialRoute,
    selectRefreshed, 
} from 'redux/Auth/auth-selectors';



export const useAuth = () => {
    const isLoading = useSelector(selectLoading);
    const isLoggedIn = useSelector(selectLoggedUser);
    const user = useSelector(selectUser);
    const isRefreshing = useSelector(selectRefreshing);
    const isCurrentRoute = useSelector(initialRoute);
    const isRefreshed = useSelector(selectRefreshed);

    return {
        isLoading,
        isLoggedIn,
        user,
        isRefreshing,
        isCurrentRoute,
        isRefreshed,
    };
};