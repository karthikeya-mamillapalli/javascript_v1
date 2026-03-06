let employyeobj = {
  name: "karthik",
  empid: 12,
  email: "karthi.mamilla@gmail.com",
  address: {
    city: "hyderabad",
    state: "ap",
    pincode: "500090",
    permanant: {
      city: "mumbai",
      state: "karnatak",
    },
  },
  conatct: [99090898909, 902323232323],
  isActive: true,
};
var emparr = [
  { name: "badhsah", city: "hyd", contact: "001012111" },
  { name: "basddhsah", city: "hyd", contact: "8010121711" },
  { name: "badgggjgjhsah", city: "hyd", contact: "740121585851" },
];
console.log(employyeobj.address.permanant.city);
(console.log(emparr[1].contact),
  console.log(
    emparr.push({ name: "mohini", city: "bombay", contact: "9011212" }),
  ));
console.log(
  emparr.unshift({
    name: "madagad",
    city: "bombayiii",
    contact: "901121442",
    state: "karnatak",
  }),
);
emparr.push("kkk");
console.log(emparr);
console.table(emparr);
