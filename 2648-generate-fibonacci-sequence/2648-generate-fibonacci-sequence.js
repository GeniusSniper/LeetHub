/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    yield 0;
    yield 1;
    this.first = 0;
    this.second = 1;
    while(true){
        this.result = this.first + this.second;
        this.first = this.second;
        this.second = this.result;
        yield this.result;
    }    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */