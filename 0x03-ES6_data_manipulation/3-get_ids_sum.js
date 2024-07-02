export default function getStudentIdsSum(list) {
    if (list instanceof Array){
        return list.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);   
    }
}
