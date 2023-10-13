const ctx = document.getElementById('myChart');
const ztx = document.getElementById('myChartTwo');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Notificaciones', 'Acciones Inmediatas', 'Plan de Acción'],
        datasets: [
            {
                label: 'Abierto',
                data: [0, 2, 4],
                borderWidth: 1,
            },
            {
                label: 'En proceso',
                data: [1, 0, 1],
                borderWidth: 1
            },
            {
                label: 'Cerrado en eficacia',
                data: [44, 13, 38],
                borderWidth: 1
            },
            {
                label: 'Total',
                data: [45, 15, 43],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(ztx, {
    type: 'doughnut',
    data:{
        labels: ['Notificaciones', 'Acciones Inmediatas', 'Plan de acción'],
        datasets: [{
            label: 'My First Dataset',
            data: [45, 15, 43],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    },
});

/******/
