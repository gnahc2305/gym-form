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