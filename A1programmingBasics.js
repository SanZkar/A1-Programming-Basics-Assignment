const hospital = { 
        name: "Oakville City Hospital",
        patients: [
            {
                id: "p1",
                name: "Jake Damon",
                dateOfBirth: "1998/06/27",
                symptoms: [
                    "Fever",
                    "Yellow eyes",
                    "Shortness of breath"
                ]
            },

            {
                id: "p2",
                name: "Mia Jacobs",
                dateOfBirth: "1995/06/10",
                symptoms: [
                    "Headache",
                    "Fatigue",
                    "Blurred vision"
                ]
            },

            {
                id: "p3",
                name: "Liam Smith",
                dateOfBirth: "2000/12/15",
                symptoms: [
                    "Fever",
                    "Vomiting",
                    "Diarrhea"
                ]
            }
        ]
};
    


function showPatient(hospital) {
    let output = "<h1>" + hospital.name + "</h1>";
    for (let i = 0; i < hospital.patients.lenght; i++) {
        let patient = hospital.patients[i];
        output += "<h2>" + patient.name + "," + patient.dateOfBirth + "</h2>";
        output += "<ul>";

        for (let j = 0; j < patient.symptoms.lenght; j++) {
            output += "<li>" + patient.symptoms[j] + "</li>";

        }
        output += "</ul>";
    }
    return output;
}

console.log(showPatient(hospital));
document.body.innerHTML = showPatient(hospital);


function getPatient(patients) {
    let random = Math.floor(Math.random() * patients.length);
    return patients[random].id;
}

console.log(getPatient(hospital.patients));




