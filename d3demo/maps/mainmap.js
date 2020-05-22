//weight and height
var chart_height = 600;
var chart_width = 800;

var color = d3.scaleQuantize().range([  'rgb(255,245,240)','rgb(254,224,210)','rgb(252,187,161)',
                                        'rgb(252,146,114)','rgb(251,106,74)','rgb(239,59,44)',
                                        'rgb(203,24,29)','rgb(165,15,21)','rgb(103,0,13)']);

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
    color.domain([
        d3.min(zombie_data, function(d){
            return d.num;
        }),
        d3.max(zombie_data, function(d){
            return d.num;
        })
    ]);
d3.json('us.json').then(function(us_data){
    us_data.features.forEach(function(us_e, us_i){
        zombie_data.forEach(function(z_e,z_i){
            if(us_e.properties.name !== z_e.state){
                return null;
            }
            us_data.features[us_i].properties.num = parseFloat(z_e.num)
        });
    });
    // console.log(us_data)
    
    svg.selectAll('path')
        .data(us_data.features)
        .enter()
        .append('path')
        .attr('d',path)
        .attr('fill', function(d){
            var num = d.properties.num;
            return num ? color(num) : '#ddd';
        })
        .text(function(d){
            return d.properties.name;
        })
        .attr('stroke', '#fff')
        .attr('stroke-width',1)
        .attr("class", "country-label")
        .append("text")
        // .attr("transform", function(d) { console.log("d", d); return "translate(" + path.centroid(d) + ")"; })
        // .text(function(d) { return d.properties.name; })
        .attr("dy", function (d) {
            return "0.35em";
        })
        .style('fill', 'black');
    svg.selectAll("text")
        .data(us_data.features)
        .enter()
        .append("text")
        .text(function(d){
            return d.properties.name;
        })
        .attr("x", function(d){
            return path.centroid(d)[0];
        })
        .attr("y", function(d){
            return  path.centroid(d)[1];
        })
        .attr("text-anchor","middle")
        .attr('font-size','6pt')
        .style('fill', 'green');
        })
})

// https://stackoverflow.com/questions/13897534/add-names-of-the-states-to-a-map-in-d3-js