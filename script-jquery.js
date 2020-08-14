//скррипт работает только после прогрузки хтмл
$(document).ready(function () {


	/*=======================================================
	Выставляю в блоке настроек бегунки и тд на значения хранящиеся в sessionStorage
	==========================================================*/
	//при загрузке страници считую значение размера шрифта из sessionStorage и присваиваю его бегунку выбора размера шрифта
	$("#size").val(sessionStorage.getItem('fontSize'));
	$("#color").val(sessionStorage.getItem("color"));
	$("#font-weight").val(sessionStorage.getItem('weight'));
	//перебираю колекцию инпутов с именем fstyle
	for (i = 0; i < $("input[name='fstyle']").length; i++) {
		//если значение sessionStorage совпадает с значением батона
		if (sessionStorage.getItem('fontStyle') === $("input[name='fstyle']")[i].value) {
			//отмечаю этот батон как checked
			$("input[name='fstyle']")[i].checked = true;
		}
	}
	$("#letter-spacing").val(sessionStorage.getItem("spacing"));
	$("#line-height").val(sessionStorage.getItem("lineHeight"));


	/*=============================================================
	Привожу шрифт в соответствие с настройками хранящимися в sessionStorage
	=============================================================*/
	$(".text__par").css({
		//делаю размер шрифта равным заданному значению в sessionStorage
		'font-size': sessionStorage.getItem('fontSize') + "px",
		"color": sessionStorage.getItem('color'),
		"font-weight": sessionStorage.getItem('weight'),
		"font-style": sessionStorage.getItem("fontStyle"),
		"letter-spacing": sessionStorage.getItem("spacing") + "px",
		"line-height": sessionStorage.getItem("lineHeight"),
	});


	/*=======================================================
	Функционал по изминению размера шрифта
	========================================================*/
	//при изминении бегунка с размером шрифта срабатует функция...
	$("#size").on('input', changeFontSize);
	function changeFontSize() {
		//создаем в sessionStorage ключ с значением из инпута
		sessionStorage.setItem('fontSize', $("#size").val());
		//устанавливаем тексту размер шрифта из sessionStorage
		$(".text__par").css('font-size', sessionStorage.getItem('fontSize') + "px");
	}


	/*=======================================================
	Функционал по изминению цвета шрифта
	========================================================*/
	//навешиваю обработчик событий и функцию хендлер
	$("#color").change(changeColor);
	function changeColor() {
		//добавляю в sessionStorage ключ-значение с нужным цветом 
		sessionStorage.setItem('color', $("#color").val());
		//меняю каждому абзацу цвет шрифта на тот который вложили в соответствующий ключ sessionStorage
		$(".text__par").css('color', sessionStorage.getItem('color'));
	}


	/*=======================================================
	Функционал по изминению жирности шрифта
	========================================================*/
	$("#font-weight").on('input', changeWeight);
	function changeWeight() {
		//добавляю в sessionStorage ключ-значение с нужной жирностью.
		sessionStorage.setItem("weight", $("#font-weight").val());
		//меняю каждому абзацу жирность шрифта на тот который вложили в соответствующий ключ sessionStorage
		$(".text__par").css("font-weight", sessionStorage.getItem('weight'));
	}


	/*=====================================================
	Функционал по изминению начертания шрифта
	=====================================================*/
	$("input[name='fstyle']").change(changeFontStyle);
	function changeFontStyle() {
		//добавляю в sessionStorage ключ-значение с нужным стилем текста.
		sessionStorage.setItem("fontStyle", $("input[name='fstyle']:checked").val());
		//меняю каждому абзацу style шрифта на тот который вложили в соответствующий ключ sessionStorage
		$(".text__par").css("font-style", sessionStorage.getItem('fontStyle'));
	}


	/*=======================================================
	Функционал по изминению межбуквенное расстояние
	========================================================*/
	$("#letter-spacing").on('input', changeSpacing);
	function changeSpacing() {
		//добавляю в sessionStorage ключ-значение с нужной межбуквенное расстояние.
		sessionStorage.setItem("spacing", $("#letter-spacing").val());
		//меняю каждому абзацу межбуквенное расстояние на тот который вложили в соответствующий ключ sessionStorage
		$(".text__par").css("letter-spacing", sessionStorage.getItem('spacing') + "px");
	}


	/*=======================================================
	Функционал по изминению - межстрочное расстояние
	========================================================*/
	$("#line-height").on('input', changeLineHeight);
	function changeLineHeight() {
		//добавляю в sessionStorage ключ-значение с нужной межстрочное расстояние.
		sessionStorage.setItem("lineHeight", $("#line-height").val());
		//меняю каждому абзацу межстрочное расстояние на тот который вложили в соответствующий ключ sessionStorage
		$(".text__par").css("line-height", sessionStorage.getItem('lineHeight'));
	}


	/*=====================================================
	Функционал по сбросу настроек
	=====================================================*/
	$("#btn").click(function () {
		//скидую настройки. Так как через $("#myForm") мы получаем колекцию, то для сработки метода reset() нужно указать элемент для которого применить метод, по этому указываем [0].
		$("#myForm")[0].reset()
		changeFontSize();
		changeColor();
		changeWeight();
		changeFontStyle();
		changeSpacing();
		changeLineHeight();
	})


});