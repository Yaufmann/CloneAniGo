import React, {useState} from 'react';
import '../App.css'
import Card from "../component/Card/Card";
import {arrayImage} from "../utils/ArrayImage";
import Accordion from "../component/UI/Accordion";
import ListTitle from "../component/TitleComponents/ListTitle";
import SecondTitle from "../component/SecondTitleComponents/SecondTitle";




const HomePage = () => {
    const [card,setCard] = useState(arrayImage);
    return (
        <div className="container-page">
         <div className="background-gray">
            <div className="container-text">
                <div>Онгоинг</div>
                <div>2023 год</div>
                <div>2022 год</div>
            </div>
         </div>
         <div className="background-white">
           <div className="container-nexttext">
             <div>AnimeGO — смотреть аниме онлайн бесплатно</div>
             <div>
                 Вот уже много лет японская анимация пользуется огромным успехом по всему миру, включая Россию.
                 Эти ленты любят за яркий сюжет, оригинальную рисовку и неизменный накал эмоций.
             </div>
             <div>AnimeGO — <span>смотреть аниме онлайн бесплатно</span>.
                 Многие поклонники любят смотреть аниме онлайн, однако для этого часто приходится пользоваться несколькими источниками, поскольку ни один из них нельзя назвать универсальным.
                 Но у нас есть отличная новость для любителей аниме! Мы запустили новый проект AnimeGO, посвящённый онлайн-просмотру аниме.
                 Теперь Вам не придётся бороздить просторы интернета в поисках любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале.
                 Мы сами очень любим этот жанр и поэтому постарались сделать наш сайт как можно более удобным и захватывающим.
             </div>
           </div>
         </div>
         <div className="background-gray">
             <div className="slider-container">
                 <p><span>Аниме осеннего сезона</span></p>
                 <div className="card-container">
                 {card.map(obj =>
                     <Card key={obj.id} obj={obj}/>
                 )}
                 </div>
             </div>
         </div>
         <div className="background-white">
             <div className="accordion-container">
                <Accordion text='Обновления аниме'/>
                <Accordion text='Расписание аниме'/>
                <ListTitle />
             </div>
         </div>
         <div className="background-white">
            <div className="containerLibrori">
                <SecondTitle/>
            </div>
         </div>
        </div>
    );
};

export default HomePage;