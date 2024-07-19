let book={
    title: "rangde basanti",
    author: "Basanti",
    year: 2024,
    getDetails:function(){
        return `Title: ${this.title}, Author: ${this.author}`;
    },
    updateDate:function(newYear){
        this.year = newYear;
        console.log(this.year);
    },
    printAllDetails:function(){
        return `${this.title} by ${this.author} published on ${this.year}`;
    }
}

console.log(book);
console.log(book.title);
console.log(book.getDetails());
book.updateDate(2025);
console.log(book.year);
console.log( book.printAllDetails());

for(keys in book){
    console.log(`${keys}: ${book[keys]}`);
}


