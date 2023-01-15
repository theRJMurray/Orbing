import {useEffect, useState} from 'react'
import './explore.css'
import Gary from '../imgs/gary.png'
import Tree1 from '../imgs/tree1.png'
import Orb1 from '../imgs/orb1.png'
import { useSelector } from 'react-redux'

const itemz = [
	{ id: 1, name: 'Item 1', bg: 'null' },
	{ id: 2, name: 'Item 2', bg: 'null' },
	{ id: 3, name: 'Item 3', bg: 'null' },
	{ id: 4, name: 'Item 4', bg: 'null' },
	{ id: 5, name: 'Item 5', bg: 'null' },
	{ id: 6, name: 'Item 6', bg: 'null' },
	{ id: 7, name: 'Item 7', bg: 'null' },
	{ id: 8, name: 'Item 8', bg: 'null' },
	{ id: 9, name: 'Item 9', bg: 'null' },
	{ id: 10, name: 'Item 10', bg: 'null' },
	{ id: 11, name: 'Item 11', bg: 'null' },
	{ id: 12, name: 'Item 12', bg: 'null' },
	{ id: 13, name: 'Item 13', bg: 'null' },
	{ id: 14, name: 'Item 14', bg: 'null' },
	{ id: 15, name: 'Item 15', bg: 'null' },
	{ id: 16, name: 'Item 16', bg: 'null' },
	{ id: 17, name: 'Item 17', bg: 'null' },
	{ id: 18, name: 'Item 18', bg: 'null' },
	{ id: 19, name: 'Item 19', bg: 'null' },
	{ id: 20, name: 'Item 20', bg: 'null' },
	{ id: 21, name: 'Item 21', bg: 'null' },
	{ id: 22, name: 'Item 22', bg: 'null' },
	{ id: 23, name: 'Item 23', bg: 'null' },
	{ id: 24, name: 'Item 24', bg: 'null' },
	{ id: 25, name: 'Item 25', bg: 'null' },
	{ id: 26, name: 'Item 26', bg: 'null' },
	{ id: 27, name: 'Item 27', bg: 'null' },
	{ id: 28, name: 'Item 28', bg: 'green' },
	{ id: 29, name: 'Item 29', bg: 'white' },
	{ id: 30, name: 'Item 30', bg: 'green' },
	{ id: 31, name: 'Item 31', bg: 'white' },
	{ id: 32, name: 'Item 32', bg: 'green' },
	{ id: 33, name: 'Item 33', bg: 'white' },
	{ id: 34, name: 'Item 34', bg: 'green' },
	{ id: 35, name: 'Item 35', bg: 'white' },
	{ id: 36, name: 'Item 36', bg: 'green' },
	{ id: 37, name: 'Item 37', bg: 'white' },
	{ id: 38, name: 'Item 38', bg: 'green' },
	{ id: 39, name: 'Item 39', bg: 'white' },
	{ id: 40, name: 'Item 40', bg: 'green' },
	{ id: 41, name: 'Item 41', bg: 'white' },
	{ id: 42, name: 'Item 42', bg: 'green' },
	{ id: 43, name: 'Item 43', bg: 'white' },
	{ id: 44, name: 'Item 44', bg: 'green' },
	{ id: 45, name: 'Item 45', bg: 'white' },
	{ id: 46, name: 'Item 46', bg: 'green' },
	{ id: 47, name: 'Item 47', bg: 'white' },
	{ id: 48, name: 'Item 48', bg: 'green' },
	{ id: 49, name: 'Item 49', bg: 'white' },
	{ id: 50, name: 'Item 50', bg: 'green' },
	{ id: 51, name: 'Item 51', bg: 'white' },
	{ id: 52, name: 'Item 52', bg: 'green' },
	{ id: 53, name: 'Item 53', bg: 'white' },
	{ id: 54, name: 'Item 54', bg: 'green' },
	{ id: 55, name: 'Item 55', bg: 'white' },
	{ id: 56, name: 'Item 56', bg: 'green' },
	{ id: 57, name: 'Item 57', bg: 'white' },
	{ id: 58, name: 'Item 58', bg: 'green' },
	{ id: 59, name: 'Item 59', bg: 'white' },
	{ id: 60, name: 'Item 60', bg: 'green' },
	{ id: 61, name: 'Item 61', bg: 'white' },
	{ id: 62, name: 'Item 62', bg: 'green' },
	{ id: 63, name: 'Item 63', bg: 'white' },
	{ id: 64, name: 'Item 64', bg: 'green' },
	{ id: 65, name: 'Item 65', bg: 'white' },
	{ id: 66, name: 'Item 66', bg: 'green' },
	{ id: 67, name: 'Item 67', bg: 'white' },
	{ id: 68, name: 'Item 68', bg: 'green' },
	{ id: 69, name: 'Item 69', bg: 'white' },
	{ id: 70, name: 'Item 70', bg: 'green' },
	{ id: 71, name: 'Item 71', bg: 'white' },
	{ id: 72, name: 'Item 72', bg: 'green' },
	{ id: 73, name: 'Item 73', bg: 'white' },
	{ id: 74, name: 'Item 74', bg: 'green' },
	{ id: 75, name: 'Item 75', bg: 'white' },
	{ id: 76, name: 'Item 76', bg: 'green' },
	{ id: 77, name: 'Item 77', bg: 'white' },
	{ id: 78, name: 'Item 78', bg: 'green' },
	{ id: 79, name: 'Item 79', bg: 'white' },
	{ id: 80, name: 'Item 80', bg: 'green' },
	{ id: 81, name: 'Item 81', bg: 'white' },
	{ id: 82, name: 'Item 82', bg: 'green' },
	{ id: 83, name: 'Item 83', bg: 'white' },
	{ id: 84, name: 'Item 84', bg: 'green' },
	{ id: 85, name: 'Item 85', bg: 'white' },
	{ id: 86, name: 'Item 86', bg: 'green' },
	{ id: 87, name: 'Item 87', bg: 'white' },
	{ id: 88, name: 'Item 88', bg: 'green' },
	{ id: 89, name: 'Item 89', bg: 'white' },
	{ id: 90, name: 'Item 90', bg: 'green' },
	{ id: 91, name: 'Item 91', bg: 'white' },
	{ id: 92, name: 'Item 92', bg: 'green' },
	{ id: 93, name: 'Item 93', bg: 'white' },
	{ id: 94, name: 'Item 94', bg: 'green' },
	{ id: 95, name: 'Item 95', bg: 'white' },
	{ id: 96, name: 'Item 96', bg: 'green' },
	{ id: 97, name: 'Item 97', bg: 'white' },
	{ id: 98, name: 'Item 98', bg: 'green' },
	{ id: 99, name: 'Item 99', bg: 'white' },
	{ id: 100, name: 'Item 100', bg: 'green' },
	{ id: 101, name: 'Item 101', bg: 'white' },
	{ id: 102, name: 'Item 102', bg: 'green' },
	{ id: 103, name: 'Item 103', bg: 'white' },
	{ id: 104, name: 'Item 104', bg: 'green' },
	{ id: 105, name: 'Item 105', bg: 'white' },
	{ id: 106, name: 'Item 106', bg: 'green' },
	{ id: 107, name: 'Item 107', bg: 'white' },
	{ id: 108, name: 'Item 108', bg: 'green' },
	{ id: 109, name: 'Item 109', bg: 'white' },
	{ id: 110, name: 'Item 110', bg: 'green' },
	{ id: 111, name: 'Item 111', bg: 'white' },
	{ id: 112, name: 'Item 112', bg: 'green' },
	{ id: 113, name: 'Item 113', bg: 'white' },
	{ id: 114, name: 'Item 114', bg: 'green' },
	{ id: 115, name: 'Item 115', bg: 'white' },
	{ id: 116, name: 'Item 116', bg: 'green' },
	{ id: 117, name: 'Item 117', bg: 'white' },
	{ id: 118, name: 'Item 118', bg: 'green' },
	{ id: 119, name: 'Item 119', bg: 'white' },
	{ id: 120, name: 'Item 120', bg: 'green' },
	{ id: 121, name: 'Item 121', bg: 'white' },
	{ id: 122, name: 'Item 122', bg: 'green' },
	{ id: 123, name: 'Item 123', bg: 'white' },
	{ id: 124, name: 'Item 124', bg: 'green' },
	{ id: 125, name: 'Item 125', bg: 'white' },
	{ id: 126, name: 'Item 126', bg: 'green' },
	{ id: 127, name: 'Item 127', bg: 'white' },
	{ id: 128, name: 'Item 128', bg: 'green' },
	{ id: 129, name: 'Item 129', bg: 'white' },
	{ id: 130, name: 'Item 130', bg: 'green' },
	{ id: 131, name: 'Item 131', bg: 'white' },
	{ id: 132, name: 'Item 132', bg: 'green' },
	{ id: 133, name: 'Item 133', bg: 'white' },
	{ id: 134, name: 'Item 134', bg: 'green' },
	{ id: 135, name: 'Item 135', bg: 'white' },
	{ id: 136, name: 'Item 136', bg: 'green' },
	{ id: 137, name: 'Item 137', bg: 'white' },
	{ id: 138, name: 'Item 138', bg: 'green' },
	{ id: 139, name: 'Item 139', bg: 'white' },
	{ id: 140, name: 'Item 140', bg: 'green' },
	{ id: 141, name: 'Item 141', bg: 'white' },
	{ id: 142, name: 'Item 142', bg: 'green' },
	{ id: 143, name: 'Item 143', bg: 'white' },
	{ id: 144, name: 'Item 144', bg: 'green' },
	{ id: 145, name: 'Item 145', bg: 'white' },
	{ id: 146, name: 'Item 146', bg: 'green' },
	{ id: 147, name: 'Item 147', bg: 'white' },
	{ id: 148, name: 'Item 148', bg: 'green' },
	{ id: 149, name: 'Item 149', bg: 'white' },
	{ id: 150, name: 'Item 150', bg: 'green' },
	{ id: 151, name: 'Item 151', bg: 'white' },
	{ id: 152, name: 'Item 152', bg: 'green' },
	{ id: 153, name: 'Item 153', bg: 'white' },
	{ id: 154, name: 'Item 154', bg: 'green' },
	{ id: 155, name: 'Item 155', bg: 'white' },
	{ id: 156, name: 'Item 156', bg: 'green' },
	{ id: 157, name: 'Item 157', bg: 'white' },
	{ id: 158, name: 'Item 158', bg: 'green' },
	{ id: 159, name: 'Item 159', bg: 'white' },
	{ id: 160, name: 'Item 160', bg: 'green' },
	{ id: 161, name: 'Item 161', bg: 'white' },
	{ id: 162, name: 'Item 162', bg: 'green' },
	{ id: 163, name: 'Item 163', bg: 'white' },
	{ id: 164, name: 'Item 164', bg: 'green' },
	{ id: 165, name: 'Item 165', bg: 'white' },
	{ id: 166, name: 'Item 166', bg: 'green' },
	{ id: 167, name: 'Item 167', bg: 'white' },
	{ id: 168, name: 'Item 168', bg: 'green' },
	{ id: 169, name: 'Item 169', bg: 'white' },
	{ id: 170, name: 'Item 170', bg: 'green' },
	{ id: 171, name: 'Item 171', bg: 'white' },
	{ id: 172, name: 'Item 172', bg: 'green' },
	{ id: 173, name: 'Item 173', bg: 'white' },
	{ id: 174, name: 'Item 174', bg: 'green' },
	{ id: 175, name: 'Item 175', bg: 'white' },
	{ id: 176, name: 'Item 176', bg: 'green' },
	{ id: 177, name: 'Item 177', bg: 'white' },
	{ id: 178, name: 'Item 178', bg: 'green' },
	{ id: 179, name: 'Item 179', bg: 'white' },
	{ id: 180, name: 'Item 180', bg: 'green' },
	{ id: 181, name: 'Item 181', bg: 'white' },
	{ id: 182, name: 'Item 182', bg: 'green' },
	{ id: 183, name: 'Item 183', bg: 'white' },
	{ id: 184, name: 'Item 184', bg: 'green' },
	{ id: 185, name: 'Item 185', bg: 'white' },
	{ id: 186, name: 'Item 186', bg: 'green' },
	{ id: 187, name: 'Item 187', bg: '#331800', lvl_req: 2 },
	{ id: 188, name: 'Item 188', bg: 'green' },
	{ id: 189, name: 'Item 189', bg: 'white' },
	{ id: 190, name: 'Item 190', bg: 'green' },
	{ id: 191, name: 'Item 191', bg: 'white' },
	{ id: 192, name: 'Item 192', bg: 'null' },
	{ id: 193, name: 'Item 193', bg: 'null' },
	{ id: 194, name: 'Item 194', bg: 'null' },
	{ id: 195, name: 'Item 195', bg: 'null' },
	{ id: 196, name: 'Item 196', bg: 'null' },
	{ id: 197, name: 'Item 197', bg: 'null' },
	{ id: 198, name: 'Item 198', bg: '#3C8869', img: Tree1},
	{ id: 199, name: 'Item 199', bg: '#331800', current: true },
	{ id: 200, name: 'Item 200', bg: '#F6AE31', img: Orb1},
	{ id: 201, name: 'Item 201', bg: 'null' },
	{ id: 202, name: 'Item 202', bg: 'null' },
	{ id: 203, name: 'Item 203', bg: 'null' },
	{ id: 204, name: 'Item 204', bg: 'null' }
  ]

