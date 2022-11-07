function createGame(player1, hour, player2){
  return `
    <li>
      <img src="assets/icon-${player1}.svg" alt="">
      <strong>${hour}</strong>
      <img src="assets/icon-${player2}.svg" alt="">
    </li>
`
}
let delay = -0.4;
function createCard(day_month, day_week, games){
  delay = delay = 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s;">
    <h2>${day_month}<span>${day_week}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
`
}
document.querySelector("#cards").innerHTML = 
    createCard(
      "24/11", "quinta",
      createGame("switzerland", "07:00", "camaroes") +
      createGame("uruguay", "10:00", "south-korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "Serbia")
    ) +

    createCard(
      "28/11", "segunda",
      createGame("camaroes", "07:00", "serbia") +
      createGame("south-korea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
    )+

    createCard(
      "02/12", "sexta",
      createGame("south-korea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("camaroes", "16:00", "brazil")
    )