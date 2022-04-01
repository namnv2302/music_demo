const main = document.querySelector('.main')
const audio = document.getElementById('audio')
const closeBtn = document.querySelector('.close-btn')
const sideBar = document.querySelector('.sidebar')
const modeBtn = document.querySelector('.sidebar__mode-switch')
const modeText = document.querySelector('.sidebar__mode-text')
const playlist = document.querySelector('.playlist_content-list')
const playBtn = document.querySelector('.btn-toggle')
const progress = document.querySelector('.progress')
const nextBtn = document.querySelector('.btn-next')
const prevBtn = document.querySelector('.btn-prev')
const currentTime = document.querySelector('.progress_current-time')
const totalTime = document.querySelector('.progress_total-time')
const randomBtn = document.querySelector('.btn-random')
const repeatBtn = document.querySelector('.btn-repeat')
const volume = document.querySelector('.volume-input')
const songList = document.querySelectorAll('.playlist_content-item')
const unmuteBtn = document.querySelector('.icon-unmute')
const muteBtn = document.querySelector('.icon-mute')
// const totalTimeItem = document.querySelector('.playlist_content-item-time')
// console.log(totalTimeItem)
let arrayRandomIndex = []

const app = {
    currentIndex: 0,
    isDark : false,
    isClose : false,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isMute: false, 
    currentValueVolume: 99,
    songs: [
        {
            id: '01',
            name: 'Ái Nộ',
            duration: '3:20',
            singer: 'Masew, Khôi Vũ',
            path: './assets/music/song1.mp3',
            img: './assets/img/song1.jpg'
        },
        {
            id: '02',
            name: 'Cưới Thôi',
            duration: '3:02',
            singer: 'Masew, Masiu, B Ray',
            path: './assets/music/song2.mp3',
            img: './assets/img/song2.jpg'
        },
        {
            id: '03',
            name: 'Độ Tộc 2',
            duration: '3:21',
            singer: 'Masew, Độ mixi, Phúc Du, Pháo',
            path: './assets/music/song3.mp3',
            img: './assets/img/song3.jpg'
        },
        {
            id: '04',
            name: 'Muộn Rồi Mà Sao Còn',
            duration: '4:35',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/song4.mp3',
            img: './assets/img/song4.jpg'
        },
        {
            id: '05',
            name: 'Đế Vương',
            duration: '4:22',
            singer: 'Đình Dũng, ACV',
            path: './assets/music/song5.mp3',
            img: './assets/img/song5.jpg'
        },
        {
            id: '06',
            name: 'bao tiền một mớ bình yên?',
            duration: '5:00',
            singer: '14 Casper, Bon',
            path: './assets/music/song6.mp3',
            img: './assets/img/song6.jpg'
        },
        {
            id: '07',
            name: 'Don\'t Break My Heart',
            duration: '3:57',
            singer: 'Binz x Touliver',
            path: './assets/music/song7.mp3',
            img: './assets/img/song7.jpg'
        },
        {
            id: '08',
            name: 'Freaky Squad',
            duration: '3:16',
            singer: 'Rhymastic, Binz, Soobin, Touliver',
            path: './assets/music/song8.mp3',
            img: './assets/img/song1.jpg'
        },
        {
            id: '09',
            name: 'Gặp Gỡ,Yêu Đương Và Được Bên Em',
            duration: '3:59',
            singer: 'Phan Mạnh Quỳnh',
            path: './assets/music/song9.mp3',
            img: './assets/img/song2.jpg'
        },
        {
            id: '10',
            name: 'Gỡ Say Bye Là Bye',
            duration: '3:35',
            singer: 'Changg, Lemese',
            path: './assets/music/song10.mp3',
            img: './assets/img/song3.jpg'
        },
        {
            id: '11',
            name: 'Ngày Đầu Tiên',
            duration: '3:28',
            singer: 'Đức Phúc',
            path: './assets/music/song11.mp3',
            img: './assets/img/song4.jpg'
        },
        {
            id: '12',
            name: 'Sài Gòn Đau Lòng Quá',
            duration: '5:08',
            singer: 'Hứa Kim Tuyền,Hoàng Duyên',
            path: './assets/music/song12.mp3',
            img: './assets/img/song5.jpg'
        },
        {
            id: '13',
            name: 'Tôi Đã Quên Thật Rồi',
            duration: '5:17',
            singer: 'Isaac',
            path: './assets/music/song13.mp3',
            img: './assets/img/song6.jpg'
        },
        {
            id: '14',
            name: 'Ước Mơ Của Mẹ',
            duration: '5:00',
            singer: 'CARA',
            path: './assets/music/song14.mp3',
            img: './assets/img/song7.jpg'
        },
        {
            id: '15',
            name: 'Chú Chim Thư Thái',
            duration: '3:16',
            singer: 'B-Wine',
            path: './assets/music/song15.mp3',
            img: './assets/img/song3.jpg'
        },
        {
            id: '16',
            name: 'Chúng Ta Đều Là Người Chiến Thắng',
            duration: '8:12',
            singer: 'RIC,Đạt Dope,Yuno,Tez',
            path: './assets/music/song16.mp3',
            img: './assets/img/song4.jpg'
        },
        {
            id: '17',
            name: 'Đây Là Rap Việt',
            duration: '3:03',
            singer: 'Wowy,Binz,Karik,Suboi',
            path: './assets/music/song17.mp3',
            img: './assets/img/song5.jpg'
        },
        {
            id: '18',
            name: 'Khải Hoàn Khúc',
            duration: '3:03',
            singer: 'B-Wine',
            path: './assets/music/song18.mp3',
            img: './assets/img/song6.jpg'
        },
        {
            id: '19',
            name: 'Sân Khấu Lầm Tưởng',
            duration: '3:52',
            singer: 'Freaky',
            path: './assets/music/song19.mp3',
            img: './assets/img/song7.jpg'
        }
    ],

    render: function() {
        const htmls = this.songs.map(function(song, index) {
            return `
                <li class="playlist_content-item ${index == app.currentIndex ? 'active' : ''}" data-index="${index}">
                    <span class="playlist_content-item-number">${song.id}</span>
                    <span class="playlist_content-item-title">${song.name}</span>
                    <span class="playlist_content-item-artist">${song.singer}</span>
                    <span class="playlist_content-item-time">${song.duration}</span>
                    <span class="playlist_content-item-album">${song.name}</span>
                </li>
            `
        })
        playlist.innerHTML = htmls.join('')
    },

    formatTime: function(number) {
        let minutes = Math.floor(number / 60)
        let seconds = Math.floor(number - minutes * 60)

        if(seconds < 10) {
            seconds = '0' + seconds
        }

        return `${minutes}:${seconds}`
    },

    displayTime: function() {
        const durationTime = this.formatTime(audio.duration)
        currentTime.textContent = this.formatTime(audio.currentTime)
        if(isNaN(audio.duration)) {
            totalTime.textContent = '0:00'
        } else {
            totalTime.textContent = durationTime
        }
    },

    handleEvents: function() {
        const _this = this
        // Bat tat dark mode
        modeBtn.onclick = function() {
            if(_this.isDark) {
                main.classList.remove('dark')
                modeText.innerText = 'Dark Mode'
                _this.isDark = false
            } else {
                main.classList.add('dark')
                modeText.innerText = 'Light Mode'
                _this.isDark = true
            }
        }
        
        // Dong mo sidebar
        closeBtn.onclick = function() {
            if(_this.isClose) {
                sideBar.classList.remove('close')
                _this.isClose = false
            } else {       
                sideBar.classList.add('close')
                _this.isClose = true
            }
        }

        // Xu ly khi click vao play
        playBtn.onclick = function(e) {
            if(_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
                // setInterval(_this.displayTime, 500)
            }
        }
        
        // Khi audio duoc play
        audio.onplay = function() {
            _this.isPlaying = true
            playBtn.classList.add('playing')
            setInterval(function() {
                _this.displayTime()
            }, 500)
        }

        // Khi audio bi pause
        audio.onpause = function() {
            playBtn.classList.remove('playing')
            _this.isPlaying = false
           
        }

        // Xu ly khi next song
        nextBtn.onclick = function(e) {
            if(_this.isRandom) {
                _this.randomSong()
            } else {
                _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }

        // Xu ly khi prev song
        prevBtn.onclick = function(e) {
            if(_this.isRandom) {
                _this.randomSong()
            } else {
                _this.prevSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }

        // Khi tien do bai hat thay doi
        audio.ontimeupdate = function() {
            if(audio.duration) {
                const progressPercent = audio.currentTime / audio.duration * 1000
                progress.value = progressPercent 
            }
        }

        // Xu ly khi tua bai hat
        progress.oninput = function(e) {
            const seekTime = e.target.value * audio.duration / 1000
            audio.currentTime = seekTime 
        }

        // Xu ly khi bai hat ket thuc
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            } else {
                _this.nextSong()
                audio.play()
            }
            _this.render()
            _this.scrollToActiveSong()
        }

        // Xu ly khi random song
        randomBtn.onclick = function() {
            if(_this.isRandom) {
                randomBtn.classList.remove('active')
                _this.isRandom = false
            } else {
                randomBtn.classList.add('active')
                _this.isRandom = true
            }
        }

        // Xu ly khi repeat song
        repeatBtn.onclick = function() {
            if(_this.isRepeat) {
                repeatBtn.classList.remove('active')
                _this.isRepeat = false
            } else {
                repeatBtn.classList.add('active')
                _this.isRepeat = true
            }
        }

        // Xu ly khi click vao song
        playlist.onclick = function(e) {
            if(e.target.closest('.playlist_content-item:not(.active)')) {
                _this.currentIndex = Number(e.target.closest('.playlist_content-item:not(.active)').dataset.index)
                _this.loadCurrentSong()
                _this.render()
                audio.play()
            }
            
        }

        // Xu ly khi thay doi volume
        volume.onchange = function(e) {
            audio.volume = e.target.value / 100
            if(e.target.value == 0) {
                audio.volume = 0   
                document.querySelector('.control_volume').classList.add('active')
            } else {
                audio.volume = e.target.value / 100  
                document.querySelector('.control_volume').classList.remove('active')
            }
        }

        // Xu ly khi click tat tieng
        unmuteBtn.onclick = function() {
            document.querySelector('.control_volume').classList.add('active')
            _this.currentValueVolume = volume.value 
            audio.volume = 0   
            volume.value = 0     
        }

        muteBtn.onclick = function() {
            document.querySelector('.control_volume').classList.remove('active')
            volume.value = _this.currentValueVolume     
            audio.volume = volume.value / 100  
        }
    },

    scrollToActiveSong: function() {
        setTimeout(function() {
            document.querySelector('.playlist_content-item.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            })
        }, 300)
    },

    nextSong: function() {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },

    randomSong: function() {
        let randomIndex;       
        do {
            randomIndex = Math.floor(Math.random() * this.songs.length)
        } while(randomIndex === this.currentIndex || arrayRandomIndex.includes(randomIndex))
        this.currentIndex = randomIndex
        arrayRandomIndex.push(randomIndex)
        if(arrayRandomIndex.length >= this.songs.length) {
            arrayRandomIndex = []
        }
        this.loadCurrentSong()
    },

    // defineProperties: function() {
    //     Object.defineProperty(this, 'currentSong', {
    //         get: function() {
    //             return this.songs[this.currentIndex]
    //         }
    //     })
    // },

    loadCurrentSong: function() {
        audio.src = this.songs[this.currentIndex].path
        
    },

    start: function() {
        // Dinh nghia phuong thuc thuoc tinh
        // this.defineProperties()

        this.displayTime()

        // Lang nghe /  Xu ly cac su kien
        this.handleEvents()

        // Tai thong tin bai hat
        this.loadCurrentSong()

        // Render danh sach bai hat
        this.render()
    }
}

app.start()