import PropTypes from 'prop-types';
import { TextStyle } from './Notification.styled';



export const Notification = ({message}) => {
    return (
        <TextStyle>
            <h3 className='text-style'>{message}</h3>
        </TextStyle>
    );
};



Notification.protoTypes = {
    message: PropTypes.string.isRequired,
};