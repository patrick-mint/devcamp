axios.get(`https://corona.lmao.ninja/v2/countries`).then(function (response) {

    let allCovidData = response.data
    // console.log(allCovidData[0].todayRecovered);
    const callbackFunction = (sum, obj) => {
        return sum + obj.todayRecovered;
    }
    const sum_All_Country = allCovidData.reduce(callbackFunction, 0)
    console.log(sum_All_Country);

    const today_Each_Country_Deaths = allCovidData.filter(obj => obj.todayDeaths < 10 && obj.population > 100000000).map(obj => obj.country);

    console.log(today_Each_Country_Deaths);
    






});