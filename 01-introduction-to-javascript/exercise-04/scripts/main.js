function getStudyExperience(years) {
    if (years <= 1)
        return 'Iniciante';
    else if (years <= 3)
        return 'Intermediario';
    else if (years <= 6)
        return 'Avançado';
    else
        return 'Jedi Master';
}

console.log(getStudyExperience(7));
