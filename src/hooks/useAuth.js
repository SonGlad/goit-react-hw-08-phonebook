import { useSelector } from 'react-redux';
import { 
    selectUser, 
    selectLoggedUser, 
    selectLoading, 
    selectRefreshing, 
} from 'redux/Auth/auth-selectors';



export const useAuth = () => {
    const isLoading = useSelector(selectLoading);
    const isLoggedIn = useSelector(selectLoggedUser);
    const user = useSelector(selectUser);
    const isRefreshing = useSelector(selectRefreshing);

    return {
        isLoading,
        isLoggedIn,
        user,
        isRefreshing,
    };
};