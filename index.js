const songs = [
    {
        "id": "1",
        "title": "Ảo Ảnh",
        "artist": "一颗狼星许篮心",
        "artwork": "http://img.youtube.com/vi/MwIOrQ6blKE/sddefault.jpg",
        "url": "https://firebasestorage.googleapis.com/v0/b/musicapp-nnk.appspot.com/o/songs%2Fy2mate.com%20-%20Vietsub%20B%E1%BA%A3n%20n%E1%BB%AF%20full%20%E1%BA%A2o%20%E1%BA%A3nh%20%20Nh%E1%BA%A5t%20Kho%E1%BA%A3%20Lang%20Tinh%20H%E1%BB%A9a%20Lam%20T%C3%A2m%20%20%E6%B5%B7%E5%B8%82%E8%9C%83%E6%A5%BC%20%20%E4%B8%80%E9%A2%97%E7%8B%BC%E6%98%9F%E8%AE%B8%E7%AF%AE%E5%BF%83_320kbps.mp3?alt=media&token=05c88dd5-3e00-46b1-a68d-b2a1e4028a3c",
        "category": "1"
    },
    {
        "id": "2",
        "title": "Buông Đôi Tay Nhau Ra",
        "artist": "MTP",
        "artwork": "https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fbuongdoitaynhaura.jpg?alt=media&token=408d7758-98ce-44a9-ba06-85168e810214",
        "url": "https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FBuongDoiTayNhauRa.mp3?alt=media&token=176b65b3-9b78-4d2d-93d3-a438838157aa",
        "category": "1"
    },
    {
        "id": "3",
        "title": "Dynasty",
        "artist": "MIIA",
        "artwork": "http://img.youtube.com/vi/5-ZiKXrnvog/sddefault.jpg",
        "url": "https://firebasestorage.googleapis.com/v0/b/musicapp-nnk.appspot.com/o/songs%2Fy2mate.com%20-%20Dynasty%20Official%20Music%20Video%20%20MIIA_320kbps.mp3?alt=media&token=e76b6d51-4b03-4026-b431-dc915509bc4f",
        "category": "1"
    },
    {
        "id": "4",
        "title": "So Far Away",
        "artist": "Martin Garrix",
        "artwork": "https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2FSoFarAway.png?alt=media&token=76d1078b-02b3-4c66-9ecb-fe9fbbc14ae1",
        "url": "https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FSoFarAway-MartinGarrixDavidGuettaJamieScottRomyDya-5298615.mp3?alt=media&token=c33dd135-b0e9-4961-a728-3ff3e8f1d3e4",
        "category": "2"
    },
    {
        "id": "5",
        "title": "Phong Dạ Hành",
        "artist": "蒋雪儿",
        "artwork": "http://img.youtube.com/vi/UwF4Igcc91s/sddefault.jpg",
        "url": "https://firebasestorage.googleapis.com/v0/b/musicapp-nnk.appspot.com/o/songs%2Fy2mate.com%20-%20Vietsub%20Phong%20D%E1%BA%A1%20H%C3%A0nh%20%20T%C6%B0%E1%BB%9Fng%20Tuy%E1%BA%BFt%20Nhi%20%20%E9%A3%8E%E5%A4%9C%E8%A1%8C%20%20%E8%92%8B%E9%9B%AA%E5%84%BF_320kbps.mp3?alt=media&token=3cfb68d0-4281-43c6-a007-fdfa54f7d50c",
        "category": "2"
    },
    {
        "id": "6",
        "title": "Nụ Hồng Mong Manh",
        "artist": "Bích Phương",
        "artwork": "https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fnuhongmongmanh.jpg?alt=media&token=1ef25309-2a2b-4efe-bec4-a40674ae8a3c",
        "url": "https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FN%E1%BB%A5%20H%E1%BB%93ng%20Mong%20Manh.mp3?alt=media&token=324cd97f-4dc0-49d7-87fd-f02bbb0b5d69",
        "category": "4"
    },
    {
        "id": "7",
        "title": "Em Của Ngày Hôm Qua",
        "artist": "MTP",
        "artwork": "https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2FEm_c%E1%BB%A7a_ng%C3%A0y_h%C3%B4m_qua.png?alt=media&token=84ee4a3d-34c3-44bf-9a00-089ec3e87dc6",
        "url": "https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FEmCuaNgayHomQua.mp3?alt=media&token=6cb1c7bd-8434-4bc7-9988-7f3eca1e28f4",
        "category": "1"
    },
    {
        "id": "8",
        "title": "Thuỷ Triều",
        "artist": "傅梦彤",
        "artwork": "http://img.youtube.com/vi/QXKwXb1NZ6I/sddefault.jpg",
        "url": "https://firebasestorage.googleapis.com/v0/b/musicapp-nnk.appspot.com/o/songs%2Fy2mate.com%20-%20Vietsub%20Th%E1%BB%A7y%20Tri%E1%BB%81u%20remix%20%20Ph%C3%B3%20M%E1%BB%99ng%20%C4%90%E1%BB%93ng%20%20%E6%BD%AE%E6%B1%90%20DJ%20%20%20%E5%82%85%E6%A2%A6%E5%BD%A4_320kbps.mp3?alt=media&token=9ed14179-37f3-4800-a16a-9eb7e112a930",
        "category": "1"
    },
    {
        "id": "9",
        "title": "Lofi Acoustic",
        "artist": "Tất Cả Nghệ Sĩ",
        "artwork": "http://img.youtube.com/vi/PhoxHtER6jU/sddefault.jpg",
        "url": "https://firebasestorage.googleapis.com/v0/b/musicapp-nnk.appspot.com/o/songs%2Fy2mate.com%20-%20Nh%E1%BB%AFng%20B%C3%A0i%20H%C3%A1t%20Lofi%20Acoustic%20Ti%E1%BA%BFng%20Anh%20C%E1%BB%B1c%20Chill%20Hay%20Nh%E1%BA%A5t%20%20Nh%E1%BA%A1c%20Lofi%20Chill%20Tik%20Tok%20Nh%E1%BA%B9%20Nh%C3%A0ng%20_320kbps.mp3?alt=media&token=1f36ccd1-fa08-4d87-b722-c028634811ff",
        "category": "1"
    },
    {
        "id": "10",
        "title": "Em Hát Ai Nghe",
        "artist": "Violin",
        "artwork": "http://img.youtube.com/vi/SftV13acfjs/sddefault.jpg",
        "url": "https://firebasestorage.googleapis.com/v0/b/musicapp-nnk.appspot.com/o/songs%2Fy2mate.com%20-%20Em%20H%C3%A1t%20Ai%20Nghe%20%20VD%20%202Ao%20Muzic%20%20Nh%C6%B0ng%20t%C3%B4i%20cho%20nhi%E1%BB%81u%20violin%20h%C6%A1n%20%20XoX%20Music_320kbps.mp3?alt=media&token=f1f8c5a7-3483-40d9-840e-2b76c112861e",
        "category": "1"
    },
    {
        "id": "11",
        "title": "Không Có Em Anh Vẫn Còn Mặt Trời",
        "artist": "黄霄云",
        "artwork": "http://img.youtube.com/vi/5pO-Rrkw0Mc/sddefault.jpg",
        "url": "https://firebasestorage.googleapis.com/v0/b/musicapp-nnk.appspot.com/o/songs%2Fy2mate.com%20-%20Rearranged%20%E6%B2%A1%E4%BA%86%E6%88%91%E4%BD%A0%E4%BE%9D%E7%84%B6%E6%8B%A5%E6%9C%89%E5%A4%AA%E9%98%B3%20l%20Kh%C3%B4ng%20C%C3%B3%20Em%20Anh%20V%E1%BA%ABn%20C%C3%B2n%20M%E1%BA%B7t%20Tr%E1%BB%9Di%20%20Ho%C3%A0ng%20Ti%C3%AAu%20V%C3%A2n%20l%20%E9%BB%84%E9%9C%84%E4%BA%91%20Ghost%20Huang_320kbps.mp3?alt=media&token=89362986-392f-4278-8b51-567bc15bb2ba",
        "category": "1"
    },
]

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('.progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')

