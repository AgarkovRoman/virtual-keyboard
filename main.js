const keyboardHTML = ' <textarea class="input" tabindex="1"></textarea><div class="keybord"tabindex = "2" >    <div class="keybord-row" ><div class="keybord-key Backquote"><span class="caseUp hidden-caps eng" data-eng="0" > ~ </span><span class="caseDown eng" data-eng="0" > `</span><span class="caseUp hidden-caps rus hidden" data-eng="0">Ё</span><span class="caseDown rus hidden" data-eng="0">ё</span></div><div class="keybord-key Digit1"><span class="caseUp hidden-caps eng" data-eng="1">!</span><span class="caseDown eng" data-eng="1">1</span><span class="caseUp hidden-caps rus hidden" data-eng="1">!</span><span class="caseDown rus hidden" data-eng="1">1</span></div><div class="keybord-key Digit2"><span class="caseUp hidden-caps eng" data-eng="2">@</span><span class="caseDown eng" data-eng="2">2</span><span class="caseUp hidden-caps rus hidden" data-eng="2">"</span><span class="caseDown rus hidden" data-eng="2">2</span></div><div class="keybord-key Digit3"><span class="caseUp hidden-caps eng" data-eng="3">#</span><span class="caseDown eng" data-eng="3">3</span><span class="caseUp hidden-caps rus hidden" data-eng="3">№</span><span class="caseDown rus hidden" data-eng="3">3</span></div><div class="keybord-key Digit4"><span class="caseUp hidden-caps eng" data-eng="4">$</span><span class="caseDown eng" data-eng="4">4</span><span class="caseUp hidden-caps rus hidden" data-eng="4">;</span><span class="caseDown rus hidden" data-eng="4">4</span></div><div class="keybord-key Digit5"><span class="caseUp hidden-caps eng" data-eng="5">%</span><span class="caseDown eng" data-eng="5">5</span><span class="caseUp hidden-caps rus hidden" data-eng="5">%</span><span class="caseDown rus hidden" data-eng="5">5</span></div><div class="keybord-key Digit6"><span class="caseUp hidden-caps eng" data-eng="6">^</span><span class="caseDown eng" data-eng="6">6</span><span class="caseUp hidden-caps rus hidden" data-eng="6">:</span><span class="caseDown rus hidden" data-eng="6">6</span></div><div class="keybord-key Digit7"><span class="caseUp hidden-caps eng" data-eng="7">&</span><span class="caseDown eng" data-eng="7">7</span><span class="caseUp hidden-caps rus hidden" data-eng="7">?</span><span class="caseDown rus hidden" data-eng="7">7</span></div><div class="keybord-key Digit8"><span class="caseUp hidden-caps" data-eng="8">*</span><span class="caseDown " data-eng="8">8</span></div><div class="keybord-key Digit9"><span class="caseUp hidden-caps " data-eng="9">(</span><span class="caseDown " data-eng="9">9</span></div><div class="keybord-key Digit0"><span class="caseUp hidden-caps " data-eng="10">)</span><span class="caseDown " data-eng="10">0</span></div><div class="keybord-key Minus"><span class="caseUp hidden-caps " data-eng="11">_</span><span class="caseDown " data-eng="11">-</span></div><div class="keybord-key Equal"><span class="caseUp hidden-caps " data-eng="12">+</span><span class="caseDown " data-eng="12">=</span></div> <div class="keybord-key Backspace"><span class="caseUp hidden-caps" data-eng="13">Backspace</span><span class="caseDown" data-eng="13">Backspace</span></div></div><div class="keybord-row"><div class="keybord-key Tab"><span class="caseUp hidden-caps" data-eng="14">Tab</span><span class="caseDown" data-eng="14">Tab</span></div><div class="keybord-key KeyQ"><span class="caseUp hidden-caps eng" data-eng="15">Q</span><span class="caseDown eng" data-eng="15">q</span><span class="caseUp hidden-caps rus hidden" data-eng="15">Й</span><span class="caseDown rus hidden" data-eng="15">й</span></div><div class="keybord-key KeyW"><span class="caseUp hidden-caps eng" data-eng="16">W</span><span class="caseDown eng" data-eng="16">w</span><span class="caseUp hidden-caps rus hidden" data-eng="16">Ц</span><span class="caseDown rus hidden" data-eng="16">ц</span></div><div class="keybord-key KeyE"><span class="caseUp hidden-caps eng" data-eng="17">E</span><span class="caseDown eng" data-eng="17">e</span><span class="caseUp hidden-caps rus hidden" data-eng="17">У</span><span class="caseDown rus hidden" data-eng="17">у</span></div><div class="keybord-key KeyR"><span class="caseUp hidden-caps eng" data-eng="18">R</span><span class="caseDown eng" data-eng="18">r</span><span class="caseUp hidden-caps rus hidden" data-eng="18">К</span><span class="caseDown rus hidden" data-eng="18">к</span></div><div class="keybord-key KeyT"><span class="caseUp hidden-caps eng" data-eng="19">T</span><span class="caseDown eng" data-eng="19">t</span><span class="caseUp hidden-caps rus hidden" data-eng="19">Е</span><span class="caseDown rus hidden" data-eng="19">е</span></div><div class="keybord-key KeyY"><span class="caseUp hidden-caps eng" data-eng="20">Y</span><span class="caseDown eng" data-eng="20">y</span><span class="caseUp hidden-caps rus hidden" data-eng="20">Н</span><span class="caseDown rus hidden" data-eng="20">н</span></div><div class="keybord-key KeyU"><span class="caseUp hidden-caps eng" data-eng="21">U</span><span class="caseDown eng" data-eng="21">u</span><span class="caseUp hidden-caps rus hidden" data-eng="21">Г</span><span class="caseDown rus hidden" data-eng="21">г</span></div><div class="keybord-key KeyI"><span class="caseUp hidden-caps eng" data-eng="22">I</span><span class="caseDown eng" data-eng="22">i</span><span class="caseUp hidden-caps rus hidden" data-eng="22">Ш</span><span class="caseDown rus hidden" data-eng="22">ш</span></div><div class="keybord-key KeyO"><span class="caseUp hidden-caps eng" data-eng="23">O</span><span class="caseDown eng" data-eng="23">o</span><span class="caseUp hidden-caps rus hidden" data-eng="23">Щ</span><span class="caseDown rus hidden" data-eng="23">щ</span></div><div class="keybord-key KeyP"><span class="caseUp hidden-caps eng" data-eng="24">P</span><span class="caseDown eng" data-eng="24">p</span><span class="caseUp hidden-caps rus hidden" data-eng="24">З</span><span class="caseDown rus hidden" data-eng="24">з</span></div><div class="keybord-key BracketLeft"><span class="caseUp hidden-caps eng" data-eng="25">{</span><span class="caseDown eng" data-eng="25">[</span><span class="caseUp hidden-caps rus hidden" data-eng="25">Х</span><span class="caseDown rus hidden" data-eng="25">х</span></div><div class="keybord-key BracketRight"><span class="caseUp hidden-caps eng" data-eng="26">}</span><span class="caseDown eng" data-eng="26">]</span><span class="caseUp hidden-caps rus hidden" data-eng="26">Ъ</span><span class="caseDown rus hidden" data-eng="26">ъ</span></div> <div class="keybord-key Backslash"><span class="caseUp hidden-caps eng" data-eng="27">\|</span><span class="caseDown eng" data-eng="27">\\</span><span class="caseUp hidden-caps rus hidden" data-eng="27">/</span><span class="caseDown rus hidden" data-eng="27">\\</span></div><div class="keybord-key Delete"><span class="caseUp hidden-caps" data-eng="28">Del</span><span class="caseDown" data-eng="28">Del</span></div></div><div class="keybord-row"><div class="keybord-key CapsLock"><span class="caseUp hidden-caps " data-eng="29">CapsLock</span><span class="caseDown" data-eng="29">CapsLock</span></div><div class="keybord-key KeyA"><span class="caseUp hidden-caps eng" data-eng="30">A</span><span class="caseDown eng" data-eng="30">a</span><span class="caseUp hidden-caps rus hidden" data-eng="30">Ф</span><span class="caseDown rus hidden" data-eng="30">ф</span></div><div class="keybord-key KeyS"><span class="caseUp hidden-caps eng" data-eng="31">S</span><span class="caseDown eng" data-eng="31">s</span><span class="caseUp hidden-caps rus hidden" data-eng="31">Ы</span><span class="caseDown rus hidden" data-eng="31">ы</span></div> <div class="keybord-key KeyD"><span class="caseUp hidden-caps eng" data-eng="32">D</span><span class="caseDown eng" data-eng="32">d</span><span class="caseUp hidden-caps rus hidden" data-eng="32">В</span><span class="caseDown rus hidden" data-eng="32">в</span></div><div class="keybord-key KeyF"><span class="caseUp hidden-caps eng" data-eng="33">F</span><span class="caseDown eng" data-eng="33">f</span><span class="caseUp hidden-caps rus hidden" data-eng="33">А</span><span class="caseDown rus hidden" data-eng="33">а</span></div><div class="keybord-key KeyG"><span class="caseUp hidden-caps eng" data-eng="34">G</span><span class="caseDown eng" data-eng="34">g</span><span class="caseUp hidden-caps rus hidden" data-eng="34">П</span><span class="caseDown rus hidden" data-eng="34">п</span></div><div class="keybord-key KeyH"><span class="caseUp hidden-caps eng" data-eng="35">H</span><span class="caseDown eng" data-eng="35">h</span><span class="caseUp hidden-caps rus hidden" data-eng="35">Р</span><span class="caseDown rus hidden" data-eng="35">р</span></div><div class="keybord-key KeyJ"><span class="caseUp hidden-caps eng" data-eng="36">J</span><span class="caseDown eng" data-eng="36">j</span><span class="caseUp hidden-caps rus hidden" data-eng="36">О</span><span class="caseDown rus hidden" data-eng="36">о</span></div><div class="keybord-key KeyK"><span class="caseUp hidden-caps eng" data-eng="37">K</span><span class="caseDown eng" data-eng="37">k</span><span class="caseUp hidden-caps rus hidden" data-eng="37">Л</span><span class="caseDown rus hidden" data-eng="37">л</span></div><div class="keybord-key KeyL"><span class="caseUp hidden-caps eng" data-eng="38">L</span><span class="caseDown eng" data-eng="38">l</span><span class="caseUp hidden-caps rus hidden" data-eng="38">Д</span><span class="caseDown rus hidden" data-eng="38">д</span></div><div class="keybord-key Semicolon"><span class="caseUp hidden-caps eng" data-eng="39">:</span><span class="caseDown eng" data-eng="39">;</span><span class="caseUp hidden-caps rus hidden" data-eng="39">Ж</span><span class="caseDown rus hidden" data-eng="39">ж</span></div><div class="keybord-key Quote"><span class="caseUp hidden-caps eng" data-eng="40">\"</span><span class="caseDown eng" data-eng="40">\'</span><span class="caseUp hidden-caps rus hidden" data-eng="40">Э</span><span class="caseDown rus hidden" data-eng="40" > э </span></div> <div class="keybord-key Enter"><span class="caseUp hidden-caps" data-eng="41" > Enter </span><span class="caseDown" data-eng="41">Enter</span> </div></div><div class="keybord-row" > <div class="keybord-key ShiftLeft"><span class="caseUp hidden-caps" data-eng="42"> Shift </span><span class="caseDown" data-eng="42">Shift</span></div><div class="keybord-key KeyZ"><span class="caseUp hidden-caps eng" data-eng="43">Z</span><span class="caseDown eng" data-eng="43">z</span><span class="caseUp hidden-caps rus hidden" data-eng="43">Я</span><span class="caseDown rus hidden" data-eng="43"> я </span></div><div class="keybord-key KeyX"><span class="caseUp hidden-caps eng" data-eng="44">X</span><span class="caseDown eng" data-eng="44">x</span><span class="caseUp hidden-caps rus hidden" data-eng="44">Ч</span><span class="caseDown rus hidden" data-eng="44">ч</span></div><div class="keybord-key KeyC"><span class="caseUp hidden-caps eng" data-eng="45">C</span><span class="caseDown eng" data-eng="45">c</span><span class="caseUp hidden-caps rus hidden" data-eng="45">С</span><span class="caseDown rus hidden" data-eng="45">с</span></div><div class="keybord-key KeyV"><span class="caseUp hidden-caps eng" data-eng="46">V</span><span class="caseDown eng" data-eng="46">v</span><span class="caseUp hidden-caps rus hidden" data-eng="46">М</span><span class="caseDown rus hidden" data-eng="46">м</span></div><div class="keybord-key KeyB"><span class="caseUp hidden-caps eng" data-eng="47">B</span><span class="caseDown eng" data-eng="47">b</span><span class="caseUp hidden-caps rus hidden" data-eng="47">И</span><span class="caseDown rus hidden" data-eng="47" > и </span></div><div class="keybord-key KeyN" > <span class="caseUp hidden-caps eng" data-eng="48" > N </span><span class="caseDown eng" data-eng="48">n</span><span class="caseUp hidden-caps rus hidden" data-eng="48" > Т </span><span class="caseDown rus hidden" data-eng="48">т</span> </div><div class="keybord-key KeyM"><span class="caseUp hidden-caps eng" data-eng="49">M</span><span class="caseDown eng" data-eng="49">m</span><span class="caseUp hidden-caps rus hidden" data-eng="49">Ь</span><span class="caseDown rus hidden" data-eng="49">ь</span></div><div class="keybord-key Comma"><span class="caseUp hidden-caps eng" data-eng="50">\<</span><span class="caseDown eng" data-eng="50">,</span><span class="caseUp hidden-caps rus hidden" data-eng="50">Б</span><span class="caseDown rus hidden" data-eng="50">б</span></div><div class="keybord-key Period"><span class="caseUp hidden-caps eng" data-eng="51">\></span><span class="caseDown eng" data-eng="51">.</span><span class="caseUp hidden-caps rus hidden" data-eng="51">Ю</span><span class="caseDown rus hidden" data-eng="51" > ю </span></div><div class="keybord-key Slash"><span class="caseUp hidden-caps eng" data-eng="52" > ? </span><span class="caseDown eng" data-eng="52">/ </span><span class="caseUp hidden-caps rus hidden" data-eng="52">,</span><span class="caseDown rus hidden" data-eng="52" > . </span></div><div class="keybord-key ArrowUp"> <span class="caseUp hidden-caps eng" data-eng="53" > ↑ </span><span class="caseDown eng" data-eng="53">↑</span> </div><div class="keybord-key ShiftRight"><span class="caseUp hidden-caps" data-eng="54">Shift</span><span class="caseDown" data-eng="54" > Shift </span> </div> </div><div class="keybord-row"><div class="keybord-key ControlLeft"><span class="caseUp hidden-caps" data-eng="55">Ctrl</span><span class="caseDown" data-eng="55" > Ctrl </span></div><div class="keybord-key MetaLeft" ><span class="caseUp hidden-caps" data-eng="56" > Win </span><span class="caseDown" data-eng="56">Win</span> </div><div class="keybord-key AltLeft"><span class="caseUp hidden-caps" data-eng="57">Alt</span><span class="caseDown" data-eng="57" > Alt </span></div><div class="keybord-key Space"> <span class="caseUp hidden-caps" data-eng="58" > &nbsp </span><span class="caseDown" data-eng="58">&nbsp</span> </div><div class="keybord-key AltRight"><span class="caseUp hidden-caps" data-eng="59">Alt</span><span class="caseDown" data-eng="59" > Alt </span></div><div class="keybord-key ArrowLeft" > <span class="caseUp hidden-caps" data-eng="60"> ← </span><span class="caseDown" data-eng="60">←</span></div><div class="keybord-key ArrowDown"><span  class="caseUp hidden-caps" data-eng="61"> ↓ </span><span class="caseDown" data-eng="61"> ↓ </span></div><div class="keybord-key ArrowRight" ><span class="caseUp hidden-caps" data-eng="62"> → </span><span class="caseDown" data-eng="62">→</span></div><div class="keybord-key ControlRight"><span class="caseUp hidden-caps" data-eng="63">Ctrl</span><span class="caseDown" data-eng="63"> Ctrl </span></div></div><p class="description">Клавиатура создана в операционной системе Mac OS<br>Для переключения языка комбинация: левый ctrl + alt</p></div>';

