const main = document.getElementById('main');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const activeVideos = {};

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        const videoId = e.target.dataset.videoId;
        
        if (e.target.checked) {
            // Add video
            const videoContainer = document.createElement('div');
            videoContainer.className = 'video-container';
            videoContainer.innerHTML = `
                <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                        allow="autoplay; encrypted-media" 
                        allowfullscreen></iframe>
            `;

            activeVideos[videoId] = videoContainer;
            main.appendChild(videoContainer);
        } else {
            // Remove video
            if (activeVideos[videoId]) {
                main.removeChild(activeVideos[videoId]);
                delete activeVideos[videoId];
            }
        }
    });
});

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("sidebar").style.margin = "0px";
    document.getElementById("openbtn").style.display = "none";
    document.getElementById("closebtn").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("sidebar").style.marginLeft = "-250px";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("openbtn").style.display = "block";
    document.getElementById("closebtn").style.display = "none";
  }

// Clear checkboxes on page load
window.addEventListener('load', () => {
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
});

function toggleStreams() {
    var x = document.getElementById("stream-list");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("arrowStreams").style.transform = "rotate(0deg)";
    } else {
      x.style.display = "block";
      document.getElementById("arrowStreams").style.transform = "rotate(90deg)";
    }
  }

  function toggleTV() {
    var x = document.getElementById("tv-list");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("arrowTV").style.transform = "rotate(0deg)";
      } else {
        x.style.display = "block";
        document.getElementById("arrowTV").style.transform = "rotate(90deg)";
    }
  }