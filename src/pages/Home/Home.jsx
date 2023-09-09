import { HomeStyledContainer } from "./Home.styled";


  
const Home = () => {
    return (
        <HomeStyledContainer>
            <h1 className='home-title'>
                Task manager welcome page{' '}
                <span role="img" aria-label="Greeting icon">
                💁‍♀️
                </span>
            </h1>
        </HomeStyledContainer>
    );
};


export default Home;