window.onload = loadingFunction;

function loadingFunction() {
    document.querySelector('body').insertAdjacentHTML('beforeend', keyboardHTML);
}

function main() {
    const input = document.querySelector('.input');
    const keybord = document.querySelector('.keybord');
    const allButtons = document.querySelectorAll('.keybord-key');
    const allcaseDown = document.querySelectorAll('.caseDown');
    const allcaseUp = document.querySelectorAll('.caseUp');
    const allDataRus = document.querySelectorAll('.rus');
    const allDataEng = document.querySelectorAll('.eng');

    function toggleLanguage(func, ...codes) {
        let pressed = new Set();

        document.addEventListener('keydown', function (event) {
            pressed.add(event.code);
            for (let code of codes) {
                if (!pressed.has(code)) {
                    return;
                }
            }
            pressed.clear();
            func();
        });

        document.addEventListener('keyup', function (event) {
            pressed.delete(event.code);
        });
    }

    toggleLanguage(switchLanguage,
        "AltLeft",
        "ControlLeft"
    );

    function switchLanguage() {
        for (i = 0; i < allDataRus.length; i++) {
            if (allDataRus[i].classList.contains('hidden')) {
                allDataRus[i].classList.remove('hidden');
            } else {
                allDataRus[i].classList.add('hidden');
            }
            for (let j = 0; j < allDataEng.length; j++) {
                if (!allDataEng[i].classList.contains('hidden')) {
                    allDataEng[j].classList.add('hidden');
                } else {
                    allDataEng[j].classList.remove('hidden');
                }
            }
        }
    }

    //добаляю класс активной кнопке при нажатии клавиши
    document.addEventListener('keydown', function (event) {
        event.preventDefault();
        for (let i = 0; i < allButtons.length; i++) {
            if (allButtons[i].classList.contains(event.code)) {
                allButtons[i].classList.add('key-active');

                function outputsContentButton() {
                    let allchildNodesinButton = allButtons[i].childNodes;
                    let dataIndex = allButtons[i].childNodes[1].dataset.eng;
                    for (let i = 0; i < allchildNodesinButton.length; i++) {
                        if (allchildNodesinButton[i].tagName === 'SPAN' && !allchildNodesinButton[i].classList.contains('hidden-caps') &&
                            !allchildNodesinButton[i].classList.contains('hidden')) {
                            switch (dataIndex) {
                                case '14':
                                    input.value += '\t';
                                    break;
                                case '29': //капс
                                    input.innerHTML += '';
                                    for (let k = 0; k < allcaseUp.length; k++) {
                                        if (allcaseUp[k].classList.contains('hidden-caps')) {
                                            allcaseUp[k].classList.remove('hidden-caps');
                                        }
                                        for (let j = 0; j < allcaseDown.length; j++) {
                                            allcaseDown[j].classList.add('hidden-caps');
                                        }
                                    }
                                    break;
                                case '42':
                                case '54': //шифт
                                    input.innerHTML += '';
                                    for (let k = 0; k < allcaseUp.length; k++) {
                                        if (allcaseUp[k].classList.contains('hidden-caps')) {
                                            allcaseUp[k].classList.remove('hidden-caps');
                                        }
                                        for (let j = 0; j < allcaseDown.length; j++) {
                                            allcaseDown[j].classList.add('hidden-caps');
                                        }
                                    }
                                    break;
                                case '55':
                                case '63': //контр
                                    input.innerHTML += '';
                                    break;
                                case '56': //win
                                    input.innerHTML += '';
                                    break;
                                case '57':
                                case '59': //alt
                                    input.innerHTML += '';
                                    break;
                                case '41': //enter
                                    input.value += '\r\n';
                                    break;
                                case '13': //backspace
                                    input.value = input.value.slice(0, input.value.length - 1);
                                    break;
                                case '13': //del
                                    //input.value = input.value.slice(0, cursorP;
                                    break;
                                default:
                                    input.value += allchildNodesinButton[i].innerText;
                            }
                        }
                    }
                }
                outputsContentButton();
            }
        }
    });

    //удаляю класс активной кнопки при отжатии клавиши
    document.addEventListener('keyup', function (event) {
        for (let i = 0; i < allButtons.length; i++) {
            if (allButtons[i].classList.contains(event.code)) {
                allButtons[i].classList.remove('key-active');
                //CAPSLOCK
                if (event.code === 'CapsLock') {
                    for (let j = 0; j < allcaseDown.length; j++) {
                        if (allcaseDown[j].classList.contains('hidden-caps')) {
                            allcaseDown[j].classList.remove('hidden-caps');
                        }
                        for (let k = 0; k < allcaseUp.length; k++) {
                            allcaseUp[k].classList.add('hidden-caps');
                        }
                    }
                }
                //SHIFT
                if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                    for (let j = 0; j < allcaseDown.length; j++) {
                        if (allcaseDown[j].classList.contains('hidden-caps')) {
                            allcaseDown[j].classList.remove('hidden-caps');
                        }
                        for (let k = 0; k < allcaseUp.length; k++) {
                            allcaseUp[k].classList.add('hidden-caps');
                        }
                    }
                }
            }
        }
    });

    //добаляю класс активной кнопке при нажатии мышкой и вывожу в инпут
    document.addEventListener('mousedown', (event) => {
        if (event.target.tagName === 'SPAN') {
            keybord.querySelectorAll('div').forEach(element => element.classList.remove('key-active'));
            event.target.parentNode.classList.add('key-active');

            function outputsContentButton() {
                let dataIndex = event.target.dataset.eng;
                switch (dataIndex) {
                    case '14':
                        input.value += '\t';
                        break;
                    case '29': //капс
                        input.innerHTML += '';
                        for (let k = 0; k < allcaseDown.length; k++) {
                            allcaseUp[k].classList.remove('hidden-caps');
                            allcaseDown[k].classList.add('hidden-caps');
                        }
                        break;
                    case '42':
                    case '54': //шифт
                        input.innerHTML += '';
                        for (let k = 0; k < allcaseDown.length; k++) {
                            allcaseUp[k].classList.remove('hidden-caps');
                            allcaseDown[k].classList.add('hidden-caps');
                        }
                        break;
                    case '55':
                    case '63': //контр
                        input.innerHTML += '';
                        break;
                    case '56': //win
                        input.innerHTML += '';
                        break;
                    case '57':
                    case '59': //alt
                        input.innerHTML += '';
                        break;
                    case '41': //enter
                        input.value += '\r\n';
                        break;
                    case '13': //backspace
                        input.value = input.value.slice(0, input.value.length - 1);
                        break;
                    default:
                        input.value += allButtons[dataIndex].innerText; // выводим в инпут
                }
            }
            outputsContentButton()
        }
    });

    //удаляю класс активной кнопки при отжатии мышкой
    document.addEventListener('mouseup', (event) => {
        for (i = 0; i < allButtons.length; i++) {
            if (allButtons[i].classList.contains('key-active')) {
                allButtons[i].classList.remove('key-active');
            }
        }
    });

}

setTimeout(main, 0);