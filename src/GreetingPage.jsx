import React from 'react'
import Link from '@material-ui/core/Link';
import Reference from './components/ButtonRow/Reference/Reference'

const daytimeStyles = {
    'Day': {
        backgroundColor: 'lightgreen',
        color: 'white',
        
    },
    'Evening': {
        backgroundColor: 'lightblue',
        color: 'black'
    },
    'Morning': {
        backgroundColor: 'lightgray',
        color: 'black'
    },
    'Night': {
        // backgroundColor: '#212121',
        color: 'white',
        background: 'url("https://yastatic.net/s3/liza/_themes/f01586627260f7a5a99ac216ecdf799c-bg.gif")'
    }
}

function GrretingPage() {
    const [style, setStyle] = React.useState(daytimeStyles[timeOfTheDay()])

    function timeOfTheDay() {
        const hours = new Date().getHours();
        if (hours >= 0 && hours < 5) {
            return 'Night';
        } else if (hours >= 5 && hours < 12) {
            return 'Morning';
        } else if (hours >=12 && hours < 17) {
            return 'Day';
        } else {
            return 'Evening';
        }
    }

    const greetingText = (timeOfDay) => {
        if (timeOfDay === 'Night') {
            return 'Доброй ночи, дорогой друг!';
        } else if (timeOfDay === 'Morning') {
            return 'Доброt утро, дорогой друг!'
        } else if (timeOfDay === 'Evening') {
            return 'Добрый вечер, дорогой друг!'
        } else {
            return 'Добрый день, дорогой друг!'
        }
    }

    return (
        <div className='GreetingPageWrapper' style={style}>
            <h1>"Игра Жизни"</h1>
            <h2>{greetingText(timeOfTheDay())}</h2>
            <Link href="/mainpage">Играть</Link>
        </div>
        
    )
}

export default GrretingPage