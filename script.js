$(document).ready(function() {

        // Funktion für das Sunburst-Diagramm
        function sunburst(data) {
            const svg = d3.select("#visualizations").append("svg")
                .attr("width", 500)
                .attr("height", 500);
    
            const partition = d3.partition()
                .size([svg.attr("width"), svg.attr("height")]);
    
        
            const root = partition(data);
    
            const arcs = svg.selectAll("g")
                .data(root.descendants())
                .enter().append("g")
                .attr("transform", d => `translate(${d.x0},${d.y0})`);
    

            arcs.append("path")
                .attr("d", d => d3.arc()
                    .innerRadius(d.r0)
                    .outerRadius(d.r1)
                    .startAngle(d.x0)
                    .endAngle(d.x1))
                .attr("fill", d => d.data.color);
    

            arcs.append("text")
                .attr("transform", d => `translate(${d.xMid},${d.yMid})`)
                .attr("dy", ".35em")
                .text(d => d.data.name);
        }

        function barChart(data) {
            const svg = d3.select("#visualizations").append("svg")
                .attr("width", 500)
                .attr("height", 500);
    
            const x = d3.scaleBand()
                .domain(data.map(d => d.name))
                .range([0, 500])
                .padding(0.1);
    
            const y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.value)])
                .range([500, 0]);
    
            svg.append("g")
                .attr("transform", "translate(0," + 500 + ")")
                .call(d3.axisBottom(x));
    
            svg.append("g")
                .call(d3.axisLeft(y));
    
            svg.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", d => x(d.name))
                .attr("y", d => y(d.value))
                .attr("width", x.bandwidth())
                .attr("height", d => 500 - y(d.value))
                .attr("fill", "steelblue");
        }
        function radarChart(data) {

          }
          
          function bubbleChart(data) {
          }
          
          function speakerBarChart(data) {
          }
    
    function getDataFromServer(route, successCallback, errorCallback) {
                $.ajax({
                        type: "GET",
                        url: route,
                        success: successCallback,
                        error: errorCallback
                });  
    }
});
  