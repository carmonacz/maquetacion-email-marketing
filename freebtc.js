//Obtener los valores del Balance
let balance = document.querySelector("#balance");
console.log(balance.innerHTML);
//Obener los valores del balance del bonus
let bonus = document.querySelector("#bonus_account_balance");
console.log(bonus.innerHTML);
//Obtener el valor total de los dos balances
let balanceTotal;
balanceTotal = parseFloat(balance.innerHTML) + parseFloat(bonus.innerHTML);
console.log(balanceTotal);

//Obtener el valor de RP
let rewardPoints = document.querySelector(".user_reward_points");
const rewardPointsInteger = parseInt(rewardPoints.innerHTML.replace(/,/g, ""));
console.log(rewardPointsInteger);

//Obtener los fun bloqueados y los desbloqueados
let funTokens = document.querySelector(
  "#user_fun_stats .large-6.small-6.columns.center.lottery_winner_table_box.lottery_winner_table_first_last_cell.font_bold"
);

const firstValueRegex = /^\d+/;
const firstValueMatch = funTokens.innerHTML.match(firstValueRegex);
const funDesbloqueados = firstValueMatch ? parseInt(firstValueMatch[0]) : 0;

const parenValueRegex = /\d+/g;
const parenValueMatch = funTokens.innerHTML.match(parenValueRegex);
console.log(parenValueMatch);
const funBloqueados = parenValueMatch ? parseInt(parenValueMatch.join("")) : 0;

console.log(funDesbloqueados);
console.log(funBloqueados);
