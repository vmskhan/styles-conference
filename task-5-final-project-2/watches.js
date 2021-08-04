//initializing toasts
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
	var toastList = toastElList.map(function (toastEl) {
  		return new bootstrap.Toast(toastEl, true)
	})
//add event listeners to add-to-cart-buttons
function evtadder(){
	let btns=document.querySelectorAll('div.card-body button');
	for(let i=0;i<btns.length;i++)
	{
		btns[i].addEventListener('click',cartevt);	
	}
}
evtadder();
//button in modal(add) to open the toast
function mybtn(){
	let b=document.querySelector(".toast");
	let t=document.getElementById("timestamp");
	b.classList.toggle("show");
	b.classList.toggle("hide");
	let time=new Date();
	t.innerHTML=time.getDate()+"/"+(time.getMonth()+1)+"/"+time.getFullYear()+"<br>"+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
}

//add-to-cart button event handler
function cartevt(evt){
	let par=evt.currentTarget.parentElement	//parent of button is div.card-body
	let child=par.children[0].children[0].children[0];//div.card-body->details>summary->h5
	let text=child.innerHTML;
	let modal=document.querySelector("#myModal h5.modal-title");
	modal.innerHTML=text;
}
