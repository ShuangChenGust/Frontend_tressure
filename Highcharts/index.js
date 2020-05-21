document.addEventListener('DOMContentLoaded', () =>{
    Highcharts.chart('container',{
        chart:{
            // type:'column'
            //type:'bar'
            //type:'bar'
            //type:'scatter'
            //type:'area'
            type:'areaspline',
            zoomType:'xy',
        },
        colors:['#1c110a','#e4d6a7','#FFA376','#74FF60','#665FE8'],
        credits:{
            //enabled:false
            text:'my Custom credits',
            href:'http://google.com',
            position:{
                align:'center',
                x:10
            },
            style:{
                fontSize:'15px',
                color:'red'
            }
        },
        tooltip:{
            animation:false,
            backgroundColor:'#333333',
            borderColor:'red',
            borderRadius:'20',
            followPoint:true,
            style:{
                color:'#ffffff'
            },
            formatter(){
                return `<strong> X value - ${this.x} Y value - ${this.y}</strong>`
            }
        },
        title:{
            text:'Fruit chart'
        },
        yAxis:{
            title:{
                text:"fruit eaten"
            },
            lineColor: '#FF0000',
            alternateGridColor: '#FDFFD5'
        },
        xAxis:{
            categories: ['Apples', 'Bananas', 'Oranges'],
            // lineColor: '#FFA376',
            // alternateGridColor: '#FDFFD5'
        },
        series:[
            {
                name:'John',
                data:[1,2,3,40,100,10,1,2,3]
            },
            {
                name:'Mary',
                data:[2,4,3,100,80,30,2,3,2]
            },
            {
                name:'Chen',
                data:[2,1,3,23,30,10,65,2,1]
            }
        ]
    });
});