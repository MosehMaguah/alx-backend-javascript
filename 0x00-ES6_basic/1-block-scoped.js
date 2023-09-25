export default function taskBlock(trueOrFalse) {
  const var task = false;
  const var task2 = true;

  if (trueOrFalse) {
    const var task = true;
    const var task2 = false;
  }

  return [task, task2];
}
