export default function PaginationService(objectArr, options) {
    this.objectArr = objectArr
    this.limit = options.limit || 10;
    this.numberOfPages = Math.ceil(objectArr.length / this.limit);
    if(options.offset > this.numberOfPages){
        throw Error("Offset is greater than the number of pages available.")
    } else if(options.offset < 1 || typeof options.offset !== 'number'){
        throw Error("Offset cannot be a negative number.")
    }
    this.offset = options.offset || 1;
    this.currentPage = options.offset;

    this.calculatePages()

}

PaginationService.prototype.calculatePages = function() {
        this.prevPage = (this.currentPage > 1) ? this.currentPage - 1 : null;
        this.nextPage = (this.currentPage < this.numberOfPages) ? this.currentPage + 1 : null;
        let resultOffset = PaginationService.calculateOffset(this.offset, this.limit)
        this.pageResults = this.objectArr.slice(resultOffset, resultOffset + this.limit)
}

PaginationService.prototype.goToNext = function() {
    if(this.currentPage !== this.numberOfPages) {
        this.currentPage++
        this.offset++
        this.calculatePages()
    }        
}
PaginationService.prototype.goToPrev = function() {
    if(this.currentPage !== 1) {
        this.currentPage--
        this.offset--
        this.calculatePages()
    }
}

PaginationService.calculateOffset = (offset, limit) => {
    return (offset * limit) - (limit - 1)
}