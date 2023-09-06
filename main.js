//8-Karakter limiti aşımı geçtiğinde her fazla harf kırmızı background olacak

const editableInput = document.querySelector(".editable");
//console.log(editableInput);

const placeHolder = document.querySelector(".placeholder");
//console.log(placeHolder);

const counter = document.querySelector(".counter");

const tweetButton = document.querySelector(".button");

const readonly = document.querySelector(".readonly");

editableInput.onfocus = () => {
  placeHolder.style.color = "#c5ccd3";
};

editableInput.onblur = () => {
  placeHolder.style.color = "#98a5b1";
};

editableInput.onkeypress = (e) => {
  //console.log(e.target.innerText);
  placeHolder.style.display = "none";
  validateTweet(e.target);
};

editableInput.onkeyup = (e) => {
  //placeHolder.style.display = "flex";
  validateTweet(e.target);
};

const validateTweet = (element) => {
  let text;
  let tweetLimit = 22;
  let tweetLengt = element.innerText.length;

  if (tweetLengt <= 0) {
    placeHolder.style.display = "block";
    counter.style.display = "none";
    tweetButton.classList.remove("active");
  } else {
    counter.style.display = "block";
    placeHolder.style.display = "none";
    tweetButton.classList.add("active");
  }

  counter.innerText = tweetLimit - tweetLengt;

  if (tweetLengt > tweetLimit) {
    let overText = element.innerText.substr(tweetLimit, tweetLengt);

    overText = `  <span class="overSpan">${overText}</span> `;

    readonly.style.zIndex = "1";

    text = element.innerText.substr(0, tweetLimit) + overText;

    tweetButton.classList.remove("active");

    counter.style.color = "#e0245e";
  } else {
    counter.style.color = "#333";
  }

  readonly.innerHTML = text;
};
