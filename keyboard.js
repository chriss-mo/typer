function generateKeyboard() {
    const keys = [
        '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Delete',
        'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
        'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Return',
        'LeftShift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'RightShift',
        'LeftCtrl', 'Alt', 'Command', 'Space', 'Command', 'Alt', 'RightCtrl', 'Fn'
    ];

    const specialKeys = {
        'Delete': 'delete',
        'Tab': 'tab',
        'CapsLock': 'capslock',
        'Return': 'return',
        'LeftShift': 'leftshift',
        'RightShift': 'rightshift',
        'LeftCtrl': 'leftctrl',
        'RightCtrl': 'rightctrl',
        'Alt': 'alt',
        'Command': 'command',
        'Space': 'space',
        'Fn': 'fn',
        '\\': 'backslash'
    };

    const keyboardBase = document.createElement('div');
    keyboardBase.className = 'keyboard-base';

    keys.forEach(key => {
        const keyDiv = document.createElement('div');
        keyDiv.className = 'key';
        if (specialKeys[key]) {
            keyDiv.classList.add(specialKeys[key]);
        }
        // Replace text content for specific keys
        if (key === 'LeftShift' || key === 'RightShift') {
            keyDiv.textContent = 'Shift';
        } else if (key === 'LeftCtrl' || key === 'RightCtrl') {
            keyDiv.textContent = 'Ctrl';
        } else {
            keyDiv.textContent = key;
        }
        keyboardBase.appendChild(keyDiv);
    });

    document.getElementById('keyboard-container').appendChild(keyboardBase);
}

document.addEventListener('DOMContentLoaded', generateKeyboard);