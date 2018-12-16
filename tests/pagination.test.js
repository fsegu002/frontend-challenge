import { expect } from 'chai';
import Pagination from '../src/components/pagination';

let arr = [];
before(() => {
    for(let i=0; i<120; i++){
        arr.push({id: i, name: 'Object number ' + i})
    }
})

describe('Pagination', () => {
    it('should instantiate Pagination object', () => {
        let options = {
            offset: 3,
            limit: 10
        }
        let pag = new Pagination(arr, options );

        expect(pag).to.be.instanceOf(Pagination)
    })
    it('should have 6 pages when passing 120 results and a limit of 20 per page', () => {
        let options = {
            offset: 3,
            limit: 20
        }
        let pag = new Pagination(arr, options );

        expect(pag.numberOfPages).to.equal(6);
    })
    it('should not have a previous page when currentPage is 1', () => {
        let options = {
            offset: 1,
            limit: 10
        }
        let pag = new Pagination(arr, options );
        expect(pag.prevPage).to.equal(null)
    })
    it('should not have a next page when currentPage is the last page', () => {
        let options = {
            offset: 12,
            limit: 10
        }
        let pag = new Pagination(arr, options );
        expect(pag.nextPage).to.equal(null)
    })
    it('should throw an error when offset is over the range of pages', () => {
        let options = {
            offset: 15,
            limit: 10
        }
        expect(() => new Pagination(arr, options )).to.throw("Offset is greater than the number of pages available.");
    })
})