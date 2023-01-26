import React from 'react'
import gif11 from "../img/1-1.gif"
import gif12 from "../img/1-2.gif"
import gif13 from "../img/1-3.gif"
import gif14 from "../img/1-4.gif"
import gif15 from "../img/1-5.gif"
import gif16 from "../img/1-6.gif"

const Firstday = () => {
    return (
        <div className='wrapper'>
            <div className='day-tittle'>Перший день</div>
            <div>Ноги(база), прес</div>
            <div className='day-subtitle'>
                Розминка 2хв + скакалка 10хв
            </div>
            <div>
                <div className='exercise'>
                    <div>Присідання з поворотом корпусу 3x8,
                        <br /> 8 на кожну ногу
                    </div>
                    <img src={gif11} alt="img" />
                </div>
                <div className='exercise'>
                    <div>Випади назад з підйомом стегна 3x8,
                        <br /> 8 на кожну ногу
                    </div>
                    <img src={gif12} alt="img" />
                </div>
                <div className='exercise'>
                    <div>Кроки у бік із присіданням, 
                    <br /> 3х10 присідань
                    </div>
                    <img src={gif13} alt="img" />
                </div>
                <div className='exercise'>
                    <div>Сідничний місток,
                    <br /> 3х10 підйомів
                    </div>
                    <img src={gif14} alt="img" />
                </div>
                <div className='exercise'>
                    <div>Вправа «книжка»
                    <br /> 3х10 
                    </div>
                    <img src={gif15} alt="img" />
                </div>
                <div className='exercise'>
                    <div>Вправа «велосипед» 3х8,
                    <br /> 8 на кожну ногу
                    </div>
                    <img src={gif16} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Firstday