var isPlaying = false
var isRandom = false
var isRepeat = false

var currentIndex = 0

function start() {
    showPlaylist()
    theSongIsPlaying()
    handleMusicPlayback()
    timer()
    changeTime()
    nextSong()
    prevSong()
    randomSong()
    repeatSong()
    clickSong()
}
start()

//Render danh sách bài hát
function showPlaylist() {
    const htmls = songs.map((song, index) => {
        return `<div class="song${index === currentIndex ? ' active' : ''}" data-index=${index}>
            <div class="thumb"
                style="background-image: url('${song.artwork}')">
            </div>
            <div class="body">
                <h3 class="title">${song.title}</h3>
                <p class="author">${song.artist}</p>
            </div>
            <div class="option">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>`
    })
    playlist.innerHTML = htmls.join('')
}

//Render bài hát đang phát đầu tiên
function theSongIsPlaying() {
    var currentSong = songs[currentIndex]
    heading.textContent = currentSong.title
    cdThumb.style.backgroundImage = `url('${currentSong.artwork}')`
    audio.src = currentSong.url
}

//Xử lí phát nhạc + quay đĩa nhạc
function handleMusicPlayback() {

    //Xử lí quay đĩa nhạc
    const cdThumbAnimate = cdThumb.animate([
        { transform: 'rotate(360deg)' }
    ], {
        duration: 10000,
        iterations: Infinity
    })
    cdThumbAnimate.pause()

    // Xử lí phát nhạc
    playBtn.onclick = function () {
        isPlaying ? audio.pause() : audio.play()
    }

    audio.onplay = function () {
        isPlaying = true
        player.classList.add('playing')
        cdThumbAnimate.play()
        showPlaylist()
    }
    audio.onpause = function () {
        isPlaying = false
        player.classList.remove('playing')
        cdThumbAnimate.pause()
    }
}

