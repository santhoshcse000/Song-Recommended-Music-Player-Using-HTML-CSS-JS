document.getElementById('angryBtn').addEventListener('click', function() {
    showRecommendations('angry');
});

document.getElementById('sadBtn').addEventListener('click', function() {
    showRecommendations('sad');
});

document.getElementById('romanceBtn').addEventListener('click', function() {
    showRecommendations('romance');
});

document.getElementById('fightBtn').addEventListener('click', function() {
    showRecommendations('fight');
});



function showRecommendations(emotion) {
    const musicList = document.getElementById('musicList');
    musicList.innerHTML = '';

    const recommendations = musicData[emotion] || [];

    if (recommendations.length > 0) {
        recommendations.forEach(song => {
            const listItem = document.createElement('li');
            listItem.textContent = song;
            musicList.appendChild(listItem);
        });
    } else {
        musicList.innerHTML = '<li>No recommendations available.</li>';
    }
}
