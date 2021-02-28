

function viewChart() {

    var ctx = document.getElementById('myChart').getContext('2d');

        var myPieChart = new Chart(ctx, {
        type: 'pie',

        data : {

            datasets: [{
                data: [10, 20, 30],
                
                backgroundColor: ['green', "blue","red"],
                borderColor: 'black',
            }],

            labels: [
                'Food-Hunger',
                'Refugees',
                'Covid-19-Infected People',
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