$(document).ready(function()
{

    $('#submitWeather2').click(function()
    {
        var lat=$("#lat").val();
        if(lat!='')
        {
            $.ajax(
                {
                    url: 'http://api.openweathermap.org/data/2.5/weather?id='+lat+"&units=metric"+"&APPID=40c77ebbd3422eb8c005f37706f94b0c",
                       type: "GET",
                    dataType:"jsonp",
                    success:function(data)
                    {
                   // console.log(data);
                    
                       var widget=show(data);
                       $("#show").html(widget);
                       $("#lat").val(' ');
                      
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
    return "<h3><strong>Name</strong>: "+   data.name+"</h3>"+
    "<h3><strong>Country</strong>: "+   data.sys.country+"</h3>"+
    "<h3><strong>type</strong>: "+   data.sys.type+"</h3>"+
    "<h3><strong>message</strong>: "+   data.sys.message+"</h3>"+
    "<h3><strong>Pressure</strong>: "+   data.timezone+"</h3>"+    
    "<h3><strong>Humidity</strong>: "+   data.main.humidity+"</h3>"+   
    "<h3><strong>Wind Speed</strong>: "+   data.clouds.all+"</h3>";   


}

















