/*=======================================
Переменные
==========================================*/
//запихую все параграфы в массив
const text = document.getElementsByClassName("text__par");
//связываю переменную с инпутом ответственным за изминениие размера шрифта
const fontsSize = document.getElementById("size");
//связываю переменную с инпутом ответственным за изминениие цвет шрифта
const fontsColor = document.getElementById("color");
//--||-- жирность шрифта
const fontsWeight = document.getElementById("font-weight");
//колекция радиобатонов содержащих начертание шрифта
const fontsStyle = document.getElementsByName("fstyle");
//--||-- межбуквенное расстояние
const letterSpacing = document.getElementById("letter-spacing");
//--||-- межстрочное расстояние
const lineHeight = document.getElementById("line-height");




/*=======================================================
Выставляю в блоке настроек бегунки и тд на значения хранящиеся в sessionStorage
==========================================================*/
//при загрузке страници считую значение размера шрифта из sessionStorage и присваиваю его бегунку выбора размера шрифта
fontsSize.value = sessionStorage.getItem('fontSize');
//при загрузке считую цвет из sessionStorage и присваиваю его палитре в блоке настроек
fontsColor.value = sessionStorage.getItem("color");
//при загрузке считую жирность из sessionStorage и присваиваю его бегунку в блоке настроек
fontsWeight.value = sessionStorage.getItem("weight");
//перебираю колекцию радиобатонов
fontsStyle.forEach((radio) => {
	//если значение sessionStorage совпадает с значением батона
	if (sessionStorage.getItem('fontStyle') === radio.value) {
		//отмечаю этот батон как checked
		radio.checked = true;
	}
})
//при загрузке считую межбуквенное расстояние из sessionStorage и присваиваю его бегунку в блоке настроек
letterSpacing.value = sessionStorage.getItem('spacing');
//при загрузке считую межстрочное расстояние из sessionStorage и присваиваю его бегунку в блоке настроек
lineHeight.value = sessionStorage.getItem('lineHeight');



/*=============================================================
Привожу шрифт в соответствие с настройками хранящимися в sessionStorage
=============================================================*/
//перебираю массив абзацов
for (i = 0; i < text.length; i++) {
	//делаю размер шрифта равным заданному значению в sessionStorage
	text[i].style.fontSize = sessionStorage.getItem('fontSize') + "px";
	//придаю тексту цвет хранящийся в sessionStorage
	text[i].style.color = sessionStorage.getItem('color');
	//придаю тексту жирность хранящююся в sessionStorage
	text[i].style.fontWeight = sessionStorage.getItem('weight');
	//придаю тексту начертание хранящееся в sessionStorage
	text[i].style.fontStyle = sessionStorage.getItem('fontStyle');
	//придаю тексту - межбуквенное расстояние хранящееся в sessionStorage
	text[i].style.letterSpacing = sessionStorage.getItem('spacing') + "px";
	//придаю тексту - межстрочное расстояние хранящееся в sessionStorage
	text[i].style.lineHeight = sessionStorage.getItem('lineHeight');
}




/*=======================================================
Функционал по изминению размера шрифта
========================================================*/
//функ изминения размера шрифта
function changeFontSize() {
	//достаю значение из бегунка размера шрифтов
	const size = fontsSize.value;
	//заношу в sessionStorage ключ fontSize с размером шрифта
	sessionStorage.setItem('fontSize', size);
	//перебраю массив с абзацами
	for (i = 0; i < text.length; i++) {
		//меняю каждому абзацу размер шрифта на тот который вложили в соответствующий ключ sessionStorage
		text[i].style.fontSize = sessionStorage.getItem('fontSize') + "px";
	}
}
//навешиваю обработчик событий и функцию хендлер
fontsSize.addEventListener("input", changeFontSize);




