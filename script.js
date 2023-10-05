
    function zoomOut() {
        document.getElementById('certificateContainer').classList.remove('zoomed');
        document.querySelector('.zoom-out-icon').style.display = 'none';
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('.zoom-out-icon').style.display = 'none';
        document.getElementById('certificateContainer').addEventListener('click', function () {
            this.classList.add('zoomed');
            document.querySelector('.zoom-out-icon').style.display = 'block';
        });
    });

