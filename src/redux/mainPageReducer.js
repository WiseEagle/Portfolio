
let defaultState = [
        {id: 1, blockName: "Мої навички", content: "HTML, CSS, jQuery, wordpress, joomla, modx, cs-cart, react"},
        {id: 2, blockName: "Моє портфоліо", content: "сайт1, сайт2, сайт3"},
        {
            id: 3,
            blockName: "Скільки я бажаю",
            content: "<p>мінімальна робота 500гривень</p><p>кодування, налаштовування, тощо 1 година 240грн</p><p>верстання 1 година 180грн</p> <p>верстання із графічними єфектами 1година 240грн</p>"
        }
    ]
;


let mainPageReducer = (state = defaultState, action) => {
    return state;
}

export default mainPageReducer;