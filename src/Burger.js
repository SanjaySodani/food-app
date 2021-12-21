import {useContext} from 'react';
import { FoodContext } from './App';
import Item from './Item';

function Burger() {
    const context = useContext(FoodContext);
    let data = context.data[1];
    if(!data) return null;
    return (
        <div className='container mt-3'>
            <h4 className='font-weight-normal'>Burger</h4>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 mt-2'>
                {data.subItemsData.subItems.map((item, index)=>{
                    return <Item key={index} details={item} />
                })}
            </div>
        </div>
    )
}

export default Burger;