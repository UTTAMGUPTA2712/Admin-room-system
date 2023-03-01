import './Book.css'
import { initializeApp } from "firebase/app";
import logo from './Orchards_Inn_Logo.png';
import { getDatabase, ref, set } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDGS4ArtRCE62LiyLKbgRv1McjxstN7VMY",
    authDomain: "hotelroommanagement-20a4a.firebaseapp.com",
    projectId: "hotelroommanagement-20a4a",  
    databaseURL:"https://hotelroommanagement-20a4a.firebaseio.com",
    storageBucket: "hotelroommanagement-20a4a.appspot.com",
    messagingSenderId: "15514689959",
    appId: "1:15514689959:web:7595e5a87f326c670a9682"
};
initializeApp(firebaseConfig);
getDatabase();
const Book = () => {
    let Hotels = [
        {
            name: "Room 1",
            price: "50",
            image: "https://imgs.search.brave.com/LI--LCiINx9aeOWdYRlgR_0u7S6qTLKH-8rShi2IzK0/rs:fit:300:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JRi5B/QnJhQUozU2p3TXZj/M2pzSllFdmR3JnBp/ZD1BcGk",
        },
        {
            name: "Room 2",
            price: "80",
            image: "https://imgs.search.brave.com/ZVGlDCECPSaIk61WpSMxjtVRkT_3vYSTAlkNf4z8Ekw/rs:fit:474:320:1/g:ce/aHR0cHM6Ly9wYXNz/aW9uZGVzaWduLWxi/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wMi9Ib3Rl/bC1Sb29tLUNhcnBl/dHMuanBn",
        },

        {
            name: "Room 3",
            price: "100",
            image: "https://imgs.search.brave.com/Z9qB0tg--1V6mqZZTeo_gFgK5aA7ufWrQoUVVQ965mM/rs:fit:300:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JRi5M/czE4VW9VbzY3YlVr/TTFUNHdhWnZBJnBp/ZD1BcGk",
        },

    ]
    const bookHotel1 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[0].image;
        nameTarget.innerHTML = Hotels[0].name;
        priceTarget.innerHTML = '$' + Hotels[0].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[0].image,
            HotelName: Hotels[0].name,
            HotelPrice: '$' + Hotels[0].price,
            });
        }

    }
    const bookHotel2 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[1].image;
        nameTarget.innerHTML = Hotels[1].name;
        priceTarget.innerHTML = '$' + Hotels[1].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[1].image,
            HotelName: Hotels[1].name,
            HotelPrice: '$' + Hotels[1].price,
            });
        }
    }
    const bookHotel3 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[2].image;
        nameTarget.innerHTML = Hotels[2].name;
        priceTarget.innerHTML = '$' + Hotels[2].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[2].image,
            HotelName: Hotels[2].name,
            HotelPrice: '$' + Hotels[2].price,
            });
        }
    }
    const request = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const request = document.querySelector(".request");
        const cards = document.querySelector(".cards_box");
        request.style.display = "none";
        cards.style.display = "block";
        alert("Your request has been sent");
        
        imageTarget.src = '';
        nameTarget.innerHTML = '';
        priceTarget.innerHTML = '';

    }
    return (
        <div className="box">
            <div className="content">
                <div className="text">Find best hotel</div>
                <div className="target">
                    <div className="trgt">
                    <div className="card">
                        <img src={logo} id='targetImage' alt="" />
                         <div className="hotel_name" id='targetName'></div>
                        <div className="price" id='targetPrice'></div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards_box">
                        <div className="card" onClick={bookHotel1}>
                            <img src={Hotels[0].image} alt="hotel1" />
                            <div className="hotel_name">{Hotels[0].name}</div>
                            <div className="price">{'$' + Hotels[0].price+"/Hr"}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel2}>
                            <img src={Hotels[1].image} alt="hotel2" />
                            <div className="hotel_name">{Hotels[1].name}</div>
                            <div className="price">{'$' + Hotels[1].price+"/Hr"}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel3}>
                            <img src={Hotels[2].image} alt="hotel3" />
                            <div className="hotel_name">{Hotels[2].name}</div>
                            <div className="price">{'$' + Hotels[2].price+"/Hr"}</div>
                        </div>
                        {/*  */}
                    </div>
                    <div className="request">
                        <button className="btn" onClick={request}>Request</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Book;