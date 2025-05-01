export class TextTyper {
    constructor(textSelector, phrases, typingSpeed = 100, erasingSpeed = 50, delayBetweenPhrases = 1500) {
        this.textElement = document.querySelector(textSelector);
        this.phrases = phrases;
        this.typingSpeed = typingSpeed;
        this.erasingSpeed = erasingSpeed;
        this.delayBetweenPhrases = delayBetweenPhrases;
        this.currentPhrase = 0;
        this.currentChar = 0;
        this.isDeleting = false;

        if (this.textElement) {
            this.type();
        }
    }

    type() {
        const phrase = this.phrases[this.currentPhrase];

        if (this.isDeleting) {
            this.textElement.textContent = phrase.substring(0, this.currentChar--);
        } else {
            this.textElement.textContent = phrase.substring(0, this.currentChar++);
        }

        let nextStepSpeed = this.typingSpeed;

        if (!this.isDeleting && this.currentChar === phrase.length) {
            this.isDeleting = true;
            nextStepSpeed = this.delayBetweenPhrases;
        } else if (this.isDeleting && this.currentChar === 0) {
            this.isDeleting = false;
            this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length;
            nextStepSpeed = this.typingSpeed;
        } else {
            nextStepSpeed = this.isDeleting ? this.erasingSpeed : this.typingSpeed;
        }

        setTimeout(() => this.type(), nextStepSpeed);
    }
}
