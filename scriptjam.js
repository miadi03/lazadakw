        let hours = 1; // Jam
        let minutes = 30; // Menit
        let seconds = 45; // Detik

        function updateTime() {
            if (hours === 0 && minutes === 0 && seconds === 0) {
                clearInterval(interval);
            } else {
                if (seconds === 0) {
                    if (minutes === 0) {
                        hours--;
                        minutes = 59;
                    } else {
                        minutes--;
                    }
                    seconds = 59;
                } else {
                    seconds--;
                }
            }
            
            const timeString = 
                String(hours).padStart(2, '0') + ':' +
                String(minutes).padStart(2, '0') + ':' +
                String(seconds).padStart(2, '0');
            
            document.getElementById('display').innerHTML = timeString;
        }

        updateTime(); // Memperbarui waktu awal
        const interval = setInterval(updateTime, 1000); // Update setiap detik
