const getListStudentIds = (newArray) => {
  if (!Array.isArray(newArray)) {
    return [];
  }
  return newArray.map((studentId) => studentId.id);
};

export default getListStudentIds;
