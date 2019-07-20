<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Fita K7 Player | JS</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.9.0/css/all.css" integrity="sha384-vlOMx0hKjUCl4WzuhIhSNZSm2yQCaf0mOU1hEDK/iztH3gU4v5NMmJln9273A6Jz" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Caveat|Darker+Grotesque&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body>
	<header class="container-fluid"></header>
	<main class="container">
		<section id="intro" class="row">
			<article class="col-12">
				<h1>JS | Player Fita K7</h1>
				<p>Player de música simulando um toca fitas (fitaK7) feito em JS</p>
				<p>Por favor, acesse de um desktop (versão beta para estudos de JS)</p>
			</article>
		</section>
		
		<section id="aparelhos" class="row">
			<article id="fitaK7" class="col-12 col-md-6">
				<div id="k7FitaVisor" class="row">
					<div id="roloEsq"></div>
					<div id="roloDir"></div>
					<div id="k7Bobinas" class="col-12">
						<canvas id="k7Bobina1"></canvas>
						<span>|||||||||||</span>
						<canvas id="k7Bobina2"></canvas>
					</div>
					<div id="k7Tarja" class="offset-2 col-8">
						<ul class="">
							<li><p><strike>From the Muddy Banks of the Wishkah</strike></p></li>
							<li><p>SURFIN DAY <strike style="margin-left: 10px;">Nirvana - 1996</strike></p></li>
							<li></li>
						</ul>
					</div>
				</div>
				<div class="row">
					<div id="k7Controlador" class="offset-2 col-8">
						<button id="k7ControlVoltar"><i class="fas fa-fast-backward"></i></button>
						<button id="k7ControlPlay"><i class="fas fa-play"></i></button>
						<button id="k7ControlAcelerar"><i class="fas fa-fast-forward"></i></button>
					</div>
				</div>
			</article>
				<audio id="somNaCaixa" display="none" loop>
				  <source src="assets/audio/surfinday.mp3" type="audio/mp3">
				</audio>
		</section>

	</main>
	<footer class="container-fluid"></footer>
	<script async defer src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script async defer src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
	<script async defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
	<script type="text/javascript" src="assets/js/script.js"></script>
</body>
</html>