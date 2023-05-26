// Superclass
class Testimonial {
  #quote = "";
  #image = "";

  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }

  get quote() {
    return this.#quote;
  }

  get image() {
    return this.#image;
  }

  get author() {
    throw new Error("getAuthor() method must be implemented");
  }

  get testimonialHTML() {
    return `<div class="testimonial">
        <img
            src="${this.image}"
            class="profile-testimonial"
        />
        <p class="quote">${this.quote}</p>
        <p class="author">- ${this.author}</p>
    </div>
`;
  }
}

// SubClass

class AuthorTestimonials extends Testimonial {
  #author = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

class CompanyTestimonials extends Testimonial {
  #company = "";

  constructor(company, quote, image) {
    super(quote, image);
    this.#company = company;
  }

  get author() {
    return this.#company + " Company";
  }
}

const testi1 = new AuthorTestimonials("Rai rai", "keren cuyyy", "https://pbs.twimg.com/media/FseC4rRaYAEIrU8?format=jpg&name=large");
const testi2 = new AuthorTestimonials("Rai rai", "keren cuyyy", "https://pbs.twimg.com/media/FseC4rRaYAEIrU8?format=jpg&name=large");
const testi3 = new AuthorTestimonials("Rai rai", "keren cuyyy", "https://pbs.twimg.com/media/FseC4rRaYAEIrU8?format=jpg&name=large");

let testiData = [testi1, testi2, testi3];
let testimonialHTML = "";

for (let i = 0; i < testiData.length; i++) {
  testimonialHTML += testiData[i].testimonialHTML;
}

document.getElementById("testimonials").innerHTML = testimonialHTML;
