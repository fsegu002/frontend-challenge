export default function Pagination(objectArr, options) {
    this.limit = options.limit || 10;
    this.numberOfPages = Math.ceil(objectArr.length / this.limit);
    if(options.offset > this.numberOfPages){
        throw Error("Offset is greater than the number of pages available.")
    } else if(options.offset < 1 || typeof options.offset !== 'number'){
        throw Error("Offset cannot be a negative number.")
    }
    this.offset = options.offset || 1;
    this.currentPage = options.offset;
    this.prevPage = (this.currentPage > 1) ? this.currentPage - 1 : null;
    this.nextPage = (this.currentPage < this.numberOfPages) ? this.currentPage + 1 : null;
    this.pageResults = objectArr.slice(calculateOffset.bind(this), this.limit)
}

function calculateOffset() {
    let offset = (this.offset * this.limit) - (this.limit + 1)
    console.log(offset)
    return offset;
}
