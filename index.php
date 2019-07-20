<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Fita K7 Player | JS</title>

	<!-- META DATA -->
    <meta name="identifier-URL" content="https://djament.com.br/estudos/js-fitak7/index.php">
    <meta name="url" content="https://djament.com.br/estudos/js-fitak7/index.php">
    <meta name="abstract" content="Fita K7 Player">
    <meta name="author" content="Marcelo Diament, Djament Comunicação">
    <meta name="robots" content="index,follow">
    <meta name="contact" content="contato@djament.com.br">
    <meta name="reply-to" content="contato@djament.com.br">
    <meta name="copyright" content="Djament">
    <meta name="rating" content="general">
    <meta name="web_author" content="Djament Comunicação"> 
    <!-- META OG -->
    <meta property="og:site_name" content="Fita K7 Player">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Fita K7 Player">
    <meta property="og:description" content="Player em JavaScript simulando Toca Fitas (Fita K7)">
    <meta property="og:url" content="https://djament.com.br/estudos/js-fitak7/index.php">
    <meta property="og:locale" content="pt-BR">
    <meta name="og:locality" content="São Paulo">
    <meta name="og:region" content="SP">
    <meta name="og:country-name" content="BR">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://djament.com.br/estudos/js-fitak7/assets/img/k7.png">
    <meta property="og:image:alt" content="Fita K7 Player">
    <meta property="og:image:url" content="https://djament.com.br/estudos/js-fitak7/assets/img/k7.png">
    <meta property="og:image:secure_url" content="https://djament.com.br/estudos/js-fitak7/assets/img/k7.png">
    <meta property="og:image:type" content="img/png">
    <meta property="og:image:width" content="581">
    <meta property="og:image:height" content="334">
    <!-- MOBILE SPECS -->
    <meta name="application-name" content="JS | Fita K7 Player">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="Fita K7 Player"> 
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="msapplication-TileColor" content="#039FCE">
    <meta name="theme-color" content="#039FCE">
	<link rel="icon" sizes="512x512" href="https://djament.com.br/favicons/favicon-512x512.png">
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
				<h1>JS | Player Fita K7 <a href="https://github.com/Marcelo-Diament/js-fitak7" title="repositório" rel="noreferrer"><i class="fab fa-github"></i></a></h1>
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