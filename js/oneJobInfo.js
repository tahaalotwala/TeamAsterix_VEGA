const page = localStorage.getItem("page");
let rawData = [];
const getData = async () => {
    const data = await fetch("../data/dataset.json");
    rawData = await data.json();
    // console.log(rawData);
};
getData().then(() => {
    // console.log();
    const job = rawData[page - 1];
    let output = `
        <div class="container">
                <div class="title">${job.PositionTitle}</div>

                <div class="section">
                    <div class="section-title">Sector :</div>
                    <div>Health ${job.SectorName}</div>
                </div>

                <div class="section">
                    <div class="section-title">Sub-Sector :</div>
                    <div> ${job.SubSectorName} </div>
                </div>

                <div class="section">
                    <div class="section-title">Salary Range :</div>
                    <div>₹${Math.round(job.WageMin)} - ₹${Math.round(job.WageMax)}</div>
                </div>

                <div class="section">
                    <div class="section-title">Job Description :</div>
                    <div class="jobDesc">
                        <p>
                            ${job.PositionDescription}
                        </p>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">Skills :</div>
                    <div>${job.CandidateExperienceQualificationsSkills}</div>
                </div>

                <div class="section">
                    <div class="section-title">Educational Qualifications Required :</div>
                    <div>${job.EducationRequired}</div>
                </div>

                <div class="section">
                    <div class="section-title">Hours :</div>
                    <div>${job.MinHoursPerWeek}-${job.MaxHoursPerWeek} per week</div>
                </div>

                <div class="section">
                    <div class="section-title">Job Type :</div>
                    <div>${job.PositionType}</div>
                </div>
        </div>
                `;

    console.log(job);

    document.getElementById("jobDescContainer").innerHTML = output;
});
