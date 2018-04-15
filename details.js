 var produs;
    function drawProduse(){
        var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				produs= JSON.parse(this.responseText);
				var t=document.querySelector("#detalii");
				var str="";
				var rand = `<li class="detaliu">
                                <ul><img src="${produs.imagine}" class="imagineClassFull"/></ul>
                                <ul class="numeClassFull">${produs.nume}</ul>
                                <ul class="ingredienteClassFull"><b>Ingrediente:</b><br/> ${produs.ingrediente}</ul>
                                <ul class="retetaClassFull"><b>Reteta:</b><br/>${produs.reteta}</ul>
                            </li>
                        `;
					str +=rand;
					
				console.log(str);
				t.innerHTML=str;
				}
			};
            var idProdus=window.location.search.substring(4);  
			xhttp.open("GET", "https://meniu-814ca.firebaseio.com/"+idProdus+"/.json", true);
			xhttp.send();
		}
		