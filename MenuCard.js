import React from 'react'

const MenuCard = ({ menuData }) => {
    //console.log(menuData);
    return (
        <>
            <section className='main-card--cointainer'>
                {menuData.map((currElem) => {
                    return (<div>
                        <div className='card-container' key={currElem.id}>
                            <div className='card'>
                                <div className='card-body'>
                                    <span className='card-number card-circle subtle'>{currElem.id}</span>
                                    <span className='card-author subtle'>{currElem.name}</span>
                                    <h2 className='card-title'>{currElem.name}</h2>
                                    <span className='card-description-detail'>{currElem.description}
                                    </span>
                                    <div className='card-read'>Read</div>
                                    <img src={currElem.image} alt='images' className='card-media'/>
                                    <span className='card-tag subtle'>Order Now</span>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
            </section>
        </>
    )
}
export default MenuCard