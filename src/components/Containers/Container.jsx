import PropTypes from 'prop-types';
import { ContainersStyle } from './Container.styled';



export const Containers = ({title, children}) => {
    return(
        <ContainersStyle>
            <h2 className='title'>{title}</h2>
            {children}
        </ContainersStyle>
    );
};



Containers.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};