//Xử lí thời gian phát nhạc
function timer() {
    audio.ontimeupdate = function () {
        progress.value = Math.floor(audio.currentTime) * 100 / audio.duration
    }
}

//Xử lí khi tua bài hát dựa trên số giây thay đổi
function changeTime() {
    progress.oninput = function (e) {
        let desiredTime = e.target.value
        audio.currentTime = audio.duration / 100 * desiredTime
    }
}

//Tiến tới 1 bài hát
function nextSong() {
    nextBtn.onclick = function () {
        if (isRandom) {
            playRandomSong()
        }
        else {
            currentIndex++
            currentIndex >= songs.length ? currentIndex = 0 : false
        }
        theSongIsPlaying()
        audio.play()
        scrollToActiveSong()
    }
}

//Lùi về 1 bài hát
function prevSong() {
    prevBtn.onclick = function () {
        if (isRandom) {
            playRandomSong()
        }
        else {
            currentIndex--
            currentIndex < 0 ? currentIndex = songs.length - 1 : false
        }
        theSongIsPlaying()
        audio.play()
        scrollToActiveSong()
    }
}

// Đổi màu khi Random một bài hát
function randomSong() {
    randomBtn.onclick = function () {
        //     if (isRandom) {
        //         isRandom = false
        //         randomBtn.classList.remove('active')
        //     }
        //     else {
        //         isRandom = true
        //         randomBtn.classList.add('active')
        //     }

        isRandom = !isRandom
        randomBtn.classList.toggle('active', isRandom)
    }
}

// Random một bài hát
function playRandomSong() {
    let newIndex
    do {
        newIndex = Math.floor(Math.random() * songs.length)
    }
    while (newIndex === songs.currentIndex)
    currentIndex = newIndex
}

//Lặp lại một bài hát
function repeatSong() {
    repeatBtn.onclick = function () {
        if (isRepeat) {
            isRepeat = false
            repeatBtn.classList.remove('active')
        }
        else {
            isRepeat = true
            repeatBtn.classList.add('active')
            audio.loop = true
            audio.play()
        }

        // isRepeat = !isRepeat
        // repeatBtn.classList.toggle('active', isRepeat)

        // audio.onended = function(){
        //     isRepeat ? audio.play() : nextBtn.click()
        // }
    }
}

//Di chuyển khung hình theo bài hát đang phát
function scrollToActiveSong() {
    setTimeout(() => {
        $('.song.active').scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    }, 500)
}

function clickSong() {
    playlist.onclick = function (e) {
        //Không tìm được chính nó, nó sẽ trả về thằng cha hoặc thằng con của nó: e.target.closest(element)
        let notSongActive = e.target.closest('.song:not(.active)')
        let notSongOption = e.target.closest('.option')
        if (notSongActive || notSongOption) {
            if (notSongActive) {
                // console.log(notSongActive.getAttribute('data-index'))
                // console.log(notSongActive.dataset.index)
                currentIndex = Number(notSongActive.dataset.index)
                theSongIsPlaying()
                audio.play()
            }
            if (notSongOption) {

            }
        }
    }
}
