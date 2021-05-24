class Transaction {
  constructor(id, title, date, amount) {
    this.id = id;
    this.title = title;
    this.date =
      date ||
      new Date().toLocaleDateString("en-gb", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    this.amount = amount;
  }
}

export default Transaction;
