class InllegalNumberException extends Error {
  constructor(message) {
    super(message);
    this.name = "InllegalNumberException";
  }
}

try {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let output = document.querySelector("output");
    let firstNum = document.querySelector("#first-num").value;
    let secondNum = document.querySelector("#second-num").value;
    let operator = document.querySelector("#operator").value;
    // check if input can be converted to number
    if (isNaN(firstNum) || isNaN(secondNum)) {
      throw new InllegalNumberException("Input must be a number"); 
    }
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  });
} catch (e) {
  console.log(e.message);
}

let errorBtns = Array.from(document.querySelectorAll("#error-btns > button"));

// Start your code here

// console log btn
errorBtns[0].addEventListener("click", () => {
  console.log("Console log demo");
});

// console error btn
errorBtns[1].addEventListener("click", () => {
  console.error("Console error demo");
});

// console count btn
errorBtns[2].addEventListener("click", () => {
  console.count("Console count demo");
});

// console warn btn
errorBtns[3].addEventListener("click", () => {
  console.warn("Console warn demo");
});

// console assert btn
errorBtns[4].addEventListener("click", () => {
  console.assert(false, "Console assert demo");
});

// console clear btn
errorBtns[5].addEventListener("click", () => {
  console.clear();
});

// console dir btn
errorBtns[6].addEventListener("click", () => {
  console.dir(document.querySelector("#dir-btn"));
});

// console dirxml btn
errorBtns[7].addEventListener("click", () => {
  console.dirxml(document.querySelector("#dirxml-btn"));
});

// console group start btn
errorBtns[8].addEventListener("click", () => {
  console.group("Console group start demo");
});

// console group end btn
errorBtns[9].addEventListener("click", () => {
  console.groupEnd();
});

// console table btn
errorBtns[10].addEventListener("click", () => {
  console.table([
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
  ]);
});

// console timer start btn
errorBtns[11].addEventListener("click", () => {
  console.time("Console timer start demo");
});

// console timer end btn
errorBtns[12].addEventListener("click", () => {
  console.timeEnd("Console timer end demo");
});

// console trace btn
errorBtns[13].addEventListener("click", () => {
  console.trace("Console trace demo");
});

// console trigger global error btn
errorBtns[14].addEventListener("click", () => {
  console.error("Console error demo");
  console.log("Console log demo");
});

function badFunction() {
  console.log("This function is not gonna work");
  let bad = document.querySelector("#bad-btn");
  console.log(bad.innerHTML);
}

try {
  badFunction();
  if (!document.querySelector("#bad-btn")) {
    throw new Error("No bad button found");
  }
} catch (e) {
  console.error(e);
} finally {
  console.log("This will always run");
}

TrackJS.track('Testing TrackJS!');