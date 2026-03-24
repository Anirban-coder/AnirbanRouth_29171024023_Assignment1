function totalMarks(...marks) {
    return marks.reduce((sum, m) => sum + m, 0);
}

console.log(totalMarks(80, 70, 90));