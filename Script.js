
function showMatches (match,selector) {

      selector.innerHTML += `
      
      <div class="match">
    <div class="match-info">
    <h4 class="group">${match.competition}</h4>
    <h4 class ="season">${match.season}</h4>
    </div>
      
       <div class="flags">
            <div class="home-flag">
                <img src="${match.homeFlag}" alt="${match.homeTeam}" class="flag" />
                <h3 class="home-team">${match.homeTeam}</h3>
                <h2 class="home-result">${match.resultHomeTeam}</h2>
                </div>

    <span class="vs">
    VS
    </span>

      <div class="away-flag">
            <img src="${match.awayFlag}" alt="${match.awayTeam}" class="flag" />
      <h3 class="home-team">${match.awayTeam}</h3>
      <h2 class="home-result">${match.resultAwayTeam}</h2>
      </div>
    </div>
  
    <div class="time-area">
    <div class="time">
      <h4 class="month">${match.month}</h4>
      <h4 class="day">${match.day}</h4>
      <h4 class="date">${match.date}</h4>
    
    </div>
    <h4 class="match-time">${match.localTime}</h4>
    </div>
    
    </div>
      ` 


    }



  const allMatches = [];
  const matchByDate = document.querySelector('#match-date');


  async function fetchMatches () {


  let info = await fetch('./sportData.json'); 
  let response = await info.json();


  for(let i = 0; i < response.data.length; i++) {
    let time = new Date(response.data[i]['dateVenue']);
    let localTime = time.toLocaleTimeString().replace(':00:00', ':00');
    let dayMonth = time.toString().split(' ');
    let date = dayMonth[2];
    let homeTeam = response.data[i]['homeTeam']?.name;
    let homeFlag = response.data[i]['flag'][0];
    let awayTeam = response.data[i]['awayTeam'].name;
    let awayFlag = response.data[i]['flag'][1];
    let stadium = response.data[i]['stadium'];
    let season = response.data[i]['season'];
    let status = response.data[i]['status'];
    let resultHomeTeam = response.data[i]['result'].homeGoals;
    let resultAwayTeam = response.data[i]['result'].awayGoals;
    let stage = response.data[i]['stage'.id]
    let competition = response.data[i]['originCompetitionName']


    let Match = {
      localTime,
      day: dayMonth[0],
      month: dayMonth[1],
      homeTeam,
      homeFlag,
      awayTeam,
      awayFlag, 
      stadium,
      season,
      status,
      resultHomeTeam,
      resultAwayTeam,
      stage,
      competition,
      date,
    };

    allMatches.push(Match);
    showMatches(Match, matchByDate);
    
  }

}

  
  fetchMatches()


  const getEvents  = () => {
  const events = [];

    for(let i = 0; i<response.data.length; i++) {
      let start = response.data[i]['dateVenue'];
      let title = response.data[i]['homeTeam']?.name + ' vs ' + response.data[i]['homeTeam']?.name;
      events.push({start,title})

      console.log(events)
    }
      return events;
  }

  let matchsDiv = document.querySelector('.matchs')
  let containerDiv = document.querySelector('.container');


  const addNewEvent = document.querySelector('.cta');

  addNewEvent.addEventListener('click', () => {
  const newMatch = {
      localTime: '1:00 AM',
      day: 'Wed',
      month: 'Dec',
      homeTeam: 'Mancester United',
      homeFlag: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png",
      resultHomeTeam:5,
      awayTeam: 'Arsenal',
      awayFlag:"https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png",
      resultAwayTeam:0,
      season:'2023',
      competition:'Champions League',
      date:'20'
    }

    showMatches(newMatch, matchByDate)

})


