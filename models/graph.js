export const chartData = {
    labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    datasets: [{
        data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
        ],
        color: (opacity = 1) => `rgba(0, 149, 255, ${opacity})`
    }, {
        data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
        ],
        color: (opacity = 1) => `rgba(184, 15, 15, ${opacity})`
    }]
}

export const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#ededed',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#ededed',
    backgroundGradientToOpacity: 0,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(174, 174, 174, ${opacity})`,
    style: {
        borderRadius: 16
    }
}