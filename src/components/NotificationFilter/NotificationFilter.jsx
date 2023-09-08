import PropTypes from 'prop-types';
import {TextFilterStyle } from './NotificationFilter.styled'



export const NotificationFilter = ({notification}) => {
    return(
        <TextFilterStyle>
            <h3 className='text-style'>{notification}</h3>
        </TextFilterStyle>
    );
};



NotificationFilter.protoTypes = {
    message: PropTypes.string.isRequired,
};