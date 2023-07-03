var covidData = '';

async function getCovidData() {
    const url = 'https://api.rootnet.in/covid19-in/stats/latest';
    const response = await fetch(url);
    const data = await response.json();
    return data;

}

getCovidData().then(e => {
    covidData = e;
    console.log(covidData);

    var summaryData = document.querySelector("#summary");
    summaryData.innerHTML += summary(e.data.summary);

    var rowdis = document.querySelector("#dataDisplay");
    console.log(covidData);
    covidData.data.regional.filter(e => {
        console.log(e);
        if (e.loc == "Delhi" || e.loc == "Maharashtra" || e.loc == "Goa") {
            rowdis.innerHTML += display(e);
        }
    })

}).catch(error => {
    console.error(error);
});

function display(a) {
    //console.log(a);
    let display = `
            <div class="scard3">
                <div class="cardHeader">
                    <i><img src="./images/placeholder.png"><span id="locName">${a.loc}</span></i>
                </div>
                <div class="cardBody">
                        <div class="carBodyContent">
                            <i><img src="./images/infected.png"></i>
                            <div>
                                <h6>ConfirmedCasesIndian</h6>
                                <h6>${a.confirmedCasesIndian}</h6>
                            </div>
                        </div>
                        <div class="carBodyContent">
                            <i><img src="./images/bed.png"></i>
                            <div>
                                <h6>DisCharged Cases</h6>
                                <h6>${a.discharged}</h6>
                            </div>
                        </div>
                        <div class="carBodyContent" id="DeathContent">
                            <i><img src="./images/death.png"></i>
                            <div>
                                <h6>Deaths</h6>
                                <h6>${a.deaths}</h6>
                            </div>
                        </div>
                        <div class="carBodyContent">
                            <i><img src="./images/all.png"></i>
                            <div>
                                <h6>Confirmed Cases</h6>
                                <h6>${a.totalConfirmed}</h6>
                            </div>
                        </div>

                </div>
            </div>
    `;
    return display;

}

function summary(b) {
    let display = `
                <div class="card">
                <a class="card1" href="#">
                    <p class="small">Total</p>
                    <p class="small">${b.total}</p>
                    <div class="go-corner" href="#">
                        <div class="go-arrow">
                            →
                        </div>
                    </div>
                </a>
            </div>
            <div class="card">
                <a class="card1" href="#">
                    <p class="small">Confirm Cases India</p>
                    <p class="small">${b.confirmedCasesIndian}</p>
                    <div class="go-corner" href="#">
                        <div class="go-arrow">
                            →
                        </div>
                    </div>
                </a>
            </div>
            <div class="card">
                <a class="card1" href="#">
                    <p class="small">Deaths</p>
                    <p class="small">${b.deaths}</p>
                    <div class="go-corner" href="#">
                        <div class="go-arrow">
                            →
                        </div>
                    </div>
                </a>
            </div>
            <div class="card">
                <a class="card1" href="#">
                    <p class="small">DisCharged</p>
                    <p class="small">${b.discharged}</p>
                    <div class="go-corner" href="#">
                        <div class="go-arrow">
                            →
                        </div>
                    </div>
                </a>
            </div>   
    `
    return display;
}

function searchBystate() {
    var searchdata = document.getElementById("searchState").value;
    searchdata = searchdata.toLowerCase();
    var rowdis = document.querySelector("#dataDisplay");
    console.log(searchdata);
    console.log(covidData);

    covidData.data.regional.filter(e => {
        if (e.loc.toLowerCase() === searchdata) {
            rowdis.innerHTML = display(e);
        }
    })
}
