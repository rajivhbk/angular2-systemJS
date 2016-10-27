System.register([], function(exports_1) {
    var EmailValidators;
    return {
        setters:[],
        execute: function() {
            EmailValidators = (function () {
                function EmailValidators() {
                }
                EmailValidators.emailValid = function (control) {
                    if (control.value == '')
                        return null;
                    if (validateEmail(control.value))
                        return null;
                    else {
                        return { emailValidators: true };
                    }
                    function validateEmail(email) {
                        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return re.test(email);
                    }
                };
                return EmailValidators;
            })();
            exports_1("EmailValidators", EmailValidators);
        }
    }
});
//# sourceMappingURL=emailValidators.js.map