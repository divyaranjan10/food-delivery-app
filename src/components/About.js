import logo from '../../assets/app-logo.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='m-4'>
      <img className='logo w-96 m-auto' src={logo} alt='food-logo'/>
      <div className='w-6/12 mx-auto my-8'>
        <h2 className='text-2xl text-center'>Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</h2>
        <h3 className='text-center text-xl my-8'>Made with ❤️ by <Link to='https://www.linkedin.com/in/divyaranjan/'>Divyaranjan Pradhan - Linkedin</Link></h3>
      </div>
    </div>
  )
}

export default About;