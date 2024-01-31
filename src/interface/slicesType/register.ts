export interface RegisterState {
  items: [];
  otp:"",
  status: "idle" | "loading" | "failed";
  login:[]

}
export interface RegisterItem {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

