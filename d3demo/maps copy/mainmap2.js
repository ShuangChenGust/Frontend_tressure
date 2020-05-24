//weight and height
var chart_height = 600;
var chart_width = 800;

// var color = d3.scaleQuantize().range([  'rgb(255,245,240)','rgb(254,224,210)','rgb(252,187,161)',
//                                         'rgb(252,146,114)','rgb(251,106,74)','rgb(239,59,44)',
//                                         'rgb(203,24,29)','rgb(165,15,21)','rgb(103,0,13)']);

var color = d3.scaleQuantize().range([ 'rgb(94, 16, 249)','rgb(0, 156, 255)','rgb(0, 255, 164)','rgb(63, 255, 0)','rgb(214, 245, 0)','rgb(255, 166, 0)','rgb(255, 97, 0)','rgb(200, 65, 65)']);

//Projection

var projection = d3.geoAlbersUsa()
                    .scale([chart_width])
                    .translate([chart_width / 2, chart_height / 2 ]);
                    // .translate([0, 100]);

var path = d3.geoPath(projection);
            // .projection(projection);


//create svg
var svg = d3.select('#chart')
            .append("svg")
            .attr('width', chart_width)
            .attr('height', chart_height);
// svg.append("rect")
// .attr("class", "background")
// .attr("width", width)
// .attr("height", height);


// var g = svg.append("g")
//     .attr("transform", "translate(" + chart_width / 2 + "," + chart_height / 2 + ")")
//     .append("g")
//     .attr("id", "states");

//Data
d3.json('zombie-attacks.json').then(function(zombie_data){
    // color.domain([
    //     d3.min(zombie_data, function(d){
    //         return d.num;
    //     }),
    //     d3.max(zombie_data, function(d){
    //         return d.num;
    //     })
    // ]);
    color.domain [0, 1, 10, 100, 1000, 10000, 100000, 1000000];
d3.json('us.json').then(function(us_data){
    us_data.features.forEach(function(us_e, us_i){
        zombie_data.forEach(function(z_e,z_i){
            if(us_e.properties.name !== z_e.state){
                return null;
            }
            us_data.features[us_i].properties.num = parseFloat(z_e.num)
        });
    });
    console.log(us_data)
    
    svg.selectAll('path')
        .data(us_data.features)
        .enter()
        .append('path')
        .attr('d',path)
        .attr('fill', function(d){
            var num = d.properties.num;
            return num ? color(num) : '#ddd';
        })
        .attr('stroke', '#fff')
        .attr('stroke-width',1)

        draw_cities();
    })
})

function draw_cities(){
    //new version have to use promise
    d3.json('us-cities.json').then(function(city_data){
        svg.selectAll('circle')
           .data(city_data)
           .enter()
           //staging add to tem memory
           .append('circle')
           .style('fill', '#9d497a')
           .style('opacity', 0.5)
           .attr('cx', function(d){
               console.log(d)
               return projection([d.lon, d.lat])[0]
           })
           .attr('cy', function(d){
               return projection([d.lon, d.lat])[1]
           })
           .attr('r', function(d){
               return Math.sqrt(parseInt(d.population) * 0.00005);
           })
           .append('title')
           .text(function(d){
               return d.city + ": "+ d.population;
           });
    });
}

// https://stackoverflow.com/questions/13897534/add-names-of-the-states-to-a-map-in-d3-js
// https://github.com/d3/d3-geo