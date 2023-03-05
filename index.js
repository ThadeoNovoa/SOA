
const ApiButtom = document.getElementById('ApiButtom');

const callAPI = () => {
	
fetch("http://soarest-env-1.eba-rusdbpg3.us-east-1.elasticbeanstalk.com/producto").then(res => {
	console.log(res);


})
}

ApiButtom.addEventListener("click",callAPI);