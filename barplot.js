
    
       
        const data = {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
                {
                    data: [35000, 39000, 48000, 31000, 38000, 29000, 42000],
                    backgroundColor: 'rgb(188, 133, 243)',
                    borderColor: 'rgb(188, 133, 243)',
                    borderWidth: 0.1,
                    borderRadius: 10,
                    barThickness: 10
                },
                {
                    data: [29500, 32000, 38000, 29000, 15000, 14000, 38000],
                    backgroundColor: '#19d0a6',
                    borderColor: '#19d0a6',
                    borderWidth: 0.1,
                    borderRadius: 10,
                    barThickness: 10  
                }
            ]
        };

        
        const config = {
            type: 'bar',
            data: data,
            options: {
                
                scales: {
                   
                    y: {
                        
                        beginAtZero: true
                    }
                },
                  
                plugins: {
                    legend: {
                        display: false  // Hides the legend
                    }
                }
            }
        };

        // Render the chart
        const myBarChart = new Chart(
            document.getElementById('myBarChart'),
            config
        );
    
