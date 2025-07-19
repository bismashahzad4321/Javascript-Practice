// Create a Book class with title, author, and price

// class book {
//     constructor(title, author, price) {
//         this.title = title;
//         this.author = author;
//         this.price = price;
//     }
//     get bookData() {
//         console.log(this.title + this.author + this.price);
//     }
// };

// const newClass = new book("Maths ", "Bisma Sheikh ", " 1500Rs ");
// newClass.bookData;


// class discount {
//     constructor(originalPrice, discountPrice, finalPrice,discountAmount) {
//         this.originalPrice = originalPrice;
//         this.discountPrice = discountPrice;
//         this.finalPrice = finalPrice
//         this.discountAmount=discountAmount;
//     };
//     get getDiscountPrice() {
//          this.discountAmount=(this.originalPrice*this.discountPrice)/100;
//          return this.finalPrice= this.originalPrice-this.discountAmount

//     }
// }
// const newValue=new discount(1000,20,0);
// console.log(newValue.getDiscountPrice)





// Create a Book class with title, author, and price

// class book {
//     constructor(title, author, price, originalPrice, discountPrice, finalPrice, discountAmount) {
//         this.title = title;
//         this.author = author;
//         this.price = price;
//         this.originalPrice = originalPrice;
//         this.discountPrice = discountPrice;
//         this.finalPrice = finalPrice
//         this.discountAmount = discountAmount;
//     }
//     get bookData() {
//         console.log(this.title + this.author + this.price);
//     }
//     get getDiscountPrice() {
//         this.discountAmount = (this.originalPrice * this.discountPrice) / 100;
//         return this.finalPrice = this.originalPrice - this.discountAmount

//     }
// };
// const newValue=new book("Maths ", "Bisma Sheikh ", " 1500Rs ",1000,20,0);
// console.log(newValue.getDiscountPrice);
// const newClass = new book("Maths ", "Bisma Sheikh ", " 1500Rs ");
// newClass.bookData;


class bookAndDiscount {
    constructor(title, author, price, originalPrice, discountPrice, finalPrice, discountAmount) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.originalPrice = originalPrice;
        this.discountPrice = discountPrice;
        this.finalPrice = finalPrice
        this.discountAmount = discountAmount;
    };
    get bookData(){
        console.log(this.title, this.author, this.price,);
    }
    get getDiscountPrice(){
            this.discountAmount = (this.originalPrice * this.discountPrice) / 100;
        return this.finalPrice = this.originalPrice - this.discountAmount
    }
};
const newBookAndDiscount=new bookAndDiscount("Maths", "Bisma Sheikh" , "1500" , 1500, 10, 0,0);
newBookAndDiscount.bookData;
const newBookAndDiscountPrice=new bookAndDiscount("Maths", "Bisma Sheikh" , "1500" , 1500, 10, 0,0);
console.log(newBookAndDiscountPrice.getDiscountPrice);
