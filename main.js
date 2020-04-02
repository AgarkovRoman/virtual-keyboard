const keyboardHTML = '<textarea class="input" tabindex="1" autofocus></textarea><div class="keybord"><div class="keybord-row"><div class="keybord-key Backquote"><span data-eng="0">`</span></div><div class="keybord-key Digit1"><span data-eng="1">1</span></div><div class="keybord-key Digit2"><span data-eng="2">2</span></div><div class="keybord-key Digit3"><span data-eng="3">3</span></div><div class="keybord-key Digit4"><span data-eng="4">4</span></div><div class="keybord-key Digit5"><span data-eng="5">5</span></div><div class="keybord-key Digit6"><span data-eng="6">6</span></div><div class="keybord-key Digit7"><span data-eng="7">7</span></div><div class="keybord-key Digit8"><span data-eng="8">8</span></div><div class="keybord-key Digit9"><span data-eng="9">9</span></div><div class="keybord-key Digit0"><span data-eng="10">0</span></div><div class="keybord-key Minus"><span data-eng="11">-</span></div><div class="keybord-key Equal"><span data-eng="12">=</span></div><div class="keybord-key Backspace"><span data-eng="13">Backspace</span></div></div><div class="keybord-row"><div class="keybord-key Tab"><span data-eng="14">Tab</span></div><div class="keybord-key KeyQ"><span data-eng="15">Q</span></div><div class="keybord-key KeyW"><span data-eng="16">W</span></div><div class="keybord-key KeyE"><span data-eng="17">E</span></div><div class="keybord-key KeyR"><span data-eng="18">R</span></div><div class="keybord-key KeyT"><span data-eng="19">T</span></div><div class="keybord-key KeyY"><span data-eng="20">Y</span></div><div class="keybord-key KeyU"><span data-eng="21">U</span></div><div class="keybord-key KeyI"><span data-eng="22">I</span></div><div class="keybord-key KeyO"><span data-eng="23">O</span></div><div class="keybord-key KeyP"><span data-eng="24">P</span></div><div class="keybord-key BracketLeft"><span data-eng="25">[</span></div><div class="keybord-key BracketRight"><span data-eng="26">]</span></div><div class="keybord-key Backslash"><span data-eng="27">\\</span></div><div class="keybord-key Delete"><span data-eng="28">Del</span></div></div><div class="keybord-row"><div class="keybord-key CapsLock"><span data-eng="29">CapsLock</span></div><div class="keybord-key KeyA"><span data-eng="30">A</span></div><div class="keybord-key KeyS"><span data-eng="31">S</span></div><div class="keybord-key KeyD"><span data-eng="32">D</span></div><div class="keybord-key KeyF"><span data-eng="33">F</span></div><div class="keybord-key KeyG"><span data-eng="34">G</span></div><div class="keybord-key KeyH"><span data-eng="35">H</span></div><div class="keybord-key KeyJ"><span data-eng="36">J</span></div><div class="keybord-key KeyK"><span data-eng="37">K</span></div><div class="keybord-key KeyL"><span data-eng="38">L</span></div><div class="keybord-key Semicolon"><span data-eng="39">;</span></div><div class="keybord-key Quote"><span data-eng="40">\'</span></div><div class="keybord-key Enter"><span data-eng="41">Enter</span></div></div><div class="keybord-row"><div class="keybord-key ShiftLeft"><span data-eng="42">Shift</span></div><div class="keybord-key KeyZ"><span data-eng="43">Z</span></div><div class="keybord-key KeyX"><span data-eng="44">X</span></div><div class="keybord-key KeyC"><span data-eng="45">C</span></div><div class="keybord-key KeyV"><span data-eng="46">V</span></div><div class="keybord-key KeyB"><span data-eng="47">B</span></div><div class="keybord-key KeyN"><span data-eng="48">N</span></div><div class="keybord-key KeyM"><span data-eng="49">M</span></div><div class="keybord-key Comma"><span data-eng="50">,</span></div><div class="keybord-key Period"><span data-eng="51">.</span></div><div class="keybord-key Slash"><span data-eng="52">/</span></div><div class="keybord-key ArrowUp"><span data-eng="53">↑</span></div><div class="keybord-key ShiftRight"><span data-eng="54">Shift</span></div></div><div class="keybord-row"><div class="keybord-key ControlLeft"><span data-eng="55">Ctrl</span></div><div class="keybord-key MetaLeft"><span data-eng="56">Win</span></div><div class="keybord-key AltLeft"><span data-eng="57">Alt</span></div><div class="keybord-key Space"><span data-eng="58"></span></div><div class="keybord-key AltRight"><span data-eng="58">Alt</span></div><div class="keybord-key ArrowLeft"><span data-eng="59">←</span></div><div class="keybord-key ArrowDown"><span data-eng="60">↓</span></div><div class="keybord-key ArrowRight"><span data-eng="61">→</span></div><div class="keybord-key ControlRight"><span data-eng="62">Ctrl</span></div></div></div>';

window.onload = loadingFunction;

function loadingFunction() {
    document.querySelector('body').insertAdjacentHTML('beforeend', keyboardHTML);
}

function main() {
    const input = document.querySelector('.input');
    const keybord = document.querySelector('.keybord');
    const allButtons = document.querySelectorAll('.keybord-key');
    //console.log(allButtons); // нодлист всех кнопок


    //добаляю класс активной кнопке при нажатии клавиши
    document.addEventListener('keydown', function (event) {
        console.log(event.code);
        console.log(event.key);
        for (let i = 0; i < allButtons.length; i++) {
            if (allButtons[i].classList.contains(event.code)) {
                allButtons[i].classList.add('key-active');
            }
        }
    });

    //удаляю класс активной кнопки при отжатии клавиши
    document.addEventListener('keyup', function (event) {
        for (let i = 0; i < allButtons.length; i++) {
            if (allButtons[i].classList.contains(event.code)) {
                allButtons[i].classList.remove('key-active');
            }
        }
    });

    //добаляю класс активной кнопке при нажатии мышкой
    keybord.addEventListener('mousedown', (event) => {
        let dataIndex;

        if (event.target.tagName === 'DIV' && event.target.classList.contains('keybord-key')) {
            keybord.querySelectorAll('div').forEach(element => element.classList.remove('key-active'));
            event.target.classList.add('key-active');

            console.log(dataIndex = event.target.childNodes[0].dataset.eng); //атрибут датасет

        } else if (event.target.tagName === 'SPAN') {
            keybord.querySelectorAll('div').forEach(element => element.classList.remove('key-active'));
            event.target.parentNode.classList.add('key-active');

            console.log(dataIndex = event.target.dataset.eng) //атрибут датасет
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


    //выводит в инпут содержимое при клике мыши
    // keybord.addEventListener('click', (event) => {
    //     for (i = 0; i < allButtons.length; i++) {
    //         console.log(allButtons[i].dataset.eng); // атрибут датасет
    //     }
    // });
    // input.addEventListener('keypress', function (event) {
    //     let dataIndex = allButtons[0].dataset.eng;
    //     console.log(dataIndex); // атрибут датасет
    //     console.log(allButtons[dataIndex].innerText); // содержимое кнопки\атрибута

    //     input.textContent += allButtons[dataIndex].innerText;
    // });
}

setTimeout(main, 1000);