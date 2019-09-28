$(function(){
/*É uma função do jquery que carrega quando o site
é totalmente carregado*/
//Aqui vai todo o código de javascript.
	$('nav.mobile').click(function(){
		//O que vai acontecer quando clicarmos na nav.mobile
		var listaMenu = $('nav.mobile ul');
		/*
		Abrir menu através do fadeIn
		if(listaMenu.is(':hidden')==true){
			//listaMenu.fadeIn();
		}
		else{
			listaMenu.fadeOut();
		}
		*/

		//Abrir ou fechar menu
		if(listaMenu.is(':hidden')==true){
			//var icone=$('.botao-menu-mobile i');
			var icone = $('.botao-menu-mobile').find('i');
			icone.removeClass('fa-bars');
			icone.addClass('fa-times');
			listaMenu.slideToggle();

		}
		else{
			var icone = $('.botao-menu-mobile').find('i');
			icone.removeClass('fa-times');
			icone.addClass('fa-bars');
			listaMenu.slideToggle();
		}
		

		/*if(listaMenu.is(':hidden')==true){
			//listaMenu.show();Equivalente ao abaixo
			listaMenu.css('display','block');
		}
		else{
			listaMenu.hide();
		}*/	

	})

	//Configurando o scroll
	//Conseguimos um resultado semelhante com o bootstrap ?
	if($('target').length > 0){
		//O elemento existe, portanto precisamos dar o scroll em algum elemento.
		//Capturando o target vindo da home
		var elemento = '#'+$('target').attr('target');

		/*Não entendi nada dessa parte. Testar ?*/
		var divScroll = $(elemento).offset().top

		$('html,body').animate({'scrollTop':divScroll},2000);
	}
})

	