let subs: number | string = 10;
subs = "10";

let apiRequestStatus: "pending" | "success" | "error" = "pending";
apiRequestStatus = "success";
// apiRequestStatus = "ayush"

let airlineSeat: "aisle" | "window" | "middle" = "aisle";
airlineSeat = "window";

const orders = ["8", "12", "16", "20", "24"];

let currentorders: string | undefined;

for (let order of orders) {
  if (order == "20") {
    currentorders = order;
    break;
  }
}
console.log(currentorders);
