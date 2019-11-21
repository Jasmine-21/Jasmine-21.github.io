$(document).ready(function()
{

    $('#submitWeather1').click(function()
    {
        var id=$("#id").val();
        if(id!='')
        {
            $.ajax(
                {
                    url: 'http://api.openweathermap.org/data/2.5/weather?zip='+ id +"&units=metric"+ "&APPID=40c77ebbd3422eb8c005f37706f94b0c",
                       type: "GET",
                    dataType:"jsonp",
                    success:function(data)
                    {
                    //console.log(data);
                    
                       var widget=show(data);
                       $("#show").html(widget);
                       $("#id").val(' ');
                      
                    }
                }
            );
        }
        else
        {
            $("#error").html('Field cannot be empty');
        }
    });
});

function show(data)
{
    return  "<h3><strong>Name</strong>: "+   data.name+"</h3>"+
    "<h3><strong>Country</strong>: "+   data.sys.country+"</h3>"+
    "<h3><strong>Sunrise</strong>: "+   data.sys.sunrise+"</h3>"+
    "<h3><strong>Sunset</strong>: "+   data.sys.sunset+"</h3>"+
    "<h3><strong>Pressure</strong>: "+   data.main.pressure+"</h3>"+    
    "<h3><strong>Humidity</strong>: "+   data.main.humidity+"</h3>"+   
    "<h3><strong>Wind Speed</strong>: "+   data.wind.speed+"</h3>";   

}


















