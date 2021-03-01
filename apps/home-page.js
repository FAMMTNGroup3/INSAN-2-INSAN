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
        type: 'pie',

        data: {

            datasets: [{
                data: [2.50, 23.88, 2.21, 11.76, 7.49, 38.25, 6.92, 0.96],

                backgroundColor: ["#f6f6f6", "#c7ffd8", "#98ded9", "#161d6f", "#025955", "#00917c", "#78c4d4", "#dddddd"],
                borderColor: 'black',
            }],

            labels: [
                'Middle East',
                'India',
                'South Asia',
                'Nigeria',
                'Congo',
                'Sub-Saharah Africa',
                'East Asia and Pasific',
                'Europe & Central Asia',

            ]
        },
        options: {}
    });
}
viewChart();
// function viewChart() {

//     let ctx = document.getElementById('myChart').getContext('2d');

//     let chart = new Chart(ctx, {

//       type: 'bar',

//     //   data: {
//     //     labels:'ccc',

//     //     datasets: [
//     //       {
//     //         label: 'product votes',
//     //         backgroundColor: '#1e212d',
//     //         borderColor: '#1e212d',
//     //         data: [5,6,7],
//     //       },

//     //       {
//     //         label: 'Product View',
//     //         backgroundColor: 'red',
//     //         borderColor: 'red',
//     //         data: [5,6,7],
//     //     },
//     //     ]
//     //   },
//       options: {}
//     });
// }
// viewChart();