const Explore = () => {
	const user = useSelector(state => state.user)
	const [location, setLocation] = useState([199]);
	const [items, setItems] = useState(itemz);
	const [clickedId, setClickedId] = useState(null);

	useEffect(() => {
	  if (clickedId) {
		console.log(clickedId)
		setLocation([...location, clickedId])
		setItems(prevItems => {
		  const newItems = prevItems.map(item => {
			if (item.id === clickedId) {
			  return {...item, current: true};
			}

			if (item.id === location[location.length - 1]) {
				return {...item, current: false};
			}
			return item;
		  });
		  return newItems;
		});
		setClickedId(null)
	  }
	}, [clickedId, location, items, user.level]);

	return <div>
		<div className="grid" style={{margin: '40px auto', width: 400}}>
          {items.map(item => (
            <div key={item.id} className="grid-item" style={{background: item.bg}} onClick={() => setClickedId(item.id)}>
				{item.lvl_req && <div style={{fontSize: 10}}>{`lvl req ${item.lvl_req}`}</div>}
				{item.current && <img src={Gary} alt="" style={{height: 36, width: 36, margin: 1}} />}
				{item.img && <img src={item.img} alt="" style={{height: 36, width: 36, margin: 1}} />}
            </div>
          ))}
        </div>
	</div>
}

export default Explore;