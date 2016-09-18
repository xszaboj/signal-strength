(function( $ ) {
 
    $.fn.signal = function(options) {
        var maxVal = 100;
        var settings = $.extend({
            color: "#61c419",
            backgroundColor: "lightgrey",
            numberOfBars: 10,
            exponential: false
        }, options );


        var element = this;
        function createBars(){
            for(var i =0; i< settings.numberOfBars; i++){
                var height = (10*i) + (settings.exponential ?  Math.exp(i*0.5) : (i+10));
                element.append('<div class="bar" style="height:'+height+'px;"></div>');
            }
        }

        function update(value){
            var bars = $(".bar", element);
            bars.removeClass("active").removeClass("inactive");
            var active =  Math.round((value/100)*settings.numberOfBars);
            for(var i = 0; i < bars.length; i++){
                var bar = $(bars[i]);
                setClasses(bar, i < active);
            }
        }

        function setClasses(bar, isActive){
            if(isActive){
                bar.css("background-color",settings.color);
            }
            else{
                bar.css("background-color",settings.backgroundColor);
            }
        }

        createBars();
        return {
            Update: update
        }
 
    };
 
}( jQuery ));