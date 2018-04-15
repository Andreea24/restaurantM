
var listaProduse = [];
    function drawProduse(){
        var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			listaProduse= JSON.parse(this.responseText);
			var tabel=document.querySelector("#listaProduse tbody");
			var str="";
			for(var i in listaProduse){
                if(document.querySelector("#ingrediente").value !== ""&&listaProduse[i].ingrediente.indexOf(
                    document.querySelector("#ingrediente").value) === -1){
                    continue;}

				var rand = `<tr>
                                <td><img src="${listaProduse[i].imagine}" class="imagineClass"/></td>
                                <td id="despre">
                                    <span class="numeClass">${listaProduse[i].nume}<br/></span>
                                    <p class="ingredienteClass">${listaProduse[i].ingrediente}</p>
                                </td>
                                <td><a href="details.html?id=${i}"><button class="btnDetaliu">DETALII</button></a></td>
                            </tr>
                        `;
				str +=rand;
					}
			console.log(str);
			tabel.innerHTML=str;
				}
			};
			xhttp.open("GET", "https://meniu-814ca.firebaseio.com/.json", true);
			xhttp.send();
		}
        
        function searchKeyPress(e)
        {
            // look for window.event in case event isn't passed in
            e = e || window.event;
            if (e.keyCode == 13)
            {
                document.getElementById('btn').click();
                return false;
            }
            return true;
        }
        
        function initMap() {
            var uluru = {lat: 44.4308388, lng: 26.053870200000006};
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 15,
              center: uluru
            });
            var marker = new google.maps.Marker({
              position: uluru,
              map: map
            });
          }