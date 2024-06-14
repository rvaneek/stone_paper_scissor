const options = ["rock", "paper", "scissor"]
let AIscore = 0, Plascore = 0;

let AIScoreCard = document.querySelector(".Score_Board > .AI > .Score");
let PlascoreCard = document.querySelector(".Score_Board > .Player > .Score");

let flag = false

function Announce(result1, result2) {
	let ai = null;
	let pla = null;
	
	if (result1 === options[0])
		ai = document.querySelector(".AI .rock");
	else if (result1 === options[1])
		ai = document.querySelector(".AI .paper");
	else
		ai = document.querySelector(".AI .scissor");
	
	if (result2 === options[0])
		pla = document.querySelector(".Player .rock");
	else if (result2 === options[1])
		pla = document.querySelector(".Player .paper");
	else
		pla = document.querySelector(".Player .scissor");
	
	
	console.log(result1, result2);
	
	let id = null;
	let pos = 100;
	clearInterval(id);
	id = setInterval(move, 1);
	
	function move() {
		if (pos === 10) {
			clearInterval(id);
		} else {
			pos--;
			ai.style.top = pos + "vh";
			pla.style.top = pos + "vh";
		}
	}
	
	setTimeout(() => {
		id = setInterval(move_back, 1)
		
	}, 2100)
	
	function move_back() {
		if (pos === 100) {
			clearInterval(id);
		} else {
			pos++;
			ai.style.top = pos + "vh";
			pla.style.top = pos + "vh";
		}
	}
}

function Show(result) {
	if (result === 1)
		PlascoreCard.textContent = (++Plascore).toString()
	else if (result === -1)
		AIScoreCard.textContent = (++AIscore).toString()
	// else
	// alert("Tie")
	
	setTimeout(() => {
		flag = false
	}, 2000)
}

function AIchoice() {
	return options[Math.floor(Math.random() * 3)]
}

function PlayTurn(Aichoice, playerchoice) {
	
	Announce(Aichoice, playerchoice);
	
	setTimeout(() => {
		if (Aichoice === playerchoice)
			Show(0);
		else if (Aichoice === options[0] && playerchoice === options[1])
			Show(1);
		else if (Aichoice === options[1] && playerchoice === options[2])
			Show(1);
		else if (Aichoice === options[2] && playerchoice === options[0])
			Show(1);
		else
			Show(-1);
	}, 1000);
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

rock.addEventListener('click', () => {
	let choice = AIchoice()
	if (!flag) {
		flag = true
		PlayTurn(choice, options[0]);
	}
});
paper.addEventListener('click', () => {
	let choice = AIchoice()
	if (!flag) {
		flag = true
		PlayTurn(choice, options[1]);
	}
});
scissor.addEventListener('click', () => {
	let choice = AIchoice()
	if (!flag) {
	flag = true
		PlayTurn(choice, options[2]);
	}
})