const workout_slector = document.getElementById('workout');
const apply_btn = document.getElementById('applyBtn');
const firstExercise = document.getElementById('exerciseOne');
const secondExercise = document.getElementById('exerciseTwo');
const thirdExercise = document.getElementById('exerciseThree');
const fourthExercise = document.getElementById('exerciseFour'); 
const fifthExercise = document.getElementById('exerciseFive');


apply_btn.addEventListener('click', () => {
    switch (workout_slector.value) {
        case 'push':
            firstExercise.value = 'mChestPress';
            secondExercise.value = 'skullCrushers';
            thirdExercise.value = 'overheadPressD';
            fourthExercise.value = 'lateralRaises';
            fifthExercise.value = 'rearDelts';
            break;
        case 'legs':
            firstExercise.value = 'legExtension';
            secondExercise.value = 'legCurl';
            thirdExercise.value = 'walkingLunges';
            fourthExercise.value = 'bulgarianSquat';
            fifthExercise.value = 'dumbellSquats';
            break;
        case 'pull':
            firstExercise.value = 'bicepCurl';
            secondExercise.value = 'latPulldown';
            thirdExercise.value = 'standingCableRow';
            fourthExercise.value = 'seatedRow';
            fifthExercise.value = 'tricepPushdown';
            break;
    }
})


// save data on a textfile

let saveFile = () => {
    const workout = document.getElementById('workout');
    const date = document.getElementById('date');
    const exerciseOne = document.getElementById('exerciseOne');
    const weight1 = document.getElementById('inputOne');
    const exerciseTwo = document.getElementById('exerciseTwo');
    const weight2 = document.getElementById('weight2');
    const exerciseThree = document.getElementById('exerciseThree');
    const weight3 = document.getElementById('inputTwo');
    const exerciseFour = document.getElementById('exerciseFour'); 
    const weight4 = document.getElementById('weight4');
    const exerciseFive = document.getElementById('exerciseFive');
    const weight5 = document.getElementById('weight5');
    const comment = document.getElementById('comment');


    let data = 
        '\r Workout: ' + workout.value + ' \r\n ' +
        'Date: ' + date.value + ' \r\n ' +
        'Exercise One: ' + exerciseOne.value + ' \r\n ' +
        'Weight: ' + weight1.value + ' \r\n ' +
        'Exercise Two: ' + exerciseTwo.value + ' \r\n ' +
        'Weight: ' + weight2.value + ' \r\n ' +
        'Exercise Three: ' + exerciseThree.value + ' \r\n ' +
        'Weight: ' + weight3.value + ' \r\n ' +
        'Exercise Four: ' + exerciseFour.value + ' \r\n ' +
        'Weight: ' + weight4.value + ' \r\n ' +
        'Exercise Five: ' + exerciseFive.value + ' \r\n ' +
        'Weight: ' + weight5.value + ' \r\n ' +
        'Extra Comment: ' + comment.value;

        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'GymData' + date.value + '.txt'; 

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
}
