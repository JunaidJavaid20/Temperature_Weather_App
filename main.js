function CalculateWeather(event){

    {
        event.preventDefault()
    }

    let temp = document.querySelector('#temperature').value

    if (temp>45){

        title = "Its Extremely Hot"

        explanation = "Dont go outside"

    } else if (temp>=40) {

        title = "Its Too Hot"

        explanation = "Take a water bottle and a cap"

    } else if (temp>=35) {

        title = "Its Hot"

        explanation = "Take a cap"

    } else if (temp>=30) {

        title = "Its Normal"

        explanation = "You can go outside"

    } else if (temp>=25) {

        title = "Its Good"

        explanation = "You can enjoy this weather"

    } else if (temp>=15) {

        title = "Its Cold"

        explanation = "Take a jacket"

    } else if (temp>=5) {

        title = "Its Too Cold"

        explanation = "Go outside when its necessary"

    } else {

        title = "Its Extremely Cold"

        explanation = "Dont go outside because it can kill you"

    }

    document.querySelector('#title').innerHTML = title
    document.querySelector('#explanation').innerHTML = explanation

}