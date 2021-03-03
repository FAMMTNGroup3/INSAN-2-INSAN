var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
}

function viewChart() {

    var ctx = document.getElementById('myChart').getContext('2d');

    var myPieChart = new Chart(ctx, {
        type:  "doughnut",
  

        data: {

            datasets: [{
                data: [10.50, 23.88, 8.21, 11.76, 38.25, 6.92],
                backgroundColor: ["#fcd1d1", "#ffaec0", "#d3e0dc", "#8ac4d0","#aee1e1", "#ece2e1"],
                borderColor: "transparent",
            }],
            labels: [
             
                'Middle East',
                'India',
                'South Asia',
                'Nigeria',
                'Sub-Saharah Africa',
                'East Asia and Pasific',
               

            ]
        },
        options: {}
    });
}
viewChart();
