/// Create two interfaces MajorCredits and MinorCredits

interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}
/// Add a brand property to each interface in order to uniquely identify each of them
MajorCredits.brand = "Major";
MinorCredits.brand = "Minor";

/// Create two functions named sumMajorCredits and sumMinorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
  return subject.credits = subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
  return subject1.credits + subject2.credits;
}
