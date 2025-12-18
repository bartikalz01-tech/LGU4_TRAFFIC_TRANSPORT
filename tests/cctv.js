document.addEventListener('DOMContentLoaded', function() {
            const menuItems = document.querySelectorAll('.menu-item');
            const cctvMarkers = document.querySelectorAll('.cctv-marker');
            const cctvListItems = document.querySelectorAll('.cctv-list-item');
            const toggleListBtn = document.getElementById('toggleListBtn');
            const cctvList = document.getElementById('cctvList');
            
            // Menu interactions
            menuItems.forEach(item => {
                item.addEventListener('click', function() {
                    menuItems.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // CCTV marker interactions
            cctvMarkers.forEach(marker => {
                marker.addEventListener('click', function() {
                    cctvMarkers.forEach(m => m.classList.remove('active'));
                    this.classList.add('active');
                    
                    const cameraName = this.getAttribute('data-camera');
                    updateCCTVFeed(cameraName);
                    
                    // Also update the list selection
                    cctvListItems.forEach(item => {
                        item.classList.remove('active');
                        if (item.textContent.includes(cameraName)) {
                            item.classList.add('active');
                        }
                    });
                });
            });
            
            // CCTV list interactions
            cctvListItems.forEach(item => {
                item.addEventListener('click', function() {
                    cctvListItems.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                    
                    const cameraName = this.querySelector('div > div').textContent;
                    updateCCTVFeed(cameraName);
                    
                    // Also update the marker selection
                    cctvMarkers.forEach(marker => {
                        marker.classList.remove('active');
                        if (marker.getAttribute('data-camera') === cameraName) {
                            marker.classList.add('active');
                        }
                    });
                });
            });
            
            // Toggle CCTV list visibility
            toggleListBtn.addEventListener('click', function() {
                cctvList.classList.toggle('active');
            });
            
            // Function to update CCTV feed (placeholder for real implementation)
            function updateCCTVFeed(cameraName) {
                const feedPlaceholder = document.querySelector('.cctv-placeholder');
                feedPlaceholder.innerHTML = `
                    <i class="fas fa-video"></i>
                    <h3>${cameraName} - Live Feed</h3>
                    <p>Streaming from ${cameraName}</p>
                `;
                
                // In a real application, this would switch to the actual camera feed
                console.log(`Switched to ${cameraName} feed`);
            }
            
            // Simulate live timestamp update
            function updateTimestamp() {
                const now = new Date();
                const timeString = now.toLocaleTimeString();
                document.querySelector('.cctv-info span:last-child').textContent = timeString;
            }
            
            setInterval(updateTimestamp, 1000);
        });