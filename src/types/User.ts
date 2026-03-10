type User = {
  id: number;
  name: string;
  email: string;
  // password: string;
  satisfaction_score: number;
  rating_count: number;
  phoneNumber: string;
  gender: "male" | "female" | "other";
  dob: string;
  address: string;
  member: "null" | "new" | "mem" | "vip";
};
export default User;
