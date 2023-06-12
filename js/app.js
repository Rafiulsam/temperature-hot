const API_key = `46ad7457603b9b0104e633e78cd60e16`

const loadTemperature = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    const res = await fetch(url);
    const data = await res.json()
    displayTemperature(data);
}


const displayTemperature = data => {
    console.log(data)
    const { temp } = data.main
    const { name, weather } = data
    const [element1] = weather
    const { main } = element1
    console.log(temp, main);
    // document.getElementById('temperature').innerText = temp
    // document.getElementById('city-name').innerText = name
    // document.getElementById('condition').innerText = main

    setInnerTextById('temperature', temp)
    setInnerTextById('city-name', name)
    setInnerTextById('condition', main)

}

const setInnerTextById = (id, text) => {
    document.getElementById(id).innerText = text
}

const makeSearch = () => {
    const inputValue = document.getElementById('input').value
    loadTemperature(inputValue)
}

document.getElementById('btn-search').addEventListener('click', makeSearch)
document.getElementById('input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        makeSearch()
    }
})