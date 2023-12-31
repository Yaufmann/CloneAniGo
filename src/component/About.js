import React from 'react';
import classes from './About.module.css'
const About = () => {
    return (
        <div className={classes.container}>
            <h2>Наши преимущества</h2>
            <div className={classes.title}>Мы подготовили для Вас следующие бонусы:</div>
            <ul>
                <li>Огромный выбор <span>аниме мультики онлайн</span>. У нас загружены все популярные и качественные аниме прошлых лет, и наша коллекция регулярно пополняется самыми последними новинками. В каталоге есть как <span>полнометражные</span>, так и <span>аниме сериалы</span>, а жанровое разнообразие во многом превосходит другие аналогичные порталы. У нас Вы сможете посмотреть красивые произведения о любви и дружбе, вере и предательстве, доброте и корысти, и многое другое.</li>
                <li>Превосходное качество. Все файлы предоставляются в HD-формате, что позволяет смотреть аниме онлайн в хорошем качестве не только на персональном компьютере, но и на телевизоре. Благодаря грамотному использованию IT-технологий мы гарантируем Вам комфортный бесперебойный просмотр любого аниме, максимально имитирующий поход в настоящий кинотеатр. При этом Вы сможете в любой момент поставить на паузу или перемотать его до нужного момента.</li>
                <li>Удобная навигация. Сайт AnimeGO – это не просто хранилище аниме онлайн, а структурированная фильмотека, в которой очень легко ориентироваться. Все файлы отсортированы по жанру, длительности, компании-создателю и другим параметрам. Вы всегда сможете в считанные минуты найти именно ту ленту, которую ищете.</li>
                <li>Минимум рекламы. Как и большинство других сайтов, мы пользуемся рекламой, но в то же время мы позаботились о том, чтобы рекламные объявления не мешали вашему просмотру. Ненавязчивая и дозированная реклама – это одно из преимуществ портала AnimeGO, которое уже оценили тысячи зрителей.</li>
            </ul>
            <div className={classes.thirdTitle}>А ещё мы рады предложить Вам приятный дизайн сайта, быструю работу всех разделов и удобный доступ с различных устройств. Смотреть аниме онлайн теперь стало ещё приятнее и комфортнее!</div>
            <h2>На AnimeGO – только бесплатные аниме без регистрации</h2>
            <div className={classes.thirdTitle}>Самый главный плюс нашего портала – это возможность смотреть все аниме абсолютно бесплатно. Мы считаем, что искусство японской мультипликации должно быть доступно каждому, тем более что большинство наших зрителей – представители молодёжи. Плата не взимается ни на каком этапе пользования сайтом, что делает наш проект по-настоящему удобным для каждого.</div>
            <div className={classes.secondTitle}>Кроме того, пользование сайтом AnimeGO не требует регистрации. Пользователи могут <span>смотреть аниме онлайн бесплатно</span> сразу же после захода на сайт.</div>
            <div className={classes.secondTitle}>Если Вы любите японскую мультипликацию, заходите на AnimeGO. Мы обещаем Вам настоящее удовольствие от просмотра лучших аниме!</div>
        </div>
    );
};

export default About;