import React from 'react'
import gif21 from "../img/2-1.gif"
import gif22 from "../img/2-2.gif"
import gif23 from "../img/2-3.gif"
import gif24 from "../img/2-4.gif"
import gif25 from "../img/2-5.gif"
import gif26 from "../img/2-6.gif"

const SecondDay = () => {
    return (
        <div className='wrapper'>
            <div className='day-tittle'>Другий день</div>
            <div>Верх тіла, комплексні вправи</div>
            <div className='day-subtitle'>
                Розминка 2хв + скакалка 10хв
            </div>
            <div>
                <div className='exercise'>
                    <div>Випрямлення руки і ноги 3х8,
                        <br /> 8 на кожну ногу/руку
                    </div>
                    <img src={gif21} alt="img" />
                </div>
                <div className='exercise'>
                    <div>Віджимання з колін 3х10</div>
                    <img src={gif22} alt="img" />
                </div>
                <div className='exercise'>
                    <div>Пловець лежачи на животі,
                        <br /> 2 підходи по 40 секунд
                    </div>
                    <img src={gif23} alt="img" />
                </div>
                <div className='exercise'>
                    <div>Черв'як 3х8</div>
                    <img src={gif24} alt="img" />
                </div>
                <div className='exercise'>
                    <div>Скелелаз 3х10,
                        <br /> 10 на кожну ногу
                    </div>
                    <img src={gif25} alt="img" />
                </div>
                <div className='exercise'>
                    <div>Джампінг Джек,
                        <br /> 3х40 секунд
                    </div>
                    <img src={gif26} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default SecondDay