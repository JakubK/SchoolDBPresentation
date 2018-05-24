var TotalRecords = 0;
var elementMap = new Map();
var textNodes = document.querySelectorAll("#data-numbers > p >span");
for(var j = 0;j < textNodes.length;j++)
{
    elementMap.set(j, textNodes[j].textContent);
    TotalRecords += parseInt(textNodes[j].textContent);
}

var completedRowCalulations = false;
var i;
var textElements;
var incrementer = 0;
var done = false;
var targetVal;
function IncrementAnimation(elements)
{
    if (!done) {

        textElements = elements;
        if (!completedRowCalulations) {
            i = 0;
            var count = elements.length;
            var element = elements[i];
            targetVal = element.textContent;

            for (var j = 0; j < elements.length; j++) {
                elements[j].textContent = "0";
            }
        }
        completedRowCalulations = true;
        incrementer = targetVal.length * 10;
        if (i == 0) {
            var interval = setInterval(function () {
                if (completedRowCalulations && i == count)
                    clearInterval(interval);

                element.textContent = parseInt(element.textContent) + incrementer;
                if (parseInt(element.textContent) >= targetVal) {
                    element.textContent = targetVal;

                    i++;
                    if (i >= count) {
                        clearInterval(interval);
                        done = true;
                    }
                    else //switch to next element
                    {
                        element = elements[i];
                        targetVal = elementMap.get(i);
                        element.textContent = "0";
                        incrementer = targetVal.length * 10;
                    }
                }
            }, 1, element, targetVal);
        }
    }
}
