// const keyboardHTML = '<textarea class="input" tabindex="1" autofocus></textarea><div class="keybord"><div class="keybord-row"><div class="keybord-key Backquote"><span data-eng="0">`</span></div><div class="keybord-key Digit1"><span data-eng="1">1</span></div><div class="keybord-key Digit2"><span data-eng="2">2</span></div><div class="keybord-key Digit3"><span data-eng="3">3</span></div><div class="keybord-key Digit4"><span data-eng="4">4</span></div><div class="keybord-key Digit5"><span data-eng="5">5</span></div><div class="keybord-key Digit6"><span data-eng="6">6</span></div><div class="keybord-key Digit7"><span data-eng="7">7</span></div><div class="keybord-key Digit8"><span data-eng="8">8</span></div><div class="keybord-key Digit9"><span data-eng="9">9</span></div><div class="keybord-key Digit0"><span data-eng="10">0</span></div><div class="keybord-key Minus"><span data-eng="11">-</span></div><div class="keybord-key Equal"><span data-eng="12">=</span></div><div class="keybord-key Backspace"><span data-eng="13">Backspace</span></div></div><div class="keybord-row"><div class="keybord-key Tab"><span data-eng="14">Tab</span></div><div class="keybord-key KeyQ"><span class="caseUp" data-eng="15">Q</span><span class="caseDown hidden-caps" data-eng="15">q</span></div><span data-eng="15">Q</span></div><div class="keybord-key KeyW"><span data-eng="16">W</span></div><div class="keybord-key KeyE"><span data-eng="17">E</span></div><div class="keybord-key KeyR"><span data-eng="18">R</span></div><div class="keybord-key KeyT"><span data-eng="19">T</span></div><div class="keybord-key KeyY"><span data-eng="20">Y</span></div><div class="keybord-key KeyU"><span data-eng="21">U</span></div><div class="keybord-key KeyI"><span data-eng="22">I</span></div><div class="keybord-key KeyO"><span data-eng="23">O</span></div><div class="keybord-key KeyP"><span data-eng="24">P</span></div><div class="keybord-key BracketLeft"><span data-eng="25">[</span></div><div class="keybord-key BracketRight"><span data-eng="26">]</span></div><div class="keybord-key Backslash"><span data-eng="27">\\</span></div><div class="keybord-key Delete"><span data-eng="28">Del</span></div></div><div class="keybord-row"><div class="keybord-key CapsLock"><span data-eng="29">CapsLock</span></div><div class="keybord-key KeyA"><span data-eng="30">A</span></div><div class="keybord-key KeyS"><span data-eng="31">S</span></div><div class="keybord-key KeyD"><span data-eng="32">D</span></div><div class="keybord-key KeyF"><span data-eng="33">F</span></div><div class="keybord-key KeyG"><span data-eng="34">G</span></div><div class="keybord-key KeyH"><span data-eng="35">H</span></div><div class="keybord-key KeyJ"><span data-eng="36">J</span></div><div class="keybord-key KeyK"><span data-eng="37">K</span></div><div class="keybord-key KeyL"><span data-eng="38">L</span></div><div class="keybord-key Semicolon"><span data-eng="39">;</span></div><div class="keybord-key Quote"><span data-eng="40">\'</span></div><div class="keybord-key Enter"><span data-eng="41">Enter</span></div></div><div class="keybord-row"><div class="keybord-key ShiftLeft"><span data-eng="42">Shift</span></div><div class="keybord-key KeyZ"><span data-eng="43">Z</span></div><div class="keybord-key KeyX"><span data-eng="44">X</span></div><div class="keybord-key KeyC"><span data-eng="45">C</span></div><div class="keybord-key KeyV"><span data-eng="46">V</span></div><div class="keybord-key KeyB"><span data-eng="47">B</span></div><div class="keybord-key KeyN"><span data-eng="48">N</span></div><div class="keybord-key KeyM"><span data-eng="49">M</span></div><div class="keybord-key Comma"><span data-eng="50">,</span></div><div class="keybord-key Period"><span data-eng="51">.</span></div><div class="keybord-key Slash"><span data-eng="52">/</span></div><div class="keybord-key ArrowUp"><span data-eng="53">↑</span></div><div class="keybord-key ShiftRight"><span data-eng="54">Shift</span></div></div><div class="keybord-row"><div class="keybord-key ControlLeft"><span data-eng="55">Ctrl</span></div><div class="keybord-key MetaLeft"><span data-eng="56">Win</span></div><div class="keybord-key AltLeft"><span data-eng="57">Alt</span></div><div class="keybord-key Space"><span data-eng="58">&nbsp</span></div><div class="keybord-key AltRight"><span data-eng="59">Alt</span></div><div class="keybord-key ArrowLeft"><span data-eng="60">←</span></div><div class="keybord-key ArrowDown"><span data-eng="61">↓</span></div><div class="keybord-key ArrowRight"><span data-eng="62">→</span></div><div class="keybord-key ControlRight"><span data-eng="63">Ctrl</span></div></div></div>';

// window.onload = loadingFunction;

// function loadingFunction() {
//     document.querySelector('body').insertAdjacentHTML('beforeend', keyboardHTML);
// }

// function main() {
const input = document.querySelector('.input');
const keybord = document.querySelector('.keybord');
const allButtons = document.querySelectorAll('.keybord-key');
const allcaseDown = document.querySelectorAll('.caseDown');
const allcaseUp = document.querySelectorAll('.caseUp');
const allDataRus = document.querySelectorAll('.rus');
const allDataEng = document.querySelectorAll('.eng');

console.log(allDataRus);
console.log(allDataEng);

//console.log(allButtons); // нодлист всех кнопок




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
toggleLanguage(
    () => {
        console.log('смена языка');
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
    },
    "AltLeft",
    "ControlLeft"
);










//добаляю класс активной кнопке при нажатии клавиши
document.addEventListener('keydown', function (event) {
    event.preventDefault();
    for (let i = 0; i < allButtons.length; i++) {
        if (allButtons[i].classList.contains(event.code)) {
            allButtons[i].classList.add('key-active');

            function outputsContentButton() {
                let allchildNodesinButton = allButtons[i].childNodes;
                let dataIndex = allButtons[i].childNodes[1].dataset.eng;
                console.log(dataIndex);
                console.log(allchildNodesinButton);
                for (let i = 0; i < allchildNodesinButton.length; i++) {
                    if (allchildNodesinButton[i].tagName === 'SPAN' && !allchildNodesinButton[i].classList.contains('hidden-caps') &&
                        !allchildNodesinButton[i].classList.contains('hidden')) {
                        console.log(allchildNodesinButton[i]);

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
                                console.log(input.value);
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
keybord.addEventListener('mousedown', (event) => {
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
                    console.log(allcaseUp);
                    console.log(allcaseDown);
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
keybord.addEventListener('mouseup', (event) => {
    for (i = 0; i < allButtons.length; i++) {
        if (allButtons[i].classList.contains('key-active')) {
            allButtons[i].classList.remove('key-active');
        }
    }
});


//}

// setTimeout(main, 0);