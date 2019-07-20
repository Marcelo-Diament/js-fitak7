window.onload = function(){

	// BOBINAS FITA K7 - INÍCIO
		// Bobina 1
		var bobina1 = document.getElementById('k7Bobina1');
		bobina1.width = 60;
		bobina1.height = 60;
	 	var circulo1 = bobina1.getContext('2d');
	 	var x = bobina1.width / 2;
	 	var y = bobina1.height / 2;
	 	var radius = 36;
		circulo1.lineWidth = 10;
		circulo1.strokeStyle = 'black';
		circulo1.fillStyle = 'black';
		circulo1.beginPath();
	    circulo1.arc(x, y, radius, 0 * Math.PI, 2 * Math.PI);
	    circulo1.stroke();
	    circulo1.fill();
	    // Bolinha A Bobina 1
	    var bolinhaA = bobina1.getContext('2d');
	 	var x = bobina1.width / 2 + 10;
	 	var y = bobina1.height / 2 + 10;
	 	var radius = 2;
		bolinhaA.lineWidth = 2;
		bolinhaA.strokeStyle = '#999';
		bolinhaA.fillStyle = '#555';
		bolinhaA.beginPath();
	    bolinhaA.arc(x, y, radius, 0 * Math.PI, 2 * Math.PI);
	    bolinhaA.stroke();
	    bolinhaA.fill();
		// Bolinha B Bobina 1
	    var bolinhaB = bobina1.getContext('2d');
	 	var x = bobina1.width / 2 - 10;
	 	var y = bobina1.height / 2 - 10;
	 	var radius = 2;
		bolinhaB.lineWidth = 2;
		bolinhaB.strokeStyle = '#999';
		bolinhaB.fillStyle = '#555';
		bolinhaB.beginPath();
	    bolinhaB.arc(x, y, radius, 0 * Math.PI, 2 * Math.PI);
	    bolinhaB.stroke();
	    bolinhaB.fill();
	    // Bolinha Centro Bobina 1
	    var bolinhaC = bobina1.getContext('2d');
	 	var x = bobina1.width / 2;
	 	var y = bobina1.height / 2;
	 	var radius = 5;
		bolinhaC.lineWidth = 2;
		bolinhaC.strokeStyle = 'grey';
		bolinhaC.fillStyle = '#090909';
		bolinhaC.beginPath();
	    bolinhaC.arc(x, y, radius, 0 * Math.PI, 2 * Math.PI);
	    bolinhaC.stroke();
	    bolinhaC.fill();
	    // Bobina 2
		var bobina2 = document.getElementById('k7Bobina2');
		bobina2.width = 60;
		bobina2.height = 60;
	 	var circulo1 = bobina2.getContext('2d');
	 	var x = bobina2.width / 2;
	 	var y = bobina2.height / 2;
	 	var radius = 36;
		circulo1.lineWidth = 10;
		circulo1.strokeStyle = 'black';
		circulo1.fillStyle = 'black';
		circulo1.beginPath();
	    circulo1.arc(x, y, radius, 0 * Math.PI, 2 * Math.PI);
	    circulo1.stroke();
	    circulo1.fill();
	    // Bolinha D Bobina 2
	    var bolinhaD = bobina2.getContext('2d');
	 	var x = bobina2.width / 2 + 10;
	 	var y = bobina2.height / 2 + 10;
	 	var radius = 2;
		bolinhaD.lineWidth = 2;
		bolinhaD.strokeStyle = '#999';
		bolinhaD.fillStyle = '#555';
		bolinhaD.beginPath();
	    bolinhaD.arc(x, y, radius, 0 * Math.PI, 2 * Math.PI);
	    bolinhaD.stroke();
	    bolinhaD.fill();
		// Bolinha E Bobina 2
	    var bolinhaE = bobina2.getContext('2d');
	 	var x = bobina2.width / 2 - 10;
	 	var y = bobina2.height / 2 - 10;
	 	var radius = 2;
		bolinhaE.lineWidth = 2;
		bolinhaE.strokeStyle = '#999';
		bolinhaE.fillStyle = '#555';
		bolinhaE.beginPath();
	    bolinhaE.arc(x, y, radius, 0 * Math.PI, 2 * Math.PI);
	    bolinhaE.stroke();
	    bolinhaE.fill();
	    // Bolinha Centro Bobina 2
	    var bolinhaF = bobina2.getContext('2d');
	 	var x = bobina2.width / 2;
	 	var y = bobina2.height / 2;
	 	var radius = 5;
		bolinhaF.lineWidth = 2;
		bolinhaF.strokeStyle = 'grey';
		bolinhaF.fillStyle = '#090909';
		bolinhaF.beginPath();
	    bolinhaF.arc(x, y, radius, 0 * Math.PI, 2 * Math.PI);
	    bolinhaF.stroke();
	    bolinhaF.fill();
    // BOBINAS FITA K7 - FIM

    // BOBINAS ANIMAÇÃO - INÍCIO
    var k7Play = document.querySelector('#k7ControlPlay')
    var k7Voltar = document.querySelector('#k7ControlVoltar')
    var k7Acelerar = document.querySelector('#k7ControlAcelerar')
    var k7Bobina1 = document.querySelector('#k7Bobina1')
    var k7Bobina2 = document.querySelector('#k7Bobina2')
    var roloEsq = document.querySelector('#roloEsq')
    var roloDir = document.querySelector('#roloDir')
    var som = document.querySelector('#somNaCaixa')
	
	var roloEsqBorder = 26
	var roloEsqTop = 15
	var roloEsqLeft = 76
	var roloDirBorder = 26
	var roloDirTop = 15
	var roloDirRight = 76

	function rodarRolo(){
		var rodandoRolo = setInterval(rodarORolo, 1200)
		function rodarORolo(){
			if(roloDirBorder == 45 || (k7Acelerar.classList != 'clicado' && k7Voltar.classList != 'clicado' && k7Play.classList != 'clicado' )){
				pausar()
				clearInterval(rodandoRolo)
				setTimeout(function(){
					if(roloDirBorder == 45){
						var rebobinar = confirm('A fita já acabou! Deseja rebobinar?')
						if(rebobinar == true) {
							voltarBobina()
						}
					}
				}, 500)
			} else {
				roloEsq.style.border = (roloEsqBorder--)+'px solid black'
				roloEsq.style.top = (roloEsqTop++)+'px'
				roloEsq.style.left = (roloEsqLeft++)+'px'
		   		roloDir.style.border = (roloDirBorder++)+'px solid black'
				roloDir.style.top = (roloDirTop--)+'px'
				roloDir.style.right = (roloDirRight--)+'px'
			}
		}
	}

	function acelerarRolo(){
		var acelerandoRolo = setInterval(acelerarORolo, 200)
		function acelerarORolo(){
			if(roloDirBorder == 45 || (k7Acelerar.classList != 'clicado' && k7Voltar.classList != 'clicado' && k7Play.classList != 'clicado' )){
				pausar()
				clearInterval(acelerandoRolo)
				setTimeout(function(){
					if(roloDirBorder == 45){
						confirm('A fita já chegou ao final!')
					}
				}, 500)
			} else {
				roloEsq.style.border = (roloEsqBorder--)+'px solid black'
				roloEsq.style.top = (roloEsqTop++)+'px'
				roloEsq.style.left = (roloEsqLeft++)+'px'
		   		roloDir.style.border = (roloDirBorder++)+'px solid black'
				roloDir.style.top = (roloDirTop--)+'px'
				roloDir.style.right = (roloDirRight--)+'px'
			}
		}
	}

	function voltarRolo(){
		var voltandoRolo = setInterval(voltarORolo, 200)
		function voltarORolo(){
			if(roloDirBorder == 1 || (k7Acelerar.classList != 'clicado' && k7Voltar.classList != 'clicado' && k7Play.classList != 'clicado' )){
				pausar()
				clearInterval(voltandoRolo)
				setTimeout(function(){
					if(roloDirBorder == 1){
						var rebobinado = confirm('Fita rebobinada! Deseja ouvir novamente?')
						if(rebobinado == true) {
							rodarBobina()
						}
					}
				}, 500)
			} else {
				roloEsq.style.border = (roloEsqBorder++)+'px solid black'
				roloEsq.style.top = (roloEsqTop--)+'px'
				roloEsq.style.left = (roloEsqLeft--)+'px'
		   		roloDir.style.border = (roloDirBorder--)+'px solid black'
				roloDir.style.top = (roloDirTop++)+'px'
				roloDir.style.right = (roloDirRight++)+'px'
			}
		}
	}
    
    k7Play.addEventListener('click', rodarBobina)
    function rodarBobina(){
    	k7Bobina1.classList.remove('acelerarBobina', 'voltarBobina')
    	k7Bobina2.classList.remove('acelerarBobina', 'voltarBobina')
    	k7Bobina1.classList.toggle('rodarBobina')
    	k7Bobina2.classList.toggle('rodarBobina')
    	k7Play.classList.toggle('clicado')
    	k7Acelerar.classList.remove('clicado')
    	k7Voltar.classList.remove('clicado')
    	if(k7Play.classList.contains('clicado')){
    		rodarRolo()
    		som.playbackRate = 1;
    		som.play()
    	} else {
    		pausar()
			// clearInterval(rodandoRolo)
    	}
    }

    function pausar(){
    	k7Bobina1.classList.remove('rodarBobina', 'acelerarBobina', 'voltarBobina')
    	k7Bobina2.classList.remove('rodarBobina', 'acelerarBobina', 'voltarBobina')
    	k7Play.classList.remove('clicado')
    	k7Voltar.classList.remove('clicado')
    	k7Acelerar.classList.remove('clicado')
    	som.pause()
    }
    
    k7Acelerar.addEventListener('click', acelerarBobina)
    function acelerarBobina(){
		k7Bobina1.classList.remove('rodarBobina', 'voltarBobina')
    	k7Bobina2.classList.remove('rodarBobina', 'voltarBobina')
    	k7Bobina1.classList.toggle('acelerarBobina')
    	k7Bobina2.classList.toggle('acelerarBobina')
    	k7Acelerar.classList.toggle('clicado')
    	k7Play.classList.remove('clicado')
    	k7Voltar.classList.remove('clicado')
    	if(k7Acelerar.classList.contains('clicado')){
    		acelerarRolo()
    		som.playbackRate = 6;
    		som.play()
    	} else {
    		pausar()
			// clearInterval(acelerandoRolo)
    	}
    }

    k7Voltar.addEventListener('click', voltarBobina)
    function voltarBobina(){
    	k7Bobina1.classList.remove('acelerarBobina', 'rodarBobina')
    	k7Bobina2.classList.remove('acelerarBobina', 'rodarBobina')
    	k7Bobina1.classList.toggle('voltarBobina')
    	k7Bobina2.classList.toggle('voltarBobina')
    	k7Voltar.classList.toggle('clicado')
    	k7Acelerar.classList.remove('clicado')
    	k7Play.classList.remove('clicado')
    	if(k7Voltar.classList.contains('clicado')){
    		voltarRolo()
    		som.playbackRate = 6;
    		som.play()
    	} else {
    		pausar()
			// clearInterval(voltandoRolo)
    	}
    }
    // BOBINAS ANIMAÇÃO - FIM

}