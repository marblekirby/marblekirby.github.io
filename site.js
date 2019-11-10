
(function() {
    let userinput = document.getElementById('user-input');

    userinput.focus();

    userinput.addEventListener("keyup", event => {
        console.log(event.keyCode);
        if(event.keyCode == 13) {
            var main = document.getElementById('window');
            var input = document.getElementById('user-input');
            if(input && main) {
                var divInput = document.getElementById('div-user-input');
                let a = document.createElement(`span`);
                a.textContent = `${input.value}`;
                main.insertBefore(a, divInput);
                input.value = '';
                input.focus();
            }
            //todo scroll
        }
      });
})();
