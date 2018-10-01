(function () {

    // Made deposit, withdraw, and balance buttons
    var accountButtons = document.getElementsByClassName("accounts");
    accountButtons[0].addEventListener("click", clearScreen);
    accountButtons[2].addEventListener("click", depositCash);
    accountButtons[3].addEventListener("click", withdrawCash);
    accountButtons[1].addEventListener("click", balanceCash);

    // Deposit number on the screen
    function depositCash() {
        var num = parseFloat(document.getElementById("calScreen").innerHTML);
        accountModule.desposit(num);
    }

    // Withdraw the number on the screen
    
    function withdrawCash() {
        var num = parseFloat(document.getElementById("calScreen").innerHTML);
        accountModule.widthdraw(num);
    }

      // Shows balance
      
})();