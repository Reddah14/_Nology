//import Chart from 'chart.js/auto';

var ctx1 = document.getElementById('myCitiesChart');
var ctx2 = document.getElementById('myPlayersChart');

/* data for challenge */

const cities = [
  {
      name: 'London',
      population: '10,979,000'
  },
  {
      name: 'Manchester',
      population: '2,727,000'
  },
  {
      name: 'Birmingham',
      population: '2,605,000'
  },
  {
      name: 'Leeds',
      population: '1,890,000'
  },
  {
      name: 'Glasgow',
      population: '1,259,000'
  }
];

var myCitiesChart = new Chart(ctx1, {
  type: 'bar',
  data: {
      labels: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow'],
      datasets: [
        {
          label: 'Population',
          data: [10979000, 2727000, 2605000, 1890000, 1259000],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              "green"
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 2
      }     
    ]
  },
  options: {
      scales: {
          y: {
            min: 0,
            max: 12000000
          }
      }
  }
});

var myPlayersChart = new Chart(ctx2, {
  type: 'bar',
  data: {
      labels: ["David De Gea",
        "Jadon Sancho",
        "Raphael Varane",
        "Paul Pogba",
        "Edinson Cavani",
        "Anthony Martial"],
      datasets: [
        {
          label: 'Player',
          data: [10979000, 2727000, 2605000, 1890000, 1259000],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              "green"
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 2
      }     
    ]
  },
  options: {
      scales: {
          y: {
            min: 0,
            max: 12000000
          }
      }
  }
});






var myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas); // Added ".body" after document in order to work

var myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true
});
myConfetti({
  particleCount: 100,
  spread: 160
  // any other options from the global
  // confetti function
});

confetti({
  particleCount: 100,
  startVelocity: 30,
  spread: 360,
  origin: {
    x: Math.random(),
    // since they fall down, start a bit higher than random
    y: Math.random() - 0.2
  }
});

// do this for 30 seconds
var duration = 5 * 1000;
var end = Date.now() + duration;

const frame = () => {
  // launch a few confetti from the left edge
  confetti({
    particleCount: 7,
    angle: 60,
    spread: 55,
    origin: { x: 0 }
  });
  // and launch a few from the right edge
  confetti({
    particleCount: 7,
    angle: 120,
    spread: 55,
    origin: { x: 1 }
  });

  // keep going until we are out of time
  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
};

document.querySelector("button").addEventListener("click", () => {
frame();
})

// Challenge 2

// You should begin designing a dashboard of your choice.
// The requirements are it should have three different charts, showing data in different ways.
// - e.g. Manchester United football players by goals, by age, by salary
// - e.g. UK cities by population, age, sunshine hours
// - e.g. something else?
// Use https://dribbble.com/search/dashboard for design inspiration


/* "David De Gea"	GK	30	 	£19,500,000	£375,000
"Jadon Sancho"	F	21	 	£18,200,000	£350,000
"Raphael Varane"	D	28	 	£17,680,000	£340,000
"Paul Pogba"	M	28	 	£15,080,000	£290,000
"Edinson Cavani"	F	34	 	£13,000,000	£250,000
"Anthony Martial"	F	25	 	£13,000,000	£250,000
Marcus Rashford	F	23	 	£10,400,000	£200,000
Harry Maguire	D	28	 	£9,875,000	£189,904
Bruno Fernandes	M	26	 	£9,360,000	£180,000
Juan Mata	M	33	 	£8,320,000	£160,000
Luke Shaw	D	26	 	£7,800,000	£150,000
Frederico de Paula Santos	M	28	 	£6,240,000	£120,000
Victor Lindelof	D	27	 	£6,240,000	£120,000
Nemanja Matic	M	33	 	£6,240,000	£120,000
Donny van de Beek	M	24	 	£6,240,000	£120,000
Dean Henderson	GK	24	 	£5,200,000	£100,000
Alex Telles	D	28	 	£4,840,000	£93,077
Aaron Wan-Bissaka	D	23	 	£4,680,000	£90,000
Eric Bailly	D	27	 	£4,160,000	£80,000
Mason Greenwood	F	19	 	£3,900,000	£75,000
Phil Jones	D	29	 	£3,900,000	£75,000
Jesse Lingard	M	28	 	£3,900,000	£75,000
Daniel James	M	23	 	£2,340,000	£45,000
Diogo Dalot	D	22	 	£1,300,000	£25,000
Scott McTominay	M	24	 	£1,040,000	£20,000
Teden Mengi	D	19	 	£31,200	£600
Tom Heaton	GK	35	 	-	-   */