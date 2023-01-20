class PaymentStage {
  constructor() {
    let currentState = new personalInfo();

    this.init = function () {
      this.change(new personalInfo());
    };

    this.change = function (state) {
      currentState = state;
    };
  }
}

// Personal Info state
const personalInfo = function () {
  document.querySelector(".container").innerHTML = `
    <h1>Complete your Purchase</h1>
    <div class="stages">
      <p id="person-info" class="current-slide">Personal Info</p>
      <p id="billng-info">Billing Info</p>
      <p>Confirm Payment</p>
    </div>

    <form action="">
      <div class="form-group">
        <label for="">Name</label>
        <input type="text" name="name" id="name" placeholder="Opara Linus Ahmed">
      </div>

      <div class="form-group">
        <label for="" class="compulsory">Email Address</label>
        <small>The purchase receipt would be sent to this address</small>
        <input type="text" name="name" id="name" placeholder="OparaLinusAhmed@devmail.com">
      </div>

      <div class="form-group">
        <label for="">Address 1</label>
        <input type="text" name="name" id="name" placeholder="The address of the user goes here">
      </div>

      <div class="form-group">
        <label for="">Address 2</label>
        <input type="text" name="name" id="name" placeholder="and here">
      </div>

      <div class="form-group form-group-row">

        <div class="form-group local-government">
          <label for="">Local Government</label>
          <input type="text" name="name" id="name" placeholder="Surulere">
        </div>
        
        <div class="form-group state">
          <label for="">State</label>
          <select name="state" id="" >
            <option value="">Lagos</option>
            <option value="">Lagos</option>
            <option value="">Lagos</option>
            <option value="">Lagos</option>
          </select>
        </div>

      </div>

      <div class="button-1">
        <a href=#" class="btn btn-light t-bold button1">Next</a>

        <div class = "cancel-payment"> 
          <a href="#" class="btn t-bold">Cancel Payment</a>
        </div>
      </div>
    </form>
  `;
};

// Billing info state
const billingInfo = function () {
  document.querySelector(".container").innerHTML = `
    <h1>Complete your Purchase</h1>
    <div class="stages">
      <p>Personal Info</p>
      <p class="current-slide current-slide-b">Billing Info</p>
      <p>Confirm Payment</p>
    </div>


    <form action="">
      <div class="form-group">
        <label>Name on Card</label>
        <input type="text" name="card-name" id="card-name" placeholder="Opara Linus Ahmed">
      </div>

      <div class="form-group">
        <label class="compulsory">Card Type</label>
        <select name="" id="">
          <option value="">Visa</option>
          <option value="">Mastercard</option>
        </select>
      </div>
      
      <div class="form-group form-group-row">

        <div class="form-group card-number">
          <label class="compulsory">Card Details</label>
          <input type="text" name="" id="card-number" maxlength="16" placeholder="44960       44960         44960      44960">
        </div>

        <div class="form-group expiry-date">
          <label class="compulsory">Expiry Date</label>
          <input type="text" name="" id="expiry-date" placeholder="04   /   23">
        </div>

        <div class="form-group cvv">
          <label class="compulsory">CVV</label>
          <input type="text" name="" id="cvv" placeholder="923">
        </div>
      </div>

      <div class="button-2">
        <a href=#" class="btn btn-light t-bold">Next</a>

        <div class = "cancel-payment"> 
          <a href="#" class="btn t-bold">Cancel Payment</a>
        </div>
      </div>
    </form>
  `;
};

// Confirm payment state
const confirmPayment = function () {
  document.querySelector(".container").innerHTML = `
      <h1>Complete your Purchase</h1>
      <div class="stages">
        <p>Personal Info</p>
        <p>Billing Info</p>
        <p class="current-slide current-slide-c">Confirm Payment</p>
      </div>

      <div id="invoice-card">
        <div class="invoice-table-head">
          <p>Item Name</p>
          <i class="fa-solid fa-naira-sign"><span> Price</span></i>
        </div>

        <div class="invoice-table-content">
          <div class="table-content">
            <p class="item">Data Science and usability</p>
            <p class="price t-bold">50,000.00</p>
          </div>
          
          <div class="table-content">
            <p class="item">Shipping</p>
            <p class="shipping">0.00</p>
          </div>

          
        </div>
        
        <hr>

        <div class="invoice-total">
          <p class="total-txt">Total</p>
          <p class="total-price">50,000.000</p>
        </div>
      </div>

      <div class="button-3">
        <a href=#" class="btn btn-light t-bold">Pay</a>


        <div class = "cancel-payment"> 
          <a href="#" class="btn t-bold">Cancel Payment</a>
        </div>
      </div>
  `;
};

// Payment complete state
const paymentComplete = function(mainSection){

  mainSection = document.querySelector("#main");

  mainSection.className = "d-flex-col";

  mainSection.innerHTML = `
      <div class="success-card">
        <div class="success-items">

          <div class="success-circle-container">
            <div class="success-circle"><i class="fa-solid fa-check fa-3x"></i></div>
          </div>
          <h1 class="success-text">Purchase Completed</h1>
          <p>Please check your email for details concerning <br> this transaction</p>
          
          <div class="return-home-button">
            <a href="#" class="return-home">Return Home</a>
          </div>
        </div>
      </div>
  `;
}



// Main section
const mainSection = document.querySelector("#main");

// Html Container div
const htmlContainer = document.querySelector('.container');


// Initializing Payment Stages State Pattern 
const page = new PaymentStage();

// Initializing first payment slide
page.init();


// Payment stages event listener
htmlContainer.addEventListener('click', changeSlide);
mainSection.addEventListener('click', returnHome);





// Slider function
function changeSlide(e){

  if(e.target.parentElement.classList.contains('button-1')){
    page.change(new billingInfo());
  }
  else if(e.target.parentElement.classList.contains('button-2')){
    page.change(new confirmPayment());
  }
  else if(e.target.parentElement.classList.contains('button-3')){
    page.change(new paymentComplete(mainSection));
  }
  else if(e.target.parentElement.classList.contains('cancel-payment')){
    page.init();
  }
}

function returnHome(e){
  console.log(e.target)
  if(e.target.parentElement.classList.contains('return-home-button')){
    window.location.reload()
  }
}


