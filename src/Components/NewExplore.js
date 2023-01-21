import Raeglin from '../imgs/raeglin.png'
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../actions/userActions';

const locations = [
    {name: 'Raeglin', image: Raeglin, activities: [
        {name: 'Orbing', req: 0},
        {name: 'Woodcutting', req: 0}
    ]},
    
    {name: 'Faeglin', image: Raeglin, activities: [
        {name: 'Begging', req: 0},
        {name: 'Smithing', req: 0}
    ]},
]

const ExploreLocation = ({location}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    return <div onClick={() => dispatch(setLocation(location))} style={{border: user.location.name === location.name ? '3px solid white' : '3px solid black', margin: 40, width: 200, height: 100, overflow: 'hidden', userSelect: 'none'}}>
        <div style={{position: 'absolute', color: 'white', margin: 10, fontSize: '1.15em'}}>{location.name}</div>
        <img src={location.image} alt="" style={{width: 200}}/>
    </div>
}

const NewExplore = () => {
    return <div>
        {locations.map((location, index) => {
            return <ExploreLocation location={location}/>
        })}
    </div>
}

export default NewExplore;