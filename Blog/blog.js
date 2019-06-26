
document.addEventListener("DOMContentLoaded", event =>{
        setUpBlog();
});


 function setUpBlog()
{
    $('#blog').load('/Blog/emptyBlog.html', function(){
        readTextFile('details.json');
   });
}

function readTextFile(file) {
    console.log("reading");
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                        
                var a = JSON.parse(rawFile.responseText);
                for(var key in a)
                {
                    if(key == 'images')
                    {
                        for(var i = 0; i < a[key]; i ++)
                        {
                            $('#' + key).append(makeImage(i + 1));
                            $('.carousel-indicators').append(makeIndicator(i));
                        }
                        continue;
                    }
                    if(key == 'info')
                    {
                        for(var i = 0; i < a[key].length; i ++)
                            $('#' + key).append(makeInfo(a[key][i]));
                        continue;
                    }
                    if(key == 'lesson')
                    {
                        $('#' + key).append(makeInfo(a[key]));
                        continue;
                    }
                    if(a[key].constructor === Array)
                    {
                        for(var i = 0; i < a[key].length; i ++)
                            if(i % 2 == 0)
                                $("#" + key + " .list1 ul").append(makeListItem(a[key][i]))
                            else
                                $("#" + key + " .list2 ul").append(makeListItem(a[key][i]))
                        continue;
                        
                    }
                    var currentText = $('#' + key).text();
                    $('#' + key).text(currentText + " " + a[key]);

                }
            }
        }
    }
    rawFile.send(null);
}

function makeImage(number)
{
    var active = ""
    if (number == 1)
        active = "active";
    return `<div class="carousel-item ${active}">
        <img class="d-block w-100" src="Images/image${number}.jpg" alt="First slide">
                        </div>`;
}

function makeIndicator(number)
{
    var active = ""
    if (number == 0)
        active = "active";
    return `<li data-target="#indicators" data-slide-to="0" class="${active}"></li>`
}

function makeListItem(name)
{
    return `<li>${name}</li>`
}

function makeInfo(data)
{
    var type = 'p';
    var text = data;
    if (data.constructor === Array)
    {
        type = data[0];
        text = data[1];
    }
    return `<${type} class="mt-3">${text}</${type}>`;
}
