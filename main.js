for (var i = 1; i < product.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${product[i].PositionTitle}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${product[i].PositionTitle}</option>
    `;
}

function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
        
        document.getElementById("title1").innerHTML = product[a].PositionTitle
        document.getElementById("sector1").innerHTML = product[a].SectorName
        document.getElementById("subsector1").innerHTML = product[a].SubSectorName
        document.getElementById("min1").innerHTML = product[a].WageMin
        document.getElementById("max1").innerHTML = product[a].WageMax
        document.getElementById("description1").innerHTML = product[a].PositionDescription
        document.getElementById("req1").innerHTML = product[a].CandidateExperienceQualificationsSkills
        document.getElementById("skills1").innerHTML = product[a].EducationRequired
        document.getElementById("hours1").innerHTML = product[a].MinHoursPerWeek

    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("title1").innerHTML = product[a].PositionTitle
        document.getElementById("sector1").innerHTML = product[a].SectorName
        document.getElementById("subsector1").innerHTML = product[a].SubSectorName
        document.getElementById("min1").innerHTML = product[a].WageMin
        document.getElementById("max1").innerHTML = product[a].WageMax
        document.getElementById("description1").innerHTML = product[a].PositionDescription
        document.getElementById("req1").innerHTML = product[a].CandidateExperienceQualificationsSkills
        document.getElementById("skills1").innerHTML = product[a].EducationRequired
        document.getElementById("hours1").innerHTML = product[a].MinHoursPerWeek
        

    }
}

function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
        document.getElementById("title2").innerHTML = product[a].PositionTitle
        document.getElementById("sector2").innerHTML = product[a].SectorName
        document.getElementById("subsector2").innerHTML = product[a].SubSectorName
        document.getElementById("min2").innerHTML = product[a].WageMin
        document.getElementById("max2").innerHTML = product[a].WageMax
        document.getElementById("description2").innerHTML = product[a].PositionDescription
        document.getElementById("req2").innerHTML = product[a].CandidateExperienceQualificationsSkills
        document.getElementById("skills2").innerHTML = product[a].EducationRequired
        document.getElementById("hours2").innerHTML = product[a].MinHoursPerWeek
       
    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("title2").innerHTML = product[a].PositionTitle
        document.getElementById("sector2").innerHTML = product[a].SectorName
        document.getElementById("subsector2").innerHTML = product[a].SubSectorName
        document.getElementById("min2").innerHTML = product[a].WageMin
        document.getElementById("max2").innerHTML = product[a].WageMax
        document.getElementById("description2").innerHTML = product[a].PositionDescription
        document.getElementById("req2").innerHTML = product[a].CandidateExperienceQualificationsSkills
        document.getElementById("skills2").innerHTML = product[a].EducationRequired
        document.getElementById("hours2").innerHTML = product[a].MaxHoursPerWeek
        

    }
}