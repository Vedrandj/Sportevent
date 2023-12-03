const events = [];

const getEvents  =  async () => {
    let info = await fetch('./sportData.json');
    let response = await info.json();

      for(let i = 0; i<response.data.length; i++) {
      let start = response.data[i]['dateVenue'];
      let title = response.data[i]['homeTeam']?.name + ' vs ' + response.data[i]['awayTeam']?.name;
      
      events.push({start,title})

    }
      return events;
  }



  const initCalendar = (events) => {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2023-12-01',
    events
  });
  calendar.render();
};

  const addNewMatch =  async () => {
  const team1 = document.querySelector('#team1');
  const team2 = document.querySelector('#team2');
  const date = document.querySelector('#date');
  const buttonMatch = document.querySelector('.match-button');

 

    buttonMatch.addEventListener('click', () => {
    const newEvent = {
    title:`${team1.value} vs ${team2.value}`,
    start: `${date.value}`,
  };
    events.push(newEvent);
    initCalendar(events);

  })
}

  addNewMatch()

  const renderCalendar = async () => {
  const events = await getEvents();
  initCalendar(events);


  }


  document.addEventListener('DOMContentLoaded', renderCalendar,addNewMatch);

