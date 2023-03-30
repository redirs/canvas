let useragent = window.navigator.userAgent;
if (!useragent.includes("CrOS")) {
    window.location.replace("https://delran.instructure.com");
} else {
    let submitbutton = document.getElementById("submitbutton");

    function convert(input) {
        let output = "";
        for (var i = 0; i < input.length; i++) {
            output += input[i].charCodeAt(0).toString(2) + " ";
        }
        return output;
    }

    function setCookie(cname, cvalue, exmin) {
        const d = new Date();
        d.setTime(d.getTime() + (exmin * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    submitbutton.addEventListener("click", () => {
        let input = document.getElementById("input");
        let passwords = ["1110111 1100101 1101100 1101111 1110110 1100101 1110011 1100101 1101110 1101001 1101111 1110010 1110011 110001 110010 110011 "];
        if (passwords.includes(convert(input.value.toString().toLowerCase()))) {
            setCookie("passcheck", "yes", 60);
            window.location.replace("https://ubg102.github.io/tetris/mainindex.html");
        } else {
            let errors = ["nope", "wrong", "wrong wrong wrong", "nah", "no", "are you an impostor?", "lol no", "*dies inside* no"];
            let index = Math.floor(Math.random() * errors.length);
            document.getElementById("errortext").innerHTML = errors[index];
        }
    });
}
