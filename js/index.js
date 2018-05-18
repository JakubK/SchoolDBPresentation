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
function IncrementAnimation(elements)
{       
        if(!completedRowCalulations)
        {
            i = 0;
            var count = elements.length;
            var element = elements[i];
            var targetVal = element.textContent;
            for(var j = 0;j < elements.length;j++)
            {
                elements[j].textContent = "0";
            }
        }
        completedRowCalulations = true;
        if(i == 0)
        {
        var interval = setInterval(function()
        {
            if(completedRowCalulations && i == count)
                clearInterval(interval);

            element.textContent = parseInt(element.textContent) + 1;
            if(parseInt(element.textContent) >= targetVal)
            {
                i++;
                if(i >= count)
                {
                    clearInterval(interval);
                }
                else //switch to next element
                {
                    element = elements[i];
                    targetVal = elementMap.get(i);
                    element.textContent = "0";
                }
            }
        },10,element,targetVal);
    }
}