/*=======================================================
Функционал по изминению цвета шрифта
========================================================*/
function changeColor() {
	//значение из палитры цветов
	const color = fontsColor.value;
	//добавляю в sessionStorage ключ-значение с нужным цветом 
	sessionStorage.setItem('color', color);
	//перебираю в цикле все абзаци
	for (i = 0; i < text.length; i++) {
		//меняю каждому абзацу цвет шрифта на тот который вложили в соответствующий ключ sessionStorage
		text[i].style.color = sessionStorage.getItem('color');
	}
}
//навешиваю обработчик событий и функцию хендлер
fontsColor.addEventListener("change", changeColor);




/*=======================================================
Функционал по изминению жирности шрифта
========================================================*/
function changeWeight() {
	//значение из бегунка жирности
	const weight = fontsWeight.value;
	//добавляю в sessionStorage ключ-значение с нужной жирностью.
	sessionStorage.setItem("weight", weight);
	for (i = 0; i < text.length; i++) {
		//меняю каждому абзацу жирность шрифта на тот который вложили в соответствующий ключ sessionStorage
		text[i].style.fontWeight = sessionStorage.getItem('weight');
	}
}
//навешиваю обработчик событий и функцию хендлер
fontsWeight.addEventListener("input", changeWeight);





/*=====================================================
Функционал по изминению начертания шрифта
=====================================================*/
fontsStyle.forEach(function (item) {
	//навешиваю на каждый радиобатон лисенер с функ.
	item.addEventListener("change", changeFontStyle);
});

//достаю значение из инпута и подставляю в стили шрифта
function changeFontStyle() {
	//добавляю в sessionStorage ключ-значение с нужным стилем текста.
	sessionStorage.setItem("fontStyle", document.querySelector("input[name='fstyle']:checked").value);
	for (i = 0; i < text.length; i++) {
		//меняю каждому абзацу style шрифта на тот который вложили в соответствующий ключ sessionStorage
		text[i].style.fontStyle = sessionStorage.getItem('fontStyle');
	}
}




/*=======================================================
Функционал по изминению межбуквенное расстояние
========================================================*/
function changeSpacing() {
	//значение из бегунка межбуквенное расстояние
	const spac = letterSpacing.value;
	//добавляю в sessionStorage ключ-значение с нужной межбуквенное расстояние.
	sessionStorage.setItem("spacing", spac);
	for (i = 0; i < text.length; i++) {
		//меняю каждому абзацу межбуквенное расстояние на тот который вложили в соответствующий ключ sessionStorage
		text[i].style.letterSpacing = sessionStorage.getItem('spacing') + "px";
	}
}
//навешиваю обработчик событий и функцию хендлер
letterSpacing.addEventListener("input", changeSpacing);





/*=======================================================
Функционал по изминению - межстрочное расстояние
========================================================*/
function changeLineHeight() {
	//значение из бегунка межстрочное расстояние
	const lineH = lineHeight.value;
	//добавляю в sessionStorage ключ-значение с нужной межстрочное расстояние.
	sessionStorage.setItem("lineHeight", lineH);
	for (i = 0; i < text.length; i++) {
		//меняю каждому абзацу межстрочное расстояние на тот который вложили в соответствующий ключ sessionStorage
		text[i].style.lineHeight = sessionStorage.getItem('lineHeight');
	}
}
//навешиваю обработчик событий и функцию хендлер
lineHeight.addEventListener("input", changeLineHeight);




/*=====================================================
Функционал по сбросу настроек
=====================================================*/
//кнопка сброса
const resetFormBtn = document.getElementById("btn");
//по клику дефолтит настройки 
resetFormBtn.addEventListener("click", function () {
	//скидую настройки 
	document.getElementById("myForm").reset();
	//изменяю шрифт на скинутые по дефолту настройки
	changeFontSize();
	//меняю цвет на дефолтное значение
	changeColor();
	//меняю жирность на дефолтное значение
	changeWeight();
	//меняю начертание на дефолтное значчение
	changeFontStyle();
	//меняю - межбуквенное расстояние на дефолтное значчение
	changeSpacing();
	//меняю - межстрочное расстояние на дефолтное значчение
	changeLineHeight();
});