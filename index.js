let Squire = require("squire-rte");

const appDiv = document.getElementById('app');
let squire = new Squire(appDiv, {
    blockTag: 'p',
    blockAttributes: {'class': 'paragraph'},
    tagAttributes: {
        ul: {'class': 'UL'},
        ol: {'class': 'OL'},
        li: {'class': 'listItem'},
        pre: {
            style: 'border-radius:3px;border:1px solid #ccc;padding:7px 10px;background:#f6f6f6;font-family:menlo,consolas,monospace;font-size:90%;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;'
        }
    }
});

let state = {
    bold: false,
    italic: false,
    underline: false
};

const removeActions = {
    bold: 'removeBold',
    italic: 'removeItalic',
    underline: 'removeUnderline'
}

const activate = (e, action) => {
    e.currentTarget.classList.add("active");
    squire[action]();
};

const disable = (e, action) => {
    e.currentTarget.classList.remove("active");
    squire[removeActions[action]]();
}

const changeActive = (e) => {
    const action = e.currentTarget.id;
    if(action in removeActions) {
        state[action] = !state[action];
        if(state[action]) {
            activate(e, action);
        } else {
            disable(e, action);
        }
    } else {
        squire[action]();
    }
};

document.getElementById('bold').addEventListener('click', changeActive);
document.getElementById('italic').addEventListener('click', changeActive);
document.getElementById('underline').addEventListener('click', changeActive);
document.getElementById('makeOrderedList').addEventListener('click', changeActive);
