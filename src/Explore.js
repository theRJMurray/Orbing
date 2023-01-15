import Bank from './Bank.js'
import Orbing from './Orbing'

const Explore = ({page}) => {
    const displayContent = () => {
		switch (page){
			case 'Bank':
				return <Bank />
			case 'Orbing':
				return <Orbing />
			default:
				return <Bank />
		}

	}

    return <div style={{width: '100%', height: '100%', background: '#2F4858'}}>
        {displayContent()}
    </div>
}

export default Explore