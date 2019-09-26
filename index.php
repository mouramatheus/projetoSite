<?php include('config.php')?>
<!DOCTYPE html>
<html>
<head>
	<title>Projeto 01</title>
	<link rel="stylesheet" href="<?php echo INCLUDE_PATH;?>estilo/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet"> 	
	<link rel="stylesheet" type="text/css" href="<?php echo INCLUDE_PATH;?>estilo/style.css">
	<meta name="viewport" content= "width=device-width, initial-scale=1.0">
	<meta name="description" content="Descricao do website">
	<meta name="keywords" content="palavras-chave, do,meu,site">
	<meta charset="utf-8"/> 
</head>
	<?php 
		$url = isset($_GET['url']) ? $_GET['url'] :'home';//Se existir a variavel url coloque em url, se não busque a home
		//Vai funcionar para o scroll da pagina
		switch ($url) {
			case 'depoimentos':
				//Criada tag target para ser acessada pelo javascript
				echo '<target target="depoimentos"/>';
				break;
			
			case 'servicos':
				echo '<target target="servicos"/>';
				break;
		}
	?>

<body>

	<header>
		<div class="center">
			<div class="left logo"><a href="/">Logomarca</a></div> <!--Logo -->
			<nav class="desktop right">
				<ul>
					<li><a href="<?php echo INCLUDE_PATH;?>">Home</a></li>
					<li><a href="<?php echo INCLUDE_PATH;?>depoimentos">Depoimentos</a></li>
					<li><a href="<?php echo INCLUDE_PATH;?>servicos">Serviços</a></li>
					<li><a href="<?php echo INCLUDE_PATH;?>contato">Contato</a></li>
				</ul>
			</nav>

			<nav class="mobile right">
				<div class="botao-menu-mobile">
					<i class="fa fa-bars" aria-hidden="true"></i>

				</div><!--botao-menu-mobile -->
				<ul>
					<li><a href="<?php echo INCLUDE_PATH;?>">Home</a></li>
					<li><a href="<?php echo INCLUDE_PATH;?>depoimentos">Depoimentos</a></li>
					<li><a href="<?php echo INCLUDE_PATH;?>servicos">Serviços</a></li>
					<li><a href="<?php echo INCLUDE_PATH;?>contato">Contato</a></li>
				</ul>
			</nav>
			<div class="clear"></div><!--Entendi agora porque limpar após usar a flutuação. Pois depois que usar a altura não é mais calculada, dai a estilização não pega. -->
		</div><!--Center -->

	</header>

	<?php
		/*

			Carregando as páginas dinâmicamente. Isso só funciona por causa do arquivo .htaccess
			que permite que a gente capture o que digitado na url e/ou no momento do clique no link
			presente no header.
		*/ 
		//Se dentro da pasta pages existir um arquivo com o nome da variavel url inclua esse arquivo, se não chama a pagina 404
		if(file_exists('pages/'.$url.'.php')){
			include('pages/'.$url.'.php');
		}else{
			//Podemos fazer o que quiser, pois a pagina nao existe
			if($url != 'depoimentos' && $url !='servicos'){
				$pagina404 = true;
				include('pages/404.php');
			}
			else{
				include('pages/home.php');
			}
			
		}
	?>
	
	<footer <?php if(isset($pagina404) && $pagina404==true) echo 'class=fixed';?>>
		<div class="center">
			<p>Todos os direitos reservados</p>
		</div><!--Center-->
	</footer>
	<script src="<?php echo INCLUDE_PATH;?>js/jquery.js"></script>
	<script src="<?php echo INCLUDE_PATH;?>js/scripts.js"></script>
	<?php 
		if($url == 'home' || $url = ''){ ?>
	<script src="<?php echo INCLUDE_PATH;?>js/slider.js"></script>
	<?php }//Se a pagina for home ou vazio carrega o slider. Fica mais otimizado?>
	<?php 
		//echo $url;
		//Mesclando php com html
		//Se a página de contato receber um clique
		if($url == 'contato'){
		?>
			<script src='https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDHPNQxozOzQSZ-djvWGOBUsHkBUoT_qH4'></script>
			<script src="<?php echo INCLUDE_PATH;?>js/map.js"></script>
		<?php }?>

</body>
</html>