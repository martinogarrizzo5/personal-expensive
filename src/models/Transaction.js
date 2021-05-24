import { v4 as uuid4 } from "uuid";

class Transaction {
  constructor(title, amount, date) {
    this.id = uuid4();
    this.title = title;
    this.amount = amount;
    this.date = date.toLocaleDateString("en-gb", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
}

export default Transaction;
