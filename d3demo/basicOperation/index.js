// var el = d3.select('body')
//             .append('p')
//             .text('helloworld')
//             .classed('foo',true)
//             .classed('bar', true)
//             // .attr('class', 'foo')
//             // .attr('class', 'bar')
//             .style('font-style', 'italic')
// // console.log(el)

// var dataset = [10,20,30,40,50]
// d3.select('body')
//     .selectAll('p')
//     .data(dataset)
//     .enter()
//     .append('p')
//     .text(function(d){
//         return 'hello world!!:::'+d
//     })
//     .style('color', function(d){
//         if(d>25){return 'red'}
//         else {return 'blue'}
//     })
//     .attr('class', function(d){
//         if (d>25) {return 'foo'}
//         else {return null}
//     })
//     .class('bar', function(d){
//         return d < 25
//     })

//configure csv file;
d3.csv('data.csv').then(function(data){
    console.log(data)
    for(var i=0;i<data.length;i++){
        console.log(data[i].name, ' ', data[i].age)
    }
    // console.log(data.columns[1])

    // generate(data.columns)
})

// function generate(dataset){
//     d3.select('body')
//         .selectAll('p')
//         .data(dataset)
//         .enter()
//         .append('p')
//         .text(function(d){
//             return 'hello world!!:::'+d
//         })
// }

// //configure json file;
// d3.csv('data.json').then(function(data){
//     console.log(data.columns[0])
//     console.log(data.columns[1])

//     generate(data.columns)
// })

// function generate(dataset){
//     d3.select('body')
//         .selectAll('p')
//         .data(dataset)
//         .enter()
//         .append('p')
//         .text(function(d){
//             return 'hello world!!:::'+d
//         })
// }