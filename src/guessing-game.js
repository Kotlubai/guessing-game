class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.left = min
        this.right = max
    }

    guess() {
        this.middle = Math.round((this.right - this.left) / 2) + this.left
        return this.middle
    }

    lower() {
        this.right = this.middle
    }

    greater() {
        this.left = this.middle
    }
}

module.exports = GuessingGame;
