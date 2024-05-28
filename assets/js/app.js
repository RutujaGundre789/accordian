const cl = console.log

const allAccHead = [...document.querySelectorAll(".acco-head")];
const onHeadClick =(eve) => {
	let getClassNames = eve.target.className;
	cl(getClassNames)
	let activeHead = document.querySelector(".acco-head.active");
	if(activeHead){
		activeHead.classList.remove('active')
	
	}
	if(getClassNames.toLowerCase().includes("active")) {
		eve.target.classList.remove("active")
	}else{
		eve.target.classList.add("active")
	}
}
allAccHead.forEach(accHead => {
	accHead.addEventListener("click", onHeadClick)
})