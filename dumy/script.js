function GetInfo(city) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=1db0432893cd598b88ba646e9719415b')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }

    para.innerHTML="jaydeep";