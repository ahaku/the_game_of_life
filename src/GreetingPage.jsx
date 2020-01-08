import React from 'react'
import Link from '@material-ui/core/Link';
import Reference from './components/ButtonRow/Reference/Reference'

const daytimeStyles = {
    'Day': {
        backgroundColor: 'lightgreen',
        color: 'white'
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
        backgroundColor: '#212121',
        color: 'white'
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

    return (
        <div className='GreetingPageWrapper' style={style}>
            <Link href="/mainpage">Играть</Link>
            <h1>Greeting page</h1>
        </div>
        
    )
}

export default GrretingPage