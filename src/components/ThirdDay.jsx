import React from 'react'
import gif31 from "../img/3-1.gif"
import gif32 from "../img/3-2.gif"
import gif33 from "../img/3-3.gif"
import gif34 from "../img/3-4.gif"
import gif35 from "../img/3-5.gif"
import gif36 from "../img/3-6.gif"

const ThirdDay = () => {
    return (
        <div className='wrapper'>
            <div className='day-tittle'>Третій день</div>
            <div>Стегна та сідниці (ізолюючі), прес</div>
            <div className='day-subtitle'>
                Розминка 2хв + скакалка 10хв
            </div>
            <div>
                <div className='exercise'>
                    <div>Махи ногою вгору 3х10,
                    <br /> 10 на кожну ногу
                    </div>
                    <img src={gif31} alt="img" />
                </div>
                <div className='exercise'>
                    <div>Відведення ноги убік 3х10,
                    <br /> 10 на кожну ногу
                    </div>
                    <img src={gif32} alt="img" />
                </div>
                <div className='exercise'>
                    <div>Кроки убік у напівприсіді 3х15</div>
                    <img src={gif33} alt="img" />
                </div>
                <div className='exercise'>
                    <div>Сідничний місток 3х10</div>
                    <img src={gif34} alt="img" />
                </div>
                <div className='exercise'>
                    <div>Підйом на стілець 3х12</div>
                    <img src={gif35} alt="img" />
                </div>
                <div className='exercise'>
                    <div>Вправа «книжка» 3х12</div>
                    <img src={gif36} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default ThirdDay