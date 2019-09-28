$(function(){

	var curSlide = 0;//Slide atual
	var delay = 3;
	//Pega a quantidade de imagens
	var maxSlide = $('.banner-single').length - 1;

	initSlider();//Chama a função
	changeSlide();

	function initSlider(){
		$('.banner-single').hide();
		//Pega o primeiro elemento da lista e o exibe
		$('.banner-single').eq(0).show();
		
		for(var i = 0; i < maxSlide + 1; i++){
			/*A função html() pega todo o conteudo do documento
			se pegar o class banner-container iria pegar tudo dentro 
			da section banner-container*/
			var content = $('.bullets').html();
			$('.bullets').html(content);//Adiciona o valor de content dentro do html
			if(i == 0){
				content += '<span class="active-slider"></span>';
				//$('.bullets').html(content);
			}
			else{
				content += '<span></span>';
			}
			$('.bullets').html(content);
		}
	}

	function changeSlide(){
		setInterval(function(){
			/*
			A função changeSlide tem um tempo definido que fica se repetindo
			a medida que esse tempo está passando é capturado qual
			slide está na posição atual e usado fadeOut() para esconde-lo
			depois é incrementado o curSlide (slide atual) para ficar em
			um loop infinito. Depois é feito uma verificação para saber
			se o curSlide está maior que a quantidade maxima de 
			slide o maxSlide. Caso esteja é feito o reset do curSlide para
			zero e em seguida pedido para exibir com fadeIn o slide atual.
			O parâmetro passado para o fadeOut é o tempo em milisegundo 
			para animação acontecer

			*/
			/*
			A função stop() vai parar todas as animações, assim evita que caso ocorra a navegação
			entre os slides a transição ocorra de maneira muito rápida
			*/
			$('.banner-single').eq(curSlide).stop().fadeOut(1000);
			curSlide++;
			if(curSlide > maxSlide){
				curSlide = 0;
			}
			$('.banner-single').eq(curSlide).fadeIn(1000);
			//Trocar bullets da navegação do slider!
			$('.bullets span').removeClass('active-slider');//Garante que apenas um bullet vai ter a classe
			$('.bullets span').eq(curSlide).addClass('active-slider');
		},delay * 1000);
	}

	/*
	Funciona caso o elemento já exista
	$('.bullets span').click(function(){
		alert('Clicado');
	})*/

	//Caso o elemento seja adicionado depois melhor usar essa forma:
	//O método on parâmetros: evento, classe, função para o que vai acontecer
	$('body').on('click', '.bullets span', function(){
		var currentBullet = $(this); //O this refere-se ao objeto clicado
		$('.banner-single').eq(curSlide).stop().fadeOut(2000);
		curSlide = currentBullet.index();//Captura a ordem do bullet que foi clicado
		$('.banner-single').eq(curSlide).fadeIn(2000);//Mostra o bullet clicado
		$('.bullets span').removeClass('active-slider');
		currentBullet.addClass('active-slider');
	});
})