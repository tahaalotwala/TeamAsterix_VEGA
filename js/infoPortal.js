let rawData = [];
let dataToBeDisplayed = [];

export let page = 1;

const images = [
    "https://img.freepik.com/premium-photo/were-team-you-need-full-length-portrait-group-businesspeople-gathered-around-laptop-office_590464-30498.jpg?w=360",
    "https://img.freepik.com/free-photo/financial-adviser-sealing-deal-with-clients-desk-office_662251-10.jpg?t=st=1709727582~exp=1709731182~hmac=1674c6b5b390d18fd56eafadef4dd95880a4fc502359d16c7c97ff8034d5d4c4&w=740",
    "https://img.freepik.com/free-photo/man-working-laptop-information-searching-job-employment-concept_169016-39000.jpg?t=st=1709727601~exp=1709731201~hmac=db23c6f0cda7ec833230e8ef7c6967f97697ec02933bbdbb5c95967ae099aca3&w=360",
    "https://img.freepik.com/free-photo/happy-smiling-businessman-wearing-suit-shaking-female-hand_1163-5388.jpg?t=st=1709727626~exp=1709731226~hmac=2ffb119f80974b2bec04e0951e3006ce2c3f702865296f89910126293c3b0a31&w=360",
    "https://img.freepik.com/free-photo/unrecognizable-man-woman-shaking-hands-meeting-start_1098-17916.jpg?t=st=1709727640~exp=1709731240~hmac=734d2c69e964feb2da2a4a7e4418b6a14d4ef639a575cbeea6ddf56317dbd762&w=360",
    "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-mug-coffee_1340-37805.jpg?w=740",
    "https://img.freepik.com/free-photo/full-shot-modern-business-people_23-2148349954.jpg?t=st=1709727707~exp=1709731307~hmac=d603c68ad3531a13c19a57240e0b6cbe550311c09f66305e1bd492f4efaaddfe&w=360",
    "https://img.freepik.com/free-photo/businesspeople-standing-city-street-shaking-hands_74855-1112.jpg?t=st=1709727728~exp=1709731328~hmac=212a848f7017d95ec38856caea70b401e7077607619d1d0a52b95ef9d0d87bed&w=360",
    "https://img.freepik.com/free-photo/medium-shot-people-shaking-hands_23-2149300663.jpg?t=st=1709727745~exp=1709731345~hmac=6c823b4c2ed9234962e77cc736b692c7008080771bffc86e7da22c6936289869&w=360",
    "https://img.freepik.com/free-photo/confident-good-looking-young-businessman-pointing-finger-while-standing-against-isolated-background_662251-801.jpg?t=st=1709727995~exp=1709731595~hmac=3c75087de06d7dcde26a47f85bc12b8845d0ec85750c3399e6c02faffe7dbf91&w=740",
    // "",
    // "",
    // "",
];

const getData = async () => {
    const data = await fetch("../data/dataset.json");
    rawData = await data.json();
    // console.log(rawData);
};
getData().then(() => {
    dataToBeDisplayed = rawData;
    displayData();
});

document.getElementById("filter").addEventListener("change", function () {
    var selectedOption = this.options[this.selectedIndex].value;

    if (selectedOption == "All Sectors") {
        dataToBeDisplayed = rawData;
        displayData();
        return;
    }

    dataToBeDisplayed = rawData.filter((job) => {
        return job.SectorName === selectedOption;
    });
    displayData();
});

function displayData() {
    let output = "";
    let i = Math.floor(Math.random() * images.length);

    dataToBeDisplayed.forEach((job) => {
        output += `
            <div class="infoCard col-md-3 col-sm-10 px-3 mx-4 my-4" id="infocard-${job.id}">
                <img src="${images[i++ % images.length]}" />
                <div class="infoCardHeader">
                    <div class="position">${job.PositionTitle}</div>
                    <div class="sector">${job.SectorName}</div>
                    <div class="qualification">${job.EducationRequired}</div>
                    <div class="wage">₹${Math.round(job.WageMin)} - ₹${Math.round(job.WageMin)}</div>
                </div>
            </div>
                `;
    });

    document.getElementById("CardRow").innerHTML = output;

    let cards = document.getElementsByClassName("infoCard");
    cards = Array.prototype.slice.call(cards);
    cards.forEach((card) => {
        card.addEventListener("click", function () {
            page = card.id.split("-")[1];
            localStorage.setItem("page", page);
            window.open("/oneJobInfo.html");
        });
    });
}

document.getElementById("searchJob").onclick = function () {
    console.log("Hello");
    const searchTerm = document.getElementById("jobSearchInput").value;
    dataToBeDisplayed = rawData.filter((job) => {
        return job.PositionDescription.includes(searchTerm);
    });
    displayData();
};
