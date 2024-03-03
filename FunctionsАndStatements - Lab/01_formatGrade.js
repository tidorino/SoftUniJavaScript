function formatGrade(grade) {
    grade = grade.toFixed(2);
   
    if (grade < 3) {
        console.log('Fail (2)');
    } else if ( grade < 3.5) {
        console.log(`Poor (${grade})`);
    } else if ( grade < 4.5) {
        console.log(`Good (${grade})`);
    } else if ( grade < 5.5) {
        console.log(`Very good (${grade})`);
    } else if ( 5.5 <= grade) {
        console.log(`Excellent (${grade})`); 
    }  
}

formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);
