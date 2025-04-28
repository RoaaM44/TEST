

    // 🎯 ربط الأيقونات
    const searchIcon = document.querySelector('.search-icon');
    const cartIcon = document.querySelector('.cart-icon');
    const signInButton = document.querySelector('.btn-sign-in');

    searchIcon.addEventListener('click', () => {
        openBox('searchBox');
    });

    cartIcon.addEventListener('click', () => {
        openBox('cartBox');
    });

    signInButton.addEventListener('click', () => {
        openBox('loginBox');
    });

    // 📦 زر تسجيل الدخول
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', () => {
        const username = document.querySelector('#loginBox input[type="text"]').value;
        const password = document.querySelector('#loginBox input[type="password"]').value;

        if (username === "" || password === "") {
            alert("Please fill in all fields! 🫣");
        } else {
            alert(`Welcome, ${username}! 🎉 You are now signed in.`);
            closeBox('loginBox');
            document.querySelector('#loginBox input[type="text"]').value = "";
            document.querySelector('#loginBox input[type="password"]').value = "";
        }
    });

    // زر "Watch Video"
    const watchVideoButton = document.querySelector('.play-viedo-btn');
    watchVideoButton.addEventListener('click', () => {
        openBox('videoBox');
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.play();
    });

    // 📤 دوال فتح وغلق النوافذ
    function openBox(id) {
        closeAllBoxes();
        const box = document.getElementById(id);
        if (box) {
            box.style.display = 'block';
        }
    }

    function closeBox(id) {
        const box = document.getElementById(id);
        if (box) {
            box.style.display = 'none';
            if (id === 'videoBox') {
                const videoPlayer = document.getElementById('videoPlayer');
                videoPlayer.pause();
                videoPlayer.currentTime = 0; // يرجع الفيديو للبداية لو تبي
            }
        }
    }

    function closeAllBoxes() {
        const boxes = document.querySelectorAll('.popup-box');
        boxes.forEach(box => box.style.display = 'none');
    }

    // عشان closeBox تشتغل من onclick
    window.closeBox = closeBox;
