function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}

function itemDone(e) {

    var target, elParent, elGrandparent;
    target = getTarget(e);

    /*
    The book used the following code - but it had two shortcomings
    - Clicking between list items would remove the whole list
    - Clicking on italic text would remove the link - not the list item

    elParent = target.parentNode;
    elGrandparent = target.parentNode.parentNode;
    elGrandparent = removeChild(elParent);

    The next 10 lines improve that example
     */
    if (target.nodeName.toLowerCase() == "a") {
        elListItem = target.parentNode;
        elList = elListItem.parentNode;
        elList.removeChild(elListItem);
    }
    if ( target.nodeName.toLowerCase() == "em") {
        elListItem = target.parentNode.parentNode
        elList = elListItem.parentNode;
        elList.removeChild(elListItem);
    }
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

var el = document.getElementById('shoppingList');
if (el.addEventListener) {
    el.addEventListener('click', function (e) {
        itemDone(e);
    }, false);
} else {
    el.attachEvent('onclick', function (e) {
        itemDone(e);
